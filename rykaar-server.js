'use strict';

// Local Gemini proxy for the Rykaar static site. The API key is never served to the browser.
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Pool } = require('pg');

const PORT = Number(process.env.PORT || 4178);
const HOST = process.env.HOST || (process.env.DATABASE_URL ? '0.0.0.0' : '127.0.0.1');
const PAGE = path.join(__dirname, 'Rykaar-Official-site.html');
const PASSCODE_FILE = path.join(__dirname, '.rykaar-admin-passcode.json');
const isLoopback = HOST === '127.0.0.1' || HOST === 'localhost' || HOST === '::1';
let adminPasscode = process.env.RYKAAR_ADMIN_PASSCODE || (isLoopback ? 'admin' : '');
let adminPasscodeHash = null;
if (!process.env.RYKAAR_ADMIN_PASSCODE && isLoopback) {
  try { adminPasscodeHash = JSON.parse(fs.readFileSync(PASSCODE_FILE, 'utf8')); adminPasscode = ''; }
  catch { /* First local run uses the site's default admin passcode. */ }
}
let apiKeyOverride = null;
let keyDisabled = false;
let settings = {
  model: 'gemini-3.8-flash',
  title: 'Chat with Rykaar',
  greeting: 'Welcome to Rykaar. How can we help you today?',
  instructions: "You are Rykaar Official's helpful virtual assistant. Help visitors with Rykaar Real Estate, Rykaar Jewellers, Rykaar One business consultancy, and Rykaar Resorts. Do not invent prices, availability, or company policies. For verified details, direct visitors to 8618884588 or rykaarofficial@gmail.com."
};
const rateLimits = new Map();
const sessions = new Map();
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_SSL === 'disable' ? false : { rejectUnauthorized: false }, max: 5 }) : null;

async function initializeDatabase() {
  if (!pool) return;
  await pool.query(`CREATE TABLE IF NOT EXISTS rykaar_site_state (key text PRIMARY KEY, value jsonb NOT NULL, updated_at timestamptz NOT NULL DEFAULT now())`);
  await pool.query(`CREATE TABLE IF NOT EXISTS rykaar_site_assets (key text PRIMARY KEY, content_type text NOT NULL, file_name text NOT NULL DEFAULT '', data bytea NOT NULL, updated_at timestamptz NOT NULL DEFAULT now())`);
  await pool.query(`CREATE TABLE IF NOT EXISTS rykaar_site_records (id text PRIMARY KEY, kind text NOT NULL, payload jsonb NOT NULL, created_at timestamptz NOT NULL DEFAULT now())`);
}

function getSession(req) {
  const raw = req.headers.cookie || '';
  const match = raw.match(/(?:^|;\s*)rykaar_admin=([a-f0-9]+)/);
  if (!match) return false;
  const expiry = sessions.get(match[1]);
  if (!expiry || expiry < Date.now()) { sessions.delete(match[1]); return false; }
  sessions.set(match[1], Date.now() + 12 * 60 * 60 * 1000);
  return true;
}

function requireAdmin(req, res) {
  if (!getSession(req)) { sendJson(res, 401, { error: 'Please sign in to the admin panel again.' }); return false; }
  return true;
}

function safeStateKey(key) { return typeof key === 'string' && /^rykaar_[a-z0-9_]{1,80}$/.test(key) && !['rykaar_admin_pass', 'rykaar_gemini_settings'].includes(key); }

async function readSiteState(isAdmin) {
  if (!pool) return {};
  const result = await pool.query('SELECT key, value FROM rykaar_site_state');
  const state = Object.fromEntries(result.rows.map(row => [row.key, row.value]));
  if (!isAdmin) { delete state.rykaar_leads; delete state.rykaar_careers; }
  return state;
}

async function saveStateKey(key, value) {
  await pool.query('INSERT INTO rykaar_site_state(key,value,updated_at) VALUES($1,$2::jsonb,now()) ON CONFLICT(key) DO UPDATE SET value=EXCLUDED.value, updated_at=now()', [key, JSON.stringify(value)]);
}

function getApiKey() {
  if (keyDisabled) return '';
  return apiKeyOverride || process.env.GEMINI_API_KEY || '';
}

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(JSON.stringify(data));
}

function readJson(req, limit = 30000) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (Buffer.byteLength(body) > limit) {
        reject(Object.assign(new Error('Request is too large.'), { status: 413 }));
        req.destroy();
      }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch { reject(Object.assign(new Error('Invalid request.'), { status: 400 })); }
    });
    req.on('error', reject);
  });
}

function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  try { return new URL(origin).host === req.headers.host; }
  catch { return false; }
}

function publicStatus() {
  return { connected: Boolean(getApiKey()), model: settings.model, title: settings.title, greeting: settings.greeting, instructions: settings.instructions };
}

function authorized(req, body) {
  if (!isLoopback && !process.env.RYKAAR_ADMIN_PASSCODE) return false;
  if (adminPasscodeHash && body.adminPasscode) {
    try {
      const salt = Buffer.from(adminPasscodeHash.salt, 'hex');
      const expected = Buffer.from(adminPasscodeHash.hash, 'hex');
      const actual = crypto.scryptSync(String(body.adminPasscode), salt, expected.length);
      return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
    } catch { return false; }
  }
  return Boolean(adminPasscode) && body.adminPasscode === adminPasscode;
}

function checkRateLimit(req) {
  const ip = req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const recent = (rateLimits.get(ip) || []).filter(t => now - t < 60000);
  if (recent.length >= 20) return false;
  recent.push(now); rateLimits.set(ip, recent); return true;
}

async function handleChat(req, res) {
  if (!sameOrigin(req)) return sendJson(res, 403, { error: 'Chat request origin was not accepted.' });
  if (!checkRateLimit(req)) return sendJson(res, 429, { error: 'Please wait a moment before sending another message.' });
  const apiKey = getApiKey();
  if (!apiKey) return sendJson(res, 503, { error: 'Rykaar Gemini chat is not connected yet. The site administrator can connect it in Admin CMS → Gemini Chat.' });
  let body;
  try { body = await readJson(req, 30000); }
  catch (e) { return sendJson(res, e.status || 400, { error: e.message }); }
  const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  const contents = messages.map(m => ({ role: m.role === 'model' ? 'model' : 'user', parts: [{ text: String(m.text || '').slice(0, 2000) }] })).filter(m => m.parts[0].text.trim());
  if (!contents.length) return sendJson(res, 400, { error: 'Type a message to start chatting.' });
  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(settings.model)}:generateContent`;
    const apiResponse = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: settings.instructions }] },
        contents,
        generationConfig: { maxOutputTokens: 700, temperature: 0.6 }
      }),
      signal: AbortSignal.timeout(45000)
    });
    const result = await apiResponse.json().catch(() => ({}));
    if (!apiResponse.ok) {
      const message = result.error && result.error.message ? result.error.message : `Gemini returned HTTP ${apiResponse.status}.`;
      return sendJson(res, 502, { error: message.slice(0, 500) });
    }
    const reply = (result.candidates || []).flatMap(c => c.content && c.content.parts || []).map(p => p.text || '').join('').trim();
    if (!reply) return sendJson(res, 502, { error: 'Gemini did not return a text reply. Please try again.' });
    sendJson(res, 200, { reply });
  } catch (e) {
    sendJson(res, 502, { error: e.name === 'TimeoutError' ? 'Gemini took too long to respond. Please try again.' : 'Could not reach Gemini. Check the server connection and try again.' });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || '127.0.0.1'}`);
  if (req.method === 'GET' && url.pathname === '/api/deployment') return sendJson(res, 200, { sharedStorage: Boolean(pool) });
  if (req.method === 'POST' && url.pathname === '/api/admin/login') {
    if (!sameOrigin(req)) return sendJson(res, 403, { error: 'Login request origin was not accepted.' });
    let body;
    try { body = await readJson(req, 4000); } catch (e) { return sendJson(res, e.status || 400, { error: e.message }); }
    if (!authorized(req, body)) return sendJson(res, 403, { error: 'The admin passcode did not match.' });
    const token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, Date.now() + 12 * 60 * 60 * 1000);
    const secure = req.headers['x-forwarded-proto'] === 'https' ? '; Secure' : '';
    res.setHeader('Set-Cookie', `rykaar_admin=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=43200${secure}`);
    return sendJson(res, 200, { authenticated: true });
  }
  if (req.method === 'POST' && url.pathname === '/api/admin/logout') {
    const raw = req.headers.cookie || ''; const match = raw.match(/(?:^|;\s*)rykaar_admin=([a-f0-9]+)/);
    if (match) sessions.delete(match[1]);
    res.setHeader('Set-Cookie', 'rykaar_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
    return sendJson(res, 200, { loggedOut: true });
  }
  if (req.method === 'GET' && url.pathname === '/api/site/state') {
    if (!pool) return sendJson(res, 404, { error: 'Shared site storage is not configured.' });
    try { return sendJson(res, 200, await readSiteState(getSession(req))); }
    catch (e) { return sendJson(res, 500, { error: 'Could not load the published site content.' }); }
  }
  if (req.method === 'PUT' && url.pathname.startsWith('/api/site/state/')) {
    if (!pool) return sendJson(res, 404, { error: 'Shared site storage is not configured.' });
    if (!sameOrigin(req)) return sendJson(res, 403, { error: 'Request origin was not accepted.' });
    if (!requireAdmin(req, res)) return;
    const key = decodeURIComponent(url.pathname.slice('/api/site/state/'.length));
    if (!safeStateKey(key)) return sendJson(res, 400, { error: 'This site setting cannot be saved.' });
    let body;
    try { body = await readJson(req, 20000000); } catch (e) { return sendJson(res, e.status || 400, { error: e.message }); }
    try { await saveStateKey(key, body.value); return sendJson(res, 200, { saved: true }); }
    catch (e) { return sendJson(res, 500, { error: 'Could not save this site setting.' }); }
  }
  if (req.method === 'GET' && url.pathname.startsWith('/api/site/assets/')) {
    if (!pool) return sendJson(res, 404, { error: 'Shared site storage is not configured.' });
    let key; try { key = decodeURIComponent(url.pathname.slice('/api/site/assets/'.length)); } catch { return sendJson(res, 400, { error: 'Invalid asset address.' }); }
    try {
      const result = await pool.query('SELECT content_type,file_name,data FROM rykaar_site_assets WHERE key=$1', [key]);
      if (!result.rowCount) { res.writeHead(404); return res.end('Asset not found.'); }
      const row = result.rows[0]; res.writeHead(200, { 'Content-Type': row.content_type, 'Content-Disposition': `inline; filename="${String(row.file_name).replace(/["\\\r\n]/g, '_')}"`, 'Cache-Control': 'public, max-age=3600', 'X-Content-Type-Options': 'nosniff' }); return res.end(row.data);
    } catch (e) { return sendJson(res, 500, { error: 'Could not load this asset.' }); }
  }
  if (req.method === 'POST' && url.pathname === '/api/site/assets') {
    if (!pool || !sameOrigin(req)) return sendJson(res, 404, { error: 'Shared site storage is not configured.' });
    const key = String(url.searchParams.get('key') || '').slice(0, 200);
    const isOwnerListingPhoto = /^image:property:\d+(?::\d+)?$/.test(key);
    if (!isOwnerListingPhoto && !requireAdmin(req, res)) return;
    if (!key || (!isOwnerListingPhoto && !getSession(req))) return sendJson(res, 400, { error: 'Invalid upload key.' });
    const limit = isOwnerListingPhoto ? 15000000 : 50000000;
    const type = String(req.headers['content-type'] || 'application/octet-stream').slice(0, 150);
    const filename = String(url.searchParams.get('name') || '').slice(0, 240);
    const parts = []; let length = 0;
    try {
      for await (const part of req) { length += part.length; if (length > limit) { sendJson(res, 413, { error: 'This file exceeds the hosting upload limit.' }); req.destroy(); return; } parts.push(part); }
      await pool.query('INSERT INTO rykaar_site_assets(key,content_type,file_name,data,updated_at) VALUES($1,$2,$3,$4,now()) ON CONFLICT(key) DO UPDATE SET content_type=EXCLUDED.content_type,file_name=EXCLUDED.file_name,data=EXCLUDED.data,updated_at=now()', [key, type, filename, Buffer.concat(parts)]);
      return sendJson(res, 200, { ref: `/api/site/assets/${encodeURIComponent(key)}` });
    } catch (e) { return sendJson(res, 500, { error: 'The upload could not be saved to shared storage.' }); }
  }
  if (req.method === 'POST' && url.pathname === '/api/site/records') {
    if (!pool || !sameOrigin(req)) return sendJson(res, 503, { error: 'Shared site storage is not configured.' });
    let body; try { body = await readJson(req, 1000000); } catch (e) { return sendJson(res, e.status || 400, { error: e.message }); }
    const kind = ['lead', 'career', 'property'].includes(body.kind) ? body.kind : '';
    if (!kind || !body.record || typeof body.record !== 'object') return sendJson(res, 400, { error: 'Invalid contact record.' });
    const key = kind === 'lead' ? 'rykaar_leads' : kind === 'career' ? 'rykaar_careers' : 'rykaar_properties';
    const record = { ...body.record, id: `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`, date: body.record.date || new Date().toLocaleString() };
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query('INSERT INTO rykaar_site_records(id,kind,payload) VALUES($1,$2,$3::jsonb)', [record.id, kind, JSON.stringify(record)]);
      await client.query(`INSERT INTO rykaar_site_state(key,value) VALUES($1,jsonb_build_array($2::jsonb)) ON CONFLICT(key) DO UPDATE SET value=(SELECT COALESCE(jsonb_agg(x), '[]'::jsonb) FROM (SELECT x FROM jsonb_array_elements(rykaar_site_state.value || EXCLUDED.value) AS x ORDER BY (x->>'id') DESC LIMIT 2000) s), updated_at=now()`, [key, JSON.stringify(record)]);
      await client.query('COMMIT'); return sendJson(res, 201, { saved: true });
    } catch (e) { await client.query('ROLLBACK'); return sendJson(res, 500, { error: 'The record could not be saved.' }); }
    finally { client.release(); }
  }
  if (req.method === 'DELETE' && url.pathname.startsWith('/api/site/records/')) {
    if (!pool) return sendJson(res, 404, { error: 'Shared site storage is not configured.' });
    if (!sameOrigin(req)) return sendJson(res, 403, { error: 'Request origin was not accepted.' });
    if (!requireAdmin(req, res)) return;
    const id = decodeURIComponent(url.pathname.slice('/api/site/records/'.length));
    try {
      const found = await pool.query('SELECT kind FROM rykaar_site_records WHERE id=$1', [id]);
      if (!found.rowCount) return sendJson(res, 404, { error: 'Record not found.' });
      const key = found.rows[0].kind === 'lead' ? 'rykaar_leads' : 'rykaar_careers';
      await pool.query('DELETE FROM rykaar_site_records WHERE id=$1', [id]);
      const current = await pool.query('SELECT value FROM rykaar_site_state WHERE key=$1', [key]);
      const rows = current.rowCount ? current.rows[0].value.filter(row => String(row.id) !== id) : [];
      await saveStateKey(key, rows); return sendJson(res, 200, { deleted: true });
    } catch (e) { return sendJson(res, 500, { error: 'Could not delete this record.' }); }
  }
  if (req.method === 'GET' && url.pathname === '/api/gemini/status') return sendJson(res, 200, publicStatus());
  if (req.method === 'POST' && url.pathname === '/api/gemini/admin-passcode') {
    if (!sameOrigin(req)) return sendJson(res, 403, { error: 'Settings request origin was not accepted.' });
    let body;
    try { body = await readJson(req, 4000); }
    catch (e) { return sendJson(res, e.status || 400, { error: e.message }); }
    if (!authorized(req, body)) return sendJson(res, 403, { error: 'Current admin passcode did not match.' });
    if (process.env.RYKAAR_ADMIN_PASSCODE) return sendJson(res, 403, { error: 'The server admin passcode is managed by its environment settings.' });
    const newPasscode = String(body.newPasscode || '');
    if (newPasscode.length < 3 || newPasscode.length > 200) return sendJson(res, 400, { error: 'Passcode must be between 3 and 200 characters.' });
    const salt = crypto.randomBytes(16);
    const hash = crypto.scryptSync(newPasscode, salt, 64);
    adminPasscodeHash = { salt: salt.toString('hex'), hash: hash.toString('hex') };
    adminPasscode = '';
    fs.writeFileSync(PASSCODE_FILE, JSON.stringify(adminPasscodeHash), { mode: 0o600 });
    return sendJson(res, 200, { saved: true });
  }
  if (req.method === 'POST' && url.pathname === '/api/gemini/settings') {
    if (!sameOrigin(req)) return sendJson(res, 403, { error: 'Settings request origin was not accepted.' });
    let body;
    try { body = await readJson(req, 12000); }
    catch (e) { return sendJson(res, e.status || 400, { error: e.message }); }
    if (!authorized(req, body)) return sendJson(res, 403, { error: 'Admin verification failed. Check the Admin CMS passcode configuration.' });
    if (body.clearKey) { apiKeyOverride = ''; keyDisabled = true; }
    else if (typeof body.key === 'string' && body.key.trim()) {
      const key = body.key.trim();
      if (key.length < 12 || key.length > 500) return sendJson(res, 400, { error: 'That API key does not look valid. Check it and try again.' });
      apiKeyOverride = key; keyDisabled = false;
    }
    if (typeof body.model === 'string' && /^[A-Za-z0-9._-]{1,100}$/.test(body.model.trim())) settings.model = body.model.trim();
    if (typeof body.title === 'string') settings.title = body.title.trim().slice(0, 100) || settings.title;
    if (typeof body.greeting === 'string') settings.greeting = body.greeting.trim().slice(0, 500) || settings.greeting;
    if (typeof body.instructions === 'string') settings.instructions = body.instructions.trim().slice(0, 4000) || settings.instructions;
    return sendJson(res, 200, publicStatus());
  }
  if (req.method === 'POST' && url.pathname === '/api/gemini/chat') return handleChat(req, res);
  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/Rykaar-Official-site.html')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    return fs.createReadStream(PAGE).on('error', () => { if (!res.headersSent) res.writeHead(500); res.end('Rykaar site page is unavailable.'); }).pipe(res);
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'X-Content-Type-Options': 'nosniff' });
  res.end('Not found');
});

initializeDatabase().then(() => server.listen(PORT, HOST, () => console.log(`Rykaar site available at http://${HOST}:${PORT}/Rykaar-Official-site.html`))).catch(error => { console.error('Rykaar database could not be initialized:', error.message); process.exit(1); });

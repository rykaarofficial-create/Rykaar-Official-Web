@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is needed to run the Rykaar site and Gemini chat server.
  echo Install Node.js, then run this file again.
  pause
  exit /b 1
)
start "Rykaar site and Gemini server" /min node "%~dp0rykaar-server.js"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4178/Rykaar-Official-site.html"
endlocal

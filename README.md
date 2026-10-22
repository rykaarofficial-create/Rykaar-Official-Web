<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rykaar | The Pinnacle of Excellence Across Diverse Industries</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: {
                            100: '#FFF9E6',
                            300: '#F3E5AB',
                            400: '#E5C158',
                            500: '#D4AF37',
                            600: '#AA820A',
                            700: '#8B7500',
                            800: '#5C4E00',
                        },
                        obsidian: '#0A0A0A',
                        charcoal: '#121212',
                        darkcard: '#1A1A1E',
                    },
                    fontFamily: {
                        serif: ['Cinzel', 'serif'],
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    boxShadow: {
                        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
                        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.4)',
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #0A0A0A;
            color: #E5E7EB;
            font-family: 'Montserrat', sans-serif;
            overflow-x: hidden;
        }
        h1, h2, h3, h4, .font-cinzel {
            font-family: 'Cinzel', serif;
        }
        /* Custom Gold Metallic Gradients */
        .gold-gradient-text {
            background: linear-gradient(135deg, #FFF9E6 0%, #D4AF37 50%, #8B7500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gold-gradient-bg {
            background: linear-gradient(135deg, #D4AF37 0%, #AA820A 100%);
        }
        .gold-border {
            border-image: linear-gradient(to bottom right, #D4AF37, #8B7500, #D4AF37) 1;
        }
        .gold-card-border {
            border: 1px solid rgba(212, 175, 55, 0.3);
            transition: all 0.3s ease;
        }
        .gold-card-border:hover {
            border-color: rgba(212, 175, 55, 0.8);
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0A0A0A;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #D4AF37;
        }
        /* Subtle shimmer animation */
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        .shimmer-text {
            background: linear-gradient(90deg, #D4AF37 0%, #FFF9E6 50%, #D4AF37 100%);
            background-size: 200% auto;
            color: #000;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s infinite linear;
        }
        .glass-panel {
            background: rgba(18, 18, 18, 0.85);
            backdrop-filter: blur(12px);
        }
        #gemini-chat-panel { box-shadow: 0 18px 60px rgba(0,0,0,.55); }
        #gemini-chat-messages { scrollbar-width: thin; scrollbar-color: rgba(212,175,55,.55) transparent; }
        /* CMS panel visibility is explicit so it does not depend on utility-class ordering. */
        #admin-cms-view > .cms-content-scroll { display: block; flex: 1 1 auto; min-height: 0; overflow-y: auto; }
        #admin-cms-view .cms-panel { display: block !important; min-height: 160px; color: #E5E7EB; padding: 1rem 0 2rem; border-bottom: 1px solid rgba(212,175,55,.18); scroll-margin-top: 1rem; }
    </style>
</head>
<body class="antialiased selection:bg-gold-500 selection:text-black">

    <!-- NAVIGATION BAR -->
    <nav class="fixed top-0 left-0 w-full z-40 glass-panel border-b border-gold-500/20 px-4 lg:px-12 py-3 transition-all duration-300" id="main-nav">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Brand Logo & Name -->
            <a href="#" class="flex items-center space-x-4 group">
                <div class="w-11 h-11 rounded-full border border-gold-500/50 p-1 flex items-center justify-center bg-black overflow-hidden shadow-gold-glow group-hover:scale-105 transition-transform">
                    <img id="nav-logo-img" src="" alt="Rykaar Logo" class="w-full h-full object-cover rounded-full hidden">
                    <div id="nav-logo-fallback" class="font-cinzel text-gold-500 font-bold text-xl">R</div>
                </div>
                <div class="flex flex-col">
                    <span class="font-cinzel text-xl font-extrabold tracking-widest text-white gold-gradient-text">RYKAAR</span>
                    <span class="text-[9px] uppercase tracking-[0.25em] text-gold-400/80 -mt-1 font-semibold" id="nav-tagline">Excellence Unbound</span>
                </div>
            </a>

            <!-- Desktop Navigation Links -->
            <div class="hidden lg:flex items-center space-x-8 text-xs font-medium uppercase tracking-wider text-gray-300">
                <a href="#featured" class="hover:text-gold-400 transition-colors">Ventures</a>
                <a href="#real-estate" class="hover:text-gold-400 transition-colors">Real Estate</a>
                <a href="#jewellers" class="hover:text-gold-400 transition-colors">Jewellers</a>
                <a href="#rykaar-one" class="hover:text-gold-400 transition-colors">Rykaar One</a>
                <a href="#resort" class="hover:text-gold-400 transition-colors">Resort</a>
                <a href="#about" class="hover:text-gold-400 transition-colors">About</a>
                <a href="#careers" class="hover:text-gold-400 transition-colors">Careers</a>
                <a href="#blog" class="hover:text-gold-400 transition-colors">Insights</a>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center space-x-5">
                <div id="top-right-logo-wrap" class="hidden flex shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-black p-1 overflow-hidden">
                    <img id="top-right-logo-img" src="" alt="Rykaar corner logo" class="w-full h-full object-contain rounded-full">
                    <span id="top-right-logo-fallback" class="hidden text-gold-500 font-bold">R</span>
                </div>
                <button onclick="openAdminModal()" class="px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-gold-500/60 rounded-full text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300 flex items-center space-x-2">
                    <i class="fa-solid fa-lock text-xs"></i>
                    <span class="hidden sm:inline">Admin CMS</span>
                </button>
                <a href="#contact" class="hidden sm:inline-block px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full gold-gradient-bg text-black hover:opacity-90 shadow-gold-glow transition-all">
                    Contact Us
                </a>
                <button class="lg:hidden text-white p-2 text-xl" id="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Drawer -->
        <div id="mobile-menu" class="hidden lg:hidden flex-col space-y-4 pt-4 pb-6 px-4 border-t border-gold-500/20 bg-charcoal/95 mt-3 rounded-b-2xl">
            <a href="#featured" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">Featured Ventures</a>
            <a href="#real-estate" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">Rykaar Real Estate</a>
            <a href="#jewellers" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">Rykaar Jewellers</a>
            <a href="#rykaar-one" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">Rykaar One Consultancy</a>
            <a href="#resort" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">Rykaar Resort</a>
            <a href="#about" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">About & Founder</a>
            <a href="#careers" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">Careers</a>
            <a href="#blog" onclick="toggleMobileMenu()" class="text-sm font-medium hover:text-gold-400">Blog & Insights</a>
            <a href="#contact" onclick="toggleMobileMenu()" class="text-sm font-medium text-gold-400 font-bold">Get In Touch</a>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden" id="hero">
        <!-- Background Overlay & Image -->
        <div class="absolute inset-0 z-0">
            <img id="hero-bg-img" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" alt="Rykaar Luxury Background" class="w-full h-full object-cover object-center opacity-30">
            <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent"></div>
            <div class="absolute inset-0 bg-radial-gradient from-transparent via-obsidian/50 to-obsidian"></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <!-- Central Emblem Box -->
            <div class="inline-block relative group">
                <div class="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 border-gold-500/80 p-2 shadow-gold-glow-lg bg-black/80 flex items-center justify-center relative overflow-hidden transition-transform duration-700 hover:scale-105">
                    <img id="hero-logo-img" src="" alt="Rykaar Gold Emblem" class="w-full h-full object-cover rounded-full hidden">
                    <div id="hero-logo-fallback" class="font-cinzel text-5xl md:text-6xl text-gold-500 font-bold tracking-tighter">R</div>
                </div>
                <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    Established Luxury
                </div>
            </div>

            <!-- Titles & Taglines -->
            <div class="space-y-4">
                <h1 class="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight" id="hero-headline">
                    RYKAAR
                </h1>
                <p class="font-cinzel text-lg sm:text-2xl text-gold-400 font-semibold tracking-wide shimmer-text" id="hero-subheadline">
                    The Pinnacle of Excellence Across Diverse Industries
                </p>
                <p class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed" id="hero-description">
                    Curating refined craftsmanship, distinguished real estate, world-class business intelligence, and transcendent hospitality for the global elite.
                </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a href="#featured" class="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-black font-bold uppercase text-xs tracking-widest hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300">
                    Explore Our Portfolio
                </a>
                <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-full border border-gold-500/50 text-white font-bold uppercase text-xs tracking-widest hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300">
                    Private Consultation
                </a>
            </div>

            <!-- Stats Ribbon -->
            <div class="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gold-500/20 max-w-4xl mx-auto">
                <div class="text-center">
                    <div class="font-cinzel text-2xl md:text-3xl font-bold text-gold-400">4+</div>
                    <div class="text-[11px] uppercase tracking-wider text-gray-400">Core Industries</div>
                </div>
                <div class="text-center">
                    <div class="font-cinzel text-2xl md:text-3xl font-bold text-gold-400">100%</div>
                    <div class="text-[11px] uppercase tracking-wider text-gray-400">Bespoke Standards</div>
                </div>
                <div class="text-center">
                    <div class="font-cinzel text-2xl md:text-3xl font-bold text-gold-400">₹500Cr+</div>
                    <div class="text-[11px] uppercase tracking-wider text-gray-400">Assets Managed</div>
                </div>
                <div class="text-center">
                    <div class="font-cinzel text-2xl md:text-3xl font-bold text-gold-400">Pan-India</div>
                    <div class="text-[11px] uppercase tracking-wider text-gray-400">Presence</div>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURED / CATEGORY SHOWCASE -->
    <section class="py-20 px-4 bg-charcoal border-t border-b border-gold-500/10" id="featured">
        <div class="max-w-7xl mx-auto">
            <div class="text-center space-y-3 mb-16">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">Prestigious Ventures</span>
                <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">Distinguished Divisions</h2>
                <div class="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="featured-cards-container">
                <!-- Dynamic or default cards rendered by JS -->
            </div>
        </div>
    </section>

    <!-- SECTION 1: RYKAAR REAL ESTATE FIRM -->
    <section class="py-24 px-4 bg-obsidian relative" id="real-estate">
        <div class="max-w-7xl mx-auto space-y-16">
            <!-- Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-gold-500/20 pb-8 gap-6">
                <div>
                    <div class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-2">Architectural Jewels</div>
                    <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">Rykaar Real Estate Firm</h2>
                    <p class="text-gray-400 max-w-xl text-sm mt-3">Curating ultra-luxury residential villas, penthouses, commercial landmarks, and heritage plots.</p>
                </div>
                <button onclick="openListingModal()" class="px-6 py-3 rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all self-start md:self-auto flex items-center space-x-2 shadow-gold-glow">
                    <i class="fa-solid fa-plus"></i>
                    <span>List Your Property</span>
                </button>
            </div>

            <!-- Filter Tabs -->
            <div class="flex flex-wrap gap-3" id="re-filters">
                <button onclick="filterProperties('All')" class="re-filter-btn px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-500 bg-gold-500 text-black">All Properties</button>
                <button onclick="filterProperties('Villa')" class="re-filter-btn px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-500/30 text-gray-300 hover:border-gold-500">Villas</button>
                <button onclick="filterProperties('Penthouse')" class="re-filter-btn px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-500/30 text-gray-300 hover:border-gold-500">Penthouses</button>
                <button onclick="filterProperties('Commercial')" class="re-filter-btn px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-500/30 text-gray-300 hover:border-gold-500">Commercial</button>
                <button onclick="filterProperties('Estate')" class="re-filter-btn px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-500/30 text-gray-300 hover:border-gold-500">Estates</button>
            </div>

            <!-- Property Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="properties-grid">
                <!-- Injected via JS -->
            </div>
        </div>
    </section>

    <!-- SECTION 2: RYKAAR JEWELLERS -->
    <section class="py-24 px-4 bg-charcoal relative border-t border-gold-500/10" id="jewellers">
        <div class="max-w-7xl mx-auto space-y-16">
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto space-y-4">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">Master Artisans</span>
                <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">Rykaar Jewellers</h2>
                <div class="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
                <p class="text-gray-400 text-sm leading-relaxed">Exquisite hand-crafted diamond suites, pure gold heirlooms, and bespoke horological timepieces designed for royalty.</p>
            </div>

            <!-- Jewelry Category / Product Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="jewelry-grid">
                <!-- Injected via JS -->
            </div>
        </div>
    </section>

    <!-- SECTION 3: RYKAAR ONE (BUSINESS CONSULTANCY) -->
    <section class="py-24 px-4 bg-obsidian relative border-t border-gold-500/10" id="rykaar-one">
        <div class="max-w-7xl mx-auto space-y-16">
            <div class="text-center max-w-3xl mx-auto space-y-4">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">Strategic Advisory</span>
                <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">Rykaar One</h2>
                <p class="text-gold-400 text-sm font-semibold tracking-wider">Business Intelligence & Strategic Operations</p>
                <div class="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>

            <!-- Core Rykaar One advisory services -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Resort Business Consultation -->
                <div class="gold-card-border p-8 rounded-2xl bg-darkcard flex flex-col justify-between hover:-translate-y-2 transition-all">
                    <div class="space-y-6">
                        <div class="w-14 h-14 rounded-2xl border border-gold-500/40 bg-gold-500/10 flex items-center justify-center text-gold-400 text-2xl">
                            <i class="fa-solid fa-umbrella-beach"></i>
                        </div>
                        <h3 class="font-cinzel text-xl font-bold text-white">Resort Business Consultation</h3>
                        <p class="text-gray-400 text-xs leading-relaxed">Practical advisory for resort owners planning a new hospitality venture, improving guest experiences, or growing a profitable destination business.</p>
                        <ul class="space-y-2 text-xs text-gray-300">
                            <li class="flex items-center space-x-2"><i class="fa-solid fa-check text-gold-500"></i> <span>Resort Concept & Business Planning</span></li>
                            <li class="flex items-center space-x-2"><i class="fa-solid fa-check text-gold-500"></i> <span>Guest Experience & Service Design</span></li>
                            <li class="flex items-center space-x-2"><i class="fa-solid fa-check text-gold-500"></i> <span>Hospitality Growth Strategy</span></li>
                        </ul>
                    </div>
                    <a href="#contact" onclick="setConsultancySubject('Resort Business Consultation')" class="mt-8 block text-center py-3 rounded-full border border-gold-500 text-gold-400 font-semibold text-xs uppercase tracking-wider hover:bg-gold-500 hover:text-black transition-all">Consult Our Experts</a>
                </div>

                <!-- Human Resource Management -->
                <div class="gold-card-border p-8 rounded-2xl bg-darkcard flex flex-col justify-between hover:-translate-y-2 transition-all">
                    <div class="space-y-6">
                        <div class="w-14 h-14 rounded-2xl border border-gold-500/40 bg-gold-500/10 flex items-center justify-center text-gold-400 text-2xl">
                            <i class="fa-solid fa-users-gear"></i>
                        </div>
                        <h3 class="font-cinzel text-xl font-bold text-white">Human Resources & Talent</h3>
                        <p class="text-gray-400 text-xs leading-relaxed">Executive search, organizational structuring, leadership development, and specialized HR frameworks for enterprise growth.</p>
                        <ul class="space-y-2 text-xs text-gray-300">
                            <li class="flex items-center space-x-2"><i class="fa-solid fa-check text-gold-500"></i> <span>C-Suite & Executive Headhunting</span></li>
                            <li class="flex items-center space-x-2"><i class="fa-solid fa-check text-gold-500"></i> <span>HR Policy & Compliance Design</span></li>
                            <li class="flex items-center space-x-2"><i class="fa-solid fa-check text-gold-500"></i> <span>Performance & Payroll Systems</span></li>
                        </ul>
                    </div>
                    <a href="#contact" onclick="setConsultancySubject('Human Resource Management')" class="mt-8 block text-center py-3 rounded-full border border-gold-500 text-gold-400 font-semibold text-xs uppercase tracking-wider hover:bg-gold-500 hover:text-black transition-all">Consult Our Experts</a>
                </div>


            </div>
        </div>
    </section>

    <!-- SECTION 4: RYKAAR RESORTS -->
    <section class="py-24 px-4 bg-charcoal border-t border-gold-500/10" id="resort">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">Stay, Restore, Explore</span>
                <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">Rykaar Resorts</h2>
                <p class="text-gray-400 text-sm leading-relaxed">A hospitality collection shaped around thoughtful service, memorable destinations, and restorative stays. Rykaar One also advises resort owners on concept, guest experience, and business growth.</p>
                <a href="#contact" onclick="setConsultancySubject('Rykaar Resorts')" class="inline-block px-7 py-3 rounded-full gold-gradient-bg text-black font-bold uppercase text-xs tracking-widest">Discuss a Resort Venture</a>
            </div>
            <div class="grid grid-cols-2 gap-4" id="resort-gallery">
                <div class="space-y-4">
                    <img id="resort-img-1" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" alt="Rykaar resort pool" class="w-full h-64 object-cover rounded-2xl gold-card-border">
                    <img id="resort-img-2" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" alt="Rykaar luxury suite" class="w-full h-44 object-cover rounded-2xl gold-card-border">
                </div>
                <div class="space-y-4 pt-8">
                    <img id="resort-img-3" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Rykaar resort spa" class="w-full h-44 object-cover rounded-2xl gold-card-border">
                    <img id="resort-img-4" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" alt="Rykaar resort dining" class="w-full h-64 object-cover rounded-2xl gold-card-border">
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 5: ABOUT US & FOUNDER -->
    <section class="py-24 px-4 bg-obsidian border-t border-gold-500/10" id="about">
        <div class="max-w-7xl mx-auto space-y-20">
            <!-- Brand Ethos -->
            <div class="text-center max-w-3xl mx-auto space-y-4">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">Our Legacy</span>
                <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">The Rykaar Heritage</h2>
                <div class="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
                <p class="text-gray-300 text-sm leading-relaxed" id="about-ethos-text">
                    Rykaar stands as an emblem of uncompromising quality, timeless sophistication, and innovative multi-sector leadership. From curating prime real estate and fine diamond jewelry to shaping business operations and luxury hospitality, our devotion to excellence remains absolute.
                </p>
            </div>

            <!-- Founder Feature Card -->
            <div class="gold-card-border rounded-3xl bg-darkcard p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-5 relative">
                        <div class="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gold-500/30 shadow-gold-glow">
                            <img id="founder-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" alt="Rykaar Founder" class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div class="md:col-span-7 space-y-6">
                        <div class="space-y-1">
                            <span class="text-gold-500 text-xs font-bold uppercase tracking-widest">Leadership Vision</span>
                            <h3 class="font-cinzel text-2xl md:text-4xl font-bold text-white" id="founder-name">The Founder</h3>
                            <p class="text-gold-400 text-xs uppercase tracking-wider font-semibold" id="founder-title">Visionary & Managing Director</p>
                        </div>
                        <p class="text-gray-300 text-sm leading-relaxed font-light" id="founder-bio">
                            "Excellence is not a singular act, but an enduring habit of perfection across every enterprise we pioneer. At Rykaar, our commitment to our clients and partners is founded on uncompromising trust, flawless execution, and visionary innovation."
                        </p>
                        <div class="pt-4 border-t border-gold-500/20 flex items-center justify-between">
                            <span class="font-cinzel text-xs text-gold-400 tracking-widest uppercase">Rykaar Leadership Office</span>
                            <i class="fa-solid fa-gem text-gold-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 6: CAREERS & EMPLOYMENT PORTAL -->
    <section class="py-24 px-4 bg-charcoal border-t border-gold-500/10" id="careers">
        <div class="max-w-4xl mx-auto space-y-12">
            <div class="text-center space-y-3">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">Join Our Elite Team</span>
                <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">Career Opportunities</h2>
                <p class="text-gray-400 text-sm">Shape the future of luxury real estate, jewelry craftsmanship, business consulting, or hospitality.</p>
            </div>

            <form id="career-form" onsubmit="handleCareerSubmit(event)" class="gold-card-border p-8 md:p-10 rounded-3xl bg-darkcard space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">Full Name *</label>
                        <input type="text" id="job-name" required class="w-full bg-black/60 border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500" placeholder="e.g. Rahul Sharma">
                    </div>
                    <div>
                        <label class="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">Phone Number *</label>
                        <input type="tel" id="job-phone" required class="w-full bg-black/60 border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500" placeholder="e.g. +91 9876543210">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">Email Address *</label>
                        <input type="email" id="job-email" required class="w-full bg-black/60 border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500" placeholder="yourname@domain.com">
                    </div>
                    <div>
                        <label class="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">Department Division *</label>
                        <select id="job-dept" required class="w-full bg-black/60 border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500">
                            <option value="">Select Department</option>
                            <option value="Real Estate">Rykaar Real Estate Firm</option>
                            <option value="Jewellers">Rykaar Jewellers</option>
                            <option value="Business Consultant">Rykaar One Business Consultancy</option>
                            <option value="Resort Staff">Rykaar Resort Staff</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">Years of Experience & Brief Bio</label>
                    <textarea id="job-bio" rows="3" class="w-full bg-black/60 border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500" placeholder="Briefly detail your background..."></textarea>
                </div>

                <div>
                    <label class="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">Upload Resume / CV (PDF / Doc) *</label>
                    <input type="file" id="job-resume" accept=".pdf,.doc,.docx" required class="w-full bg-black/60 border border-gold-500/30 rounded-xl px-4 py-3 text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black hover:file:bg-gold-400">
                    <p class="text-[10px] text-gray-500 mt-1">File will be securely recorded in site administrative records.</p>
                </div>

                <button type="submit" class="w-full py-4 rounded-xl gold-gradient-bg text-black font-bold uppercase text-xs tracking-widest hover:shadow-gold-glow transition-all">
                    Submit Job Application
                </button>
            </form>
        </div>
    </section>

    <!-- SECTION 7: BLOG & INSIGHTS -->
    <section class="py-24 px-4 bg-obsidian border-t border-gold-500/10" id="blog">
        <div class="max-w-7xl mx-auto space-y-16">
            <div class="text-center max-w-2xl mx-auto space-y-3">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-[0.3em]">Thought Leadership</span>
                <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-white">Rykaar Insights</h2>
                <p class="text-gray-400 text-sm">Perspectives on high-end real estate, jewelry trends, business scaling, and hospitality excellence.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-grid">
                <!-- Blog cards injected dynamically -->
            </div>
        </div>
    </section>

    <!-- SECTION 8: CONTACT US & FOOTER -->
    <footer class="bg-charcoal border-t border-gold-500/20 pt-20 pb-12 px-4" id="contact">
        <div class="max-w-7xl mx-auto space-y-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- Left Details -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-full border border-gold-500/50 p-1 flex items-center justify-center bg-black overflow-hidden shadow-gold-glow">
                            <img id="footer-mini-logo-img" src="" alt="Rykaar Mini Logo" class="w-full h-full object-cover rounded-full hidden">
                            <div id="footer-mini-logo-fallback" class="font-cinzel text-gold-500 font-bold text-xl">R</div>
                        </div>
                        <div>
                            <span class="font-cinzel text-2xl font-extrabold tracking-widest text-white gold-gradient-text">RYKAAR</span>
                            <p class="text-[10px] text-gold-400 uppercase tracking-widest">Premier Business Group</p>
                        </div>
                    </div>

                    <p class="text-gray-400 text-xs leading-relaxed max-w-md">
                        Delivering unmatched excellence across real estate development, fine jewelry curation, strategic corporate consultancy, and luxury resort hospitality.
                    </p>

                    <div class="space-y-4 pt-2">
                        <div class="flex items-center space-x-4 text-sm text-gray-300">
                            <div class="w-10 h-10 rounded-full border border-gold-500/30 bg-black flex items-center justify-center text-gold-400">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <div class="text-[10px] uppercase text-gray-500 font-bold">Official Hotline</div>
                                <a href="tel:8618884588" class="hover:text-gold-400 font-semibold" id="contact-phone-display">+91 8618884588</a>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4 text-sm text-gray-300">
                            <div class="w-10 h-10 rounded-full border border-gold-500/30 bg-black flex items-center justify-center text-gold-400">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <div class="text-[10px] uppercase text-gray-500 font-bold">Email Correspondence</div>
                                <a href="mailto:rykaarofficial@gmail.com" class="hover:text-gold-400 font-semibold" id="contact-email-display">rykaarofficial@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:col-span-7">
                    <form id="contact-form" onsubmit="handleContactSubmit(event)" class="gold-card-border p-8 rounded-2xl bg-obsidian space-y-5">
                        <h3 class="font-cinzel text-xl font-bold text-white mb-2">Send an Inquiry</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" id="contact-name" required placeholder="Your Name *" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500">
                            <input type="tel" id="contact-phone" required placeholder="Your Phone Number *" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500">
                        </div>
                        <input type="email" id="contact-email" placeholder="Email Address" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500">
                        <input type="text" id="contact-subject" placeholder="Subject / Interest Area" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500">
                        <textarea id="contact-msg" rows="4" required placeholder="How may Rykaar assist you?" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500"></textarea>

                        <button type="submit" class="w-full py-4 rounded-xl gold-gradient-bg text-black font-bold uppercase text-xs tracking-widest hover:shadow-gold-glow transition-all">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom Copyright & Mini Logo Edit -->
            <div class="border-t border-gold-500/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <div>&copy; <span id="current-year"></span> Rykaar Group. All Rights Reserved.</div>
                <div class="flex items-center space-x-6">
                    <a href="#hero" class="hover:text-gold-400">Back to Top</a>
                    <button onclick="openAdminModal()" class="text-gold-500 font-semibold hover:underline">Admin Login</button>
                </div>
            </div>
        </div>
    </footer>

    <!-- PROPERTY LISTING MODAL (PUBLIC PROPERTY OWNER LISTING) -->
    <div id="listing-modal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden flex items-center justify-center p-4">
        <div class="gold-card-border bg-charcoal rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative">
            <button onclick="closeListingModal()" class="absolute top-6 right-6 text-gray-400 hover:text-white text-xl">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <div class="space-y-1">
                <span class="text-gold-500 text-xs font-bold uppercase tracking-wider">Property Owners Only</span>
                <h3 class="font-cinzel text-2xl font-bold text-white">List Your Property with Rykaar</h3>
                <p class="text-xs text-gray-400">Submit your property details. Our team will verify and contact you on your registered number.</p>
            </div>

            <form id="owner-listing-form" onsubmit="handlePublicPropertySubmit(event)" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Owner Full Name *</label>
                        <input type="text" id="prop-owner-name" required class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500">
                    </div>
                    <div>
                        <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Owner Contact Number *</label>
                        <input type="tel" id="prop-owner-phone" required placeholder="e.g. 8618884588" class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Property Title *</label>
                        <input type="text" id="prop-title" required placeholder="e.g. Royal Heights Penthouse" class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500">
                    </div>
                    <div>
                        <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Property Category *</label>
                        <select id="prop-type" required class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500">
                            <option value="Villa">Villa</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Estate">Estate</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Asking Price (₹) *</label>
                        <input type="text" id="prop-price" required placeholder="e.g. ₹ 4.5 Cr" class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500">
                    </div>
                    <div>
                        <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Location / City *</label>
                        <input type="text" id="prop-location" required placeholder="e.g. North Goa / Mumbai" class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500">
                    </div>
                </div>

                <div>
                    <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Upload Property Photos</label>
                    <input type="file" id="prop-img-file" accept="image/*" multiple onchange="convertImagesToBase64(this, 'prop-img-preview')" class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-xs text-gray-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black">
                    <input type="hidden" id="prop-img-preview"><p class="mt-1 text-[10px] text-gray-500">All selected photos will appear in the property listing gallery.</p>
                </div>

                <div>
                    <label class="block text-xs uppercase text-gray-300 font-semibold mb-1">Property Specifications / Description</label>
                    <textarea id="prop-desc" rows="3" placeholder="Bedrooms, Sq. Ft, Amenities..." class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500"></textarea>
                </div>

                <button type="submit" class="w-full py-3.5 rounded-xl gold-gradient-bg text-black font-bold uppercase text-xs tracking-widest hover:shadow-gold-glow transition-all">
                    Submit Property Listing
                </button>
            </form>
        </div>
    </div>

    <!-- ADMIN CMS MODAL PANEL -->
    <div id="admin-modal" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg hidden flex items-center justify-center p-2 md:p-6">
        <div class="gold-card-border bg-obsidian rounded-3xl max-w-5xl w-full h-[92vh] flex flex-col overflow-hidden relative">
            
            <!-- Modal Header -->
            <div class="p-6 border-b border-gold-500/20 flex items-center justify-between bg-charcoal">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-full bg-gold-500 text-black flex items-center justify-center font-bold">
                        <i class="fa-solid fa-user-gear"></i>
                    </div>
                    <div>
                        <h3 class="font-cinzel text-xl font-bold text-white">Rykaar Master CMS Control Panel</h3>
                        <p class="text-[10px] text-gold-400 uppercase tracking-widest">Site Management & Image Upload Center</p>
                    </div>
                </div>
                <div class="flex items-center gap-3"><span id="cms-update-status" class="text-[10px] text-gray-400"></span><button id="cms-update-button" onclick="publishSiteChanges()" disabled class="px-5 py-2 rounded-full gold-gradient-bg text-black text-xs font-bold uppercase tracking-wider disabled:opacity-40">Update Site</button>
                <button onclick="closeAdminModal()" class="text-gray-400 hover:text-white text-2xl">
                    <i class="fa-solid fa-xmark"></i>
                </button></div>
            </div>

            <!-- Login Section (if not authenticated) -->
            <div id="admin-login-view" class="p-8 flex-1 flex flex-col items-center justify-center space-y-6 max-w-md mx-auto w-full">
                <div class="text-center space-y-2">
                    <i class="fa-solid fa-shield-halved text-gold-500 text-4xl"></i>
                    <h4 class="font-cinzel text-xl font-bold text-white">Administrator Access Required</h4>
                    <p class="text-xs text-gray-400">Enter your secure passcode to edit logo, images, phone, listings, and content.</p>
                </div>
                <div class="w-full space-y-4">
                    <input type="password" id="admin-pass-input" placeholder="Enter admin passcode" class="w-full bg-charcoal border border-gold-500/40 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 text-center tracking-widest">
                    <button onclick="verifyAdminPass()" class="w-full py-3.5 rounded-xl gold-gradient-bg text-black font-bold uppercase text-xs tracking-widest hover:shadow-gold-glow">
                        Authenticate CMS
                    </button>
                    <p id="admin-login-err" class="text-xs text-red-500 text-center hidden">Incorrect password. Please try again.</p>
                </div>
            </div>

            <!-- CMS Content View (When Logged In) -->
            <div id="admin-cms-view" class="hidden flex-1 flex flex-col overflow-hidden">
                <!-- Navigation Tabs inside CMS -->
                <div class="flex border-b border-gold-500/20 bg-charcoal/50 overflow-x-auto text-xs uppercase tracking-wider font-semibold">
                    <button onclick="switchCmstab('general')" id="tab-btn-general" class="cms-tab-btn px-6 py-4 border-b-2 border-gold-500 text-gold-400">General & Branding</button>
                    <button onclick="switchCmstab('logos')" id="tab-btn-logos" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Logo Center</button>
                    <button onclick="switchCmstab('typography')" id="tab-btn-typography" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Font Sizes</button>
                    <button onclick="switchCmstab('images')" id="tab-btn-images" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Site Images & Founder</button>
                    <button onclick="switchCmstab('articles')" id="tab-btn-articles" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Articles & Blog</button>
                    <button onclick="switchCmstab('realestate')" id="tab-btn-realestate" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Properties & Owners</button>
                    <button onclick="switchCmstab('jewels')" id="tab-btn-jewels" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Jewelry Products</button>
                    <button onclick="switchCmstab('careers')" id="tab-btn-careers" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Applications</button><button onclick="switchCmstab('leads')" id="tab-btn-leads" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Inquiries</button>
                    <button onclick="switchCmstab('gemini')" id="tab-btn-gemini" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Gemini Chat</button>
                    <button onclick="switchCmstab('password')" id="tab-btn-password" class="cms-tab-btn px-6 py-4 text-gray-400 hover:text-white">Passcode</button>
                </div>

                <!-- Tab Panels -->
                <div class="flex-1 overflow-y-auto p-6 space-y-8 cms-content-scroll">
                    
                    <!-- TAB 1: General Settings -->
                    <div id="cms-tab-general" class="cms-panel space-y-6">
                        <h4 class="font-cinzel text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">Site Content & Contact Settings</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs text-gray-300 font-semibold mb-1">Main Headline</label>
                                <input type="text" id="cms-headline" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white">
                            </div>
                            <div>
                                <label class="block text-xs text-gray-300 font-semibold mb-1">Sub-Headline Tagline</label>
                                <input type="text" id="cms-subheadline" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs text-gray-300 font-semibold mb-1">Rykaar Phone Hotline</label>
                                <input type="text" id="cms-phone" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white">
                            </div>
                            <div>
                                <label class="block text-xs text-gray-300 font-semibold mb-1">Official Email Address</label>
                                <input type="text" id="cms-email" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs text-gray-300 font-semibold mb-1">Founder Biography</label>
                            <input id="cms-founder-name" type="text" placeholder="Founder name" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"><input id="cms-founder-title" type="text" placeholder="Founder title" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"><textarea id="cms-founder-bio" rows="3" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"></textarea><label class="block text-xs text-gray-300 font-semibold mb-1">About / Brand Introduction</label><textarea id="cms-about-text" rows="3" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"></textarea>
                        </div>

                        <button onclick="saveGeneralSettings()" class="px-6 py-2.5 rounded-full gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow">
                            Save General Settings
                        </button>
                    </div>

                    <!-- TAB 2: LOGO EDIT CENTER (TOP RIGHT & BOTTOM FOOTER CORNERS) -->
                    <div id="cms-tab-logos" class="cms-panel space-y-6">
                        <h4 class="font-cinzel text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">Logo Management (Top Nav & Footer)</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Main Header Brand Logo -->
                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-3">
                                <span class="text-xs font-bold uppercase text-gold-400">Primary Header Brand Logo</span>
                                <input type="file" accept="image/*" onchange="uploadCmsImage(this, 'main_logo')" class="w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black">
                                <div class="h-20 bg-black rounded-lg p-2 flex items-center justify-center border border-dashed border-gray-700">
                                    <img id="preview-cms-main-logo" src="" class="h-full object-contain hidden">
                                    <span id="fallback-cms-main-logo" class="text-xs text-gray-500">No Logo Uploaded</span>
                                </div>
                            </div>

                            <!-- Top Right Corner Badge Logo -->
                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-3">
                                <span class="text-xs font-bold uppercase text-gold-400">Top Right Corner Logo</span>
                                <input type="file" accept="image/*" onchange="uploadCmsImage(this, 'top_right_logo')" class="w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black">
                                <div class="h-20 bg-black rounded-lg p-2 flex items-center justify-center border border-dashed border-gray-700">
                                    <img id="preview-cms-top-right-logo" src="" class="h-full object-contain hidden">
                                    <span id="fallback-cms-top-right-logo" class="text-xs text-gray-500">No Top Right Logo</span>
                                </div>
                            </div>

                            <!-- Bottom Footer Corner Logo -->
                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-3">
                                <span class="text-xs font-bold uppercase text-gold-400">Bottom Footer Corner Logo</span>
                                <input type="file" accept="image/*" onchange="uploadCmsImage(this, 'mini_logo')" class="w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black">
                                <div class="h-20 bg-black rounded-lg p-2 flex items-center justify-center border border-dashed border-gray-700">
                                    <img id="preview-cms-mini-logo" src="" class="h-full object-contain hidden">
                                    <span id="fallback-cms-mini-logo" class="text-xs text-gray-500">No Footer Logo</span>
                                </div>
                            </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3"><label class="text-xs text-gray-300">Header logo size <input id="logoSizeHeader" type="range" min="28" max="88" value="44" oninput="updateLogoSizes()" class="w-full accent-gold-500"></label><label class="text-xs text-gray-300">Top right logo size <input id="logoSizeTop" type="range" min="24" max="120" value="48" oninput="updateLogoSizes()" class="w-full accent-gold-500"></label><label class="text-xs text-gray-300">Footer logo size <input id="logoSizeFooter" type="range" min="28" max="100" value="48" oninput="updateLogoSizes()" class="w-full accent-gold-500"></label></div>
                    </div>

                    <!-- TAB 3: TYPOGRAPHY & FONT SIZES -->
                    <div id="cms-tab-typography" class="cms-panel space-y-6">
                        <h4 class="font-cinzel text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">Site Font Size Controls</h4>
                        
                        <label class="block text-xs text-gray-300">Site font family <select id="fontFamilyChoice" onchange="updateFontSizes()" class="ml-2 bg-charcoal border border-gold-500/30 rounded-lg p-2"><option value="Montserrat">Montserrat</option><option value="Arial">Arial</option><option value="Georgia">Georgia</option><option value="Trebuchet MS">Trebuchet MS</option></select></label><div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-2">
                                <label class="block text-xs font-bold uppercase text-gray-300">Body Font Size (px)</label>
                                <input type="range" id="fontSizeBody" min="12" max="20" step="1" oninput="updateFontSizes()" class="w-full accent-gold-500">
                                <span id="lblFontSizeBody" class="text-xs text-gold-400 font-semibold">15px</span>
                            </div>

                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-2">
                                <label class="block text-xs font-bold uppercase text-gray-300">Section Headings Size (px)</label>
                                <input type="range" id="fontSizeHeadings" min="20" max="48" step="1" oninput="updateFontSizes()" class="w-full accent-gold-500">
                                <span id="lblFontSizeHeadings" class="text-xs text-gold-400 font-semibold">32px</span>
                            </div>

                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-2">
                                <label class="block text-xs font-bold uppercase text-gray-300">Hero Main Title Size (px)</label>
                                <input type="range" id="fontSizeHero" min="36" max="90" step="2" oninput="updateFontSizes()" class="w-full accent-gold-500">
                                <span id="lblFontSizeHero" class="text-xs text-gold-400 font-semibold">64px</span>
                            </div>
                        </div>

                        <button onclick="saveTypographySettings()" class="px-6 py-2.5 rounded-full gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow">
                            Save Font Preferences
                        </button>
                    </div>

                    <!-- TAB 4: SITE IMAGES & FOUNDER PHOTO UPLOAD -->
                    <div id="cms-tab-images" class="cms-panel space-y-6">
                        <h4 class="font-cinzel text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">Image Manager (Local File Uploads)</h4>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Founder Photo Upload -->
                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-3">
                                <span class="text-xs font-bold uppercase text-gold-400">Founder Profile Photo Upload</span>
                                <input type="file" accept="image/*" onchange="uploadCmsImage(this, 'founder_img')" class="w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black">
                                <div class="h-32 bg-black rounded-lg overflow-hidden border border-dashed border-gray-700 flex items-center justify-center">
                                    <img id="preview-cms-founder-img" src="" class="h-full w-full object-cover hidden">
                                    <span id="fallback-cms-founder-img" class="text-xs text-gray-500 p-4 block text-center">Default Founder Photo Active</span>
                                </div>
                            </div>

                            <!-- Hero Section Backdrop Image Upload -->
                            <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal space-y-3">
                                <span class="text-xs font-bold uppercase text-gold-400">Hero Background Backdrop</span>
                                <input type="file" accept="image/*" onchange="uploadCmsImage(this, 'hero_bg')" class="w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black">
                                <div class="h-32 bg-black rounded-lg overflow-hidden border border-dashed border-gray-700 flex items-center justify-center">
                                    <img id="preview-cms-hero-bg" src="" class="w-full h-full object-cover hidden">
                                    <span id="fallback-cms-hero-bg" class="text-xs text-gray-500 p-4 block text-center">Default Hero Background Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- TAB 5: ARTICLES & INSIGHTS BLOG EDITOR WITH IMAGE UPLOAD -->
                    <div id="cms-tab-articles" class="cms-panel space-y-6">
                        <div class="flex items-center justify-between border-b border-gold-500/20 pb-3">
                            <h4 class="font-cinzel text-lg font-bold text-gold-400">Articles & Insights Publisher</h4>
                            <button onclick="toggleArticleForm()" class="px-4 py-1.5 rounded-full border border-gold-500 text-gold-400 text-xs font-bold uppercase">Publish New Article</button>
                        </div>

                        <!-- Add Article Form -->
                        <div id="cms-article-form" class="hidden p-4 rounded-2xl border border-gold-500/30 bg-charcoal space-y-4">
                            <h5 class="font-cinzel text-sm font-bold text-white">New Article Details</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" id="article-title-input" placeholder="Article Title *" class="bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-xs text-white">
                                <input type="text" id="article-tag-input" placeholder="Category Tag (e.g. Real Estate, Jewelry)" class="bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-xs text-white">
                            </div>
                            <div>
                                <label class="block text-[10px] text-gray-400 uppercase mb-1">Article Featured Image Upload</label>
                                <input type="file" id="article-file-input" accept="image/*" onchange="stageNewArticleImage(this)" class="w-full text-xs text-gray-400 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black">
                                <input type="hidden" id="article-img-temp">
                            </div>
                            <textarea id="article-excerpt-input" rows="3" placeholder="Article Summary / Content Excerpt *" class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-xs text-white"></textarea>
                            <button onclick="saveNewArticle()" class="px-6 py-2 rounded-full gold-gradient-bg text-black font-bold text-xs uppercase">Save Article</button>
                        </div>

                        <!-- Published Articles Table -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs text-gray-300">
                                <thead class="uppercase bg-charcoal text-gold-400 border-b border-gold-500/30">
                                    <tr>
                                        <th class="p-3">Title</th>
                                        <th class="p-3">Category</th>
                                        <th class="p-3">Date</th>
                                        <th class="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="cms-articles-tbody" class="divide-y divide-gray-800">
                                    <!-- Dynamic Articles -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- TAB 6: Real Estate Properties -->
                    <div id="cms-tab-realestate" class="cms-panel space-y-6">
                        <div class="flex items-center justify-between border-b border-gold-500/20 pb-3">
                            <h4 class="font-cinzel text-lg font-bold text-gold-400">Real Estate Property Listings & Owner Leads</h4>
                            <button onclick="openListingModal(); closeAdminModal();" class="px-4 py-1.5 rounded-full border border-gold-500 text-gold-400 text-xs font-bold uppercase">Add Property</button>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs text-gray-300">
                                <thead class="uppercase bg-charcoal text-gold-400 border-b border-gold-500/30">
                                    <tr>
                                        <th class="p-3">Title</th>
                                        <th class="p-3">Category</th>
                                        <th class="p-3">Price</th>
                                        <th class="p-3">Owner Name</th>
                                        <th class="p-3">Owner Contact (Recorded)</th>
                                        <th class="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="cms-properties-tbody" class="divide-y divide-gray-800">
                                    <!-- Injected via JS -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- TAB 4: Jewelry Products -->
                    <div id="cms-tab-jewels" class="cms-panel space-y-6">
                        <div class="flex items-center justify-between border-b border-gold-500/20 pb-3">
                            <h4 class="font-cinzel text-lg font-bold text-gold-400">Rykaar Jewellers Catalog</h4>
                            <button onclick="toggleJewelryForm()" class="px-4 py-1.5 rounded-full border border-gold-500 text-gold-400 text-xs font-bold uppercase">Add New Item</button>
                        </div>

                        <div id="cms-jewelry-form" class="hidden p-5 rounded-2xl border border-gold-500/30 bg-charcoal space-y-4">
                            <h5 class="font-cinzel text-white font-bold">Add a jewellery product</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3"><input id="new-jewelry-title" placeholder="Product name *" class="bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"><input id="new-jewelry-code" placeholder="Item code" class="bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"><input id="new-jewelry-price" placeholder="Price or Price on Request" class="bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"></div>
                            <textarea id="new-jewelry-desc" rows="2" placeholder="Product description" class="w-full bg-obsidian border border-gold-500/30 rounded-xl px-4 py-2 text-sm text-white"></textarea>
                            <label class="block text-xs text-gray-300">Product image <input id="new-jewelry-file" type="file" accept="image/*" onchange="stageNewJewelryImage(this)" class="block mt-2 w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold-500 file:text-black"></label>
                            <input id="new-jewelry-image-data" type="hidden"><img id="new-jewelry-preview" class="hidden h-32 w-32 rounded-xl object-cover border border-gold-500/30" alt="Product preview">
                            <div class="flex gap-3"><button onclick="saveJewelryProduct()" class="px-5 py-2 rounded-full gold-gradient-bg text-black text-xs font-bold uppercase">Publish Product</button><button onclick="toggleJewelryForm()" class="px-5 py-2 rounded-full border border-gray-600 text-gray-300 text-xs uppercase">Cancel</button></div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="cms-jewelry-list">
                            <!-- Injected via JS -->
                        </div>
                    </div>

                    <!-- TAB 5: Career Applications -->
                    <div id="cms-tab-careers" class="cms-panel space-y-6">
                        <h4 class="font-cinzel text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">Submitted Job Applications</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs text-gray-300">
                                <thead class="uppercase bg-charcoal text-gold-400 border-b border-gold-500/30">
                                    <tr>
                                        <th class="p-3">Applicant Name</th>
                                        <th class="p-3">Phone</th>
                                        <th class="p-3">Email</th>
                                        <th class="p-3">Department</th>
                                        <th class="p-3">Resume File</th>
                                    </tr>
                                </thead>
                                <tbody id="cms-careers-tbody" class="divide-y divide-gray-800">
                                    <!-- Injected via JS -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="cms-tab-leads" class="cms-panel space-y-6"><h4 class="font-cinzel text-lg font-bold text-gold-400">Website Contact & Jewellery Enquiries</h4><div class="overflow-x-auto"><table class="w-full text-left text-xs text-gray-300"><thead class="uppercase bg-charcoal text-gold-400"><tr><th class="p-3">Date</th><th class="p-3">Name</th><th class="p-3">Phone / Email</th><th class="p-3">Interest</th><th class="p-3">Message</th><th class="p-3">Action</th></tr></thead><tbody id="cms-leads-tbody"></tbody></table></div><button onclick="exportLeads()" class="px-5 py-2 rounded-full border border-gold-500 text-gold-400 text-xs">Download enquiry records</button></div><!-- TAB 6: Passcode Management -->
                    <div id="cms-tab-gemini" class="cms-panel space-y-6 max-w-3xl">
                        <h4 class="font-cinzel text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">Rykaar Gemini Chat</h4>
                        <p class="text-sm text-gray-400">Connect Gemini to power the floating website chat. Your API key is sent to the local site server and kept in server memory; it is never saved in this page or returned to visitors. For a public launch, configure the key as a server environment variable.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label class="text-xs text-gray-300">Gemini API key <input id="gemini-api-key" type="password" autocomplete="off" placeholder="Paste your Gemini API key" class="mt-2 w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white"></label>
                            <label class="text-xs text-gray-300">Model <input id="gemini-model" value="gemini-3.8-flash" class="mt-2 w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white"></label>
                            <label class="text-xs text-gray-300">Chat title <input id="gemini-title" value="Chat with Rykaar" class="mt-2 w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white"></label>
                            <label class="text-xs text-gray-300">Welcome message <input id="gemini-greeting" value="Welcome to Rykaar. How can we help you today?" class="mt-2 w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white"></label>
                        </div>
                        <label class="block text-xs text-gray-300">Assistant instructions <textarea id="gemini-instructions" rows="4" class="mt-2 w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-3 text-sm text-white">You are Rykaar Official's helpful virtual assistant. Help visitors with Rykaar Real Estate, Rykaar Jewellers, Rykaar One business consultancy, and Rykaar Resorts. Do not invent prices, availability, or company policies. For verified details, direct visitors to 8618884588 or rykaarofficial@gmail.com.</textarea></label>
                        <div class="flex flex-wrap items-center gap-3"><button onclick="saveGeminiSettings()" class="px-6 py-3 rounded-full gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider">Save & Connect Gemini</button><button onclick="disconnectGemini()" class="px-5 py-3 rounded-full border border-gold-500/50 text-gold-400 text-xs uppercase tracking-wider">Disconnect</button><span id="gemini-admin-status" class="text-xs text-gray-400">Checking Gemini connection…</span></div>
                    </div>

                    <div id="cms-tab-password" class="cms-panel space-y-6 max-w-md">
                        <h4 class="font-cinzel text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">Change CMS Passcode</h4>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs text-gray-300 font-semibold mb-1">New Passcode</label>
                                <input type="password" id="new-admin-pass" class="w-full bg-charcoal border border-gold-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500">
                            </div>
                            <button onclick="saveNewPasscode()" class="px-6 py-2.5 rounded-full gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider">
                                Update Password
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div id="gemini-chat-widget" class="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <section id="gemini-chat-panel" class="hidden w-[min(92vw,390px)] overflow-hidden rounded-2xl border border-gold-500/40 bg-[#111]">
            <header class="flex items-center justify-between border-b border-gold-500/20 bg-charcoal px-4 py-3">
                <div class="flex min-w-0 items-center gap-3"><img id="gemini-chat-logo" src="" alt="Rykaar" class="hidden h-10 w-10 shrink-0 rounded-full border border-gold-500/50 bg-black object-cover p-1"><span id="gemini-chat-logo-fallback" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/50 font-cinzel text-lg font-bold text-gold-400">R</span><div class="min-w-0"><div id="gemini-chat-title" class="truncate font-cinzel text-sm font-bold text-white">Chat with Rykaar</div><div id="gemini-chat-status" class="text-[10px] text-gray-400">Connecting…</div></div></div>
                <button type="button" onclick="toggleGeminiChat(false)" aria-label="Close chat" class="ml-3 rounded-full px-2 text-xl text-gray-400 hover:text-white">×</button>
            </header>
            <div id="gemini-chat-messages" class="flex h-80 flex-col gap-3 overflow-y-auto p-4" aria-live="polite"></div>
            <form onsubmit="sendGeminiMessage(event)" class="flex items-end gap-2 border-t border-gold-500/20 bg-charcoal p-3">
                <textarea id="gemini-chat-input" rows="1" maxlength="2000" placeholder="Ask Rykaar…" class="max-h-24 min-h-11 flex-1 resize-y rounded-xl border border-gold-500/30 bg-black px-3 py-3 text-sm text-white outline-none focus:border-gold-500"></textarea>
                <button id="gemini-chat-send" type="submit" aria-label="Send message" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full gold-gradient-bg text-black"><i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </section>
        <button id="gemini-chat-toggle" type="button" onclick="toggleGeminiChat()" aria-label="Open chat with Rykaar" class="flex items-center gap-3 rounded-full border border-gold-500/60 bg-[#111] p-2 pr-5 text-sm font-semibold text-white shadow-lg hover:border-gold-400">
            <img id="gemini-float-logo" src="" alt="" class="hidden h-11 w-11 rounded-full border border-gold-500/50 bg-black object-cover p-1"><span id="gemini-float-logo-fallback" class="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-cinzel text-xl font-bold text-black">R</span><span>Chat with Rykaar</span>
        </button>
    </div>

    <!-- JAVASCRIPT LOGIC persistent with LOCALSTORAGE -->
    <script>
        const pendingCmsImages = {};
        const pendingJewelryImages = {};
        const pendingArticleImages = {};
        let pendingNewJewelryImage = null;
        let pendingNewArticleImage = null;
        let pendingPublicFile = null;
        let pendingPropertyFiles = [];
        const assetUrlCache = {};
        let rykaarDbPromise = null;
        let geminiChatHistory = [];
        let geminiSettings = { model:'gemini-3.8-flash', title:'Chat with Rykaar', greeting:'Welcome to Rykaar. How can we help you today?', instructions:'' };

        function openRykaarDb() {
            if (!window.indexedDB) return Promise.reject(new Error('Browser file storage is unavailable.'));
            if (!rykaarDbPromise) rykaarDbPromise = new Promise((resolve,reject)=>{const req=indexedDB.open('RykaarSiteFiles',1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('files'))req.result.createObjectStore('files',{keyPath:'key'});};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error||new Error('Could not open browser file storage.'));});
            return rykaarDbPromise;
        }
        async function storeBinary(key,file) { const db=await openRykaarDb(); return new Promise((resolve,reject)=>{const tx=db.transaction('files','readwrite');tx.objectStore('files').put({key,blob:file,name:file.name||key,type:file.type||'application/octet-stream',updated:Date.now()});tx.oncomplete=()=>resolve('db:'+key);tx.onerror=()=>reject(tx.error||new Error('Could not save the selected file.'));tx.onabort=()=>reject(tx.error||new Error('Could not save the selected file.'));}); }
        async function readBinary(key) { const db=await openRykaarDb(); return new Promise((resolve,reject)=>{const req=db.transaction('files','readonly').objectStore('files').get(key);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error);}); }
        function getImageUrl(ref) { if (!ref) return ''; return String(ref).startsWith('db:') ? (assetUrlCache[ref]||'') : ref; }
        async function hydrateFileUrls() {
            const refs=[];
            ['main_logo','top_right_logo','mini_logo','hero_bg','founder_img'].forEach(k=>{const v=localStorage.getItem('rykaar_img_'+k);if(v)refs.push(v);});
            ['rykaar_properties','rykaar_jewelry','rykaar_blogs'].forEach(key=>{try{JSON.parse(localStorage.getItem(key)||'[]').forEach(item=>{if(item.img)refs.push(item.img);(item.images||[]).forEach(v=>refs.push(v));});}catch(_){}});
            try{JSON.parse(localStorage.getItem('rykaar_public_files')||'[]').forEach(item=>{if(item.fileRef)refs.push(item.fileRef);});}catch(_){}
            for(const ref of new Set(refs)){if(!String(ref).startsWith('db:')||assetUrlCache[ref])continue;try{const row=await readBinary(String(ref).slice(3));if(row&&row.blob)assetUrlCache[ref]=URL.createObjectURL(row.blob);}catch(_){}}
        }
        async function migrateLargeImages() {
            for(const key of ['main_logo','top_right_logo','mini_logo','hero_bg','founder_img']){const lsKey='rykaar_img_'+key;const val=localStorage.getItem(lsKey);if(val&&val.startsWith('data:')){const blob=await (await fetch(val)).blob();const ref=await storeBinary('image:site:'+key,blob);localStorage.setItem(lsKey,ref);}}
            for(const [storeKey,prefix] of [['rykaar_properties','image:property:'],['rykaar_jewelry','image:jewelry:'],['rykaar_blogs','image:article:']]){let rows;try{rows=JSON.parse(localStorage.getItem(storeKey)||'[]');}catch(_){continue;}let changed=false;for(const row of rows){if(row.img&&row.img.startsWith('data:')){const ref=await storeBinary(prefix+row.id,await (await fetch(row.img)).blob());row.img=ref;changed=true;}if(Array.isArray(row.images)){for(let i=0;i<row.images.length;i++){if(row.images[i]&&row.images[i].startsWith('data:')){row.images[i]=await storeBinary(prefix+row.id+':'+i,await (await fetch(row.images[i])).blob());changed=true;}}}}if(changed)localStorage.setItem(storeKey,JSON.stringify(rows));}
        }
        function stagePublicFile(input) { pendingPublicFile=input.files&&input.files[0]||null;const box=document.getElementById('public-file-pending');if(box)box.textContent=pendingPublicFile?`Ready to upload: ${pendingPublicFile.name}`:'';setCmsUpdateStatus(pendingPublicFile?'File ready. Click Update Site to publish it.':''); }
        function renderPublicFiles() {
            const grid=document.getElementById('public-files-grid'),admin=document.getElementById('cms-public-files'),section=document.getElementById('public-downloads');if(!grid||!admin)return;
            const files=JSON.parse(localStorage.getItem('rykaar_public_files')||'[]');section.classList.toggle('hidden',files.length===0);
            const rowHtml=f=>{const url=getImageUrl(f.fileRef);return `<a href="${url||'#'}" ${url?'download=""':''} class="block p-5 rounded-2xl bg-darkcard gold-card-border"><span class="text-[10px] text-gold-400 uppercase tracking-widest">${f.category}</span><h3 class="font-cinzel text-white mt-2">${f.title||f.name}</h3><p class="text-xs text-gray-400 mt-2">${f.name}</p></a>`;};
            grid.innerHTML=files.map(rowHtml).join('');admin.innerHTML=files.map(rowHtml).join('')||'<p class="text-xs text-gray-500">No public files have been uploaded.</p>';
        }
        // --- DEFAULT STATE DATA ---
        const defaultProperties = [
            { id: 1, title: 'The Solitaire Royal Penthouse', type: 'Penthouse', price: '₹ 12.5 Cr', location: 'Goa Coast', owner: 'Rykaar Direct', phone: '8618884588', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', desc: '5 BHK Sea View Mansion with private helipad access and infinity pool.' },
            { id: 2, title: 'Imperial Heights Commercial Hub', type: 'Commercial', price: '₹ 28.0 Cr', location: 'Mumbai Financial District', owner: 'Rykaar Direct', phone: '8618884588', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', desc: '15,000 Sq.Ft Grade-A corporate tower with high ROI.' },
            { id: 3, title: 'Grand Marquis Heritage Villa', type: 'Villa', price: '₹ 8.2 Cr', location: 'North Goa', owner: 'P. V. Sharma', phone: '9845012345', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80', desc: 'Portuguese colonial architecture meets modern ultra-luxury.' },
            { id: 4, title: 'Crown Estate Coffee Plantation', type: 'Estate', price: '₹ 18.0 Cr', location: 'Coorg Hills', owner: 'Rykaar Direct', phone: '8618884588', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', desc: '50-acre private coffee estate with luxury bungalow.' },
            { id: 101, title: 'Coastal Serenity Villa — Showcase', type: 'Villa', price: 'Price on Request', location: 'North Goa', owner: 'Rykaar Showcase', phone: '8618884588', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85', desc: 'Illustrative showcase listing with private gardens, generous living spaces, and a resort-inspired pool. Availability and details to be confirmed with Rykaar.' },
            { id: 102, title: 'The Grand Veranda Residence — Showcase', type: 'Villa', price: 'Price on Request', location: 'Bengaluru', owner: 'Rykaar Showcase', phone: '8618884588', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85', desc: 'Illustrative modern residence with landscaped outdoor areas and elegant interiors. Availability and details to be confirmed with Rykaar.' },
            { id: 103, title: 'Signature Business Suites — Showcase', type: 'Commercial', price: 'Price on Request', location: 'Mumbai', owner: 'Rykaar Showcase', phone: '8618884588', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85', desc: 'Illustrative premium office suite showcase for growing businesses. Availability, specifications, and terms to be confirmed with Rykaar.' }
        ];

        const defaultJewelry = [
            { id: 1, title: 'The Royal Sovereign Diamond Necklace', price: '₹ 18,50,000', code: 'RJ-101', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80', desc: '18K Gold adorned with VVS1 brilliant cut diamonds.' },
            { id: 2, title: 'Imperial Solitaire Diamond Ring', price: '₹ 4,20,000', code: 'RJ-102', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80', desc: '3-Carat oval solitaire crafted in platinum.' },
            { id: 3, title: 'Monarch Heritage Emerald Bangles', price: '₹ 9,80,000', code: 'RJ-103', img: 'https://images.unsplash.com/photo-1611591475155-4282faa7c2e7?auto=format&fit=crop&w=800&q=80', desc: 'Zambian emeralds inlaid in 22K handcrafted gold.' },
            { id: 4, title: 'Chrono-Excellence Tourbillon Watch', price: '₹ 22,00,000', code: 'RJ-104', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', desc: 'Rose gold hand-wound tourbillon chronometer.' },
            { id: 101, title: 'Celestial Bloom Diamond Pendant', price: 'Price on Request', code: 'RJ-105', img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85', desc: 'A refined floral-inspired jewellery design showcase. Materials, stone grading, and final pricing confirmed on enquiry.' },
            { id: 102, title: 'Heritage Gold Cuff', price: 'Price on Request', code: 'RJ-106', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85', desc: 'A sculpted statement cuff design showcase. Available finishes and specifications confirmed on enquiry.' },
            { id: 103, title: 'Royal Arc Diamond Earrings', price: 'Price on Request', code: 'RJ-107', img: 'https://images.unsplash.com/photo-1635767798638-3665a6c6b9b7?auto=format&fit=crop&w=1000&q=85', desc: 'Elegant occasion-wear earrings design showcase. Stone details and final pricing confirmed on enquiry.' },
            { id: 104, title: 'Midnight Star Sapphire Ring', price: 'Price on Request', code: 'RJ-108', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85', desc: 'A deep-blue gemstone ring design from the Rykaar showcase collection. Stone details and final pricing confirmed on enquiry.' },
            { id: 105, title: 'Golden Heirloom Pendant', price: 'Price on Request', code: 'RJ-109', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85', desc: 'A contemporary heirloom pendant design showcase. Materials and final pricing confirmed on enquiry.' }
        ];

        const defaultBlogs = [
            { id: 1, title: 'Investing in Ultra-Luxury Real Estate in 2026', date: 'Oct 15, 2026', tag: 'Real Estate', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', excerpt: 'Why high-net-worth investors are pivoting towards coastal heritage villas and bespoke commercial estates.' },
            { id: 2, title: 'The Craftsmanship of Investment Grade Diamonds', date: 'Sep 28, 2026', tag: 'Jewelry', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80', excerpt: 'Understanding clarity, cut, and rare gemstone appreciation in modern luxury portfolios.' },
            { id: 3, title: 'Scaling Boutique Hospitality Turnarounds', date: 'Aug 14, 2026', tag: 'Rykaar One', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', excerpt: 'Operational strategies for elevating boutique resorts into internationally acclaimed destinations.' },
            { id: 4, title: 'Designing a Resort Guests Remember', date: 'Oct 22, 2026', tag: 'Rykaar Resorts', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85', excerpt: 'Memorable hospitality starts with a clear sense of place. Thoughtful arrival moments, attentive service, and local character can turn a stay into a reason to return.' },
            { id: 5, title: 'A Thoughtful Guide to Choosing Fine Jewellery', date: 'Oct 22, 2026', tag: 'Jewellery', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85', excerpt: 'Explore design, craftsmanship, materials, and care when choosing a special jewellery piece. Ask for item-specific details and certification before purchase.' }
        ];

        // --- LOCALSTORAGE INITIALIZATION ---
        function initData() {
            if (!localStorage.getItem('rykaar_properties')) {
                localStorage.setItem('rykaar_properties', JSON.stringify(defaultProperties));
            }
            if (!localStorage.getItem('rykaar_jewelry')) {
                localStorage.setItem('rykaar_jewelry', JSON.stringify(defaultJewelry));
            }
            const storedProperties = JSON.parse(localStorage.getItem('rykaar_properties') || '[]');
            const propertyTitles = new Set(storedProperties.map(item => item.title));
            defaultProperties.filter(item => item.id >= 101 && !propertyTitles.has(item.title)).forEach(item => storedProperties.push(item));
            localStorage.setItem('rykaar_properties', JSON.stringify(storedProperties));
            const storedJewelry = JSON.parse(localStorage.getItem('rykaar_jewelry') || '[]');
            const jewelryTitles = new Set(storedJewelry.map(item => item.title));
            defaultJewelry.filter(item => item.id >= 101 && !jewelryTitles.has(item.title)).forEach(item => storedJewelry.push(item));
            localStorage.setItem('rykaar_jewelry', JSON.stringify(storedJewelry));
            let blogItems = JSON.parse(localStorage.getItem('rykaar_blogs') || '[]');
            if (localStorage.getItem('rykaar_blog_seed_v1') !== 'done') {
                const blogTitles = new Set(blogItems.map(item => item.title));
                defaultBlogs.filter(item => !blogTitles.has(item.title)).forEach(item => blogItems.push(item));
                localStorage.setItem('rykaar_blogs', JSON.stringify(blogItems));
                localStorage.setItem('rykaar_blog_seed_v1', 'done');
            }
            if (localStorage.getItem('rykaar_blog_seed_v2') !== 'done') {
                const blogTitles = new Set(blogItems.map(item => item.title));
                defaultBlogs.filter(item => item.id >= 4 && !blogTitles.has(item.title)).forEach(item => blogItems.push(item));
                localStorage.setItem('rykaar_blogs', JSON.stringify(blogItems));
                localStorage.setItem('rykaar_blog_seed_v2', 'done');
            }
            if (!localStorage.getItem('rykaar_careers')) {
                localStorage.setItem('rykaar_careers', JSON.stringify([]));
            }
            if (!localStorage.getItem('rykaar_admin_pass')) {
                localStorage.setItem('rykaar_admin_pass', 'admin');
            }
            if (!localStorage.getItem('rykaar_phone')) {
                localStorage.setItem('rykaar_phone', '8618884588');
            }
            if (!localStorage.getItem('rykaar_email')) {
                localStorage.setItem('rykaar_email', 'rykaarofficial@gmail.com');
            }
            if (!localStorage.getItem('rykaar_headline')) {
                localStorage.setItem('rykaar_headline', 'RYKAAR');
            }
            if (!localStorage.getItem('rykaar_subheadline')) {
                localStorage.setItem('rykaar_subheadline', 'The Pinnacle of Excellence Across Diverse Industries');
            }
            if (!localStorage.getItem('rykaar_founder_name')) localStorage.setItem('rykaar_founder_name','The Founder'); if (!localStorage.getItem('rykaar_founder_title')) localStorage.setItem('rykaar_founder_title','Visionary & Managing Director'); if (!localStorage.getItem('rykaar_about_text')) localStorage.setItem('rykaar_about_text',document.getElementById('about-ethos-text').innerText.trim());
            if (!localStorage.getItem('rykaar_founder_bio')) {
                localStorage.setItem('rykaar_founder_bio', '"Excellence is not a singular act, but an enduring habit of perfection across every enterprise we pioneer. At Rykaar, our commitment to our clients and partners is founded on uncompromising trust, flawless execution, and visionary innovation."');
            }

            document.getElementById('current-year').innerText = new Date().getFullYear(); const sz=JSON.parse(localStorage.getItem('rykaar_logo_sizes')||'[44,48,48]');['logoSizeHeader','logoSizeTop','logoSizeFooter'].forEach((id,i)=>{if(document.getElementById(id))document.getElementById(id).value=sz[i]}); const ff=localStorage.getItem('rykaar_font_family');if(ff)document.getElementById('fontFamilyChoice').value=ff; ['fontSizeBody','fontSizeHeadings','fontSizeHero'].forEach((id,i)=>{const v=localStorage.getItem(['rykaar_font_body','rykaar_font_headings','rykaar_font_hero'][i]);if(v)document.getElementById(id).value=v}); updateFontSizes(); updateLogoSizes();
            renderAll();
        }

        // --- RENDER FUNCTIONS ---
        function renderAll() {
            renderGeneralInfo();
            renderLogosAndImages();
            renderFeaturedCards();
            renderProperties('All');
            renderJewelry();
            renderBlogs();
        }

        function renderGeneralInfo() {
            const phone = localStorage.getItem('rykaar_phone');
            const email = localStorage.getItem('rykaar_email');
            const headline = localStorage.getItem('rykaar_headline');
            const subheadline = localStorage.getItem('rykaar_subheadline');
            const founderBio = localStorage.getItem('rykaar_founder_bio'); const founderName=localStorage.getItem('rykaar_founder_name')||'The Founder'; const founderTitle=localStorage.getItem('rykaar_founder_title')||'Visionary & Managing Director'; const aboutText=localStorage.getItem('rykaar_about_text')||''; document.getElementById('founder-name').innerText=founderName; document.getElementById('founder-title').innerText=founderTitle; document.getElementById('about-ethos-text').innerText=aboutText;

            document.getElementById('contact-phone-display').innerText = '+91 ' + phone;
            document.getElementById('contact-phone-display').href = 'tel:' + phone;
            document.getElementById('contact-email-display').innerText = email;
            document.getElementById('contact-email-display').href = 'mailto:' + email;
            
            document.getElementById('hero-headline').innerText = headline;
            document.getElementById('hero-subheadline').innerText = subheadline;
            document.getElementById('founder-bio').innerText = founderBio;

            // Fill CMS fields
            document.getElementById('cms-headline').value = headline;
            document.getElementById('cms-subheadline').value = subheadline;
            document.getElementById('cms-phone').value = phone;
            document.getElementById('cms-email').value = email;
            document.getElementById('cms-founder-bio').value = founderBio; document.getElementById('cms-founder-name').value=founderName; document.getElementById('cms-founder-title').value=founderTitle; document.getElementById('cms-about-text').value=aboutText;
        }

        function renderLogosAndImages() {
            const mainLogo = getImageUrl(localStorage.getItem('rykaar_img_main_logo'));
            const topRightLogo = getImageUrl(localStorage.getItem('rykaar_img_top_right_logo'));
            const miniLogo = getImageUrl(localStorage.getItem('rykaar_img_mini_logo'));
            const heroBg = getImageUrl(localStorage.getItem('rykaar_img_hero_bg'));
            const founderImg = getImageUrl(localStorage.getItem('rykaar_img_founder_img'));
            const chatLogo = mainLogo || miniLogo || topRightLogo;
            [['gemini-chat-logo','gemini-chat-logo-fallback'],['gemini-float-logo','gemini-float-logo-fallback']].forEach(([imageId,fallbackId])=>{const image=document.getElementById(imageId),fallback=document.getElementById(fallbackId);if(chatLogo&&image){image.src=chatLogo;image.classList.remove('hidden');if(fallback)fallback.classList.add('hidden');}else if(image){image.classList.add('hidden');if(fallback)fallback.classList.remove('hidden');}});

            // Nav & Hero Logo
            if (mainLogo) {
                document.getElementById('nav-logo-img').src = mainLogo;
                document.getElementById('nav-logo-img').classList.remove('hidden');
                document.getElementById('nav-logo-fallback').classList.add('hidden');

                document.getElementById('hero-logo-img').src = mainLogo;
                document.getElementById('hero-logo-img').classList.remove('hidden');
                document.getElementById('hero-logo-fallback').classList.add('hidden');

                document.getElementById('preview-cms-main-logo').src = mainLogo;
                document.getElementById('preview-cms-main-logo').classList.remove('hidden');
                document.getElementById('fallback-cms-main-logo').classList.add('hidden');
            }

            // Top Right Corner Badge Logo
            if (topRightLogo) {
                const cornerImg=document.getElementById('top-right-logo-img');
                const cornerWrap=document.getElementById('top-right-logo-wrap');
                const cornerFallback=document.getElementById('top-right-logo-fallback');
                if(cornerImg) cornerImg.src = topRightLogo;
                if(cornerWrap) { cornerWrap.classList.remove('hidden'); cornerWrap.style.display='flex'; }
                if(cornerFallback) cornerFallback.classList.add('hidden');

                document.getElementById('preview-cms-top-right-logo').src = topRightLogo;
                document.getElementById('preview-cms-top-right-logo').classList.remove('hidden');
                document.getElementById('fallback-cms-top-right-logo').classList.add('hidden');
            }

            // Footer Mini Logo
            if (miniLogo) {
                document.getElementById('footer-mini-logo-img').src = miniLogo;
                document.getElementById('footer-mini-logo-img').classList.remove('hidden');
                document.getElementById('footer-mini-logo-fallback').classList.add('hidden');

                document.getElementById('preview-cms-mini-logo').src = miniLogo;
                document.getElementById('preview-cms-mini-logo').classList.remove('hidden');
                document.getElementById('fallback-cms-mini-logo').classList.add('hidden');
            }

            // Hero BG
            if (heroBg) {
                document.getElementById('hero-bg-img').src = heroBg;
                document.getElementById('preview-cms-hero-bg').src = heroBg;
                document.getElementById('preview-cms-hero-bg').classList.remove('hidden');
                document.getElementById('fallback-cms-hero-bg').classList.add('hidden');
            }

            // Founder Photo
            if (founderImg) {
                document.getElementById('founder-img').src = founderImg;
                document.getElementById('preview-cms-founder-img').src = founderImg;
                document.getElementById('preview-cms-founder-img').classList.remove('hidden');
                document.getElementById('fallback-cms-founder-img').classList.add('hidden');
            }
        }

        // --- TYPOGRAPHY CONTROLS ---
        function updateFontSizes() {
            const bodySize = document.getElementById('fontSizeBody').value;
            const headingSize = document.getElementById('fontSizeHeadings').value;
            const heroSize = document.getElementById('fontSizeHero').value;

            document.getElementById('lblFontSizeBody').innerText = bodySize + 'px';
            document.getElementById('lblFontSizeHeadings').innerText = headingSize + 'px';
            document.getElementById('lblFontSizeHero').innerText = heroSize + 'px';

            document.body.style.fontSize = bodySize + 'px'; document.body.style.fontFamily=document.getElementById('fontFamilyChoice').value+', sans-serif';
            
            const headings = document.querySelectorAll('h2, h3');
            headings.forEach(h => { h.style.fontSize = headingSize + 'px'; });

            const heroHeadline = document.getElementById('hero-headline');
            if (heroHeadline) heroHeadline.style.fontSize = heroSize + 'px';
        }

        function updateLogoSizes(){const ids=['logoSizeHeader','logoSizeTop','logoSizeFooter'];const targets=['nav-logo-img','top-right-logo-wrap','footer-mini-logo-img'];const vals=ids.map(id=>{const input=document.getElementById(id);return input?input.value:'48'});targets.forEach((id,i)=>{const imageBox=document.getElementById(id);const box=imageBox&&(imageBox.id==='top-right-logo-wrap'?imageBox:imageBox.parentElement);if(!box)return;box.style.width=vals[i]+'px';box.style.height=vals[i]+'px'});localStorage.setItem('rykaar_logo_sizes',JSON.stringify(vals))}
        function saveTypographySettings() {
            localStorage.setItem('rykaar_font_body', document.getElementById('fontSizeBody').value);
            localStorage.setItem('rykaar_font_headings', document.getElementById('fontSizeHeadings').value);
            localStorage.setItem('rykaar_font_hero', document.getElementById('fontSizeHero').value); localStorage.setItem('rykaar_font_family',document.getElementById('fontFamilyChoice').value);
            alert('Typography preferences saved successfully!');
        }

        // --- ARTICLE & BLOG MANAGEMENT ---
        function renderBlogs() {
            const blogGrid = document.getElementById('blog-grid');
            const blogs = JSON.parse(localStorage.getItem('rykaar_blogs')) || defaultBlogs;
            blogGrid.innerHTML = '';

            blogs.forEach(blog => {
                blogGrid.innerHTML += `
                    <div class="gold-card-border rounded-2xl bg-darkcard overflow-hidden group hover:-translate-y-2 transition-all flex flex-col justify-between">
                        <div>
                            <div class="h-48 overflow-hidden relative">
                                <img src="${getImageUrl(blog.img)}" alt="${blog.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                <span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-gold-500 text-black text-[10px] font-bold uppercase tracking-wider">${blog.tag}</span>
                            </div>
                            <div class="p-6 space-y-3">
                                <span class="text-[10px] text-gray-500 font-semibold">${blog.date}</span>
                                <h3 class="font-cinzel text-lg font-bold text-white group-hover:text-gold-400 transition-colors">${blog.title}</h3>
                                <p class="text-xs text-gray-400 leading-relaxed">${blog.excerpt}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            renderCmsArticlesTable();
        }

        function toggleArticleForm() {
            document.getElementById('cms-article-form').classList.toggle('hidden');
        }

        async function saveNewArticle() {
            const title = document.getElementById('article-title-input').value;
            const tag = document.getElementById('article-tag-input').value || 'Insights';
            const excerpt = document.getElementById('article-excerpt-input').value;

            if (!title || !excerpt) {
                alert('Please fill out the title and summary for the article.');
                return;
            }

            const blogs = JSON.parse(localStorage.getItem('rykaar_blogs')) || defaultBlogs;
            const articleId=Date.now();
            let img='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
            if(pendingNewArticleImage){try{img=await storeBinary('image:article:'+articleId,pendingNewArticleImage);assetUrlCache[img]=URL.createObjectURL(pendingNewArticleImage);}catch(error){alert('The article image could not be saved. Check browser storage access.');return;}}
            blogs.unshift({
                id: articleId,
                title,
                tag,
                img,
                excerpt,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            });

            localStorage.setItem('rykaar_blogs', JSON.stringify(blogs));
            document.getElementById('cms-article-form').classList.add('hidden'); pendingNewArticleImage=null; document.getElementById('article-file-input').value='';
            renderBlogs();
            alert('Article published successfully!');
        }

        function editArticle(id) {
            const blogs = JSON.parse(localStorage.getItem('rykaar_blogs')) || defaultBlogs;
            const article = blogs.find(item => String(item.id) === String(id)); if (!article) return;
            const title = prompt('Article title:', article.title); if (title === null) return;
            const tag = prompt('Category:', article.tag); if (tag === null) return;
            const excerpt = prompt('Article summary:', article.excerpt); if (excerpt === null) return;
            article.title = title.trim() || article.title; article.tag = tag.trim() || article.tag; article.excerpt = excerpt.trim() || article.excerpt;
            localStorage.setItem('rykaar_blogs', JSON.stringify(blogs)); renderBlogs();
        }

        function stageNewArticleImage(input) {
            pendingNewArticleImage=input.files&&input.files[0]||null;
            if(pendingNewArticleImage)setCmsUpdateStatus('Article image selected. Click Save Article to publish it.');
        }

        function stageArticleImage(input, id) {
            const file=input.files&&input.files[0];if(!file)return;
            pendingArticleImages[String(id)]=file;setCmsUpdateStatus('Article image ready. Click Update Site to publish.');
        }

        function deleteArticle(id) {
            let blogs = JSON.parse(localStorage.getItem('rykaar_blogs')) || defaultBlogs;
            blogs = blogs.filter(b => b.id !== id);
            localStorage.setItem('rykaar_blogs', JSON.stringify(blogs));
            renderBlogs();
        }

        function renderCmsArticlesTable() {
            const tbody = document.getElementById('cms-articles-tbody');
            const blogs = JSON.parse(localStorage.getItem('rykaar_blogs')) || defaultBlogs;
            tbody.innerHTML = '';

            blogs.forEach(b => {
                tbody.innerHTML += `
                    <tr>
                        <td class="p-3 text-white font-semibold">${b.title}</td>
                        <td class="p-3 text-gold-400">${b.tag}</td>
                        <td class="p-3 text-gray-400">${b.date}</td>
                        <td class="p-3">
                            <div class="flex flex-wrap gap-2"><button onclick="editArticle(${b.id})" class="text-gold-400 hover:underline">Edit text</button><label class="cursor-pointer text-gold-400 hover:underline">Change image<input type="file" accept="image/*" class="hidden" onchange="stageArticleImage(this, ${b.id})"></label><button onclick="deleteArticle(${b.id})" class="text-red-400 hover:text-red-300">Delete</button></div>
                        </td>
                    </tr>
                `;
            });
        }

        // Helper to convert images from inputs
        function convertImageToBase64(fileInput, targetHiddenId) {
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById(targetHiddenId).value = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        // Image upload dispatcher for CMS
        function uploadCmsImage(input, key) {
            const file = input.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    localStorage.setItem('rykaar_img_' + key, e.target.result);
                    renderLogosAndImages();
                };
                reader.readAsDataURL(file);
            }
        }

        function renderFeaturedCards() {
            const container = document.getElementById('featured-cards-container');
            container.innerHTML = `
                <a href="#real-estate" class="gold-card-border p-6 rounded-2xl bg-darkcard group hover:-translate-y-2 transition-all block">
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl mb-4 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <i class="fa-solid fa-city"></i>
                    </div>
                    <span class="text-[10px] uppercase font-bold text-gold-500 tracking-wider">Property & Estates</span>
                    <h3 class="font-cinzel text-lg font-bold text-white mt-1">Rykaar Real Estate Firm</h3>
                    <p class="text-xs text-gray-400 mt-2">Ultra-luxury residences, coastal villas, and commercial real estate acquisitions.</p>
                </a>

                <a href="#jewellers" class="gold-card-border p-6 rounded-2xl bg-darkcard group hover:-translate-y-2 transition-all block">
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl mb-4 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <i class="fa-solid fa-gem"></i>
                    </div>
                    <span class="text-[10px] uppercase font-bold text-gold-500 tracking-wider">Haute Joaillerie</span>
                    <h3 class="font-cinzel text-lg font-bold text-white mt-1">Rykaar Jewellers</h3>
                    <p class="text-xs text-gray-400 mt-2">Bespoke diamond suites, investment gemstones, and certified gold heirlooms.</p>
                </a>

                <a href="#rykaar-one" class="gold-card-border p-6 rounded-2xl bg-darkcard group hover:-translate-y-2 transition-all block">
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl mb-4 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <span class="text-[10px] uppercase font-bold text-gold-500 tracking-wider">Advisory & Intelligence</span>
                    <h3 class="font-cinzel text-lg font-bold text-white mt-1">Rykaar One</h3>
                    <p class="text-xs text-gray-400 mt-2">Resort business consultation and HR advisory for hospitality ventures.</p>
                </a>

                <a href="#resort" class="gold-card-border p-6 rounded-2xl bg-darkcard group hover:-translate-y-2 transition-all block">
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl mb-4 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <i class="fa-solid fa-umbrella-beach"></i>
                    </div>
                    <span class="text-[10px] uppercase font-bold text-gold-500 tracking-wider">Luxury Living</span>
                    <h3 class="font-cinzel text-lg font-bold text-white mt-1">Rykaar Resort</h3>
                    <p class="text-xs text-gray-400 mt-2">World-class hospitality, private cliffside villas, and holistic wellness sanctuaries.</p>
                </a>
            `;
        }

        function renderProperties(filterCategory = 'All') {
            const properties = JSON.parse(localStorage.getItem('rykaar_properties')) || [];
            const grid = document.getElementById('properties-grid');
            const cmsTable = document.getElementById('cms-properties-tbody');

            let filtered = properties;
            if (filterCategory !== 'All') {
                filtered = properties.filter(p => p.type.toLowerCase() === filterCategory.toLowerCase());
            }

            // Public Site Grid
            grid.innerHTML = filtered.map(p => `
                <div class="gold-card-border rounded-2xl bg-darkcard overflow-hidden group hover:-translate-y-2 transition-all flex flex-col justify-between">
                    <div>
                        <div class="h-60 overflow-hidden relative">
                            ${(() => { const photos = p.images && p.images.length ? p.images : [p.img]; return photos.length > 1 ? `<div class="grid grid-cols-2 h-full gap-1">${photos.map((src, i) => `<img src="${getImageUrl(src)}" alt="${p.title} photo ${i + 1}" class="w-full h-full min-h-0 object-cover group-hover:scale-[1.02] transition-transform duration-700">`).join('')}</div>` : `<img src="${getImageUrl(photos[0])}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">`; })()}
                            <span class="absolute top-4 left-4 bg-black/80 border border-gold-500/40 text-gold-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">${p.type}</span>
                        </div>
                        <div class="p-6 space-y-3">
                            <div class="flex items-center justify-between text-xs text-gold-400 font-semibold">
                                <span><i class="fa-solid fa-location-dot mr-1"></i> ${p.location}</span>
                                <span class="text-white font-bold text-base font-cinzel">${p.price}</span>
                            </div>
                            <h3 class="font-cinzel text-lg font-bold text-white group-hover:text-gold-400 transition-colors">${p.title}</h3>
                            <p class="text-xs text-gray-400 line-clamp-2">${p.desc || 'Exclusive listing under Rykaar Real Estate Firm.'}</p>
                        </div>
                    </div>
                    <div class="px-6 pb-6 pt-2 border-t border-gold-500/10 flex items-center justify-between">
                        <span class="text-[10px] uppercase text-gray-500">Listed By: ${p.owner}</span>
                        <a href="https://wa.me/91${localStorage.getItem('rykaar_phone')}?text=Inquiry%20regarding%20Property:%20${encodeURIComponent(p.title)}" target="_blank" class="px-4 py-2 rounded-full border border-gold-500/60 text-gold-400 text-xs font-bold uppercase hover:bg-gold-500 hover:text-black transition-all">
                            Inquire Now
                        </a>
                    </div>
                </div>
            `).join('');

            if(filtered.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center text-gray-500 py-12 text-sm">No properties currently listed in this category.</div>`;
            }

            // CMS Admin Table View
            cmsTable.innerHTML = properties.map(p => `
                <tr>
                    <td class="p-3 font-semibold text-white">${p.title}</td>
                    <td class="p-3">${p.type}</td>
                    <td class="p-3 text-gold-400 font-bold">${p.price}</td>
                    <td class="p-3">${p.owner}</td>
                    <td class="p-3 font-mono text-gold-500 font-bold">${p.phone || '8618884588'}</td>
                    <td class="p-3">
                        <button onclick="deleteProperty(${p.id})" class="text-red-400 hover:underline">Delete</button>
                    </td>
                </tr>
            `).join('');
        }

        function renderJewelry() {
            const items = JSON.parse(localStorage.getItem('rykaar_jewelry')) || [];
            const grid = document.getElementById('jewelry-grid');
            const cmsList = document.getElementById('cms-jewelry-list');
            const phone = localStorage.getItem('rykaar_phone');

            grid.innerHTML = items.map(j => {
                const whatsappMsg = `Hello Rykaar Jewellers, I am interested in purchasing/inquiring about: ${j.title} (Code: ${j.code || 'RJ'}). Price: ${j.price}`;
                const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMsg)}`;

                return `
                    <div class="gold-card-border rounded-2xl bg-darkcard overflow-hidden group flex flex-col justify-between hover:-translate-y-2 transition-all">
                        <div>
                            <div class="h-64 overflow-hidden relative">
                                <img src="${getImageUrl(j.img)}" alt="${j.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                <span class="absolute top-3 right-3 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md">Bespoke</span>
                            </div>
                            <div class="p-5 space-y-2">
                                <span class="text-[10px] uppercase text-gray-500 tracking-wider">Item Code: ${j.code || 'RJ-100'}</span>
                                <h3 class="font-cinzel text-base font-bold text-white group-hover:text-gold-400 transition-colors">${j.title}</h3>
                                <p class="text-xs text-gray-400 line-clamp-2">${j.desc}</p>
                                <div class="font-cinzel text-gold-400 font-bold text-lg pt-1">${j.price}</div>
                            </div>
                        </div>
                        <div class="p-5 pt-0">
                            <a href="${whatsappUrl}" target="_blank" onclick="recordJewelryInquiry(${JSON.stringify(j.title)},${JSON.stringify(j.price)})" class="w-full block text-center py-3 rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black font-bold text-xs uppercase tracking-wider transition-all shadow-gold-glow flex items-center justify-center space-x-2">
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                                <span>Order via WhatsApp</span>
                            </a>
                        </div>
                    </div>
                `;
            }).join('');

            cmsList.innerHTML = items.map(j => `
                <div class="p-4 rounded-xl border border-gold-500/30 bg-charcoal flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="${getImageUrl(j.img)}" class="w-12 h-12 object-cover rounded-lg">
                        <div>
                            <div class="text-sm font-bold text-white">${j.title}</div>
                            <div class="text-xs text-gold-400 font-bold">${j.price}</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2"><label class="cursor-pointer px-3 py-1.5 rounded-full border border-gold-500/50 text-gold-400 text-[10px] uppercase text-center">Change image<input type="file" accept="image/*" class="hidden" onchange="updateJewelryImage(this, ${j.id})"></label><button onclick="deleteJewelry(${j.id})" class="text-red-400 text-xs hover:underline">Delete</button></div>
                </div>
            `).join('');
        }

        function renderCareers() {
            const careers = JSON.parse(localStorage.getItem('rykaar_careers')) || [];
            const tbody = document.getElementById('cms-careers-tbody');

            if (careers.length === 0) {
                tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-gray-500">No applications received yet.</td></tr>`;
                return;
            }

            tbody.innerHTML = careers.map(c => `
                <tr>
                    <td class="p-3 font-semibold text-white">${c.name}</td>
                    <td class="p-3 font-mono text-gold-400">${c.phone}</td>
                    <td class="p-3">${c.email}</td>
                    <td class="p-3">${c.dept}</td>
                    <td class="p-3">
                        <span class="text-gold-500 font-bold">${c.resumeName || 'Attached Document'}</span>
                    </td>
                </tr>
            `).join('');
        }

        // --- FILTER FUNCTION ---
        function filterProperties(category) {
            document.querySelectorAll('.re-filter-btn').forEach(btn => {
                btn.classList.remove('bg-gold-500', 'text-black');
                btn.classList.add('text-gray-300');
            });
            event.target.classList.add('bg-gold-500', 'text-black');
            event.target.classList.remove('text-gray-300');
            renderProperties(category);
        }

        function optimizeImageFile(file, maxSide = 1400, quality = 0.82) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onerror = () => reject(new Error('Could not read the selected image.'));
                reader.onload = () => {
                    const image = new Image();
                    image.onerror = () => reject(new Error('Selected file is not a supported image.'));
                    image.onload = () => {
                        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
                        const canvas = document.createElement('canvas');
                        canvas.width = Math.max(1, Math.round(image.width * scale));
                        canvas.height = Math.max(1, Math.round(image.height * scale));
                        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
                        resolve(canvas.toDataURL('image/jpeg', quality));
                    };
                    image.src = reader.result;
                };
                reader.readAsDataURL(file);
            });
        }

        function convertImagesToBase64(input, hiddenInputId) {
            pendingPropertyFiles=Array.from(input.files||[]);
            document.getElementById(hiddenInputId).value=pendingPropertyFiles.length?'files-selected':'';
        }

        async function updateJewelryImage(input, id) {
            const file = input.files && input.files[0]; if (!file) return;
            try { pendingJewelryImages[String(id)] = file; setCmsUpdateStatus('Jewellery image ready. Click Update Site to publish it.'); }
            catch (error) { alert(error.message); }
        }

        // --- PUBLIC PROPERTY SUBMISSION ---
        async function handlePublicPropertySubmit(e) {
            e.preventDefault();
            const owner = document.getElementById('prop-owner-name').value;
            const phone = document.getElementById('prop-owner-phone').value;
            const title = document.getElementById('prop-title').value;
            const type = document.getElementById('prop-type').value;
            const price = document.getElementById('prop-price').value;
            const location = document.getElementById('prop-location').value;
            const desc = document.getElementById('prop-desc').value;
            const propertyId = Date.now();
            const propertyImages = [];
            try { for(let i=0;i<pendingPropertyFiles.length;i++){ const ref=await storeBinary('image:property:'+propertyId+':'+i,pendingPropertyFiles[i]); propertyImages.push(ref); assetUrlCache[ref]=URL.createObjectURL(pendingPropertyFiles[i]); } }
            catch(error) { alert('Property photos could not be saved in this browser. Please check browser storage access and try again.'); return; }

            const newProp = {
                id: propertyId,
                title,
                type,
                price,
                location,
                owner,
                phone,
                desc,
                images: propertyImages.length ? propertyImages : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
                img: propertyImages[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
            };

            const properties = JSON.parse(localStorage.getItem('rykaar_properties')) || [];
            properties.unshift(newProp); saveLead({name:owner,phone,email:'',subject:'Property owner listing: '+title,message:location+' · '+type+' · '+price,kind:'Property owner'});
            localStorage.setItem('rykaar_properties', JSON.stringify(properties));

            alert('Thank you! Your property listing has been submitted successfully. Registered Contact: ' + phone + '. Rykaar Real Estate team will verify and contact you.');
            closeListingModal();
            document.getElementById('owner-listing-form').reset(); pendingPropertyFiles=[];
            renderProperties('All');
        }

        // --- CAREER APPLICATION SUBMISSION ---
        function handleCareerSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('job-name').value;
            const phone = document.getElementById('job-phone').value;
            const email = document.getElementById('job-email').value;
            const dept = document.getElementById('job-dept').value;
            const bio = document.getElementById('job-bio').value;
            const resumeInput = document.getElementById('job-resume');
            
            let resumeName = 'Resume_Uploaded.pdf';
            if(resumeInput.files && resumeInput.files[0]) {
                resumeName = resumeInput.files[0].name;
            }

            const application = {
                id: Date.now(),
                name,
                phone,
                email,
                dept,
                bio,
                resumeName,
                date: new Date().toLocaleDateString()
            };

            const careers = JSON.parse(localStorage.getItem('rykaar_careers')) || [];
            careers.unshift(application);
            localStorage.setItem('rykaar_careers', JSON.stringify(careers));

            alert('Application submitted successfully! Our Human Resources department will get in touch at ' + phone);
            document.getElementById('career-form').reset();
            renderCareers(); renderLeads();
        }

        function saveLead(x){const rows=JSON.parse(localStorage.getItem('rykaar_leads')||'[]');rows.unshift({id:Date.now(),date:new Date().toLocaleString(),...x});localStorage.setItem('rykaar_leads',JSON.stringify(rows));renderLeads()} function renderLeads(){const b=document.getElementById('cms-leads-tbody');if(!b)return;const rows=JSON.parse(localStorage.getItem('rykaar_leads')||'[]');b.innerHTML=rows.map(x=>`<tr><td class="p-3">${x.date}</td><td class="p-3 text-white">${x.name}</td><td class="p-3">${x.phone}${x.email?'<br>'+x.email:''}</td><td class="p-3 text-gold-400">${x.kind}: ${x.subject}</td><td class="p-3">${x.message}</td><td class="p-3"><button onclick="deleteLead(${x.id})" class="text-red-400">Delete</button></td></tr>`).join('')||'<tr><td colspan="6" class="p-4 text-center">No enquiries recorded yet.</td></tr>'} function deleteLead(id){localStorage.setItem('rykaar_leads',JSON.stringify(JSON.parse(localStorage.getItem('rykaar_leads')||'[]').filter(x=>x.id!==id)));renderLeads()} function exportLeads(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(JSON.parse(localStorage.getItem('rykaar_leads')||'[]'),null,2)],{type:'application/json'}));a.download='rykaar-enquiries.json';a.click()} function recordJewelryInquiry(t,p){saveLead({name:'Jewellery enquiry',phone:'',email:'',subject:t,message:'Product price: '+p,kind:'Jewellery'})}
        // --- CONTACT INQUIRY SUBMISSION ---
        function handleContactSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const subject = document.getElementById('contact-subject').value || 'General Inquiry';
            const msg = document.getElementById('contact-msg').value;

            const email = document.getElementById('contact-email').value; saveLead({name,phone,email,subject,message:msg,kind:'Website inquiry'});
            const officialPhone = localStorage.getItem('rykaar_phone');
            const whatsappText = `New Inquiry from Site:\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${msg}`;
            
            alert('Thank you for contacting Rykaar. Directing you to WhatsApp for instant assistance.');
            window.open(`https://wa.me/91${officialPhone}?text=${encodeURIComponent(whatsappText)}`, '_blank');
            document.getElementById('contact-form').reset();
        }

        function setConsultancySubject(subject) {
            document.getElementById('contact-subject').value = 'Consultancy Request: ' + subject;
        }

        // --- IMAGE CONVERTER TO LOCALSTORAGE BASE64 ---
        function convertImageToBase64(fileInput, hiddenInputId) {
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById(hiddenInputId).value = e.target.result;
                }
                reader.readAsDataURL(fileInput.files[0]);
            }
        }

        async function uploadCmsImage(fileInput, imageKey) {
            const file = fileInput.files && fileInput.files[0]; if (!file) return;
            try {
                pendingCmsImages[imageKey] = file;
                const previewId = ({main_logo:'preview-cms-main-logo',top_right_logo:'preview-cms-top-right-logo',mini_logo:'preview-cms-mini-logo',founder_img:'preview-cms-founder-img',hero_bg:'preview-cms-hero-bg'})[imageKey];
                const fallbackId = ({main_logo:'fallback-cms-main-logo',top_right_logo:'fallback-cms-top-right-logo',mini_logo:'fallback-cms-mini-logo',founder_img:'fallback-cms-founder-img',hero_bg:'fallback-cms-hero-bg'})[imageKey];
                const preview = document.getElementById(previewId); if (preview) { preview.src=URL.createObjectURL(file); preview.classList.remove('hidden'); }
                const fallback = document.getElementById(fallbackId); if (fallback) fallback.classList.add('hidden');
                setCmsUpdateStatus('Image ready. Click Update Site to publish it.');
            } catch (error) { alert(error.message); }
        }

        // --- ADMIN CMS FUNCTIONALITY ---
        function openAdminModal() {
            document.getElementById('admin-modal').classList.remove('hidden');
        }

        function closeAdminModal() {
            document.getElementById('admin-modal').classList.add('hidden');
        }

        function verifyAdminPass() {
            const entered = document.getElementById('admin-pass-input').value;
            const saved = localStorage.getItem('rykaar_admin_pass') || 'admin';

            if (entered === saved) {
                document.getElementById('admin-login-view').classList.add('hidden');
                document.getElementById('admin-cms-view').classList.remove('hidden');
                document.getElementById('admin-login-err').classList.add('hidden');
                document.getElementById('cms-update-button').disabled = false;
                renderCareers(); renderLeads(); switchCmstab('general');
            } else {
                document.getElementById('admin-login-err').classList.remove('hidden');
            }
        }

        function switchCmstab(tabName) {
            document.querySelectorAll('.cms-tab-btn').forEach(button => {
                button.classList.remove('border-b-2', 'border-gold-500', 'text-gold-400');
                button.classList.add('text-gray-400');
            });
            const activePanel = document.getElementById('cms-tab-' + tabName);
            const activeButton = document.getElementById('tab-btn-' + tabName);
            if (!activePanel || !activeButton) return;
            activeButton.classList.add('border-b-2', 'border-gold-500', 'text-gold-400');
            activeButton.classList.remove('text-gray-400');
            activePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (tabName === 'articles') renderCmsArticlesTable();
            if (tabName === 'realestate') renderProperties('All');
            if (tabName === 'jewels') renderJewelry();
            if (tabName === 'careers') renderCareers();
            if (tabName === 'leads') renderLeads();
            if (tabName === 'gemini') loadGeminiSettings();
            if (tabName === 'assets') renderPublicFiles();
        }
        function setCmsUpdateStatus(message) { const status=document.getElementById('cms-update-status'); if(status) status.textContent=message; }

        async function publishSiteChanges() {
            try {
                localStorage.setItem('rykaar_headline', document.getElementById('cms-headline').value);
                localStorage.setItem('rykaar_subheadline', document.getElementById('cms-subheadline').value);
                localStorage.setItem('rykaar_phone', document.getElementById('cms-phone').value);
                localStorage.setItem('rykaar_email', document.getElementById('cms-email').value);
                localStorage.setItem('rykaar_founder_bio', document.getElementById('cms-founder-bio').value);
                localStorage.setItem('rykaar_founder_name', document.getElementById('cms-founder-name').value);
                localStorage.setItem('rykaar_founder_title', document.getElementById('cms-founder-title').value);
                localStorage.setItem('rykaar_about_text', document.getElementById('cms-about-text').value);
                localStorage.setItem('rykaar_font_body', document.getElementById('fontSizeBody').value);
                localStorage.setItem('rykaar_font_headings', document.getElementById('fontSizeHeadings').value);
                localStorage.setItem('rykaar_font_hero', document.getElementById('fontSizeHero').value);
                localStorage.setItem('rykaar_font_family', document.getElementById('fontFamilyChoice').value);
                for (const [key,file] of Object.entries(pendingCmsImages)) { const ref=await storeBinary('image:site:'+key,file); localStorage.setItem('rykaar_img_'+key,ref); assetUrlCache[ref]=URL.createObjectURL(file); }
                if (Object.keys(pendingJewelryImages).length) {
                    const items=JSON.parse(localStorage.getItem('rykaar_jewelry')||'[]');
                    for (const item of items) { const image=pendingJewelryImages[String(item.id)]; if(image) { item.img=await storeBinary('image:jewelry:'+item.id,image); assetUrlCache[item.img]=URL.createObjectURL(image); } }
                    localStorage.setItem('rykaar_jewelry',JSON.stringify(items));
                }
                if (Object.keys(pendingArticleImages).length) {
                    const blogs=JSON.parse(localStorage.getItem('rykaar_blogs')||'[]');
                    for (const blog of blogs) { const image=pendingArticleImages[String(blog.id)]; if(image) { blog.img=await storeBinary('image:article:'+blog.id,image); assetUrlCache[blog.img]=URL.createObjectURL(image); } }
                    localStorage.setItem('rykaar_blogs',JSON.stringify(blogs));
                }
                if (pendingPublicFile) {
                    const title=document.getElementById('public-file-title').value.trim() || pendingPublicFile.name;
                    const category=document.getElementById('public-file-category').value;
                    const id=Date.now(); const fileRef=await storeBinary('public:'+id,pendingPublicFile);
                    const records=JSON.parse(localStorage.getItem('rykaar_public_files')||'[]'); records.unshift({id,title,category,name:pendingPublicFile.name,type:pendingPublicFile.type,fileRef});
                    localStorage.setItem('rykaar_public_files',JSON.stringify(records)); assetUrlCache[fileRef]=URL.createObjectURL(pendingPublicFile); pendingPublicFile=null;
                    document.getElementById('public-file-input').value=''; document.getElementById('public-file-title').value=''; document.getElementById('public-file-pending').textContent='';
                }
                Object.keys(pendingCmsImages).forEach(key=>delete pendingCmsImages[key]);
                Object.keys(pendingJewelryImages).forEach(key=>delete pendingJewelryImages[key]);
                Object.keys(pendingArticleImages).forEach(key=>delete pendingArticleImages[key]);
                await hydrateFileUrls(); updateFontSizes(); updateLogoSizes(); renderAll(); renderPublicFiles();
                setCmsUpdateStatus('Site updated successfully.');
            } catch (error) {
                const detail=(error && error.name ? error.name + ': ' : '') + (error && error.message ? error.message : 'Unknown browser storage error');
                setCmsUpdateStatus('Save failed: ' + detail);
                alert('Site update failed: ' + detail + '\n\nOpen this page from the local website address and try again.');
            }
        }

        function saveGeneralSettings() {
            localStorage.setItem('rykaar_headline', document.getElementById('cms-headline').value);
            localStorage.setItem('rykaar_subheadline', document.getElementById('cms-subheadline').value);
            localStorage.setItem('rykaar_phone', document.getElementById('cms-phone').value);
            localStorage.setItem('rykaar_email', document.getElementById('cms-email').value);
            localStorage.setItem('rykaar_founder_bio', document.getElementById('cms-founder-bio').value); localStorage.setItem('rykaar_founder_name',document.getElementById('cms-founder-name').value); localStorage.setItem('rykaar_founder_title',document.getElementById('cms-founder-title').value); localStorage.setItem('rykaar_about_text',document.getElementById('cms-about-text').value);

            alert('Site general details updated successfully!');
            renderAll();
        }

        function setGeminiAdminStatus(message, connected=false) { const status=document.getElementById('gemini-admin-status');if(status){status.textContent=message;status.className='text-xs '+(connected?'text-green-400':'text-gray-400');} }
        function applyGeminiSettings(settings={}) {
            geminiSettings={...geminiSettings,...settings};
            const title=geminiSettings.title||'Chat with Rykaar';
            document.getElementById('gemini-chat-title').textContent=title;
            document.getElementById('gemini-chat-status').textContent=geminiSettings.connected?'Gemini powered · Rykaar Official':'Rykaar assistant';
            const titleInput=document.getElementById('gemini-title'),modelInput=document.getElementById('gemini-model'),greetingInput=document.getElementById('gemini-greeting'),instructionsInput=document.getElementById('gemini-instructions');
            if(titleInput&&geminiSettings.title)titleInput.value=geminiSettings.title;
            if(modelInput&&geminiSettings.model)modelInput.value=geminiSettings.model;
            if(greetingInput&&geminiSettings.greeting)greetingInput.value=geminiSettings.greeting;
            if(instructionsInput&&geminiSettings.instructions)instructionsInput.value=geminiSettings.instructions;
            const messageBox=document.getElementById('gemini-chat-messages');if(!geminiChatHistory.length&&messageBox&&!messageBox.children.length&&geminiSettings.greeting)appendGeminiMessage('model',geminiSettings.greeting);
        }
        async function loadGeminiSettings() {
            try {
                const saved=JSON.parse(localStorage.getItem('rykaar_gemini_settings')||'{}');
                applyGeminiSettings(saved);
                const response=await fetch('/api/gemini/status',{headers:{'Accept':'application/json'}});
                if(!response.ok)throw new Error('Gemini service is not available from this page. Open the local site launcher.');
                const status=await response.json();applyGeminiSettings(status);
                setGeminiAdminStatus(status.connected?'Gemini is connected · '+status.model:'Not connected. Add your Gemini API key above.',!!status.connected);
            } catch(error) {
                document.getElementById('gemini-chat-status').textContent='Connection unavailable';
                setGeminiAdminStatus('Could not reach the Gemini server. Open the site using Open-Rykaar-Site-Locally.cmd.');
            }
        }
        async function saveGeminiSettings() {
            const payload={key:document.getElementById('gemini-api-key').value.trim(),model:document.getElementById('gemini-model').value.trim()||'gemini-3.8-flash',title:document.getElementById('gemini-title').value.trim()||'Chat with Rykaar',greeting:document.getElementById('gemini-greeting').value.trim()||'Welcome to Rykaar. How can we help you today?',instructions:document.getElementById('gemini-instructions').value.trim()};
            try {
                setGeminiAdminStatus('Saving settings…');
                payload.adminPasscode=localStorage.getItem('rykaar_admin_pass')||'admin';
                const response=await fetch('/api/gemini/settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
                const result=await response.json();if(!response.ok)throw new Error(result.error||'Could not save Gemini settings.');
                delete payload.key;delete payload.adminPasscode;localStorage.setItem('rykaar_gemini_settings',JSON.stringify(payload));document.getElementById('gemini-api-key').value='';
                applyGeminiSettings(result);setGeminiAdminStatus(result.connected?'Gemini connected · '+result.model:'Settings saved. Add an API key to connect.',!!result.connected);
            } catch(error) { setGeminiAdminStatus(error.message); }
        }
        async function disconnectGemini() {
            try {const response=await fetch('/api/gemini/settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clearKey:true,adminPasscode:localStorage.getItem('rykaar_admin_pass')||'admin'})});const result=await response.json();if(!response.ok)throw new Error(result.error||'Could not disconnect Gemini.');applyGeminiSettings(result);setGeminiAdminStatus('Gemini disconnected.');}
            catch(error){setGeminiAdminStatus(error.message);}
        }
        function toggleGeminiChat(force) {
            const panel=document.getElementById('gemini-chat-panel'),open=typeof force==='boolean'?force:panel.classList.contains('hidden');
            panel.classList.toggle('hidden',!open);document.getElementById('gemini-chat-toggle').classList.toggle('hidden',open);
            if(open){const messages=document.getElementById('gemini-chat-messages');if(messages&&!messages.children.length)appendGeminiMessage('model',geminiSettings.greeting||'Welcome to Rykaar. How can we help you today?');document.getElementById('gemini-chat-input').focus();}
        }
        function appendGeminiMessage(role,text) {
            const box=document.getElementById('gemini-chat-messages');if(!box)return;
            const bubble=document.createElement('div');bubble.className='max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-3 py-2.5 text-sm '+(role==='user'?'self-end bg-gold-500 text-black':'self-start border border-gold-500/20 bg-charcoal text-gray-100');bubble.textContent=text;box.appendChild(bubble);box.scrollTop=box.scrollHeight;return bubble;
        }
        async function sendGeminiMessage(event) {
            event.preventDefault();const input=document.getElementById('gemini-chat-input'),button=document.getElementById('gemini-chat-send'),text=input.value.trim();if(!text)return;
            input.value='';geminiChatHistory.push({role:'user',text});appendGeminiMessage('user',text);const pending=appendGeminiMessage('model','Rykaar is typing…');button.disabled=true;
            try {
                const response=await fetch('/api/gemini/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:geminiChatHistory.slice(-12)})});
                const result=await response.json();if(!response.ok)throw new Error(result.error||'The chat service could not respond.');
                pending.textContent=result.reply;geminiChatHistory.push({role:'model',text:result.reply});
            } catch(error) { pending.textContent=error.message; }
            finally { button.disabled=false;input.focus();document.getElementById('gemini-chat-messages').scrollTop=document.getElementById('gemini-chat-messages').scrollHeight; }
        }

        async function saveNewPasscode() {
            const newPass = document.getElementById('new-admin-pass').value;
            if (newPass.length < 3) {
                alert('Passcode must be at least 3 characters.');
                return;
            }
            try { const response=await fetch('/api/gemini/admin-passcode',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({adminPasscode:localStorage.getItem('rykaar_admin_pass')||'admin',newPasscode:newPass})});const result=await response.json();if(!response.ok)throw new Error(result.error||'Could not update server passcode.'); }
            catch(error) { alert('Passcode could not be updated: '+error.message); return; }
            localStorage.setItem('rykaar_admin_pass', newPass);
            alert('Admin CMS passcode updated successfully!');
            document.getElementById('new-admin-pass').value = '';
        }

        function deleteProperty(id) {
            if (confirm('Delete this property listing?')) {
                let properties = JSON.parse(localStorage.getItem('rykaar_properties')) || [];
                properties = properties.filter(p => p.id !== id);
                localStorage.setItem('rykaar_properties', JSON.stringify(properties));
                renderProperties('All');
            }
        }

        function deleteJewelry(id) {
            if (confirm('Delete this jewelry product?')) {
                let items = JSON.parse(localStorage.getItem('rykaar_jewelry')) || [];
                items = items.filter(j => j.id !== id);
                localStorage.setItem('rykaar_jewelry', JSON.stringify(items));
                renderJewelry();
            }
        }

        function toggleJewelryForm() {
            const form=document.getElementById('cms-jewelry-form');
            form.classList.toggle('hidden');
            if (!form.classList.contains('hidden')) document.getElementById('new-jewelry-title').focus();
        }

        function stageNewJewelryImage(input) {
            pendingNewJewelryImage=input.files && input.files[0]||null;
            if(pendingNewJewelryImage){const preview=document.getElementById('new-jewelry-preview');preview.src=URL.createObjectURL(pendingNewJewelryImage);preview.classList.remove('hidden');}
        }

        async function saveJewelryProduct() {
            const title=document.getElementById('new-jewelry-title').value.trim();
            if(!title){alert('Enter a product name before publishing.');return;}
            const product={id:Date.now(),title,price:document.getElementById('new-jewelry-price').value.trim()||'Price on Request',code:document.getElementById('new-jewelry-code').value.trim()||('RJ-'+Date.now().toString().slice(-4)),desc:document.getElementById('new-jewelry-desc').value.trim()||'Contact Rykaar Jewellers for product details.',img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85'};
            if(pendingNewJewelryImage){try{product.img=await storeBinary('image:jewelry:'+product.id,pendingNewJewelryImage);assetUrlCache[product.img]=URL.createObjectURL(pendingNewJewelryImage);}catch(error){alert('The product image could not be saved. Check browser storage access.');return;}}
            const items=JSON.parse(localStorage.getItem('rykaar_jewelry')||'[]'); items.unshift(product);
            try { localStorage.setItem('rykaar_jewelry',JSON.stringify(items)); }
            catch(error) { alert('The product could not be saved in this browser.'); return; }
            ['new-jewelry-title','new-jewelry-code','new-jewelry-price','new-jewelry-desc','new-jewelry-image-data'].forEach(id=>document.getElementById(id).value='');
            document.getElementById('new-jewelry-file').value=''; document.getElementById('new-jewelry-preview').classList.add('hidden'); pendingNewJewelryImage=null;
            document.getElementById('cms-jewelry-form').classList.add('hidden'); renderJewelry(); setCmsUpdateStatus('Jewellery product published to the public site.');
        }

        // --- MODAL CONTROLS ---
        function openListingModal() {
            document.getElementById('listing-modal').classList.remove('hidden');
        }
        function closeListingModal() {
            document.getElementById('listing-modal').classList.add('hidden');
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // --- ON PAGE LOAD INITIALIZATION ---
        window.onload = async function() {
            const chatWidget=document.getElementById('gemini-chat-widget');if(chatWidget)document.body.appendChild(chatWidget);
            try { await migrateLargeImages(); } catch (error) { console.warn('Image migration deferred:', error); }
            initData();
            try { await hydrateFileUrls(); } catch (error) { console.warn('File previews could not be loaded:', error); }
            renderAll(); renderPublicFiles(); loadGeminiSettings();
        };
    </script>
</body>
</html>

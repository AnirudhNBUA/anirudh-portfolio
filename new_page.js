<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anirudh BK | Python Developer & AI Engineer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #000000;
            color: #f3f4f6;
            /* Static ambient background that works with the canvas */
            background-image: 
                radial-gradient(circle at 15% 50%, rgba(56, 189, 248, 0.05), transparent 25%), 
                radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.05), transparent 25%);
            background-attachment: fixed;
            overflow-x: hidden;
        }

        /* Space Canvas */
        #space-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        /* Premium Glassmorphism */
        .glass {
            background: rgba(18, 18, 18, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-hover:hover {
            background: rgba(30, 30, 30, 0.8);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .glass-nav {
            background: rgba(5, 5, 5, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Typography & Gradients */
        .text-gradient {
            background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 40px rgba(56, 189, 248, 0.3);
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -0.025em;
            margin-bottom: 3rem;
            position: relative;
            display: inline-block;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(to right, #38bdf8, #a855f7);
            border-radius: 2px;
        }

        /* Timeline */
        .timeline-line {
            position: absolute;
            left: 28px;
            top: 20px;
            bottom: 20px;
            width: 2px;
            background: linear-gradient(to bottom, #38bdf8, #a855f7, rgba(168, 85, 247, 0.1));
        }

        /* Utilities */
        .scroll-hide::-webkit-scrollbar {
            display: none;
        }
        .scroll-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Animations */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 4s ease-in-out infinite;
        }

        .typing-dot {
            animation: typing 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }

        /* Button Glows */
        .btn-glow {
            position: relative;
            overflow: hidden;
        }
        .btn-glow::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }
        .btn-glow:hover::before {
            left: 100%;
        }
    </style>
</head>
<body class="antialiased selection:bg-purple-500/30">

    <!-- Space Background Canvas -->
    <canvas id="space-canvas"></canvas>

    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" class="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                Anirudh<span class="text-sky-400">BK</span>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
                <a href="#about" class="hover:text-white transition-colors">About</a>
                <a href="#experience" class="hover:text-white transition-colors">Experience</a>
                <a href="#projects" class="hover:text-white transition-colors">Projects</a>
                <a href="#skills" class="hover:text-white transition-colors">Skills</a>
                <a href="#contact" class="px-6 py-2.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all btn-glow shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    Hire Me
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-20 left-0 w-full glass border-t border-white/5 p-6 flex flex-col space-y-4 text-center z-40">
            <a href="#about" class="text-gray-300 hover:text-white py-3 border-b border-white/5">About</a>
            <a href="#experience" class="text-gray-300 hover:text-white py-3 border-b border-white/5">Experience</a>
            <a href="#projects" class="text-gray-300 hover:text-white py-3 border-b border-white/5">Projects</a>
            <a href="#skills" class="text-gray-300 hover:text-white py-3">Skills</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="about" class="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <!-- Background Ambient Blobs -->
        <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style="animation-delay: 2s;"></div>

        <div class="max-w-5xl mx-auto text-center z-10">
            <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 text-xs font-semibold uppercase tracking-widest text-sky-300 border border-sky-500/20">
                <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]"></span>
                Open to Opportunities
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-white">
                Architecting <br>
                <span class="text-gradient">Intelligent Systems</span>
            </h1>
            
            <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                I am a <strong>Python Developer & AI Engineer</strong> building the backbone of modern applications. 
                From scalable financial data pipelines at Morgan Stanley to autonomous multi-agent networks.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="#experience" class="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.2)] btn-glow">
                    Explore My Work
                </a>
                <a href="https://github.com/AnirudhNBUA" target="_blank" class="w-full sm:w-auto px-10 py-4 rounded-full glass hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-white border border-white/10 hover:border-white/30">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub Profile
                </a>
            </div>
        </div>
    </section>

    <!-- Stats / Achievements -->
    <section class="py-16 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass p-10 rounded-3xl group relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg class="w-24 h-24 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div class="text-5xl font-bold text-sky-400 mb-3 group-hover:scale-105 transition-transform origin-left">15%</div>
                <div class="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">Efficiency Gain</div>
                <p class="text-gray-400 text-sm leading-relaxed">Reduction in server load achieved via strategic Redis caching layers implementation.</p>
            </div>
            
            <div class="glass p-10 rounded-3xl group relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg class="w-24 h-24 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div class="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-105 transition-transform origin-left">30%</div>
                <div class="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">Quality Assurance</div>
                <p class="text-gray-400 text-sm leading-relaxed">Decrease in post-deployment bugs through strict adherence to SOLID design principles.</p>
            </div>

            <div class="glass p-10 rounded-3xl group relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg class="w-24 h-24 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div class="text-5xl font-bold text-pink-400 mb-3 group-hover:scale-105 transition-transform origin-left">25%</div>
                <div class="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">Business Growth</div>
                <p class="text-gray-400 text-sm leading-relaxed">Revenue uplift driven by the successful launch of autonomous CrewAI multi-agent features.</p>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-32 px-6 relative">
        <div class="max-w-5xl mx-auto">
            <h2 class="section-title text-white">Professional Journey</h2>
            
            <div class="relative pl-8 md:pl-16 space-y-12">
                <!-- Timeline Line -->
                <div class="timeline-line rounded-full"></div>

                <!-- Job 1: Morgan Stanley -->
                <div class="relative group">
                    <div class="absolute -left-[50px] md:-left-[74px] top-0 w-14 h-14 glass rounded-full flex items-center justify-center border border-sky-500/30 group-hover:border-sky-500 transition-colors bg-black z-10 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                        <!-- Morgan Stanley Icon (Bank/Institution) -->
                        <svg class="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                    </div>
                    <div class="glass glass-hover p-8 md:p-10 rounded-3xl transition-all duration-300">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-white">Python Developer</h3>
                                <div class="text-sky-400 font-medium text-lg">Morgan Stanley</div>
                            </div>
                            <div class="text-sm text-gray-400 mt-2 md:mt-0 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                Oct 2025 - Present
                            </div>
                        </div>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Spearheading backend development for the <strong>ESGODS project</strong> within Investment Management (IM). My focus is on ensuring data integrity and velocity for critical financial decision-making.
                        </p>
                        <ul class="space-y-4 text-gray-400 mb-8 text-base">
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#0ea5e9]"></span>
                                <span class="leading-relaxed"><strong>Architecting high-throughput data pipelines</strong> to ingest and normalize complex ESG data for global equity markets, directly feeding Snowflake for real-time analytics.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#0ea5e9]"></span>
                                <span class="leading-relaxed"><strong>Designing low-latency FastAPI microservices</strong> to serve processed ESG metrics to downstream investment management applications with sub-100ms response times.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#0ea5e9]"></span>
                                <span class="leading-relaxed"><strong>Orchestrating end-to-end data workflows</strong> using Autosys and Jenkins, ensuring 99.9% pipeline reliability and seamless CI/CD deployments.</span>
                            </li>
                        </ul>
                        <div class="flex flex-wrap gap-3">
                            <span class="px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-medium border border-sky-500/20">FastAPI</span>
                            <span class="px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-medium border border-sky-500/20">Snowflake</span>
                            <span class="px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-medium border border-sky-500/20">Pandas</span>
                            <span class="px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-medium border border-sky-500/20">Autosys</span>
                        </div>
                    </div>
                </div>

                <!-- Job 2: Accenture (Senior) -->
                <div class="relative group">
                    <div class="absolute -left-[50px] md:-left-[74px] top-0 w-14 h-14 glass rounded-full flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors bg-black z-10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <!-- Accenture Icon (Logo) -->
                        <svg class="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                    <div class="glass glass-hover p-8 md:p-10 rounded-3xl transition-all duration-300">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-white">Senior AI/ML Backend Engineer</h3>
                                <div class="text-purple-400 font-medium text-lg">Accenture</div>
                            </div>
                            <div class="text-sm text-gray-400 mt-2 md:mt-0 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                Jun 2025 - Oct 2025
                            </div>
                        </div>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Led the R&D and deployment of autonomous agent networks. My primary responsibility was bridging the gap between theoretical AI models and production-ready enterprise systems.
                        </p>
                        <ul class="space-y-4 text-gray-400 mb-8 text-base">
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#a855f7]"></span>
                                <span class="leading-relaxed"><strong>Engineered a resilient Multi-Agent System</strong> using CrewAI and Autogen, successfully orchestrating 5-10 autonomous agents to execute complex, multi-step workflows in real-time.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#a855f7]"></span>
                                <span class="leading-relaxed"><strong>Developed a universal ingestion API</strong> capable of parsing 25+ distinct file formats, automating the generation of comprehensive bug reports and executive presentations from raw codebases.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#a855f7]"></span>
                                <span class="leading-relaxed"><strong>Optimized system performance</strong> by implementing asynchronous backend logic with Python and high-performance PostgreSQL queries.</span>
                            </li>
                        </ul>
                        <div class="flex flex-wrap gap-3">
                            <span class="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">CrewAI</span>
                            <span class="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">Autogen</span>
                            <span class="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">PostgreSQL</span>
                            <span class="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">Redis</span>
                        </div>
                    </div>
                </div>

                <!-- Job 3: Accenture (Engineer) -->
                <div class="relative group">
                    <div class="absolute -left-[50px] md:-left-[74px] top-0 w-14 h-14 glass rounded-full flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors bg-black z-10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <!-- Accenture Icon (Logo) -->
                        <svg class="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                    <div class="glass glass-hover p-8 md:p-10 rounded-3xl transition-all duration-300">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-white">AI/ML Backend Engineer</h3>
                                <div class="text-purple-400 font-medium text-lg">Accenture</div>
                            </div>
                            <div class="text-sm text-gray-400 mt-2 md:mt-0 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                Aug 2023 - Jun 2025
                            </div>
                        </div>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Focused on accelerating the Software Development Life Cycle (SDLC) through intelligent automation and Generative AI solutions.
                        </p>
                        <ul class="space-y-4 text-gray-400 mb-8 text-base">
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#a855f7]"></span>
                                <span class="leading-relaxed"><strong>Built a Generative AI-powered SDLC automation suite</strong> using Flask, reducing prototype generation time by 50% for business stakeholders.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#a855f7]"></span>
                                <span class="leading-relaxed"><strong>Implemented advanced LangChain workflows</strong> to transform 150+ raw user stories into structured technical specifications, bridging the gap between product and engineering.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mt-1.5 mr-3 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0 shadow-[0_0_8px_#a855f7]"></span>
                                <span class="leading-relaxed"><strong>Engineered scalable Flask servers</strong> with integrated database management to handle concurrent user requests efficiently.</span>
                            </li>
                        </ul>
                        <div class="flex flex-wrap gap-3">
                            <span class="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">Python</span>
                            <span class="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">Flask</span>
                            <span class="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">LangChain</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 px-6 bg-black/30">
        <div class="max-w-6xl mx-auto">
            <h2 class="section-title text-white">Technical Arsenal</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Category 1: Languages & Core -->
                <div class="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                    <h3 class="text-sky-400 font-bold mb-6 flex items-center gap-3 text-lg group-hover:text-sky-300">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        Languages & Core
                    </h3>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default">Python</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default">Java</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default">SQL</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default">DSA</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default">Bash</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default">OS & Network</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default">Comp Arch</span>
                    </div>
                </div>

                <!-- Category 2: AI & Frameworks -->
                <div class="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                    <h3 class="text-purple-400 font-bold mb-6 flex items-center gap-3 text-lg group-hover:text-purple-300">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        AI & Frameworks
                    </h3>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">FastAPI</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">Flask</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">Agentic AI</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">LangGraph</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">Autogen</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">CrewAI</span>
                    </div>
                </div>

                <!-- Category 3: Data & Security -->
                <div class="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                    <h3 class="text-pink-400 font-bold mb-6 flex items-center gap-3 text-lg group-hover:text-pink-300">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                        Data & Security
                    </h3>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-default">Snowflake</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-default">PostgreSQL</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-default">Redis</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-default">Authorization</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-default">Pandas</span>
                    </div>
                </div>

                <!-- Category 4: DevOps & Tools -->
                <div class="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                    <h3 class="text-green-400 font-bold mb-6 flex items-center gap-3 text-lg group-hover:text-green-300">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        DevOps & Tools
                    </h3>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default">Git</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default">GitHub</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default">Terraform</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default">Jenkins</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default">CI/CD</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default">Docker</span>
                        <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default">AWS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="section-title text-white mb-16">Projects</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Project 1 -->
                <div class="glass p-10 rounded-3xl group hover:bg-white/5 transition-all">
                    <div class="flex justify-between items-start mb-6">
                        <h3 class="text-2xl font-bold text-white">E-Commerce API Architecture</h3>
                        <a href="https://github.com/AnirudhNBUA" class="text-gray-400 hover:text-white transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                    </div>
                    <p class="text-gray-400 mb-6 leading-relaxed">
                        Architected a complete backend service for an online store featuring product catalogs, inventory management, and multi-step order processing. Implemented secure user authentication (JWT) and Stripe payment integration.
                    </p>
                    <div class="flex flex-wrap gap-2 text-sm text-gray-300">
                        <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5">REST API</span>
                        <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5">MongoDB</span>
                        <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5">Stripe</span>
                    </div>
                </div>

                <!-- Project 2 (Implicit from Work) -->
                <div class="glass p-10 rounded-3xl group hover:bg-white/5 transition-all">
                    <div class="flex justify-between items-start mb-6">
                        <h3 class="text-2xl font-bold text-white">SDLC Automation Suite</h3>
                    </div>
                    <p class="text-gray-400 mb-6 leading-relaxed">
                        A proprietary internal tool built to generate on-demand web application prototypes for business users. Uses Generative AI to convert user stories into technical specifications and code, reducing SDLC time by 50%.
                    </p>
                    <div class="flex flex-wrap gap-2 text-sm text-gray-300">
                        <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5">Python</span>
                        <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5">GenAI</span>
                        <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5">Flask</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Education & Certifications -->
    <section class="py-24 px-6 bg-black/30">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <!-- Education -->
                <div>
                    <h2 class="text-2xl font-bold text-white mb-10">Education</h2>
                    <div class="glass p-10 rounded-3xl">
                        <div class="text-4xl mb-4">🎓</div>
                        <h3 class="text-2xl font-bold text-white">Bachelor of Information Technology</h3>
                        <p class="text-sky-400 mt-2 text-lg">Vellore Institute of Technology</p>
                        <p class="text-gray-400 mt-4 text-sm font-mono">CGPA: 8.58</p>
                    </div>
                </div>

                <!-- Certifications -->
                <div>
                    <h2 class="text-2xl font-bold text-white mb-10">Certifications</h2>
                    <div class="space-y-4">
                        <div class="glass p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors">
                            <div class="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15]"></div>
                            <span class="text-gray-300 font-medium">Google Cloud Associate Cloud Engineer</span>
                        </div>
                        <div class="glass p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors">
                            <div class="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"></div>
                            <span class="text-gray-300 font-medium">Microsoft Certified: Azure AI Fundamentals</span>
                        </div>
                        <div class="glass p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors">
                            <div class="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_#fb923c]"></div>
                            <span class="text-gray-300 font-medium">AWS Cloud Practitioner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-40 px-6 text-center">
        <div class="max-w-2xl mx-auto">
            <h2 class="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">Ready to Innovate?</h2>
            <p class="text-gray-400 mb-12 text-xl font-light">
                I'm currently focused on high-scale data engineering and AI agents. Let's build something scalable and intelligent together.
            </p>
            <a href="mailto:anirudhnbua@gmail.com" class="inline-flex items-center px-10 py-5 text-lg font-bold rounded-full bg-white text-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] btn-glow">
                Start a Conversation
                <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            
            <div class="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; 2026 Anirudh BK. All rights reserved.</p>
                <div class="flex space-x-8 mt-6 md:mt-0">
                    <a href="https://linkedin.com/in/anirudh-b-k/" target="_blank" class="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/AnirudhNBUA" target="_blank" class="hover:text-white transition-colors">GitHub</a>
                    <a href="mailto:anirudhnbua@gmail.com" class="hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </div>
    </section>

    <!-- AI Chatbot Button -->
    <div class="fixed bottom-8 right-8 z-50 animate-float">
        <button onclick="toggleChat()" class="flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-sky-600 to-purple-600 text-white font-bold shadow-2xl hover:shadow-sky-500/50 transition-all transform hover:scale-105 group border border-white/10">
            <span class="text-xl">✨</span>
            <span class="group-hover:block">Ask my AI Agent</span>
        </button>
    </div>

    <!-- Chat Modal -->
    <div id="chat-modal" class="fixed bottom-28 right-8 z-50 w-full max-w-sm transform scale-95 opacity-0 pointer-events-none transition-all duration-300 origin-bottom-right">
        <div class="glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[500px]">
            <!-- Chat Header -->
            <div class="bg-white/5 p-4 flex justify-between items-center border-b border-white/10 backdrop-blur-md">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 flex items-center justify-center text-lg shadow-lg">🤖</div>
                    <div>
                        <h3 class="font-bold text-white text-sm">Anirudh's AI Recruiter</h3>
                        <p class="text-xs text-green-400 flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                        </p>
                    </div>
                </div>
                <button onclick="toggleChat()" class="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            <!-- Chat Messages -->
            <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-4 scroll-hide bg-black/40">
                <!-- Welcome Message -->
                <div class="flex gap-3">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 flex-shrink-0 flex items-center justify-center text-xs">🤖</div>
                    <div class="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 glass border border-white/5">
                        Hello! I'm Anirudh's personal AI agent. I can tell you about his work at Morgan Stanley, his AI projects, or his tech stack. What would you like to know? ✨
                    </div>
                </div>
            </div>

            <!-- Chat Input -->
            <div class="p-4 bg-white/5 border-t border-white/10">
                <form onsubmit="handleChatSubmit(event)" class="relative">
                    <input type="text" id="chat-input" placeholder="Ask about Anirudh's skills..." class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors pr-12 focus:bg-black/70">
                    <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition-all disabled:opacity-50">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Space Background Animation Script -->
    <script>
        const canvas = document.getElementById('space-canvas');
        const ctx = canvas.getContext('2d');
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars = [];
        const numStars = 200;
        
        // Mouse position defaults to center
        let mouseX = width / 2;
        let mouseY = height / 2;

        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2; // Depth factor for parallax
                this.size = Math.random() * 1.5;
                this.baseAlpha = Math.random() * 0.5 + 0.3;
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.alpha = this.baseAlpha;
                this.alphaDirection = 1;
            }

            update() {
                // Parallax effect: stars move opposite to mouse
                // Multiply by small factor to control sensitivity
                const dx = (mouseX - width / 2) * (this.z * 0.02);
                const dy = (mouseY - height / 2) * (this.z * 0.02);
                
                // Twinkle Logic
                this.alpha += this.twinkleSpeed * this.alphaDirection;
                if (this.alpha > 1 || this.alpha < 0.2) {
                    this.alphaDirection *= -1;
                }
                
                return { dx, dy };
            }

            draw(offsetX, offsetY) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                // Draw star at original position minus parallax offset
                ctx.arc(this.x - offsetX, this.y - offsetY, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initStars() {
            stars.length = 0;
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        }

        function animateStars() {
            ctx.clearRect(0, 0, width, height);
            
            // Calculate global mouse offset for parallax
            const mouseOffsetX = (mouseX - width / 2);
            const mouseOffsetY = (mouseY - height / 2);

            stars.forEach(star => {
                star.update();
                // Apply depth-based parallax to each star
                star.draw(mouseOffsetX * star.z * 0.02, mouseOffsetY * star.z * 0.02);
            });
            
            requestAnimationFrame(animateStars);
        }

        // Track mouse movement
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Handle resize
        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        });

        initStars();
        animateStars();
    </script>

    <script>
        // Resume Data Context for the AI
        const RESUME_CONTEXT = `
        Candidate Name: Anirudh BK
        Role: Python Developer & AI Engineer
        
        Current Role: Python Developer at Morgan Stanley (Oct 2025 - Present)
           - Team: Investment Management (IM), Project ESGODS.
           - Key Work: 
             1. Architecting high-throughput pipelines for global ESG equity data, feeding Snowflake for real-time analytics.
             2. Designing low-latency FastAPI microservices to serve downstream apps (sub-100ms response).
             3. Orchestrating end-to-end workflows via Autosys & Jenkins (99.9% reliability).
        
        Previous Role: Senior AI/ML Backend Engineer at Accenture (Jun 2025 - Oct 2025)
           - Key Work: 
             1. Engineered Multi-Agent Systems (CrewAI, Autogen) orchestrating 5-10 agents.
             2. Built a universal ingestion API for 25+ file formats to automate bug reports/PPT generation.
             3. Optimized asynchronous Python backends with PostgreSQL.
        
        Previous Role: AI/ML Backend Engineer at Accenture (Aug 2023 - Jun 2025)
           - Key Work: 
             1. Built Generative AI SDLC automation suite (Flask), reducing prototype time by 50%.
             2. Implemented LangChain workflows to convert 150+ user stories into technical specs.
             3. Engineered scalable Flask servers.
        
        Education: B.Tech IT from Vellore Institute of Technology (VIT), CGPA 8.58.
        
        Tech Stack:
           - Languages: Python, Java, SQL, Bash.
           - AI: Agentic AI, LangGraph, Autogen, LangChain, CrewAI.
           - Web: FastAPI, Flask.
           - Data: Snowflake, PostgreSQL, Redis, Pandas.
           - DevOps: Git, Terraform, Jenkins, Docker, AWS, Azure.
        
        Achievements:
           - Best Employee Award at Accenture.
           - 15% Server Load Reduction (Redis).
           - 30% Bug Reduction (SOLID principles).
           - 25% Revenue Growth (CrewAI features).
        `;

        let isChatOpen = false;
        const chatModal = document.getElementById('chat-modal');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const apiKey = ""; // System will provide the key

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatModal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
                chatModal.classList.add('opacity-100', 'scale-100');
                setTimeout(() => chatInput.focus(), 100);
            } else {
                chatModal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                chatModal.classList.remove('opacity-100', 'scale-100');
            }
        }

        async function handleChatSubmit(e) {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (!message) return;

            // Add User Message
            appendMessage('user', message);
            chatInput.value = '';

            // Add Loading Indicator
            const loadingId = appendLoading();

            try {
                const response = await callGeminiAPI(message);
                removeLoading(loadingId);
                appendMessage('ai', response);
            } catch (error) {
                removeLoading(loadingId);
                appendMessage('ai', "I'm having trouble connecting to the AI services right now. Please try again later.");
                console.error("Gemini API Error:", error);
            }
        }

        function appendMessage(sender, text) {
            const div = document.createElement('div');
            div.className = `flex gap-3 chat-message ${sender === 'user' ? 'flex-row-reverse' : ''}`;
            
            const avatar = sender === 'ai' 
                ? `<div class="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 flex-shrink-0 flex items-center justify-center text-xs shadow-lg">🤖</div>`
                : `<div class="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-xs">👤</div>`;

            const bubbleClass = sender === 'ai'
                ? 'bg-white/10 text-gray-200 glass rounded-tl-none border border-white/5'
                : 'bg-sky-600 text-white rounded-tr-none shadow-lg';

            div.innerHTML = `
                ${avatar}
                <div class="${bubbleClass} p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed">
                    ${text}
                </div>
            `;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function appendLoading() {
            const id = 'loading-' + Date.now();
            const div = document.createElement('div');
            div.id = id;
            div.className = 'flex gap-3 chat-message';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-purple-600 flex-shrink-0 flex items-center justify-center text-xs shadow-lg">🤖</div>
                <div class="bg-white/10 p-4 rounded-2xl rounded-tl-none glass flex gap-1 items-center border border-white/5">
                    <div class="w-2 h-2 bg-sky-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-purple-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-pink-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            return id;
        }

        function removeLoading(id) {
            const el = document.getElementById(id);
            if (el) el.remove();
        }

        async function callGeminiAPI(userQuery) {
            const systemPrompt = `You are an AI recruiter assistant for Anirudh BK. 
            Use the following resume context to answer questions about him confidently and professionally.
            Keep answers concise (under 3 sentences) unless asked for details.
            If the answer isn't in the context, say you don't have that specific info but can tell them about his Python or AI skills.
            
            CONTEXT:
            ${RESUME_CONTEXT}`;

            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            
            const payload = {
                contents: [
                    {
                        role: "user",
                        parts: [{ text: systemPrompt + "\n\nUser Question: " + userQuery }]
                    }
                ]
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('API Request Failed');

            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        }
    </script>
</body>
</html>
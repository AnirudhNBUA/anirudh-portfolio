import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, useInView, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Cpu, Award, GraduationCap, Mail, Linkedin, Github, Phone, Star, Code, Database, Cloud, ArrowUp } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// --- Data Configuration ---
const portfolioData = {
  name: "Anirudh BK",
  title: "AI Engineer",
  subtitles: ["Python", "Machine Learning", "NodeJS", "Generative AI", "Multi-Agent Systems"],
  contact: {
    email: "anirudhnbua@gmail.com",
    phone: "+91-8688456460",
    linkedin: "https://www.linkedin.com/in/anirudh-b-k/",
    github: "https://github.com/AnirudhNBUA",
  },
  summary: "I am a Backend Developer with 2 years of experience in building scalable applications using NodeJS and Python. I thrive on creating efficient, robust, and scalable solutions, leveraging my expertise in multi-agent systems, generative AI, and cloud technologies to drive innovation and deliver impactful results.",
  experience: [
    {
      role: "Senior AI/ML Computational Science Backend Engineer",
      company: "Accenture",
      period: "06/2025 – Present",
      location: "Bengaluru",
      description: "Orchestrated multi-agent systems using Crew AI and Autogen for collaborative, autonomous task execution. Designed and developed a robust, user-facing API handling 25+ input formats for use cases like bug report generation and presentation creation from various file types.",
      tech: ["NodeJS", "Express", "Multi-Agent Systems", "PostgreSQL", "Redis", "Git"],
    },
    {
      role: "AI/ML Computational Science Backend Engineer",
      company: "Accenture",
      period: "08/2023 – 05/2025",
      location: "Bengaluru",
      description: "Developed an automation product to generate on-demand web application prototypes, accelerating the SDLC by 50%. Utilized LangChain to communicate with LLMs for context-aware generation of application components and engineered the workflow on a scalable Flask server.",
      tech: ["Python", "Flask", "PostgreSQL", "Langchain", "Redis", "Git"],
    },
  ],
  projects: [
    {
      title: "Prediction of Chronic Kidney Disease",
      description: "Developed an end-to-end machine learning pipeline using Python. Evaluated classifiers like Decision Trees, Random Forests, and SVMs, and applied ensemble techniques (Bagging, Boosting, Stacking) to improve prediction accuracy and model robustness, achieving superior performance.",
      tech: ["Python", "Scikit-learn", "NumPy", "Ensemble Methods"],
    },
     {
      title: "SDLC Automation Platform",
      description: "A generative AI-based solution to automate key SDLC workflows. The platform processes user stories and generates structured technical inputs for LLMs, boosting development speed by 30% and providing instant web prototypes for business users.",
      tech: ["Python", "Flask", "LangChain", "PostgreSQL", "Generative AI"],
    },
  ],
  skills: {
    languages: ["Python", "JavaScript", "NodeJS", "SQL"],
    frameworks: ["Express", "Flask", "React", "Bootstrap"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    cloud: ["AWS", "Azure", "EC2", "S3", "RDS"],
    tools: ["Git", "GitLab", "Docker", "Bash", "IntelliJ IDEA"],
  },
  education: {
    degree: "Bachelor of Information Technology",
    institution: "Vellore Institute of Technology",
    period: "08/2019 – 05/2023",
    cgpa: "8.58",
  },
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure AI Fundamentals",
    "Google Cloud Certified: Digital Cloud Leader",
    "Google Cloud Certified: Associate Cloud Engineer",
  ],
  achievements: [
    {
      title: "Best Employee Award",
      description: "Recognized as the best employee on my team for significant product contributions.",
    },
    {
      title: "Server Load Reduction",
      description: "Reduced server load by 15% by engineering and implementing a Redis caching layer.",
    },
    {
      title: "Bug Reduction Success",
      description: "Achieved a 30% reduction in bugs post-code reviews by applying SOLID principles.",
    },
  ],
};

// --- Particle Config ---
const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
        },
        modes: {
            grab: { distance: 140, links: { opacity: 1 } },
        },
    },
    particles: {
        color: { value: "#ffffff" },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: { enable: true, area: 800 },
            value: 80,
        },
        opacity: { value: 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
};

// --- Custom Hooks & Components ---

const useTypingEffect = (words, typeSpeed = 100, deleteSpeed = 50, delay = 1500) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                if (charIndex > 0) {
                    setText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                if (charIndex < currentWord.length) {
                    setText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }
        };
        const typingTimeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, wordIndex, charIndex, words, typeSpeed, deleteSpeed, delay]);
    return text;
};

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-[60]" style={{ scaleX }} />;
};

const AnimatedSection = ({ children, id }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);
    return (
        <motion.section
            id={id} ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
            initial="hidden" animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
        >
            {children}
        </motion.section>
    );
};

const SectionTitle = ({ children, icon: Icon }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center flex items-center justify-center gap-3">
        <Icon className="w-8 h-8 text-cyan-400" />
        {children}
    </h2>
);

const GlowCard = ({ children, className }) => {
    const cardRef = useRef(null);
    const [glowStyle, setGlowStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setGlowStyle({
            '--glow-x': `${x}px`,
            '--glow-y': `${y}px`,
            '--glow-opacity': '1',
        });
    };

    const handleMouseLeave = () => {
        setGlowStyle({ '--glow-opacity': '0' });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={glowStyle}
            className={`relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700/50 transition-all duration-300 glow-card ${className}`}
        >
            {children}
            <div className="glow-effect" />
        </div>
    );
};


// --- Section Components ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [ { href: "#about", label: "About" }, { href: "#experience", label: "Experience" }, { href: "#projects", label: "Projects" }, { href: "#skills", label: "Skills" }, { href: "#contact", label: "Contact" }, ];
  const scrollToSection = (e, href) => { e.preventDefault(); document.querySelector(href).scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white transition-colors hover:text-cyan-400"> {portfolioData.name} </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-300 hover:text-cyan-400 transition-colors"> {link.label} </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
    const typedText = useTypingEffect(portfolioData.subtitles);
    return (
        <section className="min-h-screen flex items-center justify-center text-white relative">
            <div className="text-center z-10 p-4">
                <motion.h1 
                    className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-500 to-pink-500 animate-gradient-x"
                    initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                >
                    {portfolioData.name}
                </motion.h1>
                <motion.div 
                    className="text-xl md:text-2xl text-slate-300 mb-8 h-8"
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block">{typedText}</span>
                    <span className="inline-block w-0.5 h-7 bg-cyan-300 animate-pulse ml-1 align-middle"></span>
                </motion.div>
                <motion.div 
                    className="flex justify-center space-x-6 mt-12"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.2 }}
                >
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110"><Linkedin size={28} /></a>
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110"><Github size={28} /></a>
                    <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110"><Mail size={28} /></a>
                </motion.div>
            </div>
        </section>
    );
};

const About = () => (
    <AnimatedSection id="about">
        <div className="container mx-auto text-center max-w-3xl">
            <SectionTitle icon={Cpu}>About Me</SectionTitle>
            <GlowCard className="text-left">
                <p className="text-slate-300 text-lg leading-relaxed">{portfolioData.summary}</p>
            </GlowCard>
        </div>
    </AnimatedSection>
);

const Experience = () => (
  <AnimatedSection id="experience">
    <div className="container mx-auto">
      <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
      <div className="relative border-l-2 border-slate-700 ml-6">
        {portfolioData.experience.map((job, index) => (
          <motion.div key={index} className="mb-12 pl-12" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-slate-800 rounded-full ring-4 ring-slate-900">
              <Briefcase className="w-4 h-4 text-cyan-400" />
            </span>
            <GlowCard>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                <span className="text-sm font-medium text-cyan-400 bg-cyan-900/50 px-3 py-1 rounded-full">{job.period}</span>
              </div>
              <p className="text-md text-slate-300 my-1">{job.company} - <span className="text-slate-400">{job.location}</span></p>
              <p className="text-slate-400 mt-4 mb-4 text-sm leading-relaxed">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md">{skill}</span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Projects = () => (
  <AnimatedSection id="projects">
    <div className="container mx-auto">
      <SectionTitle icon={Code}>Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div key={index} className="h-full" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <GlowCard className="flex flex-col h-full group">
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700">
                {project.tech.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md">{skill}</span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Skills = () => {
    const skillCategories = [ { title: "Languages & Frameworks", skills: [...portfolioData.skills.languages, ...portfolioData.skills.frameworks], icon: Code }, { title: "Databases", skills: portfolioData.skills.databases, icon: Database }, { title: "Cloud & Tools", skills: [...portfolioData.skills.cloud, ...portfolioData.skills.tools], icon: Cloud }, ];
    return (
        <AnimatedSection id="skills">
            <div className="container mx-auto">
                <SectionTitle icon={Cpu}>Technical Skills</SectionTitle>
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} className="h-full" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <GlowCard className="h-full">
                                <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2"><category.icon className="w-5 h-5 text-cyan-400"/>{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <motion.span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1.5 rounded-md cursor-default" whileHover={{ scale: 1.1, backgroundColor: '#22d3ee', color: '#ffffff' }} transition={{ duration: 0.2 }}>{skill}</motion.span>
                                    ))}
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

const EducationAndMore = () => (
    <AnimatedSection id="education-etc">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
                    <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center flex items-center justify-center gap-2"><GraduationCap className="w-7 h-7 text-cyan-400"/> Education</h3>
                    <GlowCard className="text-center">
                        <p className="text-lg font-semibold text-slate-200">{portfolioData.education.degree}</p>
                        <p className="text-cyan-400">{portfolioData.education.institution}</p>
                        <p className="text-slate-400 text-sm mt-1">{portfolioData.education.period}</p>
                        <p className="text-slate-400 text-sm">CGPA: {portfolioData.education.cgpa}</p>
                    </GlowCard>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center flex items-center justify-center gap-2"><Award className="w-7 h-7 text-cyan-400"/> Achievements</h3>
                    <div className="space-y-4">
                        {portfolioData.achievements.map((ach, i) => (
                            <GlowCard key={i}>
                                <p className="font-semibold text-slate-200 flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400"/>{ach.title}</p>
                                <p className="text-slate-400 text-sm">{ach.description}</p>
                            </GlowCard>
                        ))}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center flex items-center justify-center gap-2"><Star className="w-7 h-7 text-cyan-400"/> Certifications</h3>
                     <GlowCard>
                        <ul className="space-y-3">
                            {portfolioData.certifications.map((cert, i) => (
                                <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                                    <Star className="w-4 h-4 text-cyan-400 flex-shrink-0"/> {cert}
                                </li>
                            ))}
                        </ul>
                    </GlowCard>
                </motion.div>
            </div>
        </div>
    </AnimatedSection>
);

const Contact = () => (
  <AnimatedSection id="contact">
    <div className="container mx-auto text-center max-w-2xl">
      <SectionTitle icon={Mail}>Get In Touch</SectionTitle>
      <p className="text-slate-400 mb-8 text-lg"> I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out. </p>
      <motion.a href={`mailto:${portfolioData.contact.email}`} className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-cyan-500/30" whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22d3ee" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}> Say Hello </motion.a>
      <div className="flex justify-center space-x-8 mt-12">
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110 flex flex-col items-center gap-2"> <Linkedin size={28} /> <span className="text-xs">LinkedIn</span> </a>
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110 flex flex-col items-center gap-2"> <Github size={28} /> <span className="text-xs">GitHub</span> </a>
        <a href={`tel:${portfolioData.contact.phone}`} className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110 flex flex-col items-center gap-2"> <Phone size={28} /> <span className="text-xs">Phone</span> </a>
      </div>
    </div>
  </AnimatedSection>
);

const Footer = () => (
  <footer className="bg-slate-900/50 border-t border-slate-800 py-6 z-10 relative">
    <div className="container mx-auto text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
      <p className="mt-2">Designed & Built with ❤️</p>
    </div>
  </footer>
);

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isVisible && (
                <motion.button onClick={scrollToTop} className="bg-cyan-500/50 text-white rounded-full p-3 hover:bg-cyan-500 transition-colors" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                    <ArrowUp />
                </motion.button>
            )}
        </div>
    );
};

// --- Main App Component ---
export default function App() {
  const particlesInit = useCallback(async engine => { await loadSlim(engine); }, []);
  return (
    <>
      <style>{`
        .aurora-bg {
          background: #0f172a;
          background: linear-gradient(125deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          background-size: 400% 400%;
          animation: aurora 15s ease infinite;
        }
        @keyframes aurora {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .glow-card {
          position: relative;
        }
        .glow-card:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            350px circle at var(--glow-x) var(--glow-y),
            rgba(45, 212, 191, 0.2),
            transparent
          );
          opacity: var(--glow-opacity, 0);
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
        .glow-effect {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px #fff2;
        }
      `}</style>
      <div className="font-sans leading-normal tracking-tight text-white aurora-bg">
        <ScrollProgress />
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="fixed top-0 left-0 w-full h-full z-0" />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <EducationAndMore />
            <Contact />
          </main>
          <Footer />
        </div>
        <BackToTopButton />
      </div>
    </>
  );
}

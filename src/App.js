import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationAndMore from './components/EducationAndMore';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

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

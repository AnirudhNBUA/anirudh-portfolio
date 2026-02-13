import React from 'react';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import SpaceCanvas from './components/SpaceCanvas';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationAndMore from './components/EducationAndMore';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';

export default function App() {
  return (
    <>
      <style>{`
        * {
          -webkit-tap-highlight-color: transparent;
        }

        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #050505;
          color: #f3f4f6;
          overflow-x: hidden;
        }

        /* Selection */
        ::selection {
          background: rgba(56, 189, 248, 0.2);
          color: #fff;
        }

        /* Premium Glassmorphism — toned for elegance */
        .glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-nav {
          background: rgba(5, 5, 5, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        @media (min-width: 768px) {
          .glass-nav {
            background: rgba(5, 5, 5, 0.85);
          }
        }

        /* Text gradient */
        .text-gradient {
          background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Timeline */
        .timeline-line {
          position: absolute;
          left: 28px;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.03));
        }

        /* Scroll hide */
        .scroll-hide::-webkit-scrollbar { display: none; }
        .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Blink cursor for typing effect */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        /* Typing dots (chatbot) */
        .typing-dot { animation: typing 1.4s infinite ease-in-out both; }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        /* Section title underline */
        .section-title-line {
          position: relative;
          display: inline-block;
        }
        .section-title-line::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 48px;
          height: 2px;
          background: linear-gradient(to right, rgba(255,255,255,0.25), rgba(255,255,255,0.05));
          border-radius: 1px;
        }

        /* Marquee for Skills */
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Gradient mesh drift animations */
        @keyframes meshDrift1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(5vw, 3vh) scale(1.05); }
        }
        @keyframes meshDrift2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-4vw, -5vh) scale(1.08); }
        }
        @keyframes meshDrift3 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(3vw, -2vh) scale(0.95); }
        }

        /* Section scroll offset */
        section[id] {
          scroll-margin-top: 4rem;
        }

        @media (min-width: 640px) {
          section[id] {
            scroll-margin-top: 5rem;
          }
        }

        /* Subtle divider between sections */
        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent);
          margin: 0 auto;
          max-width: 64rem;
        }
      `}</style>
      <div className="font-sans leading-normal tracking-tight text-white relative">
        <SpaceCanvas />
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Stats />
          <Experience />
          <Skills />
          <Projects />
          <EducationAndMore />
          <Contact />
        </main>
        <AIChatbot />
      </div>
    </>
  );
}

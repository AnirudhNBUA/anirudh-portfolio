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
        body {
          font-family: 'Inter', sans-serif;
          background-color: #000000;
          color: #f3f4f6;
          background-image: 
            radial-gradient(circle at 15% 50%, rgba(56, 189, 248, 0.05), transparent 25%), 
            radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.05), transparent 25%);
          background-attachment: fixed;
          overflow-x: hidden;
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

        /* Scroll hide */
        .scroll-hide::-webkit-scrollbar { display: none; }
        .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Float animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        /* Typing dots */
        .typing-dot { animation: typing 1.4s infinite ease-in-out both; }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        /* Button glow */
        .btn-glow { position: relative; overflow: hidden; }
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
        .btn-glow:hover::before { left: 100%; }

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
          width: 60px;
          height: 4px;
          background: linear-gradient(to right, #38bdf8, #a855f7);
          border-radius: 2px;
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

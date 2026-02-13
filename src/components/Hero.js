import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

// --- Typing Effect Hook ---
const useTypingEffect = (words, typeSpeed = 80, deleteSpeed = 40, pauseDelay = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((p) => p + 1);
          if (charIndex + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDelay);
          }
        } else {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((p) => p - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((p) => (p + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, charIndex, words, typeSpeed, deleteSpeed, pauseDelay]);

  return text;
};

const roles = ['Python Developer', 'AI Engineer', 'Backend Architect', 'Data Pipeline Expert', 'Multi-Agent Builder'];

const Hero = () => {
  const typedText = useTypingEffect(roles);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Ambient gradient washes */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(56,189,248,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(168,85,247,0.035) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 text-xs font-semibold uppercase tracking-widest text-gray-400 border border-white/[0.06]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          Open to Opportunities
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-[1.08] tracking-tight text-white"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Architecting <br />
          <span className="text-gradient">Intelligent Systems</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          className="h-10 mb-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="text-xl md:text-2xl text-gray-500 font-light tracking-wide">
            {typedText}
          </span>
          <span className="inline-block w-[2px] h-6 bg-sky-400/70 ml-1 animate-blink" />
        </motion.div>

        {/* Subtitle — readable weight */}
        <motion.p
          className="text-base md:text-lg text-gray-300/90 max-w-2xl mx-auto mb-14 leading-[1.8] font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Building the backbone of modern applications — from scalable financial data pipelines
          at <span className="text-white font-semibold">Morgan Stanley</span> to autonomous multi-agent networks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#experience"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 text-center shadow-[0_2px_20px_rgba(255,255,255,0.08)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.15)]"
          >
            Explore My Work
          </a>
          <a
            href="https://github.com/AnirudhNBUA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/10 hover:border-white/25 bg-transparent hover:bg-white/[0.03] transition-all duration-300 flex items-center justify-center gap-3 text-gray-300 hover:text-white"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

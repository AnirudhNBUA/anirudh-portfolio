import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronDown } from 'lucide-react';

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

// --- Magnetic Button ---
const MagneticButton = ({ children, className, href, ...props }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = React.useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setOffset({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.2s ease-out',
      }}
      {...props}
    >
      {children}
    </a>
  );
};

const roles = ['Python Developer', 'AI Engineer', 'Backend Architect', 'Data Pipeline Expert', 'Multi-Agent Builder'];

const Hero = () => {
  const typedText = useTypingEffect(roles);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] rounded-full blur-[150px] -z-10 opacity-30 animate-orb-1"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[140px] -z-10 opacity-25 animate-orb-2"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />
      <div className="absolute top-[60%] left-[50%] w-[400px] h-[400px] rounded-full blur-[120px] -z-10 opacity-15 animate-orb-3"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 text-xs font-semibold uppercase tracking-widest text-sky-300 border border-sky-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
          Open to Opportunities
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight tracking-tight text-white"
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
          <span className="text-xl md:text-2xl text-gray-400 font-light">
            {typedText}
          </span>
          <span className="inline-block w-[3px] h-7 bg-sky-400 ml-1 animate-blink" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Building the backbone of modern applications — from scalable financial data pipelines
          at <strong className="text-gray-300">Morgan Stanley</strong> to autonomous multi-agent networks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <MagneticButton
            href="#experience"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] btn-glow text-center inline-block"
          >
            Explore My Work
          </MagneticButton>
          <MagneticButton
            href="https://github.com/AnirudhNBUA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-full glass hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-white border border-white/10 hover:border-white/30 inline-flex"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

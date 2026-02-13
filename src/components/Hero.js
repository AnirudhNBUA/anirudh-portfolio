import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Ambient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 text-xs font-semibold uppercase tracking-widest text-sky-300 border border-sky-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
          Open to Opportunities
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Architecting <br />
          <span className="text-gradient">Intelligent Systems</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I am a <strong className="text-gray-200">Python Developer & AI Engineer</strong> building the backbone of modern applications.
          From scalable financial data pipelines at Morgan Stanley to autonomous multi-agent networks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#experience"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.2)] btn-glow text-center"
          >
            Explore My Work
          </a>
          <a
            href="https://github.com/AnirudhNBUA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-full glass hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-white border border-white/10 hover:border-white/30"
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

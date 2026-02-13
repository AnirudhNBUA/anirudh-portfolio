import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-40 px-6 text-center relative z-10">
    <div className="max-w-2xl mx-auto">
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Ready to Innovate?
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-12 text-xl font-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm currently focused on high-scale data engineering and AI agents. Let's build something scalable and intelligent together.
      </motion.p>

      <motion.a
        href="mailto:anirudhnbua@gmail.com"
        className="inline-flex items-center px-10 py-5 text-lg font-bold rounded-full bg-white text-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] btn-glow"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Start a Conversation
        <Mail className="w-5 h-5 ml-2" />
      </motion.a>

      {/* Footer */}
      <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Anirudh BK. All rights reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="https://linkedin.com/in/anirudh-b-k/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/AnirudhNBUA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:anirudhnbua@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

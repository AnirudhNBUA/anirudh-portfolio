import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { href: 'https://linkedin.com/in/anirudh-b-k/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com/AnirudhNBUA', label: 'GitHub', Icon: Github },
  { href: 'mailto:anirudhnbua@gmail.com', label: 'Email', Icon: Mail },
];

const Contact = () => (
  <section id="contact" className="py-40 px-6 text-center relative z-10">
    <div className="max-w-3xl mx-auto">
      {/* Decorative gradient orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-500/[0.04] via-purple-500/[0.03] to-transparent blur-3xl pointer-events-none" />

      <motion.p
        className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.p>

      <motion.h2
        className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Ready to{' '}
        <span className="text-gradient">Innovate</span>?
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-14 text-xl font-light leading-relaxed max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm currently focused on high-scale data engineering and AI agents. Let's build something scalable and intelligent together.
      </motion.p>

      {/* CTA Button with animated gradient border */}
      <motion.div
        className="inline-block mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="mailto:anirudhnbua@gmail.com"
          className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full bg-white text-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] btn-glow"
        >
          Start a Conversation
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="flex justify-center gap-4 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group w-12 h-12 rounded-full glass border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label={label}
          >
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="pt-10 border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Anirudh BK. Crafted with precision.
          </p>
          <p className="mt-3 md:mt-0 text-gray-700">
            Built with React &middot; Framer Motion &middot; Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

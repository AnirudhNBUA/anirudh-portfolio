import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['contact', 'skills', 'projects', 'experience', 'about'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 300) setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/[0.06]'
          : 'bg-[#050505]/90 backdrop-blur-xl md:bg-[#050505]/80 border-b border-white/[0.04]'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity group">
          Anirudh<span className="text-sky-400 group-hover:text-sky-300 transition-colors">BK</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'text-white' : 'hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-400 rounded-full"
                    layoutId="nav-dot"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <div className="ml-6">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-[0_1px_12px_rgba(255,255,255,0.06)] hover:shadow-[0_2px_20px_rgba(255,255,255,0.12)]"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 w-full bg-[#0a0a0a] border-t border-white/[0.08] p-4 pb-6 flex flex-col space-y-1 z-40 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`py-3.5 px-5 rounded-xl text-base font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-white/[0.08] border border-white/[0.1]'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.05] active:bg-white/[0.08]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block w-full py-3.5 px-5 rounded-xl bg-white text-black font-semibold text-center text-base hover:bg-gray-100 active:bg-gray-200 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

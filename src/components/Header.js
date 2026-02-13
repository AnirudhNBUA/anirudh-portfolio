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
      className={`fixed top-0 w-full z-50 glass-nav transition-all duration-500 ${isScrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-0 w-full glass border-t border-white/5 p-6 flex flex-col space-y-1 z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`py-3 px-4 rounded-lg text-center transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="text-gray-300 hover:text-white py-3 px-4 rounded-lg text-center hover:bg-white/[0.03] transition-colors"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

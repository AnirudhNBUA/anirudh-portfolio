import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';

const portfolioData = {
  name: "Anirudh BK",
  contact: {
    linkedin: "https://www.linkedin.com/in/anirudh-b-k/",
    github: "https://github.com/AnirudhNBUA",
    email: "anirudhnbua@gmail.com",
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [ { href: "#about", label: "About" }, { href: "#experience", label: "Experience" }, { href: "#projects", label: "Projects" }, { href: "#skills", label: "Skills" }, { href: "#contact", label: "Contact" }, ];
  const scrollToSection = (e, href) => { e.preventDefault(); document.querySelector(href).scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white transition-colors hover:text-cyan-400"> {portfolioData.name} </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-300 hover:text-cyan-400 transition-colors"> {link.label} </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

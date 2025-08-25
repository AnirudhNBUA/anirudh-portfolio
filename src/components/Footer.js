import React from 'react';

const portfolioData = {
  name: "Anirudh BK"
};

const Footer = () => (
  <footer className="bg-slate-900/50 border-t border-slate-800 py-6 z-10 relative">
    <div className="container mx-auto text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
      <p className="mt-2">Designed & Built with ❤️</p>
    </div>
  </footer>
);

export default Footer;

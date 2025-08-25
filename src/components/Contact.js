import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const portfolioData = {
  contact: {
    email: "anirudhnbua@gmail.com",
    phone: "+91-8688456460",
    linkedin: "https://www.linkedin.com/in/anirudh-b-k/",
    github: "https://github.com/AnirudhNBUA",
  }
};

const Contact = () => (
  <AnimatedSection id="contact">
    <div className="container mx-auto text-center max-w-2xl">
      <SectionTitle icon={Mail}>Get In Touch</SectionTitle>
      <p className="text-slate-400 mb-8 text-lg"> I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out. </p>
      <motion.a href={`mailto:${portfolioData.contact.email}`} className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-cyan-500/30" whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22d3ee" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}> Say Hello </motion.a>
      <div className="flex justify-center space-x-8 mt-12">
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110 flex flex-col items-center gap-2"> <Linkedin size={28} /> <span className="text-xs">LinkedIn</span> </a>
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110 flex flex-col items-center gap-2"> <Github size={28} /> <span className="text-xs">GitHub</span> </a>
        <a href={`tel:${portfolioData.contact.phone}`} className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110 flex flex-col items-center gap-2"> <Phone size={28} /> <span className="text-xs">Phone</span> </a>
      </div>
    </div>
  </AnimatedSection>
);

export default Contact;

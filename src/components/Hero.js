import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const portfolioData = {
  name: "Anirudh BK",
  subtitles: ["Python", "Machine Learning", "NodeJS", "Generative AI", "Multi-Agent Systems"],
  contact: {
    linkedin: "https://www.linkedin.com/in/anirudh-b-k/",
    github: "https://github.com/AnirudhNBUA",
    email: "anirudhnbua@gmail.com",
  },
};

const useTypingEffect = (words, typeSpeed = 100, deleteSpeed = 50, delay = 1500) => {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };
    const typingTimeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, charIndex, words, typeSpeed, deleteSpeed, delay]);
  return text;
};

const Hero = () => {
  const typedText = useTypingEffect(portfolioData.subtitles);
  return (
    <section className="min-h-screen flex items-center justify-center text-white relative">
      <div className="text-center z-10 p-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-500 to-pink-500 animate-gradient-x"
          initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          {portfolioData.name}
        </motion.h1>
        <motion.div 
          className="text-xl md:text-2xl text-slate-300 mb-8 h-8"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block">{typedText}</span>
          <span className="inline-block w-0.5 h-7 bg-cyan-300 animate-pulse ml-1 align-middle"></span>
        </motion.div>
        <motion.div 
          className="flex justify-center space-x-6 mt-12"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.2 }}
        >
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110"><Linkedin size={28} /></a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110"><Github size={28} /></a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110"><Mail size={28} /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

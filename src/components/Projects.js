import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// --- Spotlight Card with 3D Tilt ---
const SpotlightCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setStyle({
      '--spotlight-x': `${x}px`,
      '--spotlight-y': `${y}px`,
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      '--spotlight-x': '50%',
      '--spotlight-y': '50%',
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: 'transform 0.2s ease-out' }}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
};

const projectsData = [
  {
    title: 'E-Commerce API Architecture',
    description:
      'Architected a complete backend service for an online store featuring product catalogs, inventory management, and multi-step order processing. Implemented secure user authentication (JWT) and Stripe payment integration.',
    tech: ['REST API', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/AnirudhNBUA',
    color: 'sky',
  },
  {
    title: 'SDLC Automation Suite',
    description:
      'A proprietary internal tool built to generate on-demand web application prototypes for business users. Uses Generative AI to convert user stories into technical specifications and code, reducing SDLC time by 50%.',
    tech: ['Python', 'GenAI', 'Flask', 'LangChain'],
    github: null,
    color: 'purple',
  },
];

const borderColors = {
  sky: 'group-hover:border-sky-500/40',
  purple: 'group-hover:border-purple-500/40',
};

const Projects = () => (
  <section id="projects" className="py-28 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-white mb-16 section-title-line"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <SpotlightCard
              className={`glass p-10 rounded-3xl group border border-white/5 ${borderColors[project.color]} transition-all duration-500 relative overflow-hidden`}
            >
              {/* Spotlight gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(56,189,248,0.06), transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-gradient-inline transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed text-[15px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-medium hover:border-white/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

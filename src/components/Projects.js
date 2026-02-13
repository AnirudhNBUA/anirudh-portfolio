import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import GlowCard from './GlowCard';

const projectsData = [
  {
    title: 'E-Commerce API Architecture',
    description:
      'Architected a complete backend service for an online store featuring product catalogs, inventory management, and multi-step order processing. Implemented secure user authentication (JWT) and Stripe payment integration.',
    tech: ['REST API', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/AnirudhNBUA',
    glowColor: 'rgba(56,189,248,0.10)',
  },
  {
    title: 'SDLC Automation Suite',
    description:
      'A proprietary internal tool built to generate on-demand web application prototypes for business users. Uses Generative AI to convert user stories into technical specifications and code, reducing SDLC time by 50%.',
    tech: ['Python', 'GenAI', 'Flask', 'LangChain'],
    github: null,
    glowColor: 'rgba(168,85,247,0.10)',
  },
];

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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <GlowCard
              className="glass p-10 rounded-3xl group border border-white/[0.05] hover:border-white/[0.12] transition-all duration-500"
              glowColor={project.glowColor}
              glowSize={450}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/[0.06]">
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/[0.04]"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed text-[15px]">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

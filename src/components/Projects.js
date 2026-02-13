import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projectsData = [
  {
    title: 'E-Commerce API Architecture',
    description:
      'Architected a complete backend service for an online store featuring product catalogs, inventory management, and multi-step order processing. Implemented secure user authentication (JWT) and Stripe payment integration.',
    tech: ['REST API', 'MongoDB', 'Stripe'],
    github: 'https://github.com/AnirudhNBUA',
  },
  {
    title: 'SDLC Automation Suite',
    description:
      'A proprietary internal tool built to generate on-demand web application prototypes for business users. Uses Generative AI to convert user stories into technical specifications and code, reducing SDLC time by 50%.',
    tech: ['Python', 'GenAI', 'Flask'],
    github: null,
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-16 section-title-line">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="glass p-10 rounded-3xl group hover:bg-white/5 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

import React from 'react';
import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import GlowCard from './GlowCard';
import { motion } from 'framer-motion';

const portfolioData = {
  experience: [
    {
      role: "Senior AI/ML Computational Science Backend Engineer",
      company: "Accenture",
      period: "06/2025 – Present",
      location: "Bengaluru",
      description: "Orchestrated multi-agent systems using Crew AI and Autogen for collaborative, autonomous task execution. Designed and developed a robust, user-facing API handling 25+ input formats for use cases like bug report generation and presentation creation from various file types.",
      tech: ["NodeJS", "Express", "Multi-Agent Systems", "PostgreSQL", "Redis", "Git"],
    },
    {
      role: "AI/ML Computational Science Backend Engineer",
      company: "Accenture",
      period: "08/2023 – 05/2025",
      location: "Bengaluru",
      description: "Developed an automation product to generate on-demand web application prototypes, accelerating the SDLC by 50%. Utilized LangChain to communicate with LLMs for context-aware generation of application components and engineered the workflow on a scalable Flask server.",
      tech: ["Python", "Flask", "PostgreSQL", "Langchain", "Redis", "Git"],
    },
  ]
};

const Experience = () => (
  <AnimatedSection id="experience">
    <div className="container mx-auto">
      <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
      <div className="relative border-l-2 border-slate-700 ml-6">
        {portfolioData.experience.map((job, index) => (
          <motion.div key={index} className="mb-12 pl-12" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-slate-800 rounded-full ring-4 ring-slate-900">
              <Briefcase className="w-4 h-4 text-cyan-400" />
            </span>
            <GlowCard>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                <span className="text-sm font-medium text-cyan-400 bg-cyan-900/50 px-3 py-1 rounded-full">{job.period}</span>
              </div>
              <p className="text-md text-slate-300 my-1">{job.company} - <span className="text-slate-400">{job.location}</span></p>
              <p className="text-slate-400 mt-4 mb-4 text-sm leading-relaxed">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md">{skill}</span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Experience;

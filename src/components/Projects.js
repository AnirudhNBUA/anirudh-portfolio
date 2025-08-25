import React from 'react';
import { Code } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import GlowCard from './GlowCard';
import { motion } from 'framer-motion';

const portfolioData = {
  projects: [
    {
      title: "Prediction of Chronic Kidney Disease",
      description: "Developed an end-to-end machine learning pipeline using Python. Evaluated classifiers like Decision Trees, Random Forests, and SVMs, and applied ensemble techniques (Bagging, Boosting, Stacking) to improve prediction accuracy and model robustness, achieving superior performance.",
      tech: ["Python", "Scikit-learn", "NumPy", "Ensemble Methods"],
    },
    {
      title: "SDLC Automation Platform",
      description: "A generative AI-based solution to automate key SDLC workflows. The platform processes user stories and generates structured technical inputs for LLMs, boosting development speed by 30% and providing instant web prototypes for business users.",
      tech: ["Python", "Flask", "LangChain", "PostgreSQL", "Generative AI"],
    },
  ]
};

const Projects = () => (
  <AnimatedSection id="projects">
    <div className="container mx-auto">
      <SectionTitle icon={Code}>Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div key={index} className="h-full" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <GlowCard className="flex flex-col h-full group">
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700">
                {project.tech.map((skill, i) => (
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

export default Projects;

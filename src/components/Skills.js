import React from 'react';
import { motion } from 'framer-motion';
import { Code, Box, Database, Mic } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code,
    color: 'sky',
    skills: ['Python', 'Java', 'SQL', 'DSA', 'Bash', 'OS & Network', 'Comp Arch'],
  },
  {
    title: 'AI & Frameworks',
    icon: Box,
    color: 'purple',
    skills: ['FastAPI', 'Flask', 'Agentic AI', 'LangGraph', 'Autogen', 'CrewAI'],
  },
  {
    title: 'Data & Security',
    icon: Database,
    color: 'pink',
    skills: ['Snowflake', 'PostgreSQL', 'Redis', 'Authorization', 'Pandas'],
  },
  {
    title: 'DevOps & Tools',
    icon: Mic,
    color: 'green',
    skills: ['Git', 'GitHub', 'Terraform', 'Jenkins', 'CI/CD', 'Docker', 'AWS'],
  },
];

const hoverColors = {
  sky: 'hover:border-sky-500/50 hover:bg-sky-500/10',
  purple: 'hover:border-purple-500/50 hover:bg-purple-500/10',
  pink: 'hover:border-pink-500/50 hover:bg-pink-500/10',
  green: 'hover:border-green-500/50 hover:bg-green-500/10',
};

const titleColors = {
  sky: 'text-sky-400 group-hover:text-sky-300',
  purple: 'text-purple-400 group-hover:text-purple-300',
  pink: 'text-pink-400 group-hover:text-pink-300',
  green: 'text-green-400 group-hover:text-green-300',
};

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-black/30 relative z-10">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 section-title-line">
        Technical Arsenal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={`${titleColors[category.color]} font-bold mb-6 flex items-center gap-3 text-lg`}>
                <Icon className="w-6 h-6" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300 ${hoverColors[category.color]} transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

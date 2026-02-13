import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Settings } from 'lucide-react';
import GlowCard from './GlowCard';

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code,
    color: 'sky',
    glowColor: 'rgba(56,189,248,0.10)',
    skills: ['Python', 'Java', 'SQL', 'DSA', 'Bash', 'OS & Network', 'Comp Arch'],
  },
  {
    title: 'AI & Frameworks',
    icon: Brain,
    color: 'purple',
    glowColor: 'rgba(168,85,247,0.10)',
    skills: ['FastAPI', 'Flask', 'Agentic AI', 'LangGraph', 'Autogen', 'CrewAI'],
  },
  {
    title: 'Data & Security',
    icon: Database,
    color: 'pink',
    glowColor: 'rgba(236,72,153,0.10)',
    skills: ['Snowflake', 'PostgreSQL', 'Redis', 'Authorization', 'Pandas'],
  },
  {
    title: 'DevOps & Tools',
    icon: Settings,
    color: 'green',
    glowColor: 'rgba(74,222,128,0.10)',
    skills: ['Git', 'GitHub', 'Terraform', 'Jenkins', 'CI/CD', 'Docker', 'AWS'],
  },
];

const hoverColors = {
  sky: 'hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-300',
  purple: 'hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300',
  pink: 'hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-300',
  green: 'hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-300',
};

const titleColors = {
  sky: 'text-sky-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
  green: 'text-green-400',
};

const borderColors = {
  sky: 'group-hover:border-sky-500/30',
  purple: 'group-hover:border-purple-500/30',
  pink: 'group-hover:border-pink-500/30',
  green: 'group-hover:border-green-500/30',
};

const iconBg = {
  sky: 'bg-sky-500/10',
  purple: 'bg-purple-500/10',
  pink: 'bg-pink-500/10',
  green: 'bg-green-500/10',
};

// Marquee items
const marqueeItems = [
  'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Snowflake', 'Redis',
  'LangChain', 'CrewAI', 'Autogen', 'Docker', 'AWS', 'Jenkins',
  'Terraform', 'Git', 'Pandas', 'LangGraph', 'Agentic AI', 'Java',
];

const Skills = () => (
  <section id="skills" className="py-16 sm:py-28 px-4 sm:px-6 relative z-10 overflow-hidden">
    {/* Tech Marquee */}
    <div className="mb-20 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      <div className="marquee-container">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 text-2xl md:text-3xl font-bold text-white/[0.04] whitespace-nowrap select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-16 section-title-line"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Arsenal
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard
                className={`glass p-5 sm:p-8 rounded-2xl sm:rounded-2xl group border border-white/[0.05] ${borderColors[category.color]} hover:border-white/[0.10] transition-all duration-500 h-full`}
                glowColor={category.glowColor}
                glowSize={300}
              >
                <div className={`w-12 h-12 rounded-xl ${iconBg[category.color]} flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${titleColors[category.color]}`} />
                </div>
                <h3 className={`${titleColors[category.color]} font-bold mb-5 text-lg`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-gray-400 ${hoverColors[category.color]} transition-all duration-200 cursor-default`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

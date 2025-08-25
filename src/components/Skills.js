import React from 'react';
import { Cpu, Code, Database, Cloud } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import GlowCard from './GlowCard';
import { motion } from 'framer-motion';

const portfolioData = {
  skills: {
    languages: ["Python", "JavaScript", "NodeJS", "SQL"],
    frameworks: ["Express", "Flask", "React", "Bootstrap"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    cloud: ["AWS", "Azure", "EC2", "S3", "RDS"],
    tools: ["Git", "GitLab", "Docker", "Bash", "IntelliJ IDEA"],
  }
};

const skillCategories = [
  { title: "Languages & Frameworks", skills: [...portfolioData.skills.languages, ...portfolioData.skills.frameworks], icon: Code },
  { title: "Databases", skills: portfolioData.skills.databases, icon: Database },
  { title: "Cloud & Tools", skills: [...portfolioData.skills.cloud, ...portfolioData.skills.tools], icon: Cloud },
];

const Skills = () => (
  <AnimatedSection id="skills">
    <div className="container mx-auto">
      <SectionTitle icon={Cpu}>Technical Skills</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div key={index} className="h-full" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <GlowCard className="h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2"><category.icon className="w-5 h-5 text-cyan-400"/>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span key={i} className="text-sm bg-slate-700 text-slate-300 px-3 py-1.5 rounded-md cursor-default" whileHover={{ scale: 1.1, backgroundColor: '#22d3ee', color: '#ffffff' }} transition={{ duration: 0.2 }}>{skill}</motion.span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Skills;

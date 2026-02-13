import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import GlowCard from './GlowCard';

const experienceData = [
  {
    role: 'Python Developer',
    company: 'Morgan Stanley',
    period: 'Oct 2025 - Present',
    color: 'sky',
    current: true,
    description:
      'Spearheading backend development for the ESGODS project within Investment Management (IM). My focus is on ensuring data integrity and velocity for critical financial decision-making.',
    bullets: [
      'Architecting high-throughput data pipelines to ingest and normalize complex ESG data for global equity markets, directly feeding Snowflake for real-time analytics.',
      'Designing low-latency FastAPI microservices to serve processed ESG metrics to downstream investment management applications with sub-100ms response times.',
      'Orchestrating end-to-end data workflows using Autosys and Jenkins, ensuring 99.9% pipeline reliability and seamless CI/CD deployments.',
    ],
    tech: ['FastAPI', 'Snowflake', 'Pandas', 'Autosys'],
  },
  {
    role: 'Senior AI/ML Backend Engineer',
    company: 'Accenture',
    period: 'Jun 2025 - Oct 2025',
    color: 'purple',
    current: false,
    description:
      'Led the R&D and deployment of autonomous agent networks. My primary responsibility was bridging the gap between theoretical AI models and production-ready enterprise systems.',
    bullets: [
      'Engineered a resilient Multi-Agent System using CrewAI and Autogen, successfully orchestrating 5-10 autonomous agents to execute complex, multi-step workflows in real-time.',
      'Developed a universal ingestion API capable of parsing 25+ distinct file formats, automating the generation of comprehensive bug reports and executive presentations from raw codebases.',
      'Optimized system performance by implementing asynchronous backend logic with Python and high-performance PostgreSQL queries.',
    ],
    tech: ['CrewAI', 'Autogen', 'PostgreSQL', 'Redis'],
  },
  {
    role: 'AI/ML Backend Engineer',
    company: 'Accenture',
    period: 'Aug 2023 - Jun 2025',
    color: 'purple',
    current: false,
    description:
      'Focused on accelerating the Software Development Life Cycle (SDLC) through intelligent automation and Generative AI solutions.',
    bullets: [
      'Built a Generative AI-powered SDLC automation suite using Flask, reducing prototype generation time by 50% for business stakeholders.',
      'Implemented advanced LangChain workflows to transform 150+ raw user stories into structured technical specifications, bridging the gap between product and engineering.',
      'Engineered scalable Flask servers with integrated database management to handle concurrent user requests efficiently.',
    ],
    tech: ['Python', 'Flask', 'LangChain'],
  },
];

const colorStyles = {
  sky: {
    node: 'border-sky-500/40 shadow-[0_0_25px_rgba(14,165,233,0.25)]',
    nodeIcon: 'text-sky-400',
    dot: 'bg-sky-500 shadow-[0_0_8px_#0ea5e9]',
    tag: 'bg-sky-500/10 text-sky-300 border-sky-500/20 hover:bg-sky-500/20',
    title: 'text-sky-400',
    glow: 'hover:shadow-[0_0_40px_rgba(14,165,233,0.12)]',
    border: 'hover:border-sky-500/30',
    glowColor: 'rgba(14,165,233,0.08)',
  },
  purple: {
    node: 'border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    nodeIcon: 'text-purple-400',
    dot: 'bg-purple-500 shadow-[0_0_8px_#a855f7]',
    tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20',
    title: 'text-purple-400',
    glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]',
    border: 'hover:border-purple-500/30',
    glowColor: 'rgba(168,85,247,0.08)',
  },
};

const ExperienceCard = ({ job, index }) => {
  const styles = colorStyles[job.color];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Timeline Node */}
      <div className={`hidden sm:flex absolute -left-[52px] md:-left-[76px] top-6 w-14 h-14 rounded-full items-center justify-center bg-black border-2 ${styles.node} z-10 transition-all duration-500`}>
        {job.current ? (
          <div className="relative">
            <Briefcase className={`w-6 h-6 ${styles.nodeIcon}`} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        ) : (
          <ChevronRight className={`w-6 h-6 ${styles.nodeIcon}`} />
        )}
      </div>

      {/* Scroll-driven line segment */}
      {index < experienceData.length - 1 && (
        <motion.div
          className="hidden sm:block absolute -left-[46px] md:-left-[70px] top-20 w-0.5 bg-gradient-to-b from-white/20 to-transparent origin-top"
          style={{ height: lineHeight, maxHeight: '100%' }}
        />
      )}

      {/* Card */}
      <GlowCard
        className={`glass p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/[0.05] ${styles.border} ${styles.glow} transition-all duration-500`}
        glowColor={styles.glowColor}
        glowSize={500}
      >
        {/* Current badge */}
        {job.current && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            CURRENT POSITION
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">{job.role}</h3>
            <div className={`${styles.title} font-medium text-base sm:text-lg mt-1`}>{job.company}</div>
          </div>
          <div className="text-sm text-gray-400 mt-2 md:mt-0 font-mono bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            {job.period}
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{job.description}</p>

        <ul className="space-y-3 sm:space-y-4 text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
          {job.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <span className={`mt-2 mr-3 w-1.5 h-1.5 ${styles.dot} rounded-full flex-shrink-0`} />
              <span className="leading-relaxed">{bullet}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2.5">
          {job.tech.map((t, i) => (
            <span key={i} className={`px-4 py-1.5 rounded-full ${styles.tag} text-xs font-medium border transition-colors duration-200`}>
              {t}
            </span>
          ))}
        </div>
      </GlowCard>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="py-16 sm:py-32 px-4 sm:px-6 relative z-10">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-16 section-title-line"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Journey
      </motion.h2>

      <div className="relative pl-4 sm:pl-8 md:pl-16 space-y-8 sm:space-y-14">
        {/* Static timeline track */}
        <div className="timeline-line hidden sm:block rounded-full" />

        {experienceData.map((job, index) => (
          <ExperienceCard key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

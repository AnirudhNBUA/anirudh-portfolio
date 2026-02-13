import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Python Developer',
    company: 'Morgan Stanley',
    period: 'Oct 2025 - Present',
    color: 'sky',
    icon: (
      <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
    ),
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
    border: 'border-sky-500/30',
    hoverBorder: 'group-hover:border-sky-500',
    shadow: 'shadow-[0_0_20px_rgba(14,165,233,0.2)]',
    dot: 'bg-sky-500 shadow-[0_0_8px_#0ea5e9]',
    tag: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    title: 'text-sky-400',
  },
  purple: {
    border: 'border-purple-500/30',
    hoverBorder: 'group-hover:border-purple-500',
    shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]',
    dot: 'bg-purple-500 shadow-[0_0_8px_#a855f7]',
    tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    title: 'text-purple-400',
  },
};

const Experience = () => (
  <section id="experience" className="py-32 px-6 relative z-10">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 section-title-line">
        Professional Journey
      </h2>

      <div className="relative pl-8 md:pl-16 space-y-12">
        {/* Timeline Line */}
        <div className="timeline-line rounded-full" />

        {experienceData.map((job, index) => {
          const styles = colorStyles[job.color];
          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline Node */}
              <div
                className={`absolute -left-[50px] md:-left-[74px] top-0 w-14 h-14 glass rounded-full flex items-center justify-center ${styles.border} ${styles.hoverBorder} transition-colors bg-black z-10 ${styles.shadow}`}
              >
                {job.icon}
              </div>

              {/* Card */}
              <div className="glass glass-hover p-8 md:p-10 rounded-3xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                    <div className={`${styles.title} font-medium text-lg`}>{job.company}</div>
                  </div>
                  <div className="text-sm text-gray-400 mt-2 md:mt-0 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {job.period}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                <ul className="space-y-4 text-gray-400 mb-8 text-base">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mt-1.5 mr-3 w-1.5 h-1.5 ${styles.dot} rounded-full flex-shrink-0`} />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {job.tech.map((t, i) => (
                    <span key={i} className={`px-4 py-1.5 rounded-full ${styles.tag} text-xs font-medium border`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;

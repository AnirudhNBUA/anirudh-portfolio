import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import GlowCard from './GlowCard';

const certifications = [
  {
    name: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    color: 'yellow',
    gradient: 'from-yellow-500/20 to-yellow-600/5',
    dot: 'bg-yellow-400 shadow-[0_0_10px_#facc15]',
    border: 'hover:border-yellow-500/30',
    glowColor: 'rgba(250,204,21,0.08)',
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    color: 'blue',
    gradient: 'from-blue-500/20 to-blue-600/5',
    dot: 'bg-blue-400 shadow-[0_0_10px_#60a5fa]',
    border: 'hover:border-blue-500/30',
    glowColor: 'rgba(96,165,250,0.08)',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    color: 'orange',
    gradient: 'from-orange-500/20 to-orange-600/5',
    dot: 'bg-orange-400 shadow-[0_0_10px_#fb923c]',
    border: 'hover:border-orange-500/30',
    glowColor: 'rgba(251,146,60,0.08)',
  },
];

const EducationAndMore = () => (
  <section className="py-28 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-10 section-title-line">Education</h2>

          <GlowCard
            className="glass p-10 rounded-3xl border border-white/[0.05] hover:border-sky-500/20 transition-all duration-500 group mt-6"
            glowColor="rgba(56,189,248,0.08)"
            glowSize={450}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/15 transition-colors">
                <GraduationCap className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white leading-tight">Bachelor of Information Technology</h3>
                <p className="text-sky-400 mt-2 text-lg font-medium">Vellore Institute of Technology</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-sm text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    CGPA: 8.58
                  </span>
                  <span className="text-sm text-gray-500">2019 – 2023</span>
                </div>
              </div>
            </div>

            {/* Decorative gradient line */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-sky-500/30 via-purple-500/20 to-transparent" />

            <div className="mt-6 flex flex-wrap gap-2">
              {['Data Structures', 'Algorithms', 'DBMS', 'OS', 'Computer Networks'].map((s, i) => (
                <span key={i} className="px-3 py-1 text-xs text-gray-400 bg-white/[0.03] border border-white/10 rounded-lg">
                  {s}
                </span>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-10 section-title-line">Certifications</h2>

          <div className="space-y-4 mt-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <GlowCard
                  className={`glass p-6 rounded-2xl flex items-center gap-5 border border-white/[0.05] ${cert.border} transition-all duration-300 group cursor-default`}
                  glowColor={cert.glowColor}
                  glowSize={300}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Award className={`w-5 h-5 text-${cert.color}-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-white font-semibold block truncate">{cert.name}</span>
                    <span className="text-gray-500 text-sm">{cert.issuer}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0" />
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationAndMore;

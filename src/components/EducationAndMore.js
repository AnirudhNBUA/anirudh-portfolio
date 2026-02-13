import React from 'react';
import { motion } from 'framer-motion';

const EducationAndMore = () => (
  <section className="py-24 px-6 bg-black/30 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-10">Education</h2>
          <div className="glass p-10 rounded-3xl">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-white">Bachelor of Information Technology</h3>
            <p className="text-sky-400 mt-2 text-lg">Vellore Institute of Technology</p>
            <p className="text-gray-400 mt-4 text-sm font-mono">CGPA: 8.58</p>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-10">Certifications</h2>
          <div className="space-y-4">
            {[
              { name: 'Google Cloud Associate Cloud Engineer', color: 'bg-yellow-400 shadow-[0_0_10px_#facc15]' },
              { name: 'Microsoft Certified: Azure AI Fundamentals', color: 'bg-blue-400 shadow-[0_0_10px_#60a5fa]' },
              { name: 'AWS Cloud Practitioner', color: 'bg-orange-400 shadow-[0_0_10px_#fb923c]' },
            ].map((cert, i) => (
              <div key={i} className="glass p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors">
                <div className={`w-2 h-2 rounded-full ${cert.color}`} />
                <span className="text-gray-300 font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationAndMore;

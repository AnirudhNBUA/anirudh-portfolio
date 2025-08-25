import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlowCard from './GlowCard';
import { motion } from 'framer-motion';

const portfolioData = {
  education: {
    degree: "Bachelor of Information Technology",
    institution: "Vellore Institute of Technology",
    period: "08/2019 – 05/2023",
    cgpa: "8.58",
  },
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure AI Fundamentals",
    "Google Cloud Certified: Digital Cloud Leader",
    "Google Cloud Certified: Associate Cloud Engineer",
  ],
  achievements: [
    {
      title: "Best Employee Award",
      description: "Recognized as the best employee on my team for significant product contributions.",
    },
    {
      title: "Server Load Reduction",
      description: "Reduced server load by 15% by engineering and implementing a Redis caching layer.",
    },
    {
      title: "Bug Reduction Success",
      description: "Achieved a 30% reduction in bugs post-code reviews by applying SOLID principles.",
    },
  ],
};

const EducationAndMore = () => (
    <AnimatedSection id="education-etc">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
                    <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center flex items-center justify-center gap-2"><GraduationCap className="w-7 h-7 text-cyan-400"/> Education</h3>
                    <GlowCard className="text-center">
                        <p className="text-lg font-semibold text-slate-200">{portfolioData.education.degree}</p>
                        <p className="text-cyan-400">{portfolioData.education.institution}</p>
                        <p className="text-slate-400 text-sm mt-1">{portfolioData.education.period}</p>
                        <p className="text-slate-400 text-sm">CGPA: {portfolioData.education.cgpa}</p>
                    </GlowCard>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center flex items-center justify-center gap-2"><Award className="w-7 h-7 text-cyan-400"/> Achievements</h3>
                    <div className="space-y-4">
                        {portfolioData.achievements.map((ach, i) => (
                            <GlowCard key={i}>
                                <p className="font-semibold text-slate-200 flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400"/>{ach.title}</p>
                                <p className="text-slate-400 text-sm">{ach.description}</p>
                            </GlowCard>
                        ))}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center flex items-center justify-center gap-2"><Star className="w-7 h-7 text-cyan-400"/> Certifications</h3>
                     <GlowCard>
                        <ul className="space-y-3">
                            {portfolioData.certifications.map((cert, i) => (
                                <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                                    <Star className="w-4 h-4 text-cyan-400 flex-shrink-0"/> {cert}
                                </li>
                            ))}
                        </ul>
                    </GlowCard>
                </motion.div>
            </div>
        </div>
    </AnimatedSection>
);

export default EducationAndMore;

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, DollarSign } from 'lucide-react';

const stats = [
  {
    value: '15%',
    label: 'Efficiency Gain',
    description: 'Reduction in server load achieved via strategic Redis caching layers implementation.',
    icon: Zap,
    color: 'sky',
  },
  {
    value: '30%',
    label: 'Quality Assurance',
    description: 'Decrease in post-deployment bugs through strict adherence to SOLID design principles.',
    icon: CheckCircle,
    color: 'purple',
  },
  {
    value: '25%',
    label: 'Business Growth',
    description: 'Revenue uplift driven by the successful launch of autonomous CrewAI multi-agent features.',
    icon: DollarSign,
    color: 'pink',
  },
];

const colorMap = {
  sky: { text: 'text-sky-400', iconText: 'text-sky-500' },
  purple: { text: 'text-purple-400', iconText: 'text-purple-500' },
  pink: { text: 'text-pink-400', iconText: 'text-pink-500' },
};

const Stats = () => (
  <section className="py-16 px-6 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => {
        const colors = colorMap[stat.color];
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            className="glass p-10 rounded-3xl group relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon className={`w-24 h-24 ${colors.iconText}`} />
            </div>
            <div className={`text-5xl font-bold ${colors.text} mb-3 group-hover:scale-105 transition-transform origin-left`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">
              {stat.label}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Stats;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, CheckCircle, TrendingUp } from 'lucide-react';
import GlowCard from './GlowCard';

// --- Animated Counter ---
const AnimatedCounter = ({ target, suffix = '%', className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

const stats = [
  {
    value: 15,
    label: 'Efficiency Gain',
    description: 'Reduction in server load achieved via strategic Redis caching layers implementation.',
    icon: Zap,
    color: 'sky',
    glowColor: 'rgba(56,189,248,0.10)',
  },
  {
    value: 30,
    label: 'Quality Assurance',
    description: 'Decrease in post-deployment bugs through strict adherence to SOLID design principles.',
    icon: CheckCircle,
    color: 'purple',
    glowColor: 'rgba(168,85,247,0.10)',
  },
  {
    value: 25,
    label: 'Business Growth',
    description: 'Revenue uplift driven by the successful launch of autonomous CrewAI multi-agent features.',
    icon: TrendingUp,
    color: 'pink',
    glowColor: 'rgba(236,72,153,0.10)',
  },
];

const colorMap = {
  sky: { text: 'text-sky-400', iconText: 'text-sky-500/30' },
  purple: { text: 'text-purple-400', iconText: 'text-purple-500/30' },
  pink: { text: 'text-pink-400', iconText: 'text-pink-500/30' },
};

const Stats = () => (
  <section className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
      {stats.map((stat, index) => {
        const colors = colorMap[stat.color];
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <GlowCard
              className="glass p-6 sm:p-10 rounded-2xl sm:rounded-3xl group border border-white/[0.05] hover:border-white/[0.10] transition-all duration-500"
              glowColor={stat.glowColor}
              glowSize={400}
            >
              <div className="absolute top-4 right-4 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500">
                <Icon className={`w-20 h-20 ${colors.iconText}`} strokeWidth={1} />
              </div>
              <AnimatedCounter
                target={stat.value}
                className={`text-4xl sm:text-6xl font-extrabold ${colors.text} mb-3 block`}
              />
              <div className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3">
                {stat.label}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {stat.description}
              </p>
            </GlowCard>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Stats;

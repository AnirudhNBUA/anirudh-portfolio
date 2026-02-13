import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, CheckCircle, TrendingUp } from 'lucide-react';

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
      // Ease out cubic
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
    gradient: 'from-sky-500/20 to-sky-500/0',
  },
  {
    value: 30,
    label: 'Quality Assurance',
    description: 'Decrease in post-deployment bugs through strict adherence to SOLID design principles.',
    icon: CheckCircle,
    color: 'purple',
    gradient: 'from-purple-500/20 to-purple-500/0',
  },
  {
    value: 25,
    label: 'Business Growth',
    description: 'Revenue uplift driven by the successful launch of autonomous CrewAI multi-agent features.',
    icon: TrendingUp,
    color: 'pink',
    gradient: 'from-pink-500/20 to-pink-500/0',
  },
];

const colorMap = {
  sky: { text: 'text-sky-400', iconText: 'text-sky-500', border: 'border-sky-500/20', glow: 'group-hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]' },
  purple: { text: 'text-purple-400', iconText: 'text-purple-500', border: 'border-purple-500/20', glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]' },
  pink: { text: 'text-pink-400', iconText: 'text-pink-500', border: 'border-pink-500/20', glow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]' },
};

const Stats = () => (
  <section className="py-20 px-6 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => {
        const colors = colorMap[stat.color];
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            className={`glass p-10 rounded-3xl group relative overflow-hidden border ${colors.border} ${colors.glow} transition-shadow duration-500`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

            <div className="relative z-10">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                <Icon className={`w-20 h-20 ${colors.iconText}`} strokeWidth={1} />
              </div>
              <AnimatedCounter
                target={stat.value}
                className={`text-6xl font-extrabold ${colors.text} mb-3 block`}
              />
              <div className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3">
                {stat.label}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Stats;

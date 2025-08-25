import React from 'react';
import { Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import GlowCard from './GlowCard';

const portfolioData = {
  summary: "I am a Backend Developer with 2 years of experience in building scalable applications using NodeJS and Python. I thrive on creating efficient, robust, and scalable solutions, leveraging my expertise in multi-agent systems, generative AI, and cloud technologies to drive innovation and deliver impactful results."
};

const About = () => (
    <AnimatedSection id="about">
        <div className="container mx-auto text-center max-w-3xl">
            <SectionTitle icon={Cpu}>About Me</SectionTitle>
            <GlowCard className="text-left">
                <p className="text-slate-300 text-lg leading-relaxed">{portfolioData.summary}</p>
            </GlowCard>
        </div>
    </AnimatedSection>
);

export default About;

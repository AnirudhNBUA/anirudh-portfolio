import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isVisible && (
                <motion.button onClick={scrollToTop} className="bg-cyan-500/50 text-white rounded-full p-3 hover:bg-cyan-500 transition-colors" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                    <ArrowUp />
                </motion.button>
            )}
        </div>
    );
};

export default BackToTopButton;

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ children, id }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);
    return (
        <motion.section
            id={id} ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
            initial="hidden" animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;

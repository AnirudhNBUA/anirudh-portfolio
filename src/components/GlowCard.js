import React, { useRef, useState } from 'react';

const GlowCard = ({ children, className }) => {
    const cardRef = useRef(null);
    const [glowStyle, setGlowStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setGlowStyle({
            '--glow-x': `${x}px`,
            '--glow-y': `${y}px`,
            '--glow-opacity': '1',
        });
    };

    const handleMouseLeave = () => {
        setGlowStyle({ '--glow-opacity': '0' });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={glowStyle}
            className={`relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700/50 transition-all duration-300 glow-card ${className}`}
        >
            {children}
            <div className="glow-effect" />
        </div>
    );
};

export default GlowCard;

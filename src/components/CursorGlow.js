import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[1] hidden md:block"
      style={{
        width: 600,
        height: 600,
        background:
          'radial-gradient(circle, rgba(56,189,248,0.06) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)',
        borderRadius: '50%',
        willChange: 'transform',
      }}
    />
  );
};

export default CursorGlow;

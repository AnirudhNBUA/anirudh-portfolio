import React, { useRef, useCallback, useState } from 'react';

/**
 * GlowCard — mouse-following radial glow on hover.
 * Color customizable via `glowColor` prop.  Pure CSS rendering.
 *
 * <GlowCard className="p-8 rounded-3xl" glowColor="rgba(56,189,248,0.10)">
 *   ...children
 * </GlowCard>
 */
const GlowCard = ({
  children,
  className = '',
  glowColor = 'rgba(56,189,248,0.08)',
  glowSize = 350,
  ...rest
}) => {
  const ref = useRef(null);
  const [glow, setGlow] = useState({ x: '50%', y: '50%', opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlow({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
      opacity: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      {/* Glow layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(${glowSize}px circle at ${glow.x} ${glow.y}, ${glowColor}, transparent 70%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;

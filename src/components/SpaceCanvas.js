import React from 'react';

/**
 * GradientMesh — replaces the starfield with slow-morphing,
 * barely-perceptible gradient blobs. Pure CSS, zero JS overhead.
 */
const SpaceCanvas = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
  >
    {/* Primary wash — sky blue, top-left */}
    <div
      className="absolute -top-[30%] -left-[15%] w-[60vw] h-[60vw] rounded-full opacity-[0.035]"
      style={{
        background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
        animation: 'meshDrift1 30s ease-in-out infinite alternate',
      }}
    />
    {/* Secondary wash — purple, bottom-right */}
    <div
      className="absolute -bottom-[25%] -right-[10%] w-[55vw] h-[55vw] rounded-full opacity-[0.03]"
      style={{
        background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
        animation: 'meshDrift2 35s ease-in-out infinite alternate',
      }}
    />
    {/* Tertiary accent — very faint warm tone, center */}
    <div
      className="absolute top-[40%] left-[35%] w-[40vw] h-[40vw] rounded-full opacity-[0.018]"
      style={{
        background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)',
        animation: 'meshDrift3 40s ease-in-out infinite alternate',
      }}
    />
    {/* Noise overlay for texture */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    />
  </div>
);

export default SpaceCanvas;

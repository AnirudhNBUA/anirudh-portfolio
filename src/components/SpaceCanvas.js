import React from 'react';

/**
 * SpaceCanvas — elegant dark background with:
 *  1. Subtle dot grid pattern for depth
 *  2. Soft gradient aurora washes (more visible than before)
 *  3. Vignette overlay for cinematic focus
 *  4. Noise texture for premium feel
 */
const SpaceCanvas = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    style={{ background: '#050505' }}
  >
    {/* Dot grid pattern */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.2,
      }}
    />

    {/* Primary aurora — sky blue, top-left */}
    <div
      className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full"
      style={{
        background:
          'radial-gradient(ellipse at center, #38bdf8 0%, rgba(56,189,248,0.5) 30%, transparent 70%)',
        animation: 'meshDrift1 28s ease-in-out infinite alternate',
        filter: 'blur(80px)',
        opacity: 0.30,
      }}
    />

    {/* Secondary aurora — purple, bottom-right */}
    <div
      className="absolute -bottom-[15%] -right-[5%] w-[65vw] h-[65vw] rounded-full"
      style={{
        background:
          'radial-gradient(ellipse at center, #a855f7 0%, rgba(168,85,247,0.5) 30%, transparent 70%)',
        animation: 'meshDrift2 32s ease-in-out infinite alternate',
        filter: 'blur(80px)',
        opacity: 0.25,
      }}
    />

    {/* Tertiary accent — warm pink, mid-screen */}
    <div
      className="absolute top-[35%] left-[40%] w-[50vw] h-[50vw] rounded-full"
      style={{
        background:
          'radial-gradient(ellipse at center, #f472b6 0%, rgba(244,114,182,0.4) 35%, transparent 70%)',
        animation: 'meshDrift3 36s ease-in-out infinite alternate',
        filter: 'blur(100px)',
        opacity: 0.18,
      }}
    />

    {/* Fourth accent — emerald, offset */}
    <div
      className="absolute top-[60%] -left-[5%] w-[40vw] h-[30vw] rounded-full"
      style={{
        background:
          'radial-gradient(ellipse at center, #34d399 0%, transparent 70%)',
        animation: 'meshDrift2 40s ease-in-out infinite alternate-reverse',
        filter: 'blur(70px)',
        opacity: 0.15,
      }}
    />

    {/* Noise texture overlay */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
        opacity: 0.04,
      }}
    />

    {/* Vignette overlay — soft edge darkening */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(5,5,5,0.5) 100%)',
      }}
    />
  </div>
);

export default SpaceCanvas;

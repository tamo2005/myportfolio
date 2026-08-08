import React, { useMemo } from 'react';

/**
 * Layout.jsx
 * Global shell with dark background, ambient orbs, stable particle field, and dot-grid.
 * All custom CSS (glow, backdrop-blur-one-ui, float animation) lives in index.css.
 */

/** Stable particle positions — computed once, never re-randomise on re-render */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  width:  `${2 + (i * 1.3) % 4}px`,
  height: `${2 + (i * 1.3) % 4}px`,
  left:   `${(i * 17 + 5) % 97}%`,
  top:    `${(i * 23 + 7) % 97}%`,
  duration: `${3 + (i % 5)}s`,
  delay:    `${(i * 0.7) % 5}s`,
}));

const Layout = ({ children }) => {
  return (
    <div className="relative bg-[#0A0A0A] text-white min-h-screen overflow-hidden">
      {/* ── Static background layer ─────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A]" />

        {/* Ambient orbs */}
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-gradient-to-br from-[#FF6B47]/18 to-[#FF4500]/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-gradient-to-br from-[#FF8C42]/12 to-[#FF6347]/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-[20%] left-[8%] w-48 h-48 bg-gradient-to-br from-[#FFB347]/20 to-[#FF7F50]/10 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Faint dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, #FF6B47 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Stable floating particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-br from-[#FF6B47]/40 to-[#FF4500]/20"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
              animation: `float ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
              filter: 'drop-shadow(0 0 5px #FF6B47)',
            }}
          />
        ))}
      </div>

      {/* ── Page content ────────────────────────────────────────── */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
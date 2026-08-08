import React from 'react';

/**
 * MarqueeTicker.jsx
 * Two rows scrolling in opposite directions — refined colors using CSS vars.
 */

const ROW_1 = [
  '⭐ NPTEL Elite × 5',
  '🏛️ IIT Ropar Research Intern',
  '🤖 AI Website Generator — 10-Module Pipeline',
  '📐 Linear Algebra @ IIT Ropar',
  '💬 Yaksha FAQ Engine',
  '🚀 FastAPI + Next.js + PostgreSQL',
  '🎓 Prof. Sudarshan Iyengar, IIT Ropar',
];

const ROW_2 = [
  '🐍 Python',
  '⚛️ React',
  '▲ Next.js',
  '🟢 Node.js',
  '🚂 Express.js',
  '🍃 MongoDB',
  '🐘 PostgreSQL',
  '🔴 Redis',
  '🐳 Docker',
  '🐙 GitHub',
  '🤖 Scikit-learn',
  '🔷 TypeScript',
];

const MarqueeTicker = () => (
  <div
    className="relative py-6 overflow-hidden select-none"
    style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
  >
    {/* Fade edges */}
    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to right, var(--bg-1), transparent)' }} />
    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to left, var(--bg-1), transparent)' }} />

    {/* Row 1 — scroll left */}
    <div className="flex mb-2.5 overflow-hidden">
      <div className="flex gap-6 animate-marquee-left whitespace-nowrap">
        {[...ROW_1, ...ROW_1].map((item, i) => (
          <span
            key={i}
            className="tag flex-shrink-0 text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Row 2 — scroll right */}
    <div className="flex overflow-hidden">
      <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
        {[...ROW_2, ...ROW_2].map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 text-xs font-medium px-3 py-1 rounded-full"
            style={{ color: 'var(--txt-3)', border: '1px solid var(--border)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default MarqueeTicker;

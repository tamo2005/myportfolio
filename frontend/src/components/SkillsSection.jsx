import React, { useState, useEffect, useRef } from 'react';

/**
 * SkillsSection.jsx
 * Redesigned — no percentage bars.
 * Curated skill chips grouped by domain with glowing hover effects.
 * Category filter tabs with animated underline.
 */

const SKILL_GROUPS = [
  {
    id: 'languages',
    label: 'Languages',
    color: '#FF6B47',
    skills: [
      { name: 'Python',      icon: '🐍' },
      { name: 'JavaScript',  icon: '⚡' },
      { name: 'TypeScript',  icon: '🔷' },
      { name: 'Java',        icon: '☕' },
      { name: 'C',           icon: '🔩' },
      { name: 'SQL',         icon: '🗃️' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#FF8C42',
    skills: [
      { name: 'React',       icon: '⚛️' },
      { name: 'Next.js',     icon: '▲' },
      { name: 'Tailwind CSS',icon: '🎨' },
      { name: 'HTML / CSS',  icon: '🌐' },
      { name: 'Vite',        icon: '⚡' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#FFB347',
    skills: [
      { name: 'Node.js',     icon: '🟢' },
      { name: 'Express.js',  icon: '🚂' },
      { name: 'FastAPI',     icon: '🚀' },
      { name: 'MongoDB',     icon: '🍃' },
      { name: 'PostgreSQL',  icon: '🐘' },
      { name: 'Redis',       icon: '🔴' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    color: '#FF4500',
    skills: [
      { name: 'Scikit-learn',icon: '🤖' },
      { name: 'NumPy',       icon: '🔢' },
      { name: 'Pandas',      icon: '🐼' },
      { name: 'Linear Algebra', icon: '📐' },
      { name: 'NLP',         icon: '💬' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#FF6347',
    skills: [
      { name: 'Git / GitHub',icon: '🐙' },
      { name: 'Docker',      icon: '🐳' },
      { name: 'Linux',       icon: '🐧' },
      { name: 'Postman',     icon: '📮' },
      { name: 'Figma',       icon: '🎭' },
    ],
  },
];

const STATS = [
  { value: '6+', label: 'Projects Built' },
  { value: '5',  label: 'NPTEL Elite Certs' },
  { value: '2',  label: 'Internships' },
  { value: '3+', label: 'Years of Coding' },
];

const SkillsSection = () => {
  const [activeGroup, setActiveGroup] = useState('all');
  const [animated, setAnimated] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const displayedGroups =
    activeGroup === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === activeGroup);

  const allSkillCount = SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#FF6B47]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FF4500]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* ── Section heading ─────────────────────────────── */}
        <div className={`mb-16 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#FF6B47] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Tech Stack
            <span className="text-[#FF6B47]">.</span>
          </h2>
        </div>

        {/* ── Category tabs ────────────────────────────────── */}
        <div className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button
            onClick={() => setActiveGroup('all')}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeGroup === 'all'
                ? 'text-white'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {activeGroup === 'all' && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500]" />
            )}
            <span className="relative">All ({allSkillCount})</span>
          </button>

          {SKILL_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeGroup === g.id
                  ? 'text-white border-[#FF6B47]/0'
                  : 'text-gray-500 border-white/10 hover:text-gray-300 hover:border-white/20'
              }`}
            >
              {activeGroup === g.id && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500]" />
              )}
              <span className="relative">{g.label}</span>
            </button>
          ))}
        </div>

        {/* ── Skill groups ─────────────────────────────────── */}
        <div className="space-y-12">
          {displayedGroups.map((group, gi) => (
            <div
              key={group.id}
              className={`transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${gi * 80 + 200}ms` }}
            >
              {/* Group label */}
              {activeGroup === 'all' && (
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">{group.label}</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
              )}

              {/* Skill chips */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <button
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(`${group.id}-${si}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-all duration-300 cursor-default ${
                      hoveredSkill === `${group.id}-${si}`
                        ? 'border-[#FF6B47]/60 bg-[#FF6B47]/10 scale-105'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                    style={{
                      transitionDelay: `${si * 30}ms`,
                      boxShadow: hoveredSkill === `${group.id}-${si}`
                        ? `0 0 20px ${group.color}33, inset 0 0 20px ${group.color}08`
                        : 'none',
                    }}
                  >
                    {/* Icon */}
                    <span className="text-lg leading-none">{skill.icon}</span>

                    {/* Name */}
                    <span className={`text-sm font-medium transition-colors duration-200 ${
                      hoveredSkill === `${group.id}-${si}` ? 'text-white' : 'text-gray-300'
                    }`}>
                      {skill.name}
                    </span>

                    {/* Glow dot */}
                    <span
                      className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full transition-all duration-300 ${
                        hoveredSkill === `${group.id}-${si}` ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{ background: group.color, boxShadow: `0 0 6px ${group.color}` }}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats row ─────────────────────────────────────── */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5 transition-all duration-700 delay-400 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {STATS.map((s) => (
            <div key={s.label} className="group text-center">
              <div className="text-3xl font-black text-[#FF6B47] mb-1 group-hover:scale-110 transition-transform duration-200">
                {s.value}
              </div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
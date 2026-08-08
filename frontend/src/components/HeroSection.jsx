import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Calendar, Github, Linkedin, Mail } from 'lucide-react';
import { openCalendar, RESUME_PATH } from '../utils/constants.js';

const TYPEWRITER_PHRASES = [
  'AI / ML Engineer',
  'Full-Stack Developer',
  'MERN Stack Developer',
  'IIT Ropar Research Intern',
];

/* Deterministic particles — no re-randomise on re-render */
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 90 + 5}%`,
  top:  `${(i * 53 + 7)  % 80 + 10}%`,
  delay: `${(i * 0.4).toFixed(1)}s`,
  duration: `${3 + (i % 3)}s`,
}));

const socialLinks = [
  { icon: Github,   href: 'https://github.com/tamo2005',                        label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:tamagnoroy.roy2005@gmail.com',                label: 'Email' },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded]       = useState(false);
  const [typeText, setTypeText]       = useState('');
  const [typeIndex, setTypeIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);

  /* Load animation */
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter */
  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[typeIndex];
    const speed  = isDeleting ? 38 : 82;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypeText(phrase.slice(0, typeText.length + 1));
        if (typeText.length + 1 === phrase.length)
          setTimeout(() => setIsDeleting(true), 1800);
      } else {
        setTypeText(phrase.slice(0, typeText.length - 1));
        if (typeText.length === 0) {
          setIsDeleting(false);
          setTypeIndex((p) => (p + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [typeText, isDeleting, typeIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const a = Object.assign(document.createElement('a'), {
      href: RESUME_PATH, download: 'Tamagno_Roy_Resume.pdf',
    });
    a.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >

      {/* ── Background ambient ───────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft orbs — very low opacity */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(232,103,58,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(232,103,58,0.04) 0%, transparent 70%)' }} />

        {/* Fine particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              left: p.left, top: p.top,
              background: 'var(--accent)',
              animation: `float ${p.duration} ${p.delay} ease-in-out infinite`,
            }}
          />
        ))}

        {/* Vertical rule accents */}
        <div className="absolute left-8 top-1/4 w-px h-32"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(232,103,58,0.25), transparent)' }} />
        <div className="absolute right-12 top-1/3 w-px h-24"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(232,103,58,0.15), transparent)' }} />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="section-container w-full text-center relative z-10 py-32">
        <div className="max-w-3xl mx-auto">

          {/* Profile picture */}
          <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-36 h-36 mx-auto relative">
              {/* Ring */}
              <div className="absolute inset-0 rounded-full p-[2px]"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}>
                <div className="w-full h-full rounded-full" style={{ background: 'var(--bg)' }} />
              </div>
              <img
                src="/assets/prf-pic.png"
                alt="Tamagno Roy"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover rounded-full"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full items-center justify-center text-3xl font-bold hidden"
                style={{ background: 'var(--bg-2)', color: 'var(--accent)' }}>
                TR
              </div>
            </div>
          </div>

          {/* Status pill */}
          <div className={`mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-1)' }}>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium" style={{ color: 'var(--txt-2)' }}>Available for opportunities</span>
            </div>
          </div>

          {/* Name */}
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-3 leading-[0.95] tracking-tight"
              style={{ color: 'var(--txt)' }}>
              Tamagno{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, #F97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Roy
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-3 font-light tracking-wide" style={{ color: 'var(--txt-2)' }}>
              Computer Science Engineer
            </p>

            {/* Typewriter */}
            <div className="flex items-center justify-center gap-1 h-7 mb-10">
              <span className="mono text-sm sm:text-base font-medium" style={{ color: 'var(--accent)' }}>
                {typeText}
              </span>
              <span className="animate-blink text-base font-medium" style={{ color: 'var(--accent)' }}>|</span>
            </div>
          </div>

          {/* Bio */}
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--txt-3)' }}>
              I build intelligent software systems — from multi-stage AI generation pipelines
              to production full-stack web applications. Currently researching at{' '}
              <span style={{ color: 'var(--txt-2)' }}>IIT Ropar</span>.
            </p>
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-3 mb-10 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary min-w-[180px]"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={downloadCV}
              className="btn-outline min-w-[180px]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          {/* Social icons */}
          <div className={`flex justify-center gap-3 mb-8 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: '1px solid var(--border)', background: 'var(--bg-1)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-a)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <Icon className="w-4 h-4 transition-colors duration-200"
                  style={{ color: 'var(--txt-3)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--txt-3)'}
                />
              </a>
            ))}
          </div>

          {/* Schedule link */}
          <div className={`transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={openCalendar}
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: 'var(--txt-3)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--txt-3)'}
            >
              <Calendar className="w-3.5 h-3.5" />
              Schedule a meeting
            </button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-5 h-8 rounded-full flex justify-center"
          style={{ border: '1px solid var(--border)' }}>
          <div className="w-0.5 h-2.5 rounded-full mt-1.5" style={{ background: 'var(--accent)' }} />
        </div>
      </div>

      {/* Open to work badge — bottom right */}
      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl"
        style={{ border: '1px solid var(--border)', background: 'var(--bg-1)' }}>
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-xs" style={{ color: 'var(--txt-3)' }}>Open to work</span>
      </div>

    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

/**
 * Footer.jsx — Clean, minimal, premium.
 * No Three.js (overkill for a footer), no <style jsx>.
 */

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub',     href: '#github' },
  { label: 'Journal',    href: '#journal' },
  { label: 'Contact',    href: '#contact' },
];

const SOCIAL = [
  { icon: Github,   href: 'https://github.com/tamo2005',                        label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:tamagnoroy.roy2005@gmail.com',                label: 'Email' },
];

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => (
  <footer style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)' }}>
    <div className="section-container py-14">

      {/* Top row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">

        {/* Brand */}
        <div className="max-w-xs">
          <div className="text-xl font-black mb-2" style={{ color: 'var(--txt)' }}>
            Tamagno<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--txt-3)' }}>
            Computer Science Engineer building AI systems and full-stack products.
            Currently researching at IIT Ropar.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--txt-3)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--txt)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--txt-3)'}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Social + back-to-top */}
        <div className="flex items-center gap-2">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-a)';
                e.currentTarget.querySelector('svg').style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.querySelector('svg').style.color = 'var(--txt-3)';
              }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: 'var(--txt-3)' }} />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px mb-8" style={{ background: 'var(--border)' }} />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-center sm:text-left" style={{ color: 'var(--txt-3)' }}>
          © 2026 Tamagno Roy. Built with React, Vite &amp; Tailwind CSS.
        </p>

        <button
          onClick={scrollTop}
          className="flex items-center gap-2 text-xs transition-colors duration-200"
          style={{ color: 'var(--txt-3)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--txt-3)'}
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>

    {/* Back-to-top FAB */}
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl z-20 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: 'var(--accent)',
        boxShadow: '0 4px 16px rgba(232,103,58,0.25)',
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 text-white" />
    </button>
  </footer>
);

export default Footer;
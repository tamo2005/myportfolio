import React, { useState, useEffect, useRef } from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { posts, CATEGORY_META } from '../data/blog.js';

/**
 * BlogSection.jsx
 * Learning journal — shows all study/project notes.
 * Category filter, card grid, hover expand.
 */

const BlogSection = () => {
  const [animated, setAnimated] = useState(false);
  const [filter, setFilter]     = useState('all');
  const sectionRef              = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = ['all', ...Object.keys(CATEGORY_META)];
  const visible = filter === 'all' ? posts : posts.filter((p) => p.category === filter);

  return (
    <section
      id="journal"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: 'var(--bg-1)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'var(--border)' }} />

      <div className="section-container">

        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Learning Journal</p>
          <h2 className="section-heading">
            Notes & Reflections<span className="dot-accent">.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'var(--txt-2)' }}>
            Things I'm studying, building, and thinking about — documented as I go.
          </p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat];
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="tag"
                style={isActive ? {
                  background: meta ? `${meta.color}18` : 'var(--glow)',
                  borderColor: meta ? `${meta.color}40` : 'var(--border-a)',
                  color: meta ? meta.color : 'var(--accent)',
                  fontWeight: 600,
                } : {}}
              >
                {cat === 'all' ? 'All Notes' : meta?.label}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((post, i) => {
            const meta = CATEGORY_META[post.category];
            return (
              <article
                key={post.id}
                className={`card card-accent flex flex-col gap-4 p-6 transition-all duration-500 hover:-translate-y-1 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 60 + 150}ms` }}
              >
                {/* Category + date */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${meta?.color}18`, color: meta?.color, border: `1px solid ${meta?.color}30` }}
                  >
                    {meta?.label}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--txt-3)' }}>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--txt)' }}>
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-sm leading-relaxed line-clamp-3 flex-1" style={{ color: 'var(--txt-2)' }}>
                  {post.summary}
                </p>

                {/* Tags + read time */}
                <div className="flex items-center justify-between gap-2 pt-2 mt-auto border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{ background: 'var(--bg-2)', color: 'var(--txt-3)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0" style={{ color: 'var(--txt-3)' }}>
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm mb-4" style={{ color: 'var(--txt-3)' }}>
            These are living notes — updated as I learn.
          </p>
          <a
            href="https://github.com/tamo2005"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            See my code <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

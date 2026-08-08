import React, { useState, useEffect, useRef } from 'react';
import { Github, Star, GitFork, Users, BookOpen, ExternalLink, Activity } from 'lucide-react';

/**
 * GitHubSection.jsx
 * Fetches real GitHub data from the public API.
 * Shows: profile stats, pinned repos, language breakdown.
 * No auth token required — uses public endpoints.
 */

const USERNAME = 'tamo2005';
const GITHUB_URL = `https://github.com/${USERNAME}`;

// Language colour map
const LANG_COLORS = {
  Python:     '#3776AB',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML:       '#E34F26',
  CSS:        '#1572B6',
  Java:       '#ED8B00',
  C:          '#A8B9CC',
  Jupyter:    '#DA5B0B',
  Other:      '#52525B',
};

const StatCard = ({ icon: Icon, value, label, animated }) => (
  <div className={`card card-accent p-5 text-center transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ background: 'var(--glow)', border: '1px solid var(--border-a)' }}>
      <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
    </div>
    <div className="text-2xl font-black mb-1" style={{ color: 'var(--txt)' }}>{value ?? '—'}</div>
    <div className="text-xs font-medium" style={{ color: 'var(--txt-3)' }}>{label}</div>
  </div>
);

const RepoCard = ({ repo, index, animated }) => (
  <a
    href={repo.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className={`card card-accent p-5 flex flex-col gap-3 group cursor-pointer no-underline transition-all duration-500 hover:-translate-y-1 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    style={{ transitionDelay: `${index * 60}ms` }}
  >
    <div className="flex items-start justify-between gap-2">
      <div className="flex items-center gap-2 min-w-0">
        <BookOpen className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />
        <span className="text-sm font-semibold truncate group-hover:text-white transition-colors" style={{ color: 'var(--txt)' }}>
          {repo.name}
        </span>
      </div>
      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--txt-3)' }} />
    </div>

    {repo.description && (
      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--txt-2)' }}>
        {repo.description}
      </p>
    )}

    <div className="flex items-center gap-4 mt-auto">
      {repo.language && (
        <div className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: LANG_COLORS[repo.language] || LANG_COLORS.Other }}
          />
          <span className="text-xs" style={{ color: 'var(--txt-3)' }}>{repo.language}</span>
        </div>
      )}
      {repo.stargazers_count > 0 && (
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3" style={{ color: 'var(--txt-3)' }} />
          <span className="text-xs" style={{ color: 'var(--txt-3)' }}>{repo.stargazers_count}</span>
        </div>
      )}
      {repo.forks_count > 0 && (
        <div className="flex items-center gap-1">
          <GitFork className="w-3 h-3" style={{ color: 'var(--txt-3)' }} />
          <span className="text-xs" style={{ color: 'var(--txt-3)' }}>{repo.forks_count}</span>
        </div>
      )}
    </div>
  </a>
);

const GitHubSection = () => {
  const [profile, setProfile]   = useState(null);
  const [repos, setRepos]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(false);
  const [animated, setAnimated] = useState(false);
  const sectionRef              = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('API error');
        const [user, allRepos] = await Promise.all([userRes.json(), reposRes.json()]);
        setProfile(user);
        // Top 6 by stars, excluding forks
        const top = allRepos
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);
        setRepos(top);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  const stats = [
    { icon: BookOpen, value: profile?.public_repos, label: 'Public Repos' },
    { icon: Users,    value: profile?.followers,    label: 'Followers' },
    { icon: Star,     value: repos.reduce((a, r) => a + r.stargazers_count, 0) || '—', label: 'Total Stars' },
    { icon: Activity, value: profile?.following,    label: 'Following' },
  ];

  return (
    <section
      id="github"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'var(--border)' }} />

      <div className="section-container">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Open Source</p>
          <h2 className="section-heading">
            GitHub Activity<span className="dot-accent">.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--txt-2)' }}>
            What I've been building and shipping publicly
          </p>
        </div>

        {loading && (
          <div className="flex flex-col items-center gap-4 py-16">
            <div className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: 'var(--border-a)', borderTopColor: 'transparent' }} />
            <p className="text-sm" style={{ color: 'var(--txt-3)' }}>Fetching from GitHub…</p>
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: 'var(--txt-3)' }}>
              Couldn't load GitHub data right now.{' '}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>
                View profile directly ↗
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Profile row */}
            <div className={`flex flex-col sm:flex-row items-center gap-5 mb-10 p-5 card transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {profile?.avatar_url && (
                <img
                  src={profile.avatar_url}
                  alt="GitHub avatar"
                  className="w-16 h-16 rounded-full flex-shrink-0"
                  style={{ border: '2px solid var(--border-a)' }}
                />
              )}
              <div className="flex-1 text-center sm:text-left">
                <div className="font-bold text-lg" style={{ color: 'var(--txt)' }}>{profile?.name || USERNAME}</div>
                <div className="text-sm mt-0.5" style={{ color: 'var(--txt-2)' }}>{profile?.bio || 'Engineer & Builder'}</div>
                {profile?.location && (
                  <div className="text-xs mt-1.5" style={{ color: 'var(--txt-3)' }}>📍 {profile.location}</div>
                )}
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-shrink-0"
              >
                <Github className="w-4 h-4" />
                View Profile
              </a>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((s, i) => (
                <StatCard key={s.label} {...s} animated={animated} />
              ))}
            </div>

            {/* Repos grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} animated={animated} />
              ))}
            </div>

            {/* Contribution graph embed */}
            <div className={`card p-1 overflow-hidden transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img
                src={`https://ghchart.rshah.org/E8673A/${USERNAME}`}
                alt="GitHub Contribution Chart"
                className="w-full rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                loading="lazy"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;

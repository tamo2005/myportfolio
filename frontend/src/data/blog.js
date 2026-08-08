// src/data/blog.js
// Learning journal entries — add new entries here.
// Categories: 'research', 'course', 'project', 'reflection'

export const posts = [
  {
    id: 'linear-algebra-iit',
    date: 'Aug 2026',
    title: 'Linear Algebra for Machine Learning — IIT Ropar',
    summary: 'Studying eigenvectors, matrix decompositions, and SVD under Prof. Sudarshan Iyengar. These fundamentals directly feed into understanding how ML models work at the math level.',
    category: 'research',
    tags: ['Linear Algebra', 'IIT Ropar', 'ML Math'],
    readTime: '4 min',
  },
  {
    id: 'yaksha-design',
    date: 'Aug 2026',
    title: 'Designing Yaksha: NLP Architecture for Student FAQ',
    summary: 'Building a chat engine that actually understands course-specific questions — not just keyword matching. Exploring intent classification, context windows, and MERN integration.',
    category: 'project',
    tags: ['NLP', 'MERN', 'System Design'],
    readTime: '6 min',
  },
  {
    id: 'ai-pipeline-learnings',
    date: 'Jul 2026',
    title: '10 Things I Learned Building a 10-Module AI Pipeline',
    summary: 'Building the AI Website Generator forced me to understand prompt chaining, error recovery, and async orchestration. Celery + Redis for task queues was a revelation.',
    category: 'project',
    tags: ['FastAPI', 'Redis', 'AI Engineering'],
    readTime: '8 min',
  },
  {
    id: 'iot-nptel',
    date: 'Nov 2025',
    title: 'NPTEL Elite — Introduction to IoT (IIT Kharagpur)',
    summary: 'Completed with Elite grade. Key learnings: sensor protocols, MQTT, edge computing, and how embedded systems communicate at scale. Directly applicable to smart system design.',
    category: 'course',
    tags: ['IoT', 'NPTEL Elite', 'IIT Kharagpur'],
    readTime: '3 min',
  },
  {
    id: 'daa-nptel',
    date: 'Apr 2025',
    title: 'NPTEL Elite — Design & Analysis of Algorithms (IIT Madras)',
    summary: 'Greedy algorithms, dynamic programming, graph algorithms — done rigorously. The assignment-heavy structure made me actually write proofs, not just code.',
    category: 'course',
    tags: ['Algorithms', 'NPTEL Elite', 'IIT Madras'],
    readTime: '3 min',
  },
  {
    id: 'mern-mentor',
    date: 'Jul 2026',
    title: 'Being Mentored by a Top IIT Professor in MERN',
    summary: 'What it\'s like to get structured feedback on architecture decisions from Prof. Sudarshan Iyengar — the difference between code that works and code that scales.',
    category: 'reflection',
    tags: ['MERN', 'Mentorship', 'IIT Ropar'],
    readTime: '5 min',
  },
];

export const CATEGORY_META = {
  research:   { label: 'Research',    color: '#6366F1' },
  course:     { label: 'Course',      color: '#10B981' },
  project:    { label: 'Project',     color: '#E8673A' },
  reflection: { label: 'Reflection',  color: '#F59E0B' },
};

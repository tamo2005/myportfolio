/**
 * data/projects.js
 * All portfolio project data in one place.
 * Edit this file to add, remove, or update projects.
 * Featured projects appear first in the UI.
 */

export const projects = [
  {
    id: 'ai-website-generator',
    title: 'AI Website Generator',
    description:
      'Multi-stage AI generation platform that converts natural-language prompts into complete, responsive websites using a 10-module pipeline.',
    longDescription:
      'A full-stack platform where a FastAPI backend orchestrates a 10-module AI pipeline: prompt analysis → planning → spec building → theme resolution → component generation → HTML assembly → validation → auto-repair → quality scoring. The Next.js frontend streams results via Server-Sent Events and renders a live sandboxed preview.',
    tech: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'OpenRouter'],
    role: 'Full-Stack Engineer & AI Systems Architect',
    status: 'In Development',
    featured: true,
    category: 'AI/ML',
    gradient: 'from-[#FF6B47] to-[#FF4500]',
    github: null,
    demo: null,
    features: [
      '10-module AI generation pipeline with automatic repair',
      'Real-time SSE streaming to live preview iframe',
      'JWT + HttpOnly cookie dual-token auth system',
      'Multi-provider LLM abstraction (OpenRouter, Gemini, Ollama)',
      'Quality evaluation engine with 8-dimension scoring',
    ],
    metrics: { modules: '10', providers: '5+', evaluationDimensions: '8' },
  },
  {
    id: 'yaksha',
    title: 'Yaksha — Student FAQ Engine',
    description:
      'Intelligent FAQ chat engine being built under IIT Ropar mentorship, enabling students to query course content and get context-aware answers instantly.',
    longDescription:
      'Yaksha is a full-stack AI-powered chat engine developed during the NPTEL Summer Internship 2026 under Prof. Sudarshan Iyengar at IIT Ropar. The system uses NLP and a MERN stack backend to understand student questions about course material, find relevant FAQ answers, and synthesise responses — reducing student wait time for common queries.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'NLP', 'AI/ML'],
    role: 'Full-Stack Developer & AI Engineer (IIT Ropar Intern)',
    status: 'In Development',
    featured: true,
    category: 'AI/ML',
    gradient: 'from-[#FF8C42] to-[#FF6347]',
    github: null,
    demo: null,
    features: [
      'Natural language FAQ retrieval for student queries',
      'MERN stack full-stack architecture',
      'Context-aware answer synthesis using NLP',
      'Developed under mentorship of Prof. Sudarshan Iyengar, IIT Ropar',
      'Designed for scalable student support across courses',
    ],
    metrics: { mentor: 'Prof. Sudarshan Iyengar', institute: 'IIT Ropar', internship: 'NPTEL 2026' },
  },

  {
    id: 'gradify-ai',
    title: 'Gradify.AI',
    description:
      'AI-powered marks evaluation system that automates assignment grading with intelligent feedback and analytics for educators.',
    longDescription:
      'A comprehensive AI solution that uses machine learning to automatically evaluate student assignments, providing detailed feedback and analytics to help teachers streamline their grading process and track student progress over time.',
    tech: ['React', 'Python', 'TensorFlow', 'OpenAI API', 'MongoDB'],
    role: 'Full-Stack Developer & AI Engineer',
    status: 'In Development',
    featured: true,
    category: 'AI/ML',
    gradient: 'from-[#FF8C42] to-[#FF6347]',
    github: null,
    demo: null,
    features: [
      'AI-powered assignment grading',
      'Real-time analytics dashboard',
      'Student progress tracking',
      'Automated feedback generation',
    ],
    metrics: { accuracy: '95%', speed: '10x faster', satisfaction: '98%' },
  },
  {
    id: 'heart-disease-detection',
    title: 'Heart Disease Detection',
    description:
      'Machine learning system for early detection of heart disease using clinical data and ensemble predictive modeling.',
    longDescription:
      'A healthcare application that uses machine learning algorithms to analyze patient clinical data and predict the likelihood of heart disease, enabling early intervention and supporting medical decision-making.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Flask'],
    role: 'Data Scientist & Backend Developer',
    status: 'Completed',
    featured: false,
    category: 'AI/ML',
    gradient: 'from-[#FF6B47] to-[#FF4500]',
    github: 'https://github.com/tamo2005/heart-diesease-detection',
    demo: null,
    features: [
      'Clinical data analysis pipeline',
      'Ensemble predictive modeling',
      'Risk assessment scoring',
      'Medical data visualization',
    ],
    metrics: { accuracy: '92%', sensitivity: '88%', specificity: '94%' },
  },
  {
    id: 'deadline-death-predictor',
    title: 'Deadline Death Predictor',
    description:
      'Machine learning application that predicts mortality risk using TensorFlow.js and comprehensive health data analysis.',
    longDescription:
      'An innovative ML project that analyzes various health indicators and demographic data to predict mortality risk, built entirely client-side using TensorFlow.js for privacy-first inference.',
    tech: ['JavaScript', 'TensorFlow.js', 'Chart.js', 'HTML/CSS'],
    role: 'ML Engineer & Frontend Developer',
    status: 'Live',
    featured: false,
    category: 'AI/ML',
    gradient: 'from-[#FFB347] to-[#FF7F50]',
    github: null,
    demo: 'https://deadline-death-predictor.vercel.app/',
    features: [
      'Client-side ML inference (TensorFlow.js)',
      'Health data analysis',
      'Risk score visualization',
      'Interactive dashboard',
    ],
    metrics: { accuracy: '87%', precision: '82%', recall: '89%' },
  },
  {
    id: 'jawd-email-campaign',
    title: 'Jawd Email Campaign',
    description:
      'Sophisticated email marketing platform with campaign management, automation workflows, and real-time performance analytics.',
    longDescription:
      'A comprehensive email marketing solution built with JavaScript, featuring campaign builder, automated workflows, and real-time performance tracking. Built during internship at JAWD Lifestyles.',
    tech: ['JavaScript', 'Node.js', 'MongoDB', 'HTML/CSS', 'Email APIs'],
    role: 'Full-Stack Developer (Internship)',
    status: 'Live',
    featured: false,
    category: 'Full-Stack',
    gradient: 'from-[#FF8C42] to-[#FF6347]',
    github: 'https://github.com/tamo2005/Jawd-email-campaign',
    demo: null,
    features: [
      'Campaign builder with templates',
      'Automated workflow engine',
      'A/B testing support',
      'Real-time delivery analytics',
    ],
    metrics: { delivery: '99.9%', open: '35%', conversion: '12%' },
  },
];

/** Convenience: just the featured ones for the hero/home callout */
export const featuredProjects = projects.filter((p) => p.featured);

/**
 * data/skills.js
 * All skills data in one place, grouped by domain.
 * Edit this file to add or update skills.
 */

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'TypeScript', level: 65, icon: '🔷' },
      { name: 'C / C++', level: 75, icon: '🔧' },
      { name: 'Java', level: 60, icon: '☕' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', level: 85, icon: '⚛️' },
      { name: 'Next.js', level: 70, icon: '🔺' },
      { name: 'HTML / CSS', level: 90, icon: '🎨' },
      { name: 'Tailwind CSS', level: 80, icon: '🌪️' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'FastAPI', level: 75, icon: '🚀' },
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express.js', level: 70, icon: '🛤️' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 65, icon: '🐘' },
      { name: 'MongoDB', level: 70, icon: '🍃' },
      { name: 'SQLite', level: 65, icon: '🗃️' },
      { name: 'Redis', level: 55, icon: '🔴' },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    skills: [
      { name: 'Scikit-learn', level: 70, icon: '🤖' },
      { name: 'TensorFlow', level: 65, icon: '🧠' },
      { name: 'Pandas', level: 75, icon: '🐼' },
      { name: 'NumPy', level: 70, icon: '🔢' },
      { name: 'Matplotlib', level: 65, icon: '📊' },
      { name: 'Linear Algebra', level: 70, icon: '📐' },
      { name: 'NLP', level: 60, icon: '💬' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Infra',
    skills: [
      { name: 'Git / GitHub', level: 80, icon: '🌿' },
      { name: 'Docker', level: 55, icon: '🐳' },
      { name: 'Celery', level: 60, icon: '⚙️' },
      { name: 'Postman', level: 75, icon: '📮' },
      { name: 'VS Code', level: 90, icon: '💻' },
    ],
  },
];

/** Flat list of all skills for components that need it */
export const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.label }))
);

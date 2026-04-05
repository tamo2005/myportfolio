/**
 * ========================================
 * DATABASE SETUP & SEEDING SCRIPT
 * ========================================
 * Purpose: Initialize MongoDB database with sample data
 * Usage: Run this script once to seed your database with example data
 * 
 * To use: 
 * 1. Update MONGO_URI with your connection string
 * 2. Run: node seed.js
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import all models
import Project from './models/Project.js';
import Skill from './models/Skill.js';
import Experience from './models/Experience.js';
import Certificate from './models/Certificate.js';
import Message from './models/Message.js';

/**
 * Sample data to seed the database
 * Adjust these to match your actual portfolio
 */
const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    githubLink: 'https://github.com/yourusername/ecommerce',
    liveLink: 'https://ecommerce-demo.com',
    image: 'https://via.placeholder.com/400x300?text=E-Commerce',
  },
  {
    title: 'AI Chat Assistant',
    description: 'A conversational AI chatbot powered by GPT-4 API with context awareness and memory.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'TailwindCSS'],
    githubLink: 'https://github.com/yourusername/ai-chat',
    liveLink: 'https://ai-chat.vercel.app',
    image: 'https://via.placeholder.com/400x300?text=AI+Chat',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    techStack: ['React', 'Firebase', 'Material-UI'],
    githubLink: 'https://github.com/yourusername/task-app',
    liveLink: 'https://task-app-demo.com',
    image: 'https://via.placeholder.com/400x300?text=Task+App',
  },
];

const sampleSkills = [
  { name: 'React', category: 'Frontend', proficiency: 95, iconUrl: 'https://via.placeholder.com/50?text=React' },
  { name: 'Node.js', category: 'Backend', proficiency: 90, iconUrl: 'https://via.placeholder.com/50?text=Node' },
  { name: 'MongoDB', category: 'Backend', proficiency: 85, iconUrl: 'https://via.placeholder.com/50?text=MongoDB' },
  { name: 'Python', category: 'AI/ML', proficiency: 80, iconUrl: 'https://via.placeholder.com/50?text=Python' },
  { name: 'TailwindCSS', category: 'Frontend', proficiency: 92, iconUrl: 'https://via.placeholder.com/50?text=Tailwind' },
  { name: 'Docker', category: 'Tools', proficiency: 75, iconUrl: 'https://via.placeholder.com/50?text=Docker' },
  { name: 'Git', category: 'Tools', proficiency: 93, iconUrl: 'https://via.placeholder.com/50?text=Git' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 88, iconUrl: 'https://via.placeholder.com/50?text=TypeScript' },
];

const sampleExperiences = [
  {
    role: 'Senior Full Stack Developer',
    organization: 'Tech Company Inc.',
    type: 'Work',
    startDate: new Date('2022-01-15'),
    endDate: null, // Present
    description: [
      'Developed and maintained 10+ production applications serving 100k+ users',
      'Led migration of legacy system to microservices architecture',
      'Improved application performance by 40% through optimization',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    role: 'Full Stack Developer',
    organization: 'Startup Co.',
    type: 'Work',
    startDate: new Date('2020-06-01'),
    endDate: new Date('2022-01-15'),
    description: [
      'Built React and Node.js applications from ground up',
      'Implemented CI/CD pipeline using GitHub Actions',
      'Designed MongoDB database schemas for scalability',
    ],
  },
  {
    role: 'Computer Science Degree',
    organization: 'University of Technology',
    type: 'Education',
    startDate: new Date('2018-09-01'),
    endDate: new Date('2022-05-30'),
    description: [
      'Graduated with honors (GPA: 3.8/4.0)',
      'Specialized in distributed systems and databases',
      'Published research paper on optimization algorithms',
    ],
  },
];

const sampleCertificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    dateIssued: new Date('2023-12-15'),
    imageUrl: 'https://via.placeholder.com/200x150?text=AWS+Cert',
    credentialLink: 'https://aws.amazon.com/verification/...',
  },
  {
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    dateIssued: new Date('2023-08-20'),
    imageUrl: 'https://via.placeholder.com/200x150?text=GCP+Cert',
    credentialLink: 'https://google.com/verification/...',
  },
  {
    title: 'Complete JavaScript Course',
    issuer: 'Udemy',
    dateIssued: new Date('2023-05-10'),
    imageUrl: 'https://via.placeholder.com/200x150?text=JS+Cert',
    credentialLink: 'https://udemy.com/verification/...',
  },
];

/**
 * Main seeding function
 * Connects to MongoDB and inserts sample data
 */
async function seedDatabase() {
  try {
    // Display startup message
    console.log('\n🌱 Starting database seeding...\n');

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✓ Connected to MongoDB\n');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Promise.all([
      Project.deleteMany({}),
      Skill.deleteMany({}),
      Experience.deleteMany({}),
      Certificate.deleteMany({}),
      Message.deleteMany({}),
    ]);
    console.log('✓ Database cleared\n');

    // Seed projects
    console.log('📁 Seeding projects...');
    const projects = await Project.insertMany(sampleProjects);
    console.log(`✓ Created ${projects.length} projects\n`);

    // Seed skills
    console.log('🎯 Seeding skills...');
    const skills = await Skill.insertMany(sampleSkills);
    console.log(`✓ Created ${skills.length} skills\n`);

    // Seed experiences
    console.log('💼 Seeding experiences...');
    const experiences = await Experience.insertMany(sampleExperiences);
    console.log(`✓ Created ${experiences.length} experiences\n`);

    // Seed certificates
    console.log('🏆 Seeding certificates...');
    const certificates = await Certificate.insertMany(sampleCertificates);
    console.log(`✓ Created ${certificates.length} certificates\n`);

    // Display success message
    console.log('═══════════════════════════════════════');
    console.log('✅ Database seeding completed successfully!');
    console.log('═══════════════════════════════════════\n');

    console.log('📊 Data Summary:');
    console.log(`   • Projects: ${projects.length}`);
    console.log(`   • Skills: ${skills.length}`);
    console.log(`   • Experiences: ${experiences.length}`);
    console.log(`   • Certificates: ${certificates.length}`);
    console.log(`   • Messages: 0 (ready for contact form submissions)\n`);

    console.log('🚀 Next steps:');
    console.log('   1. Start your backend: npm run dev');
    console.log('   2. Test endpoints: curl http://localhost:5000/api/projects');
    console.log('   3. Start your frontend');
    console.log('   4. Begin building!\n');

  } catch (error) {
    // Display error message
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB\n');
  }
}

// Run seeding function
seedDatabase();

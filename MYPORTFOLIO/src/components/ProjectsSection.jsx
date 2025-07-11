import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Heart, Mail, Clock, Play, Pause, Star, GitBranch, Users } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const projects = [
    {
      title: 'Gradify.AI',
      description: 'AI-powered marks evaluation system that revolutionizes how teachers grade assignments with intelligent automation and detailed analytics.',
      longDescription: 'A comprehensive AI solution that uses machine learning to automatically evaluate student assignments, providing detailed feedback and analytics to help teachers streamline their grading process.',
      tech: ['React', 'Python', 'TensorFlow', 'OpenAI API', 'MongoDB'],
      role: 'Full-stack Developer & AI Engineer',
      status: 'In Development',
      icon: <Star className="w-6 h-6" />,
      gradient: 'from-orange-400 to-red-500',
      demo: null,
      github: null,
      features: ['AI-powered grading', 'Real-time analytics', 'Student feedback system', 'Progress tracking'],
      metrics: { accuracy: '95%', speed: '10x faster', satisfaction: '98%' }
    },
    {
      title: 'Jawd Email Campaign',
      description: 'Sophisticated email marketing platform with advanced campaign management, automation, and detailed analytics for modern businesses.',
      longDescription: 'A comprehensive email marketing solution built with JavaScript, featuring drag-and-drop campaign builder, automated workflows, and real-time performance tracking.',
      tech: ['JavaScript', 'Node.js', 'MongoDB', 'HTML/CSS', 'Email APIs'],
      role: 'Full-stack Developer',
      status: 'Live',
      icon: <Mail className="w-6 h-6" />,
      gradient: 'from-orange-500 to-amber-600',
      demo: null,
      github: 'https://github.com/tamo2005/Jawd-email-campaign',
      features: ['Drag-and-drop builder', 'Automated workflows', 'A/B testing', 'Real-time analytics'],
      metrics: { delivery: '99.9%', open: '35%', conversion: '12%' }
    },
    {
      title: 'Deadline Death Predictor',
      description: 'Machine learning application that predicts mortality risk using advanced algorithms and comprehensive health data analysis.',
      longDescription: 'An innovative ML project that analyzes various health indicators and demographic data to predict mortality risk, helping healthcare professionals make informed decisions.',
      tech: ['JavaScript', 'Machine Learning', 'TensorFlow.js', 'Chart.js', 'Health APIs'],
      role: 'ML Engineer & Frontend Developer',
      status: 'Live',
      icon: <Clock className="w-6 h-6" />,
      gradient: 'from-orange-600 to-red-700',
      demo: 'https://deadline-death-predictor.vercel.app/',
      github: null,
      features: ['ML prediction model', 'Health data analysis', 'Risk visualization', 'Interactive dashboard'],
      metrics: { accuracy: '87%', precision: '82%', recall: '89%' }
    },
    {
      title: 'Heart Disease Detection',
      description: 'Advanced machine learning system for early detection of heart disease using clinical data and predictive modeling.',
      longDescription: 'A sophisticated healthcare application that uses machine learning algorithms to analyze patient data and predict the likelihood of heart disease, enabling early intervention.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Flask'],
      role: 'Data Scientist & Backend Developer',
      status: 'Completed',
      icon: <Heart className="w-6 h-6" />,
      gradient: 'from-red-500 to-orange-600',
      demo: null,
      github: 'https://github.com/tamo2005/heart-diesease-detection',
      features: ['Clinical data analysis', 'Predictive modeling', 'Risk assessment', 'Medical visualization'],
      metrics: { accuracy: '92%', sensitivity: '88%', specificity: '94%' }
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'In Development': return 'bg-blue-500';
      case 'Completed': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const ProjectCard = ({ project, index, isActive }) => (
    <div
      className={`relative group cursor-pointer transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${isActive ? 'scale-105' : 'scale-100'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Main Card */}
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden">
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-20 group-hover:opacity-60 transition-opacity duration-500`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              {project.icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 truncate">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(project.status)} flex-shrink-0`} />
                <span className="text-sm text-gray-500 truncate">{project.status}</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons - Always visible on touch devices, hover on desktop */}
          <div className={`flex gap-2 transition-opacity duration-300 flex-shrink-0 ${
            isTouchDevice ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-white hover:bg-orange-600 transition-colors duration-300 touch-manipulation"
                aria-label="View GitHub repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300 touch-manipulation"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {hoveredProject === index ? project.longDescription : project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 sm:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-200 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features (shown on hover for desktop, always visible on touch devices) */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isTouchDevice || hoveredProject === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-gray-600">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metrics */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <span className="text-sm text-gray-500 truncate">{project.role}</span>
            <div className="flex gap-2 sm:gap-4 text-xs text-gray-500 justify-between sm:justify-end">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="font-semibold text-orange-600">{value}</div>
                  <div className="capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div 
            className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-500 ${
              hoveredProject === index ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Innovative solutions combining AI, machine learning, and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isActive={index === currentSlide}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-white/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/30 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { label: 'Projects Completed', value: '4+', icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { label: 'Technologies Used', value: '15+', icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { label: 'Lines of Code', value: '50K+', icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { label: 'Users Impacted', value: '1K+', icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="flex justify-center mb-2">
                  <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-sm sm:text-base px-4">Interested in collaborating or learning more?</p>
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 text-sm sm:text-base touch-manipulation">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-none {
          display: block;
          -webkit-line-clamp: none;
          -webkit-box-orient: unset;
          overflow: visible;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Heart, Mail, Clock, Play, Pause, Star, GitBranch, Users, Calendar } from 'lucide-react';

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
      gradient: 'from-[#FF6B47] to-[#FF4500]',
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
      gradient: 'from-[#FF8C42] to-[#FF6347]',
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
      gradient: 'from-[#FFB347] to-[#FF7F50]',
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
      gradient: 'from-[#FF6B47] to-[#FF4500]',
      demo: null,
      github: 'https://github.com/tamo2005/heart-diesease-detection',
      features: ['Clinical data analysis', 'Predictive modeling', 'Risk assessment', 'Medical visualization'],
      metrics: { accuracy: '92%', sensitivity: '88%', specificity: '94%' }
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
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

  const handleScheduleMeeting = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI7-YpGVUpNnvnCPjZ7-qVB_uJuWvJhC5sDqXJzQm8f_7KhLkY6f1XdvnY8xnZ_Q', '_blank');
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
      {/* Main Card - One UI 7 style */}
      <div className="relative backdrop-blur-one-ui rounded-3xl p-6 sm:p-8 border border-[#333]/30 hover:border-[#FF6B47]/40 transition-all duration-500 hover:glow-orange overflow-hidden">
        
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#FF6B47] rounded-full animate-pulse opacity-20 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                left: `${20 + i * 20}%`,
                top: `${15 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                filter: 'drop-shadow(0 0 4px #FF6B47)'
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 glow-orange`}>
              {project.icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF6B47] transition-colors duration-300 line-clamp-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(project.status)} glow-orange flex-shrink-0`} />
                <span className="text-sm text-gray-400 font-medium">{project.status}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1 font-light">{project.role}</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className={`flex gap-2 transition-opacity duration-300 flex-shrink-0 ${
            isTouchDevice ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#1A1A1A]/80 text-gray-300 hover:text-white hover:bg-[#FF6B47] transition-all duration-300 glow-orange"
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
                className="p-2 rounded-xl bg-[#1A1A1A]/80 text-gray-300 hover:text-white hover:bg-[#FF6B47] transition-all duration-300 glow-orange"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 mb-6">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {hoveredProject === index ? project.longDescription : project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="relative z-10 mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, hoveredProject === index ? project.tech.length : 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs font-medium bg-[#1A1A1A]/60 text-[#FF6B47] rounded-xl border border-[#333]/50 hover:border-[#FF6B47]/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {!hoveredProject && project.tech.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-400">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Features - Shown on hover */}
        {hoveredProject === index && (
          <div className="relative z-10 mb-6 animate-fade-in">
            <h4 className="text-sm font-semibold text-[#FF6B47] mb-3">Key Features:</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                  <div className="w-1 h-1 bg-[#FF6B47] rounded-full mr-2 flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics - Shown on hover */}
        {hoveredProject === index && project.metrics && (
          <div className="relative z-10 mb-6 animate-fade-in">
            <h4 className="text-sm font-semibold text-[#FF6B47] mb-3">Performance Metrics:</h4>
            <div className="flex justify-between text-center">
              {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                <div key={metricIndex} className="flex-1">
                  <div className="text-lg font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="relative z-10">
          <button
            onClick={handleScheduleMeeting}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 glow-orange hover:glow-orange-strong"
          >
            <Calendar className="w-4 h-4" />
            <span>Discuss This Project</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* One UI 7 background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-to-r from-[#FF6B47]/8 to-[#FF4500]/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-r from-[#FF8C42]/6 to-[#FF6347]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FFB347]/4 to-[#FF7F50]/2 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-[#FF6B47] to-white bg-clip-text text-transparent mb-6"
              style={{ textShadow: '0 0 30px rgba(255, 107, 71, 0.3)' }}>
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Innovative solutions built with cutting-edge technology and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isActive={currentSlide === index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="backdrop-blur-one-ui rounded-3xl p-8 border border-[#333]/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-[#FF6B47] bg-clip-text text-transparent">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="text-gray-400 mb-6 text-lg font-light">
              From concept to deployment, I specialize in creating digital solutions that make an impact. 
              Let's discuss your next project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScheduleMeeting}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 glow-orange hover:glow-orange-strong"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Meeting</span>
              </button>
              <a
                href="https://github.com/tamo2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-[#FF6B47] text-[#FF6B47] rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#FF6B47]/10"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
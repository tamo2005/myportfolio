import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, Calendar, Construction } from 'lucide-react';
import { projects } from '../data/projects.js';
import { openCalendar } from '../utils/constants.js';

/** Map project icons from data — data file stores strings, component renders JSX */
const iconForCategory = (category) => {
  const map = {
    'AI/ML':      <Star className="w-6 h-6" />,
    'Full-Stack':  <Github className="w-6 h-6" />,
  };
  return map[category] || <Star className="w-6 h-6" />;
};

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef(null);

  // Enrich projects with icon JSX (data file keeps icons as strings)
  const enrichedProjects = projects.map((p) => ({
    ...p,
    icon: iconForCategory(p.category),
    tech: p.techStack || p.tech || [],
  }));




  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      setCurrentSlide((prev) => (prev + 1) % enrichedProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [enrichedProjects.length]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':          return 'bg-green-500';
      case 'In Development': return 'bg-blue-500';
      case 'Completed':     return 'bg-purple-500';
      default:              return 'bg-gray-500';
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
      {/* Main Card - One UI 7 style - Fixed width for proper grid */}
      <div className="relative backdrop-blur-md bg-[#1A1A1A]/30 rounded-2xl p-6 border border-[#333]/30 hover:border-[#FF6B47]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#FF6B47]/20 overflow-hidden h-full flex flex-col w-full max-w-none">
        
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#FF6B47] rounded-full animate-pulse opacity-20 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                left: `${20 + i * 30}%`,
                top: `${15 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                filter: 'drop-shadow(0 0 2px #FF6B47)'
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                 style={{ boxShadow: '0 0 15px rgba(255, 107, 71, 0.3)' }}>
              {project.icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B47] transition-colors duration-300 line-clamp-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(project.status)}`} 
                      style={{ boxShadow: '0 0 5px rgba(255, 107, 71, 0.3)' }} />
                <span className="text-xs text-gray-400 font-medium">{project.status}</span>
              </div>
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
                className="p-2 rounded-lg bg-[#1A1A1A]/80 text-gray-300 hover:text-white hover:bg-[#FF6B47] transition-all duration-300"
                style={{ boxShadow: '0 0 10px rgba(255, 107, 71, 0.2)' }}
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
                className="p-2 rounded-lg bg-[#1A1A1A]/80 text-gray-300 hover:text-white hover:bg-[#FF6B47] transition-all duration-300"
                style={{ boxShadow: '0 0 10px rgba(255, 107, 71, 0.2)' }}
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 mb-4 flex-grow">
          <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-3 group-hover:line-clamp-4 transition-all duration-300">
            {hoveredProject === index ? project.longDescription : project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="relative z-10 mb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs font-medium bg-[#1A1A1A]/60 text-[#FF6B47] rounded-lg border border-[#333]/50 hover:border-[#FF6B47]/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-400">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Features - Compact version shown on hover */}
        {hoveredProject === index && (
          <div className="relative z-10 mb-4 animate-fade-in">
            <h4 className="text-xs font-semibold text-[#FF6B47] mb-2">Key Features:</h4>
            <div className="grid grid-cols-1 gap-1">
              {project.features.slice(0, 3).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                  <div className="w-1 h-1 bg-[#FF6B47] rounded-full mr-2 flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Button */}
        <div className="relative z-10 mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm"
              style={{ boxShadow: '0 0 15px rgba(255, 107, 71, 0.3)' }}
            >
              {project.demo ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
              <span>{project.demo ? 'View Live Demo' : 'View on GitHub'}</span>
            </a>
          ) : (
            <div className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold text-sm cursor-not-allowed">
              <Construction className="w-4 h-4" />
              <span>Work In Progress</span>
            </div>
          )}
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

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-[#FF6B47] to-white bg-clip-text text-transparent mb-6"
              style={{ textShadow: '0 0 30px rgba(255, 107, 71, 0.3)' }}>
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Innovative solutions built with cutting-edge technology and creative problem-solving
          </p>
        </div>

        {/* Projects Grid - Simple and clean side-by-side layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {enrichedProjects.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              index={index}
              isActive={currentSlide === index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="backdrop-blur-md bg-[#1A1A1A]/30 rounded-3xl p-8 border border-[#333]/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-[#FF6B47] bg-clip-text text-transparent">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="text-gray-400 mb-6 text-lg font-light">
              From concept to deployment, I specialize in creating digital solutions that make an impact. 
              Let's discuss your next project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalendar}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ boxShadow: '0 0 20px rgba(255, 107, 71, 0.3)' }}
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

      {/* CSS for line-clamp and animations lives in src/index.css */}
    </section>
  );
};

export default ProjectsSection;
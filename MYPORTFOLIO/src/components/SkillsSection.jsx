import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = [
    { 
      name: 'Python', 
      level: 85, 
      category: 'Programming',
      color: 'from-[#FF6B47] to-[#FF4500]',
      icon: '🐍',
      message: "Ssss-seriously skilled with Python! I can make data dance and algorithms sing!"
    },
    { 
      name: 'JavaScript', 
      level: 80, 
      category: 'Programming',
      color: 'from-[#FF8C42] to-[#FF6347]',
      icon: '⚡',
      message: "JavaScript is my superpower! I bring websites to life with just a few keystrokes!"
    },
    { 
      name: 'React.js', 
      level: 85, 
      category: 'Frontend',
      color: 'from-[#FF6B47] to-[#FF4500]',
      icon: '⚛️',
      message: "React and I are like best friends! We create amazing user experiences together!"
    },
    { 
      name: 'C/C++', 
      level: 75, 
      category: 'Programming',
      color: 'from-[#FFB347] to-[#FF7F50]',
      icon: '🔧',
      message: "C++ is my metal! Low-level programming? Challenge accepted!"
    },
    { 
      name: 'HTML/CSS', 
      level: 90, 
      category: 'Frontend',
      color: 'from-[#FF8C42] to-[#FF6347]',
      icon: '🎨',
      message: "HTML & CSS are my paintbrush! I craft beautiful web experiences pixel by pixel!"
    },
    { 
      name: 'Tailwind CSS', 
      level: 80, 
      category: 'Frontend',
      color: 'from-[#FF6B47] to-[#FF4500]',
      icon: '🌪️',
      message: "Tailwind makes me feel like a styling tornado! Utility-first CSS is pure magic!"
    },
    { 
      name: 'Pandas', 
      level: 70, 
      category: 'AI/ML',
      color: 'from-[#FFB347] to-[#FF7F50]',
      icon: '🐼',
      message: "Pandas and I are data BFFs! We turn messy data into beautiful insights!"
    },
    { 
      name: 'Matplotlib', 
      level: 65, 
      category: 'AI/ML',
      color: 'from-[#FF8C42] to-[#FF6347]',
      icon: '📊',
      message: "With Matplotlib, I'm a data visualization wizard! Charts have never looked so good!"
    },
  ];

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map((_, index) => index));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSkillClick = (skill, index) => {
    setSelectedSkill(index);
    setCurrentMessage(skill.message);
    setShowMessage(true);
    
    setTimeout(() => {
      setShowMessage(false);
      setSelectedSkill(null);
    }, 4000);
  };

  const filteredSkills = activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* One UI 7 background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-[#FF6B47]/10 to-[#FF4500]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-[#FF8C42]/8 to-[#FF6347]/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#FFB347]/5 to-[#FF7F50]/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-[#FF6B47] to-white bg-clip-text text-transparent mb-6"
              style={{ textShadow: '0 0 30px rgba(255, 107, 71, 0.3)' }}>
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Technologies I've mastered and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter - One UI 7 style */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-3 backdrop-blur-one-ui p-2 rounded-3xl border border-[#333]/30">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white glow-orange'
                    : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative backdrop-blur-one-ui rounded-3xl p-6 border border-[#333]/30 hover:border-[#FF6B47]/40 transition-all duration-500 hover:scale-105 cursor-pointer transform ${
                animatedSkills.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${selectedSkill === index ? 'glow-orange-strong scale-110' : 'hover:glow-orange'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                backgroundImage: selectedSkill === index ? 
                  `linear-gradient(45deg, rgba(255, 107, 71, 0.1), rgba(255, 69, 0, 0.05))` : 'none'
              }}
              onClick={() => handleSkillClick(skill, index)}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B47] transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {skill.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#FF6B47] group-hover:text-white transition-colors duration-300">
                    {skill.level}%
                  </div>
                </div>
              </div>

              {/* Progress Bar - One UI 7 style */}
              <div className="relative">
                <div className="w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ 
                      width: animatedSkills.includes(index) ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200 + 500}ms`
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                  </div>
                </div>
                
                {/* Skill level indicator */}
                <div 
                  className="absolute top-0 w-3 h-3 bg-white rounded-full border-2 border-[#FF6B47] transition-all duration-1000 ease-out glow-orange"
                  style={{ 
                    left: animatedSkills.includes(index) ? `calc(${skill.level}% - 6px)` : '-6px',
                    transitionDelay: `${index * 200 + 800}ms`
                  }}
                />
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Fun Message Display - One UI 7 style */}
        {showMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in">
            <div className="backdrop-blur-one-ui p-6 rounded-3xl border border-[#FF6B47]/30 max-w-md mx-auto text-center glow-orange-strong">
              <div className="text-4xl mb-4 animate-bounce">
                {skills.find((_, i) => i === selectedSkill)?.icon}
              </div>
              <p className="text-white font-semibold text-lg leading-relaxed">
                {currentMessage}
              </p>
            </div>
          </div>
        )}

        {/* Skills Summary - One UI 7 style */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '8+', label: 'Technologies', icon: '🛠️' },
            { number: '3+', label: 'Years Learning', icon: '📚' },
            { number: '15+', label: 'Projects', icon: '🚀' },
            { number: '∞', label: 'Passion Level', icon: '❤️' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center backdrop-blur-one-ui p-6 rounded-3xl border border-[#333]/30 hover:border-[#FF6B47]/30 transition-all duration-300 hover:scale-105 hover:glow-orange"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#FF6B47] mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
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
      name: 'Node.js', 
      level: 75, 
      category: 'Backend',
      color: 'from-[#4CAF50] to-[#45A049]',
      icon: '🟢',
      message: "Node.js powers my backend dreams! Server-side JavaScript is absolutely amazing!"
    },
    { 
      name: 'Express.js', 
      level: 70, 
      category: 'Backend',
      color: 'from-[#68B984] to-[#5AA469]',
      icon: '🚀',
      message: "Express.js makes backend development smooth as silk! API creation has never been easier!"
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
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
          <div className="flex flex-wrap justify-center gap-2 backdrop-blur-md bg-[#1A1A1A]/40 p-2 rounded-2xl border border-[#333]/30">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white shadow-lg shadow-[#FF6B47]/25'
                    : 'text-gray-400 hover:text-white hover:bg-[#2A2A2A]/60'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - More compact layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-12 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative backdrop-blur-md bg-[#1A1A1A]/40 rounded-2xl p-5 border border-[#333]/30 hover:border-[#FF6B47]/40 transition-all duration-500 hover:scale-105 cursor-pointer transform ${
                animatedSkills.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${selectedSkill === index ? 'shadow-2xl shadow-[#FF6B47]/30 scale-105' : 'hover:shadow-lg hover:shadow-[#FF6B47]/20'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                backgroundImage: selectedSkill === index ? 
                  `linear-gradient(45deg, rgba(255, 107, 71, 0.1), rgba(255, 69, 0, 0.05))` : 'none'
              }}
              onClick={() => handleSkillClick(skill, index)}
            >
              {/* Skill Header - More compact */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-lg">{skill.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B47] transition-colors duration-300 truncate">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {skill.category}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-[#FF6B47] group-hover:text-white transition-colors duration-300">
                    {skill.level}%
                  </div>
                </div>
              </div>

              {/* Progress Bar - One UI 7 style - More compact */}
              <div className="relative">
                <div className="w-full h-2.5 bg-[#2A2A2A] rounded-full overflow-hidden">
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
                
                {/* Skill level indicator - smaller */}
                <div 
                  className="absolute top-0 w-2.5 h-2.5 bg-white rounded-full border-2 border-[#FF6B47] transition-all duration-1000 ease-out shadow-sm shadow-[#FF6B47]/50"
                  style={{ 
                    left: animatedSkills.includes(index) ? `calc(${skill.level}% - 5px)` : '-5px',
                    transitionDelay: `${index * 200 + 800}ms`
                  }}
                />
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Fun Message Display - One UI 7 style */}
        {showMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in">
            <div className="backdrop-blur-md bg-[#1A1A1A]/60 p-6 rounded-2xl border border-[#FF6B47]/30 max-w-md mx-auto text-center shadow-2xl shadow-[#FF6B47]/30">
              <div className="text-4xl mb-4 animate-bounce">
                {skills.find((_, i) => i === selectedSkill)?.icon}
              </div>
              <p className="text-white font-semibold text-lg leading-relaxed">
                {currentMessage}
              </p>
            </div>
          </div>
        )}

        {/* Skills Summary - One UI 7 style - More compact */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '10+', label: 'Technologies', icon: '🛠️' },
            { number: '3+', label: 'Years Learning', icon: '📚' },
            { number: '15+', label: 'Projects', icon: '🚀' },
            { number: '∞', label: 'Passion Level', icon: '❤️' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center backdrop-blur-md bg-[#1A1A1A]/40 p-5 rounded-2xl border border-[#333]/30 hover:border-[#FF6B47]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B47]/20"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#FF6B47] mb-1">{stat.number}</div>
              <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
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
        
        .backdrop-blur-one-ui {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
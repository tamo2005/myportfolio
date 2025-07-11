import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { 
      name: 'Python', 
      level: 85, 
      category: 'Programming',
      color: 'from-orange-400 to-orange-600',
      icon: '🐍',
      message: "Ssss-seriously skilled with Python! 🐍 I can make data dance and algorithms sing!"
    },
    { 
      name: 'JavaScript', 
      level: 80, 
      category: 'Programming',
      color: 'from-orange-500 to-orange-700',
      icon: '⚡',
      message: "JavaScript is my superpower! ⚡ I bring websites to life with just a few keystrokes!"
    },
    { 
      name: 'React.js', 
      level: 85, 
      category: 'Frontend',
      color: 'from-orange-400 to-orange-600',
      icon: '⚛️',
      message: "React and I are like best friends! ⚛️ We create amazing user experiences together!"
    },
    { 
      name: 'C/C++', 
      level: 75, 
      category: 'Programming',
      color: 'from-orange-500 to-orange-700',
      icon: '🔧',
      message: "C++ is my metal! 🔧 Low-level programming? Challenge accepted!"
    },
    { 
      name: 'HTML/CSS', 
      level: 90, 
      category: 'Frontend',
      color: 'from-orange-300 to-orange-500',
      icon: '🎨',
      message: "HTML & CSS are my paintbrush! 🎨 I craft beautiful web experiences pixel by pixel!"
    },
    { 
      name: 'Tailwind CSS', 
      level: 80, 
      category: 'Frontend',
      color: 'from-orange-400 to-orange-600',
      icon: '🌪️',
      message: "Tailwind makes me feel like a styling tornado! 🌪️ Utility-first CSS is pure magic!"
    },
    { 
      name: 'Pandas', 
      level: 70, 
      category: 'AI/ML',
      color: 'from-orange-500 to-orange-700',
      icon: '🐼',
      message: "Pandas and I are data BFFs! 🐼 We turn messy data into beautiful insights!"
    },
    { 
      name: 'Matplotlib', 
      level: 65, 
      category: 'AI/ML',
      color: 'from-orange-600 to-orange-800',
      icon: '📊',
      message: "With Matplotlib, I'm a data visualization wizard! 📊 Charts have never looked so good!"
    },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map((_, index) => index));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setCurrentMessage(skill.message);
    setShowMessage(true);
    
    // Auto-hide message after 4 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  const getCategorySkills = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on any skill to discover my expertise level and get a fun message! 🚀
          </p>
        </div>

        {/* Fun Message Display */}
        {showMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-orange-200 max-w-md mx-auto">
              <div className="flex items-center space-x-3">
                <span className="text-3xl animate-spin">{selectedSkill?.icon}</span>
                <p className="text-gray-800 font-medium">{currentMessage}</p>
              </div>
              <button 
                onClick={() => setShowMessage(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category}
              className={`transform transition-all duration-1000 delay-${categoryIndex * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCategorySkills(category).map((skill, index) => (
                  <div
                    key={skill.name}
                    onClick={() => handleSkillClick(skill)}
                    className={`group relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 border border-orange-100 ${
                      animatedSkills.includes(skills.indexOf(skill)) ? 'animate-fade-in' : ''
                    }`}
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      background: selectedSkill?.name === skill.name ? 'linear-gradient(135deg, #fed7aa, #ffedd5)' : ''
                    }}
                  >
                    {/* Skill Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:animate-bounce transition-all duration-300">
                          {skill.icon}
                        </span>
                        <h4 className="text-xl font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ 
                            width: animatedSkills.includes(skills.indexOf(skill)) ? `${skill.level}%` : '0%'
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/10 group-hover:to-orange-600/10 transition-all duration-300 pointer-events-none"></div>
                    
                    {/* Click Me Hint */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded-full">
                        Click me! 🎉
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-600 italic">
            "Every skill is a superpower waiting to be unleashed! 💪✨"
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
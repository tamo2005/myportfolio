import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Home, User, Code, Briefcase, MessageCircle, Coffee, Calendar } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initial load animation
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100; 
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Coffee },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tamo2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tamagnoroy.roy2005@gmail.com', label: 'Email' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-one-ui shadow-2xl border-b border-[#FF6B47]/20' 
            : 'bg-transparent'
        } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo with One UI 7 style */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300 scale-110"></div>
              <img 
                src="/assets/logo.png" 
                alt="Logo" 
                className="relative w-12 h-12 object-contain cursor-pointer transition-all duration-300 hover:scale-110 filter brightness-110"
                style={{ filter: 'drop-shadow(0 0 8px #FF6B47)' }}
              />
            </div>

            {/* Desktop Navigation - One UI 7 style */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative group flex items-center space-x-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white shadow-lg glow-orange'
                        : 'text-gray-300 hover:text-white hover:bg-[#1A1A1A]/50'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isLoaded ? 'slideInDown 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    <Icon size={18} className={`transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`} />
                    <span className="font-medium text-sm">{item.label}</span>
                    
                    {/* One UI 7 style active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Social Links & Schedule Meeting Button */}
            <div className="flex items-center space-x-3">
              
              {/* Schedule Meeting Button - One UI 7 style */}
              <button
                onClick={() => window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI7-YpGVUpNnvnCPjZ7-qVB_uJuWvJhC5sDqXJzQm8f_7KhLkY6f1XdvnY8xnZ_Q', '_blank')}
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 glow-orange hover:glow-orange-strong"
              >
                <Calendar size={18} />
                <span>Schedule Meet</span>
              </button>
              
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group w-10 h-10 bg-[#1A1A1A]/50 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-[#FF6B47]/20 border border-[#333]/50 hover:border-[#FF6B47]/30"
                      style={{ 
                        animationDelay: `${(index + navItems.length) * 0.1}s`,
                        animation: isLoaded ? 'slideInDown 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon size={16} className="text-gray-300 group-hover:text-[#FF6B47] transition-colors" />
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs px-3 py-1 bg-[#1A1A1A]/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md">
                        {social.label}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 bg-[#1A1A1A]/50 rounded-2xl flex items-center justify-center transition-all duration-300 border border-[#333]/50 hover:border-[#FF6B47]/30"
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-white" />
                ) : (
                  <Menu size={20} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - One UI 7 style */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="backdrop-blur-one-ui border-t border-[#333]/50 px-6 py-4 mx-4 rounded-b-3xl">
            <div className="space-y-3">
              {/* Schedule Meeting Button - Mobile */}
              <button
                onClick={() => {
                  window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI7-YpGVUpNnvnCPjZ7-qVB_uJuWvJhC5sDqXJzQm8f_7KhLkY6f1XdvnY8xnZ_Q', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 glow-orange"
              >
                <Calendar size={20} />
                <span>Schedule Meeting</span>
              </button>
              
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white glow-orange'
                        : 'text-gray-300 hover:bg-[#1A1A1A]/30 hover:text-white'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isMobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                    }}
                  >
                    <Icon size={20} className={isActive ? 'text-white' : 'text-gray-400'} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-[#333]/30">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#1A1A1A]/50 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-[#FF6B47]/20 border border-[#333]/50"
                      style={{ 
                        animationDelay: `${(index + navItems.length) * 0.1}s`,
                        animation: isMobileMenuOpen ? 'slideInUp 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon size={18} className="text-gray-300 hover:text-[#FF6B47]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* One UI 7 style progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500] transition-all duration-300 ease-out glow-orange"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
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
      const sections = ['home', 'hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100; 
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection === 'hero' ? 'home' : currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, targetId: 'hero' }, // Target hero section for home
    { id: 'about', label: 'About', icon: User, targetId: 'about' },
    { id: 'skills', label: 'Skills', icon: Code, targetId: 'skills' },
    { id: 'projects', label: 'Projects', icon: Briefcase, targetId: 'projects' },
    { id: 'experience', label: 'Experience', icon: Coffee, targetId: 'experience' },
    { id: 'contact', label: 'Contact', icon: MessageCircle, targetId: 'contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tamo2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tamagnoroy.roy2005@gmail.com', label: 'Email' }
  ];

  const handleNavClick = (item) => {
    // Try multiple possible IDs for the target section
    const possibleIds = [
      item.targetId,
      item.id,
      item.id.toLowerCase(),
      item.targetId?.toLowerCase()
    ].filter(Boolean);

    let element = null;
    for (const id of possibleIds) {
      element = document.getElementById(id);
      if (element) break;
    }

    // If still not found, try finding by class name or other selectors
    if (!element && item.id === 'home') {
      element = document.querySelector('.hero-section') || 
                document.querySelector('[class*="hero"]') ||
                document.querySelector('section:first-of-type');
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top if it's home
      if (item.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      console.warn(`Element with id "${item.targetId || item.id}" not found`);
    }
    
    setActiveSection(item.id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-md bg-black/20 shadow-2xl border-b border-[#FF6B47]/20' 
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
                onClick={() => handleNavClick({ id: 'home', targetId: 'hero' })}
              />
            </div>

            {/* Desktop Navigation - Hidden on all screens to use popup menu only */}
            <div className="hidden">
              {/* Desktop navigation disabled - using popup menu for all screens */}
            </div>

            {/* Social Links & Schedule Meeting Button */}
            <div className="flex items-center space-x-3">
              
              {/* Schedule Meeting Button - Now shows on small screens too */}
              <button
                onClick={() => window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI7-YpGVUpNnvnCPjZ7-qVB_uJuWvJhC5sDqXJzQm8f_7KhLkY6f1XdvnY8xnZ_Q', '_blank')}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105"
                style={{ boxShadow: '0 0 20px rgba(255, 107, 71, 0.3)' }}
              >
                <Calendar size={18} />
                <span className="hidden lg:block">Schedule Meet</span>
                <span className="lg:hidden">Meet</span>
              </button>
              
              {/* Social Links - Now shows on small screens too */}
              <div className="hidden sm:flex items-center space-x-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-[#FF6B47]/20 border border-white/10 hover:border-[#FF6B47]/30"
                      style={{ 
                        animationDelay: `${(index + navItems.length) * 0.1}s`,
                        animation: isLoaded ? 'slideInDown 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon size={16} className="text-gray-300 group-hover:text-[#FF6B47] transition-colors" />
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs px-3 py-1 bg-black/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md">
                        {social.label}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Menu Button - Now shows on ALL screens */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#FF6B47]/30 hover:bg-[#FF6B47]/10"
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

        {/* Popup Menu - Now shows on ALL screens */}
        <div className={`transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="backdrop-blur-md bg-black/30 border-t border-white/10 px-6 py-4 mx-4 rounded-b-3xl">
            <div className="space-y-3">
              {/* Schedule Meeting Button - Mobile */}
              <button
                onClick={() => {
                  window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI7-YpGVUpNnvnCPjZ7-qVB_uJuWvJhC5sDqXJzQm8f_7KhLkY6f1XdvnY8xnZ_Q', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105"
                style={{ boxShadow: '0 0 20px rgba(255, 107, 71, 0.4)' }}
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
                    onClick={() => handleNavClick(item)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isMobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none',
                      boxShadow: isActive ? '0 0 20px rgba(255, 107, 71, 0.4)' : 'none'
                    }}
                  >
                    <Icon size={20} className={isActive ? 'text-white' : 'text-gray-400'} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-[#FF6B47]/20 border border-white/10"
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
          className="h-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500] transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`,
            boxShadow: '0 0 10px rgba(255, 107, 71, 0.5)'
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
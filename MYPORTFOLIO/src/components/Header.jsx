import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Home, User, Code, Briefcase, MessageCircle, Coffee, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to light mode on server-side or if window is not defined
  });

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
          // Adjust offset to make active section highlighting more precise
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

  // Effect to apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Coffee },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:bg-gray-900/40 dark:border-gray-700' // Added dark mode styles
            : 'bg-transparent'
        } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo with image */}
            <div className="relative group">
              <img 
                src="/assets/logo.png" 
                alt="Logo" 
                className="w-12 h-12 object-contain cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50 dark:text-gray-300 dark:hover:text-orange-400 dark:hover:bg-gray-800' // Added dark mode styles
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isLoaded ? 'slideInDown 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    <Icon size={16} className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} /> {/* Added dark mode styles */}
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                );
              })}
            </div>

            {/* Social Links & Mobile Menu & Theme Toggle */}
            <div className="flex items-center space-x-4">
              
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="relative group w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 dark:bg-gray-800/50 dark:hover:from-orange-400/20 dark:hover:to-orange-500/20" // Added dark mode styles
                      style={{ 
                        animationDelay: `${(index + navItems.length) * 0.1}s`,
                        animation: isLoaded ? 'slideInDown 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon size={16} className="text-gray-700 group-hover:text-orange-600 transition-colors dark:text-gray-300 dark:group-hover:text-orange-400" /> {/* Added dark mode styles */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300 dark:bg-gray-800/50 dark:hover:bg-orange-400/20" // Added dark mode styles
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300 dark:bg-gray-800/50 dark:hover:bg-orange-400/20" // Added dark mode styles
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-gray-700 dark:text-gray-300" /> // Added dark mode styles
                ) : (
                  <Menu size={20} className="text-gray-700 dark:text-gray-300" /> // Added dark mode styles
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/10 backdrop-blur-xl border-t border-white/20 px-6 py-4 dark:bg-gray-900/40 dark:border-gray-700"> {/* Added dark mode styles */}
            <div className="space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                        : 'text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-800' // Added dark mode styles
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isMobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                    }}
                  >
                    <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'} /> {/* Added dark mode styles */}
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-white/20 dark:border-gray-700"> {/* Added dark mode styles */}
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-110 dark:bg-gray-800/50 dark:hover:from-orange-400/20 dark:hover:to-orange-500/20" // Added dark mode styles
                      style={{ 
                        animationDelay: `${(index + navItems.length) * 0.1}s`,
                        animation: isMobileMenuOpen ? 'slideInUp 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon size={18} className="text-gray-700 dark:text-gray-300" /> {/* Added dark mode styles */}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>

      {/* Custom CSS for animations */}
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
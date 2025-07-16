import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Home, User, Code, Briefcase, MessageCircle, Coffee, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercentage((window.scrollY / totalHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { icon: Github, href: 'https://github.com/Tamogno', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tamogno-roy%E2%9C%A8-498066222/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tamoghnaroy@gmail.com', label: 'Email' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:bg-[var(--bg-main)]/80 dark:border-white/5'
            : 'bg-transparent'
        } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            <a href="#home" className="relative group">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
              />
            </a>

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
                        ? 'bg-[var(--button-bg)] text-[var(--button-text)] shadow-lg dark:shadow-[var(--button-hover-glow)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--highlight)] hover:bg-orange-50 dark:text-[var(--text-secondary)] dark:hover:text-[var(--highlight)] dark:hover:bg-white/5'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-[var(--button-text)]' : 'text-gray-500'} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full dark:bg-[var(--highlight)] animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Social Links & Controls */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 dark:bg-[var(--bg-card)] dark:hover:shadow-[var(--button-hover-glow)]"
                    >
                      <Icon size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--highlight)] transition-colors" />
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap dark:bg-[var(--bg-card)] dark:text-[var(--text-primary)]">
                        {social.label}
                      </div>
                    </a>
                  );
                })}
              </div>

              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 dark:bg-[var(--bg-card)] dark:hover:shadow-[var(--button-hover-glow)]"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-[var(--text-secondary)]" />
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center dark:bg-[var(--bg-card)]"
              >
                {isMobileMenuOpen ? <X size={20} className="text-[var(--text-primary)]" /> : <Menu size={20} className="text-[var(--text-primary)]" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="bg-white/10 backdrop-blur-xl border-t border-white/20 px-6 py-4 dark:bg-[var(--bg-main)]/95 dark:border-white/5">
                <div className="space-y-3">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-[var(--button-bg)] text-[var(--button-text)] shadow-lg' : 'text-[var(--text-secondary)] hover:bg-orange-50 dark:hover:bg-white/5'}`}
                            >
                                <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                    <div className="flex justify-center space-x-4 pt-4 border-t border-white/20 dark:border-white/5">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a key={social.label} href={social.href} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center dark:bg-[var(--bg-card)]">
                                    <Icon size={18} className="text-[var(--text-primary)]" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-[var(--highlight)] transition-all duration-100 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
    </>
  );
};

export default Header;
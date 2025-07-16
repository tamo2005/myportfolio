import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, MessageCircle, Coffee } from 'lucide-react'; // Removed Github, Linkedin, Mail

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

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Experience', id: 'experience', icon: Coffee }, // Changed icon from Briefcase, consider a more distinct one if needed
    { name: 'Contact', id: 'contact', icon: MessageCircle },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl sm:text-3xl font-bold text-gray-800">Tamagno</span>
          <span className="text-2xl sm:text-3xl font-bold text-orange-600">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-gray-700 hover:text-orange-600 transition-colors duration-300 group
                ${activeSection === item.id ? 'font-semibold text-orange-600' : ''}`}
            >
              {item.name}
              <span 
                className={`absolute left-0 bottom-0 h-0.5 bg-orange-600 transition-all duration-300 transform 
                  ${activeSection === item.id ? 'w-full scale-x-100' : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'}`}
              ></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-3xl font-bold transition-colors duration-300 ${
                activeSection === item.id ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              <div className="flex items-center">
                <item.icon size={28} className="mr-3" />
                <span>{item.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"> {/* Changed background to subtle gray */}
        <div 
          className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300 ease-out" // Subtle orange gradient
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>

      {/* Custom CSS for animations - keep if used elsewhere, otherwise consider moving to App.css if global */}
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
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-slide-in-down {
          animation: slideInDown 0.5s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.5s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
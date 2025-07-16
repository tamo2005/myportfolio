import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Download, Sparkles, Heart } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/CV_TAMAGNO.pdf'; // Fixed path to match your file structure
    link.download = 'CV_TAMAGNO.pdf';
    link.click();
  };

  return (
    <section 
      id="home"
      className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 flex items-center justify-center relative overflow-hidden py-16 sm:py-0
      dark:bg-[#0D0D0D] dark:from-[#0D0D0D] dark:via-[#0D0D0D] dark:to-[#0D0D0D] dark:bg-none" // Apply dark background, remove gradient in dark mode
    >
      {/* Simplified background elements - maintain current design as requested */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse dark:bg-[#1A1A1A]/50"></div> {/* Dark mode circle */}
        <div className="absolute top-40 right-32 w-20 h-20 bg-white/10 rounded-full animate-bounce dark:bg-[#1A1A1A]/70"></div> {/* Dark mode circle */}
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-white/5 rounded-full animate-spin-slow dark:bg-[#1A1A1A]/50"></div> {/* Dark mode circle */}
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-2000 dark:bg-[#1A1A1A]/70"></div> {/* Dark mode circle */}
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          } pt-4 dark:text-[#F5F5F5]`} // Dark mode text
        >
          Hi, I'm <span className="text-orange-900 dark:text-[#FF4C1B]">Tamagno Roy</span>.
        </h1>
        <p 
          className={`text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 opacity-90 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } dark:text-[#F5F5F5] dark:opacity-80`} // Dark mode text
        >
          A <span className="text-orange-900 font-semibold dark:text-[#FF4C1B]">Full-Stack Developer</span> and{' '}
          <span className="text-orange-900 font-semibold dark:text-[#FF4C1B]">AI Enthusiast</span>.
        </p>

        {/* Added more description */}
        <p className={`text-lg sm:text-xl mb-12 opacity-80 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } max-w-2xl mx-auto leading-relaxed dark:text-[#F5F5F5] dark:opacity-80`}>
          I build robust and scalable web applications with a keen eye for user experience and a passion for leveraging artificial intelligence to solve complex problems. My expertise spans both frontend and backend technologies, enabling me to deliver end-to-end solutions.
        </p>

        <div 
          className={`flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 transition-all duration-1000 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Social Links */}
          <div className="flex space-x-6 z-20"> {/* Added z-20 to ensure it's above other elements if needed */}
            <a 
              href="https://github.com/your-github" // Replace with actual link
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-125 group relative p-2
              dark:text-[#F5F5F5] dark:hover:text-[#FF4C1B]" // Dark mode icon color
              aria-label="GitHub Profile"
            >
              <Github size={32} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
              dark:bg-[#0D0D0D]/90 dark:text-[#F5F5F5]">GitHub</span> {/* Dark mode tooltip */}
            </a>
            <a 
              href="https://linkedin.com/in/your-linkedin" // Replace with actual link
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-125 group relative p-2
              dark:text-[#F5F5F5] dark:hover:text-[#FF4C1B]" // Dark mode icon color
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={32} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
              dark:bg-[#0D0D0D]/90 dark:text-[#F5F5F5]">LinkedIn</span> {/* Dark mode tooltip */}
            </a>
            <a 
              href="mailto:your-email@example.com" // Replace with actual email
              className="text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-125 group relative p-2
              dark:text-[#F5F5F5] dark:hover:text-[#FF4C1B]" // Dark mode icon color
              aria-label="Send Email"
            >
              <Mail size={32} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
              dark:bg-[#0D0D0D]/90 dark:text-[#F5F5F5]">Email</span> {/* Dark mode tooltip */}
            </a>
          </div>

          {/* Download Resume Button */}
          <div className="relative z-10"> {/* Ensure button is above social icons for clickability if overlap issues persist */}
            <button
              onClick={handleDownloadCV}
              className="group relative flex items-center justify-center overflow-hidden 
                         bg-white text-orange-600 px-10 py-4 rounded-full font-semibold 
                         hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl
                         dark:bg-[#FF4C1B] dark:text-white dark:hover:bg-[#FF3C00] dark:hover:shadow-orange-500/50" // Dark mode button
            >
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                dark:from-[#FF4C1B]/10 dark:to-[#FF3C00]/10"></div> {/* Dark mode hover effect */}
            </button>
          </div>
        </div>

        {/* Fun fact */}
        <div className={`mt-12 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full
            dark:bg-[#1A1A1A]/50"> {/* Dark mode fun fact container */}
            <Heart className="w-4 h-4 mr-2 text-red-400 dark:text-[#FF4C1B]" /> {/* Dark mode heart icon */}
            <span className="text-sm opacity-80 dark:text-[#F5F5F5]"> {/* Dark mode text */}
              Turning wild ideas into code since 2023
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Sparkles className="w-6 h-6 text-white dark:text-[#999999]" /> {/* Dark mode scroll indicator */}
      </div>

      {/* Custom CSS for animations - Assuming these are global or used here, otherwise move to App.css */}
      <style jsx>{`
        @keyframes animate-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: animate-spin-slow 20s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

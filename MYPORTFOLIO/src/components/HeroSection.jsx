import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Download, Sparkles, Heart } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkMode);
    };

    // Initial check
    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Simple loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/CV_TAMAGNO.pdf';
    link.download = 'CV_TAMAGNO.pdf';
    link.click();
  };

  return (
    <section 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDarkMode 
          ? 'bg-[#0D0D0D]' 
          : 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600'
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating geometric shapes */}
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full animate-pulse ${
          isDarkMode ? 'bg-[#FF4C1B]/5' : 'bg-white/5'
        }`}></div>
        <div className={`absolute top-40 right-32 w-20 h-20 rounded-full animate-bounce ${
          isDarkMode ? 'bg-[#FF4C1B]/10' : 'bg-white/10'
        }`}></div>
        <div className={`absolute bottom-32 left-32 w-24 h-24 rounded-full animate-pulse delay-300 ${
          isDarkMode ? 'bg-[#FF4C1B]/8' : 'bg-white/8'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-16 h-16 rounded-full animate-bounce delay-500 ${
          isDarkMode ? 'bg-[#FF4C1B]/12' : 'bg-white/12'
        }`}></div>
        
        {/* Neon vertical lines for Tigers style (dark mode only) */}
        {isDarkMode && (
          <>
            <div className="absolute left-10 top-1/4 w-0.5 h-32 bg-gradient-to-b from-transparent via-[#FF4C1B] to-transparent opacity-30 animate-pulse"></div>
            <div className="absolute right-16 top-1/3 w-0.5 h-24 bg-gradient-to-b from-transparent via-[#FF4C1B] to-transparent opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute left-1/4 bottom-32 w-0.5 h-20 bg-gradient-to-b from-transparent via-[#FF4C1B] to-transparent opacity-25 animate-pulse delay-2000"></div>
          </>
        )}
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-ping ${
              isDarkMode ? 'bg-[#FF4C1B]/30' : 'bg-white/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              filter: isDarkMode ? 'drop-shadow(0 0 4px #FF4C1B)' : 'none'
            }}
          />
        ))}
      </div>
              
      <div className={`container mx-auto px-6 text-center relative z-10 ${
        isDarkMode ? 'text-white' : 'text-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div
            className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ marginTop: '5rem' }}
          >
            <div className={`inline-flex items-center backdrop-blur-sm px-6 py-3 rounded-full mb-6 ${
              isDarkMode 
                ? 'bg-[#1A1A1A]/50 border border-[#FF4C1B]/20' 
                : 'bg-white/10'
            }`}>
              <Sparkles className={`w-5 h-5 mr-2 ${
                isDarkMode ? 'text-[#FF4C1B]' : 'text-yellow-300'
              }`} />
              <span className={`text-lg ${
                isDarkMode ? 'text-[#FF4C1B]' : 'text-white'
              }`}>
                Suswagatam to Tamagno 🦇!
              </span>
            </div>
          </div>

          {/* Profile Picture */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className={`absolute inset-0 rounded-full animate-pulse ${
                  isDarkMode 
                    ? 'bg-gradient-to-tr from-[#FF4C1B]/20 to-[#FF4C1B]/5' 
                    : 'bg-gradient-to-tr from-white/20 to-white/5'
                }`}></div>
                <img 
                  src="/assets/prf-pic.png" 
                  alt="Tamagno Roy" 
                  className={`w-full h-full object-cover rounded-full border-4 shadow-2xl hover:scale-105 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border-[#FF4C1B]/30 hover:shadow-[0_0_30px_#FF4C1B]' 
                      : 'border-white/30'
                  }`}
                  style={{
                    filter: isDarkMode ? 'drop-shadow(0 0 15px #FF4C1B)' : 'none'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={`w-full h-full rounded-full border-4 shadow-2xl backdrop-blur-sm flex items-center justify-center text-4xl font-bold hidden ${
                  isDarkMode 
                    ? 'border-[#FF4C1B]/30 bg-[#1A1A1A]/50 text-[#FF4C1B]' 
                    : 'border-white/30 bg-white/10 text-white'
                }`}>
                  TR
                </div>
              </div>
              {/* Floating elements around profile */}
              <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce flex items-center justify-center ${
                isDarkMode ? 'bg-[#FF4C1B] shadow-[0_0_10px_#FF4C1B]' : 'bg-yellow-300'
              }`}>
                ⚡
              </div>
              <div className={`absolute -bottom-2 -left-4 w-6 h-6 rounded-full animate-pulse flex items-center justify-center ${
                isDarkMode ? 'bg-[#FF4C1B]/70 shadow-[0_0_8px_#FF4C1B]' : 'bg-pink-300'
              }`}>
                💡
              </div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 hover:scale-105 transition-transform duration-300 ${
              isDarkMode 
                ? 'text-white' 
                : 'bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent'
            }`}
            style={{
              textShadow: isDarkMode ? '0 0 20px #FF4C1B' : 'none'
            }}>
              Tamagno Roy
            </h1>
            <div className="relative">
              <p className={`text-2xl md:text-3xl mb-8 ${
                isDarkMode ? 'text-[#B3B3B3]' : 'text-white/90'
              }`}>
                AI/ML Enthusiast & Frontend Developer
              </p>
              <div className="absolute -right-8 top-0 text-2xl animate-bounce">🚀</div>
            </div>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-[#B3B3B3]' : 'text-white/80'
            }`}>
              Passionate about building innovative solutions with cutting-edge technology. 
              Transforming complex problems into elegant, user-friendly applications that make a difference.
              <span className="inline-block ml-2">🎯</span>
            </p>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 mb-10 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Github, href: "https://github.com/tamo2005", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tamagno-roy-2ab072290/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tamagnoroy.roy2005@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a 
                key={index}
                href={href}
                className={`group relative backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A]/50 hover:bg-[#FF4C1B]/20 hover:shadow-[0_0_15px_#FF4C1B] border border-[#FF4C1B]/20' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className={`w-6 h-6 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'text-white group-hover:text-[#FF4C1B]' : 'text-white'
                }`} />
                <span className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 rounded whitespace-nowrap ${
                  isDarkMode ? 'bg-[#0D0D0D]/80 text-white' : 'bg-black/50 text-white'
                }`}>
                  {label}
                </span>
              </a>
            ))}
          </div>
          
          {/* Download CV Button */}
          <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={handleDownloadCV}
              className={`group relative px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                isDarkMode 
                  ? 'bg-[#FF4C1B] text-white hover:bg-[#FF3C00] shadow-[0_0_20px_#FF4C1B] hover:shadow-[0_0_30px_#FF4C1B]' 
                  : 'bg-white text-orange-600 hover:bg-orange-50'
              }`}
            >
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white to-yellow-100' 
                  : 'bg-gradient-to-r from-orange-400 to-orange-600'
              }`}></div>
            </button>
          </div>

          {/* Fun fact */}
          <div className={`mt-12 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`inline-flex items-center backdrop-blur-sm px-6 py-3 rounded-full ${
              isDarkMode 
                ? 'bg-[#1A1A1A]/30 border border-[#FF4C1B]/10' 
                : 'bg-white/5'
            }`}>
              <Heart className={`w-4 h-4 mr-2 ${
                isDarkMode ? 'text-[#FF4C1B]' : 'text-red-400'
              }`} />
              <span className={`text-sm ${
                isDarkMode ? 'text-[#B3B3B3]' : 'text-white/80'
              }`}>
                Turning wild ideas into code since 2023
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          isDarkMode ? 'border-[#FF4C1B]/30' : 'border-white/30'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
            isDarkMode ? 'bg-[#FF4C1B]/60' : 'bg-white/60'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
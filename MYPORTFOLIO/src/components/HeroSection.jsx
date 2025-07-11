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
    <section className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center relative overflow-hidden">
    {/* Simplified background elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-white/8 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/12 rounded-full animate-bounce delay-500"></div>
          
          {/* Reduced floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
            />
          ))}
        </div>
              
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Message */}
            <div
            className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ marginTop: '5rem' }}
            >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-lg">Welcome to my digital world!</span>
            </div>
            </div>

            {/* Profile Picture */}
            <div className={`mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-white/5 rounded-full animate-pulse"></div>
                <img 
                src="/assets/prf-pic.png" 
                alt="Tamagno Roy" 
                className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-all duration-300"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-4xl font-bold hidden">
                  TR
                </div>
              </div>
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce flex items-center justify-center">
                ⚡
              </div>
              <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-pink-300 rounded-full animate-pulse flex items-center justify-center">
                💡
              </div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ">
              Tamagno Roy
            </h1>
            <div className="relative">
              <p className="text-2xl md:text-3xl mb-8 opacity-90">
                AI/ML Enthusiast & Frontend Developer
              </p>
              <div className="absolute -right-8 top-0 text-2xl animate-bounce">🚀</div>
            </div>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed">
              Building the future with code, one algorithm at a time. 
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
                className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                  {label}
                </span>
              </a>
            ))}
          </div>
          
          {/* Download CV Button */}
          <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={handleDownloadCV}
              className="group relative bg-white text-orange-600 px-10 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Fun fact */}
          <div className={`mt-12 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm opacity-80">Turning wild ideas into code since 2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
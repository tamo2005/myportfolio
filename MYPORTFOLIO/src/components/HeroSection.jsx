import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Sparkles, Heart, Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/CV_TAMAGNO.pdf';
    link.download = 'CV_TAMAGNO.pdf';
    link.click();
  };

  const handleScheduleMeeting = () => {
    // Opens the Google Calendar appointment scheduling iframe in a new window
    const schedulingUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1yqo8o5Rx6xThID3r3a48rHlUceXcwnuxYB_jESVun_ben95EXcHRTxiTJKR_wKsjPAwAE4_2i?gv=true';
    window.open(schedulingUrl, '_blank', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* One UI 7 inspired mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-full pointer-events-none opacity-30 blur-sm transition-all duration-300 ease-out z-10"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Background elements with One UI 7 style */}
      <div className="absolute inset-0 z-5">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#FF6B47]/20 to-[#FF4500]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-[#FF8C42]/15 to-[#FF6347]/8 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-br from-[#FFB347]/25 to-[#FF7F50]/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-[#FF6B47]/30 to-[#FF4500]/15 rounded-full blur-xl animate-bounce delay-500"></div>
        
        {/* One UI 7 style geometric shapes */}
        <div className="absolute left-10 top-1/4 w-1 h-40 bg-gradient-to-b from-transparent via-[#FF6B47]/50 to-transparent opacity-40 animate-pulse"></div>
        <div className="absolute right-16 top-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-[#FF8C42]/40 to-transparent opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute left-1/4 bottom-32 w-1 h-28 bg-gradient-to-b from-transparent via-[#FF6B47]/30 to-transparent opacity-35 animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#FF6B47] to-[#FF4500] rounded-full animate-ping opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              filter: 'drop-shadow(0 0 6px #FF6B47)'
            }}
          />
        ))}
      </div>
              
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message - One UI 7 style */}
          <div
            className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ marginTop: '5rem' }}
          >
            <div className="inline-flex items-center backdrop-blur-one-ui px-6 py-3 rounded-3xl mb-6 border border-[#FF6B47]/20">
              <Sparkles className="w-5 h-5 mr-2 text-[#FF6B47] animate-pulse" />
              <span className="text-lg text-white font-medium">
                Welcome to Tamagno's Universe!
              </span>
            </div>
          </div>

          {/* Profile Picture - One UI 7 enhanced */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative inline-block">
              <div className="w-52 h-52 mx-auto mb-6 relative">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500] p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-[#0A0A0A]"></div>
                </div>
                <img 
                  src="/assets/prf-pic.png" 
                  alt="Tamagno Roy" 
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full hover:scale-105 transition-all duration-300 glow-orange-strong"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full backdrop-blur-md bg-[#1A1A1A]/50 items-center justify-center text-4xl font-bold text-[#FF6B47] hidden">
                  TR
                </div>
              </div>
              {/* One UI 7 floating badges */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500] animate-bounce flex items-center justify-center text-xl glow-orange">
                ⚡
              </div>
              <div className="absolute -bottom-2 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF6347] animate-pulse flex items-center justify-center text-lg glow-orange">
                💡
              </div>
            </div>
          </div>
          
          {/* Name and Title - One UI 7 typography */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-white via-[#FF6B47] to-white bg-clip-text text-transparent leading-tight"
                style={{ textShadow: '0 0 40px rgba(255, 107, 71, 0.5)' }}>
              Tamagno Roy
            </h1>
            <div className="relative">
              <p className="text-2xl md:text-3xl mb-8 text-gray-300 font-light">
                AI/ML Enthusiast & Frontend Developer
              </p>
              <div className="absolute -right-8 top-0 text-3xl animate-bounce">🚀</div>
            </div>
          </div>

          {/* Description - One UI 7 style */}
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-400 font-light">
              Passionate about building innovative solutions with cutting-edge technology. 
              Transforming complex problems into elegant, user-friendly applications that make a real difference.
              <span className="inline-block ml-2">🎯</span>
            </p>
          </div>

          {/* Action Buttons - One UI 7 design */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={handleDownloadCV}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-3xl font-semibold transition-all duration-300 hover:scale-105 glow-orange hover:glow-orange-strong overflow-hidden text-white min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white to-yellow-100 rounded-3xl"></div>
            </button>
            
            <button 
              onClick={handleScheduleMeeting}
              className="group relative px-8 py-4 bg-transparent border-2 border-[#FF6B47] rounded-3xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#FF6B47]/10 text-white min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Schedule Meeting
              </span>
              <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>

          {/* Social Links - One UI 7 enhanced */}
          <div className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Github, href: "https://github.com/tamo2005", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tamagno-roy-2ab072290/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tamagnoroy.roy2005@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a 
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-one-ui p-4 rounded-3xl transition-all duration-300 hover:scale-110 hover:rotate-6 border border-[#333]/50 hover:border-[#FF6B47]/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-[#FF6B47] group-hover:scale-110 transition-all duration-300" />
                <span className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 bg-[#1A1A1A]/90 text-white rounded-xl whitespace-nowrap backdrop-blur-md border border-[#333]/50">
                  {label}
                </span>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B47]/10 to-[#FF4500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Fun fact - One UI 7 style */}
          <div className={`transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center backdrop-blur-one-ui px-6 py-3 rounded-3xl border border-[#FF6B47]/10">
              <Heart className="w-4 h-4 mr-2 text-[#FF6B47] animate-pulse" />
              <span className="text-sm text-gray-400 font-light">
                Turning wild ideas into code since 2023
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* One UI 7 scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FF6B47]/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-[#FF6B47] to-[#FF4500] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* One UI 7 style floating status */}
      <div className="absolute bottom-6 right-6 backdrop-blur-one-ui px-4 py-2 rounded-2xl border border-[#333]/50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Available for work</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
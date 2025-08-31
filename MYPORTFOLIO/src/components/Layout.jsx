import React from 'react';

// Layout component with permanent dark theme and One UI 7 inspired design
const Layout = ({ children }) => {
  return (
    <div className="relative bg-[#0A0A0A] text-white min-h-screen overflow-hidden">
      {/* One UI 7 inspired background with subtle animations */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#151515] to-[#0A0A0A]"></div>
        
        {/* Floating orbs with One UI 7 style */}
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-gradient-to-br from-[#FF6B47]/20 to-[#FF4500]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-gradient-to-br from-[#FF8C42]/15 to-[#FF6347]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[20%] left-[8%] w-48 h-48 bg-gradient-to-br from-[#FFB347]/25 to-[#FF7F50]/12 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* One UI 7 style flowing lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF6B47]/30 to-transparent transform -skew-y-12 animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF8C42]/20 to-transparent transform skew-y-12 animate-pulse delay-1500"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 25px 25px, #FF6B47 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* One UI 7 style floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#FF6B47]/40 to-[#FF4500]/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'drop-shadow(0 0 6px #FF6B47)'
            }}
          />
        ))}
      </div>

      {/* Content wrapper with proper z-index */}
      <main className="relative z-10">
        {children}
      </main>

      {/* One UI 7 inspired custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-20px) rotate(120deg);
            opacity: 1;
          }
          66% { 
            transform: translateY(10px) rotate(240deg);
            opacity: 0.8;
          }
        }
        
        /* One UI 7 style blur effects */
        .backdrop-blur-one-ui {
          backdrop-filter: blur(20px) saturate(180%);
          background-color: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* One UI 7 inspired glow effects */
        .glow-orange {
          box-shadow: 0 0 20px rgba(255, 107, 71, 0.3);
        }
        
        .glow-orange-strong {
          box-shadow: 0 0 40px rgba(255, 107, 71, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Layout;
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Footer = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, 300);
    renderer.setClearColor(0x000000, 0);
    sceneRef.current = scene;

    // Create floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 20;
      
      // Orange gradient colors
      const t = Math.random();
      colors[i] = 0.98 + t * 0.02;     // Red
      colors[i + 1] = 0.45 + t * 0.35; // Green  
      colors[i + 2] = 0.09 + t * 0.16; // Blue
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create animated waves
    const waveGeometry = new THREE.PlaneGeometry(20, 2, 50, 10);
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.1,
      wireframe: true
    });
    
    const wave1 = new THREE.Mesh(waveGeometry, waveMaterial);
    const wave2 = new THREE.Mesh(waveGeometry, waveMaterial.clone());
    wave2.material.color.setHex(0xea580c);
    wave2.position.z = -1;
    
    scene.add(wave1, wave2);

    camera.position.z = 5;
    camera.position.y = 1;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      
      // Animate waves
      const time = Date.now() * 0.001;
      const positions1 = wave1.geometry.attributes.position.array;
      const positions2 = wave2.geometry.attributes.position.array;
      
      for (let i = 0; i < positions1.length; i += 3) {
        const x = positions1[i];
        positions1[i + 1] = Math.sin(x * 0.5 + time) * 0.3;
        positions2[i + 1] = Math.sin(x * 0.3 + time * 1.5) * 0.2;
      }
      
      wave1.geometry.attributes.position.needsUpdate = true;
      wave2.geometry.attributes.position.needsUpdate = true;
      
      // Move particles
      const particlePositions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particlePositions.length; i += 3) {
        particlePositions[i + 1] += Math.sin(time + particlePositions[i]) * 0.001;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = 300;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Three.js', icon: '🎯' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Tailwind', icon: '🎨' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/tamo2005' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/tamo2005/' },
    { name: 'Email', icon: '✉️', url: 'mailto:tamagnoroy.roy2005@gmail.com' },
    { name: 'Coffee', icon: '☕', url: 'https://media.licdn.com/dms/image/v2/D4E12AQF-7Rswko1D8Q/article-cover_image-shrink_600_2000/B4EZdUVHuqG4AQ-/0/1749466512675?e=2147483647&v=beta&t=7izzTaqYzAQjh289buk1sOD17ArztSezK7QQOJM-7rU' }
  ];

  return (
    <footer 
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Three.js Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ height: '300px' }}
      />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
              Tamagno Roy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting digital experiences with passion, precision, and probably too much caffeine ☕
            </p>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Built With</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative bg-white/10 backdrop-blur-md rounded-lg p-3 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isHovered ? 'pulse 2s infinite' : 'none'
                  }}
                >
                  <div className="text-xl mb-1">{tech.icon}</div>
                  <div className="text-xs text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group relative w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isHovered ? `bounce 1s infinite ${index * 0.1}s` : 'none'
                  }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-800 px-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © 2025 Tamagno Roy. Built with React, Three.js, Vite & Tailwind CSS.
          </p>
          <p className="text-xs text-gray-500">
            Designed with ❤️ and some nights of sleep (occasionally) 😴
          </p>
          <p className="text-xs text-orange-400/70">
            Last updated: {currentTime.toLocaleTimeString()} | Status: Caffeinated ☕
          </p>
        </div>

        {/* Floating action button */}
        <button 
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 hover:rotate-180 flex items-center justify-center text-white text-xl z-20"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          🚀
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GraduationCap, Trophy, Code, Zap, Calendar } from 'lucide-react';
import * as THREE from 'three';

const AboutSection = () => {
  const mountRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sceneRef = useRef(null);
  const animationRef = useRef(null);
  const mouseTargetRef = useRef({ x: 0, y: 0 });

  // Throttled mouse handler
  const handleMouseMove = useCallback((event) => {
    mouseTargetRef.current = {
      x: (event.clientX - window.innerWidth / 2) * 0.001,
      y: -(event.clientY - window.innerHeight / 2) * 0.001
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false,
      powerPreference: "high-performance"
    });
    
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    updateSize();
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced particles with One UI 7 colors
    const particleGeometry = new THREE.BufferGeometry();
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 60;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * (isMobile ? 12 : 18);
      const y = (Math.random() - 0.5) * (isMobile ? 12 : 18);
      const z = (Math.random() - 0.5) * (isMobile ? 12 : 18);
      
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      // One UI 7 inspired orange gradient colors
      const color = new THREE.Color();
      const hue = 0.08 + Math.random() * 0.05; // Orange range
      const saturation = 0.8 + Math.random() * 0.2;
      const lightness = 0.5 + Math.random() * 0.3;
      color.setHSL(hue, saturation, lightness);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.008
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // One UI 7 style geometric shapes
    const shapes = [];
    const shapeCount = isMobile ? 3 : 6;
    for (let i = 0; i < shapeCount; i++) {
      let geometry;
      if (i % 3 === 0) {
        geometry = new THREE.TetrahedronGeometry(isMobile ? 0.15 : 0.2, 0);
      } else if (i % 3 === 1) {
        geometry = new THREE.OctahedronGeometry(isMobile ? 0.12 : 0.16, 0);
      } else {
        geometry = new THREE.IcosahedronGeometry(isMobile ? 0.1 : 0.14, 0);
      }
      
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xFF6B47 : 0xFF4500,
        transparent: true,
        opacity: 0.7,
        wireframe: true
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * (isMobile ? 8 : 12),
        (Math.random() - 0.5) * (isMobile ? 8 : 12),
        (Math.random() - 0.5) * (isMobile ? 8 : 12)
      );
      
      shapes.push({
        mesh: shape,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        }
      });
      
      scene.add(shape);
    }

    camera.position.z = 5;
    
    // Store references
    sceneRef.current = { 
      scene, 
      camera, 
      renderer, 
      shapes, 
      particles, 
      velocities
    };

    // Enhanced animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (!sceneRef.current) return;

      const { particles, velocities, shapes, camera, renderer, scene } = sceneRef.current;
      
      // Animate particles with enhanced movement
      const positionArray = particles.geometry.attributes.position.array;
      
      for (let i = 0; i < positionArray.length; i += 3) {
        const idx = i / 3;
        
        positionArray[i] += velocities[idx].x;
        positionArray[i + 1] += velocities[idx].y;
        positionArray[i + 2] += velocities[idx].z;

        // Boundary checks with smooth transitions
        if (Math.abs(positionArray[i]) > 10) velocities[idx].x *= -0.8;
        if (Math.abs(positionArray[i + 1]) > 10) velocities[idx].y *= -0.8;
        if (Math.abs(positionArray[i + 2]) > 10) velocities[idx].z *= -0.8;
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Animate shapes with One UI 7 style
      shapes.forEach(({ mesh, rotationSpeed }) => {
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
        
        // Add subtle pulsing effect
        const scale = 1 + Math.sin(Date.now() * 0.001) * 0.1;
        mesh.scale.setScalar(scale);
      });

      // Smooth camera movement with mouse interaction
      camera.position.x += (mouseTargetRef.current.x - camera.position.x) * 0.05;
      camera.position.y += (mouseTargetRef.current.y - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    // Event handlers
    const handleResize = () => {
      if (sceneRef.current) {
        const { camera, renderer } = sceneRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js resources
      if (sceneRef.current) {
        const { scene, renderer } = sceneRef.current;
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        renderer.dispose();
      }
    };
  }, [handleMouseMove]);

  const badges = [
    { 
      icon: GraduationCap, 
      text: "Open for any opportunities", 
      color: "from-[#FF6B47] to-[#FF4500]",
      description: "Always ready to learn and grow"
    },
    { 
      icon: Trophy, 
      text: "FAV SONG - Maula Mere Maula by Roop Kumar Rathod", 
      color: "from-[#FF8C42] to-[#FF6347]",
      description: "Music that inspires my coding sessions"
    },
    { 
      icon: Code, 
      text: "AI/ML Enthusiast", 
      color: "from-[#FF6B47] to-[#FF4500]",
      description: "Passionate about artificial intelligence"
    },
    { 
      icon: Zap, 
      text: "Quick Learner & Team Player", 
      color: "from-[#FFB347] to-[#FF7F50]",
      description: "Adaptable and collaborative mindset"
    }
  ];

  const handleScheduleMeeting = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI7-YpGVUpNnvnCPjZ7-qVB_uJuWvJhC5sDqXJzQm8f_7KhLkY6f1XdvnY8xnZ_Q', '_blank');
  };

  return (
    <section 
      id="about" 
      className="relative pt-24 pb-20 bg-[#0A0A0A] text-white overflow-hidden"
    >
      {/* Three.js Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ zIndex: 1 }}
      />

      {/* One UI 7 animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r from-[#FF6B47]/20 to-[#FF4500]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-[#FF8C42]/15 to-[#FF6347]/8 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-[#FFB347]/25 to-[#FF7F50]/12 rounded-full blur-xl animate-ping"></div>
        
        {/* One UI 7 style accent elements */}
        <div className="absolute top-10 right-1/3 w-6 h-6 bg-[#FF6B47] rounded-full opacity-60 animate-pulse glow-orange"></div>
        <div className="absolute bottom-32 left-1/5 w-8 h-8 bg-[#FF8C42] rounded-full opacity-40 animate-bounce glow-orange"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-[#FF6B47] to-white bg-clip-text text-transparent mb-8 sm:mb-12 text-center transition-all duration-700 hover:scale-105"
              style={{ textShadow: '0 0 30px rgba(255, 107, 71, 0.3)' }}>
            About Me
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-one-ui rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 border border-[#333]/30 hover:border-[#FF6B47]/30 transition-all duration-500 hover:scale-[1.02] glow-orange">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                <p className="transform transition-all duration-700 delay-200 hover:text-white hover:translate-x-2">
                  So... I am a 3rd-year Computer Science student at <strong className="text-[#FF6B47] font-semibold hover:text-[#FF4500] transition-colors duration-300">RCC IIT</strong>, Kolkata, with a passion for AI/ML and full-stack development. I have a strong foundation in Python, JavaScript, and React.js, and I am always eager to learn new technologies and improve my skills.
                </p>
                
                <p className="transform transition-all duration-700 delay-400 hover:text-white hover:translate-x-2">
                  I have worked on various projects, including an AI-powered marks evaluation system called <strong className="text-[#FF6B47] font-semibold hover:text-[#FF4500] transition-colors duration-300">Gradify.AI</strong>, and I have interned as a Frontend Developer at <strong className="text-[#FF6B47] font-semibold hover:text-[#FF4500] transition-colors duration-300">JAWD Lifestyles</strong>. I am also actively involved in competitive programming and have done many other projects while working in a team.
                </p>
                
                <p className="transform transition-all duration-700 delay-600 hover:text-white hover:translate-x-2">
                  And now the real me, I am too much eager to work under some good guidance and I am genuinely seeking for it. If you can help me with that, please do reach out to me. I am always open to new opportunities and challenges that can help me grow as a developer and as a person. I am particularly interested in Academic Research, AI/ML, and Full Stack Development.
                </p>
                
                <p className="transform transition-all duration-700 delay-800 hover:text-white hover:translate-x-2">
                  I am also a quick learner and a team player, and I believe that collaboration is key to success in any project. I am excited to connect with like-minded individuals and contribute to meaningful projects that make a difference.
                </p>
              </div>

              {/* Schedule Meeting CTA inside about card */}
              <div className="mt-8 pt-6 border-t border-[#333]/30">
                <button
                  onClick={handleScheduleMeeting}
                  className="w-full sm:w-auto mx-auto flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-2xl font-semibold transition-all duration-300 hover:scale-105 glow-orange hover:glow-orange-strong text-white"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Let's Schedule a Meeting!</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`group relative flex items-center backdrop-blur-one-ui bg-gradient-to-r ${badge.color}/10 px-4 sm:px-6 py-4 sm:py-5 rounded-3xl border border-[#333]/30 hover:border-[#FF6B47]/40 transition-all duration-500 hover:scale-105 cursor-pointer transform overflow-hidden ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${badge.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className={`relative z-10 p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${badge.color} shadow-lg group-hover:scale-110 transition-transform duration-300 mr-3 sm:mr-4 flex-shrink-0`}>
                    <badge.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="relative z-10 flex-1 min-w-0">
                    <span className="font-semibold text-white group-hover:text-[#FF6B47] transition-colors duration-300 text-sm sm:text-base block">
                      {badge.text}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1 block">
                      {badge.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* One UI 7 enhanced floating action elements */}
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 group">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none glow-orange hover:glow-orange-strong">
          <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:animate-bounce" />
        </div>
        <div className="absolute -top-12 sm:-top-14 -left-20 sm:-left-24 backdrop-blur-one-ui px-4 sm:px-5 py-2 sm:py-3 rounded-2xl border border-[#333]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform scale-95 group-hover:scale-100 text-sm sm:text-base">
          <span className="font-semibold text-[#FF6B47]">Ready to collaborate!</span>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1A1A1A]/90"></div>
        </div>
      </div>

      {/* One UI 7 style progress indicators */}
      <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2 sm:space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FF6B47] rounded-full animate-bounce glow-orange"
              style={{ 
                animationDelay: `${i * 200}ms`,
                filter: 'drop-shadow(0 0 8px #FF6B47)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
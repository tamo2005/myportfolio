import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GraduationCap, Trophy, Code, Zap, Calendar } from 'lucide-react';
import * as THREE from 'three';
import { openCalendar } from '../utils/constants.js';

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
      text: 'NPTEL Research Intern — IIT Ropar · Prof. Sudarshan Iyengar',
      color: 'from-[#FF6B47] to-[#FF4500]',
      description: 'Summer Internship 2026 · MERN Stack & AI · 8 weeks virtual'
    },
    {
      icon: Trophy,
      text: '5× NPTEL Elite — IIT Madras · IIT Kanpur · IIT Kharagpur',
      color: 'from-[#FF8C42] to-[#FF6347]',
      description: 'Discipline Stars recipient across CS, AI, and algorithms courses'
    },
    {
      icon: Code,
      text: 'Building Yaksha — AI FAQ Engine for Students',
      color: 'from-[#FF6B47] to-[#FF4500]',
      description: 'NLP-powered chat system for course Q&A · IIT Ropar project'
    },
    {
      icon: Zap,
      text: 'Open to Research Collaborations',
      color: 'from-[#FFB347] to-[#FF7F50]',
      description: 'Interested in AI engineering, Linear Algebra, and systems research'
    }
  ];



  return (
    <section 
      id="about" 
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Three.js Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ zIndex: 1 }}
      />

      {/* Subtle ambient orbs — no neon, no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(232,103,58,0.05) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(232,103,58,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="section-container relative z-10">
        <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="section-label text-center">Who I Am</p>
          <h2 className="section-heading text-center mb-12">
            About Me<span className="dot-accent">.</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="card card-accent rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12">
              <div className="space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--txt-2)' }}>
                <p className="transform transition-all duration-700 delay-200 hover:text-white hover:translate-x-1">
                  I am a 3rd-year Computer Science student at <strong className="text-[#FF6B47] font-semibold">RCC Institute of Information Technology</strong>, Kolkata. I am currently an <strong className="text-[#FF6B47] font-semibold">NPTEL Summer Research Intern at IIT Ropar</strong>, mentored directly by <strong className="text-[#FF6B47] font-semibold">Prof. Sudarshan Iyengar</strong> — working on MERN stack engineering, AI systems, and mathematical foundations including Linear Algebra.
                </p>
                
                <p className="transform transition-all duration-700 delay-400 hover:text-white hover:translate-x-1">
                  At IIT Ropar I am building <strong className="text-[#FF6B47] font-semibold">Yaksha</strong> — an intelligent FAQ chat engine that lets students query course content and get instant, context-aware answers. Beyond that I have built an <strong className="text-[#FF6B47] font-semibold">AI website generator</strong> with a 10-module pipeline (FastAPI + Next.js), and led an <strong className="text-[#FF6B47] font-semibold">email marketing platform</strong> at JAWD Lifestyles.
                </p>
                
                <p className="transform transition-all duration-700 delay-600 hover:text-white hover:translate-x-1">
                  I have completed <strong className="text-[#FF6B47] font-semibold">5 NPTEL courses with Elite grade</strong> from IIT Madras, IIT Kanpur, and IIT Kharagpur — covering Algorithms, IoT, Data Structures, and Programming — and received the <strong className="text-[#FF6B47] font-semibold">NPTEL Discipline Stars</strong> recognition. I am drawn to problems at the intersection of AI, systems design, and applied mathematics.
                </p>
              </div>

              <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <button
                  onClick={openCalendar}
                  className="btn-primary"
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
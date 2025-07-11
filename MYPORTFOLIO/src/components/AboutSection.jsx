import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GraduationCap, Trophy, Code, Zap } from 'lucide-react';
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
      antialias: false, // Disable for performance
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
    mountRef.current.appendChild(renderer.domElement);

    // Reduced particles for better performance
    const particleGeometry = new THREE.BufferGeometry();
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50; // Further reduce for mobile
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * (isMobile ? 10 : 15);
      const y = (Math.random() - 0.5) * (isMobile ? 10 : 15);
      const z = (Math.random() - 0.5) * (isMobile ? 10 : 15);
      
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
      
      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;

      // Orange gradient colors
      const color = new THREE.Color();
      color.setHSL(0.08 + Math.random() * 0.05, 0.8, 0.6);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.005
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.06 : 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Reduced geometric shapes
    const shapes = [];
    const shapeCount = isMobile ? 2 : 4;
    for (let i = 0; i < shapeCount; i++) { // Further reduce for mobile
      const geometry = i % 2 === 0 
        ? new THREE.TetrahedronGeometry(isMobile ? 0.1 : 0.15, 0)
        : new THREE.OctahedronGeometry(isMobile ? 0.08 : 0.12, 0);
      
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xf97316 : 0xea580c,
        transparent: true,
        opacity: 0.6,
        wireframe: true
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * (isMobile ? 6 : 8),
        (Math.random() - 0.5) * (isMobile ? 6 : 8),
        (Math.random() - 0.5) * (isMobile ? 6 : 8)
      );
      
      shapes.push({
        mesh: shape,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
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
      velocities, 
      originalPositions 
    };

    // Optimized animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (!sceneRef.current) return;

      const { particles, velocities, shapes, camera, renderer, scene } = sceneRef.current;
      
      // Animate particles with boundary checks
      const positionArray = particles.geometry.attributes.position.array;
      
      for (let i = 0; i < positionArray.length; i += 3) {
        const idx = i / 3;
        
        positionArray[i] += velocities[idx].x;
        positionArray[i + 1] += velocities[idx].y;
        positionArray[i + 2] += velocities[idx].z;

        // Efficient boundary check
        if (Math.abs(positionArray[i]) > 8) velocities[idx].x *= -1;
        if (Math.abs(positionArray[i + 1]) > 8) velocities[idx].y *= -1;
        if (Math.abs(positionArray[i + 2]) > 8) velocities[idx].z *= -1;
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Animate shapes
      shapes.forEach(({ mesh, rotationSpeed }) => {
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
      });

      // Smooth camera movement
      camera.position.x += (mouseTargetRef.current.x - camera.position.x) * 0.02;
      camera.position.y += (mouseTargetRef.current.y - camera.position.y) * 0.02;

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

    // Throttled mouse event and resize handler
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
    { icon: GraduationCap, text: "Open for any oppurtinities... ", color: "from-orange-400 to-orange-600" },
    { icon: Trophy, text: "FAV SONG - Maula Mere by Rup Kumar Rathod", color: "from-orange-500 to-orange-700" },
    { icon: Code, text: "AI/ML Enthusiast", color: "from-orange-400 to-orange-600" },
    { icon: Zap, text: "Quick Learner & Team Player", color: "from-orange-500 to-orange-700" }
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden"
    >
      {/* Three.js Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Animated background elements with smoother animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full opacity-15 animate-ping"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-25 animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-6 sm:mb-8 text-center transition-all duration-700 hover:scale-105">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-orange-200/50 shadow-2xl hover:shadow-orange-200/60 transition-all duration-500 hover:scale-[1.02] hover:bg-white/50">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p className="transform transition-all duration-700 delay-200 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2">
                  So... I am a 3rd-year Computer Science student at <strong className="text-orange-600 hover:text-orange-800 transition-colors duration-300">RCC IIT</strong>, Kolkata, with a passion for AI/ML and full-stack development. I have a strong foundation in Python, JavaScript, and React.js, and I am always eager to learn new technologies and improve my skills.
                </p>
                
                <p className="transform transition-all duration-700 delay-400 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2">
                  I have worked on various projects, including an AI-powered marks evaluation system called <strong className="text-orange-600 hover:text-orange-800 transition-colors duration-300">Gradify.AI</strong>, and I have interned as a Frontend Developer at <strong className="text-orange-600 hover:text-orange-800 transition-colors duration-300">JAWD Lifestyles</strong>. I am also actively involved in competitive programming and have done many other project while working in a team, and I have a keen interest in exploring the latest trends in AI and machine learning.
                </p>
                
                <p className="transform transition-all duration-700 delay-600 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2">
                  And now the real me... I am too much eager to work under some good guidance and I am genuinely seeking for it... If you can help me with that, please do reach out to me. I am always open to new opportunities and challenges that can help me grow as a developer and as a person. I am particularly interested in Academic Research, AI/ML, and Full Stack Development, and I am looking for internships or projects that align with my interests and skills.
                </p>
                
                <p className="transform transition-all duration-700 delay-800 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2">
                  I am also a quick learner and a team player, and I believe that collaboration is key to success in any project. I am excited to connect with like-minded individuals and contribute to meaningful projects that make a difference.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`group flex items-center backdrop-blur-sm bg-gradient-to-r ${badge.color} bg-opacity-20 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-orange-300/30 shadow-lg hover:shadow-orange-300/50 transition-all duration-500 hover:scale-105 hover:bg-opacity-30 cursor-pointer transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <badge.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-orange-100 group-hover:text-white transition-colors duration-300 group-hover:scale-110 flex-shrink-0" />
                  <span className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-sm sm:text-base">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating action elements */}
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 group">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none hover:shadow-orange-500/50">
          <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:animate-bounce" />
        </div>
        <div className="absolute -top-10 sm:-top-12 -left-16 sm:-left-20 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform scale-95 group-hover:scale-100 text-xs sm:text-sm">
          <span className="font-medium text-orange-600">Ready to collaborate!</span>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"></div>
        </div>
      </div>

      {/* Additional subtle animations */}
      <div className="absolute top-6 sm:top-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1 sm:space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Send, MapPin, Coffee, Heart, Sparkles, Zap, CheckCircle, ArrowRight, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import * as THREE from 'three';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedInput, setFocusedInput] = useState(null);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const meshesRef = useRef([]);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_v5sbc2o';
  const EMAILJS_TEMPLATE_ID = 'template_axh5k2k';
  const EMAILJS_PUBLIC_KEY = 'xJbHpN50t8_eFAeAG';

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Enhanced Three.js background animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    sceneRef.current = scene;

    // Create floating geometric shapes with orange gradient colors
    const geometries = [
      new THREE.BoxGeometry(0.4, 0.4, 0.4),
      new THREE.SphereGeometry(0.25, 16, 16),
      new THREE.ConeGeometry(0.25, 0.5, 8),
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.3),
      new THREE.IcosahedronGeometry(0.25)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xea580c, transparent: true, opacity: 0.5 }),
      new THREE.MeshBasicMaterial({ color: 0xfb923c, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.5 }),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.3 })
    ];

    const meshes = [];
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      
      // Store initial position for wave effect
      mesh.userData = {
        initialY: mesh.position.y,
        speed: 0.5 + Math.random() * 1.5,
        amplitude: 0.5 + Math.random() * 1.5
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    meshesRef.current = meshes;
    camera.position.z = 8;

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      meshes.forEach((mesh, index) => {
        // Rotation animations
        mesh.rotation.x += 0.005 * (index % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.008 * (index % 3 === 0 ? 1 : -1);
        mesh.rotation.z += 0.003 * (index % 4 === 0 ? 1 : -1);
        
        // Wave motion
        mesh.position.y = mesh.userData.initialY + 
          Math.sin(time * mesh.userData.speed + index * 0.5) * mesh.userData.amplitude;
        
        // Floating motion
        mesh.position.x += Math.sin(time * 0.3 + index) * 0.001;
        mesh.position.z += Math.cos(time * 0.2 + index) * 0.001;
        
        // Pulsing effect
        const scale = 1 + Math.sin(time * 2 + index * 0.8) * 0.1;
        mesh.scale.setScalar(scale);
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Mouse interaction with Three.js
  useEffect(() => {
    if (!meshesRef.current.length) return;
    
    const normalizedX = (mousePosition.x / window.innerWidth) * 2 - 1;
    const normalizedY = -(mousePosition.y / window.innerHeight) * 2 + 1;
    
    meshesRef.current.forEach((mesh, index) => {
      const influence = 0.1 + (index % 3) * 0.05;
      mesh.rotation.x += normalizedY * influence * 0.01;
      mesh.rotation.y += normalizedX * influence * 0.01;
    });
  }, [mousePosition]);

  const socialLinks = [
    { 
      icon: Mail, 
      label: 'Email Me', 
      href: 'mailto:tamagnoroy.roy2005@example.com',
      color: 'from-orange-500 to-red-500',
      description: 'Drop me a line!',
      bgColor: 'bg-orange-50'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/',
      color: 'from-orange-600 to-orange-700',
      description: 'Professional network',
      bgColor: 'bg-orange-100'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/tamo2005',
      color: 'from-orange-700 to-orange-800',
      description: 'Code repository',
      bgColor: 'bg-orange-200'
    }
  ];

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Barrackpur, West Bengal, IN', color: 'text-orange-600' },
    { icon: Coffee, label: 'Status', value: 'Always ready to code', color: 'text-orange-700' },
    { icon: Heart, label: 'Response', value: 'Usually within 24h', color: 'text-orange-800' }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all fields.');
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid email address.');
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');

    try {
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        throw new Error('EmailJS is not loaded. Please try again.');
      }

      // Create formatted message with sender details
      const formattedMessage = `
From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
      `.trim();

      // Send email using EmailJS
      const result = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formattedMessage,
          to_name: 'Tamagno Roy',
          reply_to: formData.email,
          subject: `Portfolio Contact: Message from ${formData.name}`,
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Your message has been sent successfully! I\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 8000);
    }
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-16 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 overflow-hidden min-h-screen"
    >
      {/* Three.js Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-300/20 to-red-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Mouse follower effect */}
      <div 
        className="absolute w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full pointer-events-none opacity-30 blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      <div className="relative container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-orange-500 mr-3 animate-spin" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Let's Create Magic Together
              </h2>
              <Zap className="w-8 h-8 text-orange-500 ml-3 animate-bounce" />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into extraordinary digital experiences. I'm passionate about crafting 
              innovative solutions that make a difference.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-orange-700">
                <MessageCircle className="w-6 h-6 mr-3" />
                Start a Conversation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 ${
                      focusedInput === 'name' 
                        ? 'border-orange-500 ring-4 ring-orange-200 transform scale-105' 
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                    placeholder="What should I call you?"
                  />
                  {focusedInput === 'name' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  )}
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 ${
                      focusedInput === 'email' 
                        ? 'border-orange-500 ring-4 ring-orange-200 transform scale-105' 
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {focusedInput === 'email' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  )}
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows="5"
                    required
                    className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none ${
                      focusedInput === 'message' 
                        ? 'border-orange-500 ring-4 ring-orange-200 transform scale-105' 
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                    placeholder="Tell me about your vision, goals, and what you'd like to create together..."
                  />
                  {focusedInput === 'message' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      <span>Sending your message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
              
              {submitStatus === 'success' && (
                <div className="mt-4 text-green-600 text-center font-semibold animate-fade-in bg-green-50 p-4 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                  ✨ {submitMessage}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 text-red-600 text-center font-semibold animate-fade-in bg-red-50 p-4 rounded-xl border border-red-200">
                  <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                  {submitMessage}
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Contact Info Cards */}
            <div className="grid gap-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.label}
                    className="bg-white/80 backdrop-blur-xl rounded-xl p-5 border border-white/60 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{info.label}</div>
                        <div className={`text-sm ${info.color} font-medium`}>{info.value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-orange-700">Connect & Follow</h3>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative block bg-white/80 backdrop-blur-xl rounded-xl p-6 border border-white/60 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${social.bgColor}/20`}
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${social.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-gray-800">{social.label}</div>
                        <div className="text-sm text-gray-600">{social.description}</div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent rounded-xl"></div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-white/60 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Ready to Build Something Extraordinary?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              From concept to launch, I specialize in creating digital experiences that captivate and convert. 
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Web Development
              </span>
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                UI/UX Design
              </span>
              <span className="bg-gradient-to-r from-orange-700 to-red-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                React & Node.js
              </span>
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Custom Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
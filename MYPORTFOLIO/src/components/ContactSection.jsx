import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Send, MapPin, Coffee, Heart, Sparkles, Zap, CheckCircle, ArrowRight, Phone, MessageCircle, AlertCircle, Calendar, Clock, User, Video } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('contact');
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const meshesRef = useRef([]);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_v5sbc2o';
  const EMAILJS_TEMPLATE_ID = 'template_axh5k2k';
  const EMAILJS_PUBLIC_KEY = 'xJbHpN50t8_eFAeAG';

  // Google Calendar booking link
  const CALENDAR_BOOKING_LINK = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wI7-YpGVUpNnvnCPjZ7-qVB_uJuWvJhC5sDqXJzQm8f_7KhLkY6f1XdvnY8xnZ_Q';

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

    // Create floating geometric shapes with One UI 7 colors
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
      new THREE.OctahedronGeometry(0.35),
      new THREE.TetrahedronGeometry(0.35),
      new THREE.IcosahedronGeometry(0.3)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xFF6B47, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xFF4500, transparent: true, opacity: 0.5 }),
      new THREE.MeshBasicMaterial({ color: 0xFF8C42, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xFF6347, transparent: true, opacity: 0.5 }),
      new THREE.MeshBasicMaterial({ color: 0xFFB347, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0xFF7F50, transparent: true, opacity: 0.3 })
    ];

    const meshes = [];
    for (let i = 0; i < 25; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      
      mesh.userData = {
        initialY: mesh.position.y,
        speed: 0.5 + Math.random() * 2,
        amplitude: 0.5 + Math.random() * 2
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    meshesRef.current = meshes;
    camera.position.z = 10;

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.008 * (index % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.012 * (index % 3 === 0 ? 1 : -1);
        mesh.rotation.z += 0.005 * (index % 4 === 0 ? 1 : -1);
        
        mesh.position.y = mesh.userData.initialY + 
          Math.sin(time * mesh.userData.speed + index * 0.5) * mesh.userData.amplitude;
        
        mesh.position.x += Math.sin(time * 0.3 + index) * 0.002;
        mesh.position.z += Math.cos(time * 0.2 + index) * 0.002;
        
        const scale = 1 + Math.sin(time * 2 + index * 0.8) * 0.15;
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

  const socialLinks = [
    { 
      icon: Mail, 
      label: 'Email Me', 
      href: 'mailto:tamagnoroy.roy2005@gmail.com',
      color: 'from-[#FF6B47] to-[#FF4500]',
      description: 'Drop me a line!',
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/tamagno-roy-2ab072290/',
      color: 'from-[#FF8C42] to-[#FF6347]',
      description: 'Professional network',
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/tamo2005',
      color: 'from-[#FFB347] to-[#FF7F50]',
      description: 'Code repository',
    }
  ];

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Barrackpur, West Bengal, IN', color: 'text-[#FF6B47]' },
    { icon: Coffee, label: 'Status', value: 'Always ready to code', color: 'text-[#FF8C42]' },
    { icon: Heart, label: 'Response', value: 'Usually within 24h', color: 'text-[#FFB347]' }
  ];

  const meetingTypes = [
    {
      icon: Video,
      title: 'Video Call Meeting',
      duration: '30 minutes',
      description: 'Perfect for project discussions, code reviews, or technical consultations',
      color: 'from-[#FF6B47] to-[#FF4500]'
    },
    {
      icon: Phone,
      title: 'Quick Chat',
      duration: '15 minutes',
      description: 'Brief conversation about opportunities or quick questions',
      color: 'from-[#FF8C42] to-[#FF6347]'
    },
    {
      icon: User,
      title: 'Coffee & Code',
      duration: '60 minutes',
      description: 'Deep dive into projects, collaboration, or mentorship session',
      color: 'from-[#FFB347] to-[#FF7F50]'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all fields.');
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }

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
      if (!window.emailjs) {
        throw new Error('EmailJS is not loaded. Please try again.');
      }

      const formattedMessage = `
From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
      `.trim();

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

  const handleScheduleMeeting = () => {
    window.open(CALENDAR_BOOKING_LINK, '_blank');
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
      className="relative py-20 bg-[#0A0A0A] text-white overflow-hidden min-h-screen"
    >
      {/* Three.js Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
      
      {/* One UI 7 animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#FF6B47]/15 to-[#FF4500]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-r from-[#FF8C42]/12 to-[#FF6347]/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-r from-[#FFB347]/10 to-[#FF7F50]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Mouse follower effect */}
      <div 
        className="absolute w-8 h-8 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-full pointer-events-none opacity-20 blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      <div className="relative container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#FF6B47] mr-3 animate-spin" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-[#FF6B47] to-white bg-clip-text text-transparent"
                  style={{ textShadow: '0 0 30px rgba(255, 107, 71, 0.3)' }}>
                Let's Connect & Create
              </h2>
              <Zap className="w-8 h-8 text-[#FF6B47] ml-3 animate-bounce" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your ideas into extraordinary digital experiences. I'm passionate about crafting 
              innovative solutions that make a real difference.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="backdrop-blur-one-ui rounded-3xl p-2 border border-[#333]/30">
            <div className="flex">
              {['contact', 'schedule'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white glow-orange'
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]/30'
                  }`}
                >
                  {tab === 'contact' ? (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Meeting</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form / Schedule Meeting */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {activeTab === 'contact' ? (
              <div className="backdrop-blur-one-ui rounded-3xl p-8 border border-[#333]/30 hover:border-[#FF6B47]/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <MessageCircle className="w-6 h-6 mr-3 text-[#FF6B47]" />
                  Start a Conversation
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-4 bg-[#1A1A1A]/60 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-gray-500 ${
                        focusedInput === 'name' 
                          ? 'border-[#FF6B47] ring-4 ring-[#FF6B47]/20 glow-orange' 
                          : 'border-[#333]/50 hover:border-[#FF6B47]/30'
                      }`}
                      placeholder="What should I call you?"
                    />
                    {focusedInput === 'name' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B47] rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-4 bg-[#1A1A1A]/60 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-gray-500 ${
                        focusedInput === 'email' 
                          ? 'border-[#FF6B47] ring-4 ring-[#FF6B47]/20 glow-orange' 
                          : 'border-[#333]/50 hover:border-[#FF6B47]/30'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {focusedInput === 'email' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B47] rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows="5"
                      required
                      className={`w-full px-4 py-4 bg-[#1A1A1A]/60 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none ${
                        focusedInput === 'message' 
                          ? 'border-[#FF6B47] ring-4 ring-[#FF6B47]/20 glow-orange' 
                          : 'border-[#333]/50 hover:border-[#FF6B47]/30'
                      }`}
                      placeholder="Tell me about your vision, goals, and what you'd like to create together..."
                    />
                    {focusedInput === 'message' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B47] rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500] hover:from-[#FF4500] hover:to-[#FF3C00] disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 glow-orange hover:glow-orange-strong disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group"
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
                  <div className="mt-6 text-green-400 text-center font-semibold animate-fade-in backdrop-blur-md bg-green-500/10 p-4 rounded-2xl border border-green-500/20">
                    <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                    {submitMessage}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-6 text-red-400 text-center font-semibold animate-fade-in backdrop-blur-md bg-red-500/10 p-4 rounded-2xl border border-red-500/20">
                    <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                    {submitMessage}
                  </div>
                )}
              </div>
            ) : (
              <div className="backdrop-blur-one-ui rounded-3xl p-8 border border-[#333]/30 hover:border-[#FF6B47]/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Calendar className="w-6 h-6 mr-3 text-[#FF6B47]" />
                  Schedule a Meeting
                </h3>
                
                <div className="space-y-4 mb-8">
                  {meetingTypes.map((meeting, index) => (
                    <div key={index} className="group relative overflow-hidden">
                      <div className={`p-6 rounded-2xl border border-[#333]/30 hover:border-[#FF6B47]/40 transition-all duration-300 hover:glow-orange cursor-pointer bg-gradient-to-r ${meeting.color}/5`}>
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${meeting.color} glow-orange`}>
                            <meeting.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#FF6B47] transition-colors">
                              {meeting.title}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {meeting.duration}
                              </span>
                            </div>
                            <p className="text-sm text-gray-300 mt-2 font-light">
                              {meeting.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleScheduleMeeting}
                  className="w-full bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 glow-orange hover:glow-orange-strong flex items-center justify-center group"
                >
                  <Calendar className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  <span>Book Your Time Slot</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-gray-400 text-sm mt-4 font-light">
                  Choose a convenient time that works for both of us. All meetings are conducted via Google Meet.
                </p>
              </div>
            )}
          </div>

          {/* Contact Info & Social Links */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Contact Info Cards */}
            <div className="grid gap-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.label}
                    className="backdrop-blur-one-ui rounded-3xl p-6 border border-[#333]/30 hover:border-[#FF6B47]/30 hover:glow-orange transition-all duration-300 transform hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-2xl group-hover:scale-110 transition-transform duration-300 glow-orange">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{info.label}</div>
                        <div className={`text-sm ${info.color} font-medium`}>{info.value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect & Follow</h3>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block backdrop-blur-one-ui rounded-3xl p-6 border border-[#333]/30 hover:border-[#FF6B47]/30 hover:glow-orange transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${social.color} group-hover:scale-110 transition-transform duration-300 shadow-lg glow-orange`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-white group-hover:text-[#FF6B47] transition-colors">
                          {social.label}
                        </div>
                        <div className="text-sm text-gray-400">{social.description}</div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-full flex items-center justify-center shadow-lg glow-orange">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    {hoveredCard === index && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color}/10 rounded-3xl`}></div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="backdrop-blur-one-ui rounded-3xl p-8 max-w-5xl mx-auto border border-[#333]/30 hover:border-[#FF6B47]/30 hover:glow-orange transition-all duration-500">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-[#FF6B47] bg-clip-text text-transparent">
              Ready to Build Something Extraordinary?
            </h3>
            <p className="text-gray-400 mb-6 text-lg font-light">
              From concept to launch, I specialize in creating digital experiences that captivate and convert. 
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-all duration-300 glow-orange">
                Web Development
              </span>
              <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF6347] text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-all duration-300 glow-orange">
                UI/UX Design
              </span>
              <span className="bg-gradient-to-r from-[#FFB347] to-[#FF7F50] text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-all duration-300 glow-orange">
                React & Node.js
              </span>
              <span className="bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-all duration-300 glow-orange">
                AI/ML Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
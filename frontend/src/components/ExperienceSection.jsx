import React, { useState, useEffect } from 'react';
import { Briefcase, Award, ExternalLink, Calendar, Building, CheckCircle, Star, Eye, X } from 'lucide-react';
import { allCertificates } from '../data/certificates.js';
import { experiences } from '../data/experience.js';
import { openCalendar } from '../utils/constants.js';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // experiences and allCertificates imported from data files above

  // Certificate data imported from src/data/certificates.js

  const categories = ['All', 'Programming', 'Algorithms', 'IoT', 'AI/ML'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCertifications = selectedCategory === 'All'
    ? allCertificates
    : allCertificates.filter(cert => cert.category === selectedCategory);

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      {/* Subtle ambient — no animation, no neon */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(232,103,58,0.05) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(232,103,58,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Career & Credentials</p>
          <h2 className="section-heading">
            Experience &amp; Certifications<span className="dot-accent">.</span>
          </h2>
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'var(--txt-2)' }}>
            My professional journey and academic achievements in technology
          </p>
        </div>

        {/* Tab Navigation - One UI 7 style */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="backdrop-blur-md bg-[#1A1A1A]/30 rounded-3xl p-2 border border-[#333]/30 w-full max-w-md mx-4">
            <div className="flex w-full">
              {['experience', 'certifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white'
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]/30'
                  }`}
                  style={activeTab === tab ? { boxShadow: '0 0 20px rgba(255, 107, 71, 0.3)' } : {}}
                >
                  {tab === 'experience' ? (
                    <>
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Experience</span>
                      <span className="sm:hidden">Exp</span>
                    </>
                  ) : (
                    <>
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Certifications</span>
                      <span className="sm:hidden">Certs</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-md bg-[#1A1A1A]/30 rounded-2xl p-6 mb-6 border border-[#333]/30 hover:border-[#FF6B47]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#FF6B47]/20 overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B47]/5 to-[#FF4500]/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] rounded-xl flex items-center justify-center shadow-lg"
                             style={{ boxShadow: '0 0 15px rgba(255, 107, 71, 0.3)' }}>
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B47] transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-[#FF6B47] font-semibold">{exp.organization || exp.company}</p>
                          {exp.supervisor && (
                            <p className="text-gray-400 text-sm mt-0.5">
                              Mentored by <span className="text-gray-300 font-medium">{exp.supervisor}</span>
                            </p>
                          )}
                          {exp.highlight && (
                            <span className="text-xs text-green-400 font-medium">★ Currently Here</span>
                          )}
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="inline-block bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white px-3 py-1 rounded-xl text-sm font-semibold"
                              style={{ boxShadow: '0 0 10px rgba(255, 107, 71, 0.3)' }}>
                          {exp.type}
                        </span>
                        <p className="text-gray-400 mt-2 flex items-center sm:justify-end text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.startDate} {exp.endDate ? `— ${exp.endDate}` : exp.current ? '— Present' : ''}
                          {exp.duration && !exp.startDate ? exp.duration : ''}
                        </p>
                      </div>
                    </div>

                    {/* Description: handle both array and string formats */}
                    {Array.isArray(exp.description) ? (
                      <ul className="mb-4 space-y-1">
                        {exp.description.map((d, di) => (
                          <li key={di} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-[#FF6B47] mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-light">{d}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 mb-4 leading-relaxed font-light">{exp.description}</p>
                    )}

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(exp.technologies || []).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-[#1A1A1A]/60 text-[#FF6B47] px-3 py-1 rounded-lg text-sm font-medium border border-[#333]/50 hover:border-[#FF6B47]/50 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements section only if data has it */}
                    {exp.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300">
                              <CheckCircle className="w-4 h-4 text-[#FF6B47] mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm font-light">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Category Filter */}
            <div className="flex justify-center mb-8 px-4">
              <div className="flex flex-wrap justify-center gap-2 max-w-2xl backdrop-blur-md bg-[#1A1A1A]/30 p-2 rounded-2xl border border-[#333]/30">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white'
                        : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]/30'
                    }`}
                    style={selectedCategory === category ? { boxShadow: '0 0 15px rgba(255, 107, 71, 0.3)' } : {}}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications Grid - Compact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-md bg-[#1A1A1A]/30 rounded-2xl border border-[#333]/30 overflow-hidden hover:border-[#FF6B47]/40 hover:shadow-lg hover:shadow-[#FF6B47]/20 transition-all duration-500 hover:scale-105 w-full max-w-sm mx-auto sm:mx-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Certificate Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B47] to-[#FF4500] items-center justify-center hidden">
                      <Award className="w-12 h-12 text-white opacity-80" />
                    </div>
                    
                    {/* Grade Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="backdrop-blur-md bg-white/90 text-[#FF6B47] px-2 py-1 rounded-lg text-xs font-bold flex items-center"
                            style={{ boxShadow: '0 0 10px rgba(255, 107, 71, 0.3)' }}>
                        <Star className="w-3 h-3 mr-1" />
                        {cert.grade}
                      </span>
                    </div>

                    {/* View Certificate Button */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openCertificate(cert)}
                        className="bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white px-4 py-2 rounded-xl font-semibold text-sm flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
                        style={{ boxShadow: '0 0 15px rgba(255, 107, 71, 0.4)' }}
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#FF6B47] transition-colors duration-300 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-[#FF6B47] font-semibold text-xs mb-1 line-clamp-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </p>
                    </div>

                    <div className="mb-3">
                      <span className="inline-block bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white px-2 py-1 rounded-lg text-xs font-semibold"
                            style={{ boxShadow: '0 0 8px rgba(255, 107, 71, 0.3)' }}>
                        {cert.category}
                      </span>
                    </div>

                    {cert.verifyLink !== '#' && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#FF6B47] hover:text-white font-semibold text-xs transition-colors duration-200 group-hover:underline"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="backdrop-blur-md bg-[#1A1A1A]/30 rounded-2xl p-4 border border-[#333]/30 hover:border-[#FF6B47]/40 hover:shadow-lg hover:shadow-[#FF6B47]/20 transition-all duration-300 text-center">
              <div className="text-3xl font-black text-[#FF6B47] mb-2">10</div>
              <div className="text-gray-400 text-sm font-light">Certifications</div>
            </div>
            <div className="backdrop-blur-md bg-[#1A1A1A]/30 rounded-2xl p-4 border border-[#333]/30 hover:border-[#FF6B47]/40 hover:shadow-lg hover:shadow-[#FF6B47]/20 transition-all duration-300 text-center">
              <div className="text-3xl font-black text-[#FF6B47] mb-2">5</div>
              <div className="text-gray-400 text-sm font-light">IIT Courses</div>
            </div>
            <div className="backdrop-blur-md bg-[#1A1A1A]/30 rounded-2xl p-4 border border-[#333]/30 hover:border-[#FF6B47]/40 hover:shadow-lg hover:shadow-[#FF6B47]/20 transition-all duration-300 text-center">
              <div className="text-3xl font-black text-[#FF6B47] mb-2">100%</div>
              <div className="text-gray-400 text-sm font-light">Completion</div>
            </div>
            <div className="backdrop-blur-md bg-[#1A1A1A]/30 rounded-2xl p-4 border border-[#333]/30 hover:border-[#FF6B47]/40 hover:shadow-lg hover:shadow-[#FF6B47]/20 transition-all duration-300 text-center">
              <div className="text-3xl font-black text-[#FF6B47] mb-2">Elite</div>
              <div className="text-gray-400 text-sm font-light">Grade Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeCertificate}
              className="absolute -top-12 right-0 text-white hover:text-[#FF6B47] transition-colors duration-200 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Certificate Image */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback */}
              <div className="hidden w-full h-96 bg-gradient-to-br from-[#FF6B47] to-[#FF4500] rounded-lg items-center justify-center">
                <div className="text-white text-center">
                  <Award className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
                  <p className="text-lg opacity-90">{selectedCertificate.issuer}</p>
                </div>
              </div>
            </div>
            
            {/* Certificate Info */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
              <p className="text-[#FF6B47] font-semibold mb-1">{selectedCertificate.issuer}</p>
              <p className="text-gray-400 text-sm">{selectedCertificate.date}</p>
              {selectedCertificate.verifyLink !== '#' && (
                <a
                  href={selectedCertificate.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 px-4 py-2 bg-gradient-to-r from-[#FF6B47] to-[#FF4500] text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-200"
                  style={{ boxShadow: '0 0 15px rgba(255, 107, 71, 0.4)' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
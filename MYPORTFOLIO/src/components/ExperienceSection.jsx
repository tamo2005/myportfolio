import React, { useState, useEffect } from 'react';
import { Briefcase, Award, ExternalLink, Calendar, Building, CheckCircle, Star } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

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

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'JAWD Lifestyles',
      type: 'Internship',
      duration: '2024',
      description: 'Built responsive web interfaces and worked on UI/UX components using modern frontend technologies',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      achievements: [
        'Developed responsive web components',
        'Improved user interface design',
        'Collaborated with design team'
      ]
    },
  ];

  const certifications = [
    {
      title: 'Introduction To Internet Of Things',
      issuer: 'IIT Kharagpur (NPTEL)',
      date: 'Nov 2025',
      verifyLink: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS44S44950216804365773',
      image: '/assets/IOT.png',
      category: 'IoT',
      grade: 'Elite'
    },
    {
      title: 'Design and Analysis of Algorithms',
      issuer: 'IIT Madras (NPTEL)',
      date: 'Apr 2025',
      verifyLink: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS23S35010076901335591',
      image: '/assets/DAA.png',
      category: 'Algorithms',
      grade: 'Elite'
    },
    {
      title: 'The Joy of Computing using Python',
      issuer: 'IIT Madras (NPTEL)',
      date: 'Apr 2024',
      verifyLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS113S85230103104184540',
      image: '/assets/JOCP.png',
      category: 'Programming',
      grade: 'Elite'
    },
    {
      title: 'Programming, Data Structures and Algorithms using Python',
      issuer: 'IIT Madras (NPTEL)',
      date: 'Apr 2024',
      verifyLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS78S43920060602714322',
      image: '/assets/PROGDSAPY.png',
      category: 'Programming',
      grade: 'Elite'
    },
    {
      title: 'Introduction to Programming in C',
      issuer: 'IIT Kanpur (NPTEL)',
      date: 'Apr 2024',
      verifyLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS02S46020050730126767',
      image: '/assets/CPROG.png',
      category: 'Programming',
      grade: 'Elite'
    },
    {
      title: 'Generative AI Certificate',
      issuer: 'Intel (Tamagno Roy)',
      date: '2024',
      verifyLink: '#',
      image: '/assets/Tamagno Roy_Generative_AI_Certificate.png',
      category: 'AI/ML',
      grade: 'Completed'
    },
    {
      title: 'Micro Learning Module Certificate',
      issuer: 'Intel (Tamagno Roy)',
      date: '2024',
      verifyLink: '#',
      image: '/assets/Tamagno Roy_Micro_Learning_Module_Certificate.png',
      category: 'AI/ML',
      grade: 'Completed'
    },
    {
      title: 'Responsible AI Certificate',
      issuer: 'Intel (Tamagno Roy)',
      date: '2024',
      verifyLink: '#',
      image: '/assets/TAMAGNO ROY_Responsible_AI_Certificate.png',
      category: 'AI/ML',
      grade: 'Completed'
    },
    {
      title: 'Space AI Certificate',
      issuer: 'Intel (Tamagno Roy)',
      date: '2024',
      verifyLink: '#',
      image: '/assets/Tamagno Roy_Space_AI_Certificate.png',
      category: 'AI/ML',
      grade: 'Completed'
    },
    {
      title: 'Sport AI Certificate',
      issuer: 'Intel (Tamagno Roy)',
      date: '2024',
      verifyLink: '#',
      image: '/assets/Tamagno Roy_Sport_AI_Certificate.png',
      category: 'AI/ML',
      grade: 'Completed'
    }
  ];

  const categories = ['All', 'Programming', 'Algorithms', 'IoT', 'AI/ML'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
            Experience & Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            My professional journey and academic achievements in technology
          </p>
        </div>

        {/* Tab Navigation - Fixed Responsiveness */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 sm:p-2 shadow-lg border border-orange-200 w-full max-w-md mx-4">
            <div className="flex w-full">
              {['experience', 'certifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
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
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-200 p-4 sm:p-6 lg:p-8 mb-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                          <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-orange-600 font-semibold text-base sm:text-lg">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                          {exp.type}
                        </span>
                        <p className="text-gray-500 mt-2 flex items-center sm:justify-end">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-700">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                        : 'bg-white/80 text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-orange-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-200 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Certificate Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback placeholder (hidden by default) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 items-center justify-center hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 opacity-80" />
                          <p className="text-xs sm:text-sm opacity-80">Certificate Image</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Grade Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-orange-600 px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {cert.grade}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-orange-600 font-semibold mb-1 text-sm sm:text-base line-clamp-1">{cert.issuer}</p>
                      <p className="text-gray-500 text-xs sm:text-sm flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {cert.date}
                      </p>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                        {cert.category}
                      </span>
                    </div>

                    {cert.verifyLink !== '#' && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-xs sm:text-sm transition-colors duration-200 group-hover:underline"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Verify Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floating Stats */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">10</div>
                <div className="text-gray-600 text-sm sm:text-base">Certifications</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">5</div>
                <div className="text-gray-600 text-sm sm:text-base">IIT Courses</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm sm:text-base">Completion Rate</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">Elite</div>
                <div className="text-gray-600 text-sm sm:text-base">Grade Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
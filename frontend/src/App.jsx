import React, { useEffect } from 'react';
import Layout from './components/Layout.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import MarqueeTicker from './components/MarqueeTicker.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import GitHubSection from './components/GitHubSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  useEffect(() => {
    document.title = 'Tamagno Roy — Engineer';
  }, []);

  return (
    <Layout>
      <Header />
      <main>
        <HeroSection />
        <MarqueeTicker />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <GitHubSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;


import React from 'react';
import { Header } from '../components/portfolio/Header';
import { HeroSection } from '../components/portfolio/HeroSection';
import { ProjectsSection } from '../components/portfolio/ProjectsSection';
import { AboutSection } from '../components/portfolio/AboutSection';
import { SkillsSection } from '../components/portfolio/SkillsSection';
import { EducationSection } from '../components/portfolio/EducationSection';
import { CertificatesSection } from '../components/portfolio/CertificatesSection';
import { HobbiesSection } from '../components/portfolio/HobbiesSection';
import { PersonalitySection } from '../components/portfolio/PersonalitySection';
import { ResumeSection } from '../components/portfolio/ResumeSection';
import { ContactSection } from '../components/portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CertificatesSection />
      <HobbiesSection />
      <PersonalitySection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
};

export default Index;

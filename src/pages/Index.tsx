
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection1 from '@/components/ProjectsSection1';
import ProjectsSection2 from '@/components/ProjectsSection2';
import ProjectsSection3 from '@/components/ProjectsSection3';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import DynamicBackground from '@/components/DynamicBackground';
import { useScrollSnap } from '@/hooks/useScrollSnap';

const Index = () => {
  const sections = ['#home', '#about', '#projects', '#projects2', '#projects3', '#experience', '#contact'];
  const { currentSection, isScrolling, goToSection } = useScrollSnap({ 
    sections,
    threshold: 50,
    smooth: true 
  });

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-deep-black text-portfolio-white relative">
      <DynamicBackground />
      <Navigation />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection1 />
        <ProjectsSection2 />
        <ProjectsSection3 />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
      <ScrollToTop />
      
      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === index
                ? 'bg-portfolio-maroon border-portfolio-maroon scale-125'
                : 'bg-transparent border-portfolio-silver hover:border-portfolio-maroon'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;

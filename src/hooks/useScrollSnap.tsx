import { useEffect, useState } from 'react';

interface UseScrollSnapOptions {
  sections: string[];
  threshold?: number;
  smooth?: boolean;
}

export const useScrollSnap = ({ sections, threshold = 50, smooth = true }: UseScrollSnapOptions) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const goToSection = (index: number) => {
    if (index >= 0 && index < sections.length && !isScrolling) {
      setIsScrolling(true);
      const element = document.querySelector(sections[index]);
      if (element) {
        element.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto',
          block: 'start'
        });
        setCurrentSection(index);
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    }
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = 0;
    const cooldownPeriod = 1000; // 1 second cooldown between scrolls

    // Listen for navigation events
    const handleNavigateToSection = (e: CustomEvent) => {
      const { index } = e.detail;
      goToSection(index);
    };

    window.addEventListener('navigateToSection', handleNavigateToSection as EventListener);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < cooldownPeriod || isScrolling) {
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
      
      if (newSection !== currentSection) {
        setIsScrolling(true);
        lastScrollTime = now;
        
        const element = document.querySelector(sections[newSection]);
        if (element) {
          element.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            block: 'start'
          });
          
          setCurrentSection(newSection);
          
          // Reset scrolling state after animation
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const now = Date.now();
        if (now - lastScrollTime < cooldownPeriod || isScrolling) {
          return;
        }

        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
        
        if (newSection !== currentSection) {
          setIsScrolling(true);
          lastScrollTime = now;
          
          const element = document.querySelector(sections[newSection]);
          if (element) {
            element.scrollIntoView({
              behavior: smooth ? 'smooth' : 'auto',
              block: 'start'
            });
            
            setCurrentSection(newSection);
            
            scrollTimeout = setTimeout(() => {
              setIsScrolling(false);
            }, 800);
          }
        }
      }
    };

    // Disable default scrolling behavior
    document.body.style.overflow = 'hidden';
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('navigateToSection', handleNavigateToSection as EventListener);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [sections, currentSection, isScrolling, threshold, smooth, goToSection]);

  return {
    currentSection,
    isScrolling,
    goToSection
  };
};
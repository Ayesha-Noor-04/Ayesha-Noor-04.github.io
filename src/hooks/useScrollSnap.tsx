import { useEffect, useState, useCallback } from 'react';

interface UseScrollSnapOptions {
  sections: string[];
  threshold?: number;
  smooth?: boolean;
}

export const useScrollSnap = ({ sections, threshold = 50, smooth = true }: UseScrollSnapOptions) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const goToSection = useCallback((index: number) => {
    console.log('goToSection called with index:', index, 'isScrolling:', isScrolling);
    
    if (index >= 0 && index < sections.length && !isScrolling) {
      setIsScrolling(true);
      const element = document.querySelector(sections[index]);
      console.log('Target element:', sections[index], 'Found element:', element);
      
      if (element) {
        element.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto',
          block: 'start'
        });
        setCurrentSection(index);
        console.log('Scrolled to section:', index);
        
        setTimeout(() => {
          setIsScrolling(false);
          console.log('Scroll complete, isScrolling set to false');
        }, 1000);
      } else {
        console.log('Element not found for section:', sections[index]);
        setIsScrolling(false);
      }
    } else {
      console.log('Scroll blocked - invalid index or already scrolling');
    }
  }, [sections, isScrolling, smooth]);

  useEffect(() => {
    console.log('useScrollSnap hook initialized with sections:', sections);
    
    let lastScrollTime = 0;
    const cooldownPeriod = 800;

    // Listen for navigation events
    const handleNavigateToSection = (e: CustomEvent) => {
      console.log('Received navigateToSection event:', e.detail);
      const { index } = e.detail;
      goToSection(index);
    };

    window.addEventListener('navigateToSection', handleNavigateToSection as EventListener);

    const handleWheel = (e: WheelEvent) => {
      console.log('Wheel event detected, deltaY:', e.deltaY);
      
      const now = Date.now();
      if (now - lastScrollTime < cooldownPeriod || isScrolling) {
        console.log('Scroll blocked - cooldown or already scrolling');
        return;
      }

      e.preventDefault();
      console.log('Wheel event prevented, processing scroll');
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
      
      console.log('Current section:', currentSection, 'New section:', newSection, 'Direction:', direction);
      
      if (newSection !== currentSection) {
        lastScrollTime = now;
        console.log('Scrolling to section:', newSection);
        goToSection(newSection);
      } else {
        console.log('Already at boundary section');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const now = Date.now();
        if (now - lastScrollTime < cooldownPeriod || isScrolling) {
          return;
        }

        e.preventDefault();
        
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
        
        if (newSection !== currentSection) {
          lastScrollTime = now;
          goToSection(newSection);
        }
      }
    };

    // Track current section based on scroll position
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]);
        if (element && element.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('navigateToSection', handleNavigateToSection as EventListener);
    };
  }, [sections, currentSection, isScrolling, goToSection]);

  return {
    currentSection,
    isScrolling,
    goToSection
  };
};
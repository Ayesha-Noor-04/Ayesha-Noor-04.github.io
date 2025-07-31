import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX / innerWidth) * 100;
        const y = (clientY / innerHeight) * 100;
        
        heroRef.current.style.setProperty('--x', `${x}%`);
        heroRef.current.style.setProperty('--y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center dynamic-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-portfolio-maroon/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-portfolio-gunmetal/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-portfolio-maroon-light/25 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-portfolio-maroon/50 animate-glow">
              <img
                src="/lovable-uploads/ff9c1857-f626-4508-b611-b16f9c1f47b9.png"
                alt="Ayesha Noor"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="hero-text text-portfolio-white">
              Ayesha
              <span className="text-gradient block md:inline md:ml-4">Noor</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-portfolio-silver space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p>Undergraduate CS Student</p>
              <p className="text-portfolio-maroon">|</p>
              <p>Data Science Enthusiast</p>
              <p className="text-portfolio-maroon">|</p>
              <p>C++ Developer</p>
            </div>

            <p className="text-lg md:text-xl text-portfolio-chrome max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s' }}>
              Passionate about algorithms, data insights, and building meaningful solutions through code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-portfolio-maroon hover:bg-portfolio-maroon-light text-portfolio-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              View My Projects
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-portfolio-maroon text-portfolio-maroon hover:bg-portfolio-maroon hover:text-portfolio-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-portfolio-silver" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { useEffect, useRef } from 'react';
import { Code, Database, Brain, Heart } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.smooth-reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Algorithm Design",
      description: "Advanced C++ systems and data structure optimization"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Python, SQL, and statistical analysis for meaningful insights"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Complex algorithmic challenges and innovative solutions"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Volunteering at Sundas Foundation for children with thalassemia"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 bg-portfolio-black/50 scroll-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            About Me
          </h2>

          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              {/* University */}
              <div className="smooth-reveal mb-12">
                <h3 className="text-2xl font-semibold text-portfolio-maroon mb-8">
                  CS @ FAST Islamabad
                </h3>
                
                {/* Bullet Points */}
                <div className="space-y-4 text-left">
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Passionate about data science and analytics with hands-on experience in Python and SQL
                    </p>
                  </div>
                  
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Specialized in algorithm optimization and advanced data structures using C++
                    </p>
                  </div>
                  
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Experienced in system-level programming and performance-critical applications
                    </p>
                  </div>
                  
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Full-stack web developer with expertise in modern frameworks and responsive design
                    </p>
                  </div>
                  
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Game development enthusiast with published projects using SFML and advanced graphics
                    </p>
                  </div>
                  
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Active volunteer at Sundas Foundation, supporting children with thalassemia
                    </p>
                  </div>
                  
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Committed to continuous learning and staying current with emerging technologies
                    </p>
                  </div>
                  
                  <div className="smooth-reveal flex items-start">
                    <span className="text-portfolio-maroon mr-3 mt-1">•</span>
                    <p className="text-lg text-portfolio-silver">
                      Strong foundation in database management and building scalable data-driven solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
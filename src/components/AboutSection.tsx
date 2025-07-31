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
    <section id="about" ref={sectionRef} className="py-20 bg-portfolio-black/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="smooth-reveal">
                <p className="text-lg text-portfolio-silver leading-relaxed">
                  I am an undergraduate student at <span className="text-portfolio-maroon font-semibold">FAST Islamabad</span> with a strong foundation in data science, analytics, and algorithm optimization. I have hands-on experience in developing data-driven applications and working with advanced data structures in C++.
                </p>
              </div>

              <div className="smooth-reveal">
                <p className="text-lg text-portfolio-silver leading-relaxed">
                  Proficient in <span className="text-portfolio-maroon font-semibold">SQL, Python, and statistical analysis</span>, I focus on extracting meaningful insights from complex datasets, optimizing data pipelines, and using data to support informed decision-making.
                </p>
              </div>

              <div className="smooth-reveal">
                <p className="text-lg text-portfolio-silver leading-relaxed">
                  Continuously exploring new technologies, I work to improve my analytical skills and contribute to effective data-driven solutions. Beyond coding, I'm passionate about creating positive impact through volunteer work.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="smooth-reveal">
                <h3 className="text-xl font-semibold text-portfolio-white mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['C++', 'Python', 'SQL', 'Data Analysis', 'SFML', 'Git', 'Object-Oriented Programming', 'Data Structures'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-portfolio-gunmetal/50 text-portfolio-chrome rounded-full text-sm font-medium hover:bg-portfolio-maroon/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="elegant-card smooth-reveal glow-on-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-portfolio-maroon mb-4">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-portfolio-silver text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Heart, Calendar } from 'lucide-react';

const ExperienceSection = () => {
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

  const education = {
    degree: "Bachelor of Computer Science",
    institution: "NUCES – FAST Islamabad",
    period: "2023 – 2027",
    courses: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Database Systems", "Programming Fundamentals"]
  };

  const certifications = [
    {
      title: "Data Science & Analytics",
      issuer: "HP",
      icon: Award,
      color: "portfolio-maroon"
    },
    {
      title: "Software Engineering Simulation",
      issuer: "Forage",
      icon: Award,
      color: "portfolio-maroon-light"
    },
    {
      title: "Flutter Bootcamp",
      issuer: "GDGoC PIEAS",
      icon: Award,
      color: "portfolio-gunmetal"
    },
    {
      title: "Intro to Data Science",
      issuer: "DataCamp",
      icon: Award,
      color: "portfolio-gunmetal-light"
    }
  ];

  const volunteerWork = {
    organization: "Sundas Foundation",
    role: "Volunteer",
    description: "Supporting children with blood disorders (Thalassemia) through community outreach and assistance programs.",
    impact: "Helping improve lives and providing hope to families affected by thalassemia."
  };

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20 bg-portfolio-black/30 scroll-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            Experience & Education
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <div className="space-y-8">
              {/* Education */}
              <div className="smooth-reveal">
                <h3 className="text-2xl font-semibold text-portfolio-white mb-6 flex items-center">
                  <GraduationCap className="text-portfolio-maroon mr-3" size={28} />
                  Education
                </h3>
                
                <div className="elegant-card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-portfolio-white">
                        {education.degree}
                      </h4>
                      <p className="text-portfolio-maroon font-medium">
                        {education.institution}
                      </p>
                    </div>
                    <div className="flex items-center text-portfolio-silver text-sm">
                      <Calendar size={16} className="mr-1" />
                      {education.period}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-portfolio-silver mb-3">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {education.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-portfolio-gunmetal/40 text-portfolio-chrome text-xs rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Volunteer Work */}
              <div className="smooth-reveal">
                <h3 className="text-2xl font-semibold text-portfolio-white mb-6 flex items-center">
                  <Heart className="text-portfolio-maroon mr-3" size={28} />
                  Volunteer Experience
                </h3>
                
                <div className="elegant-card">
                  <h4 className="text-xl font-semibold text-portfolio-white mb-2">
                    {volunteerWork.organization}
                  </h4>
                  <p className="text-portfolio-maroon font-medium mb-4">
                    {volunteerWork.role}
                  </p>
                  <p className="text-portfolio-silver leading-relaxed mb-3">
                    {volunteerWork.description}
                  </p>
                  <p className="text-portfolio-chrome italic">
                    {volunteerWork.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Column */}
            <div className="smooth-reveal">
              <h3 className="text-2xl font-semibold text-portfolio-white mb-6 flex items-center">
                <Award className="text-portfolio-maroon mr-3" size={28} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="elegant-card smooth-reveal"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg bg-${cert.color}/20 flex-shrink-0`}>
                        <cert.icon className={`text-${cert.color}`} size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-portfolio-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-portfolio-silver text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="mt-8 elegant-card smooth-reveal">
                <h4 className="text-lg font-semibold text-portfolio-white mb-4">
                  Technical Proficiencies
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-portfolio-maroon font-medium mb-2">Programming</p>
                    <ul className="text-portfolio-silver space-y-1">
                      <li>• C++ (Advanced)</li>
                      <li>• Python</li>
                      <li>• SQL</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-portfolio-maroon font-medium mb-2">Specializations</p>
                    <ul className="text-portfolio-silver space-y-1">
                      <li>• Data Science</li>
                      <li>• Algorithm Design</li>
                      <li>• Game Development</li>
                    </ul>
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

export default ExperienceSection;
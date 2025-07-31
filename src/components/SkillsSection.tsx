import { useEffect, useRef } from 'react';
import { Code, Database, Palette, Wrench, BarChart, Gamepad2 } from 'lucide-react';

const SkillsSection = () => {
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
              }, index * 100);
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C++', level: 'Advanced' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'C# (.NET)', level: 'Intermediate' },
      ]
    },
    {
      title: 'Core Computer Science',
      icon: Database,
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Advanced' },
        { name: 'Object-Oriented Programming', level: 'Advanced' },
        { name: 'Database Management', level: 'Advanced' },
        { name: 'Input/Output Operations', level: 'Advanced' },
      ]
    },
    {
      title: 'Development',
      icon: Gamepad2,
      skills: [
        { name: 'Game Development', level: 'Advanced' },
        { name: 'Web Development', level: 'Advanced' },
        { name: 'CLI Applications', level: 'Advanced' },
        { name: 'SFML', level: 'Experienced' },
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart,
      skills: [
        { name: 'SQL', level: 'Advanced' },
        { name: 'Data Science & Analytics', level: 'Intermediate' },
        { name: 'NumPy & Pandas', level: 'Intermediate' },
        { name: 'Data Visualization', level: 'Intermediate' },
        { name: 'Machine Learning Basics', level: 'Beginner' },
      ]
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 'Intermediate' },
        { name: 'Version Control', level: 'Advanced' },
        { name: 'Text Processing', level: 'Intermediate' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      skills: [
        { name: 'CI/CD', level: 'Beginner' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'advanced':
      case 'experienced':
        return 'text-portfolio-maroon';
      case 'intermediate':
        return 'text-portfolio-maroon-light';
      case 'beginner':
        return 'text-portfolio-silver';
      default:
        return 'text-portfolio-silver';
    }
  };

  const getLevelBg = (level: string) => {
    switch (level.toLowerCase()) {
      case 'advanced':
      case 'experienced':
        return 'bg-portfolio-maroon/20 border-portfolio-maroon/30';
      case 'intermediate':
        return 'bg-portfolio-maroon-light/20 border-portfolio-maroon-light/30';
      case 'beginner':
        return 'bg-portfolio-silver/10 border-portfolio-silver/20';
      default:
        return 'bg-portfolio-silver/10 border-portfolio-silver/20';
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 bg-portfolio-deep-black scroll-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="elegant-card smooth-reveal"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-portfolio-maroon/20 mr-4">
                    <category.icon className="text-portfolio-maroon" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-portfolio-gunmetal/30 hover:bg-portfolio-gunmetal/50 transition-all duration-300"
                    >
                      <span className="text-portfolio-silver font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-sm px-2 py-1 rounded border ${getLevelBg(skill.level)} ${getLevelColor(skill.level)} font-semibold`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
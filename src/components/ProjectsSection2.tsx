
import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Gamepad2, FileText, Search } from 'lucide-react';

const ProjectsSection2 = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

  const projects = [
    {
      id: 4,
      title: "Plagiarism Checker",
      subtitle: "Text Similarity Analysis Tool",
      description: "Object-oriented plagiarism detection system with tokenization, normalization, and percentage-based similarity reporting.",
      longDescription: "Three-class architecture plagiarism detection system: Read class for file loading and tokenization, Process class for text normalization (case, punctuation), and Similarity class for calculating match percentages. Provides detailed similarity reports with configurable word matching rules.",
      technologies: ["C++", "OOP", "File Handling", "Tokenization", "Text Analysis", "Memory Management"],
      icon: Search,
      color: "portfolio-maroon-light",
      date: "July 2024"
    },
    {
      id: 5,
      title: "Bomberman Game",
      subtitle: "2D Game Development",
      description: "Classic Bomberman game recreation using C++ and SFML graphics library, featuring advanced collision detection and game physics.",
      longDescription: "Complete game development project demonstrating object-oriented programming principles, game loop implementation, sprite animation, and complex collision detection algorithms. Includes power-ups, multiple levels, and AI enemies.",
      technologies: ["C++", "SFML", "Object-Oriented Programming", "Game Physics", "Collision Detection"],
      icon: Gamepad2,
      color: "portfolio-gunmetal",
      date: "2024"
    },
    {
      id: 6,
      title: "Centipede Game",
      subtitle: "Classic Arcade Recreation",
      description: "Faithful recreation of the classic Centipede arcade game using C++ and SFML, implementing 2D grid-based movement and game logic.",
      longDescription: "Arcade game implementation focusing on precise game mechanics, sprite management, and efficient 2D grid-based collision systems. Features multiple difficulty levels, scoring system, and smooth gameplay mechanics with authentic arcade feel.",
      technologies: ["C++", "SFML", "2D Grid Logic", "Game Development", "Graphics Programming"],
      icon: Gamepad2,
      color: "portfolio-gunmetal-light",
      date: "2024"
    }
  ];

  return (
    <section id="projects2" ref={sectionRef} className="min-h-screen py-20 bg-portfolio-deep-black scroll-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`elegant-card group cursor-pointer smooth-reveal ${
                  selectedProject === project.id ? 'ring-2 ring-portfolio-maroon' : ''
                }`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}/20`}>
                    <project.icon className={`text-${project.color}`} size={24} />
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-portfolio-gunmetal/50 rounded-lg hover:bg-portfolio-maroon/50 transition-colors duration-300">
                      <Github size={16} className="text-portfolio-silver" />
                    </button>
                    <button className="p-2 bg-portfolio-gunmetal/50 rounded-lg hover:bg-portfolio-maroon/50 transition-colors duration-300">
                      <ExternalLink size={16} className="text-portfolio-silver" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-portfolio-maroon font-medium">
                        {project.subtitle}
                      </p>
                      {project.date && (
                        <span className="text-xs text-portfolio-silver">
                          {project.date}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-portfolio-silver leading-relaxed">
                    {selectedProject === project.id ? project.longDescription : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-portfolio-gunmetal/40 text-portfolio-chrome text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-xs text-portfolio-silver">
                      Click to {selectedProject === project.id ? 'collapse' : 'expand'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection2;

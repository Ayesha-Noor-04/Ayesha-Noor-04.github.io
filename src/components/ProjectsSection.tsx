import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Database, Gamepad2, FileText } from 'lucide-react';

const ProjectsSection = () => {
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
      id: 1,
      title: "Git Version Control System",
      subtitle: "Custom VCS Implementation",
      description: "A complete version control system built from scratch using C++, featuring tree-based storage architecture and custom SHA-256 hashing for file integrity.",
      longDescription: "This project demonstrates deep understanding of data structures and algorithms by implementing a full-featured version control system. Features include branching, merging, commit history tracking, and efficient storage using tree structures.",
      technologies: ["C++", "Tree Data Structures", "SHA-256", "File System"],
      icon: Code,
      color: "portfolio-maroon"
    },
    {
      id: 2,
      title: "Command Line Notepad",
      subtitle: "Advanced Text Editor",
      description: "A sophisticated command-line text editor implementing 2D linked lists for text management, stack-based undo/redo, and tree-based word prediction.",
      longDescription: "Advanced text editor showcasing complex data structure implementation. Features include efficient text manipulation using 2D linked lists, intelligent undo/redo system with stacks, and predictive text using tree structures for enhanced user experience.",
      technologies: ["C++", "2D Linked Lists", "Stack ADT", "Tree Structures", "Algorithms"],
      icon: FileText,
      color: "portfolio-maroon-light"
    },
    {
      id: 3,
      title: "Bomberman Game",
      subtitle: "2D Game Development",
      description: "Classic Bomberman game recreation using C++ and SFML graphics library, featuring advanced collision detection and game physics.",
      longDescription: "Complete game development project demonstrating object-oriented programming principles, game loop implementation, sprite animation, and complex collision detection algorithms. Includes power-ups, multiple levels, and AI enemies.",
      technologies: ["C++", "SFML", "Object-Oriented Programming", "Game Physics", "Collision Detection"],
      icon: Gamepad2,
      color: "portfolio-gunmetal"
    },
    {
      id: 4,
      title: "Centipede Game",
      subtitle: "Classic Arcade Recreation",
      description: "Faithful recreation of the classic Centipede arcade game using C++ and SFML, implementing 2D grid-based movement and game logic.",
      longDescription: "Arcade game implementation focusing on precise game mechanics, sprite management, and efficient 2D grid-based collision systems. Features multiple difficulty levels, scoring system, and smooth gameplay mechanics.",
      technologies: ["C++", "SFML", "2D Grid Logic", "Game Development", "Graphics Programming"],
      icon: Database,
      color: "portfolio-gunmetal-light"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-portfolio-deep-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            Featured Projects
          </h2>

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
                {/* Project Header */}
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

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-portfolio-maroon font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-portfolio-silver leading-relaxed">
                    {selectedProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Technologies */}
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

                  {/* Expand Indicator */}
                  <div className="text-center pt-2">
                    <span className="text-xs text-portfolio-silver">
                      Click to {selectedProject === project.id ? 'collapse' : 'expand'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="text-center mt-12 smooth-reveal">
            <a
              href="https://github.com/Ayesha-Noor-04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-portfolio-maroon text-portfolio-maroon hover:bg-portfolio-maroon hover:text-portfolio-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
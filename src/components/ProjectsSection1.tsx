
import { useEffect, useRef } from 'react';
import { Github, Code, FileText, Settings, HardDrive } from 'lucide-react';

const ProjectsSection1 = () => {
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
      technologies: ["C++", "Tree Data Structures", "SHA-256", "File System"],
      icon: Code,
      color: "portfolio-maroon",
      date: "2024",
      link: "https://github.com/Ayesha-Noor-04/Git",
      linkType: "github"
    },
    {
      id: 2,
      title: "Notepad - Command Line Interface",
      subtitle: "Advanced Text Editor",
      description: "A sophisticated command-line text editor implementing 2D linked lists for text management, stack-based undo/redo, and tree-based word prediction.",
      technologies: ["C++", "2D Linked Lists", "Stack ADT", "Tree Structures", "Algorithms"],
      icon: FileText,
      color: "portfolio-maroon-light",
      date: "2024",
      link: "https://github.com/Ayesha-Noor-04/Notepad",
      linkType: "github"
    },
    {
      id: 3,
      title: "Bomberman Game",
      subtitle: "2D Game Development",
      description: "Classic Bomberman game recreation using C++ and SFML graphics library, featuring advanced collision detection and game physics.",
      technologies: ["C++", "SFML", "Object-Oriented Programming", "Game Physics", "Collision Detection"],
      icon: Code,
      color: "portfolio-gunmetal",
      date: "2024",
      link: "https://github.com/Ayesha-Noor-04/Bomberman",
      linkType: "github"
    },
    {
      id: 4,
      title: "Centipede Game",
      subtitle: "Classic Arcade Recreation",
      description: "Faithful recreation of the classic Centipede arcade game using C++ and SFML, implementing 2D grid-based movement and game logic.",
      technologies: ["C++", "SFML", "2D Grid Logic", "Game Development", "Graphics Programming"],
      icon: Code,
      color: "portfolio-gunmetal-light",
      date: "2024",
      link: "https://github.com/Ayesha-Noor-04/Centipede",
      linkType: "github"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 bg-portfolio-deep-black scroll-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="elegant-card group smooth-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}/20`}>
                    <project.icon className={`text-${project.color}`} size={24} />
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-portfolio-gunmetal/50 rounded-lg hover:bg-portfolio-maroon/50 transition-colors duration-300"
                    >
                      {project.linkType === 'github' ? (
                        <Github size={16} className="text-portfolio-silver" />
                      ) : (
                        <HardDrive size={16} className="text-portfolio-silver" />
                      )}
                    </a>
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
                    {project.description}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection1;

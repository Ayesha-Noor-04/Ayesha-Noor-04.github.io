
import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, FileText, Globe, Users } from 'lucide-react';

const ProjectsSection3 = () => {
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
      id: 7,
      title: "Hangman Game",
      subtitle: "Terminal Word Game",
      description: "Clean, modular terminal-based Hangman game with random word selection, progress tracking, and extensible design.",
      longDescription: "Terminal-based word guessing game featuring random word selection from dictionary files, comprehensive guess tracking with incorrect attempt monitoring, and intelligent win/loss logic. Designed with modular architecture for easy feature extensions and code maintenance.",
      technologies: ["C++", "File I/O", "Console Programming", "Modular Design", "Randomization"],
      icon: FileText,
      color: "portfolio-maroon",
      date: "December 2023"
    },
    {
      id: 8,
      title: "Clothing Website",
      subtitle: "Responsive Web Design",
      description: "Multi-page responsive clothing website with consistent navigation, modern UI/UX principles, and visual hierarchy optimization.",
      longDescription: "Professional clothing website built with HTML and CSS, emphasizing responsive design and user experience. Features consistent navigation across pages, optimized visual hierarchy, balanced color coordination, and clean layout design. Complemented with Canva-based mockups for enhanced visual planning.",
      technologies: ["HTML", "CSS", "Responsive Design", "UI/UX", "Visual Design"],
      icon: Globe,
      color: "portfolio-gunmetal",
      date: "July 2023"
    },
    {
      id: 9,
      title: "Volunteer Cards & Donation Poster",
      subtitle: "Visual Design for Nonprofit",
      description: "Complete visual identity package for Sundas Foundation including volunteer ID cards and promotional materials.",
      longDescription: "Comprehensive visual design project for Sundas Foundation featuring personalized volunteer ID cards for four team members and a compelling donation poster. Focused on brand consistency, clear visual hierarchy, balanced typography, and engaging design elements to support the foundation's outreach and fundraising efforts.",
      technologies: ["Canva", "Visual Design", "Branding", "Layout Design", "Typography"],
      icon: Users,
      color: "portfolio-maroon-light",
      date: "July 2024"
    }
  ];

  return (
    <section id="projects3" ref={sectionRef} className="min-h-screen py-20 bg-portfolio-deep-black scroll-section">
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

export default ProjectsSection3;

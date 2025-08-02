
import { useEffect, useRef } from 'react';
import { Github, Settings, Search, Globe, HardDrive } from 'lucide-react';

const ProjectsSection2 = () => {
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
      id: 5,
      title: "Ticket Management System",
      subtitle: "Helpdesk Desktop Application",
      description: "Professional helpdesk application with role-based access, real-time ticket tracking, and comprehensive reporting built with C# and Windows Forms.",
      technologies: ["C#", "Windows Forms", "SQL Server", "Memory Management", ".NET"],
      icon: Settings,
      color: "portfolio-gunmetal",
      date: "June 2025",
      link: "https://drive.google.com/file/d/1fvIGr-8ctylbPKzPEbEaKRNd19wE54vX/view?usp=drive_link",
      linkType: "drive"
    },
    {
      id: 6,
      title: "Plagiarism Checker",
      subtitle: "Text Similarity Analysis Tool",
      description: "Object-oriented plagiarism detection system with tokenization, normalization, and percentage-based similarity reporting.",
      technologies: ["C++", "OOP", "File Handling", "Tokenization", "Text Analysis", "Memory Management"],
      icon: Search,
      color: "portfolio-maroon-light",
      date: "July 2024",
      link: "https://github.com/Ayesha-Noor-04/PlagiarismChecker",
      linkType: "github"
    },
    {
      id: 7,
      title: "Clothing Website",
      subtitle: "Responsive Web Design",
      description: "Multi-page responsive clothing website with consistent navigation, modern UI/UX principles, and visual hierarchy optimization.",
      technologies: ["HTML", "CSS", "Responsive Design", "UI/UX", "Visual Design"],
      icon: Globe,
      color: "portfolio-gunmetal",
      date: "July 2023",
      link: "https://github.com/Ayesha-Noor-04/Suroor-ClothingWebsite",
      linkType: "github"
    },
    {
      id: 8,
      title: "Volunteer Cards and Donation Poster",
      subtitle: "Visual Design for Nonprofit",
      description: "Complete visual identity package for Sundas Foundation including volunteer ID cards and promotional materials.",
      technologies: ["Canva", "Visual Design", "Branding", "Layout Design", "Typography"],
      icon: Globe,
      color: "portfolio-maroon-light",
      date: "July 2024",
      link: "https://docs.google.com/document/d/1lUXS-yGDbC1lrSpbO6dgvPSaEpEXoGQ0CCrYW2r-fq8/edit?usp=sharing",
      linkType: "drive"
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

export default ProjectsSection2;

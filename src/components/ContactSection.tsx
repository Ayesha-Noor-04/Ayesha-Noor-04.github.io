import { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
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

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayeshanr0@gmail.com',
      href: 'mailto:ayeshanr0@gmail.com',
      color: 'portfolio-maroon'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ayesha-n00r',
      href: 'https://linkedin.com/in/ayesha-n00r',
      color: 'portfolio-maroon-light'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Ayesha-Noor-04',
      href: 'https://github.com/Ayesha-Noor-04',
      color: 'portfolio-gunmetal'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 bg-portfolio-deep-black scroll-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            Let's Connect
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="smooth-reveal text-center">
                <h3 className="text-2xl font-semibold text-portfolio-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-portfolio-silver leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, collaborations, or interesting projects. 
                  Whether you have a question about my work or just want to connect, feel free to reach out!
                </p>
                
                <div className="flex items-center justify-center text-portfolio-silver mb-12">
                  <MapPin className="text-portfolio-maroon mr-3" size={20} />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 smooth-reveal max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-portfolio-white mb-6 text-center">
                  Connect With Me
                </h4>
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="elegant-card flex items-center space-x-4 hover:scale-105 transition-transform duration-300 block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg bg-${link.color}/20`}>
                      <link.icon className={`text-${link.color}`} size={24} />
                    </div>
                    <div>
                      <p className="text-portfolio-white font-semibold">{link.label}</p>
                      <p className="text-portfolio-silver text-sm font-mono">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

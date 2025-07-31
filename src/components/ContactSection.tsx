import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <section id="contact" ref={sectionRef} className="py-20 bg-portfolio-deep-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-portfolio-white smooth-reveal">
            Let's Connect
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="smooth-reveal">
                <h3 className="text-2xl font-semibold text-portfolio-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-portfolio-silver leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, collaborations, or interesting projects. 
                  Whether you have a question about my work or just want to connect, feel free to reach out!
                </p>
                
                <div className="flex items-center text-portfolio-silver mb-8">
                  <MapPin className="text-portfolio-maroon mr-3" size={20} />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 smooth-reveal">
                <h4 className="text-xl font-semibold text-portfolio-white mb-4">
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
                      <p className="text-portfolio-silver text-sm">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="smooth-reveal">
              <form onSubmit={handleSubmit} className="elegant-card space-y-6">
                <h3 className="text-2xl font-semibold text-portfolio-white mb-6">
                  Send a Message
                </h3>

                {isSubmitted && (
                  <div className="p-4 bg-portfolio-maroon/20 border border-portfolio-maroon/50 rounded-lg text-portfolio-maroon text-center">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-portfolio-silver mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-portfolio-gunmetal/50 border border-portfolio-gunmetal text-portfolio-white rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-maroon focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-portfolio-silver mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-portfolio-gunmetal/50 border border-portfolio-gunmetal text-portfolio-white rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-maroon focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-portfolio-silver mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-portfolio-gunmetal/50 border border-portfolio-gunmetal text-portfolio-white rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-maroon focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-portfolio-maroon hover:bg-portfolio-maroon-light text-portfolio-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
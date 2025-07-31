import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-black/80 border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Left Side - Copyright */}
            <div className="text-portfolio-silver text-sm">
              © {currentYear} Ayesha Noor. All rights reserved.
            </div>

            {/* Center - Made with love */}
            <div className="flex items-center space-x-2 text-portfolio-silver text-sm">
              <span>Made with</span>
              <Heart className="text-portfolio-maroon" size={16} fill="currentColor" />
              <span>and lots of</span>
              <Coffee className="text-portfolio-maroon" size={16} />
            </div>

            {/* Right Side - Tech stack */}
            <div className="flex items-center space-x-2 text-portfolio-silver text-sm">
              <Code className="text-portfolio-maroon" size={16} />
              <span>Built with React & TypeScript</span>
            </div>
          </div>

          {/* Scroll to top button */}
          <div className="text-center mt-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-portfolio-maroon hover:text-portfolio-maroon-light transition-colors duration-300 text-sm"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
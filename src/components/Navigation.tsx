import { Download, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Get viewport height to determine when second section is in center
          const viewportHeight = window.innerHeight;
          const scrollPosition = window.scrollY;
          
          // Show navbar when user has scrolled past the first section (roughly viewport height)
          const showNavThreshold = viewportHeight * 0.8; // Show when 80% through first section
          
          setIsVisible(scrollPosition > showNavThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navigation-container">
        <div className="navigation-content">
          {/* Logo */}
          <div className="navigation-logo">
            <div className="navigation-logo-icon">
              <span className="text-background font-bold text-lg">C</span>
            </div>
            <span className="navigation-logo-text">X38</span>
          </div>

          {/* CTA Button */}
          <div className="navigation-cta">
            <button className="navigation-download-button">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navigation-mobile-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navigation-mobile-menu">
            <button className="navigation-mobile-download">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
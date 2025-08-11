import { Download, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import "./Navigation.css";
import LogoSVG from "./logo";

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
          const navbarHeight = 100; // Navbar height plus some buffer
          
          // Show navbar when user has scrolled past the first section (roughly viewport height)
          const showNavThreshold = viewportHeight * 0.8; // Show when 80% through first section
          
          setIsVisible(scrollPosition > showNavThreshold);
          
          // Apply fade effect to sections that are behind the navbar
          if (scrollPosition > showNavThreshold) {
            const sections = document.querySelectorAll('.hero-section, .features-section, .cta-section, .footer');
            
            sections.forEach((section) => {
              const rect = section.getBoundingClientRect();
              const sectionTop = rect.top;
              const sectionBottom = rect.bottom;
              
              // Check if the top part of the section is intersecting with navbar area
              const isTopPartBehindNavbar = sectionTop < navbarHeight && sectionTop > -50; // Some tolerance
              const hasContentBehindNavbar = sectionBottom > 0 && sectionTop < navbarHeight;
              
              if (hasContentBehindNavbar && isTopPartBehindNavbar) {
                section.classList.add('fade-behind-navbar');
              } else {
                section.classList.remove('fade-behind-navbar');
              }
            });
          } else {
            // Remove fade from all sections when navbar is hidden
            const sections = document.querySelectorAll('.hero-section, .features-section, .cta-section, .footer');
            sections.forEach((section) => {
              section.classList.remove('fade-behind-navbar');
            });
          }
          
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
              <LogoSVG />
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
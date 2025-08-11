import { Button } from "@/components/ui/button";
import "./HeroSection.css";
import LogoSVG from "./logo";
import './Beam.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image Opacity Overlay */}
      <div className="hero-bg-overlay" />
      
      {/* Beam Effects */}
      {/* <div className="hero-beam-container"> */}
        {/* Radial Beam from Top */}
        {/* <div className="hero-beam-radial" /> */}
        {/* Subtle Diagonal Beams - Copilot Style */}
        {/* <div className="hero-beam-diagonal"></div> */}
        <div className="hero-beam-diagonal"></div>
        <div className="hero-beam-diagonal"></div>
        {/* <div className="hero-beam-diagonal"></div>
        <div className="hero-beam-diagonal"></div> */}
      {/* </div> */}
      
      {/* Background Grid Pattern */}
      <div className="hero-grid-pattern" />
      
      {/* Gradient Overlay */}
      <div className="hero-gradient-overlay" />
      
      {/* Shadow Overlay */}
      <div className="hero-shadow-overlay" />
      
     
      
      {/* Floating Elements */}
      {/* <div className="hero-floating-element hero-floating-1" />
      <div className="hero-floating-element hero-floating-2" />
       <div className="hero-floating-element hero-floating-3" /> */}
      
      {/* Additional floating particles */}
      {/* <div className="hero-floating-element" style={{
        top: '15%', right: '20%', width: '3px', height: '3px',
        background: 'hsl(var(--accent))', opacity: 0.4,
        animation: 'float 4s ease-in-out infinite, fade-in-out 3s ease-in-out infinite',
        animationDelay: '0.5s'
      }} />
      <div className="hero-floating-element" style={{
        bottom: '20%', left: '15%', width: '5px', height: '5px',
        background: 'hsl(var(--primary))', opacity: 0.3,
        animation: 'float 5s ease-in-out infinite, fade-in-out 4s ease-in-out infinite',
        animationDelay: '2.5s'
      }} />
      <div className="hero-floating-element" style={{
        top: '60%', right: '15%', width: '2px', height: '2px',
        background: 'hsl(var(--accent))', opacity: 0.5,
        animation: 'float 3.5s ease-in-out infinite, fade-in-out 2.5s ease-in-out infinite',
        animationDelay: '1.8s'
      }} /> */}
      
      {/* Main Content */}
      <div className="hero-content mb-0">
        {/* Logo/Icon */}
        <div className="hero-logo" style={{ animation: 'fade-in 0.6s ease-out', animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="hero-logo-icon">
            <LogoSVG/>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="hero-heading mb-0" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <span className="hero-heading-gradient">X38 AI Labs</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle mb-5" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          AI-Powered Financial Navigation
        </p>

        {/* CTA Button */}
        <div className="hero-cta-container" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
          <button className="hero-cta-button">
            <span className="hero-cta-text">Try free for 30 days</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
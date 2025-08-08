import { Download } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span className="text-background font-bold text-lg">C</span>
              </div>
              <span className="footer-logo-text">Copilot</span>
            </div>
            <p className="footer-description">
              AI-Powered Financial Navigation
            </p>
          </div>

          {/* Links */}
          <div className="footer-links-section">
            <h4 className="footer-links-title">More about Copilot</h4>
            <div className="footer-links-list">
              <a href="#" className="footer-link">Features & Pricing</a>
              <a href="#" className="footer-link">Privacy & Security</a>
              <a href="#" className="footer-link">Help center</a>
              <a href="#" className="footer-link">Terms of service</a>
              <a href="#" className="footer-link">Privacy policy</a>
              <a href="#" className="footer-link">Changelog</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
          </div>

          {/* Download */}
          <div className="footer-download-section">
            <h4 className="footer-download-title">For Mac and iPhone</h4>
            <button className="footer-download-button">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © Copyright 2023 Copilot Money, Inc.
          </p>
          <div className="footer-social">
            {/* Social links would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

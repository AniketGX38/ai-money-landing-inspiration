import { Download } from "lucide-react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">
          Try Copilot for free.
        </h2>
        <p className="cta-subtitle">
          First month on us.
        </p>
        <button className="cta-button">
          <Download className="w-5 h-5" />
          Download
        </button>
        <p className="cta-description">
          Supercharge your savings and investments
        </p>
      </div>
    </section>
  );
};

export default CTASection;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./LegalPages.css";

const TermsOfService = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* AI-Inspired Background System */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 50% 0%, hsl(var(--primary) / 0.05) 0%, transparent 60%),
              radial-gradient(ellipse 600px 300px at 80% 100%, hsl(var(--accent) / 0.03) 0%, transparent 60%),
              linear-gradient(180deg, 
                hsl(var(--background)) 0%,
                hsl(var(--background) / 0.98) 30%,
                hsl(var(--background) / 0.95) 60%,
                hsl(var(--background) / 0.98) 80%,
                hsl(var(--background)) 100%
              )
            `
          }}
        />
        
        {/* Subtle beam effects */}
        <div 
          className="absolute top-20 left-1/4 w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float-slow 12s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-32 right-1/4 w-80 h-80 opacity-8"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)',
            filter: 'blur(35px)',
            animation: 'float-slow 15s ease-in-out infinite reverse',
            animationDelay: '3s'
          }}
        />
      </div>

      <Navigation />
      
      <main className="legal-page">
        <div className="legal-container">
          {/* Breadcrumb Navigation */}
          <div className="legal-breadcrumb">
            <nav className="legal-breadcrumb-nav">
              <a href="/" className="legal-breadcrumb-link">Home</a>
              <span className="legal-breadcrumb-separator">›</span>
              <span className="legal-breadcrumb-current">Terms of Service</span>
            </nav>
          </div>

          {/* Header Section */}
          <div className="legal-header">
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-subtitle">
              Last updated: January 2024
            </p>
          </div>

          {/* Content Section */}
          <div className="legal-content">
            <section className="legal-section">
              <h2 className="legal-section-title">1. Acceptance of Terms</h2>
              <p className="legal-text">
                By accessing and using X38 AI Labs services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">2. Use License</h2>
              <p className="legal-text">
                Permission is granted to temporarily download one copy of the materials on X38 AI Labs' website for personal, non-commercial transitory viewing only.
              </p>
              <ul className="legal-list">
                <li>This is the grant of a license, not a transfer of title</li>
                <li>Under this license you may not modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">3. Disclaimer</h2>
              <p className="legal-text">
                The materials on X38 AI Labs' website are provided on an 'as is' basis. X38 AI Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">4. Limitations</h2>
              <p className="legal-text">
                In no event shall X38 AI Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on X38 AI Labs' website.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">5. Accuracy of Materials</h2>
              <p className="legal-text">
                The materials appearing on X38 AI Labs' website could include technical, typographical, or photographic errors. X38 AI Labs does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">6. Links</h2>
              <p className="legal-text">
                X38 AI Labs has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by X38 AI Labs of the site.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">7. Modifications</h2>
              <p className="legal-text">
                X38 AI Labs may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">8. Governing Law</h2>
              <p className="legal-text">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">Contact Information</h2>
              <p className="legal-text">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="legal-contact">
                <p><strong>X38 AI Labs Pvt Ltd.</strong></p>
                <p>Email: legal@projectx38.com</p>
                <p>Website: www.projectx38.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

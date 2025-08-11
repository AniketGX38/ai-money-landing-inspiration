import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./LegalPages.css";

const PrivacyPolicy = () => {
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
          className="absolute top-20 right-1/3 w-80 h-80 opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float-slow 14s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-40 left-1/3 w-96 h-96 opacity-8"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)',
            filter: 'blur(35px)',
            animation: 'float-slow 16s ease-in-out infinite reverse',
            animationDelay: '2s'
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
              <span className="legal-breadcrumb-current">Privacy Policy</span>
            </nav>
          </div>

          {/* Header Section */}
          <div className="legal-header">
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-subtitle">
              Last updated: January 2024
            </p>
          </div>

          {/* Content Section */}
          <div className="legal-content">
            <section className="legal-section">
              <h2 className="legal-section-title">1. Information We Collect</h2>
              <p className="legal-text">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
              <ul className="legal-list">
                <li>Personal information (name, email address, phone number)</li>
                <li>Account credentials and preferences</li>
                <li>Communication data when you contact us</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">2. How We Use Your Information</h2>
              <p className="legal-text">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
              <ul className="legal-list">
                <li>Provide and maintain our AI services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">3. Information Sharing</h2>
              <p className="legal-text">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
              <ul className="legal-list">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers under strict confidentiality</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">4. Data Security</h2>
              <p className="legal-text">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">5. Data Retention</h2>
              <p className="legal-text">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">6. Your Rights</h2>
              <p className="legal-text">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="legal-list">
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate data</li>
                <li>Right to erase your data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">7. Cookies and Tracking</h2>
              <p className="legal-text">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">8. Third-Party Services</h2>
              <p className="legal-text">
                Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">9. Children's Privacy</h2>
              <p className="legal-text">
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">10. Changes to This Policy</h2>
              <p className="legal-text">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">Contact Information</h2>
              <p className="legal-text">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="legal-contact">
                <p><strong>X38 AI Labs Pvt Ltd.</strong></p>
                <p>Email: privacy@projectx38.com</p>
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

export default PrivacyPolicy;

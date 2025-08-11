import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./LegalPages.css";

const RefundPolicy = () => {
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
              <span className="legal-breadcrumb-current">Refund Policy</span>
            </nav>
          </div>

          {/* Header Section */}
          <div className="legal-header">
            <h1 className="legal-title">Refund Policy</h1>
            <p className="legal-subtitle">
              Last updated: January 2024
            </p>
          </div>

          {/* Content Section */}
          <div className="legal-content">
            <section className="legal-section">
              <h2 className="legal-section-title">Introduction</h2>
              <p className="legal-text">
                X38 AI LABS ("X38", "we", "our") provides cloud platform and configuration services, including but not limited to smart dedicated servers, graphics processing units, object storage, content delivery network service and continuous data protection backup services ("Services") to its customers ("Customer(s)", "you", "your"), and such use of the Services by the Customers shall be governed by online terms of service available at link projectx38.com/policies/terms-of-service and/or a master services agreement, if any, executed between X38 and the Customer.
              </p>
              <p className="legal-text">
                This refund policy ("Policy") describes the cases in which a refund may be due to the Customer and sets out the terms governing such refund. Your use of the Services or your registration with us for availing the Services, constitutes your agreement to this Policy. X38 may modify this Policy at any time by posting a revised version of the same on X38's website and the amended version of this Policy shall become automatically binding on you, if you continue to avail of the Services.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">A. Refund for Invoice Discrepancies</h2>
              <p className="legal-text">
                If you find any discrepancies in our invoices with respect to usage metrics or the Services subscribed by you and/or other details mentioned on the invoice like GSTIN etc., you are required to email us at billing-support@projectx38.com within 7 (Seven) days of first receipt of Invoice on email id (s) registered with us ("Invoice Email").
              </p>
              <ul className="legal-list">
                <li>We will verify the validity of the alleged discrepancies internally and after verifying whether any refund is due, we may at our discretion, offer you a credit note or infra credits and/or refund the proportionate amount, wherever required.</li>
                <li>If you do not inform us of any discrepancy within 7 (Seven) days of the date of the Invoice Email, then thereafter, we will not entertain any requests to modify bills/offer credit notes or offer refund in any other form.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">B. Refund in case of Deprovisioning of Services</h2>
              <p className="legal-text">
                All Services shall be presumed to be in an active state and shall be billed till the date of de-provisioning of respective Services. The Customer is required to follow the below process for making any de-provisioning request:
              </p>
              <ul className="legal-list">
                <li><strong>Services availed through Self Service Portal:</strong> The Services availed by you via self-service portal accessible at https://myaccount.projectx38.com can be de-provisioned by you by making a request through the self-service portal. For termination of the Services, the Customer can follow the steps mentioned in help article available at link https://docs.projectx38.com/nodes/managenode.html.</li>
                <li><strong>Services Provisioned Manually:</strong> Where Services have been provisioned manually by our team on your request, you shall have to explicitly file a request for de-provisioning of the Services by sending an email to us at cloud-platform@projectx38.com specifying explicitly the date of de-provisioning. Such request shall be treated as valid only if sent through your authorized technical contact and the de-provisioning shall have to be unconditional.</li>
                <li>On receiving your request for de-provisioning of Service(s), our provisioning team will de-provision that/those Service(s) and send you and the X38 finance team a de-provisioning mail ("De-provisioning Email"). We will cease billing for that/those service(s) from the effective de-provisioning date mentioned in the De-Provisioning Email, which is copied to our finance team.</li>
                <li>In case our finance team inadvertently misses accounting for a De-provisioning Email and has billed you for the de-provisioned services, we shall rectify the error by issuing a credit note or infra credits, on receipt of an email to that effect from you. To enable us to do the same we request you to email us at billing-support@projectx38.com notifying us of the error along with the details of the appropriate De-provisioning Email received from provisioning@projectx38.com detailing the de-provisioning request.</li>
                <li>The billing period for Services includes the day of provisioning and the day of de-provisioning and all the days in between these two dates. All manually provisioned services including virtual/dedicated compute nodes are billed in advance as per the monthly billing cycle (unless you have specifically requested for a longer billing cycle).</li>
                <li>If you request us to de-provision any manually provisioned service before the end of its billing cycle, we may, at our discretion, issue equivalent credit note or infra credits or refund the remaining amount charged in advance in full minus any payment gateway transaction charges to the source through which payment was received earlier. Alternatively, if you continue to avail other services that are still in the provisioned state, the remaining amount may be adjusted in the next billing cycle.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">C. Refund for Software Licenses</h2>
              <p className="legal-text">
                The software licenses billed by us are billed for each calendar month regardless of the period of usage during the month. Once a software license has been used during a calendar month, it is NOT eligible for a refund and you will be charged for the full monthly cost of that license. Refund of software license cost paid for unused future months is however possible, on receipt of an email from you to us at billing-support@projectx38.com requesting the same.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">D. Refund of Prepaid Infra Credits</h2>
              <p className="legal-text">
                If you have any unused prepaid infra credits in your Customer Account and you don't intend to use any further Services, then you can request refund by sending email to billing-support@projectx38.com, provided Customer account is not in "Inactive/dormant state".
              </p>
              <ul className="legal-list">
                <li>For the purpose of this clause, 'Inactive/dormant state' shall mean a Customer account which, at any point of time, has not consumed any of the Services in the preceding 90 (Ninety) days.</li>
                <li>No refund shall be due after the expiry of 90 days and we shall have the right to invalidate such credits after following the process mentioned in our TOS.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">E. TDS Refund</h2>
              <p className="legal-text">
                In order to claim a TDS refund, please refer to our TDS help article accessible at 'TDS Refund- How to claim TDS refunds? - X38 Networks Knowledgebase', for information on the process to be followed.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">Non-Refundable Items</h2>
              <p className="legal-text">
                You shall not be entitled to any refund in the following cases:
              </p>
              <ul className="legal-list">
                <li><strong>Minimum Billing Committed Nodes:</strong> The committed nodes are launched for a specific committed period for a fixed price and you shall not be eligible for a refund of the amount paid for the same. Additionally, you will not be eligible for a refund of the minimum billing amounts charged in each billing cycle.</li>
                <li>Promotional code benefits, free coupons etc. are not refunded.</li>
                <li>The transaction fees charged by payment gateways are not refunded.</li>
                <li>If you have an outstanding balance in any of the linked Customer accounts or if we suspect that your Customer account is linked in any manner to another customer account(s) which has outstanding dues, you will not be entitled to a refund. The balance, if any, remaining after adjustment of the outstanding balance for such linked customer account, shall be refunded to you.</li>
                <li>For the purpose of this clause, outstanding dues shall include outstanding TDS payable for the Services, where a duly signed TDS certificate has not been provided by you.</li>
                <li>In case of suspected violations of our TOS, Company Policies (as defined in our TOS) etc.</li>
                <li>Any other cases, which at our discretion would disentitle you to a refund.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">General Terms</h2>
              <p className="legal-text">
                All requests for refund shall be sent to billing-support@projectx38.com within the timeline mentioned herein above. To the fullest extent permitted by applicable law, you hereby waive all claims relating to fees/charges payable/already paid to us unless claimed within the timeline prescribed in this refund policy.
              </p>
            </section>

            <section className="legal-section">
              <h2 className="legal-section-title">Contact Information</h2>
              <p className="legal-text">
                For refund requests or questions about this policy, please contact us at:
              </p>
              <div className="legal-contact">
                <p><strong>X38 AI Labs Pvt Ltd.</strong></p>
                <p>Email: refunds@projectx38.com</p>
                <p>Support: support@projectx38.com</p>
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

export default RefundPolicy;

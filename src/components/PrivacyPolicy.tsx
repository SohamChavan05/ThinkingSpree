export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        {/* Breadcrumb / Label */}
        <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block mb-3">
          ✦ LEGAL & TRUST
        </span>
        
        {/* Title */}
        <h1 
          className="text-[36px] md:text-[48px] font-bold text-[#1a1a1a] leading-tight mb-4"
          style={{ fontFamily: "'PT Serif', Georgia, serif" }}
        >
          Privacy Policy
        </h1>
        
        {/* Last Updated */}
        <p className="text-[12.5px] text-gray-400 mb-10">
          Last Updated: July 6, 2026
        </p>

        {/* Intro */}
        <div className="space-y-8 text-[14.5px] text-gray-600 leading-relaxed font-light font-sans">
          <p className="text-[16px] text-gray-800 font-normal">
            At ThinkingSpree, we respect your privacy and are committed to protecting the business intelligence, metrics, and personal data you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, schedule a discovery call, or engage with our T-Sprints.
          </p>

          <hr className="border-gray-100" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              1. Information We Collect
            </h2>
            <p>
              To deliver our strategic and venture-building services, we collect information across three main categories:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Contact Information:</strong> When you book a discovery call or become a partner, we collect your name, business email address, phone number, company name, and website.
              </li>
              <li>
                <strong>Business Diagnostic Data:</strong> During surveys, diagnostic forms, or initial intake sessions, you may share data regarding your startup's revenue run rate, operational bottlenecks, scaling challenges, and strategic goals.
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> We automatically collect standard information such as IP addresses, browser types, referral links, and pages visited using cookies to optimize our platform's user experience.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              2. How We Use Your Information
            </h2>
            <p>
              We process your data to help you design, build, and compound your business. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>To schedule, confirm, and customize your Discovery Call and initial consultations.</li>
              <li>To align our Growth Strategy T-Sprints to your specific organizational stage (e.g., Early Stage vs. Growth Stage).</li>
              <li>To communicate custom deliverables, downloadable brochures, and case studies that match your business profile.</li>
              <li>To run program-wide performance analytics for accelerator and incubator partners.</li>
              <li>To maintain and improve the security, performance, and responsive layout of our digital services.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              3. Data Security and Confidentiality
            </h2>
            <p>
              Because we consult inside sensitive business contexts, data protection is core to how we work:
            </p>
            <p>
              We implement industry-standard encryption, firewalls, and secure databases to protect your personal and company information from unauthorized access, loss, or disclosure. We limit internal access to team members who require the information to perform consulting sprints (T-Sprints).
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              4. Sharing of Information
            </h2>
            <p>
              We do not sell, trade, or rent your business diagnostic details or personal contact details to third parties. We may share information under the following limited circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>With Ecosystem Partners:</strong> If you are enrolled in an incubator or accelerator program partnering with ThinkingSpree, we may share aggregate or specific progress metrics with the program administration to measure cohort outcomes.
              </li>
              <li>
                <strong>Service Providers:</strong> Secure third-party tools we use to manage schedules (calendars), CRM records, and email communications.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law, regulation, or legal process to protect safety, property, or legal rights.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              5. Your Choices & Access Rights
            </h2>
            <p>
              You maintain control over your company's information. You can contact us at any time to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Request access to, correction of, or deletion of your contact or business profile records.</li>
              <li>Opt-out of future diagnostic newsletters, brochures, or marketing emails.</li>
              <li>Request an operational NDA (Non-Disclosure Agreement) prior to participating in high-intensity Builder T-Sprints.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              6. Contact Us
            </h2>
            <p>
              If you have any questions, feedback, or concerns regarding this Privacy Policy, please reach out to us:
            </p>
            <p className="font-medium text-[#2F4A2F] mt-2">
              ThinkingSpree Legal Team <br />
              Email: <a href="mailto:hello@thinkingspree.com" className="underline hover:text-[#E29A52] transition-colors">hello@thinkingspree.com</a> <br />
              Locations: Bangalore, Hyderabad, Mumbai, Delhi & Kolkata
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

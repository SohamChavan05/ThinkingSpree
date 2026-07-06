export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        {/* Breadcrumb / Label */}
        <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block mb-3">
          ✦ RULES & GUIDELINES
        </span>
        
        {/* Title */}
        <h1 
          className="text-[36px] md:text-[48px] font-bold text-[#1a1a1a] leading-tight mb-4"
          style={{ fontFamily: "'PT Serif', Georgia, serif" }}
        >
          Terms of Service
        </h1>
        
        {/* Last Updated */}
        <p className="text-[12.5px] text-gray-400 mb-10">
          Last Updated: July 6, 2026
        </p>

        {/* Intro */}
        <div className="space-y-8 text-[14.5px] text-gray-600 leading-relaxed font-light font-sans">
          <p className="text-[16px] text-gray-800 font-normal">
            Welcome to ThinkingSpree. These Terms of Service ("Terms") govern your access to and use of our website, discovery calls, and advisory consulting programs (including our proprietary T-Sprints). By visiting our website or booking a sprint engagement, you agree to comply with and be bound by these Terms.
          </p>

          <hr className="border-gray-100" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              1. Services and Sprints (T-Sprints)
            </h2>
            <p>
              ThinkingSpree provides strategic consulting, product building support, GTM analysis, and advisory services delivered through a structured sprint format known as T-Sprints:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Growth Strategy Sprints:</strong> Focused strategic alignment, bottleneck mapping, and goal-setting sessions designed to establish executive clarity.
              </li>
              <li>
                <strong>Builder Sprints:</strong> Custom functional sprints across product development, pricing, sales setup, operations, and partner networking.
              </li>
              <li>
                <strong>Scope of Engagement:</strong> Specific sprint timelines, milestones, deliverables, and fees are defined in individual statements of work or program partnership agreements.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              2. Intellectual Property (IP) Rights
            </h2>
            <p>
              Our consulting engagements involve proprietary tools and custom business output:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>ThinkingSpree Frameworks:</strong> All proprietary methods, sprint structures, blank templates, growth map models, and software configurations used by ThinkingSpree remain our exclusive intellectual property.
              </li>
              <li>
                <strong>Client Deliverables:</strong> Upon payment of applicable fees, the specific business plans, custom product definitions, database structures, and diagnostics created specifically for your startup belong to you.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              3. User Responsibilities & Conduct
            </h2>
            <p>
              To ensure highly productive and high-fidelity sprints, clients agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Provide accurate, complete, and timely business diagnostic metrics during consultations.</li>
              <li>Maintain the confidentiality of shared workshop documents and materials.</li>
              <li>Attend scheduled diagnostic calls and program sessions. Rescheduling policies will match guidelines defined in program agreements.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              4. Disclaimer of Business Outcomes
            </h2>
            <p>
              While we utilize data-driven growth models, proven T-Sprint methodologies, and first-principles design thinking, business success depends on Relentless Execution, market conditions, and operational variables:
            </p>
            <p className="italic">
              ThinkingSpree does not guarantee specific revenue targets, fundraising success, or customer acquisition milestones. All projections are estimates for planning purposes and do not represent contractual promises of future performance.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall ThinkingSpree, its founders, operators, or partners be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or goodwill) arising out of your access to our website, discovery calls, or advisory sprints.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              6. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted to this page with an updated "Last Updated" date. Continued use of our website or consulting services following changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 
              className="text-[20px] font-bold text-[#2F4A2F]"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              7. Contact Us
            </h2>
            <p>
              If you have any questions or require clarification on these Terms, please contact us:
            </p>
            <p className="font-medium text-[#2F4A2F] mt-2">
              ThinkingSpree Legal & Operations <br />
              Email: <a href="mailto:hello@thinkingspree.com" className="underline hover:text-[#E29A52] transition-colors">hello@thinkingspree.com</a> <br />
              Locations: Bangalore, Hyderabad, Mumbai, Delhi & Kolkata
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

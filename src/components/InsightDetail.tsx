import { useParams, Link } from 'react-router-dom';
import { insightsArticles } from './Insights';
import FinalCTA from './FinalCTA';

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find the basic article data
  const article = insightsArticles.find(art => art.slug === slug) || insightsArticles[0];

  // Specific high-fidelity content mapping
  const isGtmArticle = article.slug === 'why-gtm-isnt-broken';

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ─── Unified Green Header Card ─── */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-[#EEF8E6]/60 border border-[#D2ECBE] rounded-2xl overflow-hidden p-6 md:p-8 grid lg:grid-cols-[1.1fr_1.3fr] gap-8 relative">
          {/* Background Ornament */}
          <img
            src="/Offering/element_3.png"
            alt="ornament"
            className="absolute -bottom-2 -right-2 w-20 h-20 opacity-40 pointer-events-none select-none z-0"
          />

          {/* Left - Image */}
          <div className="h-64 lg:h-auto overflow-hidden relative rounded-xl w-full">
            <img
              src="/whiteboard_sticky_notes.png"
              alt="Whiteboard sticky notes GTM planning"
              className="w-full h-100 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-between h-full py-1 relative z-10 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#2F4A2F] text-white text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-[12px] text-gray-500 font-light">{article.date}</span>
                <span className="text-[12px] text-gray-500 font-light">•</span>
                <span className="text-[12px] text-gray-500 font-light">{article.readTime} read</span>
              </div>

              <h1
                className="text-[34px] md:text-[44px] font-semibold text-[#111111] leading-tight pt-2"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                {article.title}
              </h1>

              <p className="text-[13px] md:text-[14px] text-[#555555] leading-relaxed font-light">
                {article.description}
              </p>
            </div>

            {/* Author profile block */}
            <div className="flex items-center gap-3 pt-2">
              <div className={`w-9 h-9 rounded-full ${article.authorBg} flex items-center justify-center font-bold text-[11px] text-[#2F4A2F]`}>
                {article.authorInitials}
              </div>
              <div>
                <div className="text-[12.5px] font-semibold text-[#111111]">{article.author}</div>
                <div className="text-[10.5px] text-gray-400 font-light">Growth Architect, ThinkingSpree</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Article Body ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-16 text-[#444444] leading-relaxed text-[14.5px] font-light">
        {isGtmArticle ? (
          <>
            {/* GTM Article Body Section 1 */}
            <div className="space-y-4">
              <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block mb-2">
                WHAT WE DO
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Opportunity mapping inside the T-Sprint
              </h2>
              <p>
                Every week, a founder tells us their GTM is the problem. The deck is sharp. The team is willing. But the pipeline is quiet. After 1,500+ T-Sprints, we've learned that most go-to-market failures trace back to one thing: the team doesn't agree on who they're selling to and why now.
              </p>

              {/* Checklist */}
              <ul className="space-y-2 pt-2 pl-1">
                {[
                  'Opportunity identification',
                  'Executive alignment validation',
                  'Distribution channel metrics',
                  'Process automation',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14px]">
                    <span className="w-5 h-5 rounded-full bg-[#E2F0DD] flex items-center justify-center text-[#386638] shrink-0 font-bold text-[11px]">✓</span>
                    <span className="text-[#333333] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-2">
                The first thing we did was stop trying to sell everything. Working with the leadership team, we decoded the entire portfolio — mapping each product against ease of close, value potential, and core market demand. What emerged was a clear hierarchy: two flagship products for Banks and NBFCs that could anchor the entire sales story, with everything else demoted to bundles.
              </p>

              <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl my-4">
                <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                  This single decision unlocked ₹6.4 Cr of immediate revenue visibility from existing clients and leads that had been sitting untouched — no new acquisition required.
                </p>
              </div>
            </div>

            {/* Section 2 - Chart 1 */}
            <div className="space-y-4 pt-4">
              <span className="text-gray-400 text-[11px] font-bold tracking-widest uppercase block mb-1">
                CONVERSION RATE BY FOCUS
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Conversion rate by focus
              </h2>
              
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 my-8 text-center space-y-6 shadow-sm relative overflow-hidden">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  CONVERSION RATE IMPROVEMENT BY SEGMENT FOCUS
                </span>
                <div className="w-full flex justify-center py-2">
                  <svg width="550" height="250" viewBox="0 0 550 250" className="max-w-full">
                    {/* Grid Lines */}
                    <line x1="50" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="160" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="210" x2="500" y2="210" stroke="#cbd5e1" strokeWidth="1.5" />

                    {/* Y-Axis Labels */}
                    <text x="35" y="44" fill="#94a3b8" fontSize="10" textAnchor="end">30%</text>
                    <text x="35" y="104" fill="#94a3b8" fontSize="10" textAnchor="end">20%</text>
                    <text x="35" y="164" fill="#94a3b8" fontSize="10" textAnchor="end">10%</text>
                    <text x="35" y="214" fill="#94a3b8" fontSize="10" textAnchor="end">0%</text>

                    {/* X-Axis Labels */}
                    <text x="50" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">Week 1</text>
                    <text x="140" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">Week 2</text>
                    <text x="230" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">Week 3</text>
                    <text x="320" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">Week 4</text>
                    <text x="410" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">Week 5</text>
                    <text x="500" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">Week 6</text>

                    {/* Curve 1 (Segment Focused - Green) */}
                    <path d="M 50 190 Q 140 150 230 110 T 415 60 T 500 45" fill="none" stroke="#2F4A2F" strokeWidth="3" />
                    {/* Curve 2 (Broad Outreach - Blue) */}
                    <path d="M 50 200 Q 140 193 230 185 T 415 174 T 500 170" fill="none" stroke="#4A90E2" strokeWidth="2.5" strokeDasharray="4 4" />

                    {/* Legend */}
                    <circle cx="150" cy="20" r="4" fill="#2F4A2F" />
                    <text x="160" y="24" fill="#1a1a1a" fontSize="10">Segment-Focused Campaign</text>
                    <circle cx="330" cy="20" r="4" fill="#4A90E2" />
                    <text x="340" y="24" fill="#1a1a1a" fontSize="10">Broad Campaigns</text>
                  </svg>
                </div>
                <p className="text-[12px] text-gray-400">
                  Segment-focused messaging results in up to 3x higher conversion rate improvements over 6 weeks.
                </p>
              </div>
            </div>

            {/* Section 3 - Bars Chart */}
            <div className="space-y-4 pt-4">
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Opportunity mapping inside the T-Sprint
              </h2>
              
              <ul className="space-y-2 pt-2 pl-1">
                {[
                  'Opportunity Identification',
                  'Segment validation',
                  'Distribution Channel Setup',
                  'Process Automation',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14px]">
                    <span className="w-5 h-5 rounded-full bg-[#E2F0DD] flex items-center justify-center text-[#386638] shrink-0 font-bold text-[11px]">✓</span>
                    <span className="text-[#333333] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-2">
                Clear alignment across these variables allows founders to run sprints with confidence, stopping reactive shifts in priorities.
              </p>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 my-8 text-center space-y-6 shadow-sm relative overflow-hidden">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  CONVERSION FACTOR - PMF VALIDATION
                </span>
                <div className="w-full flex flex-col gap-6 max-w-lg mx-auto pt-4 pb-2">
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-[#2F4A2F]">
                      <span>Validation</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#D2ECBE] h-full rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-[#2F4A2F]">
                      <span>Value alignment</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#D2ECBE] h-full rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-[#2F4A2F]">
                      <span>Sales automation</span>
                      <span>68%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#D2ECBE] h-full rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-[13px] font-semibold text-[#2F4A2F]">
                      <span>Founder dependency</span>
                      <span>58%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#D2ECBE] h-full rounded-full" style={{ width: '58%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 - Image */}
            <div className="rounded-xl overflow-hidden h-[240px] md:h-[400px] my-6">
              <img
                src="/strategy_documents.png"
                alt="Strategy documents on desk"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Section 5 - Outcomes in details */}
            <div className="space-y-4 pt-4">
              <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block mb-2">
                OUTCOMES IN DETAILS
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                What changed — and what it set in motion
              </h2>

              <ul className="space-y-4 pt-2">
                {[
                  {
                    title: 'Immediate ARR growth',
                    desc: 'Annual recurring revenue grew from ₹12 Cr to ₹18 Cr, with 2 new deals and 30+ hot leads ready for conversion.',
                  },
                  {
                    title: 'Founder out of sales',
                    desc: 'The founder was removed from the day-to-day sales pipeline entirely — client deals closed independently.',
                  },
                  {
                    title: 'Outbound SDR templates',
                    desc: 'Sales reps hitting targets independently using outbound templates and playbooks.',
                  },
                  {
                    title: 'Reduced sales cycle time',
                    desc: 'Sales cycle reduced from 90 days to 45 days, increasing pipeline velocity.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="space-y-1">
                    <div className="text-[15px] font-bold text-[#111111]">
                      {idx + 1}. {item.title}
                    </div>
                    <p className="text-[13.5px] text-[#555555] font-light pl-4 leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl my-4">
                <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                  The results are clear: the team doesn't just sell — they scale systematically. No more guessing, no more scattered priorities.
                </p>
              </div>
            </div>

            {/* Section 6 - Chart 3 */}
            <div className="space-y-4 pt-4">
              <span className="text-gray-400 text-[11px] font-bold tracking-widest uppercase block mb-1">
                WHAT CHANGED — AND WHAT IT SET IN MOTION
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                What changed — and what it set in motion
              </h2>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 my-8 text-center space-y-6 shadow-sm relative overflow-hidden">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  SALES VELOCITY AND CLOSE RATE TRENDS
                </span>
                <div className="w-full flex justify-center py-2">
                  <svg width="550" height="250" viewBox="0 0 550 250" className="max-w-full">
                    <line x1="50" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="160" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="50" y1="210" x2="500" y2="210" stroke="#cbd5e1" strokeWidth="1.5" />

                    <text x="35" y="44" fill="#94a3b8" fontSize="10" textAnchor="end">40%</text>
                    <text x="35" y="104" fill="#94a3b8" fontSize="10" textAnchor="end">25%</text>
                    <text x="35" y="164" fill="#94a3b8" fontSize="10" textAnchor="end">10%</text>
                    <text x="35" y="214" fill="#94a3b8" fontSize="10" textAnchor="end">0%</text>

                    <text x="50" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W1</text>
                    <text x="140" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W2</text>
                    <text x="230" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W3</text>
                    <text x="320" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W4</text>
                    <text x="410" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W5</text>
                    <text x="500" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W6</text>

                    {/* Curve (Close Rate) */}
                    <path d="M 50 185 Q 140 140 230 95 T 415 55 T 500 40" fill="none" stroke="#2F4A2F" strokeWidth="3" />
                    {/* Projected Growth Dotted Curve */}
                    <path d="M 50 195 Q 140 165 230 130 T 415 85 T 500 65" fill="none" stroke="#4A90E2" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Legend */}
                    <circle cx="150" cy="20" r="4" fill="#2F4A2F" />
                    <text x="160" y="24" fill="#1a1a1a" fontSize="10">Actual Growth</text>
                    <circle cx="330" cy="20" r="4" fill="#4A90E2" />
                    <text x="340" y="24" fill="#1a1a1a" fontSize="10">Projected Growth</text>
                  </svg>
                </div>
              </div>

              <p className="pt-2">
                Strong focus, systems, and templates enable teams to run sprints with confidence, stopping reactive shifts in priorities.
              </p>
            </div>

            {/* Section 7 - Repeat Checklist */}
            <div className="space-y-4 pt-4">
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Opportunity mapping inside the T-Sprint
              </h2>
              <p>
                Every week, a founder tells us their GTM is the problem. The deck is sharp. The team is willing. But the pipeline is quiet. After 1,500+ T-Sprints, we've learned that most go-to-market failures trace back to one thing: the team doesn't agree on who they're selling to and why now.
              </p>

              {/* Checklist */}
              <ul className="space-y-2 pt-2 pl-1">
                {[
                  'Opportunity identification',
                  'Executive alignment validation',
                  'Distribution channel metrics',
                  'Process automation',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14px]">
                    <span className="w-5 h-5 rounded-full bg-[#E2F0DD] flex items-center justify-center text-[#386638] shrink-0 font-bold text-[11px]">✓</span>
                    <span className="text-[#333333] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-2">
                Clear alignment across these variables allows founders to run sprints with confidence, stopping reactive shifts in priorities.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Sales Article Body */}
            <p className="text-[17px] font-medium text-[#1a1a1a] leading-relaxed">
              Before you retrain your sales representatives or invest in custom CRM pipelines, answer these five diagnostic questions. Most founders are busy fixing the wrong part of their sales funnel, leading to flat conversion rates.
            </p>

            <h3 className="text-[20px] font-bold text-[#1a1a1a] pt-4" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              The Cost of an Unrefined Sales Motion
            </h3>
            <p>
              Most sales failure is positioning failure. We run discovery calls across a variety of sectors, and we notice the same pattern: reps are pitching features, not outcomes.
            </p>

            <div className="bg-[#FAFDF6] border-l-4 border-[#2F4A2F] p-6 rounded-r-xl my-6">
              <p className="text-[16px] md:text-[18px] text-[#2F4A2F] italic font-medium leading-relaxed">
                "Sales acceleration is not about talking faster; it's about finding the buyer who is already running out of time."
              </p>
            </div>

            <h3 className="text-[20px] font-bold text-[#1a1a1a] pt-4" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              The Five Questions to Ask Today
            </h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Who is the economic buyer?</strong>
                <p className="text-[13.5px] text-gray-500 mt-1">If the person with check-signing authority is not involved in the evaluation, the deal will stall at contract signing.</p>
              </li>
              <li>
                <strong>What is the customer's cost of doing nothing?</strong>
                <p className="text-[13.5px] text-gray-500 mt-1">If doing nothing is free and painless, they will choose nothing over your software every single time.</p>
              </li>
              <li>
                <strong>Why now?</strong>
                <p className="text-[13.5px] text-gray-500 mt-1">What internal metric or board target is forcing them to act this month rather than next quarter?</p>
              </li>
              <li>
                <strong>What is the validated impact?</strong>
                <p className="text-[13.5px] text-gray-500 mt-1">Can you prove you'll save them 10 hours or increase pipeline by 20% within the first 30 days?</p>
              </li>
              <li>
                <strong>Is our delivery loop frictionless?</strong>
                <p className="text-[13.5px] text-gray-500 mt-1">Do we complicate onboarding, or do we deliver value within the first sprint cycle?</p>
              </li>
            </ol>

            {/* SVG Line Chart */}
            <div className="bg-[#FAFDF6] border border-[#EEF8E6] rounded-2xl p-8 my-8 text-center space-y-6">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                SALES VELOCITY AND CLOSE RATE TRENDS
              </span>
              <div className="w-full flex justify-center py-2">
                <svg width="550" height="250" viewBox="0 0 550 250" className="max-w-full">
                  <line x1="50" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="50" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="50" y1="160" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="50" y1="210" x2="500" y2="210" stroke="#cbd5e1" strokeWidth="1.5" />

                  <text x="35" y="44" fill="#94a3b8" fontSize="10" textAnchor="end">40%</text>
                  <text x="35" y="104" fill="#94a3b8" fontSize="10" textAnchor="end">25%</text>
                  <text x="35" y="164" fill="#94a3b8" fontSize="10" textAnchor="end">10%</text>
                  <text x="35" y="214" fill="#94a3b8" fontSize="10" textAnchor="end">0%</text>

                  <text x="50" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W1</text>
                  <text x="140" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W2</text>
                  <text x="230" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W3</text>
                  <text x="320" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W4</text>
                  <text x="410" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W5</text>
                  <text x="500" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle">W6</text>

                  {/* Curve (Close Rate) */}
                  <path d="M 50 185 Q 140 140 230 95 T 415 55 T 500 40" fill="none" stroke="#2F4A2F" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </>
        )}

        {/* ─── Metrics Summary Grid ─── */}
        <div className="bg-[#2F4A2F] rounded-xl p-8 text-white mt-10 shadow-sm">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="md:border-r border-white/10 pr-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">
                {isGtmArticle ? '5x' : '4x'}
              </div>
              <div className="text-[11.5px] text-white/70 font-light mt-2">
                Pipeline Growth
              </div>
            </div>
            <div className="md:border-r border-white/10 px-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">
                {isGtmArticle ? '1,500+' : '30%'}
              </div>
              <div className="text-[11.5px] text-white/70 font-light mt-2">
                {isGtmArticle ? 'Sprints Done' : 'Conversion Rate'}
              </div>
            </div>
            <div className="pl-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">
                {isGtmArticle ? '100+' : '100+'}
              </div>
              <div className="text-[11.5px] text-white/70 font-light mt-2">
                {isGtmArticle ? 'Hours Saved' : 'Hours Saved'}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Page Inner Banner CTA ─── */}
        <div className="bg-[#FAFDF6] border border-[#EEF8E6] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 my-10 relative overflow-hidden">
          {/* Background ornament */}
          <img
            src="/Offering/element_3.png"
            alt="ornament"
            className="absolute -bottom-4 -right-4 w-24 h-24 opacity-60 pointer-events-none select-none z-0"
          />
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              Growth problems only stand out when they appear.
            </h4>
            <p className="text-[12.5px] text-gray-500 font-light">
              We structure custom B2B marketing and sales T-Sprints to resolve your pipeline velocity.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#2F4A2F] text-white text-[12.5px] font-semibold px-5 py-2.5 rounded hover:bg-[#1F3A1F] transition-colors shrink-0 relative z-10"
          >
            Explore Paths
          </Link>
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <FinalCTA />
    </div>
  );
}

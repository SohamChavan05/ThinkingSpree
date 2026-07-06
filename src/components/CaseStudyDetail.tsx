import FinalCTA from './FinalCTA';

export default function CaseStudyDetail() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ─── Case Study Header ─── */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-6">
        <div className="space-y-4">
          <div className="flex items-center flex-wrap gap-y-2">
            <span className="bg-[#E2F0DD] text-[#386638] text-[10.5px] font-bold px-2.5 py-0.5 rounded-[2px] uppercase tracking-wide">
              Fintech · Seed Stage
            </span>
            <span className="text-[12.5px] text-[#8e8e8e] font-light ml-3">
              • &nbsp; 12 T-Sprints · 3 months &nbsp; • &nbsp; 3 June 2026
            </span>
          </div>

          <h1
            className="text-[34px] md:text-[44px] font-semibold text-[#111111] leading-tight pt-2"
          >
            Two years stuck at ₹12 Cr, ₹18 Cr in 3 months.
          </h1>
        </div>
      </section>

      {/* ─── Banner Image ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-6">
        <div className="rounded-xl overflow-hidden h-[240px] md:h-[420px]">
          <img
            src="/whiteboard_sticky_notes.png"
            alt="Fintech Strategy planning session whiteboard"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ─── Summary Paragraph & Metrics Bar ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <p className="text-[16px] md:text-[17.5px] text-[#333333] leading-relaxed font-light mt-6">
          An AI-driven Fintech for banks and NBFCs had all the ingredients for growth — a real product, a real market, 1,000+ leads. What it didn't have was focus, a sales process that worked without the founder, or a clear story to tell buyers. That's what we fixed.
        </p>

        {/* Metrics Bar */}
        <div className="bg-[#2F4A2F] rounded-xl p-8 text-white mt-10 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 md:border-r border-white/10 pr-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">50%</div>
              <div className="text-[11.5px] text-white/70 font-light leading-snug">ARR growth in 3 months</div>
            </div>
            <div className="space-y-1 md:border-r border-white/10 px-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">3x</div>
              <div className="text-[11.5px] text-white/70 font-light leading-snug">More leads, same team</div>
            </div>
            <div className="space-y-1 md:border-r border-white/10 px-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">45d</div>
              <div className="text-[11.5px] text-white/70 font-light leading-snug">Sales cycle (was 6-12 mo)</div>
            </div>
            <div className="space-y-1 pl-2">
              <div className="text-[34px] md:text-[40px] font-bold leading-none">90%</div>
              <div className="text-[11.5px] text-white/70 font-light leading-snug">Less dependence on founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section: The Situation ─── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block mb-2">
            THE SITUATION
          </span>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            A strong product, going nowhere
          </h2>
          <p className="text-[14.5px] text-[#555555] mt-3 font-light leading-relaxed">
            For two years, revenue had flattened at ₹12 Cr. Not because the market wasn't there — but because four compounding problems were cancelling out every push forward.
          </p>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden group">
            <img
              src="/Offering/element_2.png"
              alt="ornament"
              className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
            />
            <div className="relative z-10 space-y-2">
              <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                60+ products, no focus
              </h4>
              <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                Too many options made it hard for sales reps to pitch on a repeatable sales motion.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden group">
            <img
              src="/Offering/element_4.png"
              alt="ornament"
              className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
            />
            <div className="relative z-10 space-y-2">
              <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Every deal needed the founder
              </h4>
              <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                1,000+ leads, but no filter. The founder was personal helper on every single one.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden group">
            <img
              src="/Offering/element_1.png"
              alt="ornament"
              className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
            />
            <div className="relative z-10 space-y-2">
              <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Sales took up to a year
              </h4>
              <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                Each deal required 100+ hours of team time with no standardized process to speed it up.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden group">
            <img
              src="/Offering/element_3.png"
              alt="ornament"
              className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
            />
            <div className="relative z-10 space-y-2">
              <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Existing clients, undermonetized
              </h4>
              <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                No structured upsell path meant revenue from existing accounts was left on the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section: What We Did ─── */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-14">
        <div>
          <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block mb-2">
            WHAT WE DID
          </span>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            Four problems. Four turning points.
          </h2>
        </div>

        {/* Turning Point 1 */}
        <div className="flex gap-6 items-start">
          <span className="text-[36px] font-bold text-[#2F4A2F] font-serif leading-none shrink-0 w-8">1</span>
          <div className="space-y-4 flex-grow">
            <div>
              <h3 className="text-[19px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Getting the product focused
              </h3>
              <p className="text-[12px] text-gray-400 font-light mt-0.5">
                From 60+ options to 2 flagship products
              </p>
            </div>
            <p className="text-[#555555] text-[13.5px] font-light leading-relaxed">
              The first thing we did was stop trying to sell everything. Working with the leadership team, we decoded the entire portfolio — mapping each product against ease of close, value potential, and core market demand. What emerged was a clear hierarchy: two flagship products for Banks and NBFCs that could anchor the entire sales story, with everything else demoted to bundles.
            </p>
            <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl">
              <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                This single decision unlocked ₹6.4 Cr of immediate revenue visibility from existing clients and leads that had been sitting untouched — no new acquisition required.
              </p>
            </div>
          </div>
        </div>

        {/* Turning Point 2 */}
        <div className="flex gap-6 items-start">
          <span className="text-[36px] font-bold text-[#2F4A2F] font-serif leading-none shrink-0 w-8">2</span>
          <div className="space-y-4 flex-grow">
            <div>
              <h3 className="text-[19px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Understanding the real buyer
              </h3>
              <p className="text-[12px] text-gray-400 font-light mt-0.5">
                What 12 customer interviews changed
              </p>
            </div>
            <p className="text-[#555555] text-[13.5px] font-light leading-relaxed">
              Before rebuilding the sales process, we needed to understand who was actually buying — and why. We conducted 12 in-depth interviews with bankers from target organizations, mapping their demographics, decision-making structures, regulatory constraints, and the real pain points that existing solutions weren't solving.
            </p>
            <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl">
              <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                The interviews revealed exactly what was motivating buyers and what was creating friction — giving the sales team a concrete, outcomes-focused value proposition to replace the vague positioning they'd been using.
              </p>
            </div>
          </div>
        </div>

        {/* Turning Point 3 */}
        <div className="flex gap-6 items-start">
          <span className="text-[36px] font-bold text-[#2F4A2F] font-serif leading-none shrink-0 w-8">3</span>
          <div className="space-y-4 flex-grow">
            <div>
              <h3 className="text-[19px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Rebuilding the sales machine
              </h3>
              <p className="text-[12px] text-gray-400 font-light mt-0.5">
                From 120 hours per lead to 18
              </p>
            </div>
            <p className="text-[#555555] text-[13.5px] font-light leading-relaxed">
              We deconstructed the entire sales journey touchpoint by touchpoint, mapping time spent at every stage. The diagnosis was clear: founder involvement was baked into the process at every step, the team had no CRM, no standardized assets, and no system for follow-up. We rebuilt it from scratch — integrated CRM, segmented 1,000+ leads, created communication templates for key touchpoints, and set up weekly tracking and manager SOPs.
            </p>
            <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl">
              <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                The sales cycle dropped from 6-12 months to 45 days. The team could handle 5x more leads with the same headcount — saving over 100 hours per lead.
              </p>
            </div>
          </div>
        </div>

        {/* Turning Point 4 */}
        <div className="flex gap-6 items-start">
          <span className="text-[36px] font-bold text-[#2F4A2F] font-serif leading-none shrink-0 w-8">4</span>
          <div className="space-y-4 flex-grow">
            <div>
              <h3 className="text-[19px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Getting deals across the line
              </h3>
              <p className="text-[12px] text-gray-400 font-light mt-0.5">
                Pricing, negotiation, and the first founder-free closure
              </p>
            </div>
            <p className="text-[#555555] text-[13.5px] font-light leading-relaxed">
              Even with a better process, deals were still stalling. We identified the closing stages where leads were getting stuck, refined the communication templates, and trained team live, and discovered a pricing misalignment that had been quietly killing late-stage deals. A rebuilt pricing model — grounded in real market dynamics — directly unlocked the first closed. We also equipped the sales team with negotiation frameworks for the final stages of discussions.
            </p>
            <div className="bg-[#FFF9F2] border-l-4 border-[#E29A52] p-5 rounded-r-xl">
              <p className="text-[13.5px] text-[#555555] leading-relaxed font-light">
                The result was that first week, a ₹1.2 Cr deal closed by the sales team without any founder involvement — the first time that had happened.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section: Outcome and Impact ─── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block mb-2">
            OUTCOME AND IMPACT
          </span>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            What changed — and what it set in motion
          </h2>
        </div>

        {/* Immediate Section */}
        <div className="space-y-4">
          <span className="text-[#8e8e8e] text-[12px] font-bold tracking-widest uppercase block">
            Immediate - within 3 months
          </span>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden">
              <img
                src="/Offering/element_4.png"
                alt="ornament"
                className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
              />
              <div className="relative z-10 space-y-2">
                <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  50% ARR growth
                </h4>
                <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                  Annual recurring revenue grew from ₹12 Cr to ₹18 Cr, with 2 new deals and 30+ hot leads ready for conversion.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden">
              <img
                src="/Offering/element_3.png"
                alt="ornament"
                className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
              />
              <div className="relative z-10 space-y-2">
                <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Founder out of sales
                </h4>
                <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                  The founder was removed from the day-to-day sales pipeline entirely — client deals closed independently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Long-term Section */}
        <div className="space-y-4 mt-10">
          <span className="text-[#8e8e8e] text-[12px] font-bold tracking-widest uppercase block">
            Long-term - trajectory shift
          </span>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden">
              <img
                src="/Offering/element_2.png"
                alt="ornament"
                className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
              />
              <div className="relative z-10 space-y-2">
                <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  A system built for ₹100 Cr ARR
                </h4>
                <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                  Scalable offerings, sales paths, and a repeatable sales process designed to sustain 30%+ quarterly ARR growth.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#EAEAEA] rounded-xl p-7 relative overflow-hidden">
              <img
                src="/Offering/element_1.png"
                alt="ornament"
                className="absolute -bottom-2 -right-2 w-20 h-20 opacity-70 pointer-events-none select-none z-0"
              />
              <div className="relative z-10 space-y-2">
                <h4 className="text-[15.5px] font-bold text-[#111111]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Pricing owned by the team
                </h4>
                <p className="text-[13px] text-[#555555] leading-relaxed font-light">
                  Sales reps can now make pricing decisions independently — speeding up closures and ending bypasses without escalation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Concluding Summary Box */}
        <div className="border border-gray-200/80 rounded-xl p-8 bg-white mt-12 mb-8">
          <p className="text-[14px] text-[#444444] leading-relaxed font-normal italic" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            This wasn't a product problem or a market problem — it was a focus and systems problem. Two years of stagnation were down to too many products, a sales process that couldn't run without the founder, and a pricing model that completely losing deals. Fixing those three things, in the right order, was enough to more than double sales in a single sprint.
          </p>
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <FinalCTA />
    </div>
  );
}

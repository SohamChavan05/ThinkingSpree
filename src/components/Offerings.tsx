import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

const earlyStageSteps = [
  {
    id: '01',
    title: 'Prototype Builder',
    shortLabel: 'Raw Idea',
    desc: 'You have a raw idea. No prototype yet.',
    whatWeBuild: 'Prototype built and validated with feedback from 10 real customers. Business model canvas, customer segmentation, and value proposition established.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days · Fasttrack: 6 weeks',
  },
  {
    id: '02',
    title: 'MVP Builder',
    shortLabel: 'Prototype built',
    desc: 'Prototype built. Validation done. Ready to build the product.',
    whatWeBuild: 'Product built in line with actual customers. Alpha testing done with at least 10 customers. User journey, UI/UX design, and coding enablement.',
    duration: '12 T-Sprints · 6 months',
    delivery: 'Every 15 days',
  },
  {
    id: '03',
    title: 'PMF Builder',
    shortLabel: 'Product ready',
    desc: 'Product or prototype ready. No movement yet.',
    whatWeBuild: 'At least 2 customers onboarded with the right ICP. Customer need validated, value proposition sharpened, and usage signals mapped.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days',
  },
  {
    id: '04',
    title: 'GTM Builder',
    shortLabel: 'Market Ready',
    desc: 'MVP is ready. Need early trial customers.',
    whatWeBuild: '2 customers onboarded with right ICP and a funnel of 30-40 qualified ICP customers. Channel plan, sales SOP, and communication framework built.',
    duration: '12 T-Sprints · 6 months',
    delivery: 'Every 15 days',
  },
  {
    id: '05',
    title: 'Monetisation & Early Sales Builder',
    shortLabel: 'Trial customers',
    desc: 'Trial customers present. Need paid customers at validated price.',
    whatWeBuild: 'Price discovery and 2 customer onboardings at the discovered price. Pricing architecture, negotiation frameworks, and early sales systems built.',
    duration: '12 T-Sprints · 6 months',
    delivery: 'Every 15 days · Fasttrack: 3 months',
  },
  {
    id: '06',
    title: 'Funding Builder',
    shortLabel: 'All stages',
    desc: 'Available at all stages.',
    whatWeBuild: '2 VC connects with an investor ready pitch deck & a system for VC pipeline building. Narrative, valuation benchmarking, financial model, and pitch practice.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days · Fasttrack: 6 weeks',
  },
];

// Growth Stage Suites
const growthSuites = [
  {
    title: 'Product Suite',
    desc: 'Build a product organisation that can scale without constant founder involvement.',
    duration: '60 Blocks • 9 Months',
    icon: '/Offering/icon6.png',
  },
  {
    title: 'Market & Growth Suite',
    desc: 'Design predictable growth systems that attract, convert, and retain the right customers.',
    duration: '60 Blocks • 9 Months',
    icon: '/Offering/icon5.png',
  },
  {
    title: 'Pricing & Monetisation Suite',
    desc: 'Turn pricing into a growth lever with stronger positioning and higher customer value.',
    duration: '60 Blocks • 9 Months',
    icon: '/Offering/icon4.png',
  },
  {
    title: 'Process & Operations Suite',
    desc: 'Replace operational bottlenecks with systems that keep the business moving.',
    duration: '60 Blocks • 9 Months',
    icon: '/Offering/icon3.png',
  },
  {
    title: 'People & Org Design Suite',
    desc: 'Build the leadership structure, roles, and accountability needed for the next stage of growth.',
    duration: '60 Blocks • 9 Months',
    icon: '/Offering/icon2.png',
  },
  {
    title: 'New Product Builder & Growth',
    desc: 'Discover, validate, and launch new growth opportunities with confidence.',
    duration: '60 Blocks • 9 Months',
    icon: '/Offering/icon1.png',
  },
];

export default function Offerings() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = earlyStageSteps[activeStepIndex];

  useEffect(() => {
    const activeEl = document.getElementById(`step-tab-${activeStepIndex}`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeStepIndex]);

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* ─── Hero Section ─── */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-16">
        <div>
          <span className="text-[#E29A52] text-[11px] font-bold tracking-widest uppercase block">
            • OUR OFFERINGS
          </span>
          <h1
            className="text-[40px] md:text-[54px] text-[#1a1a1a] mt-3 leading-[1.08] font-medium tracking-tight"
            style={{ fontFamily: "'PT Serif', Georgia, serif" }}
          >
            Built for where you are.
          </h1>
          <h1
            className="text-[40px] md:text-[54px] mt-1 leading-[1.08] tracking-tight text-[#2F4A2F]"
            style={{
              fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif",
              fontStyle: 'italic',
            }}
          >
            Designed for where you're going.
          </h1>
          <div className="pt-4 max-w-2xl space-y-2">
            <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed font-medium">
              Every engagement is structured around T-Sprints — Thinking Spree's proprietary work format. Select your stage to see what we build with you.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Early Stage Section ─── */}
      <section id="early-stage" className="max-w-7xl mx-auto px-6 pb-20">
        {/* Section Title */}
        <div className="flex items-baseline gap-3 mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            Early Stage
          </h2>
          <span className="text-gray-400 text-[14px] md:text-[16px] font-normal font-sans">
            Pre-Seed to 2 Cr
          </span>
        </div>

        <div className="space-y-8">
          {/* Card 1: Growth Strategy T-Sprints */}
          <div className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300 overflow-hidden group">
            {/* Background Graphic Decoration */}
            <img 
              src="/Offering/element_2.png" 
              alt="" 
              className="absolute right-0 bottom-0 pointer-events-none select-none w-28 h-28 object-contain translate-x-2 translate-y-2 opacity-95 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
            />

            <div className="max-w-3xl space-y-4">
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Strategy T-Sprints
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed font-normal">
                Gap analysis and opportunity mapping to set direction fast. Goal setting and key actionables in as little as 2 hours. Built for founders who need clarity before they can move.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1 group"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Builder T-Sprints (Interactive) */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
            <div className="mb-8">
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#2F4A2F] mb-2" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Builder T-Sprints
              </h3>
              <p className="text-[13px] text-gray-400">
                You are at a specific stage right now. Select where you are to see what we build with you.
              </p>
            </div>

            {/* Steps Navigation - Scrollable on mobile with navigation arrows */}
            <div className="relative mb-10 flex items-center gap-2">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeStepIndex === 0}
                className="md:hidden p-2 rounded-full border border-gray-200 bg-white text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed shrink-0 shadow-sm hover:border-[#2F4A2F] active:bg-gray-50 transition-colors"
                aria-label="Previous step"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Steps Scroll Container */}
              <div className="flex-1 relative overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200">
                {/* Connecting line */}
                <div className="absolute top-[26px] left-10 right-10 h-0.5 border-t-2 border-dashed border-gray-100 -z-0 hidden md:block" />

                <div className="flex md:justify-between items-start gap-8 min-w-[760px] px-2 relative z-10">
                  {earlyStageSteps.map((step, idx) => {
                    const isActive = activeStepIndex === idx;
                    return (
                      <button
                        key={step.id}
                        id={`step-tab-${idx}`}
                        onClick={() => setActiveStepIndex(idx)}
                        className="flex flex-col items-center text-center focus:outline-none group/btn cursor-pointer w-24 shrink-0"
                      >
                        <div
                          className={`w-[52px] h-[52px] rounded-full flex items-center justify-center font-bold text-[13px] transition-all duration-300 ${
                            isActive
                              ? 'bg-[#2F4A2F] text-white shadow-sm ring-4 ring-[#2F4A2F]/10'
                              : 'bg-white border border-gray-200 text-[#1a1a1a] group-hover/btn:border-[#2F4A2F] group-hover/btn:text-[#2F4A2F]'
                          }`}
                        >
                          {step.id}
                        </div>

                        {/* Labels */}
                        <span
                          className={`text-[12px] font-semibold mt-3 transition-colors duration-200 ${
                            isActive ? 'text-[#2F4A2F]' : 'text-gray-500 group-hover/btn:text-[#2F4A2F]'
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="text-[10px] text-gray-400 mt-0.5">
                          {step.shortLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={() => setActiveStepIndex((prev) => Math.min(earlyStageSteps.length - 1, prev + 1))}
                disabled={activeStepIndex === earlyStageSteps.length - 1}
                className="md:hidden p-2 rounded-full border border-gray-200 bg-white text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed shrink-0 shadow-sm hover:border-[#2F4A2F] active:bg-gray-50 transition-colors"
                aria-label="Next step"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dynamic Step Detail Box - Inline layout without outer background container */}
            <div className="pt-8 border-t border-gray-100 transition-all duration-300">
              <div className="grid md:grid-cols-[1.2fr_1.5fr_1.2fr] gap-6 md:gap-8 items-start">
                {/* Column 1: Step Info */}
                <div className="space-y-3">
                  <h4 className="text-[20px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                    {activeStep.title}
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                    {activeStep.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1"
                    >
                      Get in touch →
                    </Link>
                  </div>
                </div>

                {/* Column 2: What We Build */}
                <div className="space-y-2">
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block">
                    WHAT WE BUILD
                  </span>
                  <p className="text-[13px] text-gray-600 leading-relaxed font-light">
                    {activeStep.whatWeBuild}
                  </p>
                </div>

                {/* Column 3: Duration & Cycle */}
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block mb-1">
                      DURATION
                    </span>
                    <p className="text-[13px] text-[#2F4A2F] font-semibold">
                      {activeStep.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-400 font-light">
                      {activeStep.delivery}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Moonshot Engagements */}
          <div className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300 overflow-hidden group">
            {/* Background Graphic Decoration */}
            <img 
              src="/Offering/element_1.png" 
              alt="" 
              className="absolute right-0 bottom-0 pointer-events-none select-none w-28 h-28 object-contain translate-x-2 translate-y-2 opacity-95 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
            />

            <div className="max-w-3xl space-y-4">
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Moonshot Engagements
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed font-normal">
                For challenges with no existing playbook. Built from first principles alongside your team. Every engagement is unique by design.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Growth Stage Section ─── */}
      <section id="growth-stage" className="bg-[#EEF8E6]/25 border-t border-b border-[#EEF8E6]/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="flex items-baseline gap-3 mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              Growth Stage
            </h2>
            <span className="text-gray-400 text-[14px] md:text-[16px] font-normal font-sans">
              2 Cr and above
            </span>
          </div>

          <div className="space-y-8">
            {/* Card 1: Growth Strategy T-Sprints */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300 overflow-hidden group">
              {/* Background Graphic element_3.png */}
              <img 
                src="/Offering/element_3.png" 
                alt="" 
                className="absolute right-0 bottom-0 pointer-events-none select-none w-28 h-28 object-contain translate-x-2 translate-y-2 opacity-95 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
              />

              <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center relative z-10">
                {/* Left content */}
                <div className="space-y-3">
                  <span className="text-[#E29A52] text-[10px] font-bold tracking-widest uppercase block">
                    ANNUALLY + QUATERLY
                  </span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                    Growth Strategy T-Sprints
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed max-w-2xl font-normal">
                    Full leadership team strategic reset. Live Growth Map with KRAs your team owns and updates. Quarterly recalibration to keep the plan live all year.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1"
                    >
                      Get in touch →
                    </Link>
                  </div>
                </div>

                {/* Right Badge graphic */}
                <div className="flex items-center justify-center md:justify-end">
                  <div className="relative w-28 h-28 flex flex-col items-center justify-center rounded-full border-2 border-dashed border-[#EEF8E6] bg-[#FAFDF6] select-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#E29A52]/10 -z-0" />
                    <span className="text-[32px] font-bold text-[#2F4A2F] relative z-10 leading-none">15</span>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider relative z-10">T-Sprints</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Builder T-Sprints (Grid of Suites) */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#2F4A2F] mb-2" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                    System Builders T-Sprints
                  </h3>
                  <p className="text-[13px] text-gray-400 font-normal">
                    Pick the function that needs the most attention. Each suite is a deep, structured engagement.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1"
                  >
                    Get in touch →
                  </Link>
                </div>
              </div>

              {/* Suites Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {growthSuites.map((suite) => (
                  <div
                    key={suite.title}
                    className="border border-gray-100 bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Icon Container with border */}
                      <div className="w-10 h-10 rounded-lg border border-gray-100 bg-[#FAFDF6] flex items-center justify-center">
                        <img src={suite.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>

                      <h4 className="text-[16px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        {suite.title}
                      </h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                        {suite.desc}
                      </p>
                    </div>

                    <div className="pt-4">
                      <span className="text-[11px] text-gray-400 block font-normal font-sans">
                        {suite.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Moonshot Engagements */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300 overflow-hidden group">
              {/* Background Graphic element_4.png */}
              <img 
                src="/Offering/element_4.png" 
                alt="" 
                className="absolute right-0 bottom-0 pointer-events-none select-none w-28 h-28 object-contain translate-x-2 translate-y-2 opacity-95 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
              />

              <div className="max-w-3xl space-y-4 relative z-10">
                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block">
                  BESPOKE
                </span>
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Moonshot Engagements
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed font-normal">
                  For scaling businesses facing challenges with no existing playbook. We start from first principles — building the strategy, the systems, and the execution path from scratch. Every engagement is unique by design.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1"
                  >
                    Get in touch →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <FinalCTA />
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

// Stepper data for Section 02 - Builder T-Sprints
const partnerStageSteps = [
  {
    id: '01',
    title: 'Idea Builder',
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
    desc: 'You have a prototype or spec sheet, ready to bring it to life.',
    whatWeBuild: 'Production-ready Minimum Viable Product (MVP) built, deployed, and launched. Basic user analytics tracking set up, primary feedback loop established, and initial cohort of alpha users onboarded.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days · Fasttrack: 6 weeks',
  },
  {
    id: '03',
    title: 'PMF Builder',
    shortLabel: 'Product ready',
    desc: 'Validate user retention, cohort engagement, and pricing feedback.',
    whatWeBuild: 'Core product optimizations based on usage data. Retention metrics, pricing validation, feature prioritization, and initial referral/organic growth loops implemented.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days · Fasttrack: 6 weeks',
  },
  {
    id: '04',
    title: 'GTM Builder',
    shortLabel: 'MVP ready',
    desc: 'Ready to scale cohort acquisition and distribution channels.',
    whatWeBuild: 'Go-to-market engine design. Customer acquisition funnel tracking, lead generation pipelines, attribution models, and conversion rate optimization (CRO) setups.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days · Fasttrack: 6 weeks',
  },
  {
    id: '05',
    title: 'Early Sales',
    shortLabel: 'Trial customers',
    desc: 'Converting early cohort interest into repeatable, predictable revenue streams.',
    whatWeBuild: 'Structured sales playbook, outbound outreach scripts, CRM tracking system, pipeline management, and initial sales deck designs to land the first 10-50 paying customers.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days · Fasttrack: 6 weeks',
  },
  {
    id: '06',
    title: 'Funding Builder',
    shortLabel: 'All stages',
    desc: 'Preparing the business case, deck, and financials for demo day and seed round.',
    whatWeBuild: 'Investor pitch deck, financial model, growth projections, data room preparation, and pitch training to present to angel investors and institutional VCs.',
    duration: '6 T-Sprints · 3 months',
    delivery: 'Every 15 days · Fasttrack: 6 weeks',
  },
];

// Grid suites for VCs Section 03 - Early Stage
export const earlyStageSuites = [
  {
    title: 'Product Suite',
    desc: 'Core product systems operational. Team running independently with 30% reduction in founder involvement.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#4A90E2]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H7v-2h4V7h2v4h4v2h-4v4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Market & Growth Suite',
    desc: '2-3 growth channels dedicated. CAC and conversion benchmarks established.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#52A447]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-3.5h-2V7h2v6z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Pricing & Monetisation Suite',
    desc: 'Revised pricing architecture implemented. Revenue per customer improved 20 - 30%.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#E29A52]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Process & Operations Suite',
    desc: 'Key SOPs built, bottlenecks removed. Founder focus on expansion / finance.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#2E79B5]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'People & Org Design Suite',
    desc: 'Org structure redesigned for next growth phase. KPIs set across the leadership team.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#D4856A]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm9 8h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7V7h7v2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'New Product Builder & Growth',
    desc: 'New product launched. Validated demand from 10+ paying customers.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#E2529A]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" fill="currentColor" />
      </svg>
    ),
  },
];

// Grid suites for VCs Section 03 - Scale Stage
export const scaleStageSuites = [
  {
    title: 'Fractional CRO Suite',
    desc: 'Full alignment of sales, marketing, and product roadmaps to achieve scalable annual recurring revenue growth.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#2F4A2F]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Bespoke Scale Suite',
    desc: 'Focused co-building on complex growth bottlenecks, expanding distribution channels, and operational scale.',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#E29A52]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Pricing Architecture Suite',
    desc: 'Restructuring pricing tiers, monetization loops, and expansion pathways to optimize lifetime value (LTV).',
    duration: '6 T-Sprints - 2 months',
    color: 'text-[#D4856A]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H5c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.48-.6 2.85-1.57 3.83z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function PartnerProgram() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = partnerStageSteps[activeStepIndex];

  // Section 03 Toggle (1 = Early Stage, 2 = Scale Stage)
  const [activeToggleSection, setActiveToggleSection] = useState(1);

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* ─── Hero Section ─── */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase block">
              ✦ PARTNER PROGRAM
            </span>
            <div>
              <h1
                className="text-[40px] md:text-[54px] text-[#1a1a1a] leading-[1.08] tracking-tight"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                The depth your programme deserves
              </h1>
              <h1
                className="text-[40px] md:text-[54px] leading-[1.08] tracking-tight text-[#2F4A2F]"
                style={{
                  fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif",
                  fontStyle: 'italic',
                }}
              >
                For every startup in your portfolio.
              </h1>
            </div>
            <div className="max-w-xl space-y-4 text-gray-500 text-[14px] leading-relaxed font-normal">
              <p>
                Most programmes provide access to mentors, networks, and resources. We provide the structured work that helps startups turn that access into progress.
              </p>
              <p>
                Partner with us to make that support part of your programme.
              </p>
            </div>
            <div className="pt-4">
              <Link
                to="/contact"
                className="bg-[#2F4A2F] text-white text-[13px] font-semibold px-6 py-3.5 rounded hover:bg-[#1F3A1F] transition-colors inline-block shadow-sm"
              >
                Become a Partner
              </Link>
            </div>
          </div>

          {/* Right Column - 3 Cards */}
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Background shape element4.png (orange circles grid) */}
              <img
                src="/AboutUs/element4.png"
                alt=""
                className="absolute right-0 bottom-0 pointer-events-none select-none w-20 h-20 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
              />
              <div className="space-y-2 relative z-10 max-w-[85%]">
                <h4 className="text-[16px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Individual startup engagement
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                  Structured T-Sprints tailored to each startup's stage, priorities, and growth challenges.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Background shape element2.png (orange/pink circles) */}
              <img
                src="/AboutUs/element2.png"
                alt=""
                className="absolute right-0 bottom-0 pointer-events-none select-none w-20 h-20 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
              />
              <div className="space-y-2 relative z-10 max-w-[85%]">
                <h4 className="text-[16px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Your network, better timed
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                  We surface where mentors, investors, and partners can create the greatest impact.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Background shape element3.png (orange diagonal chevrons) */}
              <img
                src="/AboutUs/element3.png"
                alt=""
                className="absolute right-0 bottom-0 pointer-events-none select-none w-20 h-20 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
              />
              <div className="space-y-2 relative z-10 max-w-[85%]">
                <h4 className="text-[16px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Programme-wide outcomes
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                  Progress becomes visible across the cohort — not just participation, but real movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Co-Delivery Model Section ─── */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Soft backdrops */}
        <div className="absolute right-0 bottom-0 text-[160px] font-bold text-gray-100/80 select-none pointer-events-none z-0 transform translate-y-12" style={{ fontFamily: "'Liberation Serif', Georgia, serif", fontStyle: 'italic' }}>
          Partnership
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase block mb-3">
              ✦ HOW WE WORK
            </span>
            <h2 className="text-[32px] md:text-[40px] text-[#1a1a1a] leading-tight" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              A co-delivery model
            </h2>
            <h2
              className="text-[32px] md:text-[40px] leading-tight text-[#2F4A2F]"
              style={{
                fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif",
                fontStyle: 'italic',
              }}
            >
              built around your startups.
            </h2>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Background shape element_1.png */}
              <img
                src="/Offering/element_1.png"
                alt=""
                className="absolute right-0 bottom-0 pointer-events-none select-none w-20 h-20 object-contain opacity-70 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
              />
              <div className="relative z-10 space-y-3">
                <span className="text-[#6B9E78] text-[13px] font-semibold block mb-1">
                  Step 1 — Understand
                </span>
                <h4 className="text-[17px] font-bold text-[#2F4A2F] leading-snug" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Aligning on what success looks like.
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                  We understand your goals, startup profiles, and growth priorities to identify the right support structure for your portfolio.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Background shape element_2.png */}
              <img
                src="/Offering/element_2.png"
                alt=""
                className="absolute right-0 bottom-0 pointer-events-none select-none w-20 h-20 object-contain opacity-70 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
              />
              <div className="relative z-10 space-y-3">
                <span className="text-[#6B9E78] text-[13px] font-semibold block mb-1">
                  Step 2 — Engage
                </span>
                <h4 className="text-[17px] font-bold text-[#2F4A2F] leading-snug" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Working directly with every startup.
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                  Each startup receives structured T-Sprints tailored to its stage, challenges, and growth opportunities.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Background shape element_3.png */}
              <img
                src="/Offering/element_3.png"
                alt=""
                className="absolute right-0 bottom-0 pointer-events-none select-none w-20 h-20 object-contain opacity-70 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
              />
              <div className="relative z-10 space-y-3">
                <span className="text-[#6B9E78] text-[13px] font-semibold block mb-1">
                  Step 3 — Activate
                </span>
                <h4 className="text-[17px] font-bold text-[#2F4A2F] leading-snug" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Bringing the right expertise at the right time.
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                  Your mentors, partners, and network are introduced where they can create the greatest impact and unlock momentum.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Background shape element_4.png */}
              <img
                src="/Offering/element_4.png"
                alt=""
                className="absolute right-0 bottom-0 pointer-events-none select-none w-20 h-20 object-contain opacity-70 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
              />
              <div className="relative z-10 space-y-3">
                <span className="text-[#6B9E78] text-[13px] font-semibold block mb-1">
                  Step 3 — Activate
                </span>
                <h4 className="text-[17px] font-bold text-[#2F4A2F] leading-snug" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                  Turning activity into measurable progress.
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                  Startups move towards clear milestones while programme leaders gain visibility into outcomes across the entire portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 01: Universities & Institutions ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded bg-[#EAF5E5] text-[#2F4A2F] flex items-center justify-center font-bold text-[13px]">
            01
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            Universities & Institutions
          </h2>
        </div>
        <p className="text-[13.5px] text-gray-500 max-w-2xl mb-8 leading-relaxed font-normal">
          For programmes supporting raw idea and early prototype stage founders
        </p>

        {/* 3 tabs grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Credibility</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">Structured methodology. Visible outcomes.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Differentiation</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">A system that turns ambition into momentum.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Founder outcomes</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">Real progress, not just programme participation.</p>
          </div>
        </div>

        {/* 2 Main cards block */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: Growth Strategy */}
          <div className="border border-gray-100 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between">
            {/* Background shape element_1.png */}
            <img
              src="/Offering/element_1.png"
              alt=""
              className="absolute right-0 bottom-0 pointer-events-none select-none w-24 h-24 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
            />

            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Growth Strategy T-Sprints
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                Helping early-stage founders turn uncertainty into clear next steps.
              </p>

              <div className="pt-2">
                {/* Feature Box 1 */}
                <div className="flex gap-4 items-center bg-[#FAFDF6] border border-[#EEF8E6]/40 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                    <img src="/Offering/icon6.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] font-bold text-[#1a1a1a]">Gap Analysis</h4>
                    <p className="text-[11px] text-gray-400 font-normal">Goal setting, key actionables, key insights</p>
                    <p className="text-[10px] text-gray-400 font-light mt-1">1 T-Sprints &nbsp;&nbsp; 2 hrs</p>
                  </div>
                </div>

                {/* Feature Box 2 */}
                <div className="flex gap-4 items-center mt-4 bg-[#FAFDF6] border border-[#EEF8E6]/40 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                    <img src="/Offering/element_3.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] font-bold text-[#1a1a1a]">Gap + Opportunity Analysis</h4>
                    <p className="text-[11px] text-gray-400 font-normal">Goal setting, actionables, insights, business & market potential</p>
                    <p className="text-[10px] text-gray-400 font-light mt-1">2 T-Sprints &nbsp;&nbsp; 15 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                Get in touch →
              </Link>
            </div>
          </div>

          {/* Card 2: Builder */}
          <div className="border border-gray-100 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between">
            {/* Background shape element_1.png */}
            <img
              src="/Offering/element_2.png"
              alt=""
              className="absolute right-0 bottom-0 pointer-events-none select-none w-24 h-24 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
            />

            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Builder T-Sprints
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                Structured execution tracks that transform ideas into validated ventures.
              </p>

              <div className="pt-2">
                {/* Feature Box 1 */}
                <div className="flex gap-4 items-center bg-[#FAFDF6] border border-[#EEF8E6]/40 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                    <img src="/Offering/icon2.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <h4 className="text-[13px] font-bold text-[#1a1a1a]">Idea Builder</h4>
                      <span className="text-[10px] text-gray-400 font-normal">Raw Idea</span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">Goal setting, key actionables, key insights</p>
                    <p className="text-[10px] text-gray-400 mt-1 font-light leading-tight">
                      6 T-Sprints &nbsp;&nbsp; 3 months (Every 15 days) &nbsp;&nbsp; <span className="text-[#E29A52] font-semibold">Fasttrack 6 weeks</span> (Every week)
                    </p>
                  </div>
                </div>

                {/* Feature Box 2 */}
                <div className="flex gap-4 items-center mt-4 bg-[#FAFDF6] border border-[#EEF8E6]/40 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                    <img src="/Offering/element_1.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <h4 className="text-[13px] font-bold text-[#1a1a1a]">Funding Builder</h4>
                      <span className="text-[10px] text-gray-400 font-normal">All stages</span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-normal mt-0.5">2 VC connects, 80% enhanced pitch, VC pipeline system</p>
                    <p className="text-[10px] text-gray-400 mt-1 font-light leading-tight">
                      6 T-Sprints &nbsp;&nbsp; 3 months (Every 15 days) &nbsp;&nbsp; <span className="text-[#E29A52] font-semibold">Fasttrack 6 weeks</span> (Every week)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 02: Incubators & Accelerators ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white relative overflow-hidden">
        <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase block mb-4">
          ✦ INCUBATORS & ACCELERATORS
        </span>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded bg-[#EAF5E5] text-[#2F4A2F] flex items-center justify-center font-bold text-[13px]">
            02
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            Incubators & Accelerators
          </h2>
        </div>
        <p className="text-[13.5px] text-gray-500 max-w-2xl mb-8 leading-relaxed font-normal">
          For programmes supporting Build stage founders across all tracks
        </p>

        {/* 3 tabs grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Better programme delivery</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">Structured engagement, measurable progress.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Your network, better timed</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">The right connections at the right moment.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Cohort-wide outcomes</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">More founders moving forward, faster.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Card 1: Growth Strategy */}
          <div className="border border-gray-100 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between">
            {/* Background shape element_1.png */}
            <img
              src="/Offering/element_1.png"
              alt=""
              className="absolute right-0 bottom-0 pointer-events-none select-none w-24 h-24 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
            />
            
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Growth Strategy T-Sprints
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                Strategic working sessions that help startups identify growth priorities, validate opportunities, and build a focused roadmap for the next stage of growth.
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                {/* Feature Box 1 */}
                <div className="flex gap-4 items-center bg-[#FAFDF6] border border-[#EEF8E6]/40 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                    <img src="/Offering/icon6.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] font-bold text-[#1a1a1a]">Gap Analysis</h4>
                    <p className="text-[11px] text-gray-400 font-normal">Goal setting, key actionables, key insights</p>
                    <p className="text-[10px] text-gray-400 font-light mt-1">1 T-Sprints &nbsp;&nbsp; 2 hrs</p>
                  </div>
                </div>

                {/* Feature Box 2 */}
                <div className="flex gap-4 items-center bg-[#FAFDF6] border border-[#EEF8E6]/40 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                    <img src="/Offering/element_3.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] font-bold text-[#1a1a1a]">Gap + Opportunity Analysis</h4>
                    <p className="text-[11px] text-gray-400 font-normal">Goal setting, actionables, insights, business & market potential</p>
                    <p className="text-[10px] text-gray-400 font-light mt-1">2 T-Sprints &nbsp;&nbsp; 15 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                Get in touch →
              </Link>
            </div>
          </div>

          {/* Card 2: Interactive Stepper */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-8">
              <h3 className="text-[20px] font-bold text-[#2F4A2F] mb-2" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Builder T-Sprints
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                Structured sprint tracks designed to help startups validate, launch, acquire customers, improve monetisation, and build the systems required for sustainable growth.
              </p>
            </div>

            {/* Steps Timeline Navigation */}
            <div className="relative mb-10 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200">
              {/* Dotted horizontal connector line */}
              <div className="absolute top-[21px] left-10 right-10 h-0.5 border-t-2 border-dashed border-gray-100 -z-0 hidden md:block" />

              <div className="flex md:justify-between items-start gap-8 min-w-[760px] px-2 relative z-10">
                {partnerStageSteps.map((step, idx) => {
                  const isActive = activeStepIndex === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStepIndex(idx)}
                      className="flex flex-col items-center text-center focus:outline-none group/btn cursor-pointer w-24 shrink-0"
                    >
                      {/* Step Circle */}
                      <div
                        className={`w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-[13px] transition-all duration-300 ${isActive
                            ? 'bg-[#2F4A2F] text-white shadow-sm ring-4 ring-[#2F4A2F]/10'
                            : 'bg-white border border-gray-200 text-gray-500 hover:border-[#2F4A2F] hover:text-[#2F4A2F]'
                          }`}
                      >
                        {step.id}
                      </div>

                      {/* Labels */}
                      <span
                        className={`text-[12.5px] font-bold mt-3 transition-colors duration-200 ${isActive ? 'text-[#2F4A2F]' : 'text-[#1a1a1a]'
                          }`}
                      >
                        {step.title}
                      </span>
                      <span className="text-[11px] text-gray-400 mt-0.5 font-normal">
                        {step.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Details Panel */}
            <div className="bg-[#FAFDF6] border border-[#EEF8E6]/60 rounded-xl p-6 md:p-8 transition-all duration-300">
              <div className="grid md:grid-cols-[1fr_1.5fr_1.2fr] gap-6 md:gap-8 items-start">
                {/* Column 1: Title/Desc */}
                <div className="space-y-3">
                  <h4 className="text-[20px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                    {activeStep.title}
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                    {activeStep.desc}
                  </p>
                  <div className="pt-1">
                    <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                      Get in touch →
                    </Link>
                  </div>
                </div>

                {/* Column 2: What We Build */}
                <div className="space-y-2">
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block">
                    WHAT WE BUILD
                  </span>
                  <p className="text-[13px] text-gray-600 leading-relaxed font-normal">
                    {activeStep.whatWeBuild}
                  </p>
                </div>

                {/* Column 3: Duration info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block mb-1">
                      DURATION
                    </span>
                    <p className="text-[14px] text-[#2F4A2F] font-bold">
                      {activeStep.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-[12.5px] text-gray-500 font-normal leading-relaxed">
                      {activeStep.delivery}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 03: VCs & MSME Facilitators ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white relative overflow-hidden">
        <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase block mb-4">
          ✦ VCS & MSME FACILITATORS
        </span>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded bg-[#EAF5E5] text-[#2F4A2F] flex items-center justify-center font-bold text-[13px]">
            03
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            VCs & MSME Facilitators
          </h2>
        </div>
        <p className="text-[13.5px] text-gray-500 max-w-2xl mb-8 leading-relaxed font-normal">
          For programmes supporting Grow and Scale stage founders
        </p>

        {/* 3 tabs grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Portfolio Outcomes</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">More startups moving forward, faster.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Structured Support at Scale</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">Consistent growth support across every startup.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <h4 className="text-[14px] font-bold text-[#2F4A2F] mb-1" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>Your Network, Precisely Deployed</h4>
            <p className="text-[12.5px] text-gray-500 font-normal">The right connections at the right moment.</p>
          </div>
        </div>

        {/* Dynamic Stage Toggle */}
        <div className="mb-8">
          <div className="flex border border-gray-100 rounded-2xl overflow-hidden max-w-lg shadow-sm bg-white">
            <button
              onClick={() => setActiveToggleSection(1)}
              className={`flex-1 text-left px-6 py-4 font-semibold text-[13px] transition-all flex items-center gap-3 cursor-pointer ${
                activeToggleSection === 1
                  ? 'bg-[#2F4A2F] text-white shadow-sm'
                  : 'bg-white text-gray-500 hover:text-[#2F4A2F]'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[12px] ${
                activeToggleSection === 1 ? 'bg-white text-[#2F4A2F]' : 'bg-gray-100 text-[#2F4A2F]'
              }`}>
                1
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-bold">Grow Stage</span>
                <span className={`text-[11px] font-normal ${activeToggleSection === 1 ? 'text-white/80' : 'text-gray-400'}`}>2 Cr – 20 Cr</span>
              </div>
            </button>
            <button
              onClick={() => setActiveToggleSection(2)}
              className={`flex-1 text-left px-6 py-4 font-semibold text-[13px] transition-all flex items-center gap-3 cursor-pointer ${
                activeToggleSection === 2
                  ? 'bg-[#2F4A2F] text-white shadow-sm'
                  : 'bg-white text-gray-500 hover:text-[#2F4A2F]'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[12px] ${
                activeToggleSection === 2 ? 'bg-white text-[#2F4A2F]' : 'bg-gray-100 text-[#2F4A2F]'
              }`}>
                2
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-bold">Scale Stage</span>
                <span className={`text-[11px] font-normal ${activeToggleSection === 2 ? 'text-white/80' : 'text-gray-400'}`}>20 Cr – 100 Cr</span>
              </div>
            </button>
          </div>
        </div>

        {/* Toggle-dependent offerings content */}
        <div className="space-y-8">
          {activeToggleSection === 1 ? (
            <>
              {/* Early Stage Offerings */}
              {/* Card 1: Growth Strategy */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all duration-300 overflow-hidden group">
                <img
                  src="/Offering/element_2.png"
                  alt=""
                  className="absolute right-0 bottom-0 pointer-events-none select-none w-24 h-24 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
                />

                <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="max-w-2xl space-y-3 relative z-10">
                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block">
                      ANNUALLY + QUATERLY
                    </span>
                    <h3 className="text-[20px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                      Growth Strategy T-Sprints
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                      Focused T-Sprints that help leadership teams identify growth opportunities, align priorities, and build the systems required to scale with confidence.
                    </p>
                    <div className="pt-2">
                      <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                        Get in touch →
                      </Link>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="flex items-center justify-center md:justify-end shrink-0 relative z-10">
                    <div className="relative w-24 h-24 flex flex-col items-center justify-center rounded-full border border-gray-100 bg-white select-none shadow-sm">
                      <span className="text-[26px] font-bold text-[#2F4A2F] leading-none">15</span>
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-1">T-Sprints</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Builder Sprints Grid */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div className="max-w-3xl">
                    <h3 className="text-[20px] font-bold text-[#2F4A2F] mb-2" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                      Builder T-Sprints
                    </h3>
                    <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                      Structured implementation suites across product, growth, pricing, operations, people, and new ventures — built to remove bottlenecks and create long-term business momentum.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                      Get in touch →
                    </Link>
                  </div>
                </div>

                {/* Suites Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Suite 1 */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon6.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        Product Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        Core product systems operational. Team running independently with 30% reduction in founder involvement.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>

                  {/* Suite 2 */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon5.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        Market & Growth Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        2–3 growth channels activated. CAC and conversion benchmarks established.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>

                  {/* Suite 3 */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon4.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        Pricing & Monetisation Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        Revised pricing architecture implemented. Revenue per customer improved 20–30%.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>

                  {/* Suite 4 */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon3.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        Process & Operations Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        Key SOPs built, bottlenecks removed. Execution no longer dependent on founder.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>

                  {/* Suite 5 */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon2.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        People & Org Design Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        Org structure redesigned for next growth phase. KRAs live across the leadership team.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>

                  {/* Suite 6 */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon1.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        New Product Builder & Growth
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        New product launched. Validated demand from 10+ paying customers.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Scale Stage Offerings */}
              {/* Card 1: Fractional CRO */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all duration-300 overflow-hidden group">
                <img
                  src="/Offering/element_2.png"
                  alt=""
                  className="absolute right-0 bottom-0 pointer-events-none select-none w-24 h-24 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
                />

                <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="max-w-2xl space-y-3 relative z-10">
                    <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block">
                      ACTING AS FRACTIONAL CRO
                    </span>
                    <h3 className="text-[20px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                      Growth Strategy T-Sprints
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                      Full leadership team strategic growth alignment. Growth blueprint with 100% of the team aligned to build a scalable engine to grow for a full year.
                    </p>
                    <div className="pt-2">
                      <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                        Get in touch →
                      </Link>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="flex items-center justify-center md:justify-end shrink-0 relative z-10">
                    <div className="relative w-24 h-24 flex flex-col items-center justify-center rounded-full border border-gray-100 bg-white select-none shadow-sm">
                      <span className="text-[26px] font-bold text-[#2F4A2F] leading-none">15</span>
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-1">T-Sprints</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Scale Suites Grid */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div className="max-w-3xl">
                    <h3 className="text-[20px] font-bold text-[#2F4A2F] mb-2" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                      Builder T-Sprints
                    </h3>
                    <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                      Bespoke operational and technical suites targeting large-scale monetization and distribution.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                      Get in touch →
                    </Link>
                  </div>
                </div>

                {/* Suites Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Fractional CRO */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon6.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        Fractional CRO Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        Full alignment of sales, marketing, and product roadmaps to achieve scalable annual recurring revenue growth.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>

                  {/* Bespoke Scale */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon2.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        Bespoke Scale Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        Focused co-building on complex growth bottlenecks, expanding distribution channels, and operational scale.
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>

                  {/* Pricing Architecture */}
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 hover:border-[#EEF8E6] transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded border border-gray-100 bg-white flex items-center justify-center shrink-0">
                        <img src="/Offering/icon4.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                        Pricing Architecture Suite
                      </h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-normal">
                        Restructuring pricing tiers, monetization loops, and expansion pathways to optimize lifetime value (LTV).
                      </p>
                    </div>
                    <div className="border-t border-gray-50 pt-3 mt-4">
                      <span className="text-[11px] text-gray-400 block font-light">
                        60 Blocks &nbsp; 9 months
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Bespoke Moonshot */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all duration-300 overflow-hidden group">
                <img
                  src="/Offering/element_3.png"
                  alt=""
                  className="absolute right-0 bottom-0 pointer-events-none select-none w-24 h-24 object-contain opacity-75 group-hover:scale-105 transition-transform duration-500 translate-x-2 translate-y-2"
                />

                <div className="max-w-3xl space-y-4 relative z-10">
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block">
                    BESPOKE
                  </span>
                  <h3 className="text-[20px] font-bold text-[#2F4A2F]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                    Moonshot Engagements
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                    Pursuing business model changes with no existing playbook. We use the first principles of building the strategy, the systems, and the execution path from scratch. Every engagement is unique by design.
                  </p>
                  <div className="pt-2">
                    <Link to="/contact" className="text-[#E29A52] text-[13px] font-semibold hover:text-[#c7803e] transition-colors inline-flex items-center gap-1">
                      Get in touch →
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <FinalCTA />
    </div>
  );
}

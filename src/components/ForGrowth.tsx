import { Link } from 'react-router-dom';

const stageData = [
  {
    stage: 'Early Stage',
    range: 'Pre-Seed to 2 Cr',
    cardBg: 'bg-white',
    borderColor: 'border border-gray-100 shadow-sm',
    textColor: 'text-[#1a1a1a]',
    subTextColor: 'text-gray-500',
    titleColor: 'text-[#2F4A2F]',
    desc: 'From idea to first revenue — validation, product, GTM, and funding.',
    boxBg: 'bg-[#FAFDF6]',
    boxTitleColor: 'text-[#1a1a1a]',
    boxBadgeColor: 'text-[#E29A52]',
    watermarkColor: 'text-[#EEF8E6]/40',
    offerings: [
      {
        name: 'Strategy T-Sprints',
        badge: 'Clarity',
        desc: 'Founder-led clarity on priorities, market position, and what to build next.',
      },
      {
        name: 'Builder T-Sprints',
        badge: '6 Tracks',
        desc: 'Structured tracks from idea validation to early revenue — each with a defined outcome.',
      },
      {
        name: 'Moonshot Engagements',
        badge: 'Bespoke',
        desc: "Building in a category that doesn't exist yet. First principles, zero to one.",
      },
    ],
    cta: 'Explore offerings →',
    linkTo: '/offerings',
    downloadCta: 'Download Brochure',
  },
  {
    stage: 'Growth Stage',
    range: '2 Cr and above',
    cardBg: 'bg-white',
    borderColor: 'border border-gray-100 shadow-sm',
    textColor: 'text-[#1a1a1a]',
    subTextColor: 'text-gray-500',
    titleColor: 'text-[#2F4A2F]',
    desc: 'From traction to scale — strategy, systems, and organisational clarity.',
    boxBg: 'bg-[#FAFDF6]',
    boxTitleColor: 'text-[#1a1a1a]',
    boxBadgeColor: 'text-[#E29A52]',
    watermarkColor: 'text-[#EEF8E6]/40',
    offerings: [
      {
        name: 'Growth Strategy T-Sprints',
        badge: 'Annual + Quarterly',
        desc: 'Full leadership team strategic reset — shared priorities, live Growth Map, quarterly recalibration.',
      },
      {
        name: 'System Builders T-Sprints',
        badge: '6 Suites',
        desc: 'Deep functional interventions across product, market, pricing, operations, people, and new growth.',
      },
      {
        name: 'Moonshot Engagements',
        badge: 'Bespoke',
        desc: 'Complex scaling challenges that fall outside any standard framework. Embedded execution.',
      },
    ],
    cta: 'Explore offerings →',
    linkTo: '/offerings#growth-stage',
    downloadCta: 'Download Case Study',
  },
];

export default function ForGrowth() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase">
            ✦ HOW WE WORK
          </span>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
            <div>
              <h2 className="mt-3 text-[36px] md:text-[44px] text-[#1a1a1a] leading-tight" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                For growth -
              </h2>
              <h2
                className="text-[36px] md:text-[44px] leading-tight text-[#2F4A2F]"
                style={{ fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif", fontStyle: 'italic', fontWeight: 400 }}
              >
                2Cr to Pre-IPO
              </h2>
            </div>
            <div className="flex-1 max-w-xl space-y-4">
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Every engagement runs through T-Sprints — Thinking Spree's proprietary work format. Select your stage.
              </p>    
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {stageData.map((stage) => (
            <div
              key={stage.stage}
              className={`${stage.cardBg} ${stage.borderColor} rounded-[20px] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden`}
            >
              {/* Watermark leaf */}
              <div className="absolute bottom-0 right-0 w-48 h-48 translate-x-12 translate-y-12 pointer-events-none select-none z-0">
                <svg
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  className={`w-full h-full ${stage.watermarkColor} rotate-[-15deg]`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M50,90 C45,65 30,55 20,40 C10,25 25,15 35,30 C38,15 45,5 50,5 C55,5 62,15 65,30 C75,15 90,25 80,40 C70,55 55,65 50,90 Z" />
                </svg>
              </div>

              {/* Card Header */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-baseline gap-3">
                  <h3
                    className={`text-[28px] font-bold ${stage.titleColor} leading-none`}
                    style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                  >
                    {stage.stage}
                  </h3>
                  <span className="text-[12px] font-medium text-gray-400">
                    {stage.range}
                  </span>
                </div>
                <p
                  className={`text-[18px] md:text-[20px] font-medium leading-snug ${stage.textColor}`}
                  style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                >
                  {stage.desc}
                </p>
              </div>

              {/* Offerings list */}
              <div className="relative z-10 space-y-4">
                {stage.offerings.map((offering) => (
                  <div
                    key={offering.name}
                    className={`${stage.boxBg} rounded-xl p-5 flex flex-col gap-1`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[14px] font-bold ${stage.boxTitleColor}`}>
                        {offering.name}
                      </span>
                      <span className={`text-[12px] font-bold ${stage.boxBadgeColor}`}>
                        {offering.badge}
                      </span>
                    </div>
                    <p className={`text-[12px] leading-relaxed ${stage.subTextColor}`}>
                      {offering.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-2 mt-auto w-full">
                <Link
                  to={stage.linkTo || "/offerings"}
                  className="text-[13px] font-semibold text-[#E29A52] hover:text-[#d98544] transition-colors text-center sm:text-left"
                >
                  {stage.cta}
                </Link>
                <button className="bg-[#E29A52] hover:bg-[#d98544] text-white text-[12px] font-bold px-6 py-3 rounded-lg shadow-sm transition-all duration-200 w-full sm:w-auto text-center">
                  {stage.downloadCta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Single horizontal card */}
        <div className="border border-gray-100 rounded-2xl bg-white shadow-sm p-6 md:p-8 lg:p-10">
          <div className="grid lg:grid-cols-[1.1fr_1.4fr_1.1fr] gap-8 lg:gap-12 items-stretch">
            {/* Left - Title & CTA */}
            <div className="flex flex-col justify-center pr-2">
              <span className="text-[11px] text-brand-green font-bold tracking-widest uppercase mb-4">
                CASE STUDY
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] leading-tight">
                Two years stuck at ₹12 Cr, ₹18 Cr in 3 months.
              </h2>
              <Link
                to="/offerings"
                className="mt-6 text-[14px] text-brand-orange font-semibold inline-flex items-center gap-1.5 hover:underline underline-offset-2"
              >
                Explore all offerings
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Center - Image */}
            <div className="flex items-center justify-center">
              <img
                src="/Landing Page/casestudyImage.png"
                alt="Strategy planning session with sticky notes and frameworks"
                className="w-full aspect-[3/2] object-cover rounded-2xl"
              />
            </div>

            {/* Right - Details */}
            <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-10 lg:ml-2">
              <div className="mb-6">
                <h4 className="text-[11px] font-bold text-brand-green tracking-widest uppercase">
                  FINTECH · SEED STAGE
                </h4>
                <p className="text-[12px] text-gray-400 mt-1">
                  AI Solutions for Banks & NBFCs
                </p>
              </div>

              <div className="space-y-6">
                {/* Challenge */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a1a]">Challenge</div>
                    <div className="text-[13px] text-gray-500 leading-relaxed mt-0.5">
                      A ₹12 Cr business behaving like a ₹2 Cr business.
                    </div>
                  </div>
                </div>

                {/* Our Approach */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a1a]">Our Approach</div>
                    <div className="text-[13px] text-gray-500 leading-relaxed mt-0.5">
                      Focus. Positioning. Sales systems.
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a1a]">Outcome</div>
                    <div className="text-[13px] text-gray-500 leading-relaxed mt-0.5">
                      ₹18 Cr revenue run-rate in 90 days.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

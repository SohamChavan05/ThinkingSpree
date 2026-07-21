import { Link } from 'react-router-dom';

export default function TrustedBy() {
  // Build arrays from the actual images in the public folder
  const startupImages = Array.from({ length: 26 }, (_, i) => ({
    name: `Startup ${i + 1}`,
    src: `/Landing Page/Startups/startup${i + 1}.webp`,
  }));

  const partnerImages = Array.from({ length: 11 }, (_, i) => ({
    name: `Partner ${i + 1}`,
    src: `/Landing Page/Partners/partner${i + 1}.webp`,
  }));

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left text */}
          <div className="shrink-0 flex items-center">
            <p className="text-[13px] text-gray-800 font-medium leading-relaxed max-w-[200px]">
              Trusted by 1000+ startups and accelerators worldwide.
            </p>
          </div>

          {/* Right - two strips */}
          <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 pl-0 md:pl-8 space-y-5 overflow-hidden">
            {/* STARTUPS strip */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase shrink-0 w-16">
                Startups
              </span>
              <div className="overflow-hidden flex-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                <div className="flex items-center gap-8 animate-marquee-left w-max">
                  {/* Double the images for seamless loop */}
                  {[...startupImages, ...startupImages].map((startup, idx) => (
                    <img
                      key={`${startup.name}-${idx}`}
                      src={startup.src}
                      alt={startup.name}
                      className="h-9 md:h-11 max-w-[140px] object-contain shrink-0 hover:opacity-80 transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* PARTNERS strip */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center justify-between sm:justify-start gap-3 shrink-0">
                <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase w-16">
                  Partners
                </span>
              </div>
              <div className="overflow-hidden flex-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                <div className="flex items-center gap-10 md:gap-12 animate-marquee-right w-max">
                  {/* Double the images for seamless loop */}
                  {[...partnerImages, ...partnerImages].map((partner, idx) => (
                    <img
                      key={`${partner.name}-${idx}`}
                      src={partner.src}
                      alt={partner.name}
                      className="h-9 md:h-11 max-w-[140px] object-contain shrink-0 hover:opacity-80 transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
              <Link
                to="/partner-program"
                className="text-[#E29A52] hover:text-[#d98544] text-[13px] font-semibold shrink-0 inline-flex items-center gap-1.5 hover:underline underline-offset-2 transition-colors self-start sm:self-center"
              >
                Collaborate with us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

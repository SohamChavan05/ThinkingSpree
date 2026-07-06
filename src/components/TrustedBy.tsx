const startups = [
  { name: 'Startup 1', src: '/Landing Page/startup1.png' },
  { name: 'Startup 2', src: '/Landing Page/startup2.png' },
  { name: 'Startup 3', src: '/Landing Page/startup3.png' },
  { name: 'Startup 4', src: '/Landing Page/startup4.png' },
  { name: 'Startup 5', src: '/Landing Page/startup5.png' },
];

const partners = [
  { name: 'Partner 1', src: '/Landing Page/partner1.png' },
  { name: 'Partner 2', src: '/Landing Page/partner2.png' },
  { name: 'Partner 3', src: '/Landing Page/partner3.png' },
  { name: 'Partner 4', src: '/Landing Page/partner4.png' },
  { name: 'Partner 5', src: '/Landing Page/partner5.png' },
  { name: 'Partner 6', src: '/Landing Page/partner6.png' },
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left text */}
          <div className="shrink-0 flex items-center">
            <p className="text-[12px] text-gray-800 font-medium leading-relaxed max-w-[200px]">
              Trusted by 1000+ startups and accelerators worldwide.
            </p>
          </div>

          {/* Right - two strips */}
          <div className="flex-1 border-l border-gray-100 pl-8 space-y-5">
            {/* STARTUPS strip */}
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase shrink-0 w-16">
                Startups
              </span>
              <div className="flex items-center gap-8 flex-wrap">
                {startups.map((startup) => (
                  <img
                    key={startup.name}
                    src={startup.src}
                    alt={startup.name}
                    className="h-6 md:h-7 object-contain hover:opacity-80 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* PARTNERS strip */}
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase shrink-0 w-16">
                Partners
              </span>
              <div className="flex items-center gap-12 flex-wrap">
                {partners.map((partner) => (
                  <img
                    key={partner.name}
                    src={partner.src}
                    alt={partner.name}
                    className="h-6 md:h-7 object-contain hover:opacity-80 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    value: '1100+',
    label: 'Startups Supported',
    sub: 'Across stages, sectors, and growth journeys.',
  },
  {
    value: '96+',
    label: 'Cohorts',
    sub: 'Turning complexity into clear next moves.',
  },
  {
    value: '1300 Cr+',
    label: 'Revenue growth impacted',
    sub: 'Turning complexity into clear next moves.',
  },
  {
    value: '2x',
    label: 'Average MRR Growth',
    sub: 'Designed for compounding momentum.',
  },
];

export default function BusinessImpact() {
  return (
    <section className="bg-[#2F4A2F] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">
          {/* Left label */}
          <div className="md:pr-8 md:border-r md:border-white/15 flex flex-col justify-start">
            <h2 className="text-[28px] font-semibold text-white leading-tight font-sans">
              Our Business<br />Impact
            </h2>
          </div>

          {/* Stats */}
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex flex-col justify-start gap-1.5 md:pl-8 ${
                index < stats.length - 1 ? 'md:border-r md:border-white/15 md:pr-8' : ''
              }`}
            >
              <div
                className="text-[36px] md:text-[40px] font-bold text-[#91C491] leading-none"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[12px] font-bold text-[#91C491] leading-snug">
                {stat.label}
              </div>
              <div className="text-[12px] text-white/60 leading-relaxed font-sans">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

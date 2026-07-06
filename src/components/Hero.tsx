export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase">
                ✦ THE THINKING BEHIND THE GROWTH
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-[42px] md:text-[54px] text-[#1a1a1a] leading-[1.08] tracking-tight" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Scale Isn't Accidental.
              </h1>
              <h1
                className="text-[42px] md:text-[54px] leading-[1.08] tracking-tight text-[#2F4A2F]"
                style={{ fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif", fontStyle: 'italic' }}
              >
                It's Designed.
              </h1>
            </div>

            <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
              Exceptional Sprint consultants and world-class design thinkers. Supercharged by T-sprints and growth formulas to help startups move from
              chaos to compounding growth.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button className="bg-[#2F4A2F] text-white text-[13px] font-medium px-5 py-2.5 rounded hover:bg-[#3D5E3D] transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
                Explore our Offerings
              </button>
              <button className="border border-gray-300 text-gray-700 text-[13px] font-medium px-5 py-2.5 rounded hover:border-[#2F4A2F] hover:text-[#2F4A2F] transition-all duration-200 hover:-translate-y-0.5">
                Book a discovery call
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative hidden lg:block mb-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '420px' }}>
              <img
                src="/Landing Page/HerosectionImage.png"
                alt="Strategy workshop with planning and sticky notes on a desk"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

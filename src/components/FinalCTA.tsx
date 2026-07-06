import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="bg-[#1F3A1F] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left */}
          <div className="space-y-3">
            <h2 className="text-[28px] md:text-[30px] font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              Work with a team that understands<br />
              how to build ventures
            </h2>
            <p className="text-[14px] text-white/70 font-sans">
              Built for ambitious founders that need accelerated movement
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto shrink-0">
            <Link 
              to="/contact" 
              className="bg-white text-[#1f3a1f] text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-center w-full sm:w-auto"
            >
              Get In Touch
            </Link>
            <Link 
              to="/offerings" 
              className="border border-white/30 text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center w-full sm:w-auto"
            >
              Explore Offerings &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

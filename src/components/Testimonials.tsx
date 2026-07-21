import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: string;
  metric: string;
  logo: string;
  avatarInitials: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote:
      'Before ThinkingSpree, we were stuck at ₹12 Cr ARR for almost two years. Their T-Sprint format gave us razor-sharp positioning, overhauled our sales cadence, and helped us unlock ₹18 Cr in just 90 days.',
    author: 'Vikramaditya Sharma',
    role: 'Founder & CEO',
    company: 'FinEdge Systems',
    category: 'Fintech',
    metric: '₹12 Cr → ₹18 Cr ARR in 90 Days',
    logo: '/Landing Page/Startups/startup1.webp',
    avatarInitials: 'VS',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'The strategic clarity we got in two 15-day T-Sprints was equivalent to six months of trial and error. ThinkingSpree did not just consult—they embedded with our leadership to refine our GTM motion.',
    author: 'Neha Parashar',
    role: 'Co-Founder & CPO',
    company: 'OmniScale AI',
    category: 'B2B SaaS',
    metric: '3.5x Enterprise Closure Rate',
    logo: '/Landing Page/Startups/startup3.webp',
    avatarInitials: 'NP',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'Operational friction was eating up 40% of our team bandwidth. ThinkingSpree restructured our execution pipeline and aligned all cross-functional metrics around compound monthly growth.',
    author: 'Rohan Kulkarni',
    role: 'Co-Founder & MD',
    company: 'LogiPulse Supply Tech',
    category: 'B2B SaaS',
    metric: '42% Faster Execution Cycles',
    logo: '/Landing Page/Startups/startup5.webp',
    avatarInitials: 'RK',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'Underpricing was killing our unit economics. ThinkingSpree rebuilt our value positioning and pricing framework, allowing us to increase ACV by 2.4x without hurting conversion rates.',
    author: 'Ananya Roy',
    role: 'Founder',
    company: 'Aura Living',
    category: 'D2C',
    metric: '2.4x Average Order Value',
    logo: '/Landing Page/Startups/startup8.webp',
    avatarInitials: 'AR',
    rating: 5,
  },
  {
    id: '5',
    quote:
      'Finding real product-market fit in healthcare tech takes disciplined customer discovery. ThinkingSpree guided us through 30+ structured interviews, leading directly to our flagship product launch.',
    author: 'Dr. Siddharth Mehta',
    role: 'Co-Founder & CTO',
    company: 'MedPulse Health',
    category: 'Healthtech',
    metric: 'Zero to ₹2.5 Cr ARR in 6 Months',
    logo: '/Landing Page/Startups/startup12.webp',
    avatarInitials: 'SM',
    rating: 5,
  },
  {
    id: '6',
    quote:
      'ThinkingSpree brings founder-level empathy combined with institutional-grade discipline. Every T-Sprint had explicit deliverables and measurable business impact.',
    author: 'Kavita Menon',
    role: 'Founder & CEO',
    company: 'Nexus Analytics',
    category: 'Analytics',
    metric: '2.8x ARR Growth Y-o-Y',
    logo: '/Landing Page/Startups/startup15.webp',
    avatarInitials: 'KM',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsively update visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll timer: advance single card at a time every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  // Extend data array to allow smooth circular wrap for 3 visible cards
  const extendedData = [...testimonialsData, ...testimonialsData.slice(0, 3)];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase">
              ✦ WHAT FOUNDERS SAY
            </span>
            <div className="mt-3">
              <h2
                className="text-[36px] md:text-[44px] text-[#1a1a1a] leading-tight"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                Proven Impact,
              </h2>
              <h2
                className="text-[36px] md:text-[44px] leading-tight text-[#2F4A2F]"
                style={{
                  fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Direct From Founders
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-md hidden md:block">
              Real stories from venture leaders who accelerated clarity and scale through ThinkingSpree T-Sprints.
            </p>

            {/* Navigation Arrows (Prev / Next) */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors shadow-sm cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors shadow-sm cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel viewport */}
        <div
          className="relative overflow-hidden -mx-3 pt-2 pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track sliding 1 single card at a time */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {extendedData.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 flex"
              >
                <div className="bg-white border border-gray-100 rounded-[20px] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full relative overflow-hidden group">
                  {/* Top Row: Metric Tag */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFDF6] border border-[#E29A52]/30 text-[11px] font-bold text-[#E29A52]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E29A52]" />
                        {item.metric}
                      </span>
                    </div>

                    {/* Quote Icon */}
                    <div className="pt-2">
                      <svg
                        className="w-8 h-8 text-brand-green/20 group-hover:text-brand-green/40 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <p className="text-[14px] text-gray-700 leading-relaxed font-sans italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Bottom Row: Founder Info & Startup Logo */}
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#2F4A2F] text-white font-bold text-[13px] flex items-center justify-center shrink-0 shadow-sm">
                        {item.avatarInitials}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-[#1a1a1a]">
                          {item.author}
                        </h4>
                        <p className="text-[11px] text-gray-500">
                          {item.role}, <span className="font-medium text-gray-700">{item.company}</span>
                        </p>
                      </div>
                    </div>

                    {/* Startup Logo thumbnail */}
                    {item.logo && (
                      <div className="h-8 w-16 flex items-center justify-end opacity-80 group-hover:opacity-100 transition-opacity">
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-[#2F4A2F]'
                  : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from 'react';

const beliefs = [
  {
    title: "First-principles thinking, always",
    desc: "We go back to the root every time. Humans first, their intrinsic nature first – then we build frameworks around what's actually true, not what looks good on a slide deck.",
  },
  {
    title: "Design thinking is our operating system",
    desc: "Not as an aesthetic – as a discipline. It's been our starting point since day one, and we've built layer after layer on top of it to tackle genuinely complex, real-world problems.",
  },
  {
    title: "Speed is not a feature — it's the point",
    desc: "If we told a founder we'd return in three months, they'd say: \"We'll have twenty new problems by then.\" So we move in days, not quarters. Always have.",
  },
  {
    title: "Empathy runs deeper than helpfulness",
    desc: "Empathy isn't sympathy. It means being there — no matter what, in every setting — for the founder, for the team, for every person in the ecosystem touching the work.",
  },
];

const teamMembers = [
  {
    name: 'Anukrati Chawla',
    role: 'Growth Strategist',
    image: '/AboutUs/Anukrati Chawla.png',
    bgColor: 'bg-[#D4EBD5]',
  },
  {
    name: 'Vani Agarwal',
    role: 'Founder',
    image: '/AboutUs/Vani Agarwal.png',
    bgColor: 'bg-[#2F4A2F]',
  },
  {
    name: 'Pritesh Yeole',
    role: 'Senior Growth Strategist and Operator',
    image: '/AboutUs/Pritesh Yeole.png',
    bgColor: 'bg-[#E29A52]',
  },
  {
    name: 'Tanya Bhatia',
    role: 'Growth Strategist',
    image: '/AboutUs/Tanya Bhatia.png',
    bgColor: 'bg-[#E29A52]',
  },
  {
    name: 'Jyoti Singh',
    role: 'COO',
    image: '/AboutUs/Jyoti Singh.png',
    bgColor: 'bg-[#F4D7B9]',
  },
  {
    name: 'Bhumika Agarwal',
    role: 'Programs and Partnerships Manager',
    image: '/AboutUs/Bhumika Agarwal.png',
    bgColor: 'bg-[#D4EBD5]',
  },
  {
    name: 'Rishu N. Pathak',
    role: 'Associate– Growth Strategy',
    image: '/AboutUs/Rishu N Pathak.png',
    bgColor: 'bg-[#D4EBD5]',
  },
];

const heroQuotes = [
  {
    text: "Most businesses don't need another strategy deck. They need someone willing to sit inside the complexity long enough to make it simple.",
    author: "Vani Agarwal, Founder & CEO"
  },
  {
    text: "Growth isn't about doing fifty things. It's about finding the three things that actually move the needle and executing them with relentless precision.",
    author: "Pritesh Yeole, Senior Growth Strategist & Operator"
  },
  {
    text: "Operations are only invisible when they work perfectly. We don't just build frameworks — we build the engines that run them daily.",
    author: "Jyoti Singh, COO"
  }
];

function LinkedInIcon() {
  return (
    <a href="#" className="text-[#2F4A2F] hover:opacity-85 transition-opacity shrink-0">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2F4A2F">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </a>
  );
}

export default function AboutUs() {
  const founderStoryRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuoteIndex((prevIndex) => (prevIndex + 1) % heroQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-white pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase">
                ✦ ABOUT THINKING SPREE
              </span>
              <div className="mt-2">
                <h1
                  className="text-[42px] md:text-[54px] text-[#1a1a1a] leading-[1.08] tracking-tight"
                  style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                >
                  The thinking
                </h1>
                <h1
                  className="text-[42px] md:text-[54px] leading-[1.08] tracking-tight text-[#2F4A2F] italic"
                  style={{ fontFamily: "'PT Serif', Georgia, serif", fontStyle: 'italic'}}
                >
                  behind the growth.
                </h1>
              </div>

              <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
                We're a team of operators, designers, and strategists who have built from inside the problems we now help founders solve.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
                <button 
                  onClick={() => scrollToSection(founderStoryRef)}
                  className="bg-[#2F4A2F] text-white text-[13px] font-semibold px-6 py-3 rounded-lg hover:bg-[#1F3A1F] transition-colors shadow-sm cursor-pointer w-full sm:w-auto text-center justify-center"
                >
                  Founder Story
                </button>
                <button 
                  onClick={() => scrollToSection(teamRef)}
                  className="border border-gray-200 bg-gray-50/30 text-gray-700 text-[13px] font-semibold px-6 py-3 rounded-lg hover:border-[#2F4A2F] hover:text-[#2F4A2F] transition-colors cursor-pointer w-full sm:w-auto text-center justify-center"
                >
                  Meet Our Team
                </button>
              </div>
            </div>

            {/* Right - Quote */}
            <div className="relative min-h-[220px] flex items-center">
              <div className="space-y-4 w-full">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.4">
                  <path d="M8 28V20C8 14 12 10 18 8L19 10C14 12 13 15 13 18H18V28H8ZM22 28V20C22 14 26 10 32 8L33 10C28 12 27 15 27 18H32V28H22Z" fill="#E29A52"/>
                </svg>
                
                <div className="transition-opacity duration-500 ease-in-out">
                  <p
                    key={activeQuoteIndex}
                    className="text-[18px] md:text-[22px] text-[#1a1a1a] leading-relaxed font-light animate-fadeIn"
                    style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                  >
                    "{heroQuotes[activeQuoteIndex].text}"
                  </p>
                  <p className="text-[13px] text-gray-500 mt-3 animate-fadeIn">
                    — <span className="font-semibold text-[#1a1a1a]">{heroQuotes[activeQuoteIndex].author}</span>
                  </p>
                </div>
                
                {/* Carousel dots */}
                <div className="flex gap-1.5 pt-4">
                  {heroQuotes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQuoteIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeQuoteIndex ? 'bg-[#E29A52] w-4' : 'bg-[#E29A52]/30 hover:bg-[#E29A52]/50'
                      }`}
                      aria-label={`Go to quote ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative shapes using GetInTouchElement.png */}
        <div className="absolute bottom-0 right-50 pointer-events-none select-none z-0">
          <img
            src="/GetInTouchElement.png"
            alt="Decorative shapes"
            className="h-24 md:h-24 object-contain"
          />
        </div>
      </section>

      {/* ─── Philosophy Section ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-[#E29A52] text-[11px] font-semibold tracking-[0.2em] uppercase">
              OUR MISSION
            </span>
            <div className="mt-3">
              <h2
                className="text-[36px] md:text-[44px] text-[#1a1a1a] leading-tight"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                Why we exist. <br />
                <span className="text-[#2F4A2F] italic" style={{ fontStyle: 'italic' }}>
                  What we actually believe.
                </span>
              </h2>
            </div>
          </div>

          {/* Quote banner */}
          <div className="bg-[#2F4A2F] rounded-2xl px-8 py-12 mb-10 relative overflow-hidden flex items-center justify-center min-h-[160px]">
            <p
              className="text-white text-[18px] md:text-[24px] text-center leading-relaxed font-serif relative z-10 max-w-4xl"
              style={{ fontFamily: "'PT Serif', Georgia, serif", fontStyle: 'italic' }}
            >
              “The world has enough strategy. What it's missing is the clarity to act on it — today.”
            </p>
            {/* Background huge faded text */}
            <div 
              className="absolute right-6 bottom-[-25px] text-[80px] md:text-[130px] font-black text-white/5 select-none pointer-events-none leading-none tracking-wider"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              MISSION
            </div>
          </div>

          {/* Belief cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((belief, idx) => (
              <div
                key={belief.title}
                className="border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 bg-white relative overflow-hidden min-h-[160px] group"
              >
                <div className="relative z-10">
                  <h4
                    className="text-[16px] font-bold text-[#1a1a1a] mb-3"
                    style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                  >
                    {belief.title}
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                    {belief.desc}
                  </p>
                </div>

                {/* Background decorative elements 1-4 */}
                <img 
                  src={`/AboutUs/element${[2, 4, 3, 1][idx]}.png`} 
                  alt="" 
                  className="absolute right-0 bottom-0 pointer-events-none select-none w-24 h-24 object-contain translate-x-2 translate-y-2 opacity-90 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Story Section ─── */}
      <section ref={founderStoryRef} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Founder Photo and Subtext */}
            <div className="md:col-span-5 flex flex-col">
              {/* Image Frame with dark green top & bottom borders */}
              <div className="bg-white">
                <img 
                  src="/AboutUs/FounderImage.png" 
                  alt="Vani Agarwal" 
                  className="w-full object-cover object-center"
                />
              </div>
              
              {/* Info under the frame */}
              <div className="flex items-center justify-between mt-4 px-1">
                <div>
                  <h3 className="text-[22px] font-bold text-[#1a1a1a] tracking-tight leading-tight">
                    Vani Agarwal
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium mt-0.5">
                    Founder & CEO
                  </p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/vani-agarwal-thinkingspree/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2F4A2F] hover:opacity-85 transition-opacity"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2F4A2F">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Founder Story Content */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="text-[#E29A52] text-[11px] font-semibold tracking-[0.2em] uppercase">
                  FOUNDER STORY
                </span>
                <h2 
                  className="text-[38px] md:text-[44px] text-[#1a1a1a] leading-[1.15] mt-3"
                  style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                >
                  Built from the inside <br />
                  <span className="text-[#2F4A2F] italic" style={{ fontStyle: 'italic' }}>of the problem.</span>
                </h2>
              </div>

              {/* Story paragraphs */}
              <div className="space-y-4 text-[14px] text-gray-500 leading-relaxed">
                <p>
                  Thinking Spree wasn't built in a boardroom. It started with a college reunion, a friend's business problem, and five people in a room who solved it in one evening. That spark – of fast thinking becoming real output – became the entire philosophy.
                </p>
                <p>
                  Before starting Thinking Spree, Vani was working inside large institutions, watching problems get solved in months that should have taken days. The contrast was impossible to ignore. Why is the world not solving problems faster? That question became the company.
                </p>
                <p>
                  The founding conviction: founders don't need more advice. They need an extended team of thinkers that plugs into their system – and makes the system think, build, and iterate. That's what we built. That's what we are.
                </p>
              </div>

              {/* Partner Logos */}
              <div className="flex items-center gap-6 pt-2">
                <img 
                  src="/AboutUs/funderWork1.png" 
                  alt="Partner logo" 
                  className="h-10 object-contain " 
                />
                <img 
                  src="/AboutUs/funderWork2.png" 
                  alt="Partner logo" 
                  className="h-10 object-contain" 
                />
                <img 
                  src="/AboutUs/funderWork3.png" 
                  alt="Partner logo" 
                  className="h-10 object-contain" 
                />
              </div>

              {/* Quote Block */}
              <div className="bg-[#F7F8F7] border-l-[3px] border-[#2F4A2F] px-6 py-5 rounded-r-lg mt-6">
                <p 
                  className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed font-sans italic"
                >
                  "Everybody in our team is becoming a great co-founder — not because of the status, but because of the operatability that comes with thinking in line with how the founder thinks."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Team Section ─── */}
      <section ref={teamRef} className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#E29A52] text-[11px] font-semibold tracking-[0.2em] uppercase">
                THE TEAM
              </span>
              <div className="mt-3">
                <h2
                  className="text-[36px] md:text-[44px] text-[#1a1a1a] leading-[1.15]"
                  style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                >
                  Thinkers who plug in and <br />
                  <span className="text-[#2F4A2F] italic" style={{ fontStyle: 'italic' }}>
                    build alongside.
                  </span>
                </h2>
              </div>
            </div>
            <div className="max-w-md">
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                We don't hire consultants. Every person in our system is trained to think from the founder's lens — objective enough to move the execution arm, aligned enough to never lose the vision.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group cursor-pointer">
                {/* Card Image Wrapper */}
                <div className={`${member.bgColor} rounded-xl flex items-end justify-center mb-4 overflow-hidden relative shadow-sm`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none"
                  />
                </div>
                {/* Member Info */}
                <div className="flex items-start justify-between mt-3 px-1">
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1a1a1a] tracking-tight">
                      {member.name}
                    </h4>
                    <p className="text-[12px] text-gray-500 mt-0.5 leading-tight">
                      {member.role}
                    </p>
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── In the Press Section ─── */}
      <section className="bg-[#FBFDF9] py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-[#E29A52] text-[11px] font-semibold tracking-[0.2em] uppercase">
              ✦ MEDIA & COVERAGE
            </span>
            <div className="mt-3">
              <h2
                className="text-[36px] md:text-[44px] text-[#1a1a1a] leading-[1.15]"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                In the <span className="text-[#2F4A2F] italic" style={{ fontStyle: 'italic' }}>press.</span>
              </h2>
            </div>
          </div>

          {/* Press Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a
              href="https://www.thinkingspree.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/AboutUs/press1.png"
                  alt="From Idea to Prototype"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] text-[#E29A52] font-semibold tracking-wider uppercase">
                  Featured
                </span>
                <h4
                  className="text-[16px] font-bold text-[#1a1a1a] leading-snug group-hover:text-[#2F4A2F] transition-colors"
                  style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                >
                  From Idea to Prototype – In Just 90 Days
                </h4>
                <p className="text-[12px] text-gray-400 font-medium">
                  Jun 23, 2025
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="https://www.thinkingspree.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/AboutUs/press2.png"
                  alt="From Custom Deployments to a Scalable Robotics Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] text-[#E29A52] font-semibold tracking-wider uppercase">
                  Featured
                </span>
                <h4
                  className="text-[16px] font-bold text-[#1a1a1a] leading-snug group-hover:text-[#2F4A2F] transition-colors"
                  style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                >
                  From Custom Deployments to a Scalable Robotics Product
                </h4>
                <p className="text-[12px] text-gray-400 font-medium">
                  Jun 18, 2025
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="https://www.thinkingspree.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/AboutUs/press3.png"
                  alt="Revolutionizing the Global Strategy Business"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] text-[#E29A52] font-semibold tracking-wider uppercase">
                  Featured
                </span>
                <h4
                  className="text-[16px] font-bold text-[#1a1a1a] leading-snug group-hover:text-[#2F4A2F] transition-colors"
                  style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                >
                  Revolutionizing the Global Strategy Business
                </h4>
                <p className="text-[12px] text-gray-400 font-medium">
                  Jan 9, 2023
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

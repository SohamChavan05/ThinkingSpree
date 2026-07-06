export default function GetInTouch() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-stretch">
          {/* Left - Contact Information Sidebar */}
          <div className="border border-gray-100 rounded-2xl p-8 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-8">
                Contact Information
              </h3>

              <div>
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a1a]">Email Address</div>
                    <div className="text-[13px] text-gray-500 mt-0.5">Vani.agarwal@thinkingspree.com</div>
                  </div>
                </div>

                <div className="border-t border-gray-100/80 my-6" />

                {/* Opening Hour */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a1a]">Opening Hour</div>
                    <div className="text-[13px] text-gray-500 mt-0.5">Mon - Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>

                <div className="border-t border-gray-100/80 my-6" />

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a1a]">Our Location</div>
                    <div className="text-[13px] text-gray-500 mt-0.5 leading-relaxed">
                      Bangalore , Hyderabad , Mumbai,<br />
                      Delhi & Kolkata
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="border border-gray-100 rounded-2xl p-8 md:p-12 relative overflow-hidden bg-white">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              Start a Discovery Call
            </h2>
            <p className="text-[14px] text-gray-500 mb-8 max-w-2xl leading-relaxed">
              Tell us a bit about your business, what feels unclear right now, and where you want growth to go next.
            </p>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-5 py-3.5 rounded-lg bg-[#EEF8E6]/50 text-[13px] text-[#1a1a1a] placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-[#2F4A2F]/30 transition-shadow"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-5 py-3.5 rounded-lg bg-[#EEF8E6]/50 text-[13px] text-[#1a1a1a] placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-[#2F4A2F]/30 transition-shadow"
                />
              </div>

              {/* Row 2: Company + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-5 py-3.5 rounded-lg bg-[#EEF8E6]/50 text-[13px] text-[#1a1a1a] placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-[#2F4A2F]/30 transition-shadow"
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-5 py-3.5 rounded-lg bg-[#EEF8E6]/50 text-[13px] text-[#1a1a1a] placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-[#2F4A2F]/30 transition-shadow"
                />
              </div>

              {/* Row 3: Stage dropdown (half width) */}
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  className="w-full px-5 py-3.5 rounded-lg bg-[#EEF8E6]/50 text-[13px] text-gray-400 border-none outline-none focus:ring-2 focus:ring-[#2F4A2F]/30 transition-shadow appearance-none cursor-pointer"
                  defaultValue=""
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%239ca3af' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 20px center',
                  }}
                >
                  <option value="" disabled>What stage is your business in?</option>
                  <option value="idea">Idea Stage</option>
                  <option value="early">Early Stage (Pre-Revenue)</option>
                  <option value="growth">Growth Stage (₹2Cr - ₹20Cr)</option>
                  <option value="scale">Scale Stage (₹20Cr+)</option>
                  <option value="pre-ipo">Pre-IPO</option>
                </select>
                <div className="hidden md:block" />
              </div>

              {/* Row 4: Textarea */}
              <div>
                <textarea
                  placeholder="What are the current challenges your are facing/ goals you are looking to achieve?"
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-lg bg-[#EEF8E6]/50 text-[13px] text-[#1a1a1a] placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-[#2F4A2F]/30 transition-shadow resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#2F4A2F] text-white text-[13px] font-bold px-7 py-3.5 rounded-lg flex items-center gap-3 hover:bg-[#1F3A1F] transition-colors cursor-pointer"
              >
                Book Discovery Call
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-brand-green shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#2F4A2F]">
                    <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </form>

            {/* Decorative shapes using GetInTouchElement.png */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none z-0">
              <img
                src="/GetInTouchElement.png"
                alt="Decorative shapes"
                className="h-24 md:h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

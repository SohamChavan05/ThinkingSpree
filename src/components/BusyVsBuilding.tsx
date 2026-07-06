export default function BusyVsBuilding() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div>
              <span className="text-[#E29A52] text-[11px] font-semibold tracking-widest uppercase">
                ✦ THE REAL PROBLEM
              </span>
            </div>

            <div>
              <h2 className="text-[36px] md:text-[44px] text-[#1a1a1a] leading-tight" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
                Busy Isn't
              </h2>
              <h2
                className="text-[36px] md:text-[44px] leading-tight text-[#2F4A2F]"
                style={{ fontFamily: "'Liberation Serif', 'Times New Roman', Times, serif", fontStyle: 'italic' }}
              >
                The Same As Building
              </h2>
            </div>

            <p className="text-[14px] text-gray-500 leading-relaxed max-w-md">
              Most teams aren’t short on effort. They’re overloaded with competing priorities, reactive execution, and systems that stop scaling as complexity grows.</p>
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-md">
              We help businesses restore clarity, align execution, and focus growth around what actually moves the company forward.</p>
          </div>

          {/* Right - Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/Landing Page/therealproblemsection.png"
              alt="The real problem with scaling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

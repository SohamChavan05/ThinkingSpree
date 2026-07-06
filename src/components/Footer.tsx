export default function Footer() {
  return (
    <footer className="bg-[#1F3A1F] text-white/60 pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Logo col */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img src="/LogoFooter.png" alt="ThinkingSpree Logo" className="h-8" />
            <p className="text-[12px] leading-relaxed text-white/40 max-w-[180px]">
              Making strategy real-time and actionable for sustainable ventures of tomorrow.
            </p>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-[12px] font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">About Us</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Offerings Column */}
          <div className="space-y-4">
            <h4 className="text-[12px] font-bold text-white uppercase tracking-wider">Offerings</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Growth Strategy T-Sprints</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Builder T-Sprints</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Custom Implementation</a></li>
            </ul>
          </div>

          {/* Partner Program Column */}
          <div className="space-y-4">
            <h4 className="text-[12px] font-bold text-white uppercase tracking-wider">Partner Program</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">For Accelerators</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">For Incubators</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Ecosystem Partners</a></li>
            </ul>
          </div>

          {/* Let's Connect Column */}
          <div className="space-y-4">
            <h4 className="text-[12px] font-bold text-white uppercase tracking-wider">Let's Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@thinkingspree.com" className="text-[13px] text-white/50 hover:text-white/80 transition-colors inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@thinkingspree.com
                </a>
              </li>
              <li className="pt-1">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-6 h-6 rounded border border-white/20 hover:border-white/40 transition-colors text-white/50 hover:text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/30">
          <span>© 2026 Think Spree. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

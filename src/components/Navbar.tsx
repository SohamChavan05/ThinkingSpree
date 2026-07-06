import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Offerings', to: '/offerings' },
  { label: 'Partner Program', to: '/partner-program' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insight', to: '/insights' },
  { label: 'About Us', to: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/Logo.svg" alt="ThinkingSpree Logo" className="h-8" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isInternal = link.to.startsWith('/');
            const isActive = location.pathname === link.to && !isContactPage;

            return isInternal ? (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[13px] font-medium transition-colors hover:text-[#2F4A2F] ${
                  isActive
                    ? 'text-[#2F4A2F] border-b-2 border-[#E29A52] pb-0.5'
                    : 'text-gray-500'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.to}
                className="text-[13px] font-medium text-gray-500 transition-colors hover:text-[#2F4A2F]"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className={`text-[12px] font-medium px-4 py-2 rounded flex items-center gap-1 transition-colors ${
              isContactPage
                ? 'border border-[#2F4A2F] text-[#2F4A2F] hover:bg-[#2F4A2F] hover:text-white'
                : 'text-white bg-[#2F4A2F] hover:bg-[#3D5E3D]'
            }`}
          >
            Get In Touch
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              {isContactPage ? (
                <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-[#2F4A2F]" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isInternal = link.to.startsWith('/');
            return isInternal ? (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13px] font-medium text-gray-700 hover:text-[#2F4A2F]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.to}
                className="text-[13px] font-medium text-gray-700 hover:text-[#2F4A2F]"
              >
                {link.label}
              </a>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 text-[12px] font-medium text-white bg-[#2F4A2F] px-4 py-2 rounded w-fit"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
}

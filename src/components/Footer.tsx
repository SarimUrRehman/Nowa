import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../config';
import { Phone, Mail, MapPin, Clock, ArrowUp, Calendar } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Results & Reviews', href: '#results' },
    { name: 'Book & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 relative overflow-hidden">
      {/* Top red accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D91E2A] to-transparent w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Info & Mission (lg:col-span-4) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />

            <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#A8ADB5] leading-relaxed max-w-sm pt-2">
              Premier mobile auto detailing serving Redmond, Bend, and Central Oregon. We bring professional equipment, eco-safe products, and meticulous hands-on care directly to your doorstep.
            </p>

            {/* Social Link */}
            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141414] hover:bg-[#1C1C1E] text-white text-xs font-['Montserrat',sans-serif] font-medium tracking-wider uppercase border border-white/10 hover:border-[#D91E2A]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-[#D91E2A]" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.22a8.16 8.16 0 0 0 4.91 1.62v-3.5a4.85 4.85 0 0 1-1-.65Z" />
                </svg>
                <span>Follow {BUSINESS_CONFIG.tiktokHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Montserrat',sans-serif] font-bold text-xs uppercase tracking-[0.2em] text-[#D91E2A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-['Montserrat',sans-serif] uppercase tracking-wider text-[#A8ADB5]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D91E2A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-['Montserrat',sans-serif] font-bold text-xs uppercase tracking-[0.2em] text-[#D91E2A]">
              Contact & Hours
            </h4>

            <div className="space-y-3 text-xs text-[#A8ADB5] font-['Inter',sans-serif]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D91E2A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">{BUSINESS_CONFIG.phonePlaceholder}</span>
                  <span className="text-[11px] text-neutral-400">Call or Text for Scheduling</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D91E2A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">{BUSINESS_CONFIG.emailPlaceholder}</span>
                  <span className="text-[11px] text-neutral-400">Direct Estimates & Fleet Inquiries</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D91E2A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Redmond • Bend • Central Oregon</span>
                  <span className="text-[11px] text-neutral-400">Mobile Unit Arrives at Your Location</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D91E2A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">{BUSINESS_CONFIG.hoursPlaceholder}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8ADB5]">
          <p>© 2025 NouwaDetail. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="cursor-pointer inline-flex items-center gap-1.5 hover:text-white transition-colors group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D91E2A] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

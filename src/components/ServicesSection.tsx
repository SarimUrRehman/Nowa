import React from 'react';
import { SERVICES_LIST, ServiceItem } from '../config';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

// Custom automotive SVG icons tailored for detailing
const ServiceIcon: React.FC<{ type: ServiceItem['iconName'] }> = ({ type }) => {
  switch (type) {
    case 'interior':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <path d="M19 9l-4-4H9L5 9v11h14V9z" strokeLinejoin="round" />
          <path d="M9 13h6" strokeLinecap="round" />
          <path d="M10 17h4" strokeLinecap="round" />
          <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'exterior':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <path d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5v5a1 1 0 01-1 1h-1a2 2 0 01-4 0H9a2 2 0 01-4 0H4a1 1 0 01-1-1v-5z" strokeLinejoin="round" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="16.5" cy="17.5" r="1.5" />
          <path d="M6 10l1-2h10l1 2" strokeLinecap="round" />
          {/* Water droplets shine */}
          <path d="M12 2v2M8 3.5l1 1.5M16 3.5l-1 1.5" stroke="#D91E2A" strokeLinecap="round" />
        </svg>
      );
    case 'full':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" stroke="#D91E2A" strokeWidth="1.5" />
          <path d="M12 3v18M3 12h18" stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.4" />
          <path d="M7 14l5-6 5 6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="14" r="2" fill="#D91E2A" stroke="none" />
        </svg>
      );
    case 'vacuum':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <path d="M4 19h16" strokeLinecap="round" />
          <path d="M7 19v-6a4 4 0 014-4h2a4 4 0 014 4v6" strokeLinejoin="round" />
          <path d="M12 9V4m0 0l-2 2m2-2l2 2" stroke="#D91E2A" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'upholstery':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <path d="M7 4h10a2 2 0 012 2v8a4 4 0 01-4 4H9a4 4 0 01-4-4V6a2 2 0 012-2z" strokeLinejoin="round" />
          <path d="M5 14h14" strokeLinecap="round" />
          <path d="M9 18v2m6-2v2" stroke="#D91E2A" strokeLinecap="round" />
          <path d="M9 8h6M9 11h6" strokeOpacity="0.4" strokeLinecap="round" />
        </svg>
      );
    case 'console':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <rect x="3" y="5" width="18" height="14" rx="2" strokeLinejoin="round" />
          <line x1="12" y1="5" x2="12" y2="19" strokeOpacity="0.3" />
          <circle cx="7.5" cy="10" r="1.5" fill="#D91E2A" stroke="none" />
          <circle cx="16.5" cy="10" r="1.5" fill="#D91E2A" stroke="none" />
          <line x1="6" y1="14" x2="9" y2="14" strokeLinecap="round" />
          <line x1="15" y1="14" x2="18" y2="14" strokeLinecap="round" />
        </svg>
      );
    case 'windows':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeLinejoin="round" />
          <path d="M3 10h18M11 4v16" strokeLinecap="round" />
          <path d="M14 7l-2 2M18 13l-3 3" stroke="#D91E2A" strokeLinecap="round" />
        </svg>
      );
    case 'wheels':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3.5" fill="#18181B" stroke="#D91E2A" strokeWidth="1.5" />
          <line x1="12" y1="3" x2="12" y2="8.5" strokeLinecap="round" />
          <line x1="12" y1="15.5" x2="12" y2="21" strokeLinecap="round" />
          <line x1="3" y1="12" x2="8.5" y2="12" strokeLinecap="round" />
          <line x1="15.5" y1="12" x2="21" y2="12" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0A0A] relative border-b border-white/5">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-950/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-neutral-900/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-['Montserrat',sans-serif] tracking-[0.25em] uppercase text-[#D91E2A] font-bold">
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
            <span>Mobile Detailing Menu</span>
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
          </div>

          <h2 className="font-['Michroma','Syncopate',sans-serif] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white font-black text-balance">
            Our Detailing Services
          </h2>

          <p className="font-['Inter',sans-serif] text-sm md:text-base text-[#A8ADB5] leading-relaxed">
            Professional car care brought directly to your location. Every detail is performed with precision tools, safe chemistry, and meticulous hands-on care.
          </p>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const isFeatured = service.id === 'full-detail';

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl bg-[#141414] hover:bg-[#18181B] p-6 flex flex-col justify-between border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured
                    ? 'border-[#D91E2A]/60 shadow-lg shadow-[#D91E2A]/10 ring-1 ring-[#D91E2A]/30'
                    : 'border-white/10 hover:border-[#D91E2A]/40'
                }`}
              >
                {/* Subtle top indicator for featured signature detail */}
                {isFeatured && (
                  <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-[#D91E2A] text-white text-[10px] font-['Montserrat',sans-serif] font-bold uppercase tracking-widest shadow-md">
                    Signature Package
                  </div>
                )}

                <div>
                  {/* Icon & Index Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-[#D91E2A] group-hover:scale-105 group-hover:border-[#D91E2A]/40 transition-all duration-300">
                      <ServiceIcon type={service.iconName} />
                    </div>
                    <span className="font-['Michroma',monospace] text-xs text-white/30 tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-base md:text-lg text-white mb-2 leading-snug group-hover:text-[#D91E2A] transition-colors">
                    {service.title}
                  </h3>

                  {/* One-Line Description */}
                  <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#A8ADB5] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer of Card: Editable Quote Note & Pre-Selecting Book Link */}
                <div className="pt-4 border-t border-white/10 mt-auto space-y-3">
                  <div className="text-[11px] font-['Montserrat',sans-serif] tracking-wide text-neutral-400 italic">
                    {service.quoteNote}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="cursor-pointer w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#1C1C1E] hover:bg-[#D91E2A] text-white text-xs font-['Montserrat',sans-serif] font-semibold tracking-wider uppercase transition-colors duration-200 group/btn"
                  >
                    <span>Book This</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A8ADB5] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-['Montserrat',sans-serif] font-bold text-sm text-white uppercase tracking-wider">
              Need multiple services or custom fleet care?
            </h4>
            <p className="text-xs text-[#A8ADB5] mt-1">
              Bundle interior and exterior details together for the best turnaround and package value.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Full Interior & Exterior Detail')}
            className="cursor-pointer shrink-0 px-5 py-2.5 rounded-lg bg-[#D91E2A] hover:bg-[#BF1622] text-white text-xs font-['Montserrat',sans-serif] font-bold uppercase tracking-wider transition-colors red-glow-hover"
          >
            Request Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
};

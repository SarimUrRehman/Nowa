import React from 'react';
import { ArrowRight, MapPin, Sparkles, ShieldCheck, Car } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

interface HeroProps {
  onBookClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const handleScrollToBooking = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0A0A0A] overflow-hidden border-b border-white/5"
    >
      {/* Background radial ambient glow in crimson and graphite */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D91E2A]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-950/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle technical automotive grid floor */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Unboxed Brand Kicker / Area Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] border border-white/10 text-xs font-['Montserrat',sans-serif] tracking-widest uppercase text-[#A8ADB5]">
              <span className="w-2 h-2 rounded-full bg-[#D91E2A]" />
              <span>Central Oregon Mobile Detailing</span>
              <span className="text-white/30">|</span>
              <span className="text-white font-medium">We Come To You</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Michroma','Syncopate',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black uppercase tracking-tight text-white leading-[1.15] text-balance">
              We Bring the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400">Shine</span> to{' '}
              <span className="relative inline-block text-[#D91E2A]">
                You.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#D91E2A]"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 7 C 30 1, 70 1, 100 7" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-['Inter',sans-serif] text-base sm:text-lg md:text-xl text-[#A8ADB5] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {BUSINESS_CONFIG.heroSubheadline}
            </p>

            {/* Key Trust Highlights (Unboxed typography with red bullet separators) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs md:text-sm font-['Montserrat',sans-serif] tracking-wider uppercase text-neutral-300 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#D91E2A]" />
                Mobile Service
              </span>
              <span className="text-[#D91E2A] font-bold">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D91E2A]" />
                Interior & Exterior
              </span>
              <span className="text-[#D91E2A] font-bold">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D91E2A]" />
                Redmond • Bend • Central OR
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={handleScrollToBooking}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D91E2A] hover:bg-[#BF1622] text-white font-['Montserrat',sans-serif] font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#D91E2A]/25 red-glow-hover transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Your Detail</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#141414] hover:bg-[#1C1C1E] text-white font-['Montserrat',sans-serif] font-semibold text-sm tracking-wider uppercase border border-white/10 hover:border-[#D91E2A]/50 transition-all duration-200"
              >
                {/* TikTok SVG Icon */}
                <svg className="w-4 h-4 fill-current text-[#D91E2A]" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.22a8.16 8.16 0 0 0 4.91 1.62v-3.5a4.85 4.85 0 0 1-1-.65Z" />
                </svg>
                <span>Follow on TikTok</span>
              </a>
            </div>

            {/* Quick Assurance Strip */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#A8ADB5]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D91E2A]" />
                <span>Driveway & Workplace Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D91E2A]" />
                <span>Showroom Finish Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Built 100% from Inline SVG + CSS (No External Image Dependency!) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-[#141414] border border-white/10 p-4 sm:p-6 shadow-2xl overflow-hidden group">
              {/* Gloss finish gradient */}
              <div className="absolute inset-0 paint-gloss pointer-events-none" />

              {/* Animated Light Sweep Beam */}
              <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sweep pointer-events-none" />

              {/* Top Bar of the Visual Container */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-['Montserrat',sans-serif] tracking-wider uppercase">
                <span className="text-[#D91E2A] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91E2A]" />
                  Nouwa Precision Detail
                </span>
                <span className="text-[#A8ADB5]">Redmond • Bend</span>
              </div>

              {/* High-Impact Sports Car Silhouette SVG Illustration */}
              <div className="relative py-6 sm:py-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 600 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  aria-label="High performance sports car silhouette detailing illustration"
                >
                  <defs>
                    {/* Linear gradient for vehicle body */}
                    <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1A1A1E" />
                      <stop offset="35%" stopColor="#2A2A2E" />
                      <stop offset="70%" stopColor="#18181B" />
                      <stop offset="100%" stopColor="#0E0E10" />
                    </linearGradient>

                    {/* Red neon beam */}
                    <linearGradient id="redLaser" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#D91E2A" />
                      <stop offset="100%" stopColor="#FF4A55" />
                    </linearGradient>

                    {/* Ground reflection gradient */}
                    <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(217, 30, 42, 0.25)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>

                  {/* Ground Shadow & Reflection Grid */}
                  <ellipse cx="300" cy="245" rx="260" ry="22" fill="#050505" opacity="0.9" />
                  <ellipse cx="300" cy="245" rx="200" ry="12" fill="url(#groundGrad)" />

                  {/* Background Speed Lines & Contour Aura */}
                  <line x1="40" y1="210" x2="180" y2="210" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                  <line x1="80" y1="225" x2="220" y2="225" stroke="rgba(217,30,42,0.2)" strokeWidth="1.5" />
                  <line x1="380" y1="225" x2="560" y2="225" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

                  {/* Sports Car Body Silhouette */}
                  {/* Lower chassis silhouette */}
                  <path
                    d="M 60 215 L 120 215 C 130 190, 175 190, 185 215 L 415 215 C 425 190, 470 190, 480 215 L 540 215 C 555 215, 565 205, 555 195 L 530 180 C 510 170, 470 165, 430 160 L 370 120 C 330 95, 230 95, 175 140 L 95 165 C 75 172, 60 185, 55 198 Z"
                    fill="url(#carBodyGrad)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />

                  {/* Roofline & Fastback Canopy */}
                  <path
                    d="M 175 140 C 220 100, 310 98, 365 120 L 430 160 C 360 155, 250 152, 175 140 Z"
                    fill="#111114"
                    stroke="#D91E2A"
                    strokeWidth="1.8"
                  />

                  {/* Side Glass Division */}
                  <path
                    d="M 230 135 L 295 118 C 340 118, 370 135, 395 152 L 230 152 Z"
                    fill="#1C1C22"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                  />

                  {/* Signature Crimson Light Bar (Aerodynamic Character Sweep) */}
                  <path
                    d="M 75 185 Q 260 155 525 178"
                    stroke="url(#redLaser)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 6px #D91E2A)"
                  />

                  {/* Front Headlight Glow Beam */}
                  <polygon
                    points="535,182 590,195 585,210 540,190"
                    fill="url(#redLaser)"
                    opacity="0.8"
                  />

                  {/* Tail Light Accent */}
                  <circle cx="70" cy="188" r="4" fill="#D91E2A" />

                  {/* Front Wheel & Brake Caliper */}
                  <g id="front-wheel">
                    <circle cx="448" cy="215" r="32" fill="#0E0E10" stroke="#333" strokeWidth="4" />
                    <circle cx="448" cy="215" r="24" fill="#18181B" stroke="#555" strokeWidth="2" />
                    {/* Crimson Brake Caliper */}
                    <path d="M 438 200 A 16 16 0 0 1 458 200" stroke="#D91E2A" strokeWidth="4" fill="none" />
                    {/* Alloy Spokes */}
                    <line x1="448" y1="193" x2="448" y2="237" stroke="#A8ADB5" strokeWidth="2.5" />
                    <line x1="426" y1="215" x2="470" y2="215" stroke="#A8ADB5" strokeWidth="2.5" />
                    <line x1="432" y1="200" x2="464" y2="230" stroke="#A8ADB5" strokeWidth="2" />
                    <line x1="432" y1="230" x2="464" y2="200" stroke="#A8ADB5" strokeWidth="2" />
                    <circle cx="448" cy="215" r="6" fill="#D91E2A" />
                  </g>

                  {/* Rear Wheel & Brake Caliper */}
                  <g id="rear-wheel">
                    <circle cx="152" cy="215" r="32" fill="#0E0E10" stroke="#333" strokeWidth="4" />
                    <circle cx="152" cy="215" r="24" fill="#18181B" stroke="#555" strokeWidth="2" />
                    {/* Crimson Caliper */}
                    <path d="M 142 200 A 16 16 0 0 1 162 200" stroke="#D91E2A" strokeWidth="4" fill="none" />
                    {/* Alloy Spokes */}
                    <line x1="152" y1="193" x2="152" y2="237" stroke="#A8ADB5" strokeWidth="2.5" />
                    <line x1="130" y1="215" x2="174" y2="215" stroke="#A8ADB5" strokeWidth="2.5" />
                    <line x1="136" y1="200" x2="168" y2="230" stroke="#A8ADB5" strokeWidth="2" />
                    <line x1="136" y1="230" x2="168" y2="200" stroke="#A8ADB5" strokeWidth="2" />
                    <circle cx="152" cy="215" r="6" fill="#D91E2A" />
                  </g>

                  {/* Sparkle / Star Shine Accents (Polished Finish) */}
                  <g id="shine-sparkles">
                    {/* Sparkle on front fender */}
                    <path
                      d="M 495 160 Q 495 170 485 170 Q 495 170 495 180 Q 495 170 505 170 Q 495 170 495 160 Z"
                      fill="#FFFFFF"
                    />
                    <circle cx="495" cy="170" r="1.5" fill="#D91E2A" />

                    {/* Sparkle on roof curve */}
                    <path
                      d="M 310 95 Q 310 102 303 102 Q 310 102 310 109 Q 310 102 317 102 Q 310 102 310 95 Z"
                      fill="#FFFFFF"
                    />

                    {/* Sparkle on rear hip */}
                    <path
                      d="M 120 155 Q 120 160 115 160 Q 120 160 120 165 Q 120 160 125 160 Q 120 160 120 155 Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </div>

              {/* Bottom Card Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/5">
                  <span className="block text-[10px] uppercase tracking-wider text-[#A8ADB5] font-['Montserrat',sans-serif]">Service Mode</span>
                  <span className="font-semibold text-white">100% Mobile Van</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/5">
                  <span className="block text-[10px] uppercase tracking-wider text-[#A8ADB5] font-['Montserrat',sans-serif]">Coverage</span>
                  <span className="font-semibold text-white">Central Oregon</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { WHY_CHOOSE_BENEFITS, HOW_IT_WORKS_STEPS, BUSINESS_CONFIG } from '../config';
import { CheckCircle2, MapPin, Calendar, Clock, Sparkles, Shield, ThumbsUp } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const benefitIcons = [
    <MapPin key="1" className="w-5 h-5 text-[#D91E2A]" />,
    <Sparkles key="2" className="w-5 h-5 text-[#D91E2A]" />,
    <CheckCircle2 key="3" className="w-5 h-5 text-[#D91E2A]" />,
    <Calendar key="4" className="w-5 h-5 text-[#D91E2A]" />,
    <Shield key="5" className="w-5 h-5 text-[#D91E2A]" />,
    <ThumbsUp key="6" className="w-5 h-5 text-[#D91E2A]" />,
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F4F4F5] text-[#0A0A0A] relative overflow-hidden">
      {/* Decorative hairline accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-['Montserrat',sans-serif] tracking-[0.25em] uppercase text-[#D91E2A] font-bold">
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
            <span>Why Choose NouwaDetail</span>
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
          </div>

          <h2 className="font-['Michroma','Syncopate',sans-serif] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0A0A0A] font-black text-balance">
            Detailing That Revolves Around Your Day
          </h2>

          <p className="font-['Inter',sans-serif] text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
            Experience effortless, professional car care that arrives at your home driveway or office parking lot. No waiting in lobby lines, no dropping off your vehicle, and no lost hours—just meticulous attention to detail and a spotless showroom finish every single visit.
          </p>
        </div>

        {/* 6 Benefit Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-18">
          {WHY_CHOOSE_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-4">
                {benefitIcons[idx] || <CheckCircle2 className="w-5 h-5 text-[#D91E2A]" />}
              </div>
              <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-[#0A0A0A] mb-2">
                {benefit.title}
              </h3>
              <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* "Where We Work" Strip with 3 Location Chips/Cards */}
        <div className="rounded-2xl bg-[#0A0A0A] text-white p-8 sm:p-10 mb-18 border border-neutral-800 shadow-xl relative overflow-hidden">
          {/* Subtle red accent ambient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D91E2A] to-transparent" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-['Montserrat',sans-serif] tracking-widest uppercase text-[#D91E2A] font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Service Radius</span>
              </div>
              <h3 className="font-['Michroma',sans-serif] text-xl sm:text-2xl font-bold uppercase text-white">
                Where We Work
              </h3>
              <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#A8ADB5] leading-relaxed">
                Our mobile detailing unit travels across Central Oregon to deliver on-demand cleaning. Residential neighborhoods, business complexes, and private residences.
              </p>
            </div>

            {/* 3 Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto shrink-0">
              <div className="p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-[#D91E2A]/50 transition-colors text-center">
                <div className="font-['Montserrat',sans-serif] font-bold text-base text-white">Redmond</div>
                <div className="text-[11px] text-[#A8ADB5] mt-0.5">Home Base & North County</div>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#D91E2A] uppercase font-semibold tracking-wider">
                  <span>Driveway Service</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-[#D91E2A]/50 transition-colors text-center">
                <div className="font-['Montserrat',sans-serif] font-bold text-base text-white">Bend</div>
                <div className="text-[11px] text-[#A8ADB5] mt-0.5">Westside, Eastside & Old Mill</div>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#D91E2A] uppercase font-semibold tracking-wider">
                  <span>Workplace & Home</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-[#D91E2A]/50 transition-colors text-center">
                <div className="font-['Montserrat',sans-serif] font-bold text-base text-white">Central Oregon</div>
                <div className="text-[11px] text-[#A8ADB5] mt-0.5">Sisters & Regional Areas</div>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#D91E2A] uppercase font-semibold tracking-wider">
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "How It Works" Mini-Row of 3 Steps */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-['Montserrat',sans-serif] tracking-widest uppercase text-[#D91E2A] font-bold">
              3 Simple Steps
            </span>
            <h3 className="font-['Michroma',sans-serif] text-xl sm:text-2xl font-bold uppercase text-[#0A0A0A]">
              How Mobile Detailing Works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {HOW_IT_WORKS_STEPS.map((item, index) => (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Michroma',sans-serif] text-2xl font-black text-[#D91E2A]">
                      {item.step}
                    </span>
                    <span className="text-xs font-['Montserrat',sans-serif] uppercase tracking-wider text-neutral-400 font-medium">
                      Step {index + 1} of 3
                    </span>
                  </div>
                  <h4 className="font-['Montserrat',sans-serif] font-bold text-lg text-[#0A0A0A] mb-2">
                    {item.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

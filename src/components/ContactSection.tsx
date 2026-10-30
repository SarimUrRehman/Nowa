import React, { useState, useEffect } from 'react';
import { SERVICES_LIST, BUSINESS_CONFIG } from '../config';
import { Phone, MessageSquare, Mail, Calendar, CheckCircle, Clock, MapPin, AlertCircle, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  onServiceChange,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: selectedService || SERVICES_LIST[2].title,
    vehicleInfo: '',
    preferredDate: '',
    city: 'Redmond',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<typeof formData | null>(null);

  // Sync selectedService prop if changed from external cards
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+()\-.\s]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.vehicleInfo.trim()) {
      newErrors.vehicleInfo = 'Please enter your vehicle make, model and year.';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate successful submission
    setSubmittedBooking({ ...formData });
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceType: SERVICES_LIST[2].title,
      vehicleInfo: '',
      preferredDate: '',
      city: 'Redmond',
      notes: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0A0A0A] relative border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#D91E2A]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-['Montserrat',sans-serif] tracking-[0.25em] uppercase text-[#D91E2A] font-bold">
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
            <span>Schedule Your Detail</span>
            <span className="w-6 h-[1.5px] bg-[#D91E2A]" />
          </div>

          <h2 className="font-['Michroma','Syncopate',sans-serif] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white font-black text-balance">
            {BUSINESS_CONFIG.ctaText}
          </h2>

          <p className="font-['Inter',sans-serif] text-sm md:text-base text-[#A8ADB5] leading-relaxed">
            Fill out the form below for an instant quote & scheduling response, or reach out directly by phone, text, or email.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Booking Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#141414] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle gloss border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D91E2A] to-transparent" />

            {isSubmitted && submittedBooking ? (
              // Success Screen with Booking Details
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#D91E2A]/20 border border-[#D91E2A] flex items-center justify-center mx-auto text-[#D91E2A]">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-['Michroma',sans-serif] text-xl font-bold uppercase text-white">
                    Booking Request Sent!
                  </h3>
                  <p className="font-['Inter',sans-serif] text-sm text-[#A8ADB5] max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{submittedBooking.fullName}</span>. We received your request for detailing in <span className="text-white font-semibold">{submittedBooking.city}</span>. We will confirm your appointment shortly.
                  </p>
                </div>

                {/* Booking Summary Card */}
                <div className="bg-[#1C1C1E] rounded-xl p-5 border border-white/10 text-left max-w-md mx-auto space-y-3 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A8ADB5]">Selected Service:</span>
                    <span className="text-white font-semibold">{submittedBooking.serviceType}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A8ADB5]">Vehicle:</span>
                    <span className="text-white font-semibold">{submittedBooking.vehicleInfo}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A8ADB5]">Location:</span>
                    <span className="text-white font-semibold">{submittedBooking.city}, Central Oregon</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A8ADB5]">Preferred Date:</span>
                    <span className="text-white font-semibold">{submittedBooking.preferredDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8ADB5]">Contact:</span>
                    <span className="text-white font-semibold">{submittedBooking.phone}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="cursor-pointer px-6 py-2.5 rounded-lg bg-[#1C1C1E] hover:bg-[#2A2A2E] text-white text-xs font-['Montserrat',sans-serif] font-bold uppercase tracking-wider transition-colors border border-white/10"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              // Booking Form
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-white/10 pb-4 mb-2">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-lg text-white uppercase tracking-wider">
                    Reserve Your Appointment
                  </h3>
                  <p className="text-xs text-[#A8ADB5] mt-1">
                    No upfront payment required. We will confirm the exact window.
                  </p>
                </div>

                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white placeholder-neutral-500 text-sm border focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(541) 000-0000"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white placeholder-neutral-500 text-sm border focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white placeholder-neutral-500 text-sm border focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Service Location *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white text-sm border border-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors cursor-pointer"
                    >
                      <option value="Redmond">Redmond, OR</option>
                      <option value="Bend">Bend, OR</option>
                      <option value="Other Central Oregon">Other Central Oregon (Sisters, etc.)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Service Selection Dropdown & Vehicle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Detailing Service *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => {
                        setFormData({ ...formData, serviceType: e.target.value });
                        onServiceChange(e.target.value);
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white text-sm border border-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors cursor-pointer"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Vehicle Year, Make & Model *
                    </label>
                    <input
                      type="text"
                      value={formData.vehicleInfo}
                      onChange={(e) => setFormData({ ...formData, vehicleInfo: e.target.value })}
                      placeholder="e.g. 2022 Ford F-150 or Tesla Model Y"
                      className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white placeholder-neutral-500 text-sm border focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors ${
                        errors.vehicleInfo ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.vehicleInfo && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.vehicleInfo}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4: Preferred Date */}
                <div>
                  <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white text-sm border focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors ${
                      errors.preferredDate ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-['Montserrat',sans-serif] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Special Requests or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us if you have pet hair, deep upholstery stains, or specific driveway access notes..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white placeholder-neutral-500 text-sm border border-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D91E2A] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="cursor-pointer w-full py-4 rounded-xl bg-[#D91E2A] hover:bg-[#BF1622] text-white font-['Montserrat',sans-serif] font-bold text-sm tracking-widest uppercase transition-all duration-200 shadow-lg shadow-[#D91E2A]/25 red-glow-hover flex items-center justify-center gap-2 transform active:scale-[0.99]"
                >
                  <span>Book Your Detail Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-[#A8ADB5]">
                  We come directly to your address in Redmond, Bend, or Central Oregon.
                </p>
              </form>
            )}
          </div>

          {/* Column 2: Direct Contact Channels & Stylized Central Oregon SVG Map Card (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Buttons Box */}
            <div className="bg-[#141414] rounded-2xl border border-white/10 p-6 space-y-4">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-sm text-white uppercase tracking-wider mb-1">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-[#A8ADB5] leading-relaxed">
                Prefer to call or text? Reach out directly to discuss your vehicle or get a fast quote.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={BUSINESS_CONFIG.phoneTel}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1C1C1E] hover:bg-[#2A2A2E] text-white text-xs font-['Montserrat',sans-serif] font-bold uppercase tracking-wider border border-white/10 hover:border-[#D91E2A]/50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D91E2A]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.phoneSms}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1C1C1E] hover:bg-[#2A2A2E] text-white text-xs font-['Montserrat',sans-serif] font-bold uppercase tracking-wider border border-white/10 hover:border-[#D91E2A]/50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#D91E2A]" />
                  <span>Text Us</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={BUSINESS_CONFIG.emailMailto}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1C1C1E] hover:bg-[#2A2A2E] text-white text-xs font-['Montserrat',sans-serif] font-bold uppercase tracking-wider border border-white/10 hover:border-[#D91E2A]/50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D91E2A]" />
                  <span>Email Us</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1C1C1E] hover:bg-[#2A2A2E] text-white text-xs font-['Montserrat',sans-serif] font-bold uppercase tracking-wider border border-white/10 hover:border-[#D91E2A]/50 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-[#D91E2A]" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.22a8.16 8.16 0 0 0 4.91 1.62v-3.5a4.85 4.85 0 0 1-1-.65Z" />
                  </svg>
                  <span>{BUSINESS_CONFIG.tiktokHandle}</span>
                </a>
              </div>

              {/* Service Info Rows */}
              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-[#A8ADB5]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D91E2A]" />
                  <span>{BUSINESS_CONFIG.hoursPlaceholder}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D91E2A]" />
                  <span>{BUSINESS_CONFIG.serviceAreaLabel}</span>
                </div>
              </div>
            </div>

            {/* Stylized "Serving Central Oregon" Map-Style SVG Card (No external map embed!) */}
            <div className="bg-[#141414] rounded-2xl border border-white/10 p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D91E2A] animate-ping" />
                  <h4 className="font-['Montserrat',sans-serif] font-bold text-xs uppercase tracking-wider text-white">
                    Serving Central Oregon
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-[#A8ADB5]">Mobile Coverage Map</span>
              </div>

              {/* Detailed Stylized Vector Map of Central Oregon */}
              <div className="relative aspect-[4/3] rounded-xl bg-[#0A0A0A] border border-white/5 overflow-hidden flex items-center justify-center">
                <svg
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-label="Stylized map showing Redmond, Bend, and Central Oregon coverage"
                >
                  <defs>
                    <radialGradient id="coverageRadar" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D91E2A" stopOpacity="0.25" />
                      <stop offset="70%" stopColor="#D91E2A" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  {/* Grid lines */}
                  <g opacity="0.1" stroke="#FFFFFF" strokeWidth="0.8">
                    <line x1="50" y1="0" x2="50" y2="300" />
                    <line x1="120" y1="0" x2="120" y2="300" />
                    <line x1="200" y1="0" x2="200" y2="300" />
                    <line x1="280" y1="0" x2="280" y2="300" />
                    <line x1="350" y1="0" x2="350" y2="300" />
                    <line x1="0" y1="60" x2="400" y2="60" />
                    <line x1="0" y1="130" x2="400" y2="130" />
                    <line x1="0" y1="200" x2="400" y2="200" />
                    <line x1="0" y1="270" x2="400" y2="270" />
                  </g>

                  {/* Cascade Mountain Silhouette on West / Left */}
                  <path
                    d="M 10 200 L 40 140 L 70 190 L 100 110 L 130 180 L 160 130 L 180 190"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <text x="30" y="130" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Montserrat">Mt. Bachelor</text>
                  <text x="90" y="100" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Montserrat">Three Sisters</text>

                  {/* Deschutes River Curve (Blue/Silver) */}
                  <path
                    d="M 180 290 Q 220 220 210 160 Q 200 100 240 20"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                    strokeOpacity="0.4"
                    strokeDasharray="4 2"
                    fill="none"
                  />
                  <text x="225" y="45" fill="#38BDF8" fontSize="7" opacity="0.6" fontFamily="Montserrat">Deschutes River</text>

                  {/* Highway 97 Corridor (Red/White line connecting Bend and Redmond) */}
                  <path
                    d="M 230 290 L 225 210 L 220 100 L 215 15"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M 230 290 L 225 210 L 220 100 L 215 15"
                    stroke="#D91E2A"
                    strokeWidth="1.2"
                  />

                  {/* Highway 126 link from Sisters to Redmond */}
                  <path
                    d="M 80 110 L 220 100 L 320 90"
                    stroke="#A8ADB5"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    strokeOpacity="0.5"
                  />

                  {/* Central Coverage Radius Ring centered between Redmond and Bend */}
                  <circle cx="220" cy="155" r="95" fill="url(#coverageRadar)" stroke="#D91E2A" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.6" />
                  <circle cx="220" cy="155" r="55" stroke="#D91E2A" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />

                  {/* Node 1: REDMOND (North Node) */}
                  <g id="node-redmond">
                    <circle cx="220" cy="100" r="14" fill="#D91E2A" fillOpacity="0.2" />
                    <circle cx="220" cy="100" r="6" fill="#D91E2A" />
                    <circle cx="220" cy="100" r="2.5" fill="#FFFFFF" />
                    <rect x="235" y="88" width="76" height="22" rx="4" fill="#1C1C1E" stroke="#D91E2A" strokeWidth="1" />
                    <text x="242" y="103" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="Montserrat">REDMOND</text>
                  </g>

                  {/* Node 2: BEND (South Node) */}
                  <g id="node-bend">
                    <circle cx="225" cy="210" r="14" fill="#D91E2A" fillOpacity="0.2" />
                    <circle cx="225" cy="210" r="6" fill="#D91E2A" />
                    <circle cx="225" cy="210" r="2.5" fill="#FFFFFF" />
                    <rect x="240" y="198" width="56" height="22" rx="4" fill="#1C1C1E" stroke="#D91E2A" strokeWidth="1" />
                    <text x="248" y="213" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="Montserrat">BEND</text>
                  </g>

                  {/* Node 3: SISTERS (West Node) */}
                  <g id="node-sisters">
                    <circle cx="85" cy="110" r="4" fill="#FFFFFF" opacity="0.8" />
                    <text x="75" y="125" fill="#A8ADB5" fontSize="8" fontFamily="Montserrat">Sisters</text>
                  </g>

                  {/* Mobile Van Beacon Pulsing Marker */}
                  <g transform="translate(185, 145)">
                    <rect x="0" y="0" width="22" height="12" rx="2" fill="#D91E2A" />
                    <text x="11" y="9" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="Montserrat">VAN</text>
                  </g>
                </svg>

                {/* Overlaid legend note */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10 flex items-center justify-between text-[10px] text-[#A8ADB5]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D91E2A]" />
                    Mobile Unit on the Move
                  </span>
                  <span className="text-white font-medium">Hwy 97 Corridor</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

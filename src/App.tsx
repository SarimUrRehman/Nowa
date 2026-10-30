/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * NouwaDetail – Mobile Auto Detailing Website
 * Central Oregon: Redmond • Bend • Surrounding Areas
 * 
 * All content, colors, contact details, social links, and image paths
 * are configured in src/config.ts for effortless editing.
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ResultsSection } from './components/ResultsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SERVICES_LIST } from './config';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES_LIST[2].title); // Default to Full Detail

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#D91E2A] selection:text-white">
      {/* Sticky Navbar (Not a section) */}
      <Navbar onBookClick={handleBookNow} />

      {/* Main Content: Exactly 5 Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onBookClick={handleBookNow} />

        {/* Section 2: Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 3: Why Choose Us + Service Areas */}
        <WhyChooseUsSection />

        {/* Section 4: Results & Testimonials */}
        <ResultsSection />

        {/* Section 5: Contact & Booking */}
        <ContactSection
          selectedService={selectedService}
          onServiceChange={(s) => setSelectedService(s)}
        />
      </main>

      {/* Footer (Not a section) */}
      <Footer />

      {/* Floating Action Button (Mobile Book & Back-to-Top) */}
      <FloatingActions onBookClick={handleBookNow} />
    </div>
  );
}

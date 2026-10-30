import React, { useState, useEffect } from 'react';
import { Calendar, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Button (Mobile: Bottom Right) */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:hidden">
        {/* Call Quick Action */}
        <a
          href={BUSINESS_CONFIG.phoneTel}
          className="w-11 h-11 rounded-full bg-[#18181B] text-white border border-white/20 shadow-xl flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Call NouwaDetail"
        >
          <Phone className="w-5 h-5 text-[#D91E2A]" />
        </a>

        {/* Primary Circular Red "Book" Button */}
        <button
          onClick={onBookClick}
          className="cursor-pointer w-14 h-14 rounded-full bg-[#D91E2A] text-white shadow-2xl flex flex-col items-center justify-center red-glow active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Book your auto detail"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[9px] font-['Montserrat',sans-serif] font-black uppercase tracking-wider mt-0.5">
            Book
          </span>
        </button>
      </div>

      {/* Back to Top Button (Desktop / Tablet) */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-6 right-6 z-30 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-[#141414]/90 hover:bg-[#1C1C1E] text-white border border-white/10 hover:border-[#D91E2A]/50 shadow-xl backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#D91E2A]" />
        </button>
      )}
    </>
  );
};

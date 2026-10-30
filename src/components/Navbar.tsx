import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

interface NavbarProps {
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Results', href: '#results' },
    { name: 'Service Area', href: '#why-us' },
    { name: 'Book & Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    if (onBookClick) {
      onBookClick();
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3'
          : 'bg-[#0A0A0A] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Emblem Lockup */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D91E2A] rounded-lg p-1"
            aria-label="NouwaDetail Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-['Montserrat',sans-serif] tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[#A8ADB5] hover:text-white transition-colors duration-200 py-1 relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D91E2A] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Phone (Desktop) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="hidden xl:flex items-center gap-2 text-xs font-['Montserrat',sans-serif] tracking-wider text-[#A8ADB5] hover:text-white transition-colors py-2 px-3 rounded-lg border border-white/10 hover:border-white/20"
              title="Call NouwaDetail"
            >
              <Phone className="w-3.5 h-3.5 text-[#D91E2A]" />
              <span>{BUSINESS_CONFIG.phonePlaceholder}</span>
            </a>

            <button
              onClick={handleBookNow}
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D91E2A] hover:bg-[#BF1622] text-white text-xs md:text-sm font-['Montserrat',sans-serif] font-bold tracking-widest uppercase transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 red-glow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D91E2A]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleBookNow}
              className="cursor-pointer px-3 py-2 rounded-lg bg-[#D91E2A] text-white text-xs font-['Montserrat',sans-serif] font-bold tracking-wider uppercase active:scale-95"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer p-2 rounded-lg text-[#A8ADB5] hover:text-white bg-[#141414] border border-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D91E2A]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D91E2A]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[65px] bg-black/80 backdrop-blur-md z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#0A0A0A] border-b border-white/10 px-6 py-6 space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-4 py-3 rounded-lg text-sm font-['Montserrat',sans-serif] font-semibold tracking-wider uppercase text-white hover:bg-[#18181B] hover:text-[#D91E2A] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={BUSINESS_CONFIG.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#18181B] text-white text-sm font-['Montserrat',sans-serif] tracking-wider border border-white/10 hover:border-[#D91E2A]/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D91E2A]" />
                <span>Call {BUSINESS_CONFIG.phonePlaceholder}</span>
              </a>

              <button
                onClick={handleBookNow}
                className="cursor-pointer w-full py-3.5 rounded-lg bg-[#D91E2A] text-white font-['Montserrat',sans-serif] font-bold text-sm tracking-widest uppercase red-glow"
              >
                Book Your Detail
              </button>

              <p className="text-center text-xs text-[#A8ADB5] font-['Inter',sans-serif] pt-2">
                {BUSINESS_CONFIG.serviceAreaLabel}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

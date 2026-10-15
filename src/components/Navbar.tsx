import React, { useState, useEffect } from 'react';
import { LumiWordmark, RetroSparkle } from './DecorativeElements';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'lookbook', label: 'LOOKBOOK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'aftercare', label: 'AFTERCARE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#BAD6FD]/95 backdrop-blur-md border-b-2 border-[#570301]/15 shadow-sm py-3'
            : 'bg-[#BAD6FD] py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar 3-Zone Contract: Brand Zone — Nav Links — Primary Action */}
          <div className="flex items-center justify-between gap-8">
            
            {/* Zone 1: Single Brand Wordmark element */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#570301] rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Lumi Lashes Home"
            >
              <LumiWordmark textSize="text-2xl sm:text-3xl" />
            </button>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider text-[#570301]" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1 whitespace-nowrap cursor-pointer transition-colors hover:text-[#570301] ${
                      isActive ? 'text-[#570301] font-black' : 'text-[#570301]/80 hover:text-[#570301]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#570301] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleLinkClick('book')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#570301] text-[#FFFAF2] font-semibold text-xs tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <Sparkles size={14} className="text-[#F7E594]" />
                BOOK YOUR LASHES
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full border-2 border-[#570301] bg-[#FFFAF2] text-[#570301] shadow-retro hover:bg-[#F5BAD5] transition-colors focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-[#BAD6FD] flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-[#570301]/20 pb-4">
            <LumiWordmark textSize="text-2xl" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border-2 border-[#570301] bg-[#FFFAF2] text-[#570301] shadow-retro"
              aria-label="Close Navigation"
            >
              <X size={22} />
            </button>
          </div>

          <div className="py-8 flex flex-col gap-5 text-center">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-2xl font-display font-bold tracking-tight py-2 transition-colors cursor-pointer ${
                    isActive ? 'text-[#570301] underline underline-offset-8 decoration-4 decoration-[#F5BAD5]' : 'text-[#570301]/75 hover:text-[#570301]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-4 pt-4 border-t border-[#570301]/20">
            <button
              onClick={() => handleLinkClick('book')}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#570301] text-[#F7E594] font-display font-bold text-lg tracking-wide border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] transition-all cursor-pointer"
            >
              <Calendar size={20} />
              BOOK YOUR LASHES
            </button>
            <p className="text-center text-xs text-[#570301]/70 font-medium">
              A little lash magic · Austin, TX
            </p>
          </div>
        </div>
      )}
    </>
  );
};

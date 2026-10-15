import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { LookbookPage } from './pages/LookbookPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { AftercarePage } from './pages/AftercarePage';
import { ContactPage } from './pages/ContactPage';
import { BRAND_CONFIG } from './data/lashData';
import { HeartDeco, RetroSparkle } from './components/DecorativeElements';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync with window.location.hash on mount and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'lookbook', 'about', 'book', 'aftercare', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, params?: { serviceId?: string }) => {
    if (params?.serviceId) {
      setSelectedServiceId(params.serviceId);
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#BAD6FD] selection:bg-[#F5BAD5] selection:text-[#570301]">
      
      {/* Top Cute Announcement Marquee Ribbon */}
      <aside aria-label="Announcement" className="bg-[#570301] text-[#F7E594] text-[11px] sm:text-xs font-semibold py-1.5 px-4 text-center border-b border-[#570301] flex items-center justify-center gap-2 select-none">
        <RetroSparkle size={10} color="#F7E594" />
        <span className="truncate">{BRAND_CONFIG.announcement}</span>
        <HeartDeco size={10} fill="#F5BAD5" stroke="" />
      </aside>

      {/* Main Sticky Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={navigateTo} />
        )}
        {currentPage === 'lookbook' && (
          <LookbookPage onNavigate={navigateTo} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}
        {currentPage === 'book' && (
          <BookingPage initialServiceId={selectedServiceId} onNavigate={navigateTo} />
        )}
        {currentPage === 'aftercare' && (
          <AftercarePage onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Studio Footer */}
      <Footer onNavigate={navigateTo} />

    </div>
  );
}

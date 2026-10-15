import React from 'react';
import { BRAND_CONFIG } from '../data/lashData';
import { LumiWordmark, RetroSparkle, HeartDeco } from './DecorativeElements';
import { Instagram, MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F5BAD5] text-[#570301] border-t-2 border-[#570301] overflow-hidden pt-14 pb-10">
      {/* Decorative background sparkles */}
      <div className="absolute top-6 left-8 pointer-events-none opacity-40 animate-pulse-subtle">
        <RetroSparkle size={32} color="#F7E594" />
      </div>
      <div className="absolute bottom-12 right-12 pointer-events-none opacity-40 animate-pulse-subtle">
        <RetroSparkle size={40} color="#BAD6FD" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b-2 border-[#570301]/25">
          <div>
            <LumiWordmark textSize="text-3xl sm:text-4xl md:text-5xl" />
            <p className="mt-2 text-sm sm:text-base font-serif italic text-[#570301]/90">
              "{BRAND_CONFIG.tagline}"
            </p>
          </div>

          <button
            onClick={() => handleNav('book')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#570301] text-[#F7E594] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            BOOK YOUR APPOINTMENT
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 4-Column Grid: Navigation, Hours, Studio, Social */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 text-sm">
          {/* Col 1: Studio Menu */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider mb-4 text-[#570301] flex items-center gap-1.5">
              <RetroSparkle size={12} color="#570301" />
              EXPLORE
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:underline underline-offset-4 cursor-pointer text-[#570301]/85 hover:text-[#570301]"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:underline underline-offset-4 cursor-pointer text-[#570301]/85 hover:text-[#570301]"
                >
                  The Lash Menu & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('lookbook')}
                  className="hover:underline underline-offset-4 cursor-pointer text-[#570301]/85 hover:text-[#570301]"
                >
                  Lash Love Lookbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:underline underline-offset-4 cursor-pointer text-[#570301]/85 hover:text-[#570301]"
                >
                  About the Artist
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('aftercare')}
                  className="hover:underline underline-offset-4 cursor-pointer text-[#570301]/85 hover:text-[#570301]"
                >
                  Aftercare & Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:underline underline-offset-4 cursor-pointer text-[#570301]/85 hover:text-[#570301]"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Studio Hours */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider mb-4 text-[#570301] flex items-center gap-1.5">
              <Clock size={15} />
              STUDIO HOURS
            </h4>
            <div className="space-y-3 font-medium text-xs leading-relaxed">
              {BRAND_CONFIG.hours.map((h, i) => (
                <div key={i} className="pb-2 border-b border-[#570301]/15">
                  <div className="font-bold text-[#570301]">{h.days}</div>
                  <div className="text-[#570301]/80">{h.time}</div>
                </div>
              ))}
              <p className="text-[11px] text-[#570301]/70 italic pt-1">
                Appointments strictly by reservation.
              </p>
            </div>
          </div>

          {/* Col 3: Studio Location */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider mb-4 text-[#570301] flex items-center gap-1.5">
              <MapPin size={15} />
              THE ATELIER
            </h4>
            <div className="space-y-2 text-xs font-medium leading-relaxed">
              <p className="text-[#570301]/90">
                {BRAND_CONFIG.addressPlaceholder}
                <br />
                {BRAND_CONFIG.cityState}
              </p>
              <p className="pt-2 flex items-center gap-2 text-[#570301]/90">
                <Phone size={13} />
                <span>{BRAND_CONFIG.phonePlaceholder}</span>
              </p>
              <p className="flex items-center gap-2 text-[#570301]/90">
                <Mail size={13} />
                <span>{BRAND_CONFIG.emailPlaceholder}</span>
              </p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#FFFAF2] text-[#570301] font-semibold text-[10px] border border-[#570301]/30">
                  Valet & Street Parking Available
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Community & Socials */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider mb-4 text-[#570301] flex items-center gap-1.5">
              <HeartDeco size={14} fill="#F7E594" stroke="#570301" />
              LASH LOVE CLUB
            </h4>
            <p className="text-xs text-[#570301]/85 mb-4 leading-relaxed font-medium">
              Follow our daily lash reveals, lash tips, and appointment announcements.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFAF2] border-2 border-[#570301] text-xs font-bold text-[#570301] shadow-retro hover:bg-[#F7E594] transition-colors"
              >
                <Instagram size={14} />
                {BRAND_CONFIG.instagram}
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFAF2] border-2 border-[#570301] text-xs font-bold text-[#570301] shadow-retro hover:bg-[#BAD6FD] transition-colors"
              >
                <span className="text-xs font-black">♪</span>
                {BRAND_CONFIG.tiktok}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar Note */}
        <div className="pt-8 border-t-2 border-[#570301]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#570301]/75">
          <p className="font-serif italic tracking-wide flex items-center gap-1.5">
            MADE WITH LOVE & A LITTLE FLUTTER
            <HeartDeco size={12} fill="#570301" stroke="#570301" />
          </p>
          <p className="text-[11px] text-[#570301]/60">
            © {new Date().getFullYear()} LUMI LASHES LLC. All rights reserved. Demo preview.
          </p>
        </div>
      </div>
    </footer>
  );
};

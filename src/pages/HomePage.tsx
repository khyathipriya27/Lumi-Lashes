import React, { useState } from 'react';
import {
  ASSETS,
  LASH_SERVICES,
  LOOKBOOK_GALLERY,
  TESTIMONIALS
} from '../data/lashData';
import {
  RetroSparkle,
  HeartDeco,
  RetroSticker,
  CurvedArrow,
  FlowerShape,
  WavyDivider
} from '../components/DecorativeElements';
import {
  Sparkles,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, params?: { serviceId?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full overflow-hidden">
      {/* =========================================================================
          SECTION 2 — HERO (Cloudy Sky #BAD6FD)
          ========================================================================= */}
      <section className="relative bg-[#BAD6FD] pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        {/* Decorative Floating Sparkles & Shapes */}
        <div className="absolute top-10 left-6 sm:left-12 pointer-events-none animate-float">
          <RetroSparkle size={32} color="#F7E594" />
        </div>
        <div className="absolute top-1/2 left-4 pointer-events-none animate-pulse-subtle">
          <HeartDeco size={22} fill="#F5BAD5" stroke="#570301" />
        </div>
        <div className="absolute top-16 right-10 pointer-events-none animate-float-reverse hidden sm:block">
          <RetroSparkle size={28} color="#FFFAF2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Asymmetrical Typography & Action */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              
              {/* Retro Kicker */}
              <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro text-[#570301] text-xs font-bold uppercase tracking-wider">
                <RetroSparkle size={12} color="#570301" />
                <span>Boutique Lash Artistry Studio</span>
                <HeartDeco size={12} fill="#F5BAD5" stroke="#570301" />
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-black text-[#570301] text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.95] tracking-tight uppercase max-w-xl">
                <span className="relative inline-block text-[#570301] underline decoration-[#F5BAD5] decoration-wavy decoration-4 underline-offset-8">
                  LASHES
                </span>{' '}
                THAT <br />
                DO THE <br />
                TALKING.
              </h1>

              {/* Supporting Copy */}
              <p className="mt-6 text-base sm:text-lg text-[#3E2A25] max-w-lg font-medium leading-relaxed">
                Soft, wispy, bold, or somewhere in between. Your dream lash set is waiting at Lumi.
              </p>

              {/* Call-to-actions + Hand-drawn Arrow Lockup */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto relative">
                
                <button
                  onClick={() => onNavigate('book')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#570301] shadow-retro-lg hover:bg-[#3E2A25] hover:shadow-retro active:translate-x-1 active:translate-y-1 transition-all duration-150 cursor-pointer whitespace-nowrap"
                >
                  <Sparkles size={16} className="text-[#F7E594]" />
                  BOOK MY SET
                </button>

                <button
                  onClick={() => onNavigate('lookbook')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFFAF2] text-[#570301] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#F7E594] transition-all duration-150 cursor-pointer whitespace-nowrap"
                >
                  EXPLORE LASH STYLES
                </button>

                {/* Hand-drawn curved arrow pointing to booking CTA */}
                <div className="hidden sm:block absolute -bottom-12 -left-2 pointer-events-none">
                  <div className="flex items-center gap-2 text-[#570301]">
                    <CurvedArrow color="#570301" />
                    <span className="font-script text-xl -rotate-6 font-bold">
                      Your lash nap awaits!
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Trust Badges Strip */}
              <div className="mt-12 sm:mt-16 pt-6 border-t-2 border-[#570301]/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#570301] font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#570301]" />
                  1:1 Isolation Guarantee
                </span>
                <span className="text-[#570301]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#570301]" />
                  Medical Grade Low-Fume Adhesive
                </span>
                <span className="text-[#570301]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#570301]" />
                  Zero Natural Lash Damage
                </span>
              </div>
            </div>

            {/* Right Column: Visual Composition with Organic Frame, Stickers, and Shapes */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Rose Mist Flower Shape Accent behind the frame */}
              <div className="absolute -top-8 -right-6 pointer-events-none animate-float-reverse opacity-90 z-0">
                <FlowerShape size={110} fill="#F5BAD5" />
              </div>

              {/* Buttercream 4-point sparkle decorative */}
              <div className="absolute -bottom-6 -left-6 z-20 animate-pulse-subtle">
                <RetroSparkle size={48} color="#F7E594" />
              </div>

              {/* Retro Sticker "LASH LOVE CLUB" */}
              <div className="absolute -top-5 -left-4 z-20">
                <RetroSticker
                  text="LASH LOVE CLUB"
                  subtext="EST. 2024 · 100% FLUTTER"
                  rotation="-rotate-12"
                  bg="#F7E594"
                  color="#570301"
                />
              </div>

              {/* Tiny Floating Heart Illustration */}
              <div className="absolute bottom-8 -right-4 z-20 animate-float">
                <div className="w-11 h-11 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro flex items-center justify-center">
                  <HeartDeco size={18} fill="#F5BAD5" stroke="#570301" />
                </div>
              </div>

              {/* Main Editorial Image Frame with Organic Arch / Rounded Corner */}
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-[#570301] shadow-retro-lg bg-[#FFFAF2] z-10 transition-transform hover:scale-[1.01] duration-300">
                <img
                  src={ASSETS.heroLash}
                  alt="Lumi Lashes signature wispy eyelash extensions close-up"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-[#FFFAF2]/95 backdrop-blur-sm border-2 border-[#570301] shadow-retro text-[#570301] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#9E7C6B]">
                      Current Set In Focus
                    </p>
                    <p className="font-display font-bold text-sm">
                      The Wispy Angel Flutter
                    </p>
                  </div>
                  <span className="text-xs font-bold font-serif italic text-[#570301] px-2.5 py-1 rounded-full bg-[#F5BAD5] border border-[#570301]">
                    Custom Mapped
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — SCROLLING BRAND MARQUEE (Merlot #570301 banner, Buttercream text)
          ========================================================================= */}
      <section className="bg-[#570301] text-[#F7E594] py-3.5 border-y-2 border-[#570301] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 font-display font-bold text-sm sm:text-base tracking-widest uppercase">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              <span>GOOD LASHES</span>
              <span className="text-xs text-[#F5BAD5]">✳</span>
              <span>GOOD ENERGY</span>
              <span className="text-xs text-[#F5BAD5]">✳</span>
              <span>GOOD DAYS</span>
              <span className="text-xs text-[#F5BAD5]">✳</span>
              <span>A LITTLE LASH MAGIC</span>
              <span className="text-xs text-[#F5BAD5]">✳</span>
              <span>WAKE UP. LASH OUT. REPEAT.</span>
              <span className="text-xs text-[#F5BAD5]">✳</span>
            </span>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — THE LASH MENU (Ivory #FFFAF2)
          ========================================================================= */}
      <section className="bg-[#FFFAF2] py-20 md:py-28 text-[#3E2A25] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#570301] mb-3">
                <RetroSparkle size={14} color="#570301" />
                <span>THE LASH MENU</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#570301] tracking-tight uppercase leading-none">
                PICK YOUR <br />
                PERFECT FLUTTER.
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#3E2A25]/80 font-medium">
              Every set is fully customized to your natural lash strength, eye shape, and desired level of flutter.
            </p>
          </div>

          {/* 4 Distinctive Alternating Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Card 01: Classic Lashes (Rose Mist Background) */}
            <div className="rounded-3xl border-2 border-[#570301] bg-[#F5BAD5] p-6 shadow-retro flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:shadow-retro-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-display font-black px-2.5 py-1 rounded-full bg-[#FFFAF2] text-[#570301] border border-[#570301]">
                    01
                  </span>
                  <RetroSparkle size={16} color="#570301" />
                </div>
                
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#570301] mb-5 bg-[#FFFAF2]">
                  <img
                    src={ASSETS.lookbookClassic}
                    alt="Classic Lash Extensions"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight">
                  CLASSIC LASHES
                </h3>
                <p className="font-serif italic text-xs text-[#570301]/90 mt-1 mb-3">
                  "Your lashes, just a little more irresistible."
                </p>
                <p className="text-xs text-[#3E2A25]/90 leading-relaxed font-medium">
                  One featherlight extension placed individually onto each natural lash for an effortless mascara look.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#570301]/20">
                <div className="flex items-center justify-between text-xs font-bold text-[#570301] mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> 105 mins
                  </span>
                  <span className="text-sm font-black font-display">From $165</span>
                </div>
                <button
                  onClick={() => onNavigate('book', { serviceId: 'classic-full-set' })}
                  className="w-full py-2.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] hover:bg-[#3E2A25] transition-colors cursor-pointer"
                >
                  BOOK THIS SET
                </button>
              </div>
            </div>

            {/* Card 02: Hybrid Lashes (Buttercream Background) */}
            <div className="rounded-3xl border-2 border-[#570301] bg-[#F7E594] p-6 shadow-retro flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:shadow-retro-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-display font-black px-2.5 py-1 rounded-full bg-[#FFFAF2] text-[#570301] border border-[#570301]">
                    02
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#570301] text-[#F7E594]">
                    MOST LOVED
                  </span>
                </div>

                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#570301] mb-5 bg-[#FFFAF2]">
                  <img
                    src={ASSETS.lookbookHybrid}
                    alt="Hybrid Lash Extensions"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight">
                  HYBRID LASHES
                </h3>
                <p className="font-serif italic text-xs text-[#570301]/90 mt-1 mb-3">
                  "The perfect mix of soft and statement."
                </p>
                <p className="text-xs text-[#3E2A25]/90 leading-relaxed font-medium">
                  A bespoke blend of classic singles and soft 3D-5D volume fans for airy texture, dimension, and wispy fullness.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#570301]/20">
                <div className="flex items-center justify-between text-xs font-bold text-[#570301] mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> 120 mins
                  </span>
                  <span className="text-sm font-black font-display">From $195</span>
                </div>
                <button
                  onClick={() => onNavigate('book', { serviceId: 'hybrid-full-set' })}
                  className="w-full py-2.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] hover:bg-[#3E2A25] transition-colors cursor-pointer"
                >
                  BOOK THIS SET
                </button>
              </div>
            </div>

            {/* Card 03: Volume Lashes (Cloudy Sky Background) */}
            <div className="rounded-3xl border-2 border-[#570301] bg-[#BAD6FD] p-6 shadow-retro flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:shadow-retro-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-display font-black px-2.5 py-1 rounded-full bg-[#FFFAF2] text-[#570301] border border-[#570301]">
                    03
                  </span>
                  <HeartDeco size={16} fill="#F5BAD5" stroke="#570301" />
                </div>

                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#570301] mb-5 bg-[#FFFAF2]">
                  <img
                    src={ASSETS.lookbookVolume}
                    alt="Volume Lash Extensions"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight">
                  VOLUME LASHES
                </h3>
                <p className="font-serif italic text-xs text-[#570301]/90 mt-1 mb-3">
                  "Because a little extra never hurt."
                </p>
                <p className="text-xs text-[#3E2A25]/90 leading-relaxed font-medium">
                  Handmade bouquets of ultra-fine cashmere lashes wrapping each lash for velvety, dense, yet weightless glam.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#570301]/20">
                <div className="flex items-center justify-between text-xs font-bold text-[#570301] mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> 135 mins
                  </span>
                  <span className="text-sm font-black font-display">From $235</span>
                </div>
                <button
                  onClick={() => onNavigate('book', { serviceId: 'volume-full-set' })}
                  className="w-full py-2.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] hover:bg-[#3E2A25] transition-colors cursor-pointer"
                >
                  BOOK THIS SET
                </button>
              </div>
            </div>

            {/* Card 04: Lash Lift & Tint (Ivory Background with Rose Accents) */}
            <div className="rounded-3xl border-2 border-[#570301] bg-[#FFFAF2] p-6 shadow-retro flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:shadow-retro-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-display font-black px-2.5 py-1 rounded-full bg-[#F5BAD5] text-[#570301] border border-[#570301]">
                    04
                  </span>
                  <RetroSparkle size={16} color="#570301" />
                </div>

                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#570301] mb-5 bg-[#F5BAD5]">
                  <img
                    src={ASSETS.lookbookLift}
                    alt="Lash Lift and Tint"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight">
                  LASH LIFT & TINT
                </h3>
                <p className="font-serif italic text-xs text-[#570301]/90 mt-1 mb-3">
                  "Your natural lashes, beautifully elevated."
                </p>
                <p className="text-xs text-[#3E2A25]/90 leading-relaxed font-medium">
                  A gentle keratin infusion curl and glossy jet tint straight from the root. Zero upkeep, lasting 6 to 8 weeks.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#570301]/20">
                <div className="flex items-center justify-between text-xs font-bold text-[#570301] mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> 60 mins
                  </span>
                  <span className="text-sm font-black font-display">From $95</span>
                </div>
                <button
                  onClick={() => onNavigate('book', { serviceId: 'lash-lift' })}
                  className="w-full py-2.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] hover:bg-[#3E2A25] transition-colors cursor-pointer"
                >
                  BOOK THIS SET
                </button>
              </div>
            </div>

          </div>

          {/* View Full Menu Button */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFFAF2] text-[#570301] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#F7E594] transition-all cursor-pointer"
            >
              VIEW FULL SERVICE MENU & FILL PRICING
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* Transition to Lookbook */}
      <WavyDivider fillColor="#F5BAD5" bgColor="#FFFAF2" />

      {/* =========================================================================
          SECTION 5 — LASH LOOKBOOK PREVIEW (Rose Mist #F5BAD5)
          ========================================================================= */}
      <section className="bg-[#F5BAD5] py-20 md:py-28 text-[#570301] relative overflow-hidden">
        {/* Decorative sparkles */}
        <div className="absolute top-8 right-12 animate-float pointer-events-none">
          <RetroSparkle size={36} color="#FFFAF2" />
        </div>
        <div className="absolute bottom-10 left-8 animate-pulse-subtle pointer-events-none">
          <RetroSparkle size={28} color="#F7E594" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#FFFAF2] border border-[#570301] mb-3">
              <RetroSparkle size={12} color="#570301" />
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-none">
              THE LASH <br />
              LOVE GALLERY.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#570301]/85 font-medium">
              A little inspiration for your next appointment.
            </p>
          </div>

          {/* Editorial Collage Gallery with rotated photo frames & annotations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-center">
            {LOOKBOOK_GALLERY.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className={`relative group bg-[#FFFAF2] p-4 pb-6 rounded-3xl border-3 border-[#570301] shadow-retro-lg transition-all duration-300 hover:scale-[1.03] hover:rotate-0 ${item.rotation || ''}`}
              >
                {/* Photo frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#570301] bg-[#BAD6FD]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FFFAF2] border border-[#570301] text-[11px] font-bold uppercase tracking-wider text-[#570301]">
                    {item.category}
                  </span>
                </div>

                {/* Annotation and Details */}
                <div className="mt-4">
                  <h3 className="font-display font-bold text-xl text-[#570301]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#3E2A25]/80 mt-1 leading-snug">
                    {item.caption}
                  </p>
                  
                  {/* Handwritten mapping tag */}
                  <div className="mt-3 pt-3 border-t border-[#570301]/15 flex items-center justify-between">
                    <span className="font-script text-base text-[#570301] font-bold">
                      {item.mapping}
                    </span>
                    <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#F7E594] text-[#570301]">
                      {item.curl}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('lookbook')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#570301] text-[#F7E594] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              EXPLORE THE LOOKBOOK
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* Transition to About */}
      <WavyDivider fillColor="#F7E594" bgColor="#F5BAD5" />

      {/* =========================================================================
          SECTION 6 — ABOUT THE ARTIST (Buttercream #F7E594)
          ========================================================================= */}
      <section className="bg-[#F7E594] py-20 md:py-28 text-[#570301] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Scalloped Frame Artist Portrait */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Backing decorative shape */}
              <div className="absolute -bottom-6 -left-6 z-0 pointer-events-none">
                <FlowerShape size={120} fill="#F5BAD5" />
              </div>

              {/* Scalloped / Rounded Retro Frame */}
              <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-[#570301] shadow-retro-lg bg-[#FFFAF2] z-10">
                <img
                  src={ASSETS.artistPortrait}
                  alt="Sarah, Lead Lash Artist & Founder of Lumi Lashes"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating handwritten sticker */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFAF2]/95 border-2 border-[#570301] rounded-2xl p-3 shadow-retro text-center">
                  <p className="font-script text-xl font-bold text-[#570301]">
                    Made with love ♡
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#9E7C6B]">
                    Founder & Master Lash Artist
                  </p>
                </div>
              </div>

              {/* Four-point Sparkle */}
              <div className="absolute -top-4 -right-4 z-20 animate-pulse-subtle">
                <RetroSparkle size={36} color="#BAD6FD" />
              </div>

            </div>

            {/* Right: Personal Introduction */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro text-xs font-bold uppercase tracking-wider mb-4">
                <HeartDeco size={12} fill="#F5BAD5" stroke="#570301" />
                <span>MEET YOUR ARTIST</span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#570301] tracking-tight uppercase leading-none">
                HI, I'M YOUR <br />
                LASH BESTIE.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#3E2A25] leading-relaxed font-medium">
                "At Lumi Lashes, it's all about making you feel like your most confident self. Every lash set is thoughtfully designed to complement your features, your style, and your everyday life."
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#3E2A25]/90 leading-relaxed font-medium">
                <p>
                  I believe luxury beauty should be joyful, warm, and deeply personal—never intimidating or cookie-cutter. Whether you want a whisper of classic flutter or dreamy editorial wisps, my studio is your sanctuary for a peaceful lash nap.
                </p>
                <p className="font-serif italic text-base text-[#570301]">
                  "You deserve lashes that look breathtaking from every angle, naturally."
                </p>
              </div>

              {/* CTA button */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] transition-all cursor-pointer"
                >
                  GET TO KNOW ME
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Transition to Lumi Experience */}
      <WavyDivider fillColor="#FFFAF2" bgColor="#F7E594" />

      {/* =========================================================================
          SECTION 7 — THE LUMI EXPERIENCE (Ivory #FFFAF2)
          ========================================================================= */}
      <section className="bg-[#FFFAF2] py-20 md:py-28 text-[#3E2A25] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#570301] mb-3">
              <RetroSparkle size={12} color="#570301" />
              THE 3-STEP RITUAL
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#570301] uppercase tracking-tight leading-none">
              IT'S MORE THAN <br />
              JUST LASHES.
            </h2>
            <p className="mt-4 text-base text-[#3E2A25]/80 font-medium">
              A serene beauty experience crafted for your absolute comfort.
            </p>
          </div>

          {/* 3 Step Interactive Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 01 */}
            <div className="relative rounded-3xl border-2 border-[#570301] bg-[#BAD6FD] p-8 shadow-retro-lg flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-[#FFFAF2] border-2 border-[#570301] flex items-center justify-center font-display font-black text-2xl text-[#570301] mb-6 shadow-retro">
                01
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight mb-3">
                  LET'S CHAT
                </h3>
                <p className="text-sm text-[#3E2A25] leading-relaxed font-medium">
                  "We'll talk about your lash goals and find your perfect look."
                </p>
                <p className="mt-3 text-xs text-[#3E2A25]/80 leading-relaxed">
                  We review your eye shape, morning routine, and natural lash health to map out curls, lengths, and density tailored specifically to you.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#570301]/20 text-[11px] font-bold text-[#570301] uppercase tracking-wider flex items-center gap-1.5">
                <HeartDeco size={12} fill="#F5BAD5" stroke="#570301" />
                15-Minute Co-Design
              </div>
            </div>

            {/* Step 02 */}
            <div className="relative rounded-3xl border-2 border-[#570301] bg-[#F5BAD5] p-8 shadow-retro-lg flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-[#FFFAF2] border-2 border-[#570301] flex items-center justify-center font-display font-black text-2xl text-[#570301] mb-6 shadow-retro">
                02
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight mb-3">
                  TIME TO RELAX
                </h3>
                <p className="text-sm text-[#3E2A25] leading-relaxed font-medium">
                  "Get cozy while we create your custom lash set."
                </p>
                <p className="mt-3 text-xs text-[#3E2A25]/80 leading-relaxed">
                  Sink into our ergonomic cloud bed with a weighted plush blanket, soothing acoustic playlist, and gentle collagen eye patches.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#570301]/20 text-[11px] font-bold text-[#570301] uppercase tracking-wider flex items-center gap-1.5">
                <RetroSparkle size={12} color="#570301" />
                The Ultimate Lash Nap
              </div>
            </div>

            {/* Step 03 */}
            <div className="relative rounded-3xl border-2 border-[#570301] bg-[#F7E594] p-8 shadow-retro-lg flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-[#FFFAF2] border-2 border-[#570301] flex items-center justify-center font-display font-black text-2xl text-[#570301] mb-6 shadow-retro">
                03
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight mb-3">
                  HELLO, GORGEOUS
                </h3>
                <p className="text-sm text-[#3E2A25] leading-relaxed font-medium">
                  "Leave feeling refreshed, confident, and ready for anything."
                </p>
                <p className="mt-3 text-xs text-[#3E2A25]/80 leading-relaxed">
                  The big hand-mirror reveal! You leave with pristine lashes, your complimentary gold spoolie, and our bespoke aftercare guide.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#570301]/20 text-[11px] font-bold text-[#570301] uppercase tracking-wider flex items-center gap-1.5">
                <HeartDeco size={12} fill="#570301" stroke="#570301" />
                Instant Magic Reveal
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Transition to Testimonials */}
      <WavyDivider fillColor="#BAD6FD" bgColor="#FFFAF2" />

      {/* =========================================================================
          SECTION 8 — CLIENT LOVE (Cloudy Sky #BAD6FD)
          ========================================================================= */}
      <section className="bg-[#BAD6FD] py-20 md:py-28 text-[#570301] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro mb-3">
              <HeartDeco size={12} fill="#F5BAD5" stroke="#570301" />
              COMMUNITY LOVE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-none">
              LOVE LETTERS <br />
              FROM THE LASH GIRLIES.
            </h2>
          </div>

          {/* Carousel Card */}
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-3xl border-3 border-[#570301] bg-[#F5BAD5] p-8 sm:p-12 shadow-retro-lg transition-all">
              
              {/* Giant Serif Quotation Mark */}
              <div className="font-display font-black text-7xl sm:text-8xl text-[#570301]/20 leading-none absolute top-4 left-6 pointer-events-none select-none">
                “
              </div>

              <div className="relative z-10">
                <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#570301] leading-snug">
                  "{TESTIMONIALS[activeTestimonialIndex].quote}"
                </p>

                <div className="mt-8 pt-6 border-t-2 border-[#570301]/20 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-black text-lg text-[#570301]">
                      {TESTIMONIALS[activeTestimonialIndex].name}
                    </h4>
                    <p className="text-xs text-[#570301]/80 font-medium">
                      {TESTIMONIALS[activeTestimonialIndex].handle} · Service: {TESTIMONIALS[activeTestimonialIndex].service}
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#F7E594] border border-[#570301] text-xs font-bold text-[#570301]">
                    {TESTIMONIALS[activeTestimonialIndex].badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#FFFAF2] border-2 border-[#570301] text-[#570301] shadow-retro hover:bg-[#F7E594] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonialIndex(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeTestimonialIndex === i
                        ? 'w-8 bg-[#570301]'
                        : 'w-2.5 bg-[#570301]/30 hover:bg-[#570301]/60'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#FFFAF2] border-2 border-[#570301] text-[#570301] shadow-retro hover:bg-[#F7E594] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — BOOKING CALL TO ACTION (Merlot #570301)
          ========================================================================= */}
      <section className="relative bg-[#570301] text-[#FFFAF2] py-20 md:py-28 overflow-hidden">
        {/* Subtle decorative Rose Mist hearts & starbursts */}
        <div className="absolute top-10 left-12 animate-float pointer-events-none opacity-40">
          <RetroSparkle size={48} color="#F5BAD5" />
        </div>
        <div className="absolute bottom-10 right-14 animate-pulse-subtle pointer-events-none opacity-40">
          <HeartDeco size={42} fill="#F5BAD5" stroke="" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float-reverse pointer-events-none opacity-30 hidden md:block">
          <RetroSparkle size={32} color="#F7E594" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFAF2]/15 border border-[#F7E594]/40 text-[#F7E594] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            RESERVE YOUR APPOINTMENT
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#F7E594] uppercase tracking-tight leading-none">
            READY FOR <br />
            YOUR LASH ERA?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#FFFAF2]/90 max-w-xl mx-auto font-medium leading-relaxed">
            Your dream lashes are just one appointment away.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book')}
              className="px-10 py-5 rounded-full bg-[#F7E594] text-[#570301] font-display font-black text-base sm:text-lg tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#FFFAF2] active:translate-x-1 active:translate-y-1 transition-all duration-150 cursor-pointer"
            >
              LET'S GET LASHED
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-5 rounded-full bg-transparent text-[#FFFAF2] border-2 border-[#FFFAF2] font-display font-bold text-sm tracking-wider uppercase hover:bg-[#FFFAF2]/10 transition-colors cursor-pointer"
            >
              VIEW LASH MENU
            </button>
          </div>

          <p className="mt-8 text-xs text-[#FFFAF2]/60 font-medium">
            Demo booking mode · Instant schedule confirmation · No upfront card required
          </p>

        </div>
      </section>
    </div>
  );
};

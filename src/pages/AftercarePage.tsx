import React, { useState } from 'react';
import { AFTERCARE_RULES, BRAND_CONFIG } from '../data/lashData';
import { RetroSparkle, HeartDeco, RetroSticker, WavyDivider } from '../components/DecorativeElements';
import { Sparkles, Check, AlertTriangle, Printer, Download, MessageCircle, Phone, ArrowRight } from 'lucide-react';

interface AftercarePageProps {
  onNavigate: (page: string) => void;
}

export const AftercarePage: React.FC<AftercarePageProps> = ({ onNavigate }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrintOrSave = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="w-full bg-[#FFFAF2] text-[#3E2A25]">
      
      {/* Header */}
      <section className="bg-[#BAD6FD] py-16 md:py-24 border-b-2 border-[#570301] text-[#570301] relative overflow-hidden">
        <div className="absolute top-8 left-10 animate-float pointer-events-none">
          <RetroSparkle size={36} color="#F7E594" />
        </div>
        <div className="absolute bottom-6 right-14 animate-pulse-subtle pointer-events-none">
          <HeartDeco size={28} fill="#F5BAD5" stroke="#570301" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro text-xs font-bold uppercase tracking-wider mb-4">
            <RetroSparkle size={12} color="#570301" />
            LASH CARE & LONGEVITY GUIDE
            <RetroSparkle size={12} color="#570301" />
          </span>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-[#570301]">
            KEEP THOSE <br />
            LASHES LOVELY.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3E2A25] max-w-2xl mx-auto font-medium">
            Your daily rituals for featherlight flutter, pristine retention, and happy, flourishing natural lashes.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handlePrintOrSave}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFAF2] text-[#570301] border-2 border-[#570301] font-display font-bold text-xs uppercase tracking-wider shadow-retro hover:bg-[#F7E594] transition-colors cursor-pointer"
            >
              <Printer size={15} />
              PRINT OR SAVE AFTERCARE CHECKLIST
            </button>
          </div>
        </div>
      </section>

      {/* 6 Step Interactive Visual Care Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#570301] uppercase">
            THE SIX GOLDEN RULES
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#3E2A25]/80 font-medium">
            Gentle habits that protect your adhesive bonds and keep lashes fluffier longer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AFTERCARE_RULES.map((rule, idx) => {
            const tones = ['bg-[#F5BAD5]', 'bg-[#F7E594]', 'bg-[#BAD6FD]', 'bg-[#FFFAF2]', 'bg-[#EBD9C9]', 'bg-[#F5BAD5]'];
            const tone = tones[idx % tones.length];

            return (
              <div
                key={rule.step}
                className={`rounded-3xl border-3 border-[#570301] ${tone} p-6 sm:p-8 shadow-retro-lg flex flex-col justify-between transition-all duration-200 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro flex items-center justify-center font-display font-black text-lg text-[#570301]">
                      {rule.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#570301] text-[#F7E594]">
                      {rule.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-[#570301] uppercase tracking-tight mb-2">
                    {rule.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3E2A25] font-medium leading-relaxed">
                    {rule.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#570301]/20 flex items-center gap-1.5 text-xs font-bold text-[#570301]">
                  <Check size={14} />
                  <span>Approved Lash Ritual</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Do's & Don'ts Visual Summary Card */}
      <section className="bg-[#BAD6FD]/20 py-20 border-y-2 border-[#570301]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#570301] uppercase">
              QUICK DO'S & DEFINITE DON'TS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#3E2A25]/80 font-medium">
              Keep this cheat sheet handy on your vanity mirror.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* The Do's */}
            <div className="rounded-3xl border-3 border-[#570301] bg-[#FFFAF2] p-6 sm:p-8 shadow-retro">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#bad6fd] border border-[#570301] flex items-center justify-center text-[#570301] font-bold">
                  ✓
                </span>
                <h3 className="font-display font-black text-2xl text-[#570301] uppercase">
                  DO THESE DAILY
                </h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#3E2A25] font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Wash with an oil-free lash foam cleanser daily to remove sebum and dust.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Use your clean gold spoolie to brush tips into place when lashes are dry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Book fill sessions every 2 to 3 weeks to prevent lash weight imbalances.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Sleep on a silk or satin pillowcase to minimize fabric friction.</span>
                </li>
              </ul>
            </div>

            {/* The Don'ts */}
            <div className="rounded-3xl border-3 border-[#570301] bg-[#F5BAD5] p-6 sm:p-8 shadow-retro">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#FFFAF2] border border-[#570301] flex items-center justify-center text-[#570301] font-bold">
                  ✕
                </span>
                <h3 className="font-display font-black text-2xl text-[#570301] uppercase">
                  PLEASE AVOID
                </h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#3E2A25] font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Never use waterproof mascara or oily eye-makeup removers on extensions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Do not use mechanical eyelash curlers (they crease & break synthetic fibers).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Avoid opening the hot oven door right into your face (heat singes fine tips!).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#570301] font-bold">✦</span>
                  <span>Never pick, pull, or try to peel off extensions yourself.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* When to Reach Out Callout */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-3 border-[#570301] bg-[#F7E594] p-8 sm:p-10 shadow-retro-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#570301] mb-2">
              <AlertTriangle size={15} />
              LUMI CARE GUARANTEE
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#570301] uppercase">
              Notice Unusual Shedding or Sensitivity?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#3E2A25] font-medium leading-relaxed max-w-xl">
              We offer a complimentary 48-hour touch-up window if you ever experience unexpected shedding. Your lash comfort and natural hair health are always our top priority.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] cursor-pointer"
          >
            <MessageCircle size={15} />
            MESSAGE YOUR ARTIST
          </button>
        </div>
      </section>

    </div>
  );
};

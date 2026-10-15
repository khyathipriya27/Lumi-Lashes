import React from 'react';
import { ASSETS, BRAND_CONFIG } from '../data/lashData';
import { RetroSparkle, HeartDeco, RetroSticker, FlowerShape, WavyDivider } from '../components/DecorativeElements';
import { Sparkles, Heart, Coffee, ShieldCheck, Feather, Music, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFAF2] text-[#3E2A25]">
      
      {/* Hero Header */}
      <section className="bg-[#F7E594] py-16 md:py-24 border-b-2 border-[#570301] text-[#570301] relative overflow-hidden">
        <div className="absolute top-8 left-10 pointer-events-none animate-float">
          <RetroSparkle size={36} color="#BAD6FD" />
        </div>
        <div className="absolute bottom-8 right-12 pointer-events-none animate-pulse-subtle">
          <HeartDeco size={28} fill="#F5BAD5" stroke="#570301" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro text-xs font-bold uppercase tracking-wider mb-4">
            <HeartDeco size={12} fill="#F5BAD5" stroke="#570301" />
            THE HEART BEHIND THE FLUTTER
          </span>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-[#570301]">
            ABOUT LUMI LASHES
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3E2A25] max-w-2xl mx-auto font-medium">
            Where thoughtful lash artistry, bespoke eye mapping, and relaxed boutique luxury come together for your dream morning routine.
          </p>
        </div>
      </section>

      {/* Meet The Artist Story Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Artist Portrait in Scalloped Arch Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -top-6 -left-6 z-0 pointer-events-none">
              <FlowerShape size={110} fill="#F5BAD5" />
            </div>

            <div className="relative w-full max-w-[390px] aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-[#570301] shadow-retro-lg bg-[#BAD6FD] z-10">
              <img
                src={ASSETS.artistPortrait}
                alt="Sarah, Lead Artist & Founder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFFAF2] border-2 border-[#570301] rounded-2xl p-3 text-center shadow-retro">
                <p className="font-script text-2xl font-bold text-[#570301]">
                  Sarah · Lead Artist & Founder
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9E7C6B]">
                  LUMI LASHES ATELIER
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 z-20">
              <RetroSticker
                text="100% FLUTTER"
                subtext="MADE WITH LOVE"
                rotation="rotate-6"
                bg="#BAD6FD"
                color="#570301"
              />
            </div>
          </div>

          {/* Artist Bio & Studio Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-[#570301] mb-2">
              OUR STORY
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#570301] uppercase leading-tight mb-6">
              "Lashes should feel weightless, look bespoke, and make you beam."
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#3E2A25] font-medium leading-relaxed">
              <p>
                Lumi Lashes was founded with one clear wish: to strip away the clinical, rushed feel of high-turnover salons and replace it with a warm, restorative, pastel-kissed sanctuary where lash artistry is treated with true patience and couture craftsmanship.
              </p>
              <p>
                No two pairs of eyes are identical. The angle of your brow bone, the curve of your lid, and the density of your natural lash line require personalized attention. We never apply pre-made cluster shortcuts or one-size-fits-all mappings.
              </p>
              <p>
                Instead, we handcraft delicate volume fans and apply single featherweight extensions with strict 1:1 natural lash isolation—meaning your natural lashes stay healthy, strong, and nourished set after set.
              </p>
            </div>

            {/* Signature Values Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="p-4 rounded-2xl bg-[#BAD6FD]/30 border-2 border-[#570301] text-center">
                <ShieldCheck size={22} className="mx-auto text-[#570301] mb-1.5" />
                <div className="font-display font-bold text-xs uppercase text-[#570301]">
                  Zero Lash Damage
                </div>
                <div className="text-[10px] text-[#3E2A25]/80 mt-0.5">Strict weight limits</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5BAD5]/40 border-2 border-[#570301] text-center">
                <Feather size={22} className="mx-auto text-[#570301] mb-1.5" />
                <div className="font-display font-bold text-xs uppercase text-[#570301]">
                  Cashmere Fibers
                </div>
                <div className="text-[10px] text-[#3E2A25]/80 mt-0.5">Velvety & ultra-soft</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7E594]/40 border-2 border-[#570301] text-center col-span-2 sm:col-span-1">
                <Sparkles size={22} className="mx-auto text-[#570301] mb-1.5" />
                <div className="font-display font-bold text-xs uppercase text-[#570301]">
                  15-Min Co-Design
                </div>
                <div className="text-[10px] text-[#3E2A25]/80 mt-0.5">Tailored eye mapping</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Studio Interior & The Lash Nap Experience */}
      <section className="bg-[#BAD6FD]/30 py-20 border-y-2 border-[#570301]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#570301] mb-2">
              <RetroSparkle size={12} color="#570301" />
              THE ATELIER SANCTUARY
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#570301] uppercase">
              COZY UP FOR YOUR LASH NAP
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#3E2A25] font-medium leading-relaxed">
              Every detail in our studio was chosen to make your appointment feel like a peaceful mini-getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Studio Photo */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border-3 border-[#570301] shadow-retro-lg overflow-hidden bg-[#FFFAF2]">
                <img
                  src={ASSETS.studioInterior}
                  alt="Cozy Lumi Lashes studio interior with plush ergonomic beds and pastel arched mirrors"
                  className="w-full aspect-[16/10] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Comfort Amenities */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFFAF2] border-2 border-[#570301] shadow-retro flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#F5BAD5] text-[#570301] shrink-0">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase text-[#570301]">
                    Memory Foam Cloud Bed
                  </h4>
                  <p className="text-xs text-[#3E2A25]/80 mt-1">
                    Ergonomic head cradle and knee support that relieves lower-back pressure so you wake up completely refreshed.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFAF2] border-2 border-[#570301] shadow-retro flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#BAD6FD] text-[#570301] shrink-0">
                  <Music size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase text-[#570301]">
                    Curated Dreamy Playlists
                  </h4>
                  <p className="text-xs text-[#3E2A25]/80 mt-1">
                    Soft bossa nova, lo-fi beats, or ambient warmth. You can also pop your own AirPods in for your favorite podcast.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFAF2] border-2 border-[#570301] shadow-retro flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#F7E594] text-[#570301] shrink-0">
                  <Coffee size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase text-[#570301]">
                    Herbal Refreshment Bar
                  </h4>
                  <p className="text-xs text-[#3E2A25]/80 mt-1">
                    Enjoy organic iced rose hibiscus tea, sparkling botanical elixirs, or hot chamomile before and after your service.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-display font-black text-3xl sm:text-4xl text-[#570301] uppercase mb-4">
          COME SAY HI & GET GORGEOUS LASHES
        </h3>
        <p className="text-sm text-[#3E2A25] font-medium mb-8 max-w-lg mx-auto">
          We would love to welcome you into our cozy space. Book your appointment or reach out with any questions.
        </p>
        <button
          onClick={() => onNavigate('book')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#570301] text-[#F7E594] font-display font-bold text-sm tracking-wider uppercase border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] transition-all cursor-pointer"
        >
          BOOK YOUR FIRST SET
          <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

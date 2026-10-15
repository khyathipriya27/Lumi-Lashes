import React, { useState } from 'react';
import { LOOKBOOK_GALLERY, LookbookItem } from '../data/lashData';
import { RetroSparkle, HeartDeco, RetroSticker } from '../components/DecorativeElements';
import { Eye, X, ArrowRight, Sparkles, Check } from 'lucide-react';

interface LookbookPageProps {
  onNavigate: (page: string, params?: { serviceId?: string }) => void;
}

export const LookbookPage: React.FC<LookbookPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'classic' | 'hybrid' | 'volume' | 'wispy' | 'lift'>('all');
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Styles' },
    { id: 'classic', label: 'Classic' },
    { id: 'hybrid', label: 'Hybrid' },
    { id: 'volume', label: 'Volume' },
    { id: 'wispy', label: 'Wispy' },
    { id: 'lift', label: 'Lash Lift' },
  ];

  const filteredLooks = activeFilter === 'all'
    ? LOOKBOOK_GALLERY
    : LOOKBOOK_GALLERY.filter(item => item.category === activeFilter);

  const handleBookLook = (look: LookbookItem) => {
    setSelectedLook(null);
    let serviceId = 'hybrid-full-set';
    if (look.category === 'classic') serviceId = 'classic-full-set';
    if (look.category === 'volume') serviceId = 'volume-full-set';
    if (look.category === 'wispy') serviceId = 'wispy-angel-set';
    if (look.category === 'lift') serviceId = 'lash-lift';
    onNavigate('book', { serviceId });
  };

  return (
    <div className="w-full bg-[#FFFAF2] text-[#3E2A25]">
      
      {/* Header */}
      <section className="bg-[#F5BAD5] py-16 md:py-20 border-b-2 border-[#570301] text-[#570301] relative overflow-hidden">
        <div className="absolute top-6 left-12 animate-float pointer-events-none">
          <RetroSparkle size={32} color="#F7E594" />
        </div>
        <div className="absolute bottom-6 right-16 animate-pulse-subtle pointer-events-none">
          <HeartDeco size={26} fill="#FFFAF2" stroke="#570301" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro text-xs font-bold uppercase tracking-wider mb-4">
            <RetroSparkle size={12} color="#570301" />
            LUMI LASH ARCHIVES
            <RetroSparkle size={12} color="#570301" />
          </span>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-[#570301]">
            THE LASH LOOKBOOK
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#570301]/90 max-w-xl mx-auto font-medium">
            Explore our curated gallery of real lash artistry, custom mappings, and flutter styles. Click any photo to inspect mapping notes.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border-2 border-[#570301] cursor-pointer ${
                    isActive
                      ? 'bg-[#570301] text-[#F7E594] shadow-retro'
                      : 'bg-[#FFFAF2] text-[#570301] hover:bg-[#F7E594]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Masonry / Editorial Collage Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              onClick={() => setSelectedLook(look)}
              className="group bg-[#FFFAF2] rounded-3xl border-3 border-[#570301] p-4 pb-6 shadow-retro hover:shadow-retro-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo with hover reveal */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#570301] bg-[#BAD6FD] mb-4">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Chip */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FFFAF2] border border-[#570301] text-[10px] font-bold uppercase tracking-wider text-[#570301]">
                    {look.category}
                  </span>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-[#570301]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F7E594] text-[#570301] font-display font-bold text-xs uppercase tracking-wider shadow-retro">
                      <Eye size={14} /> VIEW MAPPING SPECS
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-black text-xl text-[#570301]">
                  {look.title}
                </h3>
                <p className="text-xs text-[#3E2A25]/85 mt-1 font-medium leading-relaxed">
                  {look.caption}
                </p>
              </div>

              {/* Specs pill badges */}
              <div className="mt-4 pt-3 border-t border-[#570301]/15 flex items-center justify-between text-xs">
                <span className="font-script text-base font-bold text-[#570301]">
                  {look.mapping}
                </span>
                <span className="font-bold text-[10px] uppercase px-2.5 py-1 rounded-full bg-[#BAD6FD] text-[#570301] border border-[#570301]">
                  {look.curl}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Screen Image Lightbox & Mapping Viewer */}
      {selectedLook && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedLook.title}
          className="fixed inset-0 z-50 bg-[#3E2A25]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#FFFAF2] border-4 border-[#570301] shadow-retro-lg rounded-3xl max-w-4xl w-full overflow-hidden relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedLook(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border-2 border-[#570301] bg-[#F5BAD5] text-[#570301] font-black text-sm flex items-center justify-center hover:bg-[#BAD6FD] cursor-pointer shadow-retro"
              aria-label="Close Preview"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Column: Big Close-up Photo */}
              <div className="md:col-span-7 bg-[#BAD6FD] p-6 sm:p-8 flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-[#570301]">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-3 border-[#570301] shadow-retro bg-[#FFFAF2]">
                  <img
                    src={selectedLook.image}
                    alt={selectedLook.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <RetroSticker
                      text={selectedLook.category}
                      rotation="-rotate-6"
                      bg="#F7E594"
                      color="#570301"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Style Specifications & Mapping Breakdown */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E7C6B]">
                    LUMI MAPPING ANALYSIS
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#570301] uppercase mt-1 leading-tight">
                    {selectedLook.title}
                  </h3>
                  <p className="text-xs text-[#3E2A25] font-medium leading-relaxed mt-2 mb-6">
                    {selectedLook.caption}
                  </p>

                  <div className="space-y-3 bg-[#BAD6FD]/20 p-4 rounded-2xl border border-[#570301]/20 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[#570301]/10">
                      <span className="text-[#570301] font-bold">Curl Type:</span>
                      <span className="font-mono font-bold text-[#3E2A25]">{selectedLook.curl}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#570301]/10">
                      <span className="text-[#570301] font-bold">Lash Lengths:</span>
                      <span className="font-mono font-bold text-[#3E2A25]">{selectedLook.lengths}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#570301]/10">
                      <span className="text-[#570301] font-bold">Mapping:</span>
                      <span className="font-script text-base text-[#570301] font-bold">{selectedLook.mapping}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#570301] font-bold">Density:</span>
                      <span className="font-bold text-[#3E2A25]">{selectedLook.fullness}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => handleBookLook(selectedLook)}
                    className="w-full py-4 rounded-full bg-[#570301] text-[#F7E594] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Sparkles size={16} />
                    BOOK THIS EXACT LOOK
                  </button>
                  <p className="text-center text-[10px] text-[#570301]/70 font-medium">
                    Pre-selects this lash category in the appointment reservation flow.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { LASH_SERVICES, FAQ_LIST, LashService } from '../data/lashData';
import { RetroSparkle, HeartDeco, RetroSticker, WavyDivider } from '../components/DecorativeElements';
import { Clock, Sparkles, ChevronDown, Check, ArrowRight, HelpCircle } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string, params?: { serviceId?: string }) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'extensions' | 'lift-tint' | 'maintenance'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Interactive Lash Quiz State
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({
    look: '',
    routine: '',
    naturalLashes: '',
  });
  const [quizResult, setQuizResult] = useState<LashService | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? LASH_SERVICES
    : LASH_SERVICES.filter(s => s.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleQuizAnswer = (key: 'look' | 'routine' | 'naturalLashes', val: string) => {
    const updated = { ...quizAnswers, [key]: val };
    setQuizAnswers(updated);

    if (quizStep < 2) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate recommendation
      let recommendedId = 'hybrid-full-set';
      if (updated.look === 'natural' || updated.routine === 'minimal') {
        recommendedId = 'classic-full-set';
      } else if (updated.look === 'glam' || updated.look === 'bold') {
        recommendedId = 'volume-full-set';
      } else if (updated.look === 'textured') {
        recommendedId = 'wispy-angel-set';
      } else if (updated.routine === 'zero-maintenance') {
        recommendedId = 'lash-lift';
      }
      
      const found = LASH_SERVICES.find(s => s.id === recommendedId) || LASH_SERVICES[1];
      setQuizResult(found);
      setQuizStep(3);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({ look: '', routine: '', naturalLashes: '' });
    setQuizResult(null);
  };

  return (
    <div className="w-full bg-[#FFFAF2] text-[#3E2A25]">
      
      {/* Page Header */}
      <section className="bg-[#BAD6FD] py-16 md:py-20 border-b-2 border-[#570301] text-[#570301] relative overflow-hidden">
        <div className="absolute top-6 left-10 pointer-events-none animate-float">
          <RetroSparkle size={32} color="#F7E594" />
        </div>
        <div className="absolute bottom-6 right-12 pointer-events-none animate-pulse-subtle">
          <HeartDeco size={26} fill="#F5BAD5" stroke="#570301" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro text-xs font-bold uppercase tracking-wider mb-4">
            <RetroSparkle size={12} color="#570301" />
            BESPOKE LASH ARTISTRY MENU
            <RetroSparkle size={12} color="#570301" />
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-[#570301]">
            THE LASH MENU
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3E2A25] max-w-2xl mx-auto font-medium">
            Handcrafted lash extensions, restorative lifts, and lash care. Tailored exclusively to your natural eye contour and personal aesthetic.
          </p>

          {/* Quick Quiz Anchor Banner */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                setQuizOpen(true);
                resetQuiz();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F7E594] text-[#570301] border-2 border-[#570301] font-display font-bold text-xs uppercase tracking-wider shadow-retro hover:bg-[#FFFAF2] transition-colors cursor-pointer"
            >
              <HelpCircle size={15} />
              NOT SURE WHAT TO PICK? TAKE THE 30-SEC LASH QUIZ
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Lash Match Quiz Modal / Drawer */}
      {quizOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Lash Match Quiz"
          className="fixed inset-0 z-50 bg-[#3E2A25]/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#FFFAF2] border-3 border-[#570301] shadow-retro-lg rounded-3xl p-6 sm:p-8 max-w-lg w-full relative">
            
            <button
              onClick={() => setQuizOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-[#570301] bg-[#F5BAD5] text-[#570301] font-bold text-xs flex items-center justify-center cursor-pointer hover:bg-[#BAD6FD]"
            >
              ✕
            </button>

            {quizStep === 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#570301] mb-2 uppercase">
                  <span>Step 1 of 3</span>
                  <span>·</span>
                  <span>Your Desired Vibe</span>
                </div>
                <h3 className="font-display font-black text-2xl text-[#570301] mb-4">
                  How do you want your morning lashes to feel?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { label: 'Effortless "Born with It" Mascara look', val: 'natural' },
                    { label: 'Fluffy & Textured with dimension', val: 'textured' },
                    { label: 'Striking Velvet Volume for maximum drama', val: 'glam' },
                    { label: 'Just my natural lashes lifted, zero extensions', val: 'zero-maintenance' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => handleQuizAnswer('look', opt.val)}
                      className="w-full text-left p-3.5 rounded-2xl border-2 border-[#570301] bg-[#BAD6FD]/20 hover:bg-[#F7E594] text-xs font-bold text-[#570301] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 1 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#570301] mb-2 uppercase">
                  <span>Step 2 of 3</span>
                  <span>·</span>
                  <span>Daily Routine</span>
                </div>
                <h3 className="font-display font-black text-2xl text-[#570301] mb-4">
                  What is your typical morning beauty routine?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { label: 'Tinted moisturizer, lip balm & out the door in 5 min', val: 'minimal' },
                    { label: 'Full face of everyday glow & polished brows', val: 'everyday' },
                    { label: 'Love dressing up & making eyes the centerpiece', val: 'bold' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => handleQuizAnswer('routine', opt.val)}
                      className="w-full text-left p-3.5 rounded-2xl border-2 border-[#570301] bg-[#BAD6FD]/20 hover:bg-[#F7E594] text-xs font-bold text-[#570301] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#570301] mb-2 uppercase">
                  <span>Step 3 of 3</span>
                  <span>·</span>
                  <span>Natural Lash Base</span>
                </div>
                <h3 className="font-display font-black text-2xl text-[#570301] mb-4">
                  How would you describe your natural lashes?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { label: 'Fine or sparse, wanting fuller illusion', val: 'fine' },
                    { label: 'Average fullness and length', val: 'average' },
                    { label: 'Long but stick straight downwards', val: 'straight' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => handleQuizAnswer('naturalLashes', opt.val)}
                      className="w-full text-left p-3.5 rounded-2xl border-2 border-[#570301] bg-[#BAD6FD]/20 hover:bg-[#F7E594] text-xs font-bold text-[#570301] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 3 && quizResult && (
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F5BAD5] border border-[#570301] text-xs font-bold text-[#570301] uppercase tracking-wider mb-2">
                  ✨ YOUR PERFECT MATCH
                </span>
                <h3 className="font-display font-black text-3xl text-[#570301] uppercase">
                  {quizResult.name}
                </h3>
                <p className="font-serif italic text-sm text-[#570301] mt-1 mb-4">
                  "{quizResult.tagline}"
                </p>

                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#570301] mb-4">
                  <img
                    src={quizResult.image}
                    alt={quizResult.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <p className="text-xs text-[#3E2A25] font-medium leading-relaxed mb-6">
                  {quizResult.description}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setQuizOpen(false);
                      onNavigate('book', { serviceId: quizResult.id });
                    }}
                    className="flex-1 py-3.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] cursor-pointer"
                  >
                    BOOK {quizResult.name}
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-3.5 rounded-full bg-[#FFFAF2] border-2 border-[#570301] text-xs font-bold text-[#570301] hover:bg-[#F7E594] cursor-pointer"
                  >
                    RETAKE
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'extensions', label: 'Lash Extensions' },
            { id: 'lift-tint', label: 'Lift & Tint' },
            { id: 'maintenance', label: 'Fills & Care' },
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border-2 border-[#570301] cursor-pointer ${
                  isActive
                    ? 'bg-[#570301] text-[#FFFAF2] shadow-retro'
                    : 'bg-[#FFFAF2] text-[#570301] hover:bg-[#F7E594]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Service Cards Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => {
            const bgClass =
              service.bgTone === 'rose'
                ? 'bg-[#F5BAD5]'
                : service.bgTone === 'buttercream'
                ? 'bg-[#F7E594]'
                : service.bgTone === 'cloudy'
                ? 'bg-[#BAD6FD]'
                : service.bgTone === 'nude'
                ? 'bg-[#EBD9C9]'
                : 'bg-[#FFFAF2]';

            return (
              <div
                key={service.id}
                className={`rounded-3xl border-3 border-[#570301] ${bgClass} p-6 sm:p-8 shadow-retro-lg flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-display font-black px-3 py-1 rounded-full bg-[#FFFAF2] text-[#570301] border border-[#570301]">
                      0{index + 1}
                    </span>
                    {service.badge && (
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#570301] text-[#F7E594]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Split Image and Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                    <div className="sm:col-span-5 w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#570301] bg-[#FFFAF2]">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="sm:col-span-7">
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-[#570301] uppercase tracking-tight">
                        {service.name}
                      </h3>
                      <p className="font-serif italic text-xs text-[#570301]/90 mt-1">
                        "{service.tagline}"
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-xs font-bold text-[#570301]">
                        <span className="flex items-center gap-1">
                          <Clock size={13} /> {service.duration}
                        </span>
                        <span>·</span>
                        <span className="font-display font-black text-sm">
                          From {service.startingPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3E2A25] leading-relaxed font-medium mb-4">
                    {service.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#FFFAF2]/80 border border-[#570301]/25 text-xs text-[#3E2A25]">
                    <span className="font-bold text-[#570301]">Ideal for: </span>
                    <span>{service.idealFor}</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#570301]/20 flex items-center justify-between gap-4">
                  <div className="text-[11px] text-[#570301]/80 font-semibold">
                    Includes 15-min consultation
                  </div>
                  <button
                    onClick={() => onNavigate('book', { serviceId: service.id })}
                    className="px-6 py-2.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] transition-all cursor-pointer"
                  >
                    BOOK THIS SERVICE
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Consultation Recommendation Banner */}
        <div className="mt-14 rounded-3xl border-3 border-[#570301] bg-[#BAD6FD] p-8 shadow-retro-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#570301] mb-2">
              <RetroSparkle size={13} color="#570301" />
              FIRST-TIME LASH CLIENT?
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#570301] uppercase">
              Complimentary Lash Mapping Consultation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#3E2A25] font-medium leading-relaxed">
              Every first set at Lumi begins with a thorough 15-minute consultation where we assess your eye shape, lifestyle, and natural lash health before styling.
            </p>
          </div>
          <button
            onClick={() => onNavigate('book')}
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#570301] text-[#F7E594] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] cursor-pointer"
          >
            SCHEDULE WITH CONSULTATION
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#EBD9C9]/50 py-20 border-t-2 border-[#570301]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#570301] mb-2">
              <RetroSparkle size={12} color="#570301" />
              LASH WISDOM & FAQ
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#570301] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#3E2A25]/80 font-medium">
              Everything you need to know before your cozy appointment.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-[#570301] bg-[#FFFAF2] shadow-retro overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#570301] hover:bg-[#F7E594]/30 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={`p-1.5 rounded-full border border-[#570301] transition-transform ${isOpen ? 'rotate-180 bg-[#F5BAD5]' : 'bg-[#FFFAF2]'}`}>
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-[#3E2A25] font-medium leading-relaxed border-t border-[#570301]/10 bg-[#FFFAF2]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

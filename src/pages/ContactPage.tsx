import React, { useState } from 'react';
import { BRAND_CONFIG, LASH_SERVICES } from '../data/lashData';
import { RetroSparkle, HeartDeco, RetroSticker } from '../components/DecorativeElements';
import { MapPin, Phone, Mail, Clock, Send, Instagram, CheckCircle2, Sparkles, Navigation } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'hybrid-full-set',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FFFAF2] text-[#3E2A25]">
      
      {/* Header */}
      <section className="bg-[#BAD6FD] py-16 md:py-24 border-b-2 border-[#570301] text-[#570301] relative overflow-hidden">
        <div className="absolute top-8 left-10 animate-float pointer-events-none">
          <RetroSparkle size={36} color="#F7E594" />
        </div>
        <div className="absolute bottom-6 right-12 animate-pulse-subtle pointer-events-none">
          <HeartDeco size={28} fill="#F5BAD5" stroke="#570301" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFAF2] border-2 border-[#570301] shadow-retro text-xs font-bold uppercase tracking-wider mb-4">
            <HeartDeco size={12} fill="#F5BAD5" stroke="#570301" />
            WE'D LOVE TO HEAR FROM YOU
          </span>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-none text-[#570301]">
            LET'S CHAT LASHES
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3E2A25] max-w-xl mx-auto font-medium">
            Have questions about styling, patch tests, or bridal parties? Send us a note or drop by the studio.
          </p>
        </div>
      </section>

      {/* Main Split Content: Contact Form & Studio Location Card */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form: Inquiries */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border-3 border-[#570301] bg-[#FFFAF2] p-6 sm:p-10 shadow-retro-lg">
              
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E7C6B]">
                  DIRECT INQUIRY
                </span>
                <h2 className="font-display font-black text-3xl text-[#570301] uppercase mt-1">
                  SEND A NOTE TO THE STUDIO
                </h2>
                <p className="text-xs text-[#3E2A25]/80 mt-1 font-medium">
                  We reply within 24 hours during Tuesday–Saturday studio hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#BAD6FD]/30 border-2 border-[#570301] text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F7E594] border-2 border-[#570301] flex items-center justify-center mx-auto shadow-retro">
                    <CheckCircle2 size={28} className="text-[#570301]" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-[#570301] uppercase">
                    MESSAGE RECEIVED!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3E2A25] font-medium leading-relaxed max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#570301]">{formData.name}</span>! Sarah will review your lash question and respond to <span className="underline">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', serviceInterest: 'hybrid-full-set', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#570301] text-[#FFFAF2] text-xs font-bold uppercase tracking-wider border-2 border-[#570301] hover:bg-[#3E2A25] cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chloe Bennett"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] focus:bg-[#BAD6FD]/15 text-sm font-medium focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="chloe@example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] focus:bg-[#BAD6FD]/15 text-sm font-medium focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] focus:bg-[#BAD6FD]/15 text-sm font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                      Service You Are Interested In
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] text-sm font-medium focus:outline-none"
                    >
                      {LASH_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.startingPrice})
                        </option>
                      ))}
                      <option value="consultation">Custom Consultation Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                      Your Message or Lash Questions *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you have in mind or any questions about eye shapes, lash fills, or sensitivities..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] text-sm font-medium focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#570301] text-[#F7E594] font-display font-black text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send size={15} />
                    SEND YOUR MESSAGE
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Studio Card & Map Mockup */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Retro Studio Atelier Card */}
            <div className="rounded-3xl border-3 border-[#570301] bg-[#F5BAD5] p-6 sm:p-8 shadow-retro-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFFAF2] border border-[#570301] text-[#570301]">
                VISIT THE ATELIER
              </span>
              <h3 className="font-display font-black text-2xl text-[#570301] uppercase mt-3">
                LUMI LASHES STUDIO
              </h3>

              <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#570301] font-medium leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin size={17} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{BRAND_CONFIG.addressPlaceholder}</p>
                    <p>{BRAND_CONFIG.cityState}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone size={17} className="shrink-0" />
                  <span className="font-bold">{BRAND_CONFIG.phonePlaceholder}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail size={17} className="shrink-0" />
                  <span className="font-bold">{BRAND_CONFIG.emailPlaceholder}</span>
                </div>
              </div>

              {/* Stylized Retro Map Card Visual */}
              <div className="mt-6 rounded-2xl border-2 border-[#570301] bg-[#BAD6FD] p-4 relative overflow-hidden shadow-retro">
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-[#570301]">
                  <span className="flex items-center gap-1">
                    <Navigation size={13} /> Rose District / South Congress
                  </span>
                  <span className="text-[10px] bg-[#FFFAF2] px-2 py-0.5 rounded border border-[#570301]">
                    Private Suite 204
                  </span>
                </div>

                {/* Stylized vector map graphic */}
                <div className="h-32 rounded-xl border border-[#570301] bg-[#FFFAF2] relative flex items-center justify-center overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#570301_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Streets */}
                  <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#F7E594] -translate-y-1/2 border-y border-[#570301]/30 flex items-center justify-around text-[9px] font-bold text-[#570301]/80">
                    <span>DAHLIA BLVD</span>
                    <span>SOUTH ATELIER WAY</span>
                  </div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-3 bg-[#BAD6FD] border-x border-[#570301]/30" />

                  {/* Studio Pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#570301] text-[#F7E594] border-2 border-[#FFFAF2] shadow-retro flex items-center justify-center animate-bounce">
                      <Sparkles size={14} />
                    </div>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#FFFAF2] border border-[#570301] text-[#570301] mt-1 shadow-xs">
                      Lumi Lashes
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-[#570301] font-semibold">
                  Complimentary 2-hour parking in the Dahlia garage. Elevator access to the 2nd floor suite.
                </p>
              </div>

              {/* Hours summary */}
              <div className="mt-6 pt-4 border-t border-[#570301]/20">
                <h4 className="font-display font-bold text-xs uppercase text-[#570301] mb-2 flex items-center gap-1.5">
                  <Clock size={13} /> STUDIO HOURS
                </h4>
                <div className="space-y-1 text-xs text-[#3E2A25] font-medium">
                  {BRAND_CONFIG.hours.map((h, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="font-bold text-[#570301]">{h.days}:</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Book Button */}
              <div className="mt-6">
                <button
                  onClick={() => onNavigate('book')}
                  className="w-full py-3.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] cursor-pointer"
                >
                  READY? BOOK YOUR LASHES ONLINE
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

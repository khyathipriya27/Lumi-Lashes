import React, { useState } from 'react';
import { LASH_SERVICES, BRAND_CONFIG, LashService } from '../data/lashData';
import { RetroSparkle, HeartDeco, RetroSticker } from '../components/DecorativeElements';
import {
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  Check,
  ChevronRight,
  ChevronLeft,
  Info,
  Download,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingPageProps {
  initialServiceId?: string;
  onNavigate: (page: string) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ initialServiceId, onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Selected state
  const defaultService = LASH_SERVICES.find(s => s.id === initialServiceId) || LASH_SERVICES[1];
  const [selectedService, setSelectedService] = useState<LashService>(defaultService);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Form details
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hasExistingLashes: 'no',
    allergiesOrNotes: '',
    agreedToPolicy: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available Time Slots
  const timeSlots = [
    { time: '10:00 AM', period: 'Morning' },
    { time: '11:45 AM', period: 'Morning' },
    { time: '1:30 PM', period: 'Afternoon' },
    { time: '3:15 PM', period: 'Afternoon' },
    { time: '5:00 PM', period: 'Evening' },
  ];

  // Generate the next 14 bookable dates starting tomorrow (skipping Sundays/Mondays per hours)
  const getAvailableDates = () => {
    const dates: { dateStr: string; displayDay: string; displayDate: string; isWeekend: boolean }[] = [];
    const today = new Date();
    
    let daysAdded = 0;
    let offset = 1;

    while (daysAdded < 10 && offset < 20) {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      const dayOfWeek = d.getDay(); // 0 is Sunday, 1 is Monday

      // Studio open Tuesday through Saturday (day 2, 3, 4, 5, 6)
      if (dayOfWeek !== 0 && dayOfWeek !== 1) {
        const dateStr = d.toISOString().split('T')[0];
        const displayDay = d.toLocaleDateString('en-US', { weekday: 'short' });
        const displayDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        dates.push({
          dateStr,
          displayDay,
          displayDate,
          isWeekend: dayOfWeek === 6
        });
        daysAdded++;
      }
      offset++;
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleNext = () => {
    setFormErrors({});

    if (currentStep === 1) {
      if (!selectedService) {
        setFormErrors({ service: 'Please select a service to proceed' });
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedDate) {
        setFormErrors({ date: 'Please choose your preferred date' });
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!selectedTime) {
        setFormErrors({ time: 'Please select an appointment time slot' });
        return;
      }
      setCurrentStep(4);
    } else if (currentStep === 4) {
      const errors: Record<string, string> = {};
      if (!formData.fullName.trim()) errors.fullName = 'Please enter your name';
      if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Please enter a valid email address';
      if (!formData.phone.trim() || formData.phone.length < 7) errors.phone = 'Please enter a valid phone number';
      if (!formData.agreedToPolicy) errors.agreedToPolicy = 'Please accept the appointment request policy';

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setCurrentStep(5);
    } else if (currentStep === 5) {
      // Complete booking submission
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#BAD6FD', '#F5BAD5', '#F7E594', '#570301']
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  };

  const handleDownloadCalendar = () => {
    // Generate .ics calendar format
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Lumi Lashes//Appointment Reservation//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Lumi Lashes Appointment - ${selectedService.name}
DESCRIPTION:Lumi Lashes appointment reservation for ${formData.fullName}. Duration: ${selectedService.duration}. Studio: ${BRAND_CONFIG.addressPlaceholder}, ${BRAND_CONFIG.cityState}.
STATUS:CONFIRMED
LOCATION:${BRAND_CONFIG.addressPlaceholder}, ${BRAND_CONFIG.cityState}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'lumi-lashes-appointment.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const steps = [
    { num: 1, label: 'Service' },
    { num: 2, label: 'Date' },
    { num: 3, label: 'Time' },
    { num: 4, label: 'Details' },
    { num: 5, label: 'Review' },
  ];

  return (
    <div className="w-full bg-[#FFFAF2] text-[#3E2A25] py-12 md:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#BAD6FD] border-2 border-[#570301] shadow-retro text-xs font-bold uppercase tracking-wider mb-3 text-[#570301]">
            <Sparkles size={13} />
            ONLINE APPOINTMENT REQUEST
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#570301] uppercase tracking-tight">
            BOOK YOUR LASH SET
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-[#3E2A25]/80 font-medium">
            Step-by-step reservation. Demo mode: seamlessly simulates future Square Appointments or Fresha workflows.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        <div className="mb-10 p-3 sm:p-4 rounded-2xl bg-[#BAD6FD]/30 border-2 border-[#570301] shadow-retro">
          <div className="flex items-center justify-between">
            {steps.map((st, i) => {
              const isPast = currentStep > st.num;
              const isCurrent = currentStep === st.num;
              return (
                <div key={st.num} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => isPast && setCurrentStep(st.num)}
                      disabled={!isPast}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#570301] font-display font-bold text-xs flex items-center justify-center transition-all ${
                        isCurrent
                          ? 'bg-[#570301] text-[#F7E594] scale-110 shadow-retro'
                          : isPast
                          ? 'bg-[#F7E594] text-[#570301] cursor-pointer'
                          : 'bg-[#FFFAF2] text-[#570301]/50'
                      }`}
                    >
                      {isPast ? <Check size={14} /> : st.num}
                    </button>
                    <span className="hidden sm:block text-[10px] font-bold uppercase tracking-wider mt-1 text-[#570301]">
                      {st.label}
                    </span>
                  </div>

                  {i < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 rounded ${
                        currentStep > st.num ? 'bg-[#570301]' : 'bg-[#570301]/20'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            STEP 01 — CHOOSE YOUR SERVICE
            ========================================================================= */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-black text-2xl text-[#570301] uppercase">
                01 — CHOOSE YOUR SERVICE
              </h2>
              <span className="text-xs font-semibold text-[#570301]/80">
                Select one treatment
              </span>
            </div>

            {formErrors.service && (
              <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle size={14} /> {formErrors.service}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LASH_SERVICES.map((serv) => {
                const isSelected = selectedService.id === serv.id;
                return (
                  <div
                    key={serv.id}
                    onClick={() => setSelectedService(serv)}
                    className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex gap-4 ${
                      isSelected
                        ? 'border-[#570301] bg-[#F7E594] shadow-retro-lg translate-x-0.5 -translate-y-0.5'
                        : 'border-[#570301]/30 bg-[#FFFAF2] hover:border-[#570301] hover:bg-[#F5BAD5]/20'
                    }`}
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-[#570301] shrink-0 bg-[#BAD6FD]">
                      <img
                        src={serv.image}
                        alt={serv.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-display font-bold text-base text-[#570301]">
                            {serv.name}
                          </h3>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-[#570301] text-[#F7E594] flex items-center justify-center">
                              <Check size={12} />
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#3E2A25]/85 line-clamp-2 mt-1">
                          {serv.description}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs font-bold text-[#570301]">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock size={12} /> {serv.duration}
                        </span>
                        <span className="font-display font-black">
                          {serv.startingPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 02 — PICK YOUR DATE
            ========================================================================= */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-black text-2xl text-[#570301] uppercase">
                02 — PICK YOUR DATE
              </h2>
              <p className="text-xs text-[#3E2A25]/80 mt-1">
                Selected Service: <span className="font-bold text-[#570301]">{selectedService.name}</span> ({selectedService.duration})
              </p>
            </div>

            {formErrors.date && (
              <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle size={14} /> {formErrors.date}
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {availableDates.map((item) => {
                const isSelected = selectedDate === item.dateStr;
                return (
                  <button
                    key={item.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(item.dateStr)}
                    className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#570301] bg-[#F7E594] shadow-retro text-[#570301]'
                        : 'border-[#570301]/25 bg-[#FFFAF2] hover:border-[#570301] hover:bg-[#BAD6FD]/30'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#9E7C6B]">
                      {item.displayDay}
                    </div>
                    <div className="font-display font-black text-lg sm:text-xl text-[#570301] my-1">
                      {item.displayDate}
                    </div>
                    <span className="text-[10px] font-semibold text-[#570301]/70">
                      Open Slots
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#BAD6FD]/20 border border-[#570301]/20 text-xs text-[#3E2A25] flex items-center gap-2">
              <Info size={16} className="text-[#570301] shrink-0" />
              <span>
                Studio hours: Tuesday – Saturday. Closed Sunday & Monday for lash nap recovery & prep.
              </span>
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 03 — SELECT YOUR TIME
            ========================================================================= */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-black text-2xl text-[#570301] uppercase">
                03 — SELECT YOUR TIME
              </h2>
              <p className="text-xs text-[#3E2A25]/80 mt-1">
                For {selectedDate} · Service: <span className="font-bold text-[#570301]">{selectedService.name}</span>
              </p>
            </div>

            {formErrors.time && (
              <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle size={14} /> {formErrors.time}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot.time;
                return (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#570301] bg-[#F5BAD5] shadow-retro text-[#570301]'
                        : 'border-[#570301]/25 bg-[#FFFAF2] hover:border-[#570301] hover:bg-[#F7E594]/30'
                    }`}
                  >
                    <div>
                      <div className="font-display font-black text-lg text-[#570301]">
                        {slot.time}
                      </div>
                      <div className="text-[11px] font-semibold text-[#9E7C6B]">
                        {slot.period} Session
                      </div>
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#570301] text-[#F7E594] flex items-center justify-center">
                        <Check size={12} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#F7E594]/30 border border-[#570301]/20 text-xs text-[#3E2A25] flex items-center gap-2">
              <Sparkles size={16} className="text-[#570301] shrink-0" />
              <span>
                Every slot includes a relaxing 15-minute consultation & lash cleansing ritual.
              </span>
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 04 — YOUR DETAILS
            ========================================================================= */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-black text-2xl text-[#570301] uppercase">
                04 — YOUR DETAILS
              </h2>
              <p className="text-xs text-[#3E2A25]/80 mt-1">
                Tell us about yourself so we can prepare your cozy lash station.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Mia Hawthorne"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] focus:bg-[#BAD6FD]/15 text-sm font-medium focus:outline-none"
                />
                {formErrors.fullName && (
                  <p className="text-xs text-red-700 mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mia@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] focus:bg-[#BAD6FD]/15 text-sm font-medium focus:outline-none"
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-700 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] focus:bg-[#BAD6FD]/15 text-sm font-medium focus:outline-none"
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-red-700 mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                  Do you currently have eyelash extensions from another salon?
                </label>
                <div className="flex gap-4">
                  {[
                    { label: 'No, clean natural lashes', val: 'no' },
                    { label: 'Yes, need gentle removal', val: 'yes' },
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="hasLashes"
                        value={opt.val}
                        checked={formData.hasExistingLashes === opt.val}
                        onChange={() => setFormData({ ...formData, hasExistingLashes: opt.val })}
                        className="accent-[#570301]"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#570301] uppercase mb-1">
                  Allergies, Sensitivities, or Special Wishes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.allergiesOrNotes}
                  onChange={(e) => setFormData({ ...formData, allergiesOrNotes: e.target.value })}
                  placeholder="e.g. Sensitive eyes, prefer CC-curl, love acoustic music during appointment..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#570301] bg-[#FFFAF2] text-sm font-medium focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2 text-xs font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedToPolicy}
                    onChange={(e) => setFormData({ ...formData, agreedToPolicy: e.target.checked })}
                    className="mt-0.5 accent-[#570301]"
                  />
                  <span>
                    I understand this appointment request will hold my preferred time. Arrive eye makeup-free and well-rested for the best retention!
                  </span>
                </label>
                {formErrors.agreedToPolicy && (
                  <p className="text-xs text-red-700 mt-1">{formErrors.agreedToPolicy}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 05 — REVIEW YOUR REQUEST
            ========================================================================= */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-black text-2xl text-[#570301] uppercase">
                05 — REVIEW YOUR REQUEST
              </h2>
              <p className="text-xs text-[#3E2A25]/80 mt-1">
                Review your appointment summary before submitting your request.
              </p>
            </div>

            <div className="rounded-3xl border-3 border-[#570301] bg-[#FFFAF2] p-6 sm:p-8 shadow-retro-lg space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#570301]/20 gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E7C6B]">
                    SELECTED SERVICE
                  </span>
                  <h3 className="font-display font-black text-2xl text-[#570301]">
                    {selectedService.name}
                  </h3>
                  <p className="text-xs text-[#3E2A25]/80 font-medium">
                    {selectedService.duration} · Starting at {selectedService.startingPrice}
                  </p>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-bold text-[#570301] underline underline-offset-4 cursor-pointer self-start"
                >
                  Change
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[#570301]/20 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E7C6B]">
                    APPOINTMENT DATE & TIME
                  </span>
                  <p className="font-bold text-[#570301] text-sm mt-0.5">
                    {selectedDate} at {selectedTime}
                  </p>
                  <p className="text-[#3E2A25]/80 mt-0.5">
                    Studio Location: {BRAND_CONFIG.addressPlaceholder}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E7C6B]">
                    CLIENT INFORMATION
                  </span>
                  <p className="font-bold text-[#570301] text-sm mt-0.5">
                    {formData.fullName}
                  </p>
                  <p className="text-[#3E2A25]/80 mt-0.5">
                    {formData.email} · {formData.phone}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#BAD6FD]/30 border border-[#570301]/20 text-xs text-[#570301] flex items-start gap-2.5">
                <Info size={16} className="shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-bold">Appointment Guarantee: </span>
                  No upfront credit card is charged today. You will receive an instant confirmation receipt and SMS reminder 24 hours prior.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Navigation Action Buttons */}
        <div className="mt-8 pt-6 border-t-2 border-[#570301]/15 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-5 py-3 rounded-full bg-[#FFFAF2] border-2 border-[#570301] text-xs font-bold uppercase tracking-wider text-[#570301] hover:bg-[#BAD6FD]/30 flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft size={16} /> BACK
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            className="px-8 py-4 rounded-full bg-[#570301] text-[#F7E594] font-display font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            {currentStep === 5 ? (
              <>
                <Sparkles size={16} /> CONFIRM RESERVATION
              </>
            ) : (
              <>
                CONTINUE <ChevronRight size={16} />
              </>
            )}
          </button>
        </div>

      </div>

      {/* Confirmation Modal upon Successful Submission */}
      {isSubmitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Appointment Reserved"
          className="fixed inset-0 z-50 bg-[#3E2A25]/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#FFFAF2] border-4 border-[#570301] shadow-retro-lg rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center relative animate-pulse-subtle">
            
            <div className="w-16 h-16 rounded-full bg-[#F7E594] border-2 border-[#570301] flex items-center justify-center mx-auto mb-4 shadow-retro">
              <Sparkles size={28} className="text-[#570301]" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-[#F5BAD5] text-[#570301] border border-[#570301] text-xs font-bold uppercase tracking-wider mb-2">
              🎉 REQUEST RESERVED!
            </span>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#570301] uppercase">
              YOU'RE ON THE BOOKS!
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#3E2A25] font-medium leading-relaxed">
              We cannot wait to pamper you, <span className="font-bold text-[#570301]">{formData.fullName}</span>. Your {selectedService.name} is reserved for {selectedDate} at {selectedTime}.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#BAD6FD]/30 border-2 border-[#570301] text-left text-xs space-y-1.5">
              <div className="font-bold text-[#570301] flex justify-between">
                <span>Treatment:</span>
                <span>{selectedService.name}</span>
              </div>
              <div className="flex justify-between text-[#3E2A25]">
                <span>Time:</span>
                <span>{selectedDate} · {selectedTime}</span>
              </div>
              <div className="flex justify-between text-[#3E2A25]">
                <span>Studio:</span>
                <span>{BRAND_CONFIG.addressPlaceholder}</span>
              </div>
              <div className="pt-2 border-t border-[#570301]/20 text-[11px] text-[#570301] italic">
                *Demo confirmation mode: simulated schedule hold.
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleDownloadCalendar}
                className="w-full py-3.5 rounded-full bg-[#570301] text-[#FFFAF2] font-display font-bold text-xs uppercase tracking-wider border-2 border-[#570301] shadow-retro hover:bg-[#3E2A25] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={15} />
                DOWNLOAD .ICS CALENDAR INVITE
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  onNavigate('home');
                }}
                className="w-full py-3 rounded-full bg-[#FFFAF2] border-2 border-[#570301] text-xs font-bold text-[#570301] hover:bg-[#F7E594] cursor-pointer"
              >
                RETURN TO HOME
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

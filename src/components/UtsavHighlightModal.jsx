import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Calendar, MapPin, Zap, ArrowRight } from "lucide-react";

const UtsavHighlightModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  const targetDate = "2026-03-28T09:00:00"; 

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("utsavModalSeen");
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("utsavModalSeen", "true");
  };

  const handleExplore = () => {
    handleClose();
    navigate("/utsav-delhi-2026");
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/15 backdrop-blur-[2px] animate-in fade-in duration-500"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-main)] border border-[var(--primary)]/20 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual Header */}
        <div className="h-80 w-full relative overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771796681/1_s1rcaa.jpg" 
            className="w-full h-full object-cover scale-110"
            alt="Utsav"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/20 to-transparent"></div>
          
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/90 text-[var(--secondary)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-all shadow-md"
          >
            <X size={18} strokeWidth={3} />
          </button>
        </div>

        {/* Content Section */}
        <div className="px-8 pb-8 pt-2">
          <div className="flex justify-center -mt-10 mb-4 relative z-10">
             <div className="bg-[var(--tertiary)] text-[var(--secondary)] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg border border-white/20 flex items-center gap-2">
                <Zap size={12} fill="currentColor" /> Upcoming Event
             </div>
          </div>

          <h2 className="text-3xl font-black text-[var(--secondary)] text-center leading-tight mb-2 tracking-tighter">
            37th Delhi-NCR <span className="text-[var(--primary)]">Utsav</span>
          </h2>
          <p className="text-neutral-800 font-semibold font-sans text-xl mb-2 text-center">In association with<span className="text-[var(--primary)]"> North Indian States </span> </p>
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex items-center gap-2 text-[var(--text-main)] font-bold text-sm">
              <Calendar size={14} className="text-[var(--primary)]" /> 28-29 March, 2026
            </div>
            <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs font-medium">
              <MapPin size={14} className="text-[var(--primary)]" /> Ramleela Maidan , Ashok Vihar, New Delhi
            </div>
          </div>

          {/* Luxury Countdown UI */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="relative group">
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl py-3 text-center group-hover:border-[var(--primary)]/50 transition-colors">
                  <div className="text-2xl font-black text-[var(--secondary)] tabular-nums">{value}</div>
                  <div className="text-[9px] uppercase font-bold text-[var(--text-muted)] tracking-widest">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleExplore}
              className="w-full py-3 bg-[var(--primary)] hover:bg-[brand(--primary)] text-white text-sm font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_10px_20px_rgba(var(--primary-rgb),0.3)] flex items-center justify-center gap-3 group"
            >
              Explore Details
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={handleClose}
              className="w-full py-2 text-[var(--text-muted)] text-[11px] font-bold uppercase tracking-widest hover:text-[var(--primary)] transition-colors"
            >
              Dismiss Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtsavHighlightModal;
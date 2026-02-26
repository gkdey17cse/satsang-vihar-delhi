// src/pages/conference/components/GuestsOfHonour.jsx
import { UserCheck } from "lucide-react";

const GuestsOfHonour = ({ keynoteImage, keynoteVideoSrc, guests }) => {
  return (
    <section
      id="guests"
      className="py-12 lg:py-20 px-4 bg-[var(--bg-tertiary)] border-y border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Keynote Speaker */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-3">
            Keynote Speaker
          </h2>
          <div className="w-20 h-1.5 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center px-4">
          <div className="group w-full max-w-6xl bg-[var(--bg-secondary)] rounded-3xl shadow-xl border border-[var(--border-subtle)] flex flex-col md:flex-row overflow-hidden hover:shadow-2xl transition-all duration-500">
            {/* Left: Speaker Image */}
            <div className="w-full md:w-1/3 lg:w-1/4 h-72 md:h-auto relative overflow-hidden">
              <img
                src={keynoteImage}
                alt="Ms. Ishita Roy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
            </div>

            {/* Right: Info & Video */}
            <div className="w-full md:w-2/3 lg:w-3/4 p-6 lg:p-10 flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase bg-[var(--primary)]/10 text-[var(--primary)] rounded-md border border-[var(--primary)]/20">
                    Guest of Honor
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-black text-[var(--text-main)] mb-2 leading-tight">
                    Ms. Ishita Roy
                  </h3>
                  <div className="w-12 h-1 bg-[var(--primary)] mb-6 mx-auto md:mx-0"></div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-[var(--text-main)] leading-snug">
                      Director, Kerala State Civil Services Academy
                    </p>
                    <p className="text-base text-[var(--text-muted)] font-medium">
                      Government of Kerala
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-[var(--text-muted)] leading-relaxed italic border-l-2 border-[var(--border-subtle)] pl-4 hidden lg:block">
                    Leading the transformation of civil service coaching and
                    public administration excellence.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 bg-black">
                    <iframe
                      src={keynoteVideoSrc}
                      title="Ms. Ishita Roy – Introduction"
                      className="w-full h-full"
                      allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute -inset-2 bg-[var(--primary)]/5 blur-2xl rounded-full -z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guests of Honour Grid */}
        <div className="mt-16 mb-10">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-main)] mb-3">
              Guests of Honour
            </h2>
            <div className="w-16 h-1 bg-[var(--primary)] mx-auto rounded-full opacity-60"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {guests.map((guest, i) => (
              <div
                key={i}
                className="bg-[var(--bg-secondary)] p-6 lg:p-8 rounded-2xl shadow-lg border border-[var(--border-subtle)] hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center h-full"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[var(--bg-tertiary)] rounded-full mb-5 flex items-center justify-center overflow-hidden border-2 border-[var(--bg-tertiary)] shadow-sm">
                  {guest.image ? (
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserCheck size={40} className="text-[var(--primary)]" />
                  )}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[var(--text-main)] mb-2 leading-tight">
                  {guest.name}
                </h3>
                <p className="text-[var(--primary)] font-semibold text-xs md:text-sm lg:text-base mb-3 leading-snug">
                  {guest.role}
                </p>
                <div className="mt-auto w-full pt-3 border-t border-[var(--border-subtle)]">
                  <p className="text-[var(--text-muted)] text-[11px] md:text-xs lg:text-sm leading-relaxed italic">
                    {guest.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestsOfHonour;
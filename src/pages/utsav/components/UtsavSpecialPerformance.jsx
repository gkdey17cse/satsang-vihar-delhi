import { Calendar, MapPin, Mic2 } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export const UtsavSpecialPerformance = ({ performance }) => {
  if (!performance) return null;

  return (
    <section className="py-20 px-4 bg-[var(--bg-main)] border-y border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30">
              <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                <Mic2 className="w-3 h-3" /> Special Performance
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6"
              dangerouslySetInnerHTML={{ __html: performance.title }}
            />
            <p className="text-lg text-[var(--text-muted)] mb-6 text-justify leading-relaxed">
              {performance.description}
            </p>
            <div className="space-y-3 text-[var(--text-muted)]">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[var(--primary)]" />
                <span className="font-medium">{performance.dateTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--primary)]" />
                <span>{performance.venue}</span>
              </div>
            </div>
            <div className="mt-8">
              <ScrollLink
                to="schedule"
                smooth
                offset={-50}
                className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg cursor-pointer"
              >
                View Full Schedule
              </ScrollLink>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={performance.image}
                alt="Special Performance"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  {performance.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

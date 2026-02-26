// src/pages/conference/components/ProgrammeSchedule.jsx
import { Clock, UserCheck, Shield, Briefcase, GraduationCap, Compass } from "lucide-react";

const ProgrammeSchedule = ({ scheduleItems, tableData }) => {
  // Map icon strings to components for tableData
  const iconMap = {
    Shield,
    Briefcase,
    GraduationCap,
    Compass,
  };

  return (
    <section
      id="schedule"
      className="py-16 lg:py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4 tracking-tight uppercase">
            Programme Schedule
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
          <p className="text-[var(--primary)] text-sm md:text-lg font-medium">
            Officer Transit Facility Hall, DRDO Residential Complex, (DROMI) Timarpur • 20th February 2026
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="hidden md:block absolute left-[160px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[var(--border-subtle)] to-transparent"></div>

          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-10 group transition-all duration-300"
            >
              <div className="md:w-[150px] shrink-0 md:text-right pt-1">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${
                    item.type === "break"
                      ? "bg-gray-100 text-gray-400 border-gray-200"
                      : "bg-[var(--bg-main)] text-[var(--primary)] border-[var(--primary)]/20"
                  }`}
                >
                  {item.time}
                </span>
              </div>
              <div
                className={`flex-1 p-5 md:p-6 rounded-2xl border transition-all duration-300 relative ${
                  item.type === "session"
                    ? "bg-[var(--bg-main)] border-[var(--border-subtle)] shadow-sm border-l-4 border-l-[var(--primary)]"
                    : item.type === "break"
                    ? "bg-transparent border-dashed border-gray-300 opacity-60"
                    : "bg-[var(--bg-main)] border-[var(--border-subtle)]"
                }`}
              >
                <h3
                  className={`text-base md:text-lg font-bold mb-4 ${
                    item.type === "break" ? "text-[var(--text-muted)]" : "text-[var(--text-main)]"
                  }`}
                >
                  {item.title}
                </h3>
                {item.isPlenary ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {item.sessions.map((plenary) => (
                      <div
                        key={plenary.id}
                        className="bg-[var(--bg-secondary)] p-5 rounded-xl border border-[var(--border-subtle)] shadow-sm"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-[var(--primary)] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                            {plenary.id}
                          </span>
                          <h4 className="font-bold text-sm text-[var(--text-main)]">
                            {plenary.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] italic mb-4 font-medium leading-snug">
                          "{plenary.theme}"
                        </p>

                        <div className="mb-4 p-3 bg-[var(--primary)]/5 border-l-2 border-[var(--primary)] rounded-r-md">
                          <p className="text-[10px] uppercase font-bold text-[var(--primary)] mb-1 tracking-wider">
                            Moderator
                          </p>
                          <p className="text-[13px] font-bold text-[var(--text-main)] leading-tight">
                            {plenary.moderator.name}
                          </p>
                          <p className="text-[11px] font-medium text-[var(--text-muted)] mt-0.5 leading-snug">
                            {plenary.moderator.qual}
                          </p>
                        </div>

                        <ul className="space-y-3 mt-4">
                          {plenary.speakers.map((speaker, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 leading-tight">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 opacity-50"></span>
                              <div className="flex flex-col">
                                <span className="font-bold text-[12px] text-[var(--text-main)]">
                                  {speaker.name}
                                </span>
                                <span className="text-[11px] font-medium text-[var(--text-muted)] mt-0.5 leading-snug opacity-90">
                                  {speaker.qual}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2.5">
                    {item.subsections.map((sub, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-xs md:text-[13px] text-[var(--text-muted)] flex items-start gap-3 leading-relaxed"
                      >
                        {sub.content && (
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 opacity-40"></span>
                        )}
                        <div>
                          {sub.label && (
                            <span className="font-bold text-[var(--text-main)] block mb-0.5">
                              {sub.label}
                            </span>
                          )}
                          <span
                            className={
                              sub.label
                                ? "opacity-90 italic text-[11px] md:text-xs"
                                : "font-medium"
                            }
                          >
                            {sub.content}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Parallel Sessions Block */}
        <div className="mt-20 pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                </span>
                Parallel Session
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-main)]">
                One-To-One Career Counselling
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-[var(--bg-main)] px-5 py-3 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
              <Clock size={20} className="text-[var(--primary)]" />
              <div>
                <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-tighter">
                  Available Timing
                </p>
                <p className="text-sm font-bold text-[var(--text-main)]">
                  11:15 AM — 04:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tableData.map((table) => {
              const IconComponent = iconMap[table.icon.displayName || table.icon.name];
              return (
                <div
                  key={table.id}
                  className="bg-[var(--bg-main)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="p-6 border-b border-[var(--border-subtle)] bg-gradient-to-r from-[var(--bg-secondary)] to-transparent flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)] font-bold text-xs border border-[var(--primary)]/10">
                          T{table.id}
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                          {table.title}
                        </h3>
                      </div>
                      <p className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wider ml-11">
                        {table.sub}
                      </p>
                    </div>
                    {IconComponent && (
                      <IconComponent size={32} className="opacity-10 group-hover:opacity-30 transition-opacity text-[var(--text-main)]" />
                    )}
                  </div>
                  <div className="p-6 space-y-5 flex-grow">
                    {table.experts.map((expert, idx) => (
                      <div key={idx} className="flex gap-4 group/item">
                        <div className="mt-1">
                          <div className="w-5 h-5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] group-hover/item:border-[var(--primary)] group-hover/item:text-[var(--primary)] transition-all">
                            <UserCheck size={10} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-[var(--text-main)] leading-tight mb-1">
                            {expert.name}
                          </h4>
                          <p className="text-[12px] text-[var(--text-muted)] leading-relaxed font-medium">
                            {expert.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSchedule;
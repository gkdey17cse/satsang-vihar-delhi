// src/pages/conference/components/ConferenceCommittee.jsx
import {
  ShieldCheck,
  Briefcase,
  Zap,
  Building,
  Microscope,
  Award,
  FileText,
  Lightbulb,
} from "lucide-react";

const ConferenceCommittee = ({
  advisoryCommittee,
  leadership,
  convenorsAndMembers,
}) => {
  return (
    <section id="committee" className="py-24 px-4 bg-[var(--bg-main)]">
      <div className="max-w-6xl mx-auto">
        {/* Advisory Committee */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[var(--primary)]/30"></span>
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">
                Guidance
              </span>
              <span className="h-px w-10 bg-[var(--primary)]/30"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-main)]">
              Advisory Committee
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryCommittee.map((advisor, i) => (
              <div
                key={i}
                className="p-6 text-center bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)] hover:shadow-md transition-all"
              >
                <div className="mx-auto w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--primary)]">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
                  {advisor.name}
                </h3>
                <p className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wide mb-2">
                  {advisor.role}
                </p>
                <p className="text-xs text-[var(--text-muted)] italic">
                  {advisor.inst}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div className="text-center mb-12 pt-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[var(--primary)]/30"></span>
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">
              Leadership & Execution
            </span>
            <span className="h-px w-10 bg-[var(--primary)]/30"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-main)] mb-6">
            Organising Committee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {leadership.map((person, i) => {
            const IconComponent = person.icon;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <IconComponent size={48} />
                </div>
                <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-3">
                  {person.role}
                </p>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-1">
                  {person.name}
                </h3>
                <p className="text-[13px] font-medium text-[var(--text-muted)] mb-4">
                  {person.designation}
                </p>
                <p className="text-[12px] leading-relaxed text-[var(--text-muted)] opacity-80">
                  {person.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-[var(--bg-secondary)]/40 rounded-3xl p-6 md:p-10 border border-[var(--border-subtle)]">
          <h4 className="text-center text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-[0.3em] mb-12">
            Convenors & Executive Members
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {convenorsAndMembers.map((member, i) => {
              const IconComponent = member.icon;
              return (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                    <IconComponent size={16} />
                  </div>
                  <div>
                    <h5 className="text-[16px] font-bold text-[var(--text-main)] leading-tight">
                      {member.name}
                    </h5>
                    <p className="text-[10px] font-bold text-[var(--primary)] uppercase mt-1 tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-[12px] text-[var(--text-muted)] mt-1.5 leading-snug font-medium">
                      {member.designation}
                    </p>
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

export default ConferenceCommittee;

// src/pages/conference/components/ConferenceObjectives.jsx
const ConferenceObjectives = () => {
  return (
    <section
      id="objectives"
      className="py-16 px-4 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Objectives */}
        <div className="bg-[var(--bg-secondary)] p-6 md:p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-5">
            Objectives of the Session
          </h3>
          <ul className="text-xs md:text-sm lg:text-base space-y-3 lg:space-y-4">
            {[
              "Providing expert career roadmaps across Government, Corporate, and Research domains",
              "Facilitating direct one-to-one mentorship with bureaucrats and industry leaders",
              "Equipping students with strategies for competitive exams and placements",
              "CV preparation and LinkedIn profile building",
              "Fostering mental resilience and focus for effective stress management",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[var(--primary)] font-bold text-base lg:text-lg">
                  •
                </span>
                <span className="text-[var(--text-muted)] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Perks */}
        <div className="bg-[var(--primary)] text-white p-6 md:p-8 rounded-2xl shadow-xl">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-5 text-white">
            Perks of Attending
          </h3>
          <ul className="text-xs md:text-sm lg:text-base space-y-3 lg:space-y-4">
            {[
              "Official Certificate of Participation for all attendees",
              "Exclusive Delegate Kit & Resource Materials",
              "Personalized Resume Review & Career Profiling",
              "Direct Q&A with IAS, IES officers, and Global Scientists",
              "Complimentary Lunch & Refreshments for registered participants",
              "Full Access: 100% Free Entry",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-white/20 p-1 rounded-full text-[10px] lg:text-xs">
                  ✓
                </span>
                <span className="text-white/90 font-medium leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConferenceObjectives;
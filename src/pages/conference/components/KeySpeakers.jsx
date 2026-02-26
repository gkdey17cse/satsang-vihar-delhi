// src/pages/conference/components/KeySpeakers.jsx
const KeySpeakers = ({ speakerCategories }) => {
  return (
    <section
      id="speakers"
      className="py-12 lg:py-20 px-4 bg-[var(--bg-tertiary)] border-y border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-main)] mb-3">
            Key Speakers & Counsellors
          </h2>
          <p className="text-[var(--text-muted)] text-xs md:text-sm lg:text-base max-w-2xl mx-auto">
            Eminent scientists, civil servants, academicians, industry leaders,
            and subject experts from India and abroad.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {speakerCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--primary)] mb-5 border-l-4 border-[var(--primary)] pl-3 lg:pl-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {cat.speakers.map((speaker, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-[var(--bg-main)] p-4 lg:p-6 rounded-xl border border-[var(--border-subtle)] hover:shadow-md transition-shadow flex items-start gap-3 lg:gap-4"
                  >
                    <div className="mt-1.5 min-w-[8px] h-[8px] lg:min-w-[10px] lg:h-[10px] rounded-full bg-[var(--primary)]"></div>
                    <div>
                      <h4 className="font-bold text-[var(--text-main)] text-sm md:text-base lg:text-lg leading-tight mb-1 lg:mb-1.5">
                        {speaker.name}
                      </h4>
                      <p className="text-[11px] md:text-xs lg:text-sm font-semibold text-[var(--text-muted)] opacity-90 mb-1">
                        {speaker.role}
                      </p>
                      <p className="text-[10px] md:text-[11px] lg:text-xs text-[var(--text-muted)] italic leading-tight">
                        {speaker.inst}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySpeakers;
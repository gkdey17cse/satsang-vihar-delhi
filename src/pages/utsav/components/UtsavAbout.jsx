export const UtsavAbout = ({ title, paragraphs, quote }) => {
  return (
    <section id="about" className="py-20 px-4 bg-[var(--bg-secondary)] ">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30">
          <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest">
            Welcome
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-8">
          {title}
        </h2>
        <div className="prose prose-lg mx-auto text-[var(--text-muted)]">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-lg md:text-xl leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
          <div className="bg-[var(--bg-tertiary)] p-8 rounded-2xl my-10 border border-[var(--border-subtle)] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] text-white px-4 py-1 rounded-full text-xs font-bold">
              Eternal Wisdom
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-[var(--primary)] mb-4">
              "{quote.text}"
            </p>
            <p className="text-sm text-[var(--text-muted)]">— {quote.author}</p>
          </div>
          <p className="text-3xl font-bold text-[var(--primary)] mt-8">
            Vande Purushottamam!
          </p>
        </div>
      </div>
    </section>
  );
};

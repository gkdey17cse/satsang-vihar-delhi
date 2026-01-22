const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-[var(--bg-tertiary)] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-main)] opacity-100"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--text-main)] mb-4 tracking-tight">
          Being and <span className="text-[var(--primary)]">Becoming</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8 font-light italic max-w-3xl mx-auto leading-relaxed">
          "To fulfill the mission of life and growth with every free access... entering in a common platform conjointly to serve one another—that is a blessed Socio-communistic Democratic Congress."
        </p>

        {/* Dynamic Vani Box */}
        <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-[var(--primary)] inline-block max-w-2xl mb-10">
          <p className="italic text-[var(--text-brand-deep)] font-medium text-lg">
            "Fusional adherence that evolves into being with respective becoming—is life."
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-full text-md font-bold transition-all shadow-lg transform hover:-translate-y-1">
            Install Him with Love
          </button>
          <span className="text-[var(--text-muted)] text-sm italic mt-2 sm:mt-0">
            "Where love concentrates, there the being dwells."
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-[var(--bg-tertiary)] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-main)] opacity-100"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--text-main)] mb-6 tracking-tight">
          Being and <span className="text-[var(--primary)]">Becoming</span>.
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-10 font-light max-w-2xl mx-auto">
          Experience the path of Sahaj-Yog under the guidance of Sri Sri Thakur
          Anukulchandra.
        </p>

        {/* Vani of the Day */}
        <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-[var(--primary)] inline-block max-w-2xl">
          <p className="italic text-[var(--text-brand-deep)] font-medium">
            "Do not be vaguely loud; do not be vaguely silent; speak the truth, and speak it pleasantly."
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
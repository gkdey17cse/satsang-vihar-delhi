// src/sections/Mission.jsx
import { Link } from "react-router-dom";
// Ensure you have this image in your assets or use a placeholder
import DeogharAshram from "../assets/Photos/SatsangDeoghar.png";

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: 1:1 Aspect Image (Satsang Ashram Deoghar) */}
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl border border-[var(--border-subtle)]">
              <img
                src={DeogharAshram}
                alt="Satsang Ashram Deoghar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Subtle Label */}
            <p className="mt-4 text-sm text-[var(--text-muted)] italic text-center">
              The Divine Source: Satsang Ashram, Deoghar
            </p>
          </div>

          {/* Right Side: Ideology Content */}
          <div className="text-justify order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-4">
              Our Philosophy
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-6 leading-tight">
              Being and <span className="text-[var(--primary)]">Becoming</span>
            </h3>

            <div className="space-y-6 text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                The ideology of Satsang is a comprehensive, life-centric
                philosophy focusing on the balanced development of the
                individual — physically, mentally and spiritually.
              </p>

              <div className="border-l-4 border-[var(--primary)] pl-6 py-2 bg-[var(--bg-secondary)]/30">
                <p className="italic font-medium text-[var(--text-main)] text-sm lg:text-base">
                  "To uphold one's life and growth with that of others is
                  Dharma."
                  <span className="block mt-2 text-xs lg:text-sm text-[var(--text-muted)] opacity-70 font-sans">
                    — Sree Sree Thakur Anukulchandra, Satyanusaran
                  </span>
                </p>
              </div>

              <p>
                Centered around the Living Ideal, we practice{" "}
                <strong>Yajan</strong> (Self-adjustment),
                <strong> Yaajan</strong> (Nurturing others), and{" "}
                <strong>Ishtabhriti</strong> (Daily love-offering) to transform
                negative passions into constructive energy for universal
                well-being.
              </p>

              <p className="font-semibold text-[var(--text-main)]">
                Satsang Vihar New Delhi is an integral branch, completely
                attached and dedicated to the spiritual lineage and
                administrative guidance of{" "}
                <span className="text-[var(--primary)]">
                  Satsang Ashram, Deoghar
                </span>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-2 lg:gap-4">
              <a
                href="https://www.satsang.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 lg:py-4 rounded-full font-bold transition-all shadow-md"
              >
                Visit Official Website
              </a>
              <Link
                to="/history"
                className="border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-main)] px-8 py-3 lg:py-4 rounded-full font-bold transition-all"
              >
                Learn Our History
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Summary Bar (Minimalist) */}
        <div className="mt-8 pt-10 text-center">
          <p className="text-xs lg:text-sm uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium">
            Synthesis of Science & Spirituality • Universalism • Social Reform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;

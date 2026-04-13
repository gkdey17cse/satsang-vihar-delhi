import { MapPin, Navigation } from "lucide-react";

export const UtsavVenueAndSupport = ({
  address,
  metro,
  busStop,
  busRoutes,
  mapUrl,
  mapDirectionsUrl,
}) => {
  return (
    <>
      <section id="venue" className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
              Venue & Directions
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg border border-[var(--border-subtle)]">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Address
                </h3>
                <p
                  className="text-[var(--text-muted)] text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: address }}
                />
              </div>
              <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg border border-[var(--border-subtle)]">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                  <Navigation className="w-5 h-5" /> How to Reach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🚇</span>
                    <div>
                      <p className="font-semibold text-[var(--text-main)]">
                        Metro:
                      </p>
                      <p className="text-[var(--text-muted)]">
                        Nearest Station:{" "}
                        <span className="font-medium text-[var(--primary)]">
                          {metro}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🚌</span>
                    <div>
                      <p className="font-semibold text-[var(--text-main)]">
                        Bus:
                      </p>
                      <p className="text-[var(--text-muted)]">
                        Stop: {busStop}
                      </p>
                      <p className="text-[var(--text-muted)] text-sm mt-1">
                        Routes: {busRoutes.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-[var(--border-subtle)]">
                    <a
                      href={mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-auto flex items-center justify-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-4 rounded-xl font-bold transition-all shadow-lg transform active:scale-[0.98]"
                    >
                      <Navigation className="w-5 h-5 rotate-45" /> Get Live
                      Route
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-subtle)]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[var(--bg-tertiary)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-6">
            Support the Utsav
          </h2>
          <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-xl border border-[var(--border-subtle)]">
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              The Utsav Organising Committee humbly welcomes all forms of
              donations, including festival offerings, grains, and vegetables
              for the Bhandara.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                Festival Offerings
              </span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                Grains
              </span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                Vegetables
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

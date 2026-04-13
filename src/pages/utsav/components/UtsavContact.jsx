import { Phone, HelpCircle, Users, Clock } from "lucide-react";

export const UtsavContact = ({
  committee,
  mainPhone,
  numbers, // FIXED: This now exactly matches the 'numbers' key in your data
  infoBlocks,
}) => {
  // Defensive checks to absolutely guarantee the component never crashes
  const safeCommittee = committee || {};
  const safeNumbers = Array.isArray(numbers) ? numbers : [];
  const safeInfoBlocks = Array.isArray(infoBlocks) ? infoBlocks : [];

  return (
    <section id="contact" className="py-20 px-4 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Organizing Committee Card */}
          <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-xl border border-[var(--border-subtle)]">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">
              Organizing Committee
            </h3>

            <div className="mb-8">
              <p className="text-lg font-semibold text-[var(--text-main)]">
                {safeCommittee.name || "Committee Name"}
              </p>
              <p className="text-[var(--text-muted)]">
                {safeCommittee.role || "Committee Role"}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg font-semibold text-[var(--text-main)] mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[var(--primary)]" /> Contact Numbers
              </p>

              <div className="grid grid-cols-2 gap-3">
                {safeNumbers.slice(0, 8).map((number, index) => (
                  <a
                    key={index}
                    href={`tel:${number}`}
                    className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {number}
                  </a>
                ))}
              </div>

              {safeNumbers.length > 8 && (
                <details className="mt-4">
                  <summary className="text-[var(--primary)] cursor-pointer text-sm font-semibold">
                    View More Numbers
                  </summary>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {safeNumbers.slice(8).map((number, index) => (
                      <a
                        key={index}
                        href={`tel:${number}`}
                        className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </details>
              )}
            </div>

            <div>
              <p className="text-lg font-semibold text-[var(--text-main)] mb-2">
                Phone
              </p>
              <a
                href={`tel:${mainPhone || ""}`}
                className="text-[var(--primary)] text-xl font-bold"
              >
                {mainPhone || "Phone Number"}
              </a>
            </div>
          </div>

          {/* Important Information Card */}
          <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-xl border border-[var(--border-subtle)]">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">
              Important Information
            </h3>
            <div className="space-y-6">
              {safeInfoBlocks.map((info, idx) => (
                <div key={idx} className="flex gap-4">
                  {idx === 0 && (
                    <HelpCircle className="w-6 h-6 text-[var(--primary)] shrink-0" />
                  )}
                  {idx === 1 && (
                    <Users className="w-6 h-6 text-[var(--primary)] shrink-0" />
                  )}
                  {idx >= 2 && (
                    <Clock className="w-6 h-6 text-[var(--primary)] shrink-0" />
                  )}
                  <div>
                    <h4 className="font-bold text-[var(--text-main)]">
                      {info.title || ""}
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm">
                      {info.desc || ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
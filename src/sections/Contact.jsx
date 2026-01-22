// src/sections/Contact.jsx
const Contact = () => {
  const address = "Delhi Satsang Vihar, A-14/15, Delhi Satsang Vihar Marg, Qutab Institutional Area, New Delhi.";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.666453669886!2d77.18241697528574!3d28.54974397571004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b9b3b3b3%3A0x6b3b3b3b3b3b3b3b!2sSatsang%20Vihar%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="relative min-h-[750px] flex items-center border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Satsang Vihar Delhi Map Location"
        ></iframe>
      </div>

      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="w-full max-w-xl bg-[var(--bg-main)] p-8 md:p-10 rounded-lg shadow-2xl border border-[var(--border-subtle)] my-12">
          
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-8 border-b border-[var(--primary)] pb-2 uppercase tracking-wide">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[var(--primary)] uppercase mb-2">Address</h3>
              <p className="text-[var(--text-main)] text-sm leading-relaxed">
                Delhi Satsang Vihar, A-14/15,<br />
                Delhi Satsang Vihar Marg,<br />
                Qutab Institutional Area, New Delhi.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[var(--primary)] uppercase mb-2">Contact Persons</h3>
              <p className="text-[var(--text-main)] text-sm mb-1">Sri J.N. Mahanty (S.P.R) </p>
              <p className="text-[var(--text-main)] text-sm">Mr. Maheshwar Das (S.P.R) </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-[var(--text-muted)] font-medium">Telephone:</span>
                <span className="text-sm text-[var(--text-main)] font-semibold">011 41830063</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[var(--text-muted)] font-medium">Mobile:</span>
                <span className="text-sm text-[var(--text-main)] font-semibold">09811148043</span>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] p-4 rounded border border-[var(--border-subtle)]">
              <h3 className="text-xs font-bold text-[var(--text-main)] uppercase mb-3 tracking-tighter">
                Directions from New Delhi Railway Station
              </h3>
              <div className="text-[12px] text-[var(--text-muted)] leading-relaxed space-y-2">
                <p>Take Bus Route No. 505 from Ajmeri Gate towards Mehrauli.</p>
                <p>Alight at Adhchini Bus Stop. Board a bus heading toward Katwaria Sarai.</p>
              </div>
            </div>

            <div className="pt-4 text-center">
               <p className="text-xs lg:text-sm font-medium text-[var(--primary)] italic">
                 "Peace, Peace, Peace — Be Ye Peaceful!"
               </p>
               <span className="block mt-1 text-[10px] text-[var(--text-muted)] opacity-70">
                 — Sree Sree Thakur Anukulchandra, Satyanusaran
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
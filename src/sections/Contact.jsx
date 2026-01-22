// src/sections/Contact.jsx
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[700px] flex items-center justify-center border-t border-[var(--border-subtle)]"
    >
      {/* 1. Background Google Maps Iframe */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.066454357626!2d77.1234567890!3d28.6273829123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzM4LjYiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1633024000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }} // Added filter for a subtler look
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 2. Foreground Contact Info Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[var(--text-main)] mb-8 drop-shadow-md">
          Contact Us
        </h2>

        {/* Added backdrop-blur and slightly transparent background */}
        <div className="bg-[var(--bg-secondary)]/95 backdrop-blur-md p-10 rounded-2xl shadow-2xl border-t-4 border-[var(--primary)]">
          <p className="text-xl italic text-[var(--text-muted)] mb-8 leading-relaxed">
            "Shout, cheer up—be unquivered and attached by your tendril of
            passion to the Ideal, the Beloved—whose love enters unquestionably
            top to bottom."
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-bold text-[var(--text-main)] mb-2">
                Visit Us
              </h3>
              <p className="text-[var(--text-muted)]">
                Satsang Vihar New Delhi
                <br />
                [Insert Actual Address Line 1]
                <br />
                New Delhi, India
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-main)] mb-2">
                Connect
              </h3>
              <p className="text-[var(--text-muted)]">
                Email: contact@satsangdelhi.org
                <br />
                Phone: +91 98765 43210
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border-subtle)]">
            <h3 className="text-2xl font-bold text-[var(--primary)] uppercase tracking-widest">
              Peace, Peace, Peace — Be Ye Peaceful!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[var(--bg-main)] border-t border-[var(--border-subtle)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold text-[var(--text-main)] mb-8">Contact Us</h2>
        
        <div className="bg-[var(--bg-secondary)] p-10 rounded-2xl shadow-lg border-t-4 border-[var(--primary)]">
          <p className="text-xl italic text-[var(--text-muted)] mb-8 leading-relaxed">
            "Shout, cheer up—be unquivered and attached by your tendril of passion to the Ideal, the Beloved—whose love enters unquestionably top to bottom."
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-bold text-[var(--text-main)] mb-2">Visit Us</h3>
              <p className="text-[var(--text-muted)]">
                Satsang Vihar New Delhi<br/>
                [Insert Actual Address Line 1]<br/>
                New Delhi, India
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-main)] mb-2">Connect</h3>
              <p className="text-[var(--text-muted)]">
                Email: contact@satsangdelhi.org<br/>
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
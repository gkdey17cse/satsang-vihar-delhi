import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Mission from "../sections/Mission";
// import Events from '../sections/Events';
// import Kendras from '../sections/Kendras';
// import Contact from '../sections/Contact';

const HomeSPA = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        
        {/* Placeholder: Events (Uses Secondary Background) */}
        <section
          id="events"
          className="min-h-[50vh] bg-[var(--bg-secondary)] flex items-center justify-center border-t border-[var(--border-subtle)]"
        >
          <h2 className="text-3xl text-[var(--text-muted)]">Events Section (Secondary BG)</h2>
        </section>

        {/* Placeholder: Kendras (Uses Tertiary Background) */}
        <section
          id="kendras"
          className="min-h-[50vh] bg-[var(--bg-tertiary)] flex items-center justify-center border-t border-[var(--border-subtle)]"
        >
          <h2 className="text-3xl text-[var(--text-brand-deep)]">Kendras Section (Tertiary BG)</h2>
        </section>

        {/* Placeholder: Contact (Uses Main Background) */}
        <section
          id="contact"
          className="min-h-[50vh] bg-[var(--bg-main)] flex items-center justify-center border-t border-[var(--border-subtle)]"
        >
          <h2 className="text-3xl text-[var(--text-main)]">Contact Section (Main BG)</h2>
        </section>
      </main>
      
      <footer className="p-6 text-center bg-[var(--text-main)] text-[var(--bg-main)]">
        &copy; 2026 Satsang Vihar New Delhi
      </footer>
    </div>
  );
};
export default HomeSPA;
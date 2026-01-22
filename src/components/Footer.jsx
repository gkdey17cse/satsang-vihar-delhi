const Footer = () => {
  return (
    <footer className="bg-[var(--color-neutral-900)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg font-medium text-[var(--color-brand-200)] mb-4">
          "God is for all, Prophets are for all, no compartment... to create ism
          is the Satanic dissuasion of people from unity."
        </p>
        <div className="flex justify-center gap-6 text-sm text-[var(--color-neutral-400)] mt-8">
          <a href="#" className="hover:text-white transition-colors">
            Adherence
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Becoming
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Concord
          </a>
        </div>
        <p className="text-xs text-[var(--text-primary)] mt-8">
          © 2026 Satsang Vihar New Delhi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

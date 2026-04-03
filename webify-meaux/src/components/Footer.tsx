const footerNav = {
  navigation: [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Méthode", href: "#methode" },
    { label: "Avis", href: "#avis" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Création de site vitrine", href: "#services" },
    { label: "Refonte de site", href: "#services" },
    { label: "Landing page", href: "#services" },
    { label: "Site artisan / indépendant", href: "#services" },
    { label: "Optimisation SEO local", href: "#services" },
    { label: "Maintenance", href: "#services" },
  ],
  contact: [
    { label: "contact@webifymeaux.fr", href: "mailto:contact@webifymeaux.fr" },
    { label: "01 23 45 67 89", href: "tel:+33123456789" },
    { label: "Meaux — Seine-et-Marne", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-[var(--font-heading)] font-bold text-xl text-white">
                WEBIFY
              </span>
              <span className="font-[var(--font-heading)] font-medium text-sm text-cta ml-1 tracking-wider uppercase">
                Meaux
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Studio de création de sites internet premium à Meaux.
              Nous accompagnons entreprises, indépendants et particuliers vers
              une présence web à la hauteur de leur activité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerNav.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {footerNav.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 WEBIFY MEAUX — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Mentions légales
            </a>
            <span className="text-white/20">•</span>
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

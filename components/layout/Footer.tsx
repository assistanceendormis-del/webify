import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Avis clients", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

const zones = [
  "Meaux",
  "Chessy",
  "Lagny-sur-Marne",
  "Bussy-Saint-Georges",
  "Claye-Souilly",
  "Trilport",
  "Esbly",
  "Serris",
];

export default function Footer() {
  return (
    <footer className="border-t border-body/10 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#accueil" className="text-xl font-bold">
              <span className="text-primary">Webify</span>
              <span className="text-title"> Meaux</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Votre partenaire digital pour des résultats concrets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-title">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-title">
              Zones d&apos;intervention
            </h4>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li key={zone} className="text-sm text-body">
                  {zone}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-body/10 pt-6 text-center">
          <p className="text-xs text-body/60">
            © 2025 Webify Meaux – Tous droits réservés
          </p>
        </div>
      </Container>
    </footer>
  );
}

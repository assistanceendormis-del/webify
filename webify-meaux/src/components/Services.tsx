import {
  Globe,
  RefreshCw,
  FileText,
  Wrench,
  Building2,
  User,
  Search,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de site vitrine",
    desc: "Un site élégant et professionnel pour présenter votre activité avec impact.",
    benefit: "Crédibilité immédiate",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site existant",
    desc: "Moderniser un site vieillissant pour retrouver une image professionnelle et actuelle.",
    benefit: "Image modernisée",
  },
  {
    icon: FileText,
    title: "Landing page",
    desc: "Une page ciblée et optimisée pour convertir vos visiteurs en prospects.",
    benefit: "Conversion maximisée",
  },
  {
    icon: Wrench,
    title: "Site pour artisan / indépendant",
    desc: "Un site clair et rassurant, pensé pour les artisans et les indépendants qui veulent être visibles.",
    benefit: "Visibilité locale",
  },
  {
    icon: Building2,
    title: "Site pour entreprise locale",
    desc: "Une vitrine digitale structurée qui valorise votre entreprise auprès de vos clients locaux.",
    benefit: "Présence renforcée",
  },
  {
    icon: User,
    title: "Site pour particulier",
    desc: "Un site personnel soigné pour un projet, un portfolio ou une passion.",
    benefit: "Projet valorisé",
  },
  {
    icon: Search,
    title: "Optimisation SEO local",
    desc: "Être trouvé par vos clients potentiels dans votre zone géographique.",
    benefit: "Clients locaux",
  },
  {
    icon: Settings,
    title: "Maintenance et accompagnement",
    desc: "Un suivi régulier pour que votre site reste performant, sécurisé et à jour.",
    benefit: "Sérénité totale",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Nos services
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Nos services
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Des solutions web conçues pour mieux présenter votre activité et
            générer des résultats concrets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-cta/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-cta/15 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-cta transition-colors" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-text text-base mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cta uppercase tracking-wider">
                  {service.benefit}
                </span>
                <a
                  href="#contact"
                  className="text-xs font-medium text-primary hover:text-cta transition-colors inline-flex items-center gap-1"
                >
                  Devis
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

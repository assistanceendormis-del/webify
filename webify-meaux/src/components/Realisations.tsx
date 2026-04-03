import { ExternalLink } from "lucide-react";

const projects = [
  {
    type: "Artisan local",
    title: "Menuisier — Meaux",
    objective: "Gagner en visibilité locale et inspirer confiance",
    solution: "Site vitrine premium avec galerie de réalisations et SEO local",
    result: "Image professionnelle renforcée, demandes de devis en hausse",
    color: "bg-primary/8",
    accent: "text-primary",
  },
  {
    type: "Cabinet de conseil",
    title: "Cabinet RH — Paris Est",
    objective: "Clarifier l'offre et rassurer les prospects",
    solution: "Site structuré avec parcours client clair et témoignages",
    result: "Taux de prise de contact multiplié, image repositionnée",
    color: "bg-cta/15",
    accent: "text-cta",
  },
  {
    type: "Commerce",
    title: "Boutique déco — Meaux",
    objective: "Attirer une clientèle locale et présenter les collections",
    solution: "Site élégant avec visuels soignés et intégration Google Maps",
    result: "Trafic en magasin augmenté, présence digitale cohérente",
    color: "bg-primary/8",
    accent: "text-primary",
  },
  {
    type: "Coach indépendant",
    title: "Coach bien-être — Seine-et-Marne",
    objective: "Poser une image crédible et obtenir des réservations",
    solution: "Landing page premium avec témoignages et prise de rendez-vous",
    result: "Agenda rempli, image perçue nettement améliorée",
    color: "bg-cta/15",
    accent: "text-cta",
  },
  {
    type: "Projet premium",
    title: "Photographe — Île-de-France",
    objective: "Mettre en valeur un portfolio haut de gamme",
    solution: "Site galerie avec navigation immersive et chargement optimisé",
    result: "Portfolio professionnel, nouvelles collaborations décrochées",
    color: "bg-primary/8",
    accent: "text-primary",
  },
  {
    type: "PME locale",
    title: "Entreprise BTP — Meaux",
    objective: "Renforcer la crédibilité face à la concurrence",
    solution: "Site vitrine corporate avec réalisations et chiffres clés",
    result: "Image institutionnelle crédible, appels d'offres remportés",
    color: "bg-cta/15",
    accent: "text-cta",
  },
];

export default function Realisations() {
  return (
    <section id="realisations" className="bg-accent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Portfolio
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Quelques réalisations récentes
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Des sites pensés pour renforcer l&apos;image, clarifier l&apos;offre
            et rassurer dès les premières secondes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Mockup preview */}
              <div className={`${project.color} p-6 relative`}>
                <div className="bg-white rounded-lg shadow-sm p-4 space-y-2">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-300" />
                    <div className="w-2 h-2 rounded-full bg-yellow-300" />
                    <div className="w-2 h-2 rounded-full bg-green-300" />
                  </div>
                  <div className="h-2 bg-primary/10 rounded-full w-1/3" />
                  <div className="h-4 bg-primary/8 rounded w-3/4" />
                  <div className="h-2 bg-text-secondary/10 rounded-full w-full" />
                  <div className="h-2 bg-text-secondary/10 rounded-full w-2/3" />
                  <div className="flex gap-2 mt-2">
                    <div className="h-6 bg-cta/20 rounded w-16" />
                    <div className="h-6 bg-primary/8 rounded w-16" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${project.accent}`}
                  >
                    {project.type}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] font-semibold text-text text-lg mb-3">
                  {project.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-text-secondary">
                    <span className="font-medium text-text">Objectif : </span>
                    {project.objective}
                  </p>
                  <p className="text-text-secondary">
                    <span className="font-medium text-text">Solution : </span>
                    {project.solution}
                  </p>
                  <p className="text-text-secondary">
                    <span className="font-medium text-text">Résultat : </span>
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

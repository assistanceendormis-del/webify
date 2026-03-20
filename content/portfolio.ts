export interface Project {
  title: string;
  location: string;
  sector: string;
  description: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Plombier chauffagiste Meaux",
    location: "Meaux",
    sector: "Artisanat BTP",
    description:
      "Création d'un site vitrine moderne avec prise de rendez-vous en ligne. Résultat : +65 % de demandes de devis en 3 mois.",
    slug: "plombier-meaux",
  },
  {
    title: "Cabinet comptable Lagny-sur-Marne",
    location: "Lagny-sur-Marne",
    sector: "Finance",
    description:
      "Refonte complète du site avec mise en avant des expertises et formulaire de contact qualifié. Image professionnelle renforcée.",
    slug: "cabinet-comptable-lagny",
  },
  {
    title: "Coach sportif Chessy",
    location: "Chessy",
    sector: "Sport & Bien-être",
    description:
      "Landing page de conversion pour des programmes d'entraînement en ligne. Taux de conversion multiplié par 3 en un mois.",
    slug: "coach-sportif-chessy",
  },
  {
    title: "Boulangerie Nanteuil-lès-Meaux",
    location: "Nanteuil-lès-Meaux",
    sector: "Commerce local",
    description:
      "Site vitrine avec menu interactif et localisation Google Maps. Augmentation de la visibilité locale et du trafic en boutique.",
    slug: "boulangerie-nanteuil",
  },
];

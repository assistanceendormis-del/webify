export interface Testimonial {
  name: string;
  role: string;
  city: string;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sophie Martin",
    role: "Fleuriste",
    city: "Meaux",
    text: "Grâce à Webify Meaux, mon site attire enfin des clients. En deux mois, j'ai reçu plus de demandes via internet que durant toute l'année précédente. Un vrai tournant pour ma boutique.",
    initials: "SM",
  },
  {
    name: "Thomas Bertin",
    role: "Plombier indépendant",
    city: "Trilport",
    text: "Je ne croyais pas qu'un site web pouvait faire une telle différence. Aujourd'hui, 70 % de mes nouveaux clients me trouvent sur Google. L'équipe a été à l'écoute et très réactive.",
    initials: "TB",
  },
  {
    name: "Julie Leconte",
    role: "Gérante boutique mode",
    city: "Lagny-sur-Marne",
    text: "Un site élégant, rapide et qui me ressemble. Mes clientes me disent souvent qu'elles ont été séduites par le site avant même de pousser la porte de la boutique.",
    initials: "JL",
  },
  {
    name: "Marc Dupont",
    role: "Kinésithérapeute",
    city: "Claye-Souilly",
    text: "Webify Meaux a compris exactement ce dont j'avais besoin. Mon agenda se remplit désormais grâce à la prise de rendez-vous en ligne. Simple, efficace, professionnel.",
    initials: "MD",
  },
  {
    name: "Nadia Haddad",
    role: "Auto-entrepreneuse coach",
    city: "Chessy",
    text: "Ma landing page convertit remarquablement bien. En un mois, j'ai doublé mes inscriptions à mes programmes. L'investissement est largement rentabilisé.",
    initials: "NH",
  },
  {
    name: "Pierre Renaud",
    role: "Gérant PME BTP",
    city: "Meaux",
    text: "Enfin une agence web qui parle notre langue. Pas de jargon inutile, des résultats concrets. Notre site génère maintenant des appels qualifiés chaque semaine.",
    initials: "PR",
  },
];

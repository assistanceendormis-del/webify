import {
  Globe,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  ClipboardList,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "site-vitrine",
    title: "Création de site vitrine",
    description:
      "Un site professionnel qui reflète votre savoir-faire et convertit vos visiteurs en clients. Design sur-mesure, responsive et optimisé pour le référencement local.",
    icon: Globe,
  },
  {
    id: "refonte",
    title: "Refonte de site internet",
    description:
      "Votre site actuel ne génère pas de résultats ? Nous le transformons en un outil de croissance moderne, rapide et pensé pour convertir.",
    icon: RefreshCw,
  },
  {
    id: "landing-page",
    title: "Landing page conversion",
    description:
      "Des pages d'atterrissage conçues pour maximiser vos conversions. Idéales pour vos campagnes publicitaires et vos offres spéciales.",
    icon: Rocket,
  },
  {
    id: "seo-local",
    title: "SEO local Meaux",
    description:
      "Apparaissez en premier sur Google quand vos clients recherchent vos services à Meaux et en Seine-et-Marne. Stratégie locale ciblée et mesurable.",
    icon: Search,
  },
  {
    id: "maintenance",
    title: "Maintenance & optimisation",
    description:
      "Mises à jour, sécurité, performances : nous veillons au bon fonctionnement de votre site pour que vous puissiez vous concentrer sur votre activité.",
    icon: Shield,
  },
  {
    id: "audit",
    title: "Audit site internet",
    description:
      "Un diagnostic complet de votre site : vitesse, SEO, ergonomie, conversion. Identifiez les freins qui coûtent des clients et recevez un plan d'action concret.",
    icon: ClipboardList,
  },
];

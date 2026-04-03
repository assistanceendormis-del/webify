import { Award, Eye, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Une meilleure image",
    desc: "Votre site reflète enfin le niveau de qualité de vos services. Vos visiteurs perçoivent immédiatement votre professionnalisme.",
    stat: "Première impression",
  },
  {
    icon: Eye,
    title: "Un message plus clair",
    desc: "Votre offre est comprise en quelques secondes. Vos visiteurs savent exactement ce que vous proposez et pourquoi vous choisir.",
    stat: "Clarté absolue",
  },
  {
    icon: Shield,
    title: "Une présence plus sérieuse",
    desc: "Un site bien conçu renforce la crédibilité de votre activité et vous distingue nettement de la concurrence.",
    stat: "Crédibilité renforcée",
  },
  {
    icon: TrendingUp,
    title: "Plus de demandes qualifiées",
    desc: "Un site structuré pour convertir transforme vos visiteurs en prospects. Plus de demandes de devis, plus d'appels, plus de clients.",
    stat: "Résultats concrets",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Impact
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Ce qu&apos;un bon site change concrètement
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Un site bien pensé ne fait pas que « faire joli ». Il transforme la
            perception de votre activité et génère des résultats mesurables.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-accent rounded-2xl p-8 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-[var(--font-heading)] font-semibold text-text text-lg">
                      {benefit.title}
                    </h3>
                    <span className="text-xs font-semibold text-cta bg-cta/10 px-2.5 py-1 rounded-full">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.desc}
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

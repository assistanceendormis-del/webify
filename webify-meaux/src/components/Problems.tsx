import { Frown, MessageCircleOff, ShieldOff, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Frown,
    title: "Un design dépassé",
    desc: "Votre site donne une image vieillissante qui ne reflète pas la qualité de ce que vous faites.",
  },
  {
    icon: MessageCircleOff,
    title: "Un message peu clair",
    desc: "Vos visiteurs ne comprennent pas immédiatement ce que vous proposez ni pourquoi vous choisir.",
  },
  {
    icon: ShieldOff,
    title: "Un manque de confiance",
    desc: "L'apparence de votre site n'inspire pas suffisamment de crédibilité pour déclencher une prise de contact.",
  },
  {
    icon: TrendingDown,
    title: "Peu de demandes",
    desc: "Votre site existe, mais il ne génère pas les demandes de devis ou les appels que vous attendez.",
  },
];

export default function Problems() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Votre site ne reflète pas encore vraiment la qualité de votre
            activité ?
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Un site daté, flou ou mal structuré nuit à votre crédibilité. Vos
            visiteurs jugent votre professionnalisme en quelques secondes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-accent rounded-2xl p-6 border border-border hover:border-cta/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-text text-base mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

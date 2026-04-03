import { MessageSquare, Layout, Code, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Échange sur vos besoins",
    desc: "Nous discutons de votre projet, vos objectifs et votre identité pour définir ensemble la direction à suivre.",
  },
  {
    num: "02",
    icon: Layout,
    title: "Structure et direction visuelle",
    desc: "Nous construisons l'architecture du site et définissons le style graphique adapté à votre image.",
  },
  {
    num: "03",
    icon: Code,
    title: "Design et intégration",
    desc: "Nous créons le design final et développons votre site avec les meilleures technologies actuelles.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Mise en ligne et ajustements",
    desc: "Votre site est mis en ligne après validation. Nous restons disponibles pour les ajustements nécessaires.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Notre méthode
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Une méthode simple, fluide et efficace
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Quatre étapes claires pour passer de votre idée à un site
            professionnel en ligne.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="bg-accent rounded-2xl p-6 border border-border h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[var(--font-heading)] text-3xl font-bold text-cta/40">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-[var(--font-heading)] font-semibold text-text text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

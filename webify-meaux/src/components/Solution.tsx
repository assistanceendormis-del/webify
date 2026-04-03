import { Check } from "lucide-react";

const benefits = [
  "Un design premium, actuel et aligné avec votre image",
  "Une navigation intuitive qui guide vos visiteurs",
  "Un message clair qui met en valeur votre offre",
  "Une crédibilité renforcée dès la première impression",
  "Une structure pensée pour déclencher des demandes",
  "Un site responsive parfait sur tous les écrans",
];

export default function Solution() {
  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <div className="w-2 h-2 bg-cta rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Notre solution
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
              Un site plus clair et plus structuré peut transformer la perception
              de votre activité
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Nous créons des sites qui inspirent confiance dès les premières
              secondes. Un design soigné, un message clair et une structure
              pensée pour convertir vos visiteurs en clients.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cta/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-cta" />
                  </div>
                  <span className="text-text text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-lg shadow-primary/5">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-cta/15 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-cta">01</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-heading)] font-semibold text-text">
                      Image professionnelle
                    </p>
                    <p className="text-sm text-text-secondary">
                      Un rendu haut de gamme
                    </p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">02</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-heading)] font-semibold text-text">
                      Message lisible
                    </p>
                    <p className="text-sm text-text-secondary">
                      Votre offre comprise en 5 secondes
                    </p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-cta/15 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-cta">03</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-heading)] font-semibold text-text">
                      Résultats concrets
                    </p>
                    <p className="text-sm text-text-secondary">
                      Plus de demandes qualifiées
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

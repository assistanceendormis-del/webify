import { ArrowRight } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
          Vous voulez un site plus moderne, plus clair et plus crédible ?
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Parlons de votre projet et imaginons une présence web à la hauteur de
          votre activité.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-text font-semibold rounded-xl hover:bg-cta-hover transition-colors text-base"
        >
          Demander un devis
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

"use client";

import {
  Monitor,
  Smartphone,
  Search,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const proofs = [
  { icon: Sparkles, label: "Site sur mesure" },
  { icon: Smartphone, label: "Responsive" },
  { icon: Search, label: "SEO local" },
  { icon: Monitor, label: "Design premium" },
];

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
              <div className="w-2 h-2 bg-cta rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Studio de création de sites internet
              </span>
            </div>

            <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-text mb-6">
              Des sites web premium qui inspirent{" "}
              <span className="text-primary">confiance</span> et génèrent des{" "}
              <span className="text-primary">demandes</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              WEBIFY MEAUX accompagne les entreprises, indépendants et
              particuliers avec des sites modernes, clairs et pensés pour
              convertir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cta text-text font-semibold rounded-xl hover:bg-cta-hover transition-colors text-base"
              >
                Parler de mon projet
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#realisations"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors text-base"
              >
                Voir les réalisations
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {proofs.map((proof) => (
                <div
                  key={proof.label}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <proof.icon className="w-4 h-4 text-cta flex-shrink-0" />
                  <span>{proof.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Desktop mockup */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-border overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-accent border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-text-secondary text-center border border-border">
                      monsite.fr
                    </div>
                  </div>
                </div>
                {/* Fake website content */}
                <div className="p-6 space-y-4">
                  <div className="h-3 bg-primary/10 rounded-full w-1/3" />
                  <div className="h-8 bg-primary/8 rounded-lg w-4/5" />
                  <div className="h-3 bg-text-secondary/10 rounded-full w-full" />
                  <div className="h-3 bg-text-secondary/10 rounded-full w-3/4" />
                  <div className="mt-4 flex gap-3">
                    <div className="h-10 bg-cta/30 rounded-lg w-32" />
                    <div className="h-10 bg-primary/10 rounded-lg w-32" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-24 bg-accent rounded-lg" />
                    <div className="h-24 bg-accent rounded-lg" />
                    <div className="h-24 bg-accent rounded-lg" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="h-3 bg-text-secondary/8 rounded-full w-full" />
                    <div className="h-3 bg-text-secondary/8 rounded-full w-5/6" />
                    <div className="h-3 bg-text-secondary/8 rounded-full w-2/3" />
                  </div>
                </div>
              </div>

              {/* Mobile mockup overlay */}
              <div className="absolute -bottom-4 -right-4 w-28 bg-white rounded-2xl shadow-xl shadow-primary/10 border border-border overflow-hidden">
                <div className="flex items-center justify-center py-1.5 bg-accent border-b border-border">
                  <div className="w-8 h-1 bg-text-secondary/20 rounded-full" />
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-2 bg-primary/10 rounded-full w-2/3" />
                  <div className="h-4 bg-primary/8 rounded w-full" />
                  <div className="h-2 bg-text-secondary/10 rounded-full w-full" />
                  <div className="h-2 bg-text-secondary/10 rounded-full w-3/4" />
                  <div className="h-6 bg-cta/30 rounded w-full mt-2" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -left-3 bg-white rounded-xl shadow-lg shadow-primary/10 border border-border px-4 py-2.5 flex items-center gap-2">
                <div className="w-8 h-8 bg-cta/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cta" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text">Premium</p>
                  <p className="text-[10px] text-text-secondary">
                    Design sur mesure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex justify-center pb-8">
        <a
          href="#preuves"
          className="flex flex-col items-center gap-1 text-text-secondary/50 hover:text-primary transition-colors"
        >
          <span className="text-xs">Découvrir</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

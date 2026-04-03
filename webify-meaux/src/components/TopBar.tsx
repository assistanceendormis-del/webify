"use client";

import { ArrowRight } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-secondary text-white/90 text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <p className="font-[var(--font-body)] tracking-wide text-xs uppercase">
          Création de sites internet premium à Meaux
        </p>
        <div className="flex items-center gap-6 text-xs">
          <span className="text-white/60">Devis gratuit</span>
          <span className="text-white/40">•</span>
          <span className="text-white/60">Réponse rapide</span>
          <span className="text-white/40">•</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-cta hover:text-white transition-colors font-medium"
          >
            Parler de votre projet
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

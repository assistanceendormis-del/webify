"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte un site vitrine ?",
    answer:
      "Le prix d'un site vitrine varie en fonction de vos besoins : nombre de pages, fonctionnalités, niveau de personnalisation. Nous proposons des solutions adaptées à chaque budget, avec des tarifs clairs communiqués dès le premier échange. Demandez un devis gratuit pour obtenir une estimation précise.",
  },
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "En moyenne, un site vitrine est livré en 2 à 4 semaines selon sa complexité. Ce délai inclut les phases d'échange, de design, de développement et de validation. Nous respectons un planning clair et vous tenons informé à chaque étape.",
  },
  {
    question: "Peut-on modifier le contenu ensuite ?",
    answer:
      "Absolument. Votre site est conçu pour être facilement modifiable. Nous vous fournissons les outils et les explications nécessaires pour mettre à jour vos textes, images et contenus en toute autonomie. Nous restons également disponibles pour vous accompagner.",
  },
  {
    question: "Le site est-il bien adapté au mobile ?",
    answer:
      "Tous nos sites sont développés en responsive design : ils s'adaptent parfaitement à tous les écrans — smartphone, tablette et ordinateur. C'est un standard non négociable pour nous, car la majorité du trafic web vient aujourd'hui du mobile.",
  },
  {
    question: "Proposez-vous aussi une refonte ?",
    answer:
      "Oui, la refonte de site est l'un de nos services principaux. Si votre site actuel est vieillissant, peu clair ou ne génère pas de résultats, nous pouvons le repenser entièrement pour lui donner une image moderne et professionnelle.",
  },
  {
    question: "Travaillez-vous le référencement local ?",
    answer:
      "Oui. Chaque site que nous créons est optimisé pour le référencement naturel local (SEO local). Nous structurons le contenu, les balises et les métadonnées pour vous aider à apparaître dans les résultats de recherche de votre zone géographique.",
  },
  {
    question: "Créez-vous aussi des sites pour particuliers ?",
    answer:
      "Tout à fait. Que ce soit pour un projet personnel, un portfolio, un événement ou une passion, nous créons des sites soignés et professionnels pour les particuliers qui souhaitent une présence web de qualité.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              FAQ
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Questions fréquentes
          </h2>
          <p className="text-text-secondary text-lg">
            Les réponses aux questions que vous vous posez probablement.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-accent rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
              >
                <span className="font-[var(--font-heading)] font-semibold text-text pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

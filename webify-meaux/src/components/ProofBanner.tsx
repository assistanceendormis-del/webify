import { Palette, Target, Smartphone, Heart } from "lucide-react";

const proofs = [
  {
    icon: Palette,
    title: "Design moderne",
    desc: "Un rendu visuel actuel, élégant et aligné avec votre image.",
  },
  {
    icon: Target,
    title: "Pensé conversion",
    desc: "Chaque élément est structuré pour inciter à l'action.",
  },
  {
    icon: Smartphone,
    title: "100% responsive",
    desc: "Parfaitement adapté sur mobile, tablette et desktop.",
  },
  {
    icon: Heart,
    title: "Accompagnement humain",
    desc: "Un interlocuteur dédié, à l'écoute de vos besoins.",
  },
];

export default function ProofBanner() {
  return (
    <section id="preuves" className="bg-accent py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofs.map((proof) => (
            <div
              key={proof.title}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cta/15 rounded-xl flex items-center justify-center mb-4">
                <proof.icon className="w-6 h-6 text-cta" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-text text-base mb-2">
                {proof.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {proof.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

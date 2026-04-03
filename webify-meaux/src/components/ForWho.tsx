import {
  Hammer,
  Briefcase,
  Building,
  Store,
  GraduationCap,
  User,
} from "lucide-react";

const audiences = [
  {
    icon: Hammer,
    title: "Artisans",
    desc: "Montrez la qualité de votre savoir-faire avec un site qui inspire confiance à vos futurs clients.",
  },
  {
    icon: Briefcase,
    title: "Indépendants",
    desc: "Valorisez votre expertise et votre parcours avec une présence web claire et professionnelle.",
  },
  {
    icon: Building,
    title: "TPE / PME",
    desc: "Renforcez votre image d'entreprise avec un site structuré, crédible et orienté résultats.",
  },
  {
    icon: Store,
    title: "Commerces",
    desc: "Attirez des clients locaux avec un site qui met en valeur vos produits et votre emplacement.",
  },
  {
    icon: GraduationCap,
    title: "Professions libérales",
    desc: "Inspirez confiance avec un site sobre et élégant qui reflète votre sérieux professionnel.",
  },
  {
    icon: User,
    title: "Particuliers",
    desc: "Donnez vie à votre projet personnel avec un site sur mesure, soigné et bien conçu.",
  },
];

export default function ForWho() {
  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Pour qui
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Pour les professionnels et particuliers qui veulent un site plus
            crédible
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Quel que soit votre secteur, nous créons un site web adapté à vos
            besoins et à votre audience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-cta/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cta/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cta/25 transition-colors">
                <audience.icon className="w-6 h-6 text-cta" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-text text-lg mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {audience.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

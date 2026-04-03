import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Architecte d'intérieur — Meaux",
    text: "Le site reflète enfin notre niveau de service. Nos clients nous disent souvent que le site les a convaincus de nous contacter.",
    rating: 5,
  },
  {
    name: "Thomas D.",
    role: "Artisan menuisier — Crécy-la-Chapelle",
    text: "Très clair, très pro, très rassurant. J'ai enfin un site dont je suis fier et qui me ramène régulièrement des demandes de devis.",
    rating: 5,
  },
  {
    name: "Marie L.",
    role: "Gérante boutique — Meaux",
    text: "Le rendu est plus haut de gamme que ce que nous avions avant. On sent tout de suite la différence de qualité.",
    rating: 5,
  },
  {
    name: "Pierre A.",
    role: "Consultant RH — Seine-et-Marne",
    text: "Accompagnement fluide du début à la fin. L'équipe a parfaitement compris nos besoins et livré un site qui dépasse nos attentes.",
    rating: 5,
  },
  {
    name: "Julie R.",
    role: "Coach bien-être — Lagny-sur-Marne",
    text: "Mon agenda s'est rempli depuis la mise en ligne du nouveau site. L'investissement est largement rentabilisé.",
    rating: 5,
  },
  {
    name: "Nicolas B.",
    role: "Gérant PME — Meaux",
    text: "Notre image de marque a fait un bond en avant. Les retours de nos partenaires sont unanimes : le site inspire confiance.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="bg-accent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Témoignages
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Ce que nos clients apprécient
          </h2>

          {/* Rating block */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-cta fill-cta"
                />
              ))}
            </div>
            <span className="font-[var(--font-heading)] font-bold text-2xl text-text">
              4,9/5
            </span>
          </div>
          <p className="text-text-secondary text-sm">
            Basé sur 47 projets réalisés
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-cta fill-cta"
                  />
                ))}
              </div>
              <p className="text-text leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-[var(--font-heading)] font-semibold text-text text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-text-secondary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

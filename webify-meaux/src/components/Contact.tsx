"use client";

import { Mail, Phone, MapPin, Clock, Send, Shield } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-accent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <div className="w-2 h-2 bg-cta rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Contact
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Décrivez-nous votre besoin et recevez une réponse personnalisée sous
            24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column — info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-[var(--font-heading)] font-semibold text-text text-lg mb-4">
                Échangeons sur votre projet
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Que vous ayez une idée précise ou que vous cherchiez simplement
                à moderniser votre présence web, nous sommes là pour vous
                accompagner. Premier échange sans engagement.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                    Email
                  </p>
                  <p className="text-text font-medium">
                    contact@webifymeaux.fr
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                    Téléphone
                  </p>
                  <p className="text-text font-medium">01 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                    Zone d&apos;intervention
                  </p>
                  <p className="text-text font-medium">
                    Meaux et alentours — Seine-et-Marne
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                    Disponibilité
                  </p>
                  <p className="text-text font-medium">
                    Lun — Ven, 9h — 18h
                  </p>
                </div>
              </div>
            </div>

            {/* Trust block */}
            <div className="bg-white rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-cta" />
                <span className="font-[var(--font-heading)] font-semibold text-text text-sm">
                  Engagement qualité
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Réponse rapide. Échange clair. Devis gratuit et sans engagement.
                Nous nous engageons à vous répondre sous 24h.
              </p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-accent/50 text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.fr"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-accent/50 text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="06 XX XX XX XX"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-accent/50 text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Type de projet
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-accent/50 text-text focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors">
                    <option value="">Sélectionnez</option>
                    <option value="creation">Création de site</option>
                    <option value="refonte">Refonte de site</option>
                    <option value="landing">Landing page</option>
                    <option value="seo">Optimisation SEO</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-text mb-1.5">
                  Budget indicatif
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-accent/50 text-text focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors">
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="500-1000">500 € — 1 000 €</option>
                  <option value="1000-2000">1 000 € — 2 000 €</option>
                  <option value="2000-5000">2 000 € — 5 000 €</option>
                  <option value="5000+">Plus de 5 000 €</option>
                  <option value="unknown">Je ne sais pas encore</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-accent/50 text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cta text-text font-semibold rounded-xl hover:bg-cta-hover transition-colors text-base"
              >
                <Send className="w-4 h-4" />
                Envoyer ma demande
              </button>

              <p className="text-center text-xs text-text-secondary mt-4">
                Réponse rapide. Échange clair. Devis gratuit.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

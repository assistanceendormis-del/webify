"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const clients = [
  "BTP Meaux",
  "Fleurs & Co",
  "Auto Seine",
  "Comptaplus",
  "FitZone 77",
];

export default function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-44">
      <Container className="text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            ⭐ +47 clients accompagnés
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-title sm:text-5xl lg:text-6xl"
        >
          Transformez vos visiteurs en clients avec un site qui vend 24h/24
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body"
        >
          Webify Meaux accompagne les entrepreneurs et PME de Seine-et-Marne
          souhaitant développer leur activité grâce à une présence en ligne
          claire, visible et stratégique.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#contact" size="lg">
            Réserver un audit gratuit
          </Button>
          <Button href="#projets" variant="secondary" size="lg">
            Découvrir nos projets
          </Button>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <p className="mb-6 text-xs uppercase tracking-widest text-body/60">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="rounded-lg border border-primary/15 bg-[#0d1120] px-6 py-3 text-sm text-body/80"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

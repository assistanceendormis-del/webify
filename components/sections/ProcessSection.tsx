"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Audit gratuit",
    description:
      "Nous analysons pourquoi vos visiteurs ne convertissent pas et identifions le potentiel de votre marché local.",
  },
  {
    number: "02",
    title: "Stratégie sur-mesure",
    description:
      "Nous créons un plan d'action personnalisé pour transformer votre site en générateur de leads qualifiés.",
  },
  {
    number: "03",
    title: "Lancement et résultats",
    description:
      "Mise en ligne de votre nouveau site + suivi des performances pour garantir vos premiers résultats sous 30 jours.",
  },
];

const checkpoints = [
  "Accompagnement personnalisé",
  "Analyse de votre concurrence",
  "Collaboration en temps réel",
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mb-14 text-center">
          <SectionLabel>Processus</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-title lg:text-4xl">
            Votre site web en 3 étapes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-primary/15 bg-[#0d1120] p-8"
            >
              <span className="text-5xl font-bold text-primary lg:text-6xl">
                {step.number}.
              </span>
              <h3 className="mt-4 text-xl font-bold text-title">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Checkpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {checkpoints.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm text-body">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button href="#contact" size="lg">
            Réserver mon audit gratuit
          </Button>
          <p className="mt-3 text-sm text-body/60">Sans engagement</p>
        </div>
      </Container>
    </section>
  );
}

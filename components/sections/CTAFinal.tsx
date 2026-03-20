"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTAFinal() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,178,0.08)_0%,transparent_70%)]" />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-title lg:text-4xl">
            Vous êtes à un clic de booster votre présence en ligne.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
            Réservez un appel gratuit de 30 minutes. On analyse votre situation
            ensemble, sans engagement.
          </p>
          <div className="mt-10">
            <Button href="#contact" size="lg">
              Réserver mon audit stratégique
            </Button>
          </div>
          <p className="mt-4 text-sm text-body/60">
            Appel gratuit · Sans engagement
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>À propos</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold text-title lg:text-4xl">
              Une agence locale engagée à vos côtés
            </h2>
            <p className="mt-6 leading-relaxed text-body">
              Nous sommes passionnés par le digital et convaincus qu&apos;un
              site bien pensé peut changer la donne pour une activité locale.
              Basés à Meaux, nous connaissons le tissu économique local et
              travaillons en proximité avec nos clients.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              Notre approche : humaine, transparente, orientée résultats. Chaque
              projet est un partenariat. Nous ne livrons pas simplement un site,
              nous construisons un outil de croissance qui évolue avec votre
              activité.
            </p>
            <div className="mt-8">
              <Button href="#contact">Discuter de votre projet</Button>
            </div>
          </motion.div>

          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-primary/15 bg-[#0d1120] p-10">
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-3xl font-bold text-primary">W</span>
                </div>
                <p className="text-lg font-bold text-title">Webify Meaux</p>
                <p className="text-center text-sm text-body">
                  Votre partenaire digital à Meaux
                </p>
                <div className="mt-4 grid w-full grid-cols-2 gap-4">
                  <div className="rounded-lg bg-body/5 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">47+</p>
                    <p className="text-xs text-body">Clients</p>
                  </div>
                  <div className="rounded-lg bg-body/5 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-xs text-body">Satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

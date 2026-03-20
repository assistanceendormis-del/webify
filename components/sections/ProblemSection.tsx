"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProblemSection() {
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
            <h2 className="mb-6 text-3xl font-bold text-title lg:text-4xl">
              Votre site web ne remplit pas ses promesses ?
            </h2>
            <p className="mb-6 leading-relaxed text-body">
              Votre site est lent, il ne génère aucun contact, et votre image en
              ligne ne reflète pas la qualité de votre travail. Vous avez
              investi du temps et de l&apos;argent, mais les résultats ne sont
              pas au rendez-vous.
            </p>
            <div className="mb-6 rounded-xl border-l-4 border-primary bg-[#0d1120] p-5">
              <p className="font-medium text-title">
                → Résultat : des visiteurs qui partent en quelques secondes… et
                des opportunités perdues chaque jour.
              </p>
            </div>
            <p className="mb-8 leading-relaxed text-body">
              Chez Webify Meaux, nous concevons des sites internet qui
              travaillent pour vous. Un design professionnel, un contenu
              stratégique et un référencement local optimisé pour attirer les
              bons clients à Meaux et en Seine-et-Marne.
            </p>
            <Button href="#contact">Prendre rendez-vous</Button>
          </motion.div>

          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-primary/15 bg-[#0d1120] p-8">
              {/* Mock browser bar */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary/40" />
                <div className="h-3 w-3 rounded-full bg-body/20" />
                <div className="h-3 w-3 rounded-full bg-body/20" />
                <div className="ml-3 h-3 flex-1 rounded-full bg-body/10" />
              </div>
              {/* Mock content lines */}
              <div className="space-y-4">
                <div className="h-6 w-3/4 rounded bg-primary/20" />
                <div className="h-4 w-full rounded bg-body/10" />
                <div className="h-4 w-5/6 rounded bg-body/10" />
                <div className="h-4 w-2/3 rounded bg-body/10" />
                <div className="mt-6 h-10 w-1/2 rounded-full bg-primary/30" />
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="h-20 rounded-lg bg-body/5" />
                  <div className="h-20 rounded-lg bg-body/5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

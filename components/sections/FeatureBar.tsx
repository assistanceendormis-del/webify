"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Target, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: Zap,
    title: "Générez plus de clients",
    description:
      "Un site conçu pour transformer chaque visiteur en prospect qualifié.",
  },
  {
    icon: Palette,
    title: "Un design professionnel",
    description:
      "Une identité visuelle soignée qui inspire confiance dès le premier regard.",
  },
  {
    icon: Target,
    title: "Optimisé pour convertir",
    description:
      "Chaque élément est pensé pour guider vos visiteurs vers l'action.",
  },
  {
    icon: TrendingUp,
    title: "Une visibilité accrue",
    description:
      "Référencement local optimisé pour apparaître en tête des recherches.",
  },
];

export default function FeatureBar() {
  return (
    <section className="bg-[#0d1120] py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <feature.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-base font-bold text-title">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

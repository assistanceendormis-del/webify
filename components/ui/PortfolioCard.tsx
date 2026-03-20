"use client";

import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  sector: string;
  description: string;
  index: number;
}

export default function PortfolioCard({
  title,
  sector,
  description,
  index,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-primary/15 bg-[#0d1120] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,255,178,0.15)]"
    >
      <div className="flex h-48 items-center justify-center bg-[#0d1120]">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <span className="text-lg text-primary">W</span>
          </div>
          <span className="text-xs text-body">{sector}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold text-title">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-body">{description}</p>
        <span className="text-sm font-medium text-primary transition-colors hover:text-accent">
          Voir le projet →
        </span>
      </div>
    </motion.div>
  );
}

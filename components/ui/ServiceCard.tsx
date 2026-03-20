"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-primary/15 bg-[#0d1120] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,255,178,0.15)]"
    >
      <Icon className="mb-4 h-7 w-7 text-primary" />
      <h3 className="mb-2 text-lg font-bold text-title">{title}</h3>
      <p className="text-sm leading-relaxed text-body">{description}</p>
    </motion.div>
  );
}

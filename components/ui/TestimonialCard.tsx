"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  city: string;
  text: string;
  initials: string;
  index: number;
}

export default function TestimonialCard({
  name,
  role,
  city,
  text,
  initials,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-primary/15 bg-[#0d1120] p-6"
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="mb-6 text-sm leading-relaxed text-body">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-btnalt text-sm font-bold text-white">
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold text-title">{name}</p>
          <p className="text-xs text-body">
            {role}, {city}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

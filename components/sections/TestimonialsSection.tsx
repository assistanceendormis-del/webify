"use client";

import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="avis" className="py-20 lg:py-28">
      <Container>
        <div className="mb-14 text-center">
          <SectionLabel>Avis clients</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-title lg:text-4xl">
            Ils nous ont fait confiance
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              city={t.city}
              text={t.text}
              initials={t.initials}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

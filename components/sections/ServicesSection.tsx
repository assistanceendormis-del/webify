"use client";

import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <Container>
        <div className="mb-14 text-center">
          <SectionLabel>Nos services</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-title lg:text-4xl">
            Nos solutions digitales pour votre croissance
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

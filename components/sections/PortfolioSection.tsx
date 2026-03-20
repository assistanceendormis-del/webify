"use client";

import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { projects } from "@/content/portfolio";

export default function PortfolioSection() {
  return (
    <section id="projets" className="py-20 lg:py-28">
      <Container>
        <div className="mb-14 text-center">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-title lg:text-4xl">
            Ce que nous avons construit pour nos clients
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <PortfolioCard
              key={project.slug}
              title={project.title}
              sector={project.sector}
              description={project.description}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

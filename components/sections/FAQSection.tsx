"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import FAQItem from "@/components/ui/FAQItem";
import { faqItems } from "@/content/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <Container>
        <div className="mb-14 text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-title lg:text-4xl">
            Nos réponses à vos questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

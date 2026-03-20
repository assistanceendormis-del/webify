"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Avis clients", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#accueil" className="text-xl font-bold">
            <span className="text-primary">Webify</span>
            <span className="text-title"> Meaux</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-body transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="#contact" size="sm">
              Prendre rendez-vous
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-title lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-16 border-t border-body/10 bg-bg/95 backdrop-blur-lg lg:hidden">
          <Container>
            <ul className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base text-body transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button href="#contact" size="sm" onClick={() => setMobileOpen(false)}>
                  Prendre rendez-vous
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

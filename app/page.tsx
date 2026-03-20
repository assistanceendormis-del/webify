import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeatureBar from "@/components/sections/FeatureBar";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureBar />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}

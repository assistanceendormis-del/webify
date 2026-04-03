import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofBanner from "@/components/ProofBanner";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Method from "@/components/Method";
import ForWho from "@/components/ForWho";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ProofBanner />
        <Problems />
        <Solution />
        <Services />
        <Realisations />
        <Method />
        <ForWho />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}

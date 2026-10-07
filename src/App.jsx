import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BuiltFor from "./components/BuiltFor";
import SandboxTeaser from "./components/SandboxTeaser";
import HowItWorks from "./components/HowItWorks";
import ComparisonSection from "./components/ComparisonSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSandbox = () => {
    const el = document.getElementById("sandbox");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#141414] font-sans selection:bg-[#FFD60A] selection:text-[#141414]">
      {/* 1. Header Navigation */}
      <Navbar onOpenDemo={scrollToSandbox} />

      <main>
        {/* 2. Accroche / Hero (style Obeya avec triptyque annoté) */}
        <Hero onOpenDemo={scrollToSandbox} />

        {/* 3. Pour qui c'est fait (Expansion : Concours, Cursus, Autodidactes, Knowledge Workers, Tech) */}
        <BuiltFor />

        {/* 4. Sandbox Teaser (Widget 100% interactif, 0 inscription) */}
        <SandboxTeaser />

        {/* 5. La Méthode en 4 temps (Structurer -> Entraîner -> Prouver -> Pérenniser) */}
        <HowItWorks />

        {/* 6. Le Choc (Bricolage dispersé vs MemoTrunk) */}
        <ComparisonSection />

        {/* 7. Tarifs transparents */}
        <PricingSection />

        {/* 8. FAQ interactive */}
        <FaqSection />

        {/* 9. Appel final */}
        <FinalCta onOpenDemo={scrollToSandbox} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

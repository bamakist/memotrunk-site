import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: "free",
      name: "Découverte",
      badge: "ESSAI PERMANENT",
      desc: "Pour tester la méthode et créer ses premières fiches manuellement.",
      priceMonthly: 0,
      priceAnnual: 0,
      features: [
        "Accès complet à la Sandbox de démo",
        "Création manuelle de cartes & items",
        "Moteur de répétition espacée FSRS standard",
        "Mode hors-ligne PWA sur mobile & tablette",
      ],
      cta: "Commencer gratuitement",
      highlight: false,
    },
    {
      id: "solo",
      name: "Apprenant Solo",
      badge: "LE PLUS POPULAIRE",
      desc: "Pour les candidats et étudiants qui doivent dominer un programme dense.",
      priceMonthly: 12,
      priceAnnual: 9,
      features: [
        "Ingestion automatique illimitée de PDFs et cours",
        "Découpage en Knowledge Items (KI) sans hallucination",
        "Entraînement en 4 dimensions (dont calculs et cas pratiques)",
        "Moteur d'Evidence sans complaisance",
        "Study Planner dynamique selon votre temps disponible",
        "Indicateur prédictif de Readiness pour le jour J",
        "Détection des conflits et contradictions de sources",
      ],
      cta: "Démarrer avec le plan Solo",
      highlight: true,
    },
    {
      id: "team",
      name: "Duo & Groupe d'Étude",
      badge: "POUR RÉVISER À PLUSIEURS",
      desc: "Pour mutualiser le travail d'ingestion et comparer ses acquis.",
      priceMonthly: 22,
      priceAnnual: 18,
      features: [
        "Toutes les fonctionnalités du plan Solo (2 à 5 comptes)",
        "Banques de connaissances et decks partagés",
        "Résolution collaborative des ambiguïtés de cours",
        "Suivi d'avancement anonymisé et émulation saine",
      ],
      cta: "Créer un groupe d'étude",
      highlight: false,
    },
  ];

  return (
    <section id="tarifs" className="py-20 md:py-28 bg-white border-t border-[#DDD8CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="obeya-chip bg-[#F8F5EF] text-[#141414] border-[#DDD8CD]">
            TARIFS TRANSPARENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            Investissez dans votre certitude.{" "}
            <span className="font-serif-editorial italic font-normal text-[#C26F1E] block">
              Progressez sans engagement.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E5D57]">
            Moins cher qu'une heure de cours particulier. Un retour sur investissement garanti pour toute votre vie.
          </p>

          {/* Toggle Annuel / Mensuel */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? "text-[#141414]" : "text-[#8E8D86]"}`}>
              Facturation mensuelle
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-13 h-7 bg-[#141414] rounded-full p-1 relative transition-colors cursor-pointer"
              aria-label="Toggle billing"
            >
              <div
                className={`w-5 h-5 bg-[#FFD60A] rounded-full transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? "text-[#141414]" : "text-[#8E8D86]"}`}>
              <span>Facturation annuelle</span>
              <span className="text-[11px] font-mono-tech bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded-full font-bold">
                -25%
              </span>
            </span>
          </div>
        </div>

        {/* Grille des plans */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => {
            const price = isAnnual ? p.priceAnnual : p.priceMonthly;
            return (
              <div
                key={p.id}
                className={`obeya-card rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  p.highlight
                    ? "border-[#1D3557] ring-2 ring-[#1D3557] shadow-lg relative bg-white"
                    : "bg-[#FAF8F5] border-[#DDD8CD]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#141414]">{p.name}</h3>
                    <span className="text-[10px] font-mono-tech font-bold px-2 py-0.5 rounded bg-[#F0ECE1] text-[#5E5D57]">
                      {p.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-[#5E5D57] leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#141414] font-mono-tech">
                      {price}€
                    </span>
                    <span className="text-xs text-[#8E8D86] font-mono-tech">
                      / mois {price > 0 && isAnnual && "(facturé annuellement)"}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3 border-t border-[#DDD8CD] pt-6">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141414]">
                        <Check className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="http://localhost:5173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      p.highlight
                        ? "bg-[#141414] text-white hover:bg-[#2C2B27] shadow-sm"
                        : "bg-white border border-[#DDD8CD] hover:border-[#B8B2A5] text-[#141414] hover:bg-[#F2EFE8]"
                    }`}
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default PricingSection;

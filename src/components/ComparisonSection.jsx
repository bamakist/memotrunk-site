import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function ComparisonSection() {
  const points = [
    {
      bad: "Des heures passées à surligner et relire passivement sans ancrage réel.",
      good: "Vos cours et livres transformés en questions d'entraînement en 1 clic.",
    },
    {
      bad: "Notion ou Obsidian transformés en cimetières de notes qu'on n'ouvre jamais.",
      good: "Des connaissances vivantes qui réapparaissent exactement au bon moment.",
    },
    {
      bad: "Anki austère et chronophage : créer les fiches prend plus de temps que réviser.",
      good: "Extraction automatique sourcée et questions en 4 dimensions sans saisie manuelle.",
    },
    {
      bad: "L'illusion complaisante du « Ah oui, je le savais » en retournant la carte trop vite.",
      good: "Preuve objective obligatoire avant révélation : ce qui est validé est réellement su.",
    },
    {
      bad: "Angoisse du temps : naviguer à l'aveugle sans savoir si l'on sera prêt le jour J.",
      good: "Jauge de Readiness prédictive et sessions calibrées sur vos minutes réelles disponibles.",
    },
  ];

  return (
    <section id="comparatif" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#DDD8CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="obeya-chip bg-white text-[#C26F1E] border-[#E8C5A0]">
            LE CHOC MÉTHODOLOGIQUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            Du bricolage dispersé{" "}
            <span className="font-serif-editorial italic font-normal text-[#1D3557] block">
              à un système de maîtrise unifié.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E5D57]">
            Ce n'est pas le travail ou l'intelligence qui vous manquent. C'est la cohérence du système.
          </p>
        </div>

        {/* Tableau comparatif face-à-face */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Colonne Gauche : Le bricolage habituel */}
          <div className="obeya-card rounded-2xl p-6 sm:p-8 bg-[#FBF4EC] border border-[#ECD9C5]">
            <div className="flex items-center justify-between pb-4 border-b border-[#ECD9C5]">
              <span className="font-mono-tech text-xs font-bold text-[#A8413A] uppercase tracking-wider">
                LE SETUP TRADITIONNEL (DISPERSION)
              </span>
              <span className="text-xs font-mono-tech text-[#8E8D86]">
                Faible rétention à 6 mois
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#5E5D57]">
                  <XCircle className="w-5 h-5 text-[#A8413A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt.bad}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Droite : Avec MemoTrunk */}
          <div className="obeya-card rounded-2xl p-6 sm:p-8 bg-white border border-[#1D3557] shadow-md ring-1 ring-[#1D3557]/10 relative">
            <div className="absolute -top-3.5 right-6 bg-[#FFD60A] text-[#141414] font-mono-tech text-[11px] font-black px-3 py-1 rounded-md border border-[#CCA700] shadow-sm">
              LE STANDARD SCIENTIFIQUE
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-[#DDD8CD]">
              <span className="font-mono-tech text-xs font-bold text-[#1D3557] uppercase tracking-wider">
                AVEC MEMOTRUNK (MAÎTRISE VÉRIFIABLE)
              </span>
              <span className="text-xs font-mono-tech text-[#2E7D32] font-semibold">
                Ancrage durable garanti
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#141414] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt.good}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ComparisonSection;

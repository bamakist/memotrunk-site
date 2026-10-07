import React from "react";
import { Layers, Crosshair, CheckCircle2, Clock, ArrowRight, FileCheck, BrainCircuit } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      verb: "Structurer",
      tag: "INGESTION & CONCEPTS (KI)",
      title: "Vos documents découpés en unités claires, sans hallucination.",
      desc: "Glissez vos polycopiés, traités ou livres. L'IA isole les Knowledge Items (KI) cardinaux, formule les objectifs et conserve le lien vers la page et la ligne exacte.",
      detail: "Filiation documentaire stricte • Détection de contradictions entre cours.",
      color: "border-[#C26F1E] text-[#C26F1E]",
    },
    {
      num: "02",
      verb: "Entraîner",
      tag: "LES 4 DIMENSIONS NORMATIVES",
      title: "Muscler le raisonnement, pas seulement la récitation brute.",
      desc: "Une notion se maîtrise sous 4 angles : Rappel (mémoire directe), Exécution (procédure ou calcul), Sélection (choisir la méthode sans se faire piéger), et Généralisation (cas concret).",
      detail: "Évaluation multicritère • Fin du par cœur superficiel.",
      color: "border-[#1D3557] text-[#1D3557]",
    },
    {
      num: "03",
      verb: "Prouver",
      tag: "MOTEUR D'EVIDENCE SANS COMPLAISANCE",
      title: "Seule la réponse produite avant révélation compte.",
      desc: "Interdiction du piège 'Ah oui, je le savais'. Vous formulez votre tentative avant d'afficher le corrigé. Une réussite avec indice ne compte pas comme un acquis autonome.",
      detail: "Élimination du biais de rétrospection • Crédit cognitif honnête.",
      color: "border-[#2E7D32] text-[#2E7D32]",
    },
    {
      num: "04",
      verb: "Pérenniser",
      tag: "FSRS v5 & PILOTAGE DU TEMPS",
      title: "Révisez au moment mathématique parfait, selon vos disponibilités.",
      desc: "L'algorithme de pointe FSRS v5 calcule la courbe d'oubli exacte de chaque compétence. Indiquez votre temps (15 min ou 1 h) : le Study Planner priorise les notions en péril.",
      detail: "Zéro surcharge • Score de Readiness objectif pour le jour J.",
      color: "border-[#141414] text-[#141414]",
    },
  ];

  return (
    <section id="methode" className="py-20 md:py-28 bg-white border-t border-[#DDD8CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-3xl space-y-4">
          <span className="obeya-chip bg-[#F8F5EF] text-[#141414] border-[#DDD8CD]">
            LE WORKFLOW COGNITIF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            La méthode en 4 temps :{" "}
            <span className="font-serif-editorial italic font-normal text-[#1D3557] block">
              de la lecture passive à la certitude absolue.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E5D57]">
            MemoTrunk ne laisse aucune place au hasard. Chaque étape est une garantie scientifique 
            contre l'oubli et l'illusion de maîtrise.
          </p>
        </div>

        {/* Grille 4 temps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="obeya-card rounded-2xl p-6 bg-[#FAF8F5] border border-[#DDD8CD] flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-2xl font-black text-[#141414]">
                    {step.num}
                  </span>
                  <span className={`font-mono-tech text-[10px] font-bold px-2 py-0.5 rounded border bg-white ${step.color}`}>
                    {step.verb.toUpperCase()}
                  </span>
                </div>

                <div className="text-[11px] font-mono-tech text-[#8E8D86]">
                  {step.tag}
                </div>

                <h3 className="text-base font-bold text-[#141414] leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E5D57] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DDD8CD] text-[11px] font-mono-tech text-[#1D3557] font-medium">
                ✓ {step.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;

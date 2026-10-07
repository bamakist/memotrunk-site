import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "En quoi est-ce fondamentalement différent d'Anki ou de Quizlet ?",
      a: "Anki est un outil réputé mais rustique : vous devez formater manuellement chaque carte (ce qui prend des centaines d'heures), l'évaluation repose sur votre propre complaisance ('Facile/Difficile'), et il ne teste que le rappel brut. MemoTrunk extrait vos cours automatiquement depuis vos PDF, teste 4 dimensions cognitives (calcul, démarche, cas pratique), exige une réponse avant de voir la correction, et calcule votre Readiness prédictive pour le jour J."
    },
    {
      q: "Je n'ai pas de concours à passer. Est-ce pertinent pour un autodidacte ou un professionnel ?",
      a: "Totalement. Si vous lisez des livres, des rapports d'experts ou suivez une veille métier, vous souffrez sans doute du 'syndrome du collectionneur' : accumuler des notes qu'on oublie 3 mois plus tard. MemoTrunk garantit que vos heures de lecture se transforment en capital intellectuel permanent et mobilisable instantanément en réunion ou débat."
    },
    {
      q: "L'IA ne risque-t-elle pas d'inventer des informations erronées (hallucinations) ?",
      a: "Non. Le moteur d'ingestion applique une règle d'intégrité stricte : chaque concept (KI) et chaque question est indexé sur la page et le paragraphe exact de votre document source. Si une information est ambiguë ou si deux cours se contredisent, le système suspend la notion et vous alerte en conflit au lieu d'inventer une vérité factice."
    },
    {
      q: "Combien de temps par jour dois-je y consacrer ?",
      a: "C'est vous qui fixez la règle. Vous indiquez votre temps disponible (ex. 15 minutes dans le train ou 45 minutes le soir) : le Study Planner sélectionne mathématiquement les connaissances les plus urgentes sans jamais dépasser votre créneau. Plus de listes infinies de révisions anxiogènes."
    },
    {
      q: "Mes cours, livres et documents restent-ils strictement confidentiels ?",
      a: "Oui. Vos documents importés sont stockés dans votre espace privé et étanche. Ils ne sont jamais partagés avec d'autres utilisateurs ni utilisés pour entraîner des modèles publics d'intelligence artificielle."
    },
    {
      q: "Puis-je réviser hors-ligne sur mon smartphone ou ma tablette ?",
      a: "Oui. MemoTrunk est une Progressive Web App (PWA) installable en un clic sur iOS, Android, iPad et ordinateur. Vos sessions de révision sont accessibles même en mode avion dans les transports ou en sous-sol de bibliothèque."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#DDD8CD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="obeya-chip bg-white text-[#141414] border-[#DDD8CD]">
            QUESTIONS FRÉQUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            Les réponses claires,{" "}
            <span className="font-serif-editorial italic font-normal text-[#1D3557] block">
              sans faux-fuyants.
            </span>
          </h2>
          <p className="text-base text-[#5E5D57]">
            Vous avez des doutes légitimes. Voici exactement comment fonctionne le logiciel.
          </p>
        </div>

        {/* Accordéon FAQ */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="obeya-card rounded-2xl overflow-hidden bg-white border border-[#DDD8CD] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="text-base font-bold text-[#141414]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#F2EFE8] flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#141414] text-white" : "text-[#5E5D57]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#5E5D57] leading-relaxed border-t border-[#DDD8CD]/60 pt-4 bg-[#FAF8F5]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FaqSection;

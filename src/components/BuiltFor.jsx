import React, { useState } from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Briefcase, 
  Cpu, 
  ArrowRight,
  Check,
  AlertCircle
} from "lucide-react";

export function BuiltFor() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: "concours",
      title: "Concours & Examens d'Élite",
      subtitle: "Haute sélectivité & Droit à l'erreur zéro",
      icon: GraduationCap,
      badge: "MÉDECINE · DROIT · CPGE · BARREAU",
      symptom: "Volumes herculéens de cours, angoisse du trou noir le jour J, révisions à l'aveugle sans savoir si la notion tiendra sous pression.",
      solution: "Mesure objective de la Readiness vers la date de l'épreuve. Entraînement en 4 dimensions (dont cas pratiques et calculs) pour être intouchable le jour du concours.",
      example: "Exemple : Polycopié de Pharmacologie (320 pages) ou Droit des Obligations.",
    },
    {
      id: "cursus",
      title: "Cursus Universitaire & Écoles",
      subtitle: "Licences, Masters, Écoles d'Ingénieurs & Management",
      icon: BookOpen,
      badge: "SEMESTRES · PARTIELS · VALIDATION",
      symptom: "Le cycle infernal : courir après les polys, bachoter la nuit précédant le partiel sous stress intense, et tout oublier 15 jours plus tard.",
      solution: "Ingestion automatique des slides et polycopiés en 1 clic. Des sessions courtes de 15 minutes entre deux cours pour valider son semestre sereinement.",
      example: "Exemple : Macroéconomie, Algèbre linéaire, Droit administratif.",
    },
    {
      id: "autodidactes",
      title: "Autodidactes & Passionnés (Self-Learners)",
      subtitle: "Curiosité intellectuelle & Apprentissage permanent",
      icon: Compass,
      badge: "ESSAIS · HISTOIRE · SCIENCES · PHILOSOPHIE",
      symptom: "Avoir lu 40 essais passionnants dans l'année, mais être incapable de restituer les thèses centrales et les mécanismes clés 6 mois après la lecture.",
      solution: "Convertissez chaque livre marquant en capital mental pérenne. L'algorithme FSRS maintient vivantes les idées forces sans effort démesuré.",
      example: "Exemple : Traité d'Histoire contemporaine, Économie comportementale.",
    },
    {
      id: "knowledge-workers",
      title: "Chercheurs, Consultants & Knowledge Workers",
      subtitle: "Capitaliser sur sa veille et ses lectures d'experts",
      icon: Briefcase,
      badge: "RAPPORTS · VEILLE STRATÉGIQUE · NORMES",
      symptom: "Avoir des dossiers Notion et Zotero pleins de notes impeccables (le piège du collectionneur), mais devoir fouiller pendant 20 minutes en pleine réunion client pour retrouver un chiffre ou une clause.",
      solution: "Une expertise internalisée (« Embodied Expertise »). Glissez un rapport McKinsey de 80 pages : MemoTrunk extrait les ratios et vous les ancre en mémoire disponible.",
      example: "Exemple : Normes CSRD/ESG, Réglementation bancaire, Articles PubMed.",
    },
    {
      id: "upskilling",
      title: "Reconversion & Upskilling Tech",
      subtitle: "Assimiler une nouvelle compétence complexe à l'âge adulte",
      icon: Cpu,
      badge: "CODE · CLOUD · CERTIFICATIONS TECH",
      symptom: "Devoir maîtriser un framework dense ou passer une certification (AWS, GCP, PMP) tout en ayant déjà un travail à temps plein et des journées surchargées.",
      solution: "Arbitrage strict du temps disponible. Vous avez 20 min dans le train ? MemoTrunk programme pile les questions critiques sans jamais déborder.",
      example: "Exemple : Architecture AWS Solutions Architect, Kubernetes, Finance de marché.",
    },
  ];

  return (
    <section id="pour-qui" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#DDD8CD]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de section */}
        <div className="max-w-3xl space-y-4">
          <span className="obeya-chip bg-white text-[#C26F1E] border-[#E8C5A0]">
            POUR QUI EST-CE FAIT ?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414] leading-tight">
            Bien au-delà du bachotage d'examen.{" "}
            <span className="font-serif-editorial italic font-normal text-[#1D3557] block">
              Pour tous ceux qui refusent d'oublier ce qu'ils ont lu.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E5D57]">
            MemoTrunk est le dénominateur commun de ceux qui traitent le savoir avec rigueur. 
            Découvrez comment chaque profil transforme l'information brute en compétence permanente.
          </p>
        </div>

        {/* Onglets Desktop */}
        <div className="mt-12 flex flex-wrap gap-2 pb-2 border-b border-[#DDD8CD]">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#141414] text-white shadow-sm"
                    : "bg-white text-[#5E5D57] hover:text-[#141414] border border-[#DDD8CD] hover:border-[#B8B2A5]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#FFD60A]" : "text-[#5E5D57]"}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Panneau de détail du profil sélectionné */}
        <div className="mt-8 obeya-card rounded-2xl p-6 sm:p-10 bg-white border border-[#DDD8CD]">
          {(() => {
            const current = personas[activeTab];
            const Icon = current.icon;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Colonne Gauche : Diagnostic & Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E6EDF5] flex items-center justify-center text-[#1D3557]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#141414]">
                        {current.title}
                      </h3>
                      <p className="text-xs font-mono-tech text-[#C26F1E]">
                        {current.badge}
                      </p>
                    </div>
                  </div>

                  {/* Le Symptôme */}
                  <div className="p-4 rounded-xl bg-[#FBF4EC] border border-[#ECD9C5] space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#A8413A] uppercase tracking-wide">
                      <AlertCircle className="w-4 h-4" />
                      <span>Le piège actuel</span>
                    </div>
                    <p className="text-sm text-[#5E5D57] leading-relaxed">
                      {current.symptom}
                    </p>
                  </div>

                  {/* Ce que change MemoTrunk */}
                  <div className="p-4 rounded-xl bg-[#E6EDF5]/60 border border-[#CBDCEE] space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1D3557] uppercase tracking-wide">
                      <Check className="w-4 h-4 text-[#2E7D32]" />
                      <span>La réponse MemoTrunk</span>
                    </div>
                    <p className="text-sm text-[#141414] font-medium leading-relaxed">
                      {current.solution}
                    </p>
                  </div>

                  <p className="text-xs font-mono-tech text-[#8E8D86] pt-1">
                    {current.example}
                  </p>
                </div>

                {/* Colonne Droite : Témoignage d'usage stylisé */}
                <div className="lg:col-span-5 bg-[#F8F5EF] rounded-xl p-6 border border-[#DDD8CD] space-y-4">
                  <span className="font-mono-tech text-xs text-[#5E5D57] uppercase">
                    MÉCANIQUE EN SITUATION RÉELLE
                  </span>

                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-[#DDD8CD] text-xs">
                      <span className="font-mono-tech text-[#C26F1E] font-bold block mb-1">
                        1. INGESTION DU SUPPORT
                      </span>
                      L'utilisateur glisse son polycopié ou son livre. MemoTrunk détecte 84 concepts sans aucune saisie manuelle fastidieuse.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-[#DDD8CD] text-xs">
                      <span className="font-mono-tech text-[#1D3557] font-bold block mb-1">
                        2. ENTRAÎNEMENT SANS TRICHE
                      </span>
                      Interdiction du simple "je le savais". L'app sollicite l'effort actif par la réflexion et la saisie.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-[#DDD8CD] text-xs">
                      <span className="font-mono-tech text-[#2E7D32] font-bold block mb-1">
                        3. CAPITALISATION DÉFINITIVE
                      </span>
                      À J+30, J+90 ou la veille de l'intervention, la notion est immédiatement disponible à l'esprit.
                    </div>
                  </div>

                </div>

              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
}

export default BuiltFor;

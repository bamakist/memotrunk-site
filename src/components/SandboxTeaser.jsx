import React, { useState } from "react";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  FileText, 
  ArrowRight,
  TrendingUp,
  Brain,
  ShieldCheck,
  Check
} from "lucide-react";

export function SandboxTeaser() {
  const [selectedTopic, setSelectedTopic] = useState("cardio");
  const [stepIndex, setStepIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [confidence, setConfidence] = useState(null);

  const topics = {
    cardio: {
      name: "🩺 Cardiologie (PASS / EDN)",
      doc: "Collège_Cardiologie_2026.pdf (p. 114)",
      cards: [
        {
          id: "KI-CARDIO-01",
          dimension: "SÉLECTION",
          dimensionColor: "text-[#1D3557] bg-[#E6EDF5] border-[#BDD0E4]",
          question: "Face à un SCA ST+ vu à H+1 dans un hôpital sans coronarographie, si le délai de transfert vers l'angioplastie est estimé à 140 minutes, quelle stratégie de reperfusion est formellement indiquée ?",
          options: [
            "Fibrinolyse immédiate en intraveineuse (délai > 120 min)",
            "Transfert d'urgence sans thrombolyse pour angioplastie primaire",
            "Traitement médical par héparine seule et surveillance en USIC",
            "Épreuve d'effort précoce à 48 heures"
          ],
          correctIndex: 0,
          explanation: "La règle canonique des recommandations ESC : si l'angioplastie ne peut pas être réalisée dans les 120 minutes suivant le premier contact médical, la fibrinolyse immédiate est prioritaire (suivie d'un transfert immédiat).",
          fsrsDays: 16,
        },
        {
          id: "KI-CARDIO-02",
          dimension: "RAPPEL DE PRÉCISION",
          dimensionColor: "text-[#C26F1E] bg-[#FDF4E7] border-[#E8C5A0]",
          question: "Quelle est la posologie de charge recommandée pour l'Aspirine lors de la phase aiguë d'un syndrome coronarien aigu ?",
          options: [
            "150 à 300 mg en IV ou per os",
            "50 à 75 mg en sous-cutané",
            "500 à 1000 mg en perfusion sur 24h",
            "Pas d'aspirine en phase aiguë"
          ],
          correctIndex: 0,
          explanation: "Dose de charge de 150 à 300 mg (souvent 250 mg IV), associée à un inhibiteur du récepteur P2Y12.",
          fsrsDays: 24,
        }
      ]
    },
    droit: {
      name: "⚖️ Droit des Contrats (CRFPA / L2)",
      doc: "Code_Civil_Art_1179_Doctrine.pdf (p. 42)",
      cards: [
        {
          id: "KI-DROIT-01",
          dimension: "SÉLECTION & QUALIFICATION",
          dimensionColor: "text-[#1D3557] bg-[#E6EDF5] border-[#BDD0E4]",
          question: "Un contrat est conclu sous l'empire de la violence d'une partie. Quelle est la nature de la nullité encourue et qui est recevable à l'invoquer ?",
          options: [
            "Nullité relative, invocable uniquement par la victime de la violence",
            "Nullité absolue, invocable par tout intéressé et le ministère public",
            "Caducité automatique sans intervention judiciaire",
            "Inopposabilité aux tiers exclusivement"
          ],
          correctIndex: 0,
          explanation: "Article 1179 du Code civil : la nullité est relative lorsque la règle violée a pour seul objet la sauvegarde d'un intérêt privé (ici la protection du consentement de la victime).",
          fsrsDays: 21,
        }
      ]
    },
    cognition: {
      name: "🧠 Sciences Cognitives (Self-Learning)",
      doc: "Ebbinghaus_FSRS_Retrieval_Practice.pdf (p. 28)",
      cards: [
        {
          id: "KI-COG-01",
          dimension: "GÉNÉRALISATION & PRINCIPE",
          dimensionColor: "text-[#2E7D32] bg-[#E8F5E9] border-[#C8E6C9]",
          question: "Pourquoi l'auto-évaluation immédiate ('J'ai regardé la réponse, je la savais') produit-elle l'illusion métacognitive de compétence ?",
          options: [
            "Le biais de rétrospection : voir la solution active le sentiment trompeur de familiarité facile",
            "La mémoire de travail s'efface en 20 millisecondes",
            "Le cerveau ne retient que les images et jamais les textes",
            "La répétition espacée est inefficace pour les concepts abstraits"
          ],
          correctIndex: 0,
          explanation: "La 'fluency illusion' : reconnaître une information quand elle est sous nos yeux n'a rien à voir avec la capacité autonome de la récupérer en mémoire de travail à froid.",
          fsrsDays: 30,
        }
      ]
    }
  };

  const currentTopicData = topics[selectedTopic];
  const currentCard = currentTopicData.cards[stepIndex % currentTopicData.cards.length];

  const handleSelectOption = (idx) => {
    if (isRevealed) return;
    setUserAnswer(idx);
  };

  const handleValidate = () => {
    if (userAnswer === "") return;
    setIsRevealed(true);
  };

  const handleReset = () => {
    setUserAnswer("");
    setIsRevealed(false);
    setConfidence(null);
  };

  const handleNext = () => {
    handleReset();
    setStepIndex((prev) => (prev + 1) % currentTopicData.cards.length);
  };

  return (
    <section id="sandbox" className="py-20 md:py-28 bg-[#F8F5EF] border-t border-[#DDD8CD] canvas-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre & accroche Sandbox */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="obeya-chip bg-[#141414] text-white border-[#141414]">
              <Play className="w-3 h-3 fill-[#FFD60A] text-[#FFD60A]" />
              SANDBOX INTERACTIVE — ZÉRO INSCRIPTION
            </span>
            <span className="font-mono-tech text-xs text-[#5E5D57]">
              Moteur d'Evidence en direct
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414]">
            Testez un vrai système d'entraînement,{" "}
            <span className="font-serif-editorial italic font-normal text-[#C26F1E] block">
              pas une simple démo en vidéo.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E5D57]">
            Choisissez un domaine, formulez votre réponse avant révélation et découvrez 
            comment le moteur FSRS calcule mathématiquement votre prochain rappel.
          </p>
        </div>

        {/* Sélecteur de matière / domaine */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {Object.entries(topics).map(([key, item]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedTopic(key);
                handleReset();
                setStepIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedTopic === key
                  ? "bg-[#1D3557] text-white shadow-sm"
                  : "bg-white text-[#5E5D57] hover:text-[#141414] border border-[#DDD8CD]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Le Simulateur de Carte 4D */}
        <div className="mt-8 max-w-4xl obeya-card rounded-2xl p-6 sm:p-9 bg-white border border-[#DDD8CD] shadow-sm relative">
          
          {/* Header de la carte */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DDD8CD]">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#FFD60A] border border-[#CCA700]" />
              <span className="font-mono-tech text-xs font-bold text-[#141414]">
                {currentCard.id}
              </span>
              <span className={`obeya-chip text-[11px] ${currentCard.dimensionColor}`}>
                DIMENSION : {currentCard.dimension}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#5E5D57]">
              <FileText className="w-3.5 h-3.5 text-[#C26F1E]" />
              <span className="truncate max-w-[240px] sm:max-w-none">{currentTopicData.doc}</span>
            </div>
          </div>

          {/* Énoncé de la question */}
          <div className="py-6 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#141414] leading-snug">
              {currentCard.question}
            </h3>

            {/* Liste des options */}
            <div className="space-y-2.5 pt-2">
              {currentCard.options.map((option, idx) => {
                const isSelected = userAnswer === idx;
                let optionStyle = "border-[#DDD8CD] bg-[#FAF8F5] text-[#141414] hover:bg-[#F2EFE8]";

                if (isRevealed) {
                  if (idx === currentCard.correctIndex) {
                    optionStyle = "border-[#2E7D32] bg-[#E8F5E9] text-[#1B5E20] font-semibold";
                  } else if (isSelected && idx !== currentCard.correctIndex) {
                    optionStyle = "border-[#C62828] bg-[#FFEBEE] text-[#B71C1C]";
                  } else {
                    optionStyle = "border-[#DDD8CD]/60 bg-white/40 text-[#8E8D86] opacity-60";
                  }
                } else if (isSelected) {
                  optionStyle = "border-[#1D3557] bg-[#E6EDF5] text-[#1D3557] font-semibold ring-1 ring-[#1D3557]";
                }

                return (
                  <button
                    key={idx}
                    disabled={isRevealed}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className="font-mono-tech text-xs font-bold shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center bg-white border border-[#DDD8CD]">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Zone d'action : Valider la preuve */}
          {!isRevealed ? (
            <div className="pt-4 border-t border-[#DDD8CD] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#5E5D57] flex items-center gap-1.5 font-mono-tech">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                Règle de l'Evidence : formulation active avant la révélation.
              </span>

              <button
                disabled={userAnswer === ""}
                onClick={handleValidate}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  userAnswer !== ""
                    ? "bg-[#141414] text-white hover:bg-[#2A2925] shadow-sm cursor-pointer"
                    : "bg-[#DDD8CD] text-[#8E8D86] cursor-not-allowed"
                }`}
              >
                Valider ma réponse (Certifier la preuve)
              </button>
            </div>
          ) : (
            /* Panneau post-révélation : Explication et moteur FSRS */
            <div className="pt-4 border-t border-[#DDD8CD] space-y-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD8CD] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono-tech text-[#1D3557]">
                  <Sparkles className="w-4 h-4 text-[#C26F1E]" />
                  <span>ANALYSE & EXPLICATION DU POLYCOPIÉ</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5E5D57] leading-relaxed">
                  {currentCard.explanation}
                </p>
              </div>

              {/* Télémétrie FSRS en direct */}
              <div className="p-4 rounded-xl bg-[#E6EDF5] border border-[#BDD0E4] flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono-tech font-bold text-[#1D3557] uppercase tracking-wide block">
                    RÉSULTAT DU SCHEDULER FSRS v5
                  </span>
                  <p className="text-xs text-[#1D3557]">
                    {userAnswer === currentCard.correctIndex ? (
                      <span className="font-semibold text-[#2E7D32]">
                        ✓ Preuve autonome validée. Intervalle stabilisé à J+{currentCard.fsrsDays}.
                      </span>
                    ) : (
                      <span className="font-semibold text-[#C62828]">
                        ✗ Erreur capturée. La notion passe au statut AT-RISK pour révision dans 24h.
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="px-3 py-1.5 rounded-lg border border-[#BDD0E4] bg-white text-xs font-medium text-[#1D3557] hover:bg-[#F2EFE8] flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Rejouer
                  </button>

                  <a
                    href="http://localhost:5173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg bg-[#1D3557] text-white text-xs font-semibold hover:bg-[#152740] flex items-center gap-1"
                  >
                    <span>Importer mes cours dans l'app</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default SandboxTeaser;

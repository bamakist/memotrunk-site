import React from "react";
import { ArrowRight, CheckCircle2, Play, Sparkles, FileText, Brain, Target, ShieldCheck } from "lucide-react";

export function Hero({ onOpenDemo }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden canvas-grid">
      {/* Halo subtil d'arrière-plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#FFD60A]/10 via-[#C26F1E]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne Gauche : Copywriting percutant */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow façon Obeya */}
            <div className="inline-flex items-center gap-2">
              <span className="obeya-chip bg-[#E6EDF5] text-[#1D3557] border-[#BDD0E4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D3557] animate-pulse" />
                MÉTHODE DE MAÎTRISE COGNITIVE V1.2
              </span>
              <span className="hidden sm:inline-block font-mono-tech text-[11px] text-[#5E5D57]">
                Moteur FSRS × 4 Dimensions
              </span>
            </div>

            {/* Headline percutante */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141414] leading-[1.12]">
              Ceux qui retiennent vraiment ne relisent pas leurs notes.{" "}
              <span className="font-serif-editorial font-normal italic text-[#C26F1E] block mt-1">
                Ils construisent une maîtrise active.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#5E5D57] leading-relaxed max-w-2xl font-normal">
              MemoTrunk transforme vos cours, livres et documents en savoir immédiatement mobilisable.
              Ingestion structurée de concepts (KI), entraînement sans complaisance en 4 dimensions,
              et espacement mathématique FSRS pour terrasser l'oubli.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#sandbox"
                onClick={(e) => {
                  if (onOpenDemo) {
                    e.preventDefault();
                    onOpenDemo();
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#141414] text-white hover:bg-[#2A2925] text-base font-semibold shadow-md shadow-[#141414]/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Play className="w-4 h-4 fill-[#FFD60A] text-[#FFD60A]" />
                <span>Tester la Sandbox — sans inscription</span>
              </a>

              <a
                href="#methode"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#DDD8CD] hover:border-[#B8B2A5] text-[#141414] hover:bg-[#F2EFE8] text-base font-medium transition-all"
              >
                <span>Découvrir la méthode 4D</span>
                <ArrowRight className="w-4 h-4 text-[#5E5D57]" />
              </a>
            </div>

            {/* Micro reassurance */}
            <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm text-[#5E5D57]">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
              <span>
                Conçu pour les <strong>concours d'élite</strong>, les <strong>autodidactes</strong>, les <strong>étudiants</strong> et les <strong>travailleurs du savoir</strong>.
              </span>
            </div>

          </div>

          {/* Colonne Droite : Triptyque annoté réaliste (Signature Obeya) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Carte Principale : L'écran d'entraînement 4D */}
              <div className="obeya-card rounded-2xl p-5 relative z-20 bg-white">
                <div className="flex items-center justify-between pb-3.5 border-b border-[#DDD8CD]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD60A]" />
                    <span className="font-mono-tech text-xs font-semibold text-[#141414]">KI-CARDIO-087</span>
                  </div>
                  <span className="obeya-chip text-[11px] bg-[#E6EDF5] text-[#1D3557] border-[#BDD0E4]">
                    DIMENSION : SÉLECTION
                  </span>
                </div>

                <div className="pt-3.5 space-y-3">
                  <p className="text-xs font-mono-tech text-[#5E5D57] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C26F1E]" />
                    <span>Source : Collège_Cardiologie_2026.pdf (p. 142)</span>
                  </p>

                  <h3 className="text-sm font-semibold text-[#141414] leading-snug">
                    Devant un SCA ST+ vu à H+3 dans un centre sans salle de KT à moins de 120 min, quelle est la décision prioritaire ?
                  </h3>

                  {/* Zone de tentative active (Preuve avant révélation) */}
                  <div className="p-3 bg-[#F8F5EF] rounded-xl border border-[#DDD8CD] space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#5E5D57]">
                      <span>VOTRE RÉPONSE (AVANT RÉVÉLATION)</span>
                      <span className="text-[#2E7D32] font-semibold">Preuve certifiée</span>
                    </div>
                    <p className="text-xs text-[#141414] font-medium bg-white p-2 rounded-lg border border-[#DDD8CD]">
                      Fibrinolyse immédiate IV + transfert d'urgence en centre de coronarographie
                    </p>
                  </div>

                  {/* Jauge FSRS */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono-tech border-t border-[#DDD8CD]/70">
                    <span className="text-[#5E5D57]">Stabilité FSRS :</span>
                    <span className="font-bold text-[#1D3557] bg-[#E6EDF5] px-2 py-0.5 rounded">
                      Prochaine révision dans 18 jours
                    </span>
                  </div>
                </div>

                {/* Badge d'annotation 1 */}
                <div className="absolute -top-3 -right-3 bg-[#141414] text-white text-[11px] font-mono-tech px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFD60A]" />
                  <span>Zéro triche métacognitive</span>
                </div>
              </div>

              {/* Carte Secondaire en arrière-plan : Ingestion Source PDF */}
              <div className="absolute -bottom-6 -left-6 w-full obeya-card rounded-2xl p-4 bg-[#FAF8F5] border border-[#DDD8CD] z-10 hidden sm:block opacity-95">
                <div className="flex items-center justify-between text-xs font-mono-tech pb-2 border-b border-[#DDD8CD]">
                  <span className="text-[#5E5D57] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C26F1E]" />
                    Extraction IA structurée
                  </span>
                  <span className="text-[#2E7D32] font-semibold">100% Sourcé</span>
                </div>
                <p className="text-[11px] text-[#5E5D57] pt-2">
                  142 concepts extraits • 0 hallucination • Liens vers chaque paragraphe.
                </p>
              </div>

              {/* Badge d'annotation 2 */}
              <div className="absolute -bottom-8 right-4 bg-[#C26F1E] text-white text-[11px] font-mono-tech px-2.5 py-1 rounded-md shadow-sm z-30">
                <span>Rétention garantie par FSRS v5</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

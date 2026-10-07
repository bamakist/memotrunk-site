import React from "react";
import { Play, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function FinalCta({ onOpenDemo }) {
  return (
    <section className="py-20 md:py-28 bg-[#141414] text-white relative overflow-hidden">
      {/* Halo d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FFD60A]/15 via-[#C26F1E]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2">
          <span className="font-mono-tech text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#FFD60A] border border-white/15">
            PASSEZ À LA MAÎTRISE ACTIVE
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Le savoir n'a de valeur que si votre esprit{" "}
          <span className="font-serif-editorial italic font-normal text-[#FFD60A] block">
            peut le mobiliser quand vous en avez besoin.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#DDD8CD] max-w-2xl mx-auto font-normal leading-relaxed">
          Arrêtez d'accumuler des notes que vous oublierez dans trois mois. 
          Testez l'entraînement 4D immédiatement dans la Sandbox ou importez vos premiers cours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#sandbox"
            onClick={(e) => {
              if (onOpenDemo) {
                e.preventDefault();
                onOpenDemo();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FFD60A] text-[#141414] hover:bg-[#FFE047] text-base font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-4 h-4 fill-[#141414] text-[#141414]" />
            <span>Tester la Sandbox — sans inscription</span>
          </a>

          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base font-semibold transition-all"
          >
            <span>Ouvrir l'application</span>
            <ArrowRight className="w-4 h-4 text-[#DDD8CD]" />
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono-tech text-[#8E8D86]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
            Preuve certifiée avant révélation
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD60A]" />
            Extraction PDF sourcée
          </span>
          <span>Algorithme FSRS v5 intégré</span>
        </div>

      </div>
    </section>
  );
}

export default FinalCta;

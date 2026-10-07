import React from "react";
import { MemoTrunkLogo } from "./MemoTrunkLogo";
import { ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#DDD8CD] pt-16 pb-12 text-[#5E5D57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#DDD8CD]">
          
          {/* Colonne 1 : Marque & Vision */}
          <div className="lg:col-span-2 space-y-4">
            <MemoTrunkLogo className="h-8" />
            <p className="text-xs sm:text-sm text-[#5E5D57] max-w-sm leading-relaxed">
              Le système de maîtrise cognitive qui transforme vos cours et livres en savoir durable et immédiatement mobilisable.
            </p>
            <div className="pt-2 font-mono-tech text-xs text-[#8E8D86]">
              Architecture FSRS v5 • Modèle d'Evidence à 4 Dimensions
            </div>
          </div>

          {/* Colonne 2 : Produit */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#141414] font-mono-tech uppercase tracking-wider">
              PRODUIT
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#methode" className="hover:text-[#141414] transition-colors">La Méthode 4D</a></li>
              <li><a href="#sandbox" className="hover:text-[#141414] transition-colors">Sandbox Interactive</a></li>
              <li><a href="#comparatif" className="hover:text-[#141414] transition-colors">Le Choc Méthodologique</a></li>
              <li><a href="#tarifs" className="hover:text-[#141414] transition-colors">Tarifs & Abonnements</a></li>
              <li>
                <a 
                  href="http://localhost:5173" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#141414] transition-colors inline-flex items-center gap-1 text-[#1D3557] font-semibold"
                >
                  <span>Accès App locale</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Profils */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#141414] font-mono-tech uppercase tracking-wider">
              PROFILS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pour-qui" className="hover:text-[#141414] transition-colors">Concours d'Élite (PASS, CRFPA)</a></li>
              <li><a href="#pour-qui" className="hover:text-[#141414] transition-colors">Cursus Universitaire & CPGE</a></li>
              <li><a href="#pour-qui" className="hover:text-[#141414] transition-colors">Autodidactes & Essais</a></li>
              <li><a href="#pour-qui" className="hover:text-[#141414] transition-colors">Knowledge Workers & Consultants</a></li>
              <li><a href="#pour-qui" className="hover:text-[#141414] transition-colors">Reconversion & Tech</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Rigueur & Sécurité */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#141414] font-mono-tech uppercase tracking-wider">
              ÉTHIQUE & SÉCURITÉ
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-[#141414] font-medium">Protection des cours :</span> Espace privé étanche</li>
              <li><span className="text-[#141414] font-medium">Zéro modèle tiers :</span> Pas de fuite de données</li>
              <li><span className="text-[#141414] font-medium">Filiation exacte :</span> Citations vérifiables</li>
              <li><span className="text-[#141414] font-medium">PWA :</span> 100% Hors-ligne possible</li>
            </ul>
          </div>

        </div>

        {/* Ligne inférieure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#8E8D86]">
          <div>
            © 2026 MemoTrunk. Tous droits réservés.
          </div>
          <div>
            Inspiré par la rigueur du management visuel et des sciences cognitives.
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

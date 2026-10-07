import React, { useState, useEffect } from "react";
import { MemoTrunkLogo } from "./MemoTrunkLogo";
import { ArrowRight, ExternalLink, Menu, X, Play } from "lucide-react";

export function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#pour-qui", label: "Pour qui" },
    { href: "#sandbox", label: "Sandbox démo" },
    { href: "#methode", label: "La Méthode 4D" },
    { href: "#comparatif", label: "Le Choc" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#DDD8CD] shadow-[0_1px_3px_rgba(20,20,20,0.03)]"
          : "bg-transparent border-b border-[#DDD8CD]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <MemoTrunkLogo className="h-8" />
          <span className="hidden sm:inline-block font-mono-tech text-[10px] text-[#5E5D57] bg-[#EAE5D8] px-2 py-0.5 rounded border border-[#DDD8CD]">
            v1.2 FSRS
          </span>
        </a>

        {/* Liens Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-[#5E5D57] hover:text-[#141414] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions à droite */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] font-medium text-[#5E5D57] hover:text-[#141414] px-3 py-1.5 rounded-lg hover:bg-[#EFEAE0] transition-colors flex items-center gap-1.5"
          >
            <span>Se connecter</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8E8D86]" />
          </a>

          <a
            href="#sandbox"
            onClick={(e) => {
              if (onOpenDemo) {
                e.preventDefault();
                onOpenDemo();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141414] text-white hover:bg-[#2C2B27] text-[13.5px] font-semibold shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <Play className="w-3.5 h-3.5 fill-[#FFD60A] text-[#FFD60A]" />
            <span>Tester la Sandbox</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#sandbox"
            className="px-3 py-1.5 rounded-lg bg-[#141414] text-white text-[12px] font-semibold"
          >
            Sandbox
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#141414] rounded-lg hover:bg-[#EAE5D8]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#DDD8CD] bg-[#F8F5EF] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#5E5D57] hover:text-[#141414] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#DDD8CD] flex flex-col gap-2">
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 text-sm font-medium text-[#141414] bg-[#EAE5D8] rounded-lg"
            >
              Se connecter à l'app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

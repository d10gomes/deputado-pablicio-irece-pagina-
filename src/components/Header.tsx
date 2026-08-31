import { useState } from "react";
import { Menu, X } from "lucide-react";
import { candidato } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";

const LINKS = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Presença", href: "#presenca" },
  { label: "Propostas", href: "#propostas" },
  { label: "Participação", href: "#participar" },
];

export default function Header() {
  const { openModal } = useLeadModal();
  const [menuAberto, setMenuAberto] = useState(false);

  function aoClicarLink(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setMenuAberto(false);
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-blue-900/90 backdrop-blur-md border-b border-white/10">
      <div className="h-[3px] flex">
        <span className="flex-[2] bg-brand-green-700" />
        <span className="flex-[2] bg-brand-green-500" />
        <span className="flex-1 bg-brand-blue-700" />
        <span className="flex-1 bg-brand-yellow-500" />
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-white">
        <a
          href="#"
          onClick={(e) => aoClicarLink(e, "#")}
          className="font-display font-extrabold tracking-tight text-sm sm:text-lg truncate"
        >
          {candidato.nome.toUpperCase()}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/85">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => aoClicarLink(e, link.href)}
              className="hover:text-brand-yellow-500 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openModal}
            className="hidden sm:flex shrink-0 items-center gap-1.5 sm:gap-2 bg-brand-yellow-500 text-brand-blue-900 font-display font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full hover:brightness-95 active:scale-95 transition shadow-md shadow-black/10"
          >
            Vote
            <span className="bg-brand-blue-900 text-brand-yellow-500 rounded-full px-2 py-0.5 text-[11px] sm:text-xs">
              {candidato.numero}
            </span>
          </button>

          <button
            onClick={openModal}
            className="sm:hidden shrink-0 bg-brand-yellow-500 text-brand-blue-900 font-display font-bold text-xs px-3 py-1.5 rounded-full active:scale-95 transition"
          >
            {candidato.numero}
          </button>

          <button
            onClick={() => setMenuAberto((v) => !v)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            className="md:hidden shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            {menuAberto ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[52px] bg-black/40"
            onClick={() => setMenuAberto(false)}
          />
          <nav className="md:hidden relative bg-brand-blue-900 border-t border-white/10 px-4 sm:px-5 py-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => aoClicarLink(e, link.href)}
                className="text-white/90 font-semibold py-2.5 border-b border-white/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}

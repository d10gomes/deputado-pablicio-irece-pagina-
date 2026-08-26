import { candidato } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";

export default function Header() {
  const { openModal } = useLeadModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#022873]/90 backdrop-blur-md border-b border-white/10">
      <div className="h-[3px] flex">
        <span className="flex-1 bg-[#f2cb05]" />
        <span className="flex-1 bg-[#03a63c]" />
        <span className="flex-1 bg-[#0339a6]" />
        <span className="flex-1 bg-[#02732a]" />
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-white">
        <span className="font-display font-extrabold tracking-tight text-sm sm:text-lg truncate">
          {candidato.nome.toUpperCase()}
        </span>
        <button
          onClick={openModal}
          className="shrink-0 flex items-center gap-1.5 sm:gap-2 bg-[#f2cb05] text-[#022873] font-display font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full hover:brightness-95 active:scale-95 transition shadow-md shadow-black/10"
        >
          Vote
          <span className="bg-[#022873] text-[#f2cb05] rounded-full px-2 py-0.5 text-[11px] sm:text-xs">
            {candidato.numero}
          </span>
        </button>
      </div>
    </header>
  );
}

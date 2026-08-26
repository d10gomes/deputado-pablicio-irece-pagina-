import { candidato } from "../data/content";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#022873]/95 backdrop-blur text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <span className="font-display font-extrabold tracking-tight text-lg">
          {candidato.nome.toUpperCase()}
        </span>
        <a
          href="#participar"
          className="flex items-center gap-2 bg-[#f2cb05] text-[#022873] font-display font-bold text-sm px-4 py-2 rounded-full hover:brightness-95 transition"
        >
          Vote
          <span className="bg-[#022873] text-[#f2cb05] rounded-full px-2 py-0.5 text-xs">
            {candidato.numero}
          </span>
        </a>
      </div>
    </header>
  );
}

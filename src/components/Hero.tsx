import { ChevronDown } from "lucide-react";
import { candidato, bio } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";
import fotoPablicio from "../assets/pablicio-cutout.png";

export default function Hero() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative bg-gradient-to-br from-[#022873] via-[#022873] to-[#0339a6] text-white pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#03a63c]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#f2cb05]/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-5 grid md:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-10 md:gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="inline-flex items-center gap-2 uppercase tracking-widest text-[#f2cb05] font-semibold text-[11px] sm:text-sm mb-3 sm:mb-4 rounded-full border border-[#f2cb05]/30 bg-[#f2cb05]/10 px-3.5 py-1.5">
            {candidato.cargo} · {candidato.partido} ({candidato.partidoSigla})
          </p>
          <h1 className="font-display font-extrabold text-[2rem] leading-[1.08] sm:text-5xl md:text-6xl sm:leading-[1.05] mb-4 sm:mb-6 bg-gradient-to-r from-white via-white to-[#f2cb05]/90 bg-clip-text text-transparent">
            {candidato.nome.toUpperCase()}
          </h1>

          <p className="text-base sm:text-xl font-semibold mb-2.5 sm:mb-3 text-white/95">
            {bio.fraseAbertura}
          </p>
          <p className="text-sm sm:text-base text-white/75 mb-6 sm:mb-9 max-w-xl mx-auto md:mx-0">
            {bio.aberturaTexto}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-[#f2cb05] text-[#022873] font-display font-bold px-7 py-3.5 rounded-full hover:brightness-95 active:scale-[0.98] sm:hover:scale-[1.02] transition shadow-lg shadow-black/20"
            >
              Vote {candidato.numero}
            </button>
            <a
              href="#video"
              className="inline-flex items-center gap-1.5 text-white/90 font-semibold underline underline-offset-4 decoration-[#03a63c] hover:text-[#f2cb05] transition"
            >
              Veja o vídeo
              <ChevronDown size={16} />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative flex justify-center w-full">
            {/* glow colorido atrás da figura, no lugar da antiga caixa branca */}
            <div className="absolute top-4 w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#f2cb05] via-[#03a63c] to-[#0339a6] opacity-50 blur-3xl" />
            {/* sombra de "chão" sob os pés */}
            <div className="absolute bottom-2 sm:bottom-4 w-32 sm:w-48 h-5 sm:h-7 bg-black/40 rounded-[50%] blur-lg" />
            <img
              src={fotoPablicio}
              alt={candidato.nome}
              className="relative w-48 sm:w-72 md:w-[22rem] object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div className="mt-1 sm:mt-2 text-center">
            <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#f2cb05] drop-shadow-sm">
              {candidato.numero}
            </div>
            <p className="text-white/70 text-xs sm:text-sm mt-1 tracking-wide">
              {candidato.bandeira}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1.5 flex">
        <span className="flex-1 bg-[#f2cb05]" />
        <span className="flex-1 bg-[#03a63c]" />
        <span className="flex-1 bg-[#02732a]" />
        <span className="flex-1 bg-[#0339a6]" />
      </div>
    </section>
  );
}

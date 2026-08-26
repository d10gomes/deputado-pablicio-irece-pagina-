import { candidato, bio } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";
import fotoPablicio from "../assets/pablicio-foto.jpg";

export default function Hero() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative bg-gradient-to-br from-[#022873] via-[#022873] to-[#0339a6] text-white pt-32 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#03a63c]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-[#f2cb05]/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="inline-flex items-center gap-2 uppercase tracking-widest text-[#f2cb05] font-semibold text-xs sm:text-sm mb-4 rounded-full border border-[#f2cb05]/30 bg-[#f2cb05]/10 px-4 py-1.5">
            Candidato a {candidato.cargo} · {candidato.partido} ({candidato.partidoSigla})
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 bg-gradient-to-r from-white via-white to-[#f2cb05]/90 bg-clip-text text-transparent">
            {candidato.nome.toUpperCase()}
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-3 text-white/95">
            {bio.fraseAbertura}
          </p>
          <p className="text-white/75 mb-9 max-w-xl mx-auto md:mx-0">
            {bio.aberturaTexto}
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <button
              onClick={openModal}
              className="bg-[#f2cb05] text-[#022873] font-display font-bold px-7 py-3.5 rounded-full hover:brightness-95 hover:scale-[1.02] transition shadow-lg shadow-black/20"
            >
              Vote {candidato.numero}
            </button>
            <a
              href="#historia"
              className="text-white/90 font-semibold underline underline-offset-4 decoration-[#03a63c] hover:text-[#f2cb05] transition"
            >
              Continue lendo
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#f2cb05] via-[#03a63c] to-[#0339a6] opacity-70 blur-md" />
            <img
              src={fotoPablicio}
              alt={candidato.nome}
              className="relative w-64 sm:w-80 rounded-[1.75rem] shadow-2xl object-cover ring-1 ring-white/20"
            />
          </div>
          <div className="mt-7 text-center">
            <div className="font-display font-extrabold text-5xl md:text-6xl text-[#f2cb05] drop-shadow-sm">
              {candidato.numero}
            </div>
            <p className="text-white/70 text-sm mt-1 tracking-wide">{candidato.bandeira}</p>
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

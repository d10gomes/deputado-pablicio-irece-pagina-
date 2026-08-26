import { candidato, bio } from "../data/content";
import fotoPablicio from "../assets/pablicio-foto.jpg";

export default function Hero() {
  return (
    <section className="relative bg-[#022873] text-white pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-2 flex">
        <span className="flex-1 bg-[#f2cb05]" />
        <span className="flex-1 bg-[#03a63c]" />
        <span className="flex-1 bg-[#0339a6]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-sm mb-3">
            Candidato a {candidato.cargo} · {candidato.partido} ({candidato.partidoSigla})
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            {candidato.nome.toUpperCase()}
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-3 text-white/95">
            {bio.fraseAbertura}
          </p>
          <p className="text-white/80 mb-8 max-w-xl mx-auto md:mx-0">
            {bio.aberturaTexto}
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <a
              href="#participar"
              className="bg-[#f2cb05] text-[#022873] font-display font-bold px-6 py-3 rounded-full hover:brightness-95 transition"
            >
              Vote {candidato.numero}
            </a>
            <a
              href="#historia"
              className="text-white/90 font-semibold underline underline-offset-4 hover:text-[#f2cb05] transition"
            >
              Continue lendo
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#f2cb05] via-[#03a63c] to-[#0339a6] opacity-70 blur-md" />
            <img
              src={fotoPablicio}
              alt={candidato.nome}
              className="relative w-64 sm:w-80 rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <div className="mt-6 text-center">
            <div className="font-display font-extrabold text-5xl text-[#f2cb05]">
              {candidato.numero}
            </div>
            <p className="text-white/70 text-sm mt-1">{candidato.bandeira}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { candidato } from "../data/content";

export default function FinalCta() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-5">
        <p className="text-[#0e1b2a]/60 mb-2 uppercase tracking-widest text-xs sm:text-sm font-semibold">
          No dia da eleição, vote
        </p>
        <div className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl bg-gradient-to-r from-[#022873] via-[#0339a6] to-[#02732a] bg-clip-text text-transparent mb-3">
          {candidato.numero}
        </div>
        <p className="font-display font-bold text-base sm:text-xl text-[#022873]">
          {candidato.nome} · {candidato.cargo}
        </p>
        <p className="text-sm sm:text-base text-[#0e1b2a]/50">{candidato.bandeira}</p>
      </div>
    </section>
  );
}

import { candidato } from "../data/content";

export default function FinalCta() {
  return (
    <section className="bg-white py-16 md:py-20 text-center">
      <div className="max-w-2xl mx-auto px-5">
        <p className="text-[#0e1b2a]/60 mb-2 uppercase tracking-widest text-sm font-semibold">
          No dia da eleição, vote
        </p>
        <div className="font-display font-extrabold text-6xl md:text-8xl bg-gradient-to-r from-[#022873] via-[#0339a6] to-[#02732a] bg-clip-text text-transparent mb-3">
          {candidato.numero}
        </div>
        <p className="font-display font-bold text-xl text-[#022873]">
          {candidato.nome} · {candidato.cargo}
        </p>
        <p className="text-[#0e1b2a]/50">{candidato.bandeira}</p>
      </div>
    </section>
  );
}

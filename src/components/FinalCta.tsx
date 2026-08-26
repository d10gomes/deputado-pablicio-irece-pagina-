import { candidato } from "../data/content";

export default function FinalCta() {
  return (
    <section className="bg-white py-16 md:py-20 text-center">
      <div className="max-w-2xl mx-auto px-5">
        <p className="text-[#0e1b2a]/70 mb-2">No dia da eleição, vote</p>
        <div className="font-display font-extrabold text-6xl md:text-7xl text-[#022873] mb-3">
          {candidato.numero}
        </div>
        <p className="font-display font-bold text-xl">
          {candidato.nome} · {candidato.cargo}
        </p>
        <p className="text-[#0e1b2a]/60">{candidato.bandeira}</p>
      </div>
    </section>
  );
}

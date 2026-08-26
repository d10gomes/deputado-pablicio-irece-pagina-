import { bio, candidato } from "../data/content";

export default function Bio() {
  return (
    <section className="bg-[#f6f8fa] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <p className="uppercase tracking-widest text-[#0339a6] font-semibold text-sm mb-4 text-center">
          Quem é ele
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-8 text-center leading-tight">
          {candidato.nome} nasceu na terra que quer representar.
        </h2>

        <div className="space-y-4 text-[#0e1b2a]/85 text-lg">
          {bio.quemE.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>

        <p className="font-display font-bold text-2xl text-[#022873] text-center mt-10">
          "{bio.citacao}"
        </p>
      </div>
    </section>
  );
}

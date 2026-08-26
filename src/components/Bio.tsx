import { bio, candidato } from "../data/content";

export default function Bio() {
  return (
    <section className="bg-[#f6f8fa] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <p className="uppercase tracking-widest text-[#0339a6] font-semibold text-sm mb-4 text-center">
          <span className="rounded-full bg-[#0339a6]/10 px-4 py-1.5">Quem é ele</span>
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-10 text-center leading-tight text-[#022873]">
          {candidato.nome} nasceu na terra que quer representar.
        </h2>

        <div className="relative pl-6 space-y-5 text-[#0e1b2a]/85 text-lg border-l-2 border-[#0339a6]/20">
          {bio.quemE.map((paragrafo, i) => (
            <p key={i} className="relative">
              <span className="absolute -left-[29px] top-2 w-2.5 h-2.5 rounded-full bg-[#03a63c]" />
              {paragrafo}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#022873] to-[#0339a6] p-8 text-center">
          <p className="font-display font-bold text-xl md:text-2xl text-white">
            "{bio.citacao}"
          </p>
        </div>
      </div>
    </section>
  );
}

import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#02732a] to-[#03a63c] text-white py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#f2cb05]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#022873]/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-white/10 px-3.5 sm:px-4 py-1.5">
            Uma potência que ainda precisa virar riqueza
          </span>
        </p>
        <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 leading-tight">
          O centro-norte da Bahia já produz.
          <br />
          Falta fazer essa riqueza crescer aqui.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm px-3 sm:px-4 py-4 sm:py-6 hover:bg-white/15 transition"
            >
              <div className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#f2cb05]">
                {s.numero}
              </div>
              <p className="text-white/85 text-xs sm:text-sm mt-1.5 sm:mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm sm:text-base text-white/85 max-w-2xl mx-auto mt-8 sm:mt-12">
          Mas potencial não é riqueza. Produção não é desenvolvimento. Precisamos produzir
          melhor, vender melhor e agregar valor aqui — porque produção gera trabalho, trabalho
          gera renda, e renda gera desenvolvimento.
        </p>
        <p className="text-center text-[11px] sm:text-xs text-white/50 mt-4">
          Fonte: Codevasf — projeções dos projetos públicos de irrigação Mirorós e Baixio de
          Irecê.
        </p>
      </div>
    </section>
  );
}

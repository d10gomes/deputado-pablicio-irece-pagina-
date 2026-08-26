import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="bg-[#02732a] text-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-5">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-sm mb-3 text-center">
          Uma potência que ainda precisa virar riqueza
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-12 leading-tight">
          O centro-norte da Bahia já produz.
          <br />
          Falta fazer essa riqueza crescer aqui.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-extrabold text-4xl md:text-5xl text-[#f2cb05]">
                {s.numero}
              </div>
              <p className="text-white/85 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/85 max-w-2xl mx-auto mt-12">
          Mas potencial não é riqueza. Produção não é desenvolvimento. Precisamos produzir
          melhor, vender melhor e agregar valor aqui — porque produção gera trabalho, trabalho
          gera renda, e renda gera desenvolvimento.
        </p>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { eixos } from "../data/content";

const BADGE_CORES = [
  "bg-[#022873] text-[#f2cb05]",
  "bg-[#02732a] text-white",
  "bg-[#0339a6] text-white",
  "bg-[#f2cb05] text-[#022873]",
];

function EixoCard({
  eixo,
  cor,
}: {
  eixo: (typeof eixos)[number];
  cor: string;
}) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="border border-[#e5e4e7] rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <button
        onClick={() => setAberto((v) => !v)}
        className="w-full flex items-start gap-4 p-6 text-left hover:bg-[#f6f8fa] transition"
      >
        <span
          className={`font-display font-extrabold text-2xl rounded-xl w-12 h-12 flex items-center justify-center shrink-0 ${cor}`}
        >
          {eixo.numero}
        </span>
        <span className="flex-1">
          <h3 className="font-display font-bold text-xl md:text-2xl mb-1 text-[#022873]">
            {eixo.titulo}
          </h3>
          <p className="text-[#0e1b2a]/70 text-sm md:text-base">{eixo.contexto}</p>
        </span>
        <ChevronDown
          className={`shrink-0 mt-2 transition-transform text-[#0e1b2a]/50 ${aberto ? "rotate-180" : ""}`}
          size={22}
        />
      </button>

      {aberto && (
        <div className="px-6 pb-6 space-y-4">
          {eixo.propostas.map((p) => (
            <div
              key={p.titulo}
              className="border-t border-[#e5e4e7] pt-4 flex flex-col gap-1"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-semibold text-[#0e1b2a]">{p.titulo}</h4>
                <span className="text-[10px] font-bold uppercase tracking-wide bg-[#0339a6]/10 text-[#0339a6] rounded-full px-2 py-0.5">
                  {p.ferramenta}
                </span>
              </div>
              <p className="text-[#0e1b2a]/70 text-sm">{p.texto}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Plan() {
  return (
    <section id="propostas" className="bg-[#f6f8fa] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5">
        <p className="uppercase tracking-widest text-[#0339a6] font-semibold text-sm mb-3 text-center">
          <span className="rounded-full bg-[#0339a6]/10 px-4 py-1.5">O que ele vai fazer</span>
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-4 leading-tight text-[#022873]">
          Não dá pra prometer obra. Dá pra prometer trabalho.
        </h2>
        <p className="text-center text-[#0e1b2a]/70 max-w-2xl mx-auto mb-12">
          Deputado federal apresenta projeto de lei, coloca emenda no orçamento, articula com
          o governo federal e fiscaliza a execução. Cada proposta abaixo diz qual dessas
          ferramentas será usada.
        </p>

        <div className="space-y-4">
          {eixos.map((eixo, i) => (
            <EixoCard key={eixo.numero} eixo={eixo} cor={BADGE_CORES[i % BADGE_CORES.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

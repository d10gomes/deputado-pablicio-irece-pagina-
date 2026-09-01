import { useState } from "react";
import { ChevronDown, FileDown } from "lucide-react";
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
    <div className="border border-[#e5e4e7] dark:border-white/15 rounded-2xl overflow-hidden bg-white dark:bg-white/5 hover:shadow-lg transition-shadow">
      <button
        onClick={() => setAberto((v) => !v)}
        className="w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-6 text-left hover:bg-[#f6f8fa] dark:hover:bg-white/5 transition"
      >
        <span
          className={`font-display font-extrabold text-lg sm:text-2xl rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 ${cor}`}
        >
          {eixo.numero}
        </span>
        <span className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-base sm:text-xl md:text-2xl mb-1 text-[#022873] dark:text-white">
            {eixo.titulo}
          </h3>
          <p className="text-[#0e1b2a]/70 dark:text-white/70 text-xs sm:text-sm md:text-base">{eixo.contexto}</p>
        </span>
        <ChevronDown
          className={`shrink-0 mt-1.5 sm:mt-2 transition-transform text-[#0e1b2a]/50 dark:text-white/50 ${aberto ? "rotate-180" : ""}`}
          size={20}
        />
      </button>

      {aberto && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4">
          {eixo.propostas.map((p) => (
            <div
              key={p.titulo}
              className="border-t border-[#e5e4e7] dark:border-white/15 pt-3 sm:pt-4 flex flex-col gap-1"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-semibold text-sm sm:text-base text-[#0e1b2a] dark:text-white">
                  {p.titulo}
                </h4>
                <span className="text-[10px] font-bold uppercase tracking-wide bg-[#0339a6]/10 dark:bg-white/10 text-[#0339a6] dark:text-brand-yellow-500 rounded-full px-2 py-0.5">
                  {p.ferramenta}
                </span>
              </div>
              <p className="text-[#0e1b2a]/70 dark:text-white/70 text-xs sm:text-sm">{p.texto}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Plan() {
  return (
    <section id="propostas" className="bg-[#f6f8fa] dark:bg-brand-ink py-12 sm:py-16 md:py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#0339a6] dark:text-brand-yellow-500 font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-[#0339a6]/10 dark:bg-white/10 px-3.5 sm:px-4 py-1.5">
            O que ele vai fazer
          </span>
        </p>
        <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 leading-tight text-[#022873] dark:text-white">
          Não dá pra prometer obra. Dá pra prometer trabalho.
        </h2>
        <p className="text-center text-sm sm:text-base text-[#0e1b2a]/70 dark:text-white/70 max-w-2xl mx-auto mb-8 sm:mb-12">
          Deputado federal apresenta projeto de lei, coloca emenda no orçamento, articula com
          o governo federal e fiscaliza a execução. Cada proposta abaixo diz qual dessas
          ferramentas será usada.
        </p>

        <div className="space-y-3 sm:space-y-4">
          {eixos.map((eixo, i) => (
            <EixoCard key={eixo.numero} eixo={eixo} cor={BADGE_CORES[i % BADGE_CORES.length]} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a
            href="/plano-de-governo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue-900 dark:bg-white/10 text-white font-display font-bold text-sm sm:text-base px-6 py-3 rounded-full hover:brightness-110 active:scale-[0.98] transition"
          >
            <FileDown size={18} />
            Baixar Plano de Governo completo (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

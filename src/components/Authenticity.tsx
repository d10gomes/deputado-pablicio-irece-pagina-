import { FileDown } from "lucide-react";
import { bio } from "../data/content";

export default function Authenticity() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#022873] to-[#0e1b2a] text-white py-12 sm:py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 flex">
        <span className="flex-1 bg-[#f2cb05]" />
        <span className="flex-1 bg-[#03a63c]" />
        <span className="flex-1 bg-[#0339a6]" />
        <span className="flex-1 bg-[#02732a]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-5 text-center">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
          <span className="rounded-full bg-white/10 px-3.5 sm:px-4 py-1.5">
            Quem faz o pedido
          </span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight">
          {bio.autenticidadeTitulo}
        </h2>
        <p className="text-white/85 text-sm sm:text-lg mb-6 sm:mb-8">{bio.autenticidadeTexto}</p>

        <a
          href="/plano-de-governo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-display font-bold text-sm sm:text-base px-6 py-3 rounded-full hover:bg-white/10 active:scale-[0.98] transition"
        >
          <FileDown size={18} />
          Baixar Plano de Governo (PDF)
        </a>
      </div>
    </section>
  );
}

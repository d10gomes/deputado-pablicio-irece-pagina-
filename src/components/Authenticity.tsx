import { bio } from "../data/content";

export default function Authenticity() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#022873] to-[#0e1b2a] text-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 flex">
        <span className="flex-1 bg-[#f2cb05]" />
        <span className="flex-1 bg-[#03a63c]" />
        <span className="flex-1 bg-[#0339a6]" />
        <span className="flex-1 bg-[#02732a]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-5 text-center">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-sm mb-4">
          <span className="rounded-full bg-white/10 px-4 py-1.5">Quem faz o pedido</span>
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6 leading-tight">
          {bio.autenticidadeTitulo}
        </h2>
        <p className="text-white/85 text-lg">{bio.autenticidadeTexto}</p>
      </div>
    </section>
  );
}

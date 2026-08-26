import { bio } from "../data/content";

export default function Authenticity() {
  return (
    <section className="bg-[#022873] text-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-sm mb-4">
          Quem faz o pedido
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6 leading-tight">
          {bio.autenticidadeTitulo}
        </h2>
        <p className="text-white/85 text-lg">{bio.autenticidadeTexto}</p>
      </div>
    </section>
  );
}

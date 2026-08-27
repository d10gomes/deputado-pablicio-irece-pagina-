import { galeria } from "../data/galeria";

export default function Articulacao() {
  if (galeria.length === 0) return null;

  return (
    <section className="bg-[#f6f8fa] py-12 sm:py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#0339a6] font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-[#0339a6]/10 px-3.5 sm:px-4 py-1.5">
            Diálogo e Articulação
          </span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 leading-tight text-[#022873]">
          Presença ativa na conversa política da Bahia.
        </h2>
        <p className="text-center text-sm sm:text-base text-[#0e1b2a]/70 max-w-2xl mx-auto mb-8 sm:mb-12">
          Encontros e conversas que ajudam a construir soluções para o centro-norte do estado.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galeria.map((foto, i) => (
            <figure
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-[#e5e4e7] shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={foto.src}
                alt={foto.legenda}
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <figcaption className="p-4 text-sm text-[#0e1b2a]/80 leading-snug">
                {foto.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

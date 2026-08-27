import { galeria, type FotoGaleria } from "../data/galeria";

function Card({ foto }: { foto: FotoGaleria }) {
  return (
    <figure className="w-40 sm:w-56 shrink-0 rounded-2xl overflow-hidden bg-white border border-[#e5e4e7] shadow-sm">
      <img
        src={foto.src}
        alt={foto.legenda}
        className="w-full aspect-[4/5] object-cover object-top"
      />
      <figcaption className="p-2.5 sm:p-3 h-14 sm:h-16 text-[11px] sm:text-xs text-[#0e1b2a]/80 leading-snug line-clamp-3">
        {foto.legenda}
      </figcaption>
    </figure>
  );
}

function Row({ items, direction }: { items: FotoGaleria[]; direction: "left" | "right" }) {
  if (items.length === 0) return null;
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={
          direction === "left"
            ? "marquee-track flex gap-4 sm:gap-5 w-max animate-[marqueeLeft_28s_linear_infinite] hover:[animation-play-state:paused]"
            : "marquee-track flex gap-4 sm:gap-5 w-max animate-[marqueeRight_32s_linear_infinite] hover:[animation-play-state:paused]"
        }
      >
        {track.map((foto, i) => (
          <Card key={i} foto={foto} />
        ))}
      </div>
    </div>
  );
}

export default function Articulacao() {
  if (galeria.length === 0) return null;

  const meio = Math.ceil(galeria.length / 2);
  const linha1 = galeria.slice(0, meio);
  const linha2 = galeria.slice(meio);

  return (
    <section className="bg-[#f6f8fa] py-12 sm:py-16 md:py-24 overflow-hidden">
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
      </div>

      <div className="space-y-4 sm:space-y-5">
        <Row items={linha1} direction="left" />
        <Row items={linha2} direction="right" />
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { galeria, type FotoGaleria } from "../data/galeria";

const GAP_PX = 20; // precisa bater com o gap-5 do track
const SPEED_PX_POR_SEGUNDO = 36;

function Card({ foto }: { foto: FotoGaleria }) {
  return (
    <figure className="w-40 sm:w-56 shrink-0 rounded-2xl overflow-hidden bg-white border border-[#e5e4e7] shadow-sm">
      <img
        src={foto.src}
        alt={foto.legenda}
        className="w-full aspect-[4/5] object-cover object-top"
        draggable={false}
      />
      <figcaption className="p-2.5 sm:p-3 h-14 sm:h-16 text-[11px] sm:text-xs text-[#0e1b2a]/80 leading-snug line-clamp-3">
        {foto.legenda}
      </figcaption>
    </figure>
  );
}

/**
 * Carrossel em anel: nenhuma foto é duplicada no DOM, uma fileira só. A cada
 * frame o track desliza para a esquerda; quando o primeiro card sai
 * totalmente de vista, o próprio nó DOM é movido pro final (appendChild) e o
 * offset é compensado no mesmo instante — sem passar pelo ciclo de render do
 * React, então não há nenhum salto de sincronização entre a posição e a
 * ordem. O giro nunca acaba e nenhuma imagem aparece repetida na tela.
 */
function useRingCarousel(itemCount: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || itemCount <= 1) return;

    let raf = 0;
    let last = performance.now();

    function tick(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const track = trackRef.current;
      if (track) {
        if (!pausedRef.current) {
          offsetRef.current += SPEED_PX_POR_SEGUNDO * dt;

          const first = track.firstElementChild as HTMLElement | null;
          if (first) {
            const firstWidth = first.getBoundingClientRect().width + GAP_PX;
            if (offsetRef.current >= firstWidth) {
              offsetRef.current -= firstWidth;
              track.appendChild(first);
            }
          }
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [itemCount]);

  return { trackRef, pausedRef };
}

export default function Articulacao() {
  const { trackRef, pausedRef } = useRingCarousel(galeria.length);

  if (galeria.length === 0) return null;

  return (
    <section id="presenca" className="bg-[#f6f8fa] dark:bg-brand-ink py-12 sm:py-16 md:py-24 overflow-hidden scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#0339a6] dark:text-brand-yellow-500 font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-[#0339a6]/10 dark:bg-white/10 px-3.5 sm:px-4 py-1.5">
            Diálogo e Articulação
          </span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 leading-tight text-[#022873] dark:text-white">
          Presença ativa na conversa política da Bahia.
        </h2>
        <p className="text-center text-sm sm:text-base text-[#0e1b2a]/70 dark:text-white/70 max-w-2xl mx-auto mb-8 sm:mb-12">
          Encontros e conversas que ajudam a construir soluções para o centro-norte do estado.
        </p>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div ref={trackRef} className="flex gap-4 sm:gap-5 w-max px-4 sm:px-5">
          {galeria.map((foto, i) => (
            <Card key={i} foto={foto} />
          ))}
        </div>
      </div>
    </section>
  );
}

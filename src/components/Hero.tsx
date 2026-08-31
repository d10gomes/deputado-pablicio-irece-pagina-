import { candidato, hero } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";
import fotoPablicio from "../assets/pablicio-cutout.webp";

// Fade suave só nos ~10% finais da foto (mãos/cinto), onde o recorte termina em corte
// reto — sem isso a transparência real do PNG/WebP ainda passa de "pessoa 100% opaca"
// para "nada" de forma abrupta bem naquela linha, o que lê como borda dura colada.
// Não mexe em nenhum pixel do arquivo original, é só uma máscara de exibição.
const FADE_INFERIOR = {
  WebkitMaskImage:
    "linear-gradient(to bottom, #000 0%, #000 88%, rgba(0,0,0,0.9) 94%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, #000 0%, #000 88%, rgba(0,0,0,0.9) 94%, transparent 100%)",
};

export default function Hero() {
  const { openModal } = useLeadModal();
  const palavrasBandeira = candidato.bandeira.replace(" e ", ", ").split(", ");

  return (
    <section className="relative text-white pt-16 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden bg-[linear-gradient(135deg,var(--color-brand-green-700)_0%,var(--color-brand-green-500)_45%,var(--color-brand-green-700)_100%)]">
      {/* luz radial discreta, só para dar profundidade — não é outra cor, é o mesmo
          verde ganhando uma variação sutil de luminosidade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_35%,transparent_65%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-5 grid md:grid-cols-[1.1fr_0.9fr] md:grid-rows-[auto_auto] gap-3 sm:gap-10 md:gap-x-12 items-center">
        <div className="order-1 md:order-1 md:col-start-1 md:row-start-1 md:self-end text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-white/60 font-semibold text-[11px] sm:text-xs mb-2 sm:mb-3">
            {candidato.nome}
          </p>
          <p className="inline-flex items-center gap-2 uppercase tracking-widest text-brand-yellow-500 font-semibold text-[11px] sm:text-sm mb-2.5 sm:mb-4 rounded-full border border-brand-yellow-500/30 bg-brand-yellow-500/10 px-3.5 py-1.5">
            {candidato.cargo} · {candidato.numero}
          </p>
          <h1 className="font-display font-extrabold text-[2rem] leading-[1.08] sm:text-5xl md:text-6xl sm:leading-[1.05] text-white">
            {hero.headline}
          </h1>
        </div>

        <div className="order-2 md:order-2 md:col-start-2 md:row-start-1 md:row-span-2 relative flex flex-col items-center">
          <div className="relative flex justify-center w-full">
            {/* lema em marca d'água atrás da figura — textura gráfica bem discreta,
                não pode competir com o rosto nem com os textos principais */}
            <div className="absolute inset-0 flex flex-col items-center justify-evenly py-4 pointer-events-none select-none">
              {palavrasBandeira.map((palavra, i) => (
                <span
                  key={i}
                  className="font-display font-extrabold uppercase text-white/[0.07] leading-none text-6xl sm:text-8xl md:text-9xl text-center whitespace-nowrap"
                >
                  {palavra}
                </span>
              ))}
            </div>
            {/* sombra de contato no chão — pequena, só para ancorar os pés */}
            <div className="absolute bottom-1 sm:bottom-3 w-32 sm:w-48 h-5 sm:h-7 bg-black/40 rounded-[50%] blur-lg" />
            <img
              src={fotoPablicio}
              alt={candidato.nome}
              width={577}
              height={786}
              fetchPriority="high"
              style={FADE_INFERIOR}
              className="relative block w-[84vw] max-w-[380px] sm:w-[60vw] sm:max-w-[420px] md:w-[min(560px,44vw)] md:max-w-none h-auto object-contain bg-transparent border-0 shadow-none"
            />
          </div>
          <div className="mt-0.5 sm:mt-2 text-center">
            <div className="font-display font-extrabold text-5xl sm:text-5xl md:text-6xl text-brand-yellow-500 drop-shadow-sm">
              {candidato.numero}
            </div>
            <p className="text-white/80 text-xs sm:text-sm mt-1 tracking-wide">
              {candidato.bandeira}
            </p>
          </div>
        </div>

        <div className="order-3 md:order-3 md:col-start-1 md:row-start-2 md:self-start text-center md:text-left">
          <p className="text-base sm:text-xl font-semibold mt-3 sm:mt-0 mb-4 sm:mb-9 text-white/90 max-w-xl mx-auto md:mx-0">
            {hero.apoio}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <a
              href="#propostas"
              className="w-full sm:w-auto text-center bg-brand-yellow-500 text-brand-blue-900 font-display font-bold px-7 py-3.5 rounded-full hover:brightness-95 active:scale-[0.98] sm:hover:scale-[1.02] transition shadow-lg shadow-black/20"
            >
              {hero.ctaPrimario}
            </a>
            <button
              onClick={openModal}
              className="w-full sm:w-auto text-center border-2 border-white/40 text-white font-display font-bold px-7 py-3 rounded-full hover:bg-white/10 active:scale-[0.98] transition"
            >
              {hero.ctaSecundario}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1.5 flex">
        <span className="flex-[2] bg-brand-green-700" />
        <span className="flex-[2] bg-brand-green-500" />
        <span className="flex-1 bg-brand-blue-700" />
        <span className="flex-1 bg-brand-yellow-500" />
      </div>
    </section>
  );
}

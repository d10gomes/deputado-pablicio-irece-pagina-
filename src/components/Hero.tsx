import { candidato, hero } from "../data/content";
import { useLeadModal } from "../context/LeadModalContext";
import fotoPablicio from "../assets/pablicio-cutout.webp";

export default function Hero() {
  const { openModal } = useLeadModal();
  const palavrasBandeira = candidato.bandeira.replace(" e ", ", ").split(", ");

  return (
    <section className="relative bg-gradient-to-br from-brand-green-700 via-brand-blue-700 to-brand-blue-900 text-white pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-brand-green-500/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-5 grid md:grid-cols-[1.1fr_0.9fr] md:grid-rows-[auto_auto] gap-6 sm:gap-10 md:gap-x-12 items-center">
        <div className="order-1 md:order-1 md:col-start-1 md:row-start-1 md:self-end text-center md:text-left">
          <p className="uppercase tracking-[0.2em] text-white/60 font-semibold text-[11px] sm:text-xs mb-2.5 sm:mb-3">
            {candidato.nome}
          </p>
          <p className="inline-flex items-center gap-2 uppercase tracking-widest text-brand-yellow-500 font-semibold text-[11px] sm:text-sm mb-3 sm:mb-4 rounded-full border border-brand-yellow-500/30 bg-brand-yellow-500/10 px-3.5 py-1.5">
            {candidato.cargo} · {candidato.numero}
          </p>
          <h1 className="font-display font-extrabold text-[2rem] leading-[1.08] sm:text-5xl md:text-6xl sm:leading-[1.05] text-white">
            {hero.headline}
          </h1>
        </div>

        <div className="order-2 md:order-2 md:col-start-2 md:row-start-1 md:row-span-2 relative flex flex-col items-center">
          {/* painel verde sólido atrás de toda a figura — evita o corte de cor do fundo
              da seção passando bem no meio da foto, independente do layout (mobile/desktop) */}
          <div className="absolute inset-0 -mx-4 bg-[radial-gradient(ellipse_65%_78%_at_50%_40%,var(--color-brand-green-500)_0%,var(--color-brand-green-700)_50%,transparent_80%)]" />

          <div className="relative flex justify-center w-full">
            {/* lema em marca d'água atrás da figura, preenchendo o fundo vazio */}
            <div className="absolute inset-0 flex flex-col items-center justify-evenly py-4 pointer-events-none select-none">
              {palavrasBandeira.map((palavra, i) => (
                <span
                  key={i}
                  className="font-display font-extrabold uppercase text-white/10 leading-none text-6xl sm:text-8xl md:text-9xl text-center whitespace-nowrap"
                >
                  {palavra}
                </span>
              ))}
            </div>
            {/* sombra de "chão" sob os pés — reforçada para integrar melhor a figura ao fundo */}
            <div className="absolute bottom-1 sm:bottom-3 w-36 sm:w-52 h-6 sm:h-8 bg-black/50 rounded-[50%] blur-xl" />
            <img
              src={fotoPablicio}
              alt={candidato.nome}
              width={577}
              height={786}
              fetchPriority="high"
              className="relative w-48 sm:w-72 md:w-[22rem] h-auto object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.35)]"
            />
          </div>
          <div className="mt-1 sm:mt-2 text-center">
            <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-yellow-500 drop-shadow-sm">
              {candidato.numero}
            </div>
            <p className="text-white/70 text-xs sm:text-sm mt-1 tracking-wide">
              {candidato.bandeira}
            </p>
          </div>
        </div>

        <div className="order-3 md:order-3 md:col-start-1 md:row-start-2 md:self-start text-center md:text-left">
          <p className="text-base sm:text-xl font-semibold mb-6 sm:mb-9 text-white/90 max-w-xl mx-auto md:mx-0">
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

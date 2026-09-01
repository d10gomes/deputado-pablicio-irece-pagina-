import { bio } from "../data/content";

export default function Memoria() {
  return (
    <section id="historia" className="relative bg-white dark:bg-brand-ink py-12 sm:py-16 md:py-24 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-5 text-center">
        <p className="inline-block uppercase tracking-widest text-[#02732a] dark:text-brand-yellow-500 font-semibold text-xs sm:text-sm mb-3 sm:mb-4 rounded-full bg-[#03a63c]/10 dark:bg-white/10 px-3.5 sm:px-4 py-1.5">
          Talvez você lembre
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 leading-tight text-[#022873] dark:text-white">
          {bio.memoriaTitulo}
        </h2>
        <p className="text-[#0e1b2a]/75 dark:text-white/75 text-base sm:text-lg mb-6 sm:mb-8">{bio.memoriaTexto}</p>
        <div className="inline-block relative">
          <span className="absolute -left-3 sm:-left-4 top-0 text-4xl sm:text-5xl text-[#f2cb05] font-display leading-none">
            "
          </span>
          <p className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#0339a6] dark:text-brand-yellow-500 px-4">
            {bio.memoriaDestaque}
          </p>
        </div>
      </div>
    </section>
  );
}

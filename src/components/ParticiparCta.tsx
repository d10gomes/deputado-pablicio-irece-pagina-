import { useLeadModal } from "../context/LeadModalContext";

export default function ParticiparCta() {
  const { openModal } = useLeadModal();

  return (
    <section
      id="participar"
      className="relative overflow-hidden bg-gradient-to-br from-[#022873] via-[#0339a6] to-[#02732a] py-14 sm:py-16 md:py-20 scroll-mt-16"
    >
      <div className="absolute -top-24 -right-24 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#f2cb05]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#03a63c]/20 blur-3xl" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-5 text-center text-white">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-xs sm:text-sm mb-3">
          Sua parte
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 leading-tight">
          Some com a gente.
        </h2>
        <p className="text-sm sm:text-base text-white/85 mb-6 sm:mb-8 max-w-xl mx-auto">
          Você vai saber o que está acontecendo na sua cidade, em primeira mão. Leva menos de
          um minuto e você sai da lista quando quiser.
        </p>
        <button
          onClick={openModal}
          className="w-full sm:w-auto bg-[#f2cb05] text-[#022873] font-display font-bold px-8 py-3.5 rounded-full hover:brightness-95 active:scale-[0.98] sm:hover:scale-[1.02] transition shadow-lg shadow-black/20"
        >
          Quero fazer parte
        </button>
      </div>
    </section>
  );
}

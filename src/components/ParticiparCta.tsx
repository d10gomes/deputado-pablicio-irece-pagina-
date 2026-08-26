import { useLeadModal } from "../context/LeadModalContext";

export default function ParticiparCta() {
  const { openModal } = useLeadModal();

  return (
    <section
      id="participar"
      className="relative overflow-hidden bg-gradient-to-br from-[#022873] via-[#0339a6] to-[#02732a] py-16 md:py-20"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#f2cb05]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#03a63c]/20 blur-3xl" />

      <div className="relative max-w-2xl mx-auto px-5 text-center text-white">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-sm mb-3">
          Sua parte
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4 leading-tight">
          Some com a gente.
        </h2>
        <p className="text-white/85 mb-8 max-w-xl mx-auto">
          Você vai saber o que está acontecendo na sua cidade, em primeira mão. Leva menos de
          um minuto e você sai da lista quando quiser.
        </p>
        <button
          onClick={openModal}
          className="bg-[#f2cb05] text-[#022873] font-display font-bold px-8 py-3.5 rounded-full hover:brightness-95 hover:scale-[1.02] transition shadow-lg shadow-black/20"
        >
          Quero fazer parte
        </button>
      </div>
    </section>
  );
}

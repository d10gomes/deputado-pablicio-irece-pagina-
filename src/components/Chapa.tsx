import chapaImg from "../assets/chapa-parceria-bahia.webp";
import { candidato } from "../data/content";

export default function Chapa() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-5">
        <p className="uppercase tracking-widest text-[#0339a6] font-semibold text-xs sm:text-sm mb-3 text-center">
          <span className="rounded-full bg-[#0339a6]/10 px-3.5 sm:px-4 py-1.5">
            Parceria política
          </span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 leading-tight text-[#022873]">
          Uma chapa fortalecida para entregar resultado à Bahia.
        </h2>
        <p className="text-center text-sm sm:text-base text-[#0e1b2a]/70 max-w-2xl mx-auto mb-8 sm:mb-10">
          {candidato.nome} integra uma coligação com experiência, trabalho e compromisso com o
          povo baiano.
        </p>

        <img
          src={chapaImg}
          alt="Parceria que transforma o futuro: Angelo Coronel (candidato a Senador, 100), Flávio Bolsonaro (candidato a Presidente, 22), Dr. Pablício Medeiros (candidato a Deputado Federal, 2201), ACM Neto (candidato a Governador, 44) e João Roma (candidato a Senador, 222). Liberdade, Família e Agro — juntos por uma Bahia mais forte."
          className="w-full rounded-2xl sm:rounded-3xl shadow-xl shadow-black/10"
        />
      </div>
    </section>
  );
}

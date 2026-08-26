import { bio } from "../data/content";

export default function Memoria() {
  return (
    <section id="historia" className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="uppercase tracking-widest text-[#02732a] font-semibold text-sm mb-4">
          Talvez você lembre
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6 leading-tight">
          {bio.memoriaTitulo}
        </h2>
        <p className="text-[#0e1b2a]/80 text-lg mb-6">{bio.memoriaTexto}</p>
        <p className="font-display font-bold text-xl text-[#022873]">
          {bio.memoriaDestaque}
        </p>
      </div>
    </section>
  );
}

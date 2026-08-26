import { bio } from "../data/content";

export default function Memoria() {
  return (
    <section id="historia" className="relative bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="inline-block uppercase tracking-widest text-[#02732a] font-semibold text-sm mb-4 rounded-full bg-[#03a63c]/10 px-4 py-1.5">
          Talvez você lembre
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6 leading-tight text-[#022873]">
          {bio.memoriaTitulo}
        </h2>
        <p className="text-[#0e1b2a]/75 text-lg mb-8">{bio.memoriaTexto}</p>
        <div className="inline-block relative">
          <span className="absolute -left-4 top-0 text-5xl text-[#f2cb05] font-display leading-none">
            "
          </span>
          <p className="font-display font-bold text-xl md:text-2xl text-[#0339a6] px-4">
            {bio.memoriaDestaque}
          </p>
        </div>
      </div>
    </section>
  );
}

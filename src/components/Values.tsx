import {
  Handshake,
  Bird,
  Sprout,
  Users,
  GraduationCap,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { valores } from "../data/content";

const ICONS: Record<string, LucideIcon> = {
  handshake: Handshake,
  dove: Bird,
  sprout: Sprout,
  family: Users,
  cap: GraduationCap,
  scale: Scale,
};

const CORES = [
  "bg-[#022873] text-[#f2cb05]",
  "bg-[#0339a6] text-white",
  "bg-[#02732a] text-white",
  "bg-[#f2cb05] text-[#022873]",
  "bg-[#03a63c] text-white",
  "bg-[#0e1b2a] text-[#f2cb05]",
];

export default function Values() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <p className="uppercase tracking-widest text-[#02732a] font-semibold text-sm mb-3 text-center">
          <span className="rounded-full bg-[#03a63c]/10 px-4 py-1.5">Ideias centrais</span>
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-4 leading-tight text-[#022873]">
          Moral, educação e desenvolvimento econômico.
        </h2>
        <p className="text-center text-[#0e1b2a]/70 max-w-2xl mx-auto mb-12">
          Os valores que orientam cada proposta de{" "}
          <span className="font-semibold">Dr. Pablício Medeiros</span>.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((v, i) => {
            const Icon = ICONS[v.icone];
            return (
              <div
                key={v.titulo}
                className="rounded-2xl border border-[#e5e4e7] p-6 hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${CORES[i % CORES.length]}`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-[#022873]">
                  {v.titulo}
                </h3>
                <p className="text-[#0e1b2a]/70 text-sm leading-relaxed">{v.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

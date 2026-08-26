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

export default function Values() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <p className="uppercase tracking-widest text-[#02732a] font-semibold text-sm mb-3 text-center">
          Ideias centrais
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-4 leading-tight">
          Moral, educação e desenvolvimento econômico.
        </h2>
        <p className="text-center text-[#0e1b2a]/70 max-w-2xl mx-auto mb-12">
          Os valores que orientam cada proposta de {""}
          <span className="font-semibold">Dr. Pablício Medeiros</span>.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((v) => {
            const Icon = ICONS[v.icone];
            return (
              <div
                key={v.titulo}
                className="rounded-2xl border border-[#e5e4e7] p-6 hover:border-[#0339a6]/40 hover:shadow-md transition"
              >
                <div className="w-11 h-11 rounded-xl bg-[#022873] text-[#f2cb05] flex items-center justify-center mb-4">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {v.titulo}
                </h3>
                <p className="text-[#0e1b2a]/70 text-sm leading-relaxed">
                  {v.texto}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

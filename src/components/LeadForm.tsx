import { useState, type FormEvent } from "react";
import { cidadesRegiao, contato } from "../data/content";

const PARTICIPACAO = [
  "Só quero acompanhar",
  "Posso divulgar no meu bairro ou povoado",
  "Tenho grupos de WhatsApp para compartilhar",
  "Sou liderança na minha comunidade",
];

const TEMAS = [
  "Igreja e fé",
  "Educação e professores",
  "Agricultura familiar e água",
  "Indústria e emprego",
  "Liberdade econômica",
  "Liberdade religiosa",
];

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [participacao, setParticipacao] = useState(PARTICIPACAO[0]);
  const [temas, setTemas] = useState<string[]>([]);
  const [autoriza, setAutoriza] = useState(false);

  function toggleTema(tema: string) {
    setTemas((prev) =>
      prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema],
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!autoriza) return;

    const linhas = [
      `Quero fazer parte da campanha!`,
      `Nome: ${nome}`,
      `WhatsApp: ${whatsapp}`,
      `Cidade: ${cidade}${bairro ? " - " + bairro : ""}`,
      `Como quero participar: ${participacao}`,
      temas.length ? `O que mais me toca: ${temas.join(", ")}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(
      linhas.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="participar" className="bg-[#f6f8fa] py-16 md:py-24">
      <div className="max-w-xl mx-auto px-5">
        <p className="uppercase tracking-widest text-[#02732a] font-semibold text-sm mb-3 text-center">
          Sua parte
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-3 leading-tight">
          Some com a gente.
        </h2>
        <p className="text-center text-[#0e1b2a]/70 mb-10">
          Você vai saber o que está acontecendo na sua cidade, em primeira mão. E sai da lista
          quando quiser. Leva menos de um minuto.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#e5e4e7] rounded-2xl p-6 md:p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="nome">
              Seu nome *
            </label>
            <input
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0339a6]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="whatsapp">
              WhatsApp *
            </label>
            <input
              id="whatsapp"
              required
              placeholder="Com DDD"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0339a6]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="cidade">
                Sua cidade *
              </label>
              <select
                id="cidade"
                required
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0339a6] bg-white"
              >
                <option value="" disabled>
                  Escolha
                </option>
                {cidadesRegiao.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="bairro">
                Bairro ou povoado
              </label>
              <input
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0339a6]"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Como você quer participar</p>
            <div className="space-y-2">
              {PARTICIPACAO.map((op) => (
                <label key={op} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="participacao"
                    checked={participacao === op}
                    onChange={() => setParticipacao(op)}
                    className="accent-[#0339a6]"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">O que mais te toca</p>
            <div className="flex flex-wrap gap-2">
              {TEMAS.map((tema) => (
                <button
                  type="button"
                  key={tema}
                  onClick={() => toggleTema(tema)}
                  className={`text-xs font-semibold rounded-full px-3 py-1.5 border transition ${
                    temas.includes(tema)
                      ? "bg-[#022873] text-white border-[#022873]"
                      : "border-[#e5e4e7] text-[#0e1b2a]/70 hover:border-[#0339a6]"
                  }`}
                >
                  {tema}
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-start gap-2 text-sm text-[#0e1b2a]/80">
            <input
              type="checkbox"
              required
              checked={autoriza}
              onChange={(e) => setAutoriza(e.target.checked)}
              className="mt-1 accent-[#0339a6]"
            />
            Autorizo receber mensagens no meu WhatsApp *
          </label>

          <p className="text-xs text-[#0e1b2a]/50">
            Seus dados são usados só para falar com você e nunca são vendidos ou repassados.
            Para sair da lista, responda SAIR em qualquer mensagem.
          </p>

          <button
            type="submit"
            className="w-full bg-[#f2cb05] text-[#022873] font-display font-bold py-3 rounded-full hover:brightness-95 transition"
          >
            Quero fazer parte
          </button>
        </form>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import { CheckCircle2, ShieldCheck, Share2 } from "lucide-react";
import { candidato, cidadesRegiao, contato } from "../data/content";
import { supabase } from "../lib/supabase";
import SupportersCounter from "./SupportersCounter";
import fotoPablicio from "../assets/pablicio-cutout.webp";

const PARTICIPACAO = [
  "Só quero acompanhar",
  "Posso divulgar no meu bairro ou povoado",
  "Tenho grupos de WhatsApp para compartilhar",
  "Sou liderança na minha comunidade",
];

const TEMAS = [
  "Educação e professores",
  "Agricultura familiar e água",
  "Indústria e emprego",
  "Liberdade econômica",
];

function formatarWhatsapp(valor: string) {
  // assume sempre o formato de celular (DDD + 9 dígitos) — o padrão no Brasil hoje
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length === 0) return "";
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 7) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function compartilhar() {
  const texto = `Ei! Conheça o trabalho do ${candidato.nome} (${candidato.numero}), candidato a ${candidato.cargo} pela Bahia. Dá uma olhada: ${window.location.origin}`;

  if (navigator.share) {
    navigator.share({ text: texto, url: window.location.origin }).catch(() => {});
    return;
  }
  window.open(
    `https://wa.me/?text=${encodeURIComponent(texto)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export default function LeadForm({ onDone }: { onDone?: () => void }) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [participacao, setParticipacao] = useState(PARTICIPACAO[0]);
  const [temas, setTemas] = useState<string[]>([]);
  const [autoriza, setAutoriza] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  function toggleTema(tema: string) {
    setTemas((prev) =>
      prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema],
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!autoriza || enviando) return;
    setErro(null);
    setEnviando(true);

    const { error } = await supabase.from("leads").insert({
      nome,
      whatsapp,
      cidade,
      bairro: bairro || null,
      participacao,
      temas,
      autoriza_whatsapp: autoriza,
    });

    setEnviando(false);

    if (error) {
      setErro("Não deu pra salvar agora. Tenta de novo em instantes.");
      return;
    }

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
    sessionStorage.setItem("leadEnviado", "1");
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#03a63c]/10 text-[#02732a] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-display font-extrabold text-2xl mb-2">
          Show! Você já faz parte.
        </h3>
        <p className="text-[#0e1b2a]/70 mb-6">
          Abrimos o WhatsApp pra você confirmar a mensagem. Qualquer novidade da campanha,
          chega primeiro pra você.
        </p>

        <div className="rounded-2xl bg-[#f6f8fa] border border-[#e5e4e7] p-5 mb-6 text-left">
          <p className="font-display font-bold text-base mb-1.5">
            Ajude a mudar a realidade da nossa região.
          </p>
          <p className="text-sm text-[#0e1b2a]/70 mb-4">
            Manda esse link pra pelo menos 3 amigos — quanto mais gente sabendo, mais forte
            fica esse movimento.
          </p>
          <button
            onClick={compartilhar}
            className="w-full flex items-center justify-center gap-2 bg-[#02732a] text-white font-display font-bold py-2.5 rounded-full hover:brightness-110 active:scale-[0.98] transition"
          >
            <Share2 size={16} />
            Compartilhar com 3 amigos
          </button>
        </div>

        {onDone && (
          <button
            onClick={onDone}
            className="bg-[#022873] text-white font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition"
          >
            Fechar
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="px-5 pb-6 pt-2 sm:p-8 md:p-10">
      <div className="flex justify-center mb-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-[#f2cb05]/40 bg-[#022873]">
          <img
            src={fotoPablicio}
            alt={candidato.nome}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <p className="uppercase tracking-widest text-[#02732a] font-semibold text-xs sm:text-sm mb-2 text-center">
        Sua parte
      </p>
      <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-center mb-2.5 sm:mb-3 leading-tight">
        Some com a gente.
      </h2>
      <p className="text-center text-[#0e1b2a]/70 mb-4 text-sm md:text-base">
        Você vai saber o que está acontecendo na sua cidade, em primeira mão. E sai da lista
        quando quiser. Leva menos de um minuto.
      </p>

      <div className="flex justify-center mb-6 sm:mb-8">
        <SupportersCounter variant="light" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
            inputMode="numeric"
            placeholder="(71) 98782-2591"
            value={whatsapp}
            onChange={(e) => setWhatsapp(formatarWhatsapp(e.target.value))}
            className="w-full rounded-lg border border-[#e5e4e7] px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0339a6]"
          />
        </div>

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
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
              <label key={op} className="flex items-center gap-2.5 text-sm py-0.5">
                <input
                  type="radio"
                  name="participacao"
                  checked={participacao === op}
                  onChange={() => setParticipacao(op)}
                  className="w-4 h-4 accent-[#0339a6] shrink-0"
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
                className={`text-xs font-semibold rounded-full px-3.5 py-2 border transition active:scale-95 ${
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
          Autorizo o tratamento do meu nome e WhatsApp, conforme a LGPD (Lei nº
          13.709/2018), para receber mensagens da campanha *
        </label>

        <p className="text-xs text-[#0e1b2a]/50">
          Seus dados são usados só para falar com você e nunca são vendidos ou repassados.
          Você pode cancelar e sair da lista a qualquer momento, respondendo SAIR em qualquer
          mensagem. Li a{" "}
          <a
            href="/privacidade.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#0339a6]"
          >
            Política de Privacidade
          </a>
          .
        </p>

        {erro && <p className="text-sm text-red-600">{erro}</p>}

        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#02732a]">
          <ShieldCheck size={14} />
          Seus dados estão protegidos
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="w-full bg-[#f2cb05] text-[#022873] font-display font-bold py-3 rounded-full hover:brightness-95 transition disabled:opacity-60"
        >
          {enviando ? "Enviando..." : "Quero fazer parte"}
        </button>
      </form>
    </div>
  );
}

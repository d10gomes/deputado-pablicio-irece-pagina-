import { useAcessibilidade } from "../hooks/useAcessibilidade";
import { useVLibras } from "../hooks/useVLibras";

const BOTAO =
  "shrink-0 rounded-full border border-white/35 px-3 py-1 hover:bg-white/15 transition";
const BOTAO_ATIVO = "bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500";

export default function AccessibilityBar() {
  const {
    escalaFonte,
    altoContraste,
    modoEscuro,
    aumentarFonte,
    diminuirFonte,
    alternarContraste,
    alternarModoEscuro,
  } = useAcessibilidade();
  const { ativo: librasAtivo, ativar: ativarLibras } = useVLibras();

  return (
    <div className="bg-brand-green-700 text-white overflow-x-auto">
      <div className="max-w-6xl mx-auto flex items-center gap-2 px-3 sm:px-5 py-1.5 text-[11px] sm:text-xs font-semibold whitespace-nowrap">
        <button
          onClick={diminuirFonte}
          disabled={escalaFonte <= 0.85}
          aria-label="Diminuir tamanho da fonte"
          className={`${BOTAO} disabled:opacity-40`}
        >
          A−
        </button>
        <button
          onClick={aumentarFonte}
          disabled={escalaFonte >= 1.3}
          aria-label="Aumentar tamanho da fonte"
          className={`${BOTAO} disabled:opacity-40`}
        >
          A+
        </button>
        <button
          onClick={alternarContraste}
          aria-pressed={altoContraste}
          className={`${BOTAO} ${altoContraste ? BOTAO_ATIVO : ""}`}
        >
          Alto contraste
        </button>
        <button
          onClick={alternarModoEscuro}
          aria-pressed={modoEscuro}
          className={`${BOTAO} ${modoEscuro ? BOTAO_ATIVO : ""}`}
        >
          Modo escuro
        </button>
        <button
          onClick={ativarLibras}
          aria-pressed={librasAtivo}
          className={`${BOTAO} ${librasAtivo ? BOTAO_ATIVO : ""}`}
        >
          Libras
        </button>
      </div>
    </div>
  );
}

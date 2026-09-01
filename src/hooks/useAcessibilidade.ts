import { useEffect, useState } from "react";

const CHAVE = "acessibilidade";
const ESCALA_MIN = 0.85;
const ESCALA_MAX = 1.3;
const ESCALA_PASSO = 0.1;

type Preferencias = {
  escalaFonte: number;
  altoContraste: boolean;
  modoEscuro: boolean;
};

const PADRAO: Preferencias = { escalaFonte: 1, altoContraste: false, modoEscuro: false };

function carregar(): Preferencias {
  if (typeof window === "undefined") return PADRAO;
  try {
    const salvo = localStorage.getItem(CHAVE);
    return salvo ? { ...PADRAO, ...JSON.parse(salvo) } : PADRAO;
  } catch {
    return PADRAO;
  }
}

export function useAcessibilidade() {
  const [prefs, setPrefs] = useState<Preferencias>(carregar);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(prefs));
    } catch {
      // localStorage indisponível (modo privado etc.) — segue só na sessão
    }
    const root = document.documentElement;
    root.style.setProperty("--escala-fonte", String(prefs.escalaFonte));
    root.classList.toggle("alto-contraste", prefs.altoContraste);
    root.classList.toggle("modo-escuro", prefs.modoEscuro);
  }, [prefs]);

  return {
    ...prefs,
    aumentarFonte: () =>
      setPrefs((p) => ({
        ...p,
        escalaFonte: Math.min(ESCALA_MAX, +(p.escalaFonte + ESCALA_PASSO).toFixed(2)),
      })),
    diminuirFonte: () =>
      setPrefs((p) => ({
        ...p,
        escalaFonte: Math.max(ESCALA_MIN, +(p.escalaFonte - ESCALA_PASSO).toFixed(2)),
      })),
    alternarContraste: () => setPrefs((p) => ({ ...p, altoContraste: !p.altoContraste })),
    alternarModoEscuro: () => setPrefs((p) => ({ ...p, modoEscuro: !p.modoEscuro })),
  };
}

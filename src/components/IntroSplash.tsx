import { useEffect, useState } from "react";
import { candidato } from "../data/content";

const SESSION_KEY = "introExibida";
const DURACAO_MS = 1700;
const SAIDA_MS = 450;

function deveExibir() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return sessionStorage.getItem(SESSION_KEY) !== "1";
}

export default function IntroSplash() {
  const [visivel, setVisivel] = useState(deveExibir);
  const [saindo, setSaindo] = useState(false);

  useEffect(() => {
    if (!visivel) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    const overflowOriginal = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timerSaida = setTimeout(() => setSaindo(true), DURACAO_MS);
    const timerRemover = setTimeout(() => {
      setVisivel(false);
      document.body.style.overflow = overflowOriginal;
    }, DURACAO_MS + SAIDA_MS);

    return () => {
      clearTimeout(timerSaida);
      clearTimeout(timerRemover);
      document.body.style.overflow = overflowOriginal;
    };
  }, [visivel]);

  if (!visivel) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-blue-900 overflow-hidden transition-opacity duration-[450ms] ${
        saindo ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-20 -left-16 w-72 h-72 rounded-full bg-brand-blue-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-brand-green-500/20 blur-3xl" />

      <div
        className="relative flex flex-col items-center px-6 text-center"
        style={{ animation: "introTexto 0.7s ease-out both" }}
      >
        <span className="uppercase tracking-[0.3em] text-white/50 font-semibold text-[11px] sm:text-xs mb-3">
          {candidato.cargo}
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
          {candidato.nome}
        </h2>
        <div className="mt-3 font-display font-extrabold text-5xl sm:text-6xl text-brand-yellow-500">
          {candidato.numero}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-brand-green-700 via-brand-green-500 to-brand-yellow-500"
          style={{ animation: `introBarra ${DURACAO_MS}ms linear forwards` }}
        />
      </div>
    </div>
  );
}

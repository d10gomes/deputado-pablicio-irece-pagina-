import { useEffect, useRef } from "react";
import { useLeadModal } from "../context/LeadModalContext";

const SESSION_KEY = "popupRetencaoMostrado";
const LEAD_ENVIADO_KEY = "leadEnviado";
const ATRASO_MINIMO_MS = 8000; // não interrompe nos primeiros segundos de leitura
const GATILHO_TEMPO_MS = 40000; // 40s na página sem converter
const GATILHO_SCROLL_RATIO = 0.7; // rolou 70% da página sem converter

/**
 * Não é "exit intent" clássico (isso é uma técnica de mouse, quase inútil no
 * celular — e a maior parte do tráfego daqui é mobile). Em vez disso, dispara
 * o mesmo popup de leads automaticamente quando o visitante mostra sinal de
 * que está saindo sem converter: ficou tempo suficiente na página, rolou a
 * maior parte dela, OU (bônus, só em desktop) tirou o mouse pelo topo da
 * janela. Mostra no máximo uma vez por sessão, e nunca se a pessoa já abriu
 * o formulário (por qualquer botão) ou já enviou os dados.
 */
export default function RetentionPopupTrigger() {
  const { open, openModal } = useLeadModal();
  const dispararRef = useRef(false);

  useEffect(() => {
    if (open) {
      sessionStorage.setItem(SESSION_KEY, "1");
    }
  }, [open]);

  useEffect(() => {
    const inicio = performance.now();

    function podeMostrar() {
      if (dispararRef.current) return false;
      if (sessionStorage.getItem(SESSION_KEY) === "1") return false;
      if (sessionStorage.getItem(LEAD_ENVIADO_KEY) === "1") return false;
      return performance.now() - inicio >= ATRASO_MINIMO_MS;
    }

    function tentarAbrir() {
      if (!podeMostrar()) return;
      dispararRef.current = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      openModal();
      limpar();
    }

    function aoRolar() {
      const rolado = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && rolado / total >= GATILHO_SCROLL_RATIO) tentarAbrir();
    }

    function aoMouseSair(e: MouseEvent) {
      if (e.clientY <= 0) tentarAbrir();
    }

    const timer = setTimeout(tentarAbrir, GATILHO_TEMPO_MS);
    window.addEventListener("scroll", aoRolar, { passive: true });
    document.addEventListener("mouseleave", aoMouseSair);

    function limpar() {
      clearTimeout(timer);
      window.removeEventListener("scroll", aoRolar);
      document.removeEventListener("mouseleave", aoMouseSair);
    }

    return limpar;
  }, [openModal]);

  return null;
}

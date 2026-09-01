import { useState } from "react";

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
  }
}

let jaInjetado = false;

// Widget oficial de Libras do governo federal (vlibras.gov.br) — carregado só
// quando a pessoa pede, para não pesar o carregamento de quem não precisa.
export function useVLibras() {
  const [ativo, setAtivo] = useState(jaInjetado);

  function ativar() {
    if (jaInjetado) return;
    jaInjetado = true;
    setAtivo(true);

    const container = document.createElement("div");
    container.setAttribute("vw", "");
    container.className = "enabled";
    container.innerHTML =
      '<div vw-access-button class="active"></div>' +
      '<div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>';
    document.body.appendChild(container);

    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.onload = () => {
      if (window.VLibras) new window.VLibras.Widget("https://vlibras.gov.br/app");
    };
    document.body.appendChild(script);
  }

  return { ativo, ativar };
}

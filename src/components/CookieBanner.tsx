import { useState } from "react";

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(true);

  if (!visivel) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0e1b2a] text-white text-sm px-5 py-4 flex flex-wrap items-center justify-center gap-4">
      <p className="max-w-xl text-white/85">
        Usamos cookies para entender como as pessoas chegam até aqui e melhorar nossa
        comunicação. Seus dados nunca são vendidos. Você pode recusar e continuar navegando
        normalmente.
      </p>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => setVisivel(false)}
          className="bg-[#f2cb05] text-[#022873] font-semibold px-4 py-1.5 rounded-full text-xs"
        >
          Aceitar
        </button>
        <button
          onClick={() => setVisivel(false)}
          className="border border-white/30 px-4 py-1.5 rounded-full text-xs"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

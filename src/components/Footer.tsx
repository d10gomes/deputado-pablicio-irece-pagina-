import { MessageCircle } from "lucide-react";
import { candidato, contato, rodapeLegal } from "../data/content";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h2.5l.5-4H13V7a1 1 0 0 1 1-1h2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70 pb-8 sm:pb-10 text-sm">
      <div className="h-1 flex mb-8 sm:mb-10">
        <span className="flex-[2] bg-brand-green-700" />
        <span className="flex-[2] bg-brand-green-500" />
        <span className="flex-1 bg-brand-blue-700" />
        <span className="flex-1 bg-brand-yellow-500" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-5 text-center space-y-3 break-words">
        <p className="font-display font-bold text-white text-base">
          {candidato.nome.toUpperCase()}
        </p>
        <p>{rodapeLegal.nomeCivil}</p>

        <div className="flex justify-center gap-4 py-2">
          <a
            href={contato.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue-700 hover:text-white transition"
          >
            <InstagramIcon />
          </a>
          <a
            href={contato.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue-700 hover:text-white transition"
          >
            <FacebookIcon />
          </a>
          <a
            href={`https://wa.me/${contato.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green-700 hover:text-white transition"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p>
          Contato para dúvidas e exclusão de dados: {contato.whatsappExibicao} ·{" "}
          {contato.email}
        </p>
        <p>
          <a href="/privacidade.html" className="underline hover:text-white">
            Política de Privacidade
          </a>
        </p>

        <p className="text-xs text-white/50 max-w-2xl mx-auto pt-4 border-t border-white/10">
          {rodapeLegal.disclaimer}
          <br />
          {rodapeLegal.responsavel}
        </p>
      </div>
    </footer>
  );
}

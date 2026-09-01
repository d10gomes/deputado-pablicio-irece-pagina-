import { MessageCircle } from "lucide-react";
import { contato } from "../data/content";

export default function WhatsAppFloating() {
  return (
    <a
      href={`https://wa.me/${contato.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 items-center justify-center rounded-full bg-brand-green-500 text-white shadow-lg shadow-black/25 hover:brightness-95 hover:scale-105 active:scale-95 transition"
    >
      <MessageCircle size={26} />
    </a>
  );
}

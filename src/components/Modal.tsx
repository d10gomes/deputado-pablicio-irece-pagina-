import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-[#0e1b2a]/70 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
        onClick={onClose}
      />
      <div
        className="relative w-full sm:max-w-xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-t-[1.75rem] sm:rounded-3xl bg-white shadow-2xl animate-[sheetUp_.28s_cubic-bezier(0.22,1,0.36,1)] sm:animate-[popIn_.22s_cubic-bezier(0.22,1,0.36,1)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <span className="w-10 h-1.5 rounded-full bg-[#e5e4e7]" />
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#0e1b2a]/5 hover:bg-[#0e1b2a]/10 transition"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}

import { Play } from "lucide-react";
import { candidato, videoUrl } from "../data/content";
import { parseVideoUrl } from "../lib/video";

export default function VideoVsl() {
  const embed = parseVideoUrl(videoUrl);
  const temVideo = embed.kind !== "empty";

  return (
    <section
      id="video"
      className="relative bg-gradient-to-b from-[#022873] to-[#011c56] pt-8 sm:pt-10 pb-14 sm:pb-20 md:pb-24 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-5 text-center">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-xs sm:text-sm mb-3">
          <span className="rounded-full bg-white/10 px-3.5 py-1.5">A história dele</span>
        </p>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 leading-tight">
          Assista e entenda por quê.
        </h2>
        <p className="text-sm sm:text-base text-white/75 mb-6 sm:mb-10">
          Alguns minutos para conhecer o homem que quer levar o trabalho de Irecê para toda a
          Bahia.
        </p>

        <div
          className={`group relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-[#0e1b2a] ring-1 ring-white/10 ${
            temVideo ? "" : "cursor-default"
          }`}
        >
          {embed.kind === "youtube" || embed.kind === "vimeo" ? (
            <iframe
              src={embed.embedUrl}
              title={`Vídeo de ${candidato.nome}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : embed.kind === "file" ? (
            <video
              src={embed.url}
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : embed.kind === "iframe" ? (
            <iframe
              src={embed.url}
              title={`Vídeo de ${candidato.nome}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/60 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f2cb05] text-[#022873] flex items-center justify-center shadow-lg animate-pulse">
                <Play size={26} className="ml-1" fill="currentColor" />
              </div>
              <p className="text-xs sm:text-sm px-6 text-center">
                Vídeo em breve — adicione o link em{" "}
                <code className="text-[#f2cb05]">src/data/content.ts</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

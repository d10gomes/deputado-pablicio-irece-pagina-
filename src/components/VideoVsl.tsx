import { Play } from "lucide-react";
import { candidato, videoUrl } from "../data/content";
import { parseVideoUrl } from "../lib/video";

export default function VideoVsl() {
  const embed = parseVideoUrl(videoUrl);

  return (
    <section id="video" className="bg-[#022873] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="uppercase tracking-widest text-[#f2cb05] font-semibold text-sm mb-3">
          A história dele
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight">
          Assista e entenda por quê.
        </h2>
        <p className="text-white/75 mb-10">
          Alguns minutos para conhecer o homem que quer levar o trabalho de Irecê para toda a
          Bahia.
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-[#0e1b2a]">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/60">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={28} className="ml-1" />
              </div>
              <p className="text-sm">
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

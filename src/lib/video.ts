export type VideoEmbed =
  | { kind: "youtube"; embedUrl: string }
  | { kind: "vimeo"; embedUrl: string }
  | { kind: "file"; url: string }
  | { kind: "iframe"; url: string }
  | { kind: "empty" };

export function parseVideoUrl(raw: string | undefined | null): VideoEmbed {
  const url = (raw ?? "").trim();
  if (!url) return { kind: "empty" };

  if (url.startsWith("/") && /\.(mp4|webm|ogg)$/i.test(url)) {
    return { kind: "file", url };
  }

  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      if (id) return { kind: "youtube", embedUrl: `https://www.youtube.com/embed/${id}` };
    }

    if (host.endsWith("youtube.com")) {
      if (u.pathname === "/watch") {
        const id = u.searchParams.get("v");
        if (id) return { kind: "youtube", embedUrl: `https://www.youtube.com/embed/${id}` };
      }
      const shortsMatch = u.pathname.match(/^\/shorts\/([^/]+)/);
      if (shortsMatch) {
        return {
          kind: "youtube",
          embedUrl: `https://www.youtube.com/embed/${shortsMatch[1]}`,
        };
      }
      if (u.pathname.startsWith("/embed/")) {
        return { kind: "youtube", embedUrl: url };
      }
    }

    if (host === "vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id && /^\d+$/.test(id)) {
        return { kind: "vimeo", embedUrl: `https://player.vimeo.com/video/${id}` };
      }
    }
    if (host === "player.vimeo.com") {
      return { kind: "vimeo", embedUrl: url };
    }

    if (/\.(mp4|webm|ogg)$/i.test(u.pathname)) {
      return { kind: "file", url };
    }

    return { kind: "iframe", url };
  } catch {
    return { kind: "empty" };
  }
}

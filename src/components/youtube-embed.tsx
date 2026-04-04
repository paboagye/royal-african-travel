"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl bg-brand-navy/10"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={(e) => {
          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
        <div className="flex size-16 items-center justify-center rounded-full bg-brand-red text-white shadow-lg transition-transform group-hover:scale-110">
          <Play className="ml-1 size-7" fill="currentColor" />
        </div>
      </div>
    </button>
  );
}

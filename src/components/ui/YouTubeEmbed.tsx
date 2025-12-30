"use client";

import { useState } from "react";
import Image from "next/image";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubeEmbed({
  videoId,
  title = "Video",
  className = "",
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isLoaded) {
    return (
      <button
        className={`relative w-full aspect-video bg-dark-900 rounded-xl overflow-hidden group ${className}`}
        onClick={() => setIsLoaded(true)}
        aria-label={`Play ${title}`}
      >
        {/* Thumbnail */}
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-brand-400 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-brand-400/40">
            <svg
              className="w-8 h-8 text-dark-950 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-medium text-left">{title}</p>
        </div>
      </button>
    );
  }

  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

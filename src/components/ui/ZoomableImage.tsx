"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: ZoomableImageProps) {
  return (
    <div className="relative group">
      {/* Zoom hint - visible on mobile, fades on desktop hover */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-900/80 backdrop-blur-sm rounded-full border border-white/10 text-xs text-dark-300 pointer-events-none transition-opacity group-hover:opacity-0 md:opacity-0 md:group-hover:opacity-100">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
        <span className="hidden sm:inline">Tap to zoom</span>
      </div>

      <Zoom
        zoomMargin={40}
        classDialog="zoom-dialog"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`cursor-zoom-in ${className}`}
          priority={priority}
        />
      </Zoom>
    </div>
  );
}

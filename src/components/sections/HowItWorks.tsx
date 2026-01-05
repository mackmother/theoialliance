"use client";

import Image from "next/image";
import { useState } from "react";

export function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "_VOPMAHmEcQ";

  return (
    <section
      id="how-it-works"
      className="relative py-12 overflow-hidden"
    >
      {/* ============================================
          CONTENT
          ============================================ */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

        {/* ============================================
            GLASS CARD WITH GRADIENT BORDER
            ============================================ */}
        <div
          className="relative rounded-[28px] p-[2px]"
          style={{
            background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.5) 0%, rgba(240, 165, 89, 0.15) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.2) 75%, rgba(169, 50, 149, 0.5) 100%)',
          }}
        >
          {/* Glass Card Inner */}
          <div
            className="relative rounded-[26px] overflow-visible px-8 py-12 md:px-14 md:py-16"
            style={{
              background: 'rgba(20, 18, 25, 0.5)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Section Header */}
            <div className="text-center pb-48 md:pb-64">
              <h2
                className="font-display text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white mb-5 leading-[1.1]"
                style={{
                  letterSpacing: '-0.025em',
                }}
              >
                See It In Action:{" "}
                <span className="relative inline-block">
                  2 Minutes
                  {/* Gold-to-Purple Arched Underline */}
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-4"
                    viewBox="0 0 200 16"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="videoSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f0a559" />
                        <stop offset="100%" stopColor="#a93295" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,14 Q100,2 200,14"
                      fill="none"
                      stroke="url(#videoSwoosh)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-[#9CA3AF] text-lg md:text-xl max-w-[700px] mx-auto mb-6">
                Watch how an MSP manages Ruckus, OpenLAN, and Fortinet firewalls from one interface—with their client&apos;s branding.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-xs md:text-sm text-white/50 uppercase tracking-wider">In this video:</span>
                {['Multi-vendor dashboard', 'White-label branding', 'Live device provisioning'].map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center px-3 py-1.5 text-xs md:text-sm text-white/80 rounded-full"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            VIDEO PLAYER - Breaking out / Overlapping at midpoint
            ============================================ */}
        <div className="relative -mt-52 md:-mt-64 mx-4 md:mx-8">
          {/* Video Glass Border Frame */}
          <div
            className="relative rounded-2xl p-[2px]"
            style={{
              background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(169, 50, 149, 0.4) 100%)',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(169, 50, 149, 0.25), 0 0 100px rgba(240, 165, 89, 0.15)',
            }}
          >
            <div
              className="relative rounded-[14px] overflow-hidden aspect-video"
              style={{
                background: 'rgba(20, 18, 25, 0.8)',
              }}
            >
              {isPlaying ? (
                /* Embedded YouTube Player */
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="wibipOS Unveiled"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                /* Thumbnail with Play Button */
                <>
                  {/* Video Preview Thumbnail */}
                  <Image
                    src="/images/screenshots/video_preview.png"
                    alt="wibipOS Multi-Vendor Demo"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    aria-label="Play video"
                  >
                    {/* Outer Glow Ring */}
                    <div
                      className="absolute inset-0 rounded-full scale-150 opacity-50 group-hover:scale-[1.75] transition-transform duration-300"
                      style={{
                        background: 'radial-gradient(circle, rgba(240, 165, 89, 0.4) 0%, transparent 70%)',
                      }}
                    />

                    {/* Play Button */}
                    <div
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                        boxShadow: '0 0 40px rgba(240, 165, 89, 0.5), 0 0 80px rgba(169, 50, 149, 0.3)',
                      }}
                    >
                      {/* Play Icon */}
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ============================================
            DOWNLOAD CTA - Below Video
            ============================================ */}
        <div className="mt-8 text-center">
          <p className="text-[#9CA3AF] text-sm md:text-base mb-4">
            Want to share this with your team? Download the Multi-Vendor Orchestration Infographic.
          </p>
          <a
            href="/downloads/architecture.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'rgba(240, 165, 89, 0.1)',
              border: '1px solid rgba(240, 165, 89, 0.3)',
              color: '#f0a559',
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Infographic
          </a>
        </div>

      </div>
    </section>
  );
}

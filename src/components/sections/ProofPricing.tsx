"use client";

import Image from "next/image";
import Link from "next/link";

export function ProofPricing() {
  return (
    <section
      id="proof"
      className="relative py-12 overflow-hidden"
    >

      {/* ============================================
          CONTENT
          ============================================ */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

        {/* Section Header with Swoosh */}
        <div className="text-center mb-12">
          <h2
            className="font-display text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] inline-block"
            style={{
              letterSpacing: '-0.025em',
              textShadow: '0 2px 30px rgba(0,0,0,0.5)',
            }}
          >
            They Said It{" "}
            <span className="relative inline-block italic">
              Couldn&apos;t Be Done.
              {/* Gold-to-Purple Arched Underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="swooshGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f0a559" />
                    <stop offset="100%" stopColor="#a93295" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,14 Q150,2 300,14"
                  fill="none"
                  stroke="url(#swooshGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* ============================================
            BENTO GRID - 2 columns
            ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-5">

          {/* LEFT - Jamaica Project Image Card */}
          <div
            className="relative rounded-3xl overflow-hidden min-h-[400px] md:row-span-2"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Background Image */}
            <Image
              src="/images/screenshots/Jamaica5-man-team.jpg"
              alt="The Jamaica Project"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%)',
              }}
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3
                className="font-display text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ letterSpacing: '-0.02em' }}
              >
                The Jamaica Project:
              </h3>
              <p className="text-white/90 text-lg md:text-xl leading-snug">
                If a 5-person team did this,<br />
                what could yours do?
              </p>
            </div>
          </div>

          {/* TOP RIGHT - 1,000 Schools Stat Card (Warm Sunset Gradient) */}
          <div
            className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-center min-h-[190px]"
            style={{
              background: 'linear-gradient(135deg, #1a1425 0%, #2d1a35 20%, #5c2a45 40%, #a84a55 60%, #d4734a 80%, #e8a040 100%)',
            }}
          >
            <div
              className="font-display text-5xl md:text-6xl font-bold text-white mb-1"
              style={{ letterSpacing: '-0.02em' }}
            >
              1000 Schools
            </div>
            <div className="text-white/80 text-lg italic">
              10,000 elements | 6 vendors
            </div>
          </div>

          {/* BOTTOM RIGHT - Zero Experience Card (Dark Glass) */}
          <div
            className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-center min-h-[190px]"
            style={{
              background: 'rgba(20, 18, 25, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="font-display text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              Zero managed WiFi<br />
              experience.
            </div>
            <Link
              href="/case-studies/jamaica"
              className="text-white/60 underline underline-offset-4 hover:text-white transition-colors text-base"
            >
              Read the full case study.
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

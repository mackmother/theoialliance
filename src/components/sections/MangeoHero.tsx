"use client";

import Image from "next/image";
import { Button } from "@/components/ui";

export function MangeoHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-12">

      {/* ============================================
          MAIN GLASS CARD
          ============================================ */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6">

        {/* Gradient Border Container - Gold to Purple */}
        <div
          className="relative rounded-[28px] p-[2px]"
          style={{
            background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
          }}
        >
          {/* Glass Card Inner - Semi-transparent to show aurora through */}
          <div
            className="relative rounded-[26px] overflow-hidden"
            style={{
              background: 'rgba(20, 18, 25, 0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* ============================================
                GOLD SWOOSH / WAVE EFFECT
                ============================================ */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

              {/* Ambient glow behind the wave */}
              <div
                className="absolute top-[42%] left-0 right-0 h-44 -translate-y-1/2"
                style={{
                  background: `
                    radial-gradient(ellipse 50% 100% at 10% 50%, rgba(240, 165, 89, 0.5) 0%, transparent 50%),
                    radial-gradient(ellipse 40% 80% at 45% 55%, rgba(169, 50, 149, 0.35) 0%, transparent 45%),
                    radial-gradient(ellipse 45% 90% at 90% 45%, rgba(240, 165, 89, 0.45) 0%, transparent 50%)
                  `,
                  filter: 'blur(35px)',
                }}
              />

              {/* SVG Flowing Wave */}
              <svg
                className="absolute top-[38%] left-0 w-full h-48 -translate-y-1/2"
                viewBox="0 0 900 180"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Main wave gradient - gold dominant */}
                  <linearGradient id="heroWaveMain" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f0a559" stopOpacity="0" />
                    <stop offset="15%" stopColor="#f0a559" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#f0a559" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#a93295" stopOpacity="0.5" />
                    <stop offset="65%" stopColor="#f0a559" stopOpacity="0.6" />
                    <stop offset="85%" stopColor="#f0a559" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f0a559" stopOpacity="0" />
                  </linearGradient>

                  {/* Secondary wave gradient - purple accent */}
                  <linearGradient id="heroWaveSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a93295" stopOpacity="0" />
                    <stop offset="25%" stopColor="#a93295" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#f0a559" stopOpacity="0.3" />
                    <stop offset="75%" stopColor="#a93295" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a93295" stopOpacity="0" />
                  </linearGradient>

                  {/* Glow filter for the waves */}
                  <filter id="heroWaveGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Main flowing wave - organic curve */}
                <path
                  d="M-10,90 C80,50 180,110 320,75 C460,40 540,100 680,70 C820,40 880,85 910,75"
                  fill="none"
                  stroke="url(#heroWaveMain)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#heroWaveGlow)"
                />

                {/* Secondary wave - slightly offset */}
                <path
                  d="M-10,100 C100,70 200,120 380,85 C560,50 660,110 800,80 C880,60 910,90 920,85"
                  fill="none"
                  stroke="url(#heroWaveSecondary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* ============================================
                CARD CONTENT
                ============================================ */}
            <div className="relative z-10 px-8 py-14 md:px-14 md:py-16 text-center">

              {/* Eyebrow with pill frame */}
              <div className="flex justify-center mb-6">
                <div
                  className="inline-flex items-center px-5 py-2 rounded-full"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    background: 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <span
                    className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase"
                    style={{ color: '#f0a559' }}
                  >
                    Introducing
                  </span>
                  <span className="text-white/80 text-[10px] md:text-xs font-medium tracking-wide ml-2">
                    The Open Infrastructure Alliance
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1
                className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white mb-5 leading-[1.05]"
                style={{
                  letterSpacing: '-0.025em',
                  textShadow: '0 2px 30px rgba(0,0,0,0.5)',
                }}
              >
                Enterprise-Ready
                <br />
                OpenLAN is Here
              </h1>

              {/* Trust Line */}
              <p className="text-[#8B8B9A] text-base md:text-lg mb-4 font-light">
                Trusted by Tier 1 Telcos, MSPs & Governments
              </p>

              {/* Qualifier Line - Direct to our PFC */}
              <p className="text-white/90 text-sm md:text-base mb-8 font-medium">
                For you, the MSP CEO ready to take back control and{' '}
                <span className="relative inline-block">
                  say YES to multi-vendor deals.
                  {/* Gold curved underline */}
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,6 Q100,0 200,6"
                      fill="none"
                      stroke="#f0a559"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8">
                <Button
                  variant="primary"
                  size="lg"
                  href="/journey"
                  className="min-w-[210px]"
                >
                  Trial to Revenue in 30 Days
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#how-it-works"
                  className="min-w-[175px]"
                >
                  Watch 2-Min Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            FLOATING PARTNER LOGOS BAR - 50/50 overlap on card bottom
            ============================================ */}
        <div className="relative -mt-14 mx-auto max-w-[700px]">
          {/* Label above the bar */}
          <p className="text-center text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
            Launch Partners
          </p>
          {/* Gradient Border Wrapper - Same as hero card */}
          <div
            className="rounded-2xl p-[2px]"
            style={{
              background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
              boxShadow: '0 0 30px rgba(169, 50, 149, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: 'rgba(13, 12, 16, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Logos Row with Labels */}
              <div className="flex items-center justify-center gap-4 md:gap-8">

                {/* Edgecore */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center h-6 mb-2">
                    <Image
                      src="/images/logos/LOGO.png"
                      alt="Edgecore"
                      width={100}
                      height={24}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <span className="text-white/50 text-[10px] md:text-xs">Hardware</span>
                </div>

                {/* Plus sign */}
                <span className="text-white/30 text-lg font-light">+</span>

                {/* NetExperience */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center h-6 mb-2">
                    <Image
                      src="https://www.netexperience.com/wp-content/uploads/2025/08/4060W.png"
                      alt="NetExperience"
                      width={120}
                      height={24}
                      className="h-5 w-auto object-contain opacity-90"
                      unoptimized
                    />
                  </div>
                  <span className="text-white/50 text-[10px] md:text-xs">Controller</span>
                </div>

                {/* Plus sign */}
                <span className="text-white/30 text-lg font-light">+</span>

                {/* wibipOS */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center h-6 mb-2">
                    <Image
                      src="/images/logos/wibipOS - White.svg"
                      alt="wibipOS"
                      width={100}
                      height={24}
                      className="h-5 w-auto object-contain opacity-90"
                    />
                  </div>
                  <span className="text-white/50 text-[10px] md:text-xs">Orchestration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

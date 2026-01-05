"use client";

import { useState } from "react";
import { Button, SignupModal } from "@/components/ui";

export function JourneyCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">

        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Central gold glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
            style={{
              background: 'radial-gradient(ellipse, rgba(240, 165, 89, 0.15) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
          />
          {/* Purple accent glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[300px]"
            style={{
              background: 'radial-gradient(ellipse, rgba(169, 50, 149, 0.12) 0%, transparent 55%)',
              filter: 'blur(50px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">

          {/* Gradient Border Container */}
          <div
            className="relative rounded-[28px] p-[2px]"
            style={{
              background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
            }}
          >
            {/* Glass Card Inner */}
            <div
              className="relative rounded-[26px] overflow-hidden"
              style={{
                background: 'rgba(20, 18, 25, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Subtle internal glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 30%, rgba(240, 165, 89, 0.08) 0%, transparent 50%)',
                }}
              />

              {/* Content */}
              <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 text-center">

                {/* The Headline Stack */}
                <div className="mb-10">
                  <h2
                    className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.2] md:leading-[1.15]"
                    style={{
                      letterSpacing: '-0.025em',
                    }}
                  >
                    <span className="block text-white">Order Today.</span>
                    <span className="block text-white">Trial Next Week.</span>
                    <span className="block text-white">Deploy This Month.</span>

                    {/* The Money Line - Gradient + Underline */}
                    <span className="relative inline-block mt-1">
                      <span
                        className="relative z-10"
                        style={{
                          background: 'linear-gradient(135deg, #f0a559 0%, #f0a559 40%, #a93295 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Profit This Quarter.
                      </span>

                      {/* Curved underline under "Profit This Quarter" - curves downward */}
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-4"
                        viewBox="0 0 200 16"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <defs>
                          <linearGradient id="ctaUnderlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f0a559" />
                            <stop offset="100%" stopColor="#a93295" />
                          </linearGradient>
                          <filter id="ctaUnderlineGlow">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <path
                          d="M0,14 Q100,2 200,14"
                          stroke="url(#ctaUnderlineGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          filter="url(#ctaUnderlineGlow)"
                        />
                      </svg>
                    </span>
                  </h2>
                </div>

                {/* CTA Button - Bold and Glowing */}
                <div className="mb-6">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="min-w-[260px] text-base md:text-lg py-4 px-8 shadow-[0_0_30px_rgba(240,165,89,0.4)]"
                  >
                    Start Your 30-Day Journey
                  </Button>
                </div>

                {/* Trust Line */}
                <p className="text-[#8B8B9A] text-sm md:text-base">
                  Full access • No credit card • Your CSM on standby
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

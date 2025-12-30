"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, SignupModal } from "@/components/ui";

export function JourneyCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-lg h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-500/8 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* F1 Journey Visual with Headline Overlay */}
          <div className="relative rounded-2xl mb-8">
            <Image
              src="/images/journey/F1-Journey-CTA.png"
              alt="Your F1 Journey: START with Trial Kit, Week 1 Trial & Commit, Month 1 Deploy & Connect with F1 Pit Crew support, Quarter 1 Profit & Champion"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            {/* Headline overlaid on image - top */}
            <div className="absolute inset-x-0 -top-3 md:-top-4 px-4">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-dark-50 tracking-tight leading-tight drop-shadow-lg">
                Order Today. Trial Next Week.
                <br />
                <span className="text-primary">Deploy This Month.</span>
                <br />
                Profit This Quarter.
              </h2>
            </div>

            {/* CTA overlaid on image - bottom */}
            <div className="absolute inset-x-0 -bottom-20 pb-4 md:pb-6 px-4 bg-gradient-to-t from-dark-950/90 via-dark-950/60 to-transparent pt-12 z-20">
              {/* Turn-Key Kit Trifecta */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 max-w-lg mx-auto">
                <div className="p-2 md:p-3 rounded-lg bg-dark-800/70 border border-white/[0.06]">
                  <div className="text-primary text-[10px] md:text-xs font-semibold mb-0.5">
                    HARDWARE:
                  </div>
                  <div className="text-[10px] md:text-xs text-dark-300">
                    OpenLAN AP + Switch
                  </div>
                </div>
                <div className="p-2 md:p-3 rounded-lg bg-dark-800/70 border border-white/[0.06]">
                  <div className="text-primary text-[10px] md:text-xs font-semibold mb-0.5">
                    CONTROLLER:
                  </div>
                  <div className="text-[10px] md:text-xs text-dark-300">
                    Cloud. Zero on-prem.
                  </div>
                </div>
                <div className="p-2 md:p-3 rounded-lg bg-dark-800/70 border border-white/[0.06]">
                  <div className="text-primary text-[10px] md:text-xs font-semibold mb-0.5">
                    YOUR PORTAL:
                  </div>
                  <div className="text-[10px] md:text-xs text-dark-300">
                    Your brand. Your logo.
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-1 mb-4 text-xs md:text-sm text-dark-300">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No integration.
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Production-ready.
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  40% better margins.
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Your Journey
                </Button>
                <Button variant="secondary" href="/demo#schedule">
                  Talk to an Engineer First
                </Button>
              </div>

              <p className="text-dark-400 text-[10px] md:text-xs">
                30-day full access • No credit card • Your LiveSDK pit crew on
                standby
              </p>
            </div>
          </div>
        </div>
      </section>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

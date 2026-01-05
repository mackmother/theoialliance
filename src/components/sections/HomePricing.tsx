"use client";

import Link from "next/link";

const investmentFactors = [
  {
    title: "Your Scale",
    description: "Devices under management, locations, growth trajectory",
  },
  {
    title: "Your Integrations",
    description: "Existing vendors, billing systems, custom workflows",
  },
  {
    title: "Your Ambition",
    description: "R&D hours, custom features, white-glove support",
  },
];

export function HomePricing() {
  return (
    <section
      id="pricing"
      className="relative py-16 overflow-hidden"
    >

      {/* ============================================
          CONTENT
          ============================================ */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

        {/* Glass Card with Gradient Border */}
        <div
          className="relative rounded-[32px] p-[2px]"
          style={{
            background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.5) 0%, rgba(240, 165, 89, 0.15) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.2) 75%, rgba(169, 50, 149, 0.5) 100%)',
          }}
        >
          {/* Glass Card Inner */}
          <div
            className="relative rounded-[30px] overflow-hidden py-16 px-8 md:py-20 md:px-16"
            style={{
              background: 'rgba(20, 18, 25, 0.5)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Content */}
            <div className="relative z-10">

              {/* Transitional Question */}
              <p className="text-center text-[#8B8B9A] text-base md:text-lg mb-4 font-light">
                So what does partnership like this cost?
              </p>

              {/* Headline */}
              <h2
                className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white mb-4 leading-[1.1] text-center"
                style={{
                  letterSpacing: '-0.025em',
                }}
              >
                We Price the Partnership.{" "}
                <span className="relative inline-block">
                  Not the Seat.
                  {/* Gold-to-Purple Arched Underline - curves downward */}
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3"
                    viewBox="0 0 250 12"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="ctaSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f0a559" />
                        <stop offset="100%" stopColor="#a93295" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,10 Q125,2 250,10"
                      fill="none"
                      stroke="url(#ctaSwoosh)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-[#8B8B9A] text-base md:text-lg max-w-[650px] mx-auto mb-10 font-light text-center">
                Just like we adapt technically to your stack, we adapt commercially to your situation. No rigid tiers. No surprise overages.
              </p>

              {/* Three Pillars */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {investmentFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl p-[1px]"
                    style={{
                      background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.25) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(169, 50, 149, 0.15) 100%)',
                    }}
                  >
                    <div
                      className="rounded-xl px-5 py-4 text-center h-full"
                      style={{
                        background: 'rgba(20, 18, 25, 0.6)',
                      }}
                    >
                      <h3 className="text-[#f0a559] font-display font-semibold text-lg mb-1">
                        {factor.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conversation Hook */}
              <p className="text-center text-white/80 text-base mb-8 max-w-[500px] mx-auto">
                Every partnership starts with a conversation.
                <br />
                <span className="text-[#8B8B9A]">Tell us where you are. Tell us where you want to go.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Primary CTA */}
                <Link
                  href="/journey"
                  className="group relative inline-block rounded-full p-[2px] transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                    boxShadow: '0 0 25px rgba(240, 165, 89, 0.3), 0 0 50px rgba(169, 50, 149, 0.2)',
                  }}
                >
                  <span
                    className="block px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all duration-300"
                    style={{
                      background: 'rgba(20, 18, 25, 0.9)',
                    }}
                  >
                    See the 30-Day Journey
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/demo#schedule"
                  className="px-8 py-3.5 rounded-full text-white/80 font-medium text-base transition-all duration-300 hover:text-white border border-white/20 hover:border-white/40"
                >
                  Schedule a Call
                </Link>
              </div>

              {/* Closing Line */}
              <p className="text-center text-[#8B8B9A] text-sm mt-8 italic">
                Same flexibility in pricing as in engineering. That&apos;s the OIA way.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

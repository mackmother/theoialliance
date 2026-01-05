"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SignupModal } from "@/components/ui";

const differentiators = [
  {
    title: "LIVE SDK Engineers",
    subtitle: "Elite engineering on retainer—not headcount",
    description:
      "10 years R&D. Day one expertise on problems we've solved 100 times before.",
    image: "/images/screenshots/LiveSDK.png",
  },
  {
    title: "Bring Your Own Tech Stack",
    subtitle: "We orchestrate—we don't replace",
    description:
      "Your billing, your SSO, your tools. No rip-and-replace. No starting over.",
    image: "/images/screenshots/BYOTSIcon.png",
  },
  {
    title: "Partner-Driven Development",
    subtitle: "Your needs drive our roadmap",
    description:
      "Every integration strengthens the ecosystem. Your edge cases become solved problems.",
    image: "/images/screenshots/DynamicRoadmap.png",
  },
];

const outcomes = [
  {
    title: "Never Walk Away Again",
    description: "Become the MSP that says YES to every hardware stack",
    unlocks: [
      "Support any vendor combination",
      "Unified dashboard across stacks",
      "One team manages everything",
    ],
    cta: "Stop losing deals to vendor lock-in",
    level: "Achievable",
  },
  {
    title: "Compete With the Telcos",
    description: "Win enterprise contracts that used to be out of reach",
    unlocks: [
      "White-label client portals",
      "Billing system integration",
      "Telco-grade reliability",
    ],
    cta: "Become the regional powerhouse",
    highlighted: true,
    level: "Ambitious",
  },
  {
    title: "Land National Contracts",
    description: "The MsTECH Jamaica playbook: 5-person team, 1,000 schools",
    unlocks: [
      "Dedicated engineering hours",
      "Custom integration development",
      "Strategic partnership SLAs",
    ],
    cta: "Play at the highest level",
    level: "Audacious",
  },
];

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero: Partnership. Not Licensing. */}
        <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-12">
          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6">

            {/* Glass Card with Gradient Border */}
            <div
              className="relative rounded-[28px] p-[2px]"
              style={{
                background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
              }}
            >
              <div
                className="relative rounded-[26px] overflow-hidden"
                style={{
                  background: 'rgba(20, 18, 25, 0.6)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                {/* Handshake Image - Right side */}
                <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden md:flex items-center justify-end pointer-events-none">
                  {/* Glow behind handshake */}
                  <div
                    className="absolute right-[20px] w-[300px] h-[300px]"
                    style={{
                      background: 'radial-gradient(circle, rgba(240, 165, 89, 0.4) 0%, rgba(169, 50, 149, 0.2) 40%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />
                  <Image
                    src="/images/screenshots/golden handshake.png"
                    alt="Partnership"
                    width={400}
                    height={400}
                    className="relative z-10 h-[90%] w-auto object-contain mr-4"
                  />
                </div>

                {/* Content - Left side */}
                <div className="relative z-10 px-8 py-10 md:px-12 md:py-14 md:max-w-[55%]">
                  <h1
                    className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white mb-5 leading-[1.05]"
                    style={{
                      letterSpacing: '-0.025em',
                    }}
                  >
                    <span className="relative inline-block">
                      We Built It.
                      {/* Curved Underline - curves downward */}
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-3"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="pricingHeroSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f0a559" />
                            <stop offset="100%" stopColor="#a93295" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,10 Q100,2 200,10"
                          fill="none"
                          stroke="url(#pricingHeroSwoosh)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <br />
                    So You Don&apos;t Have To.
                  </h1>

                  <p className="text-[#8B8B9A] text-base md:text-lg max-w-[380px] mb-8 font-light leading-relaxed">
                    Now say YES to every hardware stack, every RFP—starting this quarter.
                  </p>

                  {/* CTA Button with gradient border */}
                  <Link
                    href="/journey"
                    className="group relative inline-block rounded-full p-[2px] transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                    }}
                  >
                    <span
                      className="block px-8 py-3 rounded-full text-white font-semibold transition-all duration-300"
                      style={{
                        background: 'rgba(20, 18, 25, 0.9)',
                      }}
                    >
                      See the Profit Model
                    </span>
                  </Link>
                </div>

                {/* Handshake Image - Mobile (below content) */}
                <div className="md:hidden flex justify-center pb-6">
                  <Image
                    src="/images/screenshots/golden handshake.png"
                    alt="Partnership"
                    width={200}
                    height={200}
                    className="h-[150px] w-auto object-contain opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* ============================================
                FLOATING PROOF BAR - 50/50 overlap on card bottom
                ============================================ */}
            <div className="relative -mt-8 md:-mt-10 mx-auto max-w-[750px]">
              {/* Label above the pill */}
              <p className="text-center text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
                Why Partner With Us
              </p>
              {/* Gradient Border Wrapper */}
              <div
                className="rounded-2xl p-[2px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
                  boxShadow: '0 0 30px rgba(169, 50, 149, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div
                  className="rounded-2xl px-6 py-4"
                  style={{
                    background: 'rgba(13, 12, 16, 0.85)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {/* 10 Years */}
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-[#f0a559] mb-0.5">10 Years</div>
                      <div className="text-white/80 text-xs font-medium">of R&D</div>
                      <div className="text-white/40 text-[10px] hidden md:block">Battle-tested across 10+ US telcos</div>
                    </div>
                    {/* 100+ Integrations */}
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-[#f0a559] mb-0.5">100+</div>
                      <div className="text-white/80 text-xs font-medium">Integrations</div>
                      <div className="text-white/40 text-[10px] hidden md:block">Hardware, billing, SSO, and more</div>
                    </div>
                    {/* 30 Days */}
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-[#f0a559] mb-0.5">30 Days</div>
                      <div className="text-white/80 text-xs font-medium">Not 2 Years</div>
                      <div className="text-white/40 text-[10px] hidden md:block">To multi-vendor production</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Real Cost: Build vs. Partner - Bento Layout */}
        <section className="relative py-12 overflow-hidden">
          <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2
                className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.1] inline-block"
                style={{
                  letterSpacing: '-0.025em',
                }}
              >
                The Real Cost of{" "}
                <span className="relative inline-block italic">
                  &ldquo;Building It Yourself&rdquo;
                  {/* Gold-to-Purple Arched Underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4"
                    viewBox="0 0 300 16"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="buildSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f0a559" />
                        <stop offset="100%" stopColor="#a93295" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,14 Q150,2 300,14"
                      fill="none"
                      stroke="url(#buildSwoosh)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-5">

              {/* LEFT - Build Trap Image Card */}
              <div
                className="relative rounded-3xl overflow-hidden md:row-span-2"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(20, 18, 25, 0.6)',
                }}
              >
                {/* Background Image */}
                <Image
                  src="/images/screenshots/BuildTrap.png"
                  alt="The Build Trap vs Partnership Path"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* TOP RIGHT - Speed Card (Warm Sunset Gradient) */}
              <div
                className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-center min-h-[190px]"
                style={{
                  background: 'linear-gradient(135deg, #1a1425 0%, #2d1a35 20%, #5c2a45 40%, #a84a55 60%, #d4734a 80%, #e8a040 100%)',
                }}
              >
                <div
                  className="font-display text-2xl md:text-3xl font-bold text-white mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Production-ready in 30 days
                </div>
                <div className="text-white/80 text-lg">
                  Win the next RFP this quarter
                </div>
              </div>

              {/* BOTTOM RIGHT - Math Card (Dark Glass) */}
              <div
                className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-center min-h-[190px]"
                style={{
                  background: 'rgba(20, 18, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="text-[#8B8B9A] text-sm uppercase tracking-wider mb-2">
                  The Math
                </div>
                <div
                  className="font-display text-xl md:text-2xl font-bold text-white mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  One 500-site deal = <span className="text-[#f0a559]">$250K+ revenue</span>
                </div>
                <div className="text-white/60 text-base">
                  Partnership delivers 3-5X ROI
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* What You Actually Get - Mangeo Glass Cards */}
        <section className="relative py-16 overflow-hidden">
          <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2
                className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.1] inline-block"
                style={{ letterSpacing: '-0.025em' }}
              >
                What You{" "}
                <span className="relative inline-block italic">
                  Actually Get
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4"
                    viewBox="0 0 200 16"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="getGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f0a559" />
                        <stop offset="100%" stopColor="#a93295" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,14 Q100,2 200,14"
                      fill="none"
                      stroke="url(#getGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-[#8B8B9A] text-lg mt-4">
                Not software licenses. Strategic capability.
              </p>
            </div>

            {/* 3 Glass Cards with Images */}
            <div className="grid md:grid-cols-3 gap-5">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl p-[1px]"
                  style={{
                    background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.3) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.2) 100%)',
                  }}
                >
                  <div
                    className="rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{
                      background: 'rgba(20, 18, 25, 0.8)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-square">
                      <Image
                        src={diff.image}
                        alt={diff.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Text Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-white mb-1" style={{ letterSpacing: '-0.02em' }}>
                        {diff.title}
                      </h3>
                      <p className="text-[#f0a559] text-sm mb-3">{diff.subtitle}</p>
                      <p className="text-[#8B8B9A] text-sm leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Becomes Possible - Mangeo Glass Cards */}
        <section className="relative py-16 overflow-hidden">
          <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2
                className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.1] inline-block"
                style={{ letterSpacing: '-0.025em' }}
              >
                What Becomes{" "}
                <span className="relative inline-block italic">
                  Possible
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4"
                    viewBox="0 0 150 16"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="possibleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f0a559" />
                        <stop offset="100%" stopColor="#a93295" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,14 Q75,2 150,14"
                      fill="none"
                      stroke="url(#possibleGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-[#8B8B9A] text-lg mt-4 max-w-xl mx-auto">
                You&apos;re the MSP CEO competitors lose sleep over.
                <br />
                <span className="text-white/80 font-medium">The one who never walks away.</span>
              </p>
            </div>

            {/* 3 Outcome Cards */}
            <div className="grid md:grid-cols-3 gap-5">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl p-[2px]"
                  style={{
                    background: outcome.highlighted
                      ? 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)'
                      : 'linear-gradient(145deg, rgba(240, 165, 89, 0.2) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.15) 100%)',
                  }}
                >
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col"
                    style={{
                      background: 'rgba(20, 18, 25, 0.85)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Level Badge */}
                    <div
                      className="self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"
                      style={{
                        background: outcome.highlighted
                          ? 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)'
                          : 'rgba(240, 165, 89, 0.15)',
                        color: outcome.highlighted ? 'white' : '#f0a559',
                        border: outcome.highlighted ? 'none' : '1px solid rgba(240, 165, 89, 0.3)',
                      }}
                    >
                      {outcome.level}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                      {outcome.title}
                    </h3>
                    <p className="text-[#8B8B9A] text-sm mb-5">
                      {outcome.description}
                    </p>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {outcome.unlocks.map((unlock, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                          <span className="text-[#f0a559] mt-0.5">✓</span>
                          {unlock}
                        </li>
                      ))}
                    </ul>

                    <p className="text-[#8B8B9A] text-xs italic">{outcome.cta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: The Single Question Close */}
        <section className="relative py-20 overflow-hidden">
          <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">

            <h2
              className="font-display text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-8"
              style={{ letterSpacing: '-0.025em' }}
            >
              How many deals will you{" "}
              <span className="relative inline-block italic">
                walk away from
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 250 12"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,10 Q125,2 250,10"
                    fill="none"
                    stroke="url(#ctaGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              this quarter?
            </h2>

            {/* CTA Button with gradient border */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-block rounded-full p-[2px] transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                boxShadow: '0 0 30px rgba(240, 165, 89, 0.3), 0 0 60px rgba(169, 50, 149, 0.2)',
              }}
            >
              <span
                className="block px-10 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300"
                style={{
                  background: 'rgba(20, 18, 25, 0.9)',
                }}
              >
                Start Your 30-Day Trial
              </span>
            </button>

            <p className="text-[#8B8B9A] text-sm mt-6">
              No credit card. No contracts. Full access.
            </p>

          </div>
        </section>
      </main>
      <Footer />

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

"use client";

import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";

const allianceLeaders = [
  {
    name: "Magnus Johansson",
    title: "CEO, WiBUZ",
    image: "/images/screenshots/CEO-WiBUZ.jpeg",
    quote: "We don't hand you off. You get me.",
  },
  {
    name: "Jack Raynor",
    title: "President, NetExperience",
    image: "/images/screenshots/Presidnet NetExperience.jpeg",
    quote: "If we can't solve it, we'll tell you.",
  },
  {
    name: "Teng Tai Hsu",
    title: "VP of Product, Edgecore Wi-Fi",
    image: "/images/screenshots/VPofWiFIEdgecore.jpeg",
    quote: "Your first deployment is my priority.",
  },
];

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6">

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
                  background: 'rgba(20, 18, 25, 0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2">

                  {/* Left Column - Content */}
                  <div className="relative z-10 px-8 py-10 md:px-12 md:py-14">
                    {/* Eyebrow */}
                    <div className="mb-6">
                      <span
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                        style={{
                          background: 'rgba(240, 165, 89, 0.15)',
                          border: '1px solid rgba(240, 165, 89, 0.3)',
                          color: '#f0a559',
                        }}
                      >
                        30-Minute Strategy Call
                      </span>
                    </div>

                    <h1
                      className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white mb-5 leading-[1.1]"
                      style={{
                        letterSpacing: '-0.025em',
                      }}
                    >
                      Get Your{' '}
                      <span className="relative inline-block">
                        Multi-Vendor Roadmap
                        {/* Curved Underline */}
                        <svg
                          className="absolute -bottom-1 left-0 w-full h-3"
                          viewBox="0 0 200 12"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id="demoHeroSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f0a559" />
                              <stop offset="100%" stopColor="#a93295" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,10 Q100,2 200,10"
                            fill="none"
                            stroke="url(#demoHeroSwoosh)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </h1>

                    <p className="text-[#8B8B9A] text-base md:text-lg mb-8 font-light leading-relaxed">
                      30 minutes. Zero fluff. One clear plan.
                      <br />
                      <span className="text-white/80">
                        We&apos;ll dig into your hardware mix, your growth goals, and show you exactly how to say YES to the next multi-vendor RFP.
                      </span>
                    </p>

                    {/* What You'll Leave With */}
                    <div className="mb-6">
                      <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                        What You&apos;ll Leave With
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'A breakdown of your current vendor complexity',
                          'How OIA handles your exact hardware mix',
                          'A 30-day path to your first multi-vendor deployment',
                          'Honest feedback on whether we\'re the right fit',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-[#f0a559] mt-0.5">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-white/80 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Risk Reversal */}
                    <div
                      className="mb-8 px-4 py-3 rounded-xl"
                      style={{
                        background: 'rgba(240, 165, 89, 0.08)',
                        border: '1px solid rgba(240, 165, 89, 0.2)',
                      }}
                    >
                      <p className="text-white/70 text-sm leading-relaxed">
                        <span className="text-white/90 font-medium">Worst case?</span> You walk away with clarity on what&apos;s possible.
                        <br />
                        <span className="text-[#f0a559] font-medium">Best case?</span> You never walk away from a multi-vendor deal again.
                      </p>
                    </div>

                    {/* Red Carpet Line */}
                    <div
                      className="mt-8 pt-6"
                      style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
                    >
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                        Who You&apos;ll Meet
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        The CEO of WiBUZ. The President of NetExperience. The VP of Product at Edgecore WiFi.
                        <br />
                        <span className="text-[#f0a559] font-medium">The people responsible for your success.</span>
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Calendly Embed */}
                  <div
                    className="relative min-h-[600px] md:min-h-[700px]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {/* Calendly Inline Widget */}
                    <iframe
                      src="https://calendly.com/wibuz_meet/unlock_your_growth_potential?hide_gdpr_banner=1&background_color=14121a&text_color=ffffff&primary_color=f0a559"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Schedule a Growth Session"
                      className="absolute inset-0"
                      style={{
                        minHeight: '600px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Future Testimonial - Below the card */}
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
                After the call, we hope you&apos;ll say:
              </p>
              <blockquote
                className="relative px-8 py-6 rounded-2xl"
                style={{
                  background: 'rgba(240, 165, 89, 0.05)',
                  border: '1px solid rgba(240, 165, 89, 0.15)',
                }}
              >
                {/* Quote marks */}
                <span
                  className="absolute top-4 left-6 text-4xl font-serif leading-none"
                  style={{ color: 'rgba(240, 165, 89, 0.3)' }}
                >
                  &ldquo;
                </span>
                <p className="text-white/90 text-lg md:text-xl italic leading-relaxed">
                  I expected a sales pitch. Instead, you mapped out exactly how we&apos;d handle Ruckus + Edgecore + Fortinet in one dashboard.{' '}
                  <span
                    className="font-semibold not-italic"
                    style={{ color: '#f0a559' }}
                  >
                    We&apos;re ready to start our 30-day journey.
                  </span>
                </p>
                <span
                  className="absolute bottom-4 right-6 text-4xl font-serif leading-none"
                  style={{ color: 'rgba(240, 165, 89, 0.3)' }}
                >
                  &rdquo;
                </span>
              </blockquote>
              <p className="text-white/40 text-sm mt-4">
                — You, after 30 minutes with the Alliance
              </p>
            </div>

            {/* Alliance Leaders Section */}
            <div className="mt-16">
              <div className="grid md:grid-cols-3 gap-6">
                {allianceLeaders.map((leader, index) => (
                  <div
                    key={index}
                    className="text-center"
                  >
                    {/* Headshot */}
                    <div
                      className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden p-[2px]"
                      style={{
                        background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.5) 0%, rgba(169, 50, 149, 0.5) 100%)',
                      }}
                    >
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* Name & Title */}
                    <h4 className="text-white font-semibold text-sm mb-0.5">
                      {leader.name}
                    </h4>
                    <p className="text-white/50 text-xs mb-3">
                      {leader.title}
                    </p>
                    {/* Quote */}
                    <p className="text-[#f0a559] text-sm italic">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

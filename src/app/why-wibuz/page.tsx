"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";

// Sound Familiar data
const soundFamiliarItems = [
  {
    frustration: "I can't stitch together APs, controllers, and my billing system.",
    solution: "OSS/BSS integration. Billing events trigger provisioning automatically.",
    proof: "Optimum runs 50K SMBs with zero manual touch.",
  },
  {
    frustration: "Where's the multi-tenant portal? The customer-facing branding?",
    solution: "Unlimited hierarchy: MSP → Reseller → Property → Site. White-label portals per tenant.",
    proof: "Jamaica: 6 vendors, 400 schools, one dashboard.",
  },
  {
    frustration: "I can't find or afford the SDK engineers I need to grow.",
    solution: "25 engineers on retainer. Zero recruiting, zero relocation, zero ramp-up time.",
    proof: "MsTECH: $120K/year for 25 engineers vs $240K for 2 hires they couldn't find.",
  },
  {
    frustration: "I don't have engineers who can customize open-source controllers.",
    solution: "LiveSDK: 25 R&D engineers build your integrations on demand.",
    proof: "NetExperience integration: 3 weeks, now standard.",
  },
  {
    frustration: "Why trade Cisco lock-in for controller lock-in?",
    solution: "Controller-agnostic. Ingest legacy Ruckus/Cisco via API. Add Edgecore. Same UI.",
    proof: "Turns $200K rip-and-replace into $20K expansion.",
  },
];

export default function WhyWiBUZPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Swipe gesture handling for mobile Sound Familiar carousel
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % soundFamiliarItems.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + soundFamiliarItems.length) % soundFamiliarItems.length);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    if (isSwipe) {
      if (distance > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ============================================
            HERO SECTION - The MSP CEO's Dilemma (Survey Data)
            Lead with data to build credibility
            ============================================ */}
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
                {/* Lock Image with Sunburst - Right justified, full height within frame */}
                <div className="absolute right-6 top-0 bottom-0 w-[40%] hidden md:flex items-center justify-end pointer-events-none">
                  {/* CSS Sunburst Effect - breaks outside frame */}
                  <div
                    className="absolute right-[-80px] w-[500px] h-[500px]"
                    style={{
                      background: `
                        repeating-conic-gradient(
                          from 0deg,
                          rgba(240, 165, 89, 0.35) 0deg 5deg,
                          transparent 5deg 10deg
                        )
                      `,
                      mask: 'radial-gradient(circle, black 0%, black 15%, transparent 65%)',
                      WebkitMask: 'radial-gradient(circle, black 0%, black 15%, transparent 65%)',
                    }}
                  />
                  {/* Glow center */}
                  <div
                    className="absolute right-[60px] w-[180px] h-[180px]"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(240, 165, 89, 0.4) 30%, rgba(169, 50, 149, 0.2) 60%, transparent 80%)',
                      filter: 'blur(25px)',
                    }}
                  />
                  <Image
                    src="/images/screenshots/lockIcon.png"
                    alt="Security"
                    width={400}
                    height={400}
                    className="relative z-10 h-[95%] w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 px-8 py-10 md:px-12 md:py-14 md:max-w-[55%]">
                  <h1
                    className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white mb-5 leading-[1.05]"
                    style={{
                      letterSpacing: '-0.025em',
                    }}
                  >
                    Your Dilemma
                    <br />
                    <span className="relative inline-block">
                      as MSP CEO.
                      {/* Curved Underline */}
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-3"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="dilemmaSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f0a559" />
                            <stop offset="100%" stopColor="#a93295" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,10 Q100,2 200,10"
                          fill="none"
                          stroke="url(#dilemmaSwoosh)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h1>

                  <p className="text-[#8B8B9A] text-base md:text-lg max-w-[380px] mb-8 font-light leading-relaxed">
                    Maravedis research confirms vendor lock-in is blocking growth—multi-vendor support is the top need.
                  </p>

                  {/* Download Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setShowModal(true)}
                    >
                      Download Report
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      href="/docs/msp-ceo-challenges-infographic.png"
                      download="MSP-CEO-Challenges-Infographic.png"
                    >
                      Free Infographic
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* What's in the Report - Two Column Layout */}
            <div className="mt-10">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">What&apos;s in the Report</h3>
                <p className="text-[#8B8B9A] text-base md:text-lg">Data-backed insights for your next board meeting</p>
              </div>

              {/* Two Column Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Left Column - The Market Pain */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(30, 27, 38, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div className="mb-4">
                    <div className="text-white/90 text-sm font-semibold mb-0.5">Maravedis Survey Results</div>
                    <div className="text-white/40 text-xs">The Market Pain</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { stat: '56%', text: 'want multi-vendor capability' },
                      { stat: '44%', text: 'unsatisfied with vendor management' },
                      { stat: '37%', text: 'can\'t grow—can\'t find talent' },
                      { stat: '34%', text: 'say it\'s too expensive' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-baseline gap-3">
                        <span
                          className="text-xl font-bold min-w-[60px]"
                          style={{
                            background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {item.stat}
                        </span>
                        <span className="text-white/70 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - The Alliance Answer */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(240, 165, 89, 0.08)',
                    border: '1px solid rgba(240, 165, 89, 0.15)',
                  }}
                >
                  <div className="mb-4">
                    <div className="text-[#f0a559] text-sm font-semibold mb-0.5">OIA Value Proposition</div>
                    <div className="text-white/40 text-xs">The Solution</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Why single-vendor is a supply chain risk',
                      'The multi-vendor math',
                      'How to scale without hiring SDK engineers',
                      'The LiveSDK model: 25 engineers on retainer',
                      '5-year TCO breakdown',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#f0a559] mt-0.5">✓</span>
                        <span className="text-white/90 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SOUND FAMILIAR SECTION
            Frustration → Solution pairs
            ============================================ */}
        <section className="relative py-12 overflow-hidden">
          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6">
            <h2
              className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white text-center mb-10 leading-[1.05]"
              style={{ letterSpacing: '-0.025em' }}
            >
              Sound{' '}
              <span className="relative inline-block">
                Familiar?
                {/* Curved Underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="familiarSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,10 Q100,2 200,10"
                    fill="none"
                    stroke="url(#familiarSwoosh)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Mobile: Swipeable Carousel */}
            <div
              className="md:hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Current Card */}
              <div className="space-y-3">
                {/* Frustration Card */}
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: 'rgba(30, 27, 38, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <span className="text-red-400/70 text-xs font-medium uppercase tracking-wider">Stuck</span>
                  <p className="text-white/70 italic mt-1">&ldquo;{soundFamiliarItems[currentSlide].frustration}&rdquo;</p>
                </div>

                {/* Solution Card */}
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: 'rgba(240, 165, 89, 0.08)',
                    border: '1px solid rgba(240, 165, 89, 0.15)',
                  }}
                >
                  <span className="text-[#f0a559] text-xs font-medium uppercase tracking-wider">Unlocked</span>
                  <p className="text-white/90 mt-1">{soundFamiliarItems[currentSlide].solution}</p>
                </div>
              </div>

              {/* Navigation: Dots + Arrows */}
              <div className="flex items-center justify-center gap-4 mt-6">
                {/* Previous Arrow */}
                <button
                  onClick={goToPrevSlide}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-2">
                  {soundFamiliarItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === currentSlide
                          ? 'w-6 h-2'
                          : 'w-2 h-2 opacity-40'
                      }`}
                      style={{
                        background: i === currentSlide
                          ? 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)'
                          : 'rgba(255, 255, 255, 0.5)',
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Next Arrow */}
                <button
                  onClick={goToNextSlide}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  aria-label="Next"
                >
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Swipe Hint */}
              <p className="text-center text-white/30 text-xs mt-3">Swipe to explore</p>
            </div>

            {/* Desktop: Grid Layout (unchanged) */}
            <div className="hidden md:block space-y-4">
              {soundFamiliarItems.map((item, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-4 items-stretch"
                >
                  {/* Frustration - Left */}
                  <div
                    className="p-5 rounded-xl flex items-center"
                    style={{
                      background: 'rgba(30, 27, 38, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div>
                      <span className="text-red-400/70 text-xs font-medium uppercase tracking-wider">Stuck</span>
                      <p className="text-white/70 italic mt-1">&ldquo;{item.frustration}&rdquo;</p>
                    </div>
                  </div>

                  {/* Solution - Right */}
                  <div
                    className="p-5 rounded-xl flex items-center"
                    style={{
                      background: 'rgba(240, 165, 89, 0.08)',
                      border: '1px solid rgba(240, 165, 89, 0.15)',
                    }}
                  >
                    <div>
                      <span className="text-[#f0a559] text-xs font-medium uppercase tracking-wider">Unlocked</span>
                      <p className="text-white/90 mt-1">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================
            CTA SECTION - "Stuck Between Pilot and Profit?"
            Emotional closer with strong CTA
            ============================================ */}
        <section className="relative py-16 overflow-hidden">
          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6">

            {/* Glass Card with Gradient Border */}
            <div
              className="relative rounded-[28px] p-[2px]"
              style={{
                background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
              }}
            >
              <div
                className="relative rounded-[26px] overflow-hidden px-8 py-14 md:px-14 md:py-16 text-center"
                style={{
                  background: 'rgba(20, 18, 25, 0.6)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                {/* Ambient glow */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px]"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(169, 50, 149, 0.2) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                  }}
                />

                <div className="relative z-10">
                  <h2
                    className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white mb-5 leading-[1.05]"
                    style={{
                      letterSpacing: '-0.025em',
                    }}
                  >
                    Stuck Between Pilot
                    <br />
                    <span className="relative inline-block">
                      and Profit?
                      {/* Curved Underline */}
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-3"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="profitSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f0a559" />
                            <stop offset="100%" stopColor="#a93295" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,10 Q100,2 200,10"
                          fill="none"
                          stroke="url(#profitSwoosh)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h2>

                  <p className="text-[#9CA3AF] text-base md:text-lg max-w-xl mx-auto mb-8">
                    30 days from trial kit to your first customer invoice.
                    <br />
                    <span className="text-white/80 font-medium">Stop running pilots. Start collecting revenue.</span>
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      href="/journey"
                      className="min-w-[220px]"
                    >
                      Start the 30-Day Journey
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      href="/demo#schedule"
                      className="min-w-[180px]"
                    >
                      Book Your Strategy Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* ============================================
          DOWNLOAD MODAL
          ============================================ */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-md rounded-2xl p-[2px]"
            style={{
              background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(20, 18, 25, 0.95)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-xl font-bold text-white mb-2">Get the Full Report</h3>
              <p className="text-white/50 text-sm mb-6">Enter your details to download the MSP CEO&apos;s Dilemma report.</p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#f0a559]/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#f0a559]/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#f0a559]/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #f0a559 0%, #d4874a 100%)',
                    color: '#1a1425',
                  }}
                >
                  Download Report
                </button>
              </form>

              <p className="text-white/30 text-xs text-center mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import { HowItWorks, ProofPricing } from "@/components/sections";
import { JourneyCarousel } from "@/components/journey";

// Alliance Leaders data
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

// Comparison table data (Same Enterprise Checklist, Different Economics)
const comparisonRows = [
  { feature: "Enterprise-grade hardware", legacy: true, oia: true },
  { feature: "Cloud-managed control", legacy: true, oia: true },
  { feature: "Multi-site, multi-tenant", legacy: true, oia: true },
  { feature: "Guest portals & analytics", legacy: true, oia: true },
  { feature: "Unit economics at scale", legacy: "Margins thin as you grow", oia: "Margins improve with scale" },
  { feature: "Down-market viability", legacy: "Can't make SMB deals pencil", oia: "Works at 20 units or 2,000" },
  { feature: "Multi-vendor support", legacy: "Walk away from mixed RFPs", oia: "Say YES to every hardware mix" },
  { feature: "Engineering support", legacy: "Hire your own SDK team", oia: "25 engineers on retainer" },
  { feature: "Lock-in", legacy: "Rip-and-replace to switch", oia: "Cap legacy. Grow open. One dashboard." },
];

// Sound Familiar data
const soundFamiliarItems = [
  {
    frustration: "I walked away from three multi-vendor RFPs last quarter.",
    solution: "Say YES to every hardware mix. One team. One dashboard. One quote.",
  },
  {
    frustration: "The 30-unit property should be profitable. But legacy hardware runs $300+ per AP, plus licensing for AI features my customer will never use.",
    solution: "Open economics. Enterprise-grade APs at $80–$120. Pay for what your customers actually need—not what Aruba's product team shipped this quarter.",
  },
  {
    frustration: "We lost the hospital deal to an MSP who could keep their Ruckus and add Edgecore. We couldn't.",
    solution: "Cap and grow wins deals that rip-and-replace loses. Now you're that MSP.",
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
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
            HERO SECTION - The MSP CEO's Dilemma
            Problem-first, data-backed credibility
            CTAs: Journey (ready buyers) | Demo (skeptics)
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
                {/* Download link - Fixed upper right */}
                <button
                  onClick={() => setShowModal(true)}
                  className="absolute top-4 right-6 z-20 pointer-events-auto hidden md:flex items-center gap-1.5 text-[#f0a559] text-sm font-medium hover:text-[#f0a559]/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Full Report
                </button>

                {/* Maravedis Report Image - Right justified, vertically centered */}
                <div className="absolute right-6 top-8 bottom-8 w-[40%] hidden md:flex items-center justify-center pointer-events-none">
                  {/* Glow behind image */}
                  <div
                    className="absolute w-[250px] h-[250px]"
                    style={{
                      background: 'radial-gradient(circle, rgba(240, 165, 89, 0.4) 0%, rgba(169, 50, 149, 0.2) 40%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />
                  <Image
                    src="/images/screenshots/maravedis_Report.png"
                    alt="Maravedis MSP CEO Survey Report"
                    width={400}
                    height={500}
                    className="relative z-10 max-h-full w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 px-8 py-10 pb-20 md:px-12 md:py-14 md:pb-24 md:max-w-[55%]">
                  <h1
                    className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white mb-5 leading-[1.05]"
                    style={{
                      letterSpacing: '-0.025em',
                    }}
                  >
                    Your Problem
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
                    Maravedis research confirms vendor lock-in is blocking your growth—multi-vendor support is what you want.
                  </p>

                  {/* CTA Button - links to demo/booking */}
                  <Button
                    variant="primary"
                    size="lg"
                    href="/demo"
                  >
                    Claim Your Trial Kit
                  </Button>
                </div>
              </div>
            </div>

            {/* ============================================
                FLOATING PARTNER LOGOS BAR - 50/50 overlap on card bottom
                ============================================ */}
            <div className="relative -mt-14 mx-auto max-w-[700px]">
              {/* Gradient Border Wrapper */}
              <div
                className="rounded-2xl p-[2px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
                  boxShadow: '0 0 30px rgba(169, 50, 149, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div
                  className="rounded-2xl px-6 pt-3 pb-5"
                  style={{
                    background: 'rgba(13, 12, 16, 0.85)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Label inside the bar - Two-line structure */}
                  <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-1">
                    Your Solution
                  </h2>
                  <p className="text-center text-[10px] font-medium tracking-[0.2em] uppercase text-[#f0a559] mb-3">
                    The Open Infrastructure Alliance
                  </p>
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

        {/* ============================================
            SEE IT IN ACTION - 2-Min Demo Video
            (Existing HowItWorks component)
            ============================================ */}
        <HowItWorks />

        {/* ============================================
            SOUND FAMILIAR SECTION
            Frustration → Solution pairs (objection handling)
            ============================================ */}
        <section id="sound-familiar" className="relative py-12 overflow-hidden">
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

            {/* Desktop: Grid Layout */}
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
            THEY SAID IT COULDN'T BE DONE - Jamaica Proof
            (Existing ProofPricing component)
            ============================================ */}
        <ProofPricing />

        {/* ============================================
            THE 30-DAY JOURNEY - From Skeptic to Revenue
            5-step carousel showing the Alliance execution
            ============================================ */}
        <section id="journey" className="relative pt-16 pb-8 overflow-hidden">
          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
            {/* Eyebrow */}
            <p className="text-[#f0a559] text-sm md:text-base font-medium mb-4">
              OpenLAN is enterprise ready. Here&apos;s how you prove it.
            </p>
            <h2
              className="font-display text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white mb-4 leading-[1.05]"
              style={{
                letterSpacing: '-0.025em',
              }}
            >
              From Skeptic to Revenue in{' '}
              <span className="relative inline-block">
                30 Days
                {/* Curved Underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-4"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="journeySwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,14 Q100,2 200,14"
                    fill="none"
                    stroke="url(#journeySwoosh)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-[#8B8B9A] text-base md:text-lg font-light max-w-2xl mx-auto">
              Your trial kit ships with everything: two APs, a switch, controller licenses, a branded wibipOS instance. Zero touch provisioning.
              <br />
              <span className="text-white font-medium">Ready for real deployments.</span>
            </p>

            {/* Comparison Link */}
            <button
              onClick={() => setShowComparisonModal(true)}
              className="mt-6 text-[#f0a559] hover:text-[#f0a559]/80 text-sm font-medium inline-flex items-center gap-2 transition-colors"
            >
              See the full Legacy versus OIA comparison
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Journey Carousel */}
        <section className="relative py-8 overflow-hidden">
          <JourneyCarousel />
        </section>

        {/* ============================================
            YOUR GUIDES ON THIS JOURNEY
            The WHO reveal - faces and personal commitments
            ============================================ */}
        <section className="relative py-16 overflow-hidden">
          <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2
                className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.1] inline-block"
                style={{ letterSpacing: '-0.025em' }}
              >
                Your Guides on This{" "}
                <span className="relative inline-block italic">
                  Journey
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4"
                    viewBox="0 0 150 16"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="guidesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f0a559" />
                        <stop offset="100%" stopColor="#a93295" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,14 Q75,2 150,14"
                      fill="none"
                      stroke="url(#guidesGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-[#8B8B9A] text-lg mt-4 max-w-xl mx-auto">
                Not a support queue. Not a ticket system.
                <br />
                <span className="text-white/80 font-medium">Three executives who pick up the phone.</span>
              </p>
            </div>

            {/* 3 Leader Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {allianceLeaders.map((leader, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  {/* Headshot with gradient border */}
                  <div
                    className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden p-[3px]"
                    style={{
                      background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(169, 50, 149, 0.6) 100%)',
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
                  <h4 className="text-white font-semibold text-base mb-1">
                    {leader.name}
                  </h4>
                  <p className="text-white/50 text-sm mb-4">
                    {leader.title}
                  </p>
                  {/* Quote */}
                  <p className="text-[#f0a559] text-base italic leading-relaxed">
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================
            THE REAL MATH - Engineers vs Partnership
            ============================================ */}
        <section className="relative py-16 overflow-hidden">
          <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2
                className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.1] inline-block"
                style={{ letterSpacing: '-0.025em' }}
              >
                The{" "}
                <span className="relative inline-block italic">
                  Simple Math
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4"
                    viewBox="0 0 180 16"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="mathGradientHome" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f0a559" />
                        <stop offset="100%" stopColor="#a93295" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,14 Q90,2 180,14"
                      fill="none"
                      stroke="url(#mathGradientHome)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-[#8B8B9A] text-lg mt-4 max-w-2xl mx-auto">
                The average MSP has 2-6 engineers on staff. Replace or augment even one—and unlock deals you&apos;d otherwise walk away from.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">

              {/* Build It Yourself Column */}
              <div
                className="relative rounded-2xl p-[1px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 100, 100, 0.3) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 100, 100, 0.2) 100%)',
                }}
              >
                <div
                  className="rounded-2xl p-8 h-full"
                  style={{
                    background: 'rgba(20, 18, 25, 0.9)',
                  }}
                >
                  <div className="text-red-400/80 text-xs font-bold uppercase tracking-wider mb-4">
                    The Alternative
                  </div>
                  <div className="text-white text-3xl md:text-4xl font-bold mb-2">
                    $240,000<span className="text-white/50 text-lg font-normal">+/year</span>
                  </div>
                  <div className="text-white/60 text-sm mb-6">
                    For 2 SDK engineers (if you can find them)
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/50 text-sm">
                      <span className="text-red-400/60 mt-0.5">✗</span>
                      2+ years to build what we&apos;ve already built
                    </li>
                    <li className="flex items-start gap-3 text-white/50 text-sm">
                      <span className="text-red-400/60 mt-0.5">✗</span>
                      37% of MSPs can&apos;t find the talent to grow
                    </li>
                    <li className="flex items-start gap-3 text-white/50 text-sm">
                      <span className="text-red-400/60 mt-0.5">✗</span>
                      Still no multi-vendor expertise
                    </li>
                    <li className="flex items-start gap-3 text-white/50 text-sm">
                      <span className="text-red-400/60 mt-0.5">✗</span>
                      You carry all the risk
                    </li>
                  </ul>
                </div>
              </div>

              {/* Partnership Column */}
              <div
                className="relative rounded-2xl p-[2px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
                  boxShadow: '0 0 40px rgba(240, 165, 89, 0.15), 0 0 80px rgba(169, 50, 149, 0.1)',
                }}
              >
                <div
                  className="rounded-2xl p-8 h-full"
                  style={{
                    background: 'rgba(20, 18, 25, 0.9)',
                  }}
                >
                  <div className="text-[#f0a559] text-xs font-bold uppercase tracking-wider mb-4">
                    The Partnership
                  </div>
                  <div className="text-white text-3xl md:text-4xl font-bold mb-1">
                    Starting at $10K<span className="text-white/50 text-lg font-normal">/month</span>
                  </div>
                  <div className="text-white/40 text-xs mb-4">
                    OS & engineering only. Hardware/licenses unchanged.
                  </div>
                  <div className="text-white/60 text-sm mb-6">
                    Your engineering capacity scales with your ambition
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="text-[#f0a559] mt-0.5">✓</span>
                      We grow your bench as you grow
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="text-[#f0a559] mt-0.5">✓</span>
                      No hiring, no outsourcing, no loss of control
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="text-[#f0a559] mt-0.5">✓</span>
                      Built to your spec, your brand, your stack
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="text-[#f0a559] mt-0.5">✓</span>
                      25 engineers, multi-vendor expertise included
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Julian Quote - Social Proof */}
            <div
              className="relative rounded-2xl p-8 md:p-10"
              style={{
                background: 'rgba(240, 165, 89, 0.03)',
                border: '1px solid rgba(240, 165, 89, 0.15)',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 text-[#f0a559] text-5xl leading-none">&ldquo;</div>
                <div>
                  <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
                    $120,000 a year for access to 25 engineers who&apos;ve already built the integrations we&apos;d need. Versus $240,000 minimum for engineers we&apos;d have to recruit, relocate, and train—who still wouldn&apos;t have the multi-vendor expertise.{" "}
                    <span className="text-[#f0a559] font-semibold">The risk/reward flipped.</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-white font-semibold">Julian Edwards</div>
                      <div className="text-white/50 text-sm">Head of Operations, MsTECH</div>
                    </div>
                    <Link
                      href="/case-studies/jamaica"
                      className="text-[#f0a559] text-sm hover:underline ml-auto"
                    >
                      Read the full story →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle note */}
            <p className="text-center text-white/40 text-sm mt-8">
              Investment scales with your engineering needs. Most MSPs start at $10K/month.
            </p>

          </div>
        </section>

        {/* ============================================
            FINAL CTA - Order Today Timeline
            ============================================ */}
        <section className="relative py-20 overflow-hidden">
          <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">

            <h2
              className="font-display text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-4"
              style={{ letterSpacing: '-0.025em' }}
            >
              <span className="text-[#f0a559]">Order Today.</span> Trial Next Week.
              <br />
              Deploy This Month.{" "}
              <span className="relative inline-block italic">
                Profit This Quarter.
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 280 12"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="finalCtaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,10 Q140,2 280,10"
                    fill="none"
                    stroke="url(#finalCtaGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* CTA Button with gradient border */}
            <Link
              href="/demo"
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
                Claim Your Trial Kit
              </span>
            </Link>

            <p className="text-[#8B8B9A] text-sm mt-6">
              Your Alliance CSM on standby.
            </p>

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

      {/* ============================================
          COMPARISON MODAL - Same Enterprise Checklist, Different Economics
          ============================================ */}
      {showComparisonModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowComparisonModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl p-[2px]"
            style={{
              background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: 'rgba(20, 18, 25, 0.98)',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowComparisonModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Same Enterprise Checklist.{' '}
                  <span className="text-[#f0a559]">Different Economics.</span>
                </h3>
                <p className="text-white/50 text-sm">
                  You&apos;re not choosing between &ldquo;enterprise&rdquo; and &ldquo;experiment.&rdquo;
                </p>
              </div>

              {/* Comparison Table - Desktop */}
              <div className="hidden md:block overflow-hidden rounded-xl" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                {/* Header */}
                <div
                  className="grid grid-cols-3 gap-0"
                  style={{ background: 'rgba(30, 27, 38, 0.8)' }}
                >
                  <div className="p-3 text-white/50 text-sm font-medium"></div>
                  <div className="p-3 text-center text-red-400/80 text-xs font-bold uppercase tracking-wider border-l border-white/10">
                    Legacy Vendors
                  </div>
                  <div className="p-3 text-center text-[#f0a559] text-xs font-bold uppercase tracking-wider border-l border-white/10">
                    The OIA Stack
                  </div>
                </div>

                {/* Rows */}
                {comparisonRows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 gap-0"
                    style={{
                      background: i % 2 === 0 ? 'rgba(20, 18, 25, 0.6)' : 'rgba(30, 27, 38, 0.4)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div className="p-3 text-white/80 text-sm font-medium">
                      {row.feature}
                    </div>
                    <div className="p-3 text-center border-l border-white/10">
                      {row.legacy === true ? (
                        <span className="text-white/40">✓</span>
                      ) : (
                        <span className="text-red-400/60 text-xs">{row.legacy}</span>
                      )}
                    </div>
                    <div className="p-3 text-center border-l border-white/10">
                      {row.oia === true ? (
                        <span className="text-[#f0a559]">✓</span>
                      ) : (
                        <span className="text-[#f0a559] text-xs font-medium">{row.oia}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Cards - Mobile */}
              <div className="md:hidden space-y-3">
                {comparisonRows.filter(row => row.legacy !== true).map((row, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <div className="p-3" style={{ background: 'rgba(30, 27, 38, 0.6)' }}>
                      <p className="text-white font-medium text-sm">{row.feature}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-0">
                      <div className="p-3" style={{ background: 'rgba(255, 100, 100, 0.05)' }}>
                        <p className="text-red-400/60 text-xs uppercase tracking-wider mb-1">Legacy</p>
                        <p className="text-white/50 text-xs">{row.legacy}</p>
                      </div>
                      <div className="p-3 border-l border-white/10" style={{ background: 'rgba(240, 165, 89, 0.05)' }}>
                        <p className="text-[#f0a559] text-xs uppercase tracking-wider mb-1">OIA Stack</p>
                        <p className="text-white/80 text-xs font-medium">{row.oia}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowComparisonModal(false)}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

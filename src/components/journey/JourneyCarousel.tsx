"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const journeyPhases = [
  {
    id: "commit",
    phase: "Commit",
    days: "Days 0-3",
    phaseNumber: 1,
    tagline: "I'm in—show me this was the right decision",
    descriptionParts: [
      { text: "Order confirmation triggers your welcome sequence. " },
      { text: "Your trial kit ships within 24 hours with full tracking.", highlight: true },
      { text: " We schedule your kickoff call and send a pre-work questionnaire so we can tailor onboarding to your specific goals." },
    ],
    milestones: [
      "Order confirmation & welcome email",
      "Trial kit ships with tracking",
      "Personalized welcome video from your CSM",
      "Kickoff call scheduled for Day 5",
    ],
    successMetric: "Kickoff call attendance >95%",
    image: "/images/journey/step1Commit.png",
  },
  {
    id: "configure",
    phase: "Configure",
    days: "Days 4-10",
    phaseNumber: 2,
    tagline: "It works—I can see my network in wibipOS",
    descriptionParts: [
      { text: "Your kit arrives and we walk you through setup on the kickoff call. " },
      { text: "Within 72 hours, your first AP is online and visible in the wibipOS dashboard.", highlight: true },
      { text: " You'll validate the technology works before betting a customer relationship on it." },
    ],
    milestones: [
      "Kit arrives with unboxing guide",
      "30-min kickoff call with live configuration",
      "First AP online in wibipOS",
      "Technical validation call on Day 10",
    ],
    successMetric: "First AP online within 72 hours",
    image: "/images/journey/Step2Configure.png",
  },
  {
    id: "connect",
    phase: "Connect",
    days: "Days 11-20",
    phaseNumber: 3,
    tagline: "It's live—real users on a real network",
    descriptionParts: [
      { text: "Now it gets real. " },
      { text: "We help you plan and execute your first production deployment at a customer site.", highlight: true },
      { text: " Real users, real traffic, real stakes. Your CSM is on standby during go-live to ensure success." },
    ],
    milestones: [
      "Deployment planning call (Day 11)",
      "Site preparation with async support",
      "Go-live with CSM on standby",
      "Post-deployment review",
    ],
    successMetric: "Go-live success rate >90%",
    image: "/images/journey/Step3Connect.png",
  },
  {
    id: "commercialize",
    phase: "Commercialize",
    days: "Days 21-30",
    phaseNumber: 4,
    tagline: "I got paid—this is a real business",
    descriptionParts: [
      { text: "The moment of truth: ", highlight: true },
      { text: "generating revenue.", highlight: true },
      { text: " We help you integrate billing, set up your first invoice, and confirm payment received. This is the 'first value' milestone—when you see ROI is real." },
    ],
    milestones: [
      "Billing integration call (Day 21)",
      "Invoice configuration setup",
      "First invoice sent to customer",
      "Day 30 Business Review with ROI summary",
    ],
    successMetric: "Days from go-live to first revenue <14",
    image: "/images/journey/Step4Commercialize.png",
  },
  {
    id: "champion",
    phase: "Champion",
    days: "Day 31+",
    phaseNumber: 5,
    tagline: "I'm sold—let me tell others",
    descriptionParts: [
      { text: "You took a calculated chance on OpenLAN and won.", highlight: true },
      { text: " Now we convert your success into expansion, case studies, and advocacy. Quarterly business reviews keep the partnership growing." },
    ],
    milestones: [
      "Expansion proposal presented",
      "NPS survey completed",
      "Case study interview (optional)",
      "Quarterly Business Reviews ongoing",
    ],
    successMetric: "Trial-to-expansion conversion >60%",
    image: "/images/journey/Step5Champion.png",
  },
];

// Card component for the carousel
function CarouselCard({
  phase,
  position,
  onClick,
  onLightbox,
}: {
  phase: typeof journeyPhases[0];
  position: number; // -2, -1, 0, 1, 2 (0 is center)
  onClick: () => void;
  onLightbox: () => void;
}) {
  const isCenter = position === 0;

  // Calculate transforms based on position
  // On mobile, only show centered card (no 3D effect)
  const getTransform = () => {
    if (position === 0) return 'translateX(0) scale(1) rotateY(0deg)';
    if (position === -1) return 'translateX(-75%) scale(0.85) rotateY(25deg)';
    if (position === 1) return 'translateX(75%) scale(0.85) rotateY(-25deg)';
    if (position === -2) return 'translateX(-130%) scale(0.7) rotateY(35deg)';
    if (position === 2) return 'translateX(130%) scale(0.7) rotateY(-35deg)';
    return 'translateX(0) scale(0) rotateY(0deg)';
  };

  const getZIndex = () => {
    if (position === 0) return 50;
    if (Math.abs(position) === 1) return 40;
    return 30;
  };

  const getOpacity = () => {
    if (position === 0) return 1;
    if (Math.abs(position) === 1) return 0.7;
    if (Math.abs(position) === 2) return 0.4;
    return 0;
  };

  // On mobile, only render the center card as a normal flow element
  // On desktop, use absolute positioning with 3D transforms
  if (!isCenter) {
    // Non-center cards: only visible on desktop with 3D effect
    return (
      <div
        className="hidden md:block absolute left-1/2 top-0 w-full max-w-[1020px] cursor-pointer"
        style={{
          transform: `translateX(-50%) ${getTransform()}`,
          zIndex: getZIndex(),
          opacity: getOpacity(),
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
        }}
        onClick={onClick}
      >
        <CardContent phase={phase} isCenter={false} onLightbox={onLightbox} />
      </div>
    );
  }

  // Center card: relative on mobile, absolute on desktop
  return (
    <>
      {/* Mobile: normal flow */}
      <div className="md:hidden w-full max-w-[1020px] mx-auto">
        <CardContent phase={phase} isCenter={true} onLightbox={onLightbox} />
      </div>
      {/* Desktop: absolute positioned */}
      <div
        className="hidden md:block absolute left-1/2 top-0 w-full max-w-[1020px]"
        style={{
          transform: 'translateX(-50%) translateX(0) scale(1) rotateY(0deg)',
          zIndex: 50,
          opacity: 1,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <CardContent phase={phase} isCenter={true} onLightbox={onLightbox} />
      </div>
    </>
  );
}

// Extracted card content to avoid duplication
function CardContent({
  phase,
  isCenter,
  onLightbox,
}: {
  phase: typeof journeyPhases[0];
  isCenter: boolean;
  onLightbox: () => void;
}) {
  return (
    <>
      {/* Gradient Border */}
      <div
        className="rounded-[28px] p-[2px]"
        style={{
          background: isCenter
            ? 'linear-gradient(145deg, rgba(240, 165, 89, 0.6) 0%, rgba(240, 165, 89, 0.2) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.3) 75%, rgba(169, 50, 149, 0.5) 100%)'
            : 'linear-gradient(145deg, rgba(240, 165, 89, 0.3) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(169, 50, 149, 0.2) 100%)',
        }}
      >
        {/* Glass Card Inner */}
        <div
          className="rounded-[26px] overflow-hidden"
          style={{
            background: 'rgba(20, 18, 25, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-4 p-5 md:p-7">
            {/* Left Content */}
            <div className="flex flex-col">
              {/* Phase Badge */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1.5 text-xs font-semibold rounded-full"
                  style={{
                    background: 'rgba(240, 165, 89, 0.15)',
                    color: '#f0a559',
                    border: '1px solid rgba(240, 165, 89, 0.3)',
                  }}
                >
                  {phase.days}
                </span>
                <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                  Phase {phase.phaseNumber} of 5
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display text-[1.75rem] md:text-[2rem] font-bold text-white mb-2 leading-[1.1]"
                style={{ letterSpacing: '-0.025em' }}
              >
                {phase.phase}
              </h3>

              {/* Tagline */}
              <p className="text-white/60 text-sm md:text-base italic mb-3">
                &ldquo;{phase.tagline}&rdquo;
              </p>

              {/* Description */}
              <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-4">
                {phase.descriptionParts.map((part, i) => (
                  part.highlight ? (
                    <span key={i} className="text-[#f0a559] font-medium">{part.text}</span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                ))}
              </p>

              {/* Milestones */}
              <div className="mb-4">
                <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-2">
                  Key Milestones
                </h4>
                <div className="space-y-1.5">
                  {phase.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-[#f0a559] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70 text-xs">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metric */}
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg mt-auto"
                style={{
                  background: 'rgba(240, 165, 89, 0.08)',
                  border: '1px solid rgba(240, 165, 89, 0.2)',
                }}
              >
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center"
                  style={{ background: 'rgba(240, 165, 89, 0.15)' }}
                >
                  <svg className="w-4 h-4 text-[#f0a559]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[9px] text-white/40 uppercase tracking-wider font-medium">
                    Success Metric
                  </span>
                  <span className="text-xs font-semibold text-[#f0a559]">
                    {phase.successMetric}
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div
              className="relative rounded-xl overflow-hidden group h-full min-h-[400px] md:min-h-[500px]"
              onClick={isCenter ? (e) => { e.stopPropagation(); onLightbox(); } : undefined}
              style={{
                background: 'rgba(30, 27, 38, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: isCenter ? 'pointer' : 'default',
              }}
            >
              {/* Phase indicator on image */}
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white/80">
                <span className="text-[#f0a559]">0{phase.phaseNumber}</span>
                <span className="mx-1 text-white/30">/</span>
                <span>05</span>
              </div>

              <div className="absolute inset-0">
                <Image
                  src={phase.image}
                  alt={`${phase.phase} phase infographic`}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Expand hint - only on center card */}
              {isCenter && (
                <div className="absolute bottom-3 right-3 p-1.5 rounded-md bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function JourneyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? journeyPhases.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === journeyPhases.length - 1 ? 0 : prev + 1));
  }, []);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Get position relative to active index (-2, -1, 0, 1, 2)
  const getPosition = (index: number) => {
    let diff = index - activeIndex;
    // Handle wrap-around
    if (diff > 2) diff -= journeyPhases.length;
    if (diff < -2) diff += journeyPhases.length;
    return diff;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxOpen) setLightboxOpen(false);
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, goToPrev, goToNext]);

  const activePhase = journeyPhases[activeIndex];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-[90vw] h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activePhase.image}
              alt={`${activePhase.phase} phase`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* 3D Carousel with Navigation inside */}
      <div
        className="relative flex flex-col overflow-hidden md:overflow-visible"
        style={{ perspective: '1500px' }}
      >
        {/* Cards container - auto height on mobile, fixed on desktop */}
        <div className="relative min-h-0 md:h-[580px]">
          {journeyPhases.map((phase, index) => {
            const position = getPosition(index);
            // Only render cards within visible range
            if (Math.abs(position) > 2) return null;

            return (
              <CarouselCard
                key={phase.id}
                phase={phase}
                position={position}
                onClick={() => goToIndex(index)}
                onLightbox={() => setLightboxOpen(true)}
              />
            );
          })}
        </div>

        {/* Navigation Controls - inside same container */}
        <div className="flex items-center justify-center gap-6 mt-4">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            aria-label="Previous phase"
          >
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {journeyPhases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-8"
                    : "w-2 hover:bg-white/30"
                }`}
                style={{
                  background: activeIndex === index
                    ? 'linear-gradient(90deg, #f0a559, #a93295)'
                    : 'rgba(255, 255, 255, 0.2)',
                }}
                aria-label={`Go to phase ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            aria-label="Next phase"
          >
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

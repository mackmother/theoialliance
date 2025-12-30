"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const journeyPhases = [
  {
    id: "commit",
    phase: "Commit",
    days: "Days 0-3",
    tagline: "I'm in—show me this was the right decision",
    description:
      "Order confirmation triggers your welcome sequence. Your trial kit ships within 24 hours with full tracking. We schedule your kickoff call and send a pre-work questionnaire so we can tailor onboarding to your specific goals.",
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
    tagline: "It works—I can see my network in wibipOS",
    description:
      "Your kit arrives and we walk you through setup on the kickoff call. Within 72 hours, your first AP is online and visible in the wibipOS dashboard. You'll validate the technology works before betting a customer relationship on it.",
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
    tagline: "It's live—real users on a real network",
    description:
      "Now it gets real. We help you plan and execute your first production deployment at a customer site. Real users, real traffic, real stakes. Your CSM is on standby during go-live to ensure success.",
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
    tagline: "I got paid—this is a real business",
    description:
      "The moment of truth: generating revenue. We help you integrate billing, set up your first invoice, and confirm payment received. This is the 'first value' milestone—when you see ROI is real.",
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
    tagline: "I'm sold—let me tell others",
    description:
      "You took a risk on OpenWiFi and won. Now we convert your success into expansion, case studies, and advocacy. Quarterly business reviews keep the partnership growing.",
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

export function JourneyTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activePhase = journeyPhases[activeTab];

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox]);

  return (
    <div className="w-full">
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-dark-800/80 border border-white/10 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Phase info badge */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-dark-800/80 border border-white/10 text-sm font-medium text-dark-100">
            <span className="text-brand-400">Phase {activeTab + 1}:</span>
            <span className="ml-2">{activePhase.phase}</span>
          </div>

          {/* Image container */}
          <div
            className="relative w-[90vw] h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhase.image}
              alt={`${activePhase.phase} phase - ${activePhase.tagline}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab((prev) => (prev === 0 ? journeyPhases.length - 1 : prev - 1));
            }}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-dark-800/80 border border-white/10 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors"
            aria-label="Previous phase"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab((prev) => (prev === journeyPhases.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-dark-800/80 border border-white/10 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors"
            aria-label="Next phase"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Phase dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {journeyPhases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeTab === index
                    ? "bg-brand-400 w-6"
                    : "bg-dark-600 hover:bg-dark-500"
                }`}
                aria-label={`View ${phase.phase} phase`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide bg-dark-900/50 rounded-xl p-1.5 border border-white/[0.04]">
          {journeyPhases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActiveTab(index)}
              className={`relative flex-1 min-w-[120px] px-4 md:px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg whitespace-nowrap
                ${activeTab === index
                  ? "text-dark-900 bg-brand-400 shadow-lg shadow-brand-400/25"
                  : "text-dark-400 hover:text-dark-200 hover:bg-dark-800/50"
                }`}
            >
              <span className="hidden sm:inline mr-1.5 text-xs opacity-70">0{index + 1}</span>
              {phase.phase}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-10 md:mt-12">
        <div key={activeTab} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start animate-fade-in">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-500/15 text-brand-400 border border-brand-500/25">
                {activePhase.days}
              </span>
              <span className="text-xs text-dark-500 uppercase tracking-wider font-medium">
                Phase {activeTab + 1} of 5
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-50 mb-4 tracking-tight">
              {activePhase.phase}
            </h3>

            <p className="text-lg md:text-xl text-dark-300 italic mb-6 leading-relaxed">
              &ldquo;{activePhase.tagline}&rdquo;
            </p>

            <p className="text-dark-400 leading-relaxed mb-8 text-base">
              {activePhase.description}
            </p>

            {/* Milestones */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-semibold text-dark-500 uppercase tracking-wider">Key Milestones</h4>
              {activePhase.milestones.map((milestone, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-brand-400/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-400/25 transition-colors">
                    <svg className="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-300 text-sm leading-relaxed">{milestone}</span>
                </div>
              ))}
            </div>

            {/* Success Metric */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-500/10 to-brand-400/5 border border-brand-500/20">
              <div className="w-8 h-8 rounded-lg bg-brand-400/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <span className="block text-[10px] text-dark-500 uppercase tracking-wider font-medium">Success Metric</span>
                <span className="text-sm font-semibold text-brand-400">{activePhase.successMetric}</span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative group w-full max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-brand-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image container */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-dark-900/80 shadow-2xl shadow-black/50 cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                {/* Top bar decoration */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent z-10" />

                <div className="relative aspect-square">
                  <Image
                    src={activePhase.image}
                    alt={`${activePhase.phase} phase - ${activePhase.tagline}`}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />

                  {/* Overlay gradients for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Phase indicator badge on image */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-dark-950/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-dark-100 z-10">
                  <span className="text-brand-400">0{activeTab + 1}</span>
                  <span className="mx-1.5 text-dark-600">/</span>
                  <span>05</span>
                </div>

                {/* Expand icon */}
                <button
                  className="absolute top-4 right-4 p-2 rounded-lg bg-dark-950/80 backdrop-blur-sm border border-white/10 text-dark-400 hover:text-white hover:bg-dark-800 transition-all z-10 opacity-0 group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                  aria-label="Expand image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>

              {/* Click hint */}
              <p className="text-center text-xs text-dark-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to expand
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Progress Bar (Mobile) */}
      <div className="flex justify-center gap-2 mt-10 lg:hidden">
        {journeyPhases.map((phase, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            aria-label={`Go to ${phase.phase} phase`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeTab === index
                ? "bg-brand-400 w-8"
                : "bg-dark-700 hover:bg-dark-600 w-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

const concerns = [
  {
    category: "Pricing & Investment",
    items: [
      {
        question: "Why don't you publish prices?",
        answer:
          "Because we price partnerships, not licenses. Your investment depends on your scale, integration complexity, and growth trajectory. We'll scope your specific needs and provide a clear proposal—typically within 48 hours of our first conversation.",
      },
      {
        question: "How does the ROI math work?",
        answer:
          "A 500-location deal generates $250K+ in annual revenue. If your partnership fee delivers access to deals like that, the math is simple. We structure partnerships so we only win when you win—our incentives are aligned.",
      },
      {
        question: "What's the 30-day Trial-to-Profit?",
        answer:
          "Full platform access. Real hardware integration. Production-ready deployment. You'll know within 30 days whether the OIA helps you win. No credit card. No contracts. Ruckus MSPs: 15-minute setup.",
      },
      {
        question: "Is wibipOS just another SaaS with per-AP pricing?",
        answer:
          "We offer partnership models, not just subscriptions. Pricing depends on your scale, integration needs, and business model. Some partners prefer revenue share, others prefer flat fees. We'll design a structure that aligns our success with yours.",
      },
    ],
  },
  {
    category: "Technical & Integration",
    items: [
      {
        question: "What does 'LIVE SDK Engineers' actually mean?",
        answer:
          "Our engineers become an extension of your team. They integrate your specific tech stack, build custom workflows, and solve the edge cases that generic platforms can't handle. Think of it as having a senior dev team on retainer—without the hiring, management, or overhead.",
      },
      {
        question: "What if you don't support our hardware vendor?",
        answer:
          "We've integrated 12+ vendors already including Ruckus, Edgecore, Fortinet, Cisco Meraki, Aruba, and NetExperience. If yours isn't on the list, our LIVE SDK team can add support in 2-4 weeks. We'll scope the integration before you commit—no surprises.",
      },
      {
        question: "We already have vendor portals. Why add another tool?",
        answer:
          "You have portals. But are you winning multi-vendor RFPs? Most MSPs lose 2-3 deals per quarter because they can't support mixed hardware. One won deal typically covers your entire partnership investment.",
      },
      {
        question: "Does wibipOS support Passpoint and advanced Wi-Fi features?",
        answer:
          "Yes. We support Passpoint (Hotspot 2.0), OpenRoaming, captive portals, RADIUS integration, and advanced RF management. Feature availability depends on underlying hardware capabilities.",
      },
      {
        question: "What limitations does wibipOS have?",
        answer:
          "We're only as capable as the hardware allows. Some legacy devices have limited API support. We'll tell you upfront during sandbox evaluation what's possible with your specific gear—no surprises after you commit.",
      },
    ],
  },
  {
    category: "Build vs. Partner",
    items: [
      {
        question: "How is this different from just hiring developers?",
        answer:
          "A senior network engineer costs $150K+/year plus benefits and takes 6 months to ramp. Our team has 8 years of production experience across 100+ integrations. You get day-one expertise on complex problems we've solved before—at a fraction of the cost.",
      },
      {
        question: "Why not build our own platform?",
        answer:
          "You could. Budget 18-24 months and $500K-$2M in engineering salaries. You'll still be single-vendor when you ship. Meanwhile, every RFP you lose to multi-vendor requirements goes to a competitor. The opportunity cost is the real killer.",
      },
      {
        question: "What about vendor lock-in with OIA?",
        answer:
          "We're controller-agnostic—that's the whole point. Ingest legacy Ruckus/Cisco via API. Add Edgecore. Same UI. Your data stays yours. Your hardware remains yours. We orchestrate; we don't trap. If you ever leave, your hardware still works with native vendor tools.",
      },
      {
        question: "How do I stay unique if modules are shared?",
        answer:
          "The platform is shared. Your differentiation comes from your service delivery, customer relationships, vertical expertise, and white-label branding. We provide the infrastructure so you can focus on what actually wins deals—not rebuilding Wi-Fi management from scratch.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "How long until we're production-ready?",
        answer:
          "30 days from trial kit to your first customer invoice. That's not marketing speak—MsTECH Jamaica went from zero managed WiFi experience to 1,000 schools in production.",
      },
      {
        question: "What do we need to get started?",
        answer:
          "A conversation. Tell us your current stack, your pain points, and where you want to go. We'll scope a partnership that makes sense—or tell you honestly if we're not the right fit.",
      },
      {
        question: "Who do we talk to?",
        answer:
          "You'll speak directly with our partnership team—technical people who understand MSP operations, not salespeople reading scripts. Schedule a call or start the 30-day journey and we'll reach out.",
      },
      {
        question: "Where has wibipOS been deployed?",
        answer:
          "10,000+ locations across 6 Tier 1 telcos (AT&T, Verizon, Frontier, Cox, Optimum, Mediacom), national education networks (Jamaica's 1,000-school initiative), and dozens of regional MSPs. We've logged 350,000+ development hours over 10 years.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? 'rgba(240, 165, 89, 0.08)' : 'rgba(30, 27, 38, 0.4)',
        border: isOpen ? '1px solid rgba(240, 165, 89, 0.2)' : '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
      >
        <span className={`font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80'}`}>
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)'
              : 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-[#8B8B9A] text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-12">
          <div className="relative z-10 w-full max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <h1
              className="font-display text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold text-white mb-5 leading-[1.05]"
              style={{ letterSpacing: '-0.025em' }}
            >
              Common{" "}
              <span className="relative inline-block">
                Concerns
                {/* Curved Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="concernsSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,14 Q100,2 200,14"
                    fill="none"
                    stroke="url(#concernsSwoosh)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-[#8B8B9A] text-lg md:text-xl max-w-[550px] mx-auto font-light">
              Straight answers to the questions MSP CEOs ask before partnering.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="relative py-8 pb-16 overflow-hidden">
          <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="space-y-12">
              {concerns.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <h2
                      className="text-[#f0a559] font-display font-semibold text-lg whitespace-nowrap"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {category.category}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#f0a559]/30 to-transparent" />
                  </div>

                  {/* Questions */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => {
                      const key = `${categoryIndex}-${itemIndex}`;
                      return (
                        <AccordionItem
                          key={key}
                          question={item.question}
                          answer={item.answer}
                          isOpen={openItems[key] || false}
                          onClick={() => toggleItem(key)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6">
            {/* Glass Card */}
            <div
              className="relative rounded-[28px] p-[2px]"
              style={{
                background: 'linear-gradient(145deg, rgba(240, 165, 89, 0.5) 0%, rgba(240, 165, 89, 0.15) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(169, 50, 149, 0.2) 75%, rgba(169, 50, 149, 0.5) 100%)',
              }}
            >
              <div
                className="relative rounded-[26px] overflow-hidden px-8 py-12 md:px-12 md:py-14 text-center"
                style={{
                  background: 'rgba(20, 18, 25, 0.6)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                {/* Ambient glow */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px]"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(169, 50, 149, 0.15) 0%, transparent 60%)',
                    filter: 'blur(50px)',
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="font-display text-[1.75rem] md:text-[2.25rem] font-bold text-white mb-4 leading-[1.1]"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    Still have questions?
                  </h3>
                  <p className="text-[#8B8B9A] text-base md:text-lg max-w-md mx-auto mb-8">
                    Let&apos;s talk. No pitch deck, no scripts—just a conversation about whether we&apos;re a fit.
                  </p>

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
                        Start the 30-Day Journey
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

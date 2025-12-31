import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

export const metadata = {
  title: "Partnership | Open Infrastructure Alliance — We Built It, So You Don't Have To",
  description:
    "8 years of R&D. 100+ telco integrations. Elite engineering on retainer. The OIA gives you the ability to say YES to every deal.",
};

const weBuiltIt = [
  {
    stat: "8 Years",
    label: "of R&D",
    description: "Battle-tested across 10+ US telcos",
  },
  {
    stat: "100+",
    label: "Integrations",
    description: "Hardware, billing, SSO, and more",
  },
  {
    stat: "90 Days",
    label: "Not 2 Years",
    description: "To multi-vendor production",
  },
];

const differentiators = [
  {
    title: "LIVE SDK Engineers",
    subtitle: "Elite engineering on retainer—not headcount",
    description:
      "What if you had the same engineering team that powered Ruckus's telco entry—without the $150K+ salaries, benefits, and 6-month ramp time? Our engineers integrate your tech stack for you. Day one expertise on problems we've solved 100 times before.",
    icon: "engineers",
  },
  {
    title: "BYOTS",
    subtitle: "Bring Your Own Tech Stack",
    description:
      "What if the platform adapted to you, not the other way around? Your billing system. Your SSO. Your existing tools. We orchestrate—we don't replace. No rip-and-replace. No starting over.",
    icon: "stack",
  },
  {
    title: "Dynamic Roadmap",
    subtitle: "Your needs drive our development",
    description:
      "What if your unique requirements became platform capabilities—and you were first to use them? The flywheel effect: every partner integration strengthens the ecosystem. Your edge cases become everyone's solved problems.",
    icon: "roadmap",
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
  },
];

const costOfBuilding = [
  { label: "18-24 months before you can even demo", cost: "Time you don't have" },
  { label: "$500K-$2M in engineering salaries", cost: "Capital at risk" },
  { label: "2-3 engineers who could be billing clients", cost: "Opportunity cost" },
  { label: "Still single-vendor when you finally ship", cost: "All that work for nothing" },
  { label: "Every RFP lost while you're building", cost: "Competitors eating your lunch" },
];

const faqs = [
  {
    question: "Why don't you publish prices?",
    answer:
      "Because we price partnerships, not licenses. Your investment depends on your scale, integration complexity, and growth trajectory. We'll scope your specific needs and provide a clear proposal—typically within 48 hours of our first conversation.",
  },
  {
    question: "What does 'LIVE SDK Engineers' actually mean?",
    answer:
      "Our engineers become an extension of your team. They integrate your specific tech stack, build custom workflows, and solve the edge cases that generic platforms can't handle. Think of it as having a senior dev team on retainer—without the hiring, management, or overhead.",
  },
  {
    question: "How is this different from just hiring developers?",
    answer:
      "A senior network engineer costs $150K+/year plus benefits and takes 6 months to ramp. Our team has 8 years of production experience across 100+ integrations. You get day-one expertise on complex problems we've solved before—at a fraction of the cost.",
  },
  {
    question: "What if you don't support our hardware vendor?",
    answer:
      "We've integrated 12+ vendors already. If yours isn't on the list, our LIVE SDK team can add support in 2-4 weeks. We'll scope the integration before you commit—no surprises.",
  },
  {
    question: "We already have vendor portals. Why add another tool?",
    answer:
      "You have portals. But are you winning multi-vendor RFPs? Most MSPs lose 2-3 deals per quarter because they can't support mixed hardware. One won deal typically covers your entire partnership investment.",
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
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero: We Built It */}
        <section className="relative pt-16 pb-12 bg-dark-950">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            {/* Dog whistle: Call out their exact frustration */}
            <p className="text-dark-400 text-sm mb-6 max-w-lg mx-auto">
              Tired of walking away from multi-vendor RFPs? Done watching
              competitors win deals you could have had?
            </p>

            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Partnership, Not Licensing
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mt-4 mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              We Built It.
              <br />
              <span className="bg-gradient-to-r from-primary via-brand-300 to-accent-400 bg-clip-text text-transparent">
                So You Don&apos;t Have To.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto mb-8">
              8 years of R&D. 100+ telco integrations. The ability to say{" "}
              <span className="text-dark-100 font-medium">YES</span> to every
              hardware stack, every RFP, every opportunity—starting this quarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/journey"
                className="inline-flex items-center justify-center py-3 px-8 bg-primary text-dark-950 font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-primary/20"
              >
                Start Trial-to-Profit
              </Link>
              <Link
                href="/demo#schedule"
                className="inline-flex items-center justify-center py-3 px-8 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                Talk to the Alliance
              </Link>
            </div>
          </div>
        </section>

        {/* Stats: What 8 Years Means */}
        <section className="py-10 bg-dark-900 border-y border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {weBuiltIt.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                    {item.stat}
                  </div>
                  <div className="text-dark-100 font-medium mb-2">
                    {item.label}
                  </div>
                  <div className="text-dark-400 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Real Cost: Build vs. Partner */}
        <section className="py-12 md:py-16 bg-dark-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold text-dark-50 mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                The Real Cost of &ldquo;Building It Yourself&rdquo;
              </h2>
              <p className="text-dark-400 max-w-2xl mx-auto">
                Every month you spend building is a month your competitors are
                winning deals you could have had.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Build It Yourself */}
              <div className="p-8 bg-dark-900 border border-white/[0.06] rounded-2xl">
                <div className="text-dark-400 text-sm uppercase tracking-wider mb-6">
                  The Build Path
                </div>
                <ul className="space-y-4">
                  {costOfBuilding.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500/80 mt-1 text-sm">✕</span>
                      <div>
                        <span className="text-dark-300">{item.label}</span>
                        <span className="text-dark-400 text-sm ml-2">
                          — {item.cost}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <div className="text-dark-400 text-sm mb-1">
                    Total 3-year cost
                  </div>
                  <div className="text-2xl font-bold text-dark-200">$2M+</div>
                  <div className="text-dark-400 text-xs mt-1">
                    Plus every deal lost while building
                  </div>
                </div>
              </div>

              {/* Partnership */}
              <div className="p-8 bg-dark-800 border border-primary/30 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

                <div className="relative z-10">
                  <div className="text-primary text-sm uppercase tracking-wider mb-6">
                    The Partnership Path
                  </div>
                  <ul className="space-y-4 text-dark-200">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        Production-ready in <strong>30 days</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        LIVE SDK Engineers handle your integrations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        8 years of battle-tested infrastructure
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        True multi-vendor from day one
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        Win the next RFP <strong>this quarter</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-primary/20">
                    <div className="text-dark-400 text-sm mb-1">The math</div>
                    <div className="text-lg text-dark-50">
                      One 500-site deal ={" "}
                      <span className="text-primary font-bold">
                        $250K+ revenue
                      </span>
                    </div>
                    <div className="text-dark-400 text-xs mt-1">
                      Partnership should deliver 3-5X ROI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators: LIVE SDK, BYOTS, Dynamic Roadmap */}
        <section className="py-12 md:py-16 bg-dark-900 border-y border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold text-dark-50 mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                What You Actually Get
              </h2>
              <p className="text-dark-400 max-w-2xl mx-auto">
                Not software licenses. Strategic capability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="p-6 bg-dark-950 border border-white/[0.06] rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    {diff.icon === "engineers" && (
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    )}
                    {diff.icon === "stack" && (
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    )}
                    {diff.icon === "roadmap" && (
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-dark-50 mb-1">
                    {diff.title}
                  </h3>
                  <p className="text-primary text-sm mb-3">{diff.subtitle}</p>
                  <p className="text-dark-400 text-sm">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes: What You Can Achieve */}
        <section className="py-12 md:py-16 bg-dark-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold text-dark-50 mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                What Becomes Possible
              </h2>
              <p className="text-dark-400 max-w-2xl mx-auto">
                Imagine being the MSP that never has to say no. The one
                competitors lose sleep over. That&apos;s what partnership unlocks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl relative ${
                    outcome.highlighted
                      ? "bg-dark-800 border-2 border-primary/50"
                      : "bg-dark-900 border border-white/[0.06]"
                  }`}
                >
                  {outcome.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-dark-950 text-xs font-bold uppercase rounded-full">
                      Most Common
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-dark-50 mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-6">
                    {outcome.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {outcome.unlocks.map((unlock, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-dark-300 text-sm"
                      >
                        <span className="text-primary">✓</span>
                        {unlock}
                      </li>
                    ))}
                  </ul>

                  <p className="text-dark-400 text-xs mb-4">{outcome.cta}</p>

                  <Link
                    href="/demo#schedule"
                    className={`block w-full text-center py-3 px-6 rounded-lg transition-colors ${
                      outcome.highlighted
                        ? "bg-primary text-dark-950 font-semibold hover:bg-[var(--primary-hover)] shadow-lg shadow-primary/20"
                        : "border border-white/[0.1] text-dark-50 hover:bg-white/[0.05]"
                    }`}
                  >
                    Talk to the Alliance
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-10 bg-dark-900 border-y border-white/[0.06]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="p-8 bg-dark-950 border border-white/[0.06] rounded-2xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-dark-400 mb-4">
                <span>&ldquo;Not production ready.&rdquo;</span>
                <span className="text-dark-500">•</span>
                <span>&ldquo;Too resource-intensive.&rdquo;</span>
                <span className="text-dark-500">•</span>
                <span>&ldquo;Needs a big team.&rdquo;</span>
              </div>
              <p className="text-primary font-medium mb-6">Think again.</p>

              <blockquote className="text-lg md:text-xl text-dark-200 mb-6">
                5-person team. Zero managed WiFi experience. Now managing{" "}
                <span className="text-primary font-semibold">
                  1,000 schools
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  10,000 network elements
                </span>{" "}
                nationwide.
              </blockquote>

              <div className="flex items-center gap-4">
                <Image
                  src="https://framerusercontent.com/images/NY7LruTfyfFyY8fJgLfPgfckGgo.png"
                  alt="Julian Edwards"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <div className="text-dark-50 font-medium">MsTECH</div>
                  <div className="text-dark-400 text-sm">
                    Jamaica National Education Contract
                  </div>
                </div>
              </div>

              <Link
                href="/case-studies/jamaica"
                className="inline-flex items-center gap-2 text-primary text-sm mt-6 hover:underline"
              >
                Read the full case study
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA: Start the Conversation */}
        <section className="py-12 md:py-16 bg-dark-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-dark-400 text-sm mb-3">
              How many deals did you walk away from last quarter?
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-dark-50 mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Let&apos;s Make Sure That Number is Zero
            </h2>
            <p className="text-dark-400 mb-6 max-w-xl mx-auto">
              We&apos;ll scope your specific needs, understand your growth
              goals, and show you exactly how the OIA helps you win every deal
              you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/journey"
                className="inline-flex items-center justify-center py-3 px-8 bg-primary text-dark-950 font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-primary/20"
              >
                Start Trial-to-Profit
              </Link>
              <Link
                href="/demo#schedule"
                className="inline-flex items-center justify-center py-3 px-8 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                Talk to the Alliance
              </Link>
            </div>

            <p className="text-dark-400 text-sm mt-6">
              30-day full access. No credit card. No contracts.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 pb-16 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-dark-50 mb-8 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-dark-950 border border-white/[0.06] rounded-xl"
                >
                  <h3 className="text-dark-50 font-medium mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-dark-400 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

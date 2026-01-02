import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Container, Button, ReportDownloadForm } from "@/components/ui";

export const metadata = {
  title: "Multi-Vendor WiFi Research | The Data Your CFO Needs",
  description:
    "Independent research reveals why 56% of MSPs want multi-vendor WiFi management—and how to add it without replacing your existing fleet. Free report with verified pricing.",
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Eyebrow */}
              <p className="text-dark-400 text-sm uppercase tracking-wider mb-4">
                Independent Research from Maravedis 2024
              </p>

              {/* Headline */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-6 leading-[1.1]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Your Ruckus Investment Got You Here.
                <br />
                <span className="gradient-text">Multi-Vendor Gets You Further.</span>
              </h1>

              {/* Subhead */}
              <p className="text-lg md:text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
                Independent research shows 56% of MSPs want multi-vendor capability—but fear the rip-and-replace cost.
                See how one team added 5,000 OpenLAN APs alongside their existing Ruckus fleet.
              </p>

              {/* Three Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
                {[
                  { stat: "56%", label: "want multi-vendor" },
                  { stat: "6", label: "vendors, one dashboard" },
                  { stat: "$180K", label: "saved vs. rip-and-replace" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                      {item.stat}
                    </div>
                    <div className="text-dark-500 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Objection Bash Quote */}
              <blockquote className="p-5 rounded-xl bg-dark-800/30 border border-white/[0.04] max-w-2xl mx-auto text-left">
                <p className="text-dark-300 italic mb-3">
                  &ldquo;We thought going multi-vendor meant replacing everything. Instead, we kept our Ruckus,
                  added Edgecore for new builds, and now manage both from the same dashboard.&rdquo;
                </p>
                <cite className="text-dark-500 text-sm not-italic">
                  — MSP CEO, 500+ site deployment
                </cite>
              </blockquote>
            </div>
          </Container>
        </section>

        {/* Downloads Section - 70/30 split: Form (primary) | Infographic (bonus) */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/50" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start">
                {/* Left - Form (primary, 70%) */}
                <div className="p-6 md:p-8 rounded-2xl bg-dark-900/80 backdrop-blur-sm border border-white/[0.08]">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-dark-50 mb-2">
                      Get the Full Report
                    </h2>
                    <p className="text-dark-400 text-sm">
                      The math your CFO needs to see
                    </p>
                  </div>
                  <ReportDownloadForm />
                </div>

                {/* Right - Infographic (bonus, 30%) */}
                <div className="flex flex-col items-center">
                  <p className="text-dark-500 text-xs uppercase tracking-wider mb-3">Free Download</p>
                  <a
                    href="/docs/msp-ceo-challenges-infographic.png"
                    download
                    className="block rounded-xl overflow-hidden border border-white/[0.08] hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
                  >
                    <img
                      src="/images/research/msp-challenges-infographic-thumb.jpeg"
                      alt="Unlock the Solution to the MSP CEO's Dilemma - Click to download infographic"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What's Inside */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/50" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-dark-50 mb-2">
                  What&apos;s in the Report
                </h2>
                <p className="text-dark-400 text-sm">
                  Data-backed insights for your next board meeting
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Why single-vendor is a supply chain risk",
                    desc: "And how MSPs are hedging without rip-and-replace",
                  },
                  {
                    title: "The multi-vendor math",
                    desc: "Add capacity at 80% lower cost with verified pricing",
                  },
                  {
                    title: "Ruckus + OpenLAN in one dashboard",
                    desc: "How to manage both without retraining your team",
                  },
                  {
                    title: "What 500 MSPs say is blocking growth",
                    desc: "Survey data on the real challenges",
                  },
                  {
                    title: "The LiveSDK model",
                    desc: "25 engineers for $120K/yr vs. $150K+ for one hire",
                  },
                  {
                    title: "5-year TCO breakdown",
                    desc: "Platform + staffing—the full picture",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg bg-dark-800/20 border border-white/[0.03]"
                  >
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-dark-100 font-medium text-sm">{item.title}</p>
                      <p className="text-dark-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Proof Point - Jamaica */}
        <section className="relative py-12 md:py-16 overflow-hidden section-divider">
          <div className="absolute inset-0 bg-dark-950" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-dark-400 text-xs uppercase tracking-wider mb-3">
                The Proof Point
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-dark-50 mb-4">
                1,000 Schools. 6 Vendors. <span className="gradient-text">One Dashboard.</span>
              </h2>
              <p className="text-dark-300 mb-6 max-w-xl mx-auto">
                A team with zero managed WiFi experience deployed 7,000 APs, 2,000 switches,
                and 1,000 firewalls across Ruckus, Edgecore, Actiontec, Cybertan, Fortinet,
                and NetExperience—managed through a single pane of glass.
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
                {[
                  { stat: "7,000", label: "APs" },
                  { stat: "2,000", label: "Switches" },
                  { stat: "1,000", label: "Firewalls" },
                  { stat: "6", label: "Vendors" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-dark-100 mb-0.5">
                      {item.stat}
                    </div>
                    <div className="text-dark-500 text-[10px]">{item.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/case-studies/jamaica"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
              >
                Read the full Jamaica case study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

          <Container className="relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-2xl md:text-3xl font-bold text-dark-50 mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Ready to Expand Your Reach?
              </h2>
              <p className="text-dark-300 mb-8">
                Add multi-vendor capability without replacing your existing fleet.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="#top">
                  Get the Report
                </Button>
                <Button variant="secondary" href="/journey">
                  See the 30-Day Journey
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

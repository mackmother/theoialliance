import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { Button, Container } from "@/components/ui";

export const metadata = {
  title: "Why OIA | Enterprise-Ready OpenLAN with Universal Business Layer",
  description:
    "Edgecore and NetExperience bring enterprise-ready OpenLAN. wibipOS brings the universal single pane of glass—manage OpenLAN alongside legacy gear, with the business layer to bill it all.",
};

export default function WhyWiBUZPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/*
          HERO - One clear message
          Framework: Homepage Positioning Blueprint
          "Clear is better than clever. Answer: Who is this for? What problem? How do you solve it?"
        */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Instant credibility - moved UP per Design Authority principle */}
              <div className="flex items-center justify-center gap-6 mb-8 opacity-60">
                {[
                  { name: "AT&T", url: "https://framerusercontent.com/images/vypGMHttHsFpjWtzjxaRzwnTkMg.png" },
                  { name: "Verizon", url: "https://framerusercontent.com/images/PdMqdEOAhM8eNJGnVODgyMX1zwE.png" },
                  { name: "Frontier", url: "https://framerusercontent.com/images/J6EQ6l0mfj8KgZOTvBadrIH2R08.png" },
                ].map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.url}
                    alt={logo.name}
                    width={60}
                    height={20}
                    className="h-4 md:h-5 w-auto object-contain grayscale brightness-200"
                    unoptimized
                  />
                ))}
              </div>

              {/* The Problem - in their words */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-8 leading-[1.08]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Stuck Between Pilot
                <br />
                <span className="gradient-text">and Profit?</span>
              </h1>

              {/* Alliance Partners - The Solution */}
              <div className="mb-8">
                <p className="text-dark-500 text-xs uppercase tracking-wider mb-4">The Open Infrastructure Alliance</p>
                <div className="flex items-center justify-center gap-4 md:gap-8">
                  {/* Edgecore */}
                  <div className="flex flex-col items-center gap-1.5">
                    <Image
                      src="https://be-net.com/wp-content/uploads/2024/06/Edgecore-logo.png"
                      alt="Edgecore"
                      width={100}
                      height={30}
                      className="h-5 md:h-7 w-auto object-contain"
                      unoptimized
                    />
                    <span className="text-[10px] md:text-xs text-dark-400">Hardware</span>
                  </div>

                  <span className="text-dark-500 text-lg">+</span>

                  {/* NetExperience */}
                  <div className="flex flex-col items-center gap-1.5">
                    <Image
                      src="https://www.netexperience.com/wp-content/uploads/2025/08/4060W.png"
                      alt="NetExperience"
                      width={120}
                      height={30}
                      className="h-5 md:h-7 w-auto object-contain"
                      unoptimized
                    />
                    <span className="text-[10px] md:text-xs text-dark-400">Controller</span>
                  </div>

                  <span className="text-dark-500 text-lg">+</span>

                  {/* wibipOS */}
                  <div className="flex flex-col items-center gap-1.5">
                    <Image
                      src="/images/logos/wibipOS - White.svg"
                      alt="wibipOS"
                      width={80}
                      height={30}
                      className="h-5 md:h-7 w-auto object-contain"
                    />
                    <span className="text-[10px] md:text-xs text-dark-400">Orchestration</span>
                  </div>
                </div>
              </div>

              {/* One-sentence answer */}
              <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-8">
                Edgecore and NetExperience bring enterprise-ready OpenLAN. wibipOS brings the universal single pane of glass—
                <span className="text-dark-100 font-medium">manage OpenLAN alongside Ruckus, Aruba, and Cisco, with the business intelligence to monetize and bill it all.</span>
              </p>

              {/* Single CTA - "Sell the vacation, not the flight" */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/journey">
                  Get Your First Invoice in 30 Days
                </Button>
                <Button variant="secondary" href="/case-studies/jamaica">
                  See 400 Schools Go Live
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/*
          FRUSTRATION → SOLUTION SECTION
          Framework: Avatar Hot Buttons - Pair each frustration with its solution (Before → After)
          "If you can describe their problem better than they can, you win their trust"
        */}
        <section className="relative pt-8 pb-12 md:pt-10 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/50" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-50 text-center mb-10">
                Sound Familiar?
              </h2>

              {/* Frustration → Solution pairs */}
              <div className="space-y-4">
                {[
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
                    frustration: "I don't have engineers who can customize open-source controllers.",
                    solution: "LiveSDK: 25 R&D engineers build your integrations on demand.",
                    proof: "NetExperience integration: 3 weeks, now standard.",
                  },
                  {
                    frustration: "Why trade Cisco lock-in for controller lock-in?",
                    solution: "Controller-agnostic. Ingest legacy Ruckus/Cisco via API. Add Edgecore. Same UI.",
                    proof: "Turns $200K rip-and-replace into $20K expansion.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="grid md:grid-cols-2 gap-4 items-stretch"
                  >
                    {/* Frustration - Left */}
                    <div className="p-5 rounded-xl bg-dark-800/30 border border-white/[0.04] flex items-center">
                      <div>
                        <span className="text-red-400/60 text-xs font-medium uppercase tracking-wider">Stuck</span>
                        <p className="text-dark-300 italic mt-1">&ldquo;{item.frustration}&rdquo;</p>
                      </div>
                    </div>

                    {/* Solution - Right */}
                    <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 flex items-center">
                      <div>
                        <span className="text-primary text-xs font-medium uppercase tracking-wider">Unlocked</span>
                        <p className="text-dark-100 mt-1">{item.solution}</p>
                        <p className="text-dark-500 text-xs mt-2">→ {item.proof}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wrap-up line — explains WHY these solutions exist */}
              <p className="text-dark-400 text-center mt-10 max-w-xl mx-auto">
                wibipOS is the business layer that breaks the lock-in between your controllers and your customers—so you can unlock your full revenue potential.
              </p>
            </div>
          </Container>
        </section>

        {/*
          PROOF SECTION - Why Believe Us
          Framework: Design Authority - "Construct Credibility" with third-party logos and real numbers
          Short. Punchy. Numbers.
        */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/30" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-8">
                Telco Battle-Tested. <span className="gradient-text">Now Open to MSPs.</span>
              </h2>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { stat: "10+", label: "Telcos Enabled" },
                  { stat: "100+", label: "Use Cases Developed" },
                  { stat: "10,000+", label: "Locations Served" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                      {item.stat}
                    </div>
                    <div className="text-dark-500 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                {[
                  { name: "AT&T", url: "https://framerusercontent.com/images/vypGMHttHsFpjWtzjxaRzwnTkMg.png" },
                  { name: "Verizon", url: "https://framerusercontent.com/images/PdMqdEOAhM8eNJGnVODgyMX1zwE.png" },
                  { name: "Frontier", url: "https://framerusercontent.com/images/J6EQ6l0mfj8KgZOTvBadrIH2R08.png" },
                  { name: "Cox", url: "https://framerusercontent.com/images/osgjsQhWnA2VfHePWYujw3qCKE.png" },
                ].map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.url}
                    alt={logo.name}
                    width={70}
                    height={20}
                    className="h-5 w-auto object-contain grayscale brightness-200"
                    unoptimized
                  />
                ))}
              </div>

              <p className="text-dark-400 text-sm mt-6">
                A decade of telco-grade infrastructure—now available to you.
              </p>
            </div>
          </Container>
        </section>

        {/*
          ECONOMICS - Address the Fear
          Framework: Avatar Hot Buttons - "Fears" quadrant
          One section. One fear. One answer.
        */}
        <section className="relative py-16 overflow-hidden section-divider">
          <div className="absolute inset-0 bg-dark-950" />

          <Container className="relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold text-dark-50 mb-4">
                You Keep 100% of Hardware + License Revenue
              </h2>
              <p className="text-dark-400 text-sm">
                WiBUZ charges a flat platform fee. We don&apos;t clip your Edgecore sales or NetExperience licenses.
                <br />
                <span className="text-dark-300">Same model as Android: Google provides the OS, Samsung keeps 100% of phone revenue.</span>
              </p>
            </div>
          </Container>
        </section>

        {/*
          CTA - Aspiration
          Framework: Avatar Hot Buttons - "Aspirations" quadrant
          "Sell the vacation, not the flight"
        */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-dark-50 mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                Stop Running Pilots.
                <br />
                <span className="gradient-text">Start Collecting Revenue.</span>
              </h2>

              <p className="text-dark-300 mb-8">
                30 days from trial kit to your first customer invoice.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/journey">
                  Start the 30-Day Journey
                </Button>
                <Button variant="secondary" href="/demo#schedule">
                  Talk to the Alliance
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

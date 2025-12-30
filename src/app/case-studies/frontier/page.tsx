import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Frontier Communications Case Study | wibipOS",
  description:
    "How Frontier deployed carrier-grade Wi-Fi across 28+ states serving 430,000+ business customers with wibipOS.",
};

export default function FrontierCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-dark-950">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-dark-400 hover:text-dark-200 text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://framerusercontent.com/images/J6EQ6l0mfj8KgZOTvBadrIH2R08.png"
                alt="Frontier Communications"
                width={150}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
              <span className="text-2xl">🇺🇸</span>
              <span className="text-xs px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary">
                8-Year Partnership
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
              <span className="text-primary">28 States.</span> 430K Customers.{" "}
              <br className="hidden md:block" />
              Carrier-Grade.
            </h1>

            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mb-12">
              How a Fortune 500 telco extended high-performance Wi-Fi to commercial subscribers across 28+ states—without building from scratch.
            </p>

            {/* Article body - continuous with hero */}
            <article className="max-w-3xl prose-dark">
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                Frontier Communications needed a turnkey, fully brandable Wi-Fi and networking solution. With 430,000+ business customers across 28 states—from coffee shops to corporate branches—they couldn&apos;t afford to assemble a patchwork of vendors and processes.
              </p>

              <p className="text-dark-400 leading-relaxed mb-6">
                Each vertical had different needs. Retail wanted guest analytics. Small offices needed secure employee networks. Hospitality required branded captive portals. Building separate solutions for each wasn&apos;t an option.
              </p>

              <p className="text-dark-200 leading-relaxed mb-10 font-medium">
                Frontier needed a singular, integrated approach—for design, installation, NOC support, and future expansions. They needed wibipOS.
              </p>

              {/* Image break */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06] mb-10">
                <Image
                  src="https://landing.wibipos.com/hs-fs/hubfs/FrontierCaseStudy-1.jpg?width=1200&height=889&name=FrontierCaseStudy-1.jpg"
                  alt="Frontier Communications Wi-Fi deployment across United States"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <p className="text-dark-400 leading-relaxed mb-6">
                Working through Commscope&apos;s managed services, Frontier utilized wibipOS as the orchestration layer. The platform unified provisioning, captive portal customization, and real-time analytics under a single pane of glass. Zero-touch deployment meant sites went live in minutes, not weeks.
              </p>

              <p className="text-dark-400 leading-relaxed mb-10">
                The 8-year partnership transformed Frontier&apos;s business model. They pivoted from one-time equipment sales to monthly recurring revenue on managed Wi-Fi, security, and networking offerings—backed by enterprise-grade reliability.
              </p>

              {/* Pull quote - inline, no card */}
              <blockquote className="border-l-4 border-primary pl-6 my-12">
                <p className="text-xl md:text-2xl text-dark-200 leading-relaxed mb-4">
                  &ldquo;By integrating end-to-end solutions with wibipOS&apos;s white-label digital experience, we unlocked flexibility, control, adaptability, and branding our Service Providers needed.&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <Image
                    src="https://framerusercontent.com/images/mc25cAk8bvdtmGo6hxJhTGJjSo.png"
                    alt="Jay Bestermann"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                    unoptimized
                  />
                  <div>
                    <div className="font-semibold text-dark-50">Jay Bestermann</div>
                    <div className="text-sm text-dark-500">Managed Services Executive</div>
                  </div>
                </footer>
              </blockquote>

              <p className="text-dark-400 leading-relaxed">
                The result: Frontier delivers carrier-grade managed Wi-Fi across 28 states. They add new services—cybersecurity add-ons, multi-site portal customizations, IoT solutions—without rebuilding. And they own the customer relationship under their brand.
              </p>
            </article>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-semibold text-dark-200 text-center mb-8">
              Platform powering Frontier Business
            </h2>
            <div className="p-8 bg-dark-800 border border-white/[0.06] rounded-2xl">
              <div className="flex flex-wrap gap-8 items-center justify-center">
                <Image
                  src="https://webresources.commscope.com/images/assets/Ruckus_logo_white-orange/Zz1jNDk3NTVlZTNiZDcxMWYwOTU4MjFhZGNhYTkyZTI0ZQ=="
                  alt="Ruckus"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain filter brightness-0 invert"
                  unoptimized
                />
                <div className="h-10 px-4 py-2 bg-dark-700 rounded-lg flex items-center">
                  <span className="text-dark-300 text-sm font-medium">Virtual Managed Edge</span>
                </div>
                <div className="h-10 px-4 py-2 bg-dark-700 rounded-lg flex items-center">
                  <span className="text-dark-300 text-sm font-medium">OSS/BSS Integration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 pb-24 bg-dark-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4">
              Ready to open new revenue frontiers?
            </h2>
            <p className="text-dark-400 mb-8">
              See how wibipOS can power your next managed Wi-Fi leap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/demo">
                Start Your 30-Day Sandbox
              </Button>
              <Button variant="ghost" href="/case-studies">
                Read Another Case Study
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

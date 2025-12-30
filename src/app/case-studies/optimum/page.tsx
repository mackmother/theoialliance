import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Optimum Business Wi-Fi Case Study | wibipOS",
  description:
    "How Optimum deploys 100 SMB Wi-Fi installations monthly with 15-minute turn-ups using wibipOS.",
};

export default function OptimumCaseStudyPage() {
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
                src="https://framerusercontent.com/images/HDqgG3s2d7lIsawnvoC41lddsE.png"
                alt="Optimum Business"
                width={140}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
              <span className="text-2xl">🇺🇸</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
              100 SMB Installs Monthly.{" "}
              <br className="hidden md:block" />
              <span className="text-primary">15 Minutes Each.</span>
            </h1>

            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mb-12">
              How Optimum Business delivers plug-and-play Wi-Fi to 350,000+ small businesses—with deployment times reduced from weeks to minutes.
            </p>

            {/* Article body - continuous with hero */}
            <article className="max-w-3xl prose-dark">
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                Optimum Business, part of Altice USA, needed to deliver managed Wi-Fi to 350,000+ small and medium businesses. Coffee shops. Medical offices. Car dealerships. Each needed secure employee Wi-Fi and branded guest portals.
              </p>

              <p className="text-dark-400 leading-relaxed mb-6">
                The problem: SMB owners don&apos;t have IT staff. They can&apos;t handle Wi-Fi complexities. Optimum needed a hands-off approach—something a technician could deploy in minutes, not hours. And they wanted a marketing component so SMB owners could capture customer analytics without technical expertise.
              </p>

              <p className="text-dark-200 leading-relaxed mb-10 font-medium">
                With 350,000+ small businesses in their coverage, manually configuring SSIDs and captive portals for each client was impossible. They needed wibipOS.
              </p>

              {/* Image break */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06] mb-10">
                <Image
                  src="https://landing.wibipos.com/hs-fs/hubfs/OptimumCaseStudyImage.jpg?width=1200&height=889&name=OptimumCaseStudyImage.jpg"
                  alt="Optimum SMB Wi-Fi deployment"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <p className="text-dark-400 leading-relaxed mb-6">
                wibipOS integrated directly with Optimum&apos;s AMDOCS provisioning system. Each new customer site triggers an automatic config push—SSIDs, captive portal templates, VLANs, bandwidth policies. Technicians arrive with up to three APs, a switch, and a virtualized managed edge device. Power on, and wibipOS downloads and applies the correct configuration within 15 minutes.
              </p>

              <p className="text-dark-400 leading-relaxed mb-10">
                The result is &ldquo;Pro Wi-Fi&rdquo;—Optimum&apos;s branded solution. SMB owners create custom login screens, upload logos, choose color schemes, capture visitor demographics, and manage private/guest networks with separate security policies. All powered by wibipOS in the background.
              </p>

              {/* Pull quote - inline, no card */}
              <blockquote className="border-l-4 border-primary pl-6 my-12">
                <p className="text-xl md:text-2xl text-dark-200 leading-relaxed mb-4">
                  &ldquo;By integrating our end-to-end solutions with wibipOS&apos;s white-label digital experience, we unlocked the flexibility, control, adaptability, and branding our Service Providers needed.&rdquo;
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
                The result: 50-100 new SMB installs each month with minimal overhead. Wi-Fi becomes more than connectivity—SMB owners avoid technical headaches, focusing instead on serving customers and analyzing newly available visitor data. High customer satisfaction. Monthly recurring revenue. And a platform that scales.
              </p>
            </article>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-semibold text-dark-200 text-center mb-8">
              Platform powering Pro Wi-Fi
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
                  <span className="text-dark-300 text-sm font-medium">AMDOCS Integration</span>
                </div>
                <div className="h-10 px-4 py-2 bg-dark-700 rounded-lg flex items-center">
                  <span className="text-dark-300 text-sm font-medium">Virtualized Managed Edge</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 pb-24 bg-dark-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4">
              Ready to transform SMB connectivity?
            </h2>
            <p className="text-dark-400 mb-8">
              See how wibipOS can power your managed Wi-Fi offerings.
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

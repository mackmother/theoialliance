import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";

export const metadata = {
  title: "AT&T MDU Wi-Fi Case Study | wibipOS",
  description:
    "How AT&T white-labeled wibipOS to deliver branded MDU Wi-Fi to 2.5M customers across 500+ properties—without being a Ruckus reseller.",
};

export default function ATTCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-dark-950">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-400/10 rounded-full blur-[100px]" />

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
                src="https://framerusercontent.com/images/vypGMHttHsFpjWtzjxaRzwnTkMg.png"
                alt="AT&T"
                width={100}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
              <span className="text-brand-400">AT&T Brand.</span> Their Platform.{" "}
              <br className="hidden md:block" />
              2.5M Customers.
            </h1>

            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mb-12">
              How AT&T white-labeled wibipOS to own their MDU Wi-Fi experience—without becoming a hardware reseller.
            </p>

            {/* Article body - continuous with hero */}
            <article className="max-w-3xl prose-dark">
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                When AT&T looked at MDU managed Wi-Fi, they had options. They could resell a vendor&apos;s solution—put Ruckus or another brand in front of their customers. But that meant giving up control.
              </p>

              <p className="text-dark-400 leading-relaxed mb-6">
                The vendor would own the portal, the customer relationship, the experience. AT&T would just be passing through someone else&apos;s product. For a company serving 2.5 million customers across 500+ properties, that wasn&apos;t acceptable.
              </p>

              <p className="text-dark-200 leading-relaxed mb-10 font-medium">
                AT&T said no. They wanted their brand, their portal, their customer relationship. They needed a platform that could disappear behind their brand.
              </p>

              {/* Image break */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06] mb-10">
                <Image
                  src="https://framerusercontent.com/images/tCRJHVzrjsyn4JztXMuHTtj9Y.png"
                  alt="AT&T-branded portal powered by wibipOS"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <p className="text-dark-400 leading-relaxed mb-6">
                wibipOS white-labeled the entire management platform. AT&T owned the brand, the portal, the customer relationship. WiBUZ powered it invisibly—handling the multi-vendor complexity so AT&T could focus on their customers.
              </p>

              <p className="text-dark-400 leading-relaxed mb-10">
                Ruckus provides the hardware. wibipOS provides the management layer. AT&T provides the brand and customer relationship. Zero vendor branding visible to end users.
              </p>

              {/* Pull quote - inline, no card */}
              <blockquote className="border-l-4 border-brand-400 pl-6 my-12">
                <p className="text-xl md:text-2xl text-dark-200 leading-relaxed mb-4">
                  &ldquo;By integrating our end-to-end solutions with wibipOS&apos;s white-label digital experience, we unlocked the flexibility, control, adaptability and branding our Service Providers needed.&rdquo;
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
                The result: AT&T delivers managed Wi-Fi to millions of MDU residents under their own brand. They own the customer relationship. And when they need to add properties or expand services, they scale without starting over.
              </p>
            </article>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-semibold text-dark-200 text-center mb-8">
              Hardware powering AT&T MDU Wi-Fi
            </h2>
            <div className="p-8 bg-dark-800 border border-white/[0.06] rounded-2xl">
              <div className="flex items-center justify-center">
                <Image
                  src="https://webresources.commscope.com/images/assets/Ruckus_logo_white-orange/Zz1jNDk3NTVlZTNiZDcxMWYwOTU4MjFhZGNhYTkyZTI0ZQ=="
                  alt="Ruckus"
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 pb-24 bg-dark-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4">
              Want your brand on a carrier-grade platform?
            </h2>
            <p className="text-dark-400 mb-8">
              See how wibipOS can white-label for your business.
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

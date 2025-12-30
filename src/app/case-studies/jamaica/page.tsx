import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Jamaica Schools Case Study | wibipOS",
  description:
    "How MsTECH deployed 3,150 APs across 364 schools in 90 days using wibipOS multi-vendor management—now scaling to 1,000 schools.",
};

const techStackVendors = [
  { name: "Ruckus", url: "https://webresources.commscope.com/images/assets/Ruckus_logo_white-orange/Zz1jNDk3NTVlZTNiZDcxMWYwOTU4MjFhZGNhYTkyZTI0ZQ==" },
  { name: "Edgecore", url: "https://wifi.edge-core.com/wp-content/uploads/LOGO.svg" },
  { name: "NetExperience", url: "https://www.netexperience.com/wp-content/uploads/2025/08/4060W.png" },
  { name: "Actiontec", url: "https://vectorseek.com/wp-content/uploads/2023/11/Actiontec-White-Logo-Vector.svg--300x145.png" },
  { name: "Cybertan", url: "https://www.cybertan.com.tw/images/logo.png" },
  { name: "Fortinet", url: "https://docs.fortinet.com/img/fortinet-logo-white.png" },
];

export default function JamaicaCaseStudyPage() {
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
                src="https://framerusercontent.com/images/ijOOF07fRPzxousVlXywn4qdOU.png?scale-down-to=512"
                alt="MsTECH Jamaica"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
              <span className="text-2xl">🇯🇲</span>
              <span className="text-xs px-2 py-1 bg-brand-400/10 border border-brand-400/20 rounded-full text-brand-400">
                🏆 Technology Partner of the Year
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
              <span className="text-brand-400">364 Schools.</span> 6 Vendors.{" "}
              <br className="hidden md:block" />
              90 Days.
            </h1>

            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mb-12">
              How MsTECH deployed Wi-Fi across Jamaica&apos;s education system without getting locked into any single vendor.
            </p>

            {/* Article body - continuous with hero */}
            <article className="max-w-3xl prose-dark">
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                MsTECH Solutions won the contract to modernize Jamaica&apos;s educational network infrastructure. The scope: 1,000 schools across the island, from urban Kingston to rural mountain villages.
              </p>

              <p className="text-dark-400 leading-relaxed mb-6">
                The problem wasn&apos;t the contract—it was the hardware. Government procurement meant working with multiple vendors. Ruckus for high-density urban schools. TIP OpenWiFi-compatible devices for rural locations where cost mattered more than throughput. Actiontec, Edgecore, Fortinet hardware arriving from different suppliers.
              </p>

              <p className="text-dark-400 leading-relaxed mb-6">
                Each vendor meant a different dashboard. Different training. Different support contracts. Managing six separate platforms across 1,000 schools wasn&apos;t just inefficient—it was impossible.
              </p>

              <p className="text-dark-200 leading-relaxed mb-10 font-medium">
                MsTECH needed one platform that could manage any hardware they deployed. They found wibipOS.
              </p>

              {/* Image break */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06] mb-10">
                <Image
                  src="https://landing.wibipos.com/hs-fs/hubfs/MoEyCaseStudyImage-1.jpg?width=1200&height=840&name=MoEyCaseStudyImage-1.jpg"
                  alt="Jamaica Ministry of Education Wi-Fi deployment coverage map"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <p className="text-dark-400 leading-relaxed mb-6">
                Phase 1 deployed 364 schools in 90 days. 3,150 access points, all managed from a single wibipOS dashboard. Ruckus hardware in Kingston. Edgecore in Montego Bay. Different vendors, same management experience.
              </p>

              <p className="text-dark-400 leading-relaxed mb-10">
                Phase 2 is underway. 700 more schools, with Actiontec and Fortinet devices joining the mix. When a vendor becomes unavailable or pricing changes, MsTECH swaps hardware without retraining staff or rebuilding workflows.
              </p>

              {/* Pull quote - inline, no card */}
              <blockquote className="border-l-4 border-brand-400 pl-6 my-12">
                <p className="text-xl md:text-2xl text-dark-200 leading-relaxed mb-4">
                  &ldquo;We chose different vendors for different environments—Ruckus for high-density urban schools, Edgecore for rural locations. wibipOS let us manage them all the same way.&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <Image
                    src="https://framerusercontent.com/images/NY7LruTfyfFyY8fJgLfPgfckGgo.png"
                    alt="Julian Edwards"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                    unoptimized
                  />
                  <div>
                    <div className="font-semibold text-dark-50">Julian Edwards</div>
                    <div className="text-sm text-dark-500">Head of Operations, MsTECH</div>
                  </div>
                </footer>
              </blockquote>

              <p className="text-dark-400 leading-relaxed">
                The result: Jamaica&apos;s students get reliable Wi-Fi. MsTECH keeps operational control. And when the next phase requires new hardware, they&apos;re ready—without starting over.
              </p>
            </article>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-semibold text-dark-200 text-center mb-8">
              Hardware deployed across Jamaica&apos;s schools
            </h2>
            <div className="p-8 bg-dark-800 border border-white/[0.06] rounded-2xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                {techStackVendors.map((vendor) => (
                  <div key={vendor.name} className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                    <Image
                      src={vendor.url}
                      alt={vendor.name}
                      width={120}
                      height={40}
                      className="max-h-10 w-auto object-contain filter brightness-0 invert"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 pb-24 bg-dark-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4">
              Ready to deploy like MsTECH?
            </h2>
            <p className="text-dark-400 mb-8">
              See how wibipOS can unify your multi-vendor environment.
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

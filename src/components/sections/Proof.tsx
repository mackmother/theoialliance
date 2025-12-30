import Image from "next/image";
import { Section, SectionHeading, Card, Button, LogoStrip } from "@/components/ui";

const telcoLogos = [
  { name: "AT&T", url: "https://framerusercontent.com/images/vypGMHttHsFpjWtzjxaRzwnTkMg.png" },
  { name: "Cox", url: "https://framerusercontent.com/images/osgjsQhWnA2VfHePWYujw3qCKE.png" },
  { name: "Frontier", url: "https://framerusercontent.com/images/J6EQ6l0mfj8KgZOTvBadrIH2R08.png" },
  { name: "Optimum", url: "https://framerusercontent.com/images/HDqgG3s2d7lIsawnvoC41lddsE.png" },
  { name: "Mediacom", url: "https://framerusercontent.com/images/ZkfjAdHYnavH2Sh3c08ipK9iA.png" },
  { name: "Verizon", url: "https://framerusercontent.com/images/PdMqdEOAhM8eNJGnVODgyMX1zwE.png" },
];

const proofStats = [
  { value: "10+", label: "Years" },
  { value: "10K+", label: "Locations" },
  { value: "6", label: "Tier 1 Telcos" },
  { value: "350K", label: "Dev Hours" },
];

export function Proof() {
  return (
    <Section id="proof" background="raised" spacing="md" divider>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={
            <>
              <span className="text-brand-400">Battle-Tested</span> at Carrier Scale
            </>
          }
        />

        {/* Compact stats + logos */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {proofStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-dark-100">{stat.value}</div>
              <div className="text-xs text-dark-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <LogoStrip logos={telcoLogos} grayscale={false} />
        </div>

        {/* Case Study Card - Compact */}
        <div className="mt-12">
          <Card className="overflow-hidden" gradient>
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left - Content (3 cols) */}
              <div className="md:col-span-3 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src="https://framerusercontent.com/images/ijOOF07fRPzxousVlXywn4qdOU.png?scale-down-to=512"
                    alt="MsTECH Jamaica"
                    height={24}
                    width={80}
                    className="h-6 w-auto object-contain opacity-80"
                    unoptimized
                  />
                  <span className="text-dark-600 text-xs">Jamaica</span>
                </div>

                <blockquote className="text-base md:text-lg text-dark-300 leading-relaxed mb-3 border-l-2 border-brand-400/30 pl-4">
                  &ldquo;wibipOS is truly the &lsquo;Red Hat&rsquo; of our network infrastructure.&rdquo;
                </blockquote>
                <p className="text-sm text-dark-400 mb-3">
                  <span className="text-dark-100 font-medium">364 schools</span> and{" "}
                  <span className="text-dark-100 font-medium">3,150 APs</span> in 90 days.
                  Scaling to 1,000 schools across 6 vendors.
                </p>
                <p className="text-xs text-dark-500 mb-5">
                  MsTECH proved enterprise scale. Your 30-day journey starts simpler.
                </p>

                <div className="flex items-center gap-4 mb-5">
                  {[
                    { val: "364", label: "Schools" },
                    { val: "90", label: "Days" },
                    { val: "6", label: "Vendors" },
                  ].map((s) => (
                    <div key={s.label} className="text-center px-4 py-2.5 bg-dark-800/40 rounded-lg border border-white/[0.04]">
                      <div className="text-xl font-semibold text-brand-400">{s.val}</div>
                      <div className="text-[10px] text-dark-500 uppercase tracking-wide">{s.label}</div>
                    </div>
                  ))}
                </div>

                <Button variant="secondary" href="/case-studies/jamaica">
                  Read Case Study
                  <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>

              {/* Right - Testimonial Image (2 cols) */}
              <div className="md:col-span-2 relative min-h-[200px] md:min-h-0">
                <Image
                  src="https://framerusercontent.com/images/NY7LruTfyfFyY8fJgLfPgfckGgo.png"
                  alt="Julian Edwards testimonial"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

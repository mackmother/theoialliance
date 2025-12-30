import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading, Card, Button } from "@/components/ui";

const features = [
  {
    title: "Win Multi-Vendor RFPs",
    description: "One brandable dashboard for every vendor. Stop losing deals because you can't support their hardware.",
    href: "/features/unified-dashboard",
    image: "/images/screenshots/unified-dashboard.png",
    proof: "6 vendors unified in one deployment",
  },
  {
    title: "Keep Your Existing Gear",
    description: "Bridge legacy systems with OpenWiFi—no forklift upgrades, no stranded investments.",
    href: "/features/open-api",
    image: "/images/screenshots/Multi-vendor.png",
    proof: "Zero rip-and-replace required",
  },
  {
    title: "Ship Integrations in Days",
    description: "Our SDK team works alongside yours. New vendors live in 30 days, not 6-month enterprise projects.",
    href: "/features/live-sdk",
    image: "/images/screenshots/ScaleWibipOS.png",
    proof: "30-day vendor integration guarantee",
  },
];

export function ValueProps() {
  return (
    <Section id="features" background="default" spacing="md" divider>
      <SectionHeading
        title={
          <>
            Three Capabilities.{" "}
            <span className="text-primary">Zero Rip-and-Replace.</span>
          </>
        }
      />

      <div className="mt-10 grid md:grid-cols-3 gap-4 lg:gap-5">
        {features.map((feature, index) => (
          <Link key={index} href={feature.href} className="group">
            <Card className="h-full overflow-hidden" hover>
              {/* Screenshot - hidden on mobile for 2nd and 3rd cards to reduce repetition */}
              <div
                className={`relative aspect-[16/10] overflow-hidden border-b border-white/[0.04] ${
                  index > 0 ? "hidden md:block" : ""
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-dark-100 mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-dark-500 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>

                {/* Proof point */}
                <div className="flex items-center gap-1.5 text-xs text-primary/80 mb-4">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature.proof}
                </div>

                <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  Learn more
                  <svg
                    className="ml-1.5 w-3.5 h-3.5"
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
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Case Study - Anchor Proof */}
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

              <blockquote className="text-base md:text-lg text-dark-300 leading-relaxed mb-3 border-l-2 border-primary/30 pl-4">
                &ldquo;wibipOS is truly the &lsquo;Red Hat&rsquo; of our network
                infrastructure.&rdquo;
              </blockquote>
              <p className="text-sm text-dark-400 mb-3">
                <span className="text-dark-100 font-medium">364 schools</span>{" "}
                and{" "}
                <span className="text-dark-100 font-medium">3,150 APs</span> in
                90 days. Scaling to 1,000 schools across 6 vendors.
              </p>
              <p className="text-xs text-dark-500 mb-5">
                MsTECH proved enterprise scale. Your 30-day journey starts
                simpler.
              </p>

              <div className="flex items-center gap-4 mb-5">
                {[
                  { val: "364", label: "Schools" },
                  { val: "90", label: "Days" },
                  { val: "6", label: "Vendors" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center px-4 py-2.5 bg-dark-800/40 rounded-lg border border-white/[0.04]"
                  >
                    <div className="text-xl font-semibold text-primary">
                      {s.val}
                    </div>
                    <div className="text-[10px] text-dark-500 uppercase tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="secondary" href="/case-studies/jamaica">
                Read Case Study
                <svg
                  className="ml-1.5 w-3.5 h-3.5"
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

        {/* Total Proof Bar */}
        <div className="mt-6 p-4 rounded-xl bg-dark-800/30 border border-white/[0.04]">
          <p className="text-center text-sm text-dark-400">
            <span className="text-dark-200 font-medium">Proven at scale:</span>{" "}
            <span className="text-primary">5,000</span> APs •{" "}
            <span className="text-primary">2,000</span> Switches •{" "}
            <span className="text-primary">400</span> Schools •{" "}
            Nationwide • Production—Not a Pilot
          </p>
        </div>
      </div>
    </Section>
  );
}

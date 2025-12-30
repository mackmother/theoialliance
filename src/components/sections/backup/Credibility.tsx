import Image from "next/image";
import { Section, SectionHeading, LogoStrip } from "@/components/ui";

const telcoLogos = [
  { name: "AT&T", url: "https://framerusercontent.com/images/vypGMHttHsFpjWtzjxaRzwnTkMg.png" },
  { name: "Cox", url: "https://framerusercontent.com/images/osgjsQhWnA2VfHePWYujw3qCKE.png" },
  { name: "Frontier", url: "https://framerusercontent.com/images/J6EQ6l0mfj8KgZOTvBadrIH2R08.png" },
  { name: "Optimum", url: "https://framerusercontent.com/images/HDqgG3s2d7lIsawnvoC41lddsE.png" },
  { name: "Mediacom", url: "https://framerusercontent.com/images/ZkfjAdHYnavH2Sh3c08ipK9iA.png" },
  { name: "Verizon", url: "https://framerusercontent.com/images/PdMqdEOAhM8eNJGnVODgyMX1zwE.png" },
];

const credibilityStats = [
  { value: "10+", label: "Telcos Enabled" },
  { value: "100+", label: "Use Cases Developed" },
  { value: "10,000+", label: "Locations Served" },
  { value: "10", label: "Years in Production" },
];

export function Credibility() {
  return (
    <Section id="credibility" background="gradient">
      <SectionHeading
        title={
          <>
            <span className="text-primary">Battle-Tested</span> at Carrier Scale
          </>
        }
      />

      {/* Stats Bar */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-0 py-8 border-y border-white/[0.06]">
        {credibilityStats.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            <div className="text-center px-4 md:px-8">
              <div className="text-2xl md:text-3xl font-bold text-dark-50">
                {stat.value}
              </div>
              <div className="text-sm text-dark-500">{stat.label}</div>
            </div>
            {index < credibilityStats.length - 1 && (
              <div className="hidden md:block w-px h-10 bg-dark-700" />
            )}
          </div>
        ))}
      </div>

      {/* Closing line */}
      <p className="mt-8 text-center text-lg text-dark-300">
        Built behind the scenes for Tier 1 carriers. Now available to you.
      </p>

      {/* Telco logos */}
      <div className="mt-12">
        <LogoStrip logos={telcoLogos} grayscale={false} />
      </div>

      {/* Disclaimer */}
      <div className="mt-12 max-w-3xl mx-auto">
        <p className="text-xs text-dark-500 leading-relaxed text-center">
          From 2016 to 2024, CommScope acted as a reseller of wibipOS solutions.
          This arrangement has ended, and WiBUZ and CommScope/Ruckus currently
          have no ongoing co-development or co-branding relationship. Our only
          affiliation is that WiBUZ remains a registered Ruckus reseller
          exclusively in the CALA region. All references to past collaborations
          are factual and do not imply any new joint venture or expanded
          partnership.
        </p>
      </div>

      {/* Testimonial */}
      <div className="mt-16 max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="https://framerusercontent.com/images/mc25cAk8bvdtmGo6hxJhTGJjSo.png"
            alt="Jay Bestermann testimonial - Managed Services Executive"
            width={400}
            height={500}
            className="w-full h-auto"
            loading="lazy"
            unoptimized
          />
        </div>
      </div>
    </Section>
  );
}

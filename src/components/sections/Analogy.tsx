import { Section, SectionHeading, Button } from "@/components/ui";
import Image from "next/image";

const comparisonData = [
  {
    aspect: "Time to Deploy",
    buildYourself: "6-12 months",
    wibipOS: "15 min deploy, new tech stack in 30 days",
  },
  {
    aspect: "Investment",
    buildYourself: "~$500K / yr",
    wibipOS: "Fraction of the cost",
  },
  {
    aspect: "Maintenance",
    buildYourself: "Ongoing burden",
    wibipOS: "We handle updates",
  },
  {
    aspect: "Expertise",
    buildYourself: "Limited to your team",
    wibipOS: "350K dev hours behind you",
  },
];

export function Analogy() {
  return (
    <Section id="analogy" background="dots">
      <SectionHeading
        title={
          <>
            <span className="text-primary">Why Build</span> What Already Exists?
          </>
        }
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column - text */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-dark-200 leading-relaxed">
              <span className="text-dark-50 font-semibold">Red Hat</span> made
              Linux enterprise-ready.
            </p>
            <p className="text-xl md:text-2xl text-dark-200 leading-relaxed">
              <span className="text-dark-50 font-semibold">Android</span> unified
              phone hardware.
            </p>
            <p className="text-xl md:text-2xl text-dark-200 leading-relaxed">
              <span className="gradient-text font-semibold">wibipOS</span> does
              the same for OpenWiFi.
            </p>
          </div>

          <p className="text-dark-400 leading-relaxed">
            OpenWiFi is powerful, but it&apos;s not production-ready out of the
            box. wibipOS adds the enterprise features, multi-vendor support, and
            ongoing updates that MSPs need to deploy with confidence.
          </p>

          <Button variant="secondary" href="/features/multi-vendor">
            See How It Works
            <svg
              className="ml-2 w-4 h-4"
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

        {/* Right column - comparison table */}
        <div className="bg-dark-900 border border-dark-800 rounded-xl overflow-hidden shadow-xl shadow-dark-950/50">
          {/* Header */}
          <div className="grid grid-cols-3 bg-dark-850 border-b border-dark-700">
            <div className="p-4 text-sm font-medium text-dark-400"></div>
            <div className="p-4 text-sm font-medium text-dark-500 text-center border-l border-dark-700">
              Build It Yourself
            </div>
            <div className="p-4 text-sm font-semibold text-primary text-center border-l border-dark-700 bg-brand-500/10">
              Use wibipOS ✓
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index !== comparisonData.length - 1
                  ? "border-b border-dark-800"
                  : ""
              }`}
            >
              <div className="p-4 text-sm font-medium text-dark-200">
                {row.aspect}
              </div>
              <div className="p-4 text-sm text-dark-500 text-center border-l border-dark-800">
                {row.buildYourself}
              </div>
              <div className="p-4 text-sm text-dark-50 text-center border-l border-dark-800 bg-brand-500/5 font-medium flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{row.wibipOS}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proof - Pre-integrated Ecosystem */}
      <div className="mt-16">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white">
          <Image
            src="/images/screenshots/BYOTS.png"
            alt="wibipOS Pre-integrated Ecosystem showing BYOTS (Bring Your Own Tech Stack) with partners including Ruckus, NetExperience, Actiontec, Edgecore, CyberTAN, Fortinet, and FreeRADIUS"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
        <p className="mt-4 text-center text-dark-400 text-sm">
          Pre-integrated ecosystem: Deploy in 15 minutes with supported vendors, or bring your own tech stack in 30 days
        </p>
      </div>
    </Section>
  );
}

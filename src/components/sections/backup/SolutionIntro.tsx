import { Section, SectionHeading, YouTubeEmbed } from "@/components/ui";

const valuePills = [
  { text: "Multi-Vendor from Day One" },
  { text: "White-Label Ready" },
  { text: "Enterprise Support Included" },
];

export function SolutionIntro() {
  return (
    <Section id="solution" spacing="md" divider>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={
            <>
              See It In Action:{" "}
              <span className="text-brand-400">2 Minutes</span>
            </>
          }
          subtitle="Watch how MSPs manage Ruckus, Edgecore, and OpenWiFi from one interface—with their own branding."
        />

        {/* Video embed with feature preview */}
        <div className="mt-10 relative">
          {/* What you'll see - before they click */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-dark-500">
            <span>In this demo:</span>
            <span className="text-dark-400">Multi-vendor dashboard</span>
            <span className="hidden sm:inline text-dark-600">•</span>
            <span className="text-dark-400">White-label branding</span>
            <span className="hidden sm:inline text-dark-600">•</span>
            <span className="text-dark-400">Live device provisioning</span>
          </div>

          <div className="img-container-lg img-shine">
            <YouTubeEmbed
              videoId="_VOPMAHmEcQ"
              title="wibipOS Unveiled"
            />
          </div>
        </div>

        {/* Value pills - minimal */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {valuePills.map((pill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm text-dark-400 border border-white/[0.06] rounded-full bg-dark-900/50"
            >
              <span className="w-1 h-1 rounded-full bg-brand-400" />
              {pill.text}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

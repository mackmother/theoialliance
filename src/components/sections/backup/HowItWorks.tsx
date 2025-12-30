import { Section, SectionHeading, YouTubeEmbed } from "@/components/ui";

export function HowItWorks() {
  return (
    <Section id="how-it-works" spacing="md" divider>
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

        {/* Downloadable Architecture - Magnetic Content */}
        <div className="mt-10 p-6 rounded-xl bg-dark-800/40 border border-white/[0.04]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-dark-200 mb-1">
                Want to share this with your team?
              </p>
              <p className="text-xs text-dark-500">
                Download the Multi-Vendor Orchestration Architecture—shows how legacy gear + OpenWiFi unify under one control plane.
              </p>
            </div>
            <a
              href="/resources/orchestration-architecture"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-brand-400 border border-brand-400/30 rounded-lg bg-brand-400/5 hover:bg-brand-400/10 hover:border-brand-400/50 transition-all whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Architecture PDF
            </a>
          </div>
        </div>

        {/* Value pills - what's included */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            "Multi-Vendor from Day One",
            "White-Label Ready",
            "Enterprise Support Included",
          ].map((pill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm text-dark-400 border border-white/[0.06] rounded-full bg-dark-900/50"
            >
              <span className="w-1 h-1 rounded-full bg-brand-400" />
              {pill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

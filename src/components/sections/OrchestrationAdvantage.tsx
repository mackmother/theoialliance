import { Section, SectionHeading } from "@/components/ui";
import Image from "next/image";

export function OrchestrationAdvantage() {
  return (
    <Section id="orchestration" background="raised" spacing="md" divider>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={
            <>
              Your Gear. <span className="text-brand-400">Our Platform.</span>
            </>
          }
          subtitle="Already have Ruckus, Fortinet, or Cisco? Keep it. Add OpenWiFi when you're ready. One dashboard manages everything."
        />

        <div className="mt-10">
          <div className="img-container-lg">
            <Image
              src="/images/screenshots/fragmented edge.png"
              alt="wibipOS unified orchestration diagram"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Callouts explaining the diagram */}
          <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4 text-center">
            <div className="p-4 rounded-xl bg-dark-800/40 border border-white/[0.04]">
              <p className="text-[10px] md:text-xs text-dark-500 uppercase tracking-wider mb-1">Your Legacy</p>
              <p className="text-sm md:text-base font-medium text-dark-200">Ruckus, Fortinet, Cisco...</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-400/10 border border-brand-400/30 shadow-lg shadow-brand-400/5">
              <p className="text-[10px] md:text-xs text-brand-400 uppercase tracking-wider mb-1">wibipOS</p>
              <p className="text-sm md:text-base font-semibold text-dark-100">Single control plane</p>
            </div>
            <div className="p-4 rounded-xl bg-dark-800/40 border border-white/[0.04]">
              <p className="text-[10px] md:text-xs text-dark-500 uppercase tracking-wider mb-1">+ OpenWiFi</p>
              <p className="text-sm md:text-base font-medium text-dark-200">When you&apos;re ready</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

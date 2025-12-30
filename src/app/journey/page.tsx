import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { Section } from "@/components/ui";
import { JourneyTabs, JourneyCTA } from "@/components/journey";

export const metadata = {
  title: "Your 30-Day Journey | wibipOS",
  description:
    "From kit arrival to first revenue in 30 days. See the complete MSP onboarding journey with wibipOS—every step mapped, every milestone defined.",
};

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero - Continues the Homepage Promise */}
        <section className="relative pt-12 pb-8 bg-dark-950 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            {/* Continuity from homepage - the alliance context */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 opacity-70">
              <Image
                src="https://be-net.com/wp-content/uploads/2024/06/Edgecore-logo.png"
                alt="Edgecore"
                width={80}
                height={24}
                className="h-5 w-auto object-contain"
                unoptimized
              />
              <span className="text-dark-600">+</span>
              <Image
                src="https://www.netexperience.com/wp-content/uploads/2025/08/4060W.png"
                alt="NetExperience"
                width={100}
                height={24}
                className="h-5 w-auto object-contain"
                unoptimized
              />
              <span className="text-dark-600">+</span>
              <Image
                src="/images/logos/wibipOS - White.svg"
                alt="wibipOS"
                width={60}
                height={24}
                className="h-5 w-auto object-contain"
              />
            </div>

            {/* The headline - connects "OpenLAN is Here" to "Here's your path" */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-4" style={{ letterSpacing: "-0.02em" }}>
              Unbox. Deploy.{" "}
              <span className="text-primary">Bill.</span>
            </h1>

            <p className="text-base md:text-lg text-dark-300 max-w-2xl mx-auto">
              The Open Infrastructure Alliance mapped your exact path from trial kit to first revenue.
              <span className="text-primary font-medium">Five phases. 30 days.</span> You&apos;ll never feel stuck.
            </p>
          </div>
        </section>

        {/* Journey Phases - Flows directly from hero */}
        <Section id="phases" background="default" spacing="sm">
          <div className="max-w-5xl mx-auto">
            <JourneyTabs />
          </div>
        </Section>

        {/* CTA - The Strong Close */}
        <JourneyCTA />
      </main>
      <Footer />
    </>
  );
}

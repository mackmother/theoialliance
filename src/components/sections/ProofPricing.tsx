import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";

// The Transformation Story - Jamaica Case Study
export function ProofPricing() {
  return (
    <Section id="proof" background="default" spacing="lg" divider>
      <div className="max-w-5xl mx-auto">
        {/* Header - The Challenge */}
        <div className="text-center mb-8">
          <p className="text-dark-400 text-sm mb-3 tracking-wide">
            &ldquo;Not production ready.&rdquo; &nbsp;•&nbsp; &ldquo;Needs a big team.&rdquo; &nbsp;•&nbsp; &ldquo;Too complex.&rdquo;
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-50 mb-2" style={{ letterSpacing: "-0.02em" }}>
            They Said It Couldn&apos;t Be Done.
          </h2>
          <p className="text-brand-400 text-lg font-medium">We proved them wrong.</p>
        </div>

        {/* Hero Image - The Transformation Timeline */}
        <div className="relative mb-8">
          <div className="img-container img-shine rounded-2xl overflow-hidden">
            <Image
              src="/images/screenshots/Jamaica Rise to the Occassion.png"
              alt="MsTECH Jamaica transformation: From 5-person team with zero WiFi experience to managing 1,000 schools nationwide in 90 days"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* What This Means - Jargon Decoder */}
        <div className="mb-8 p-5 rounded-xl bg-dark-800/30 border border-white/[0.04]">
          <div className="flex items-center gap-2 justify-center mb-4">
            <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p className="text-dark-300 text-sm font-medium">What makes this possible?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-brand-400 font-semibold text-sm mb-1">LIVE SDK Engineers</p>
              <p className="text-dark-400 text-xs">Your R&D team on retainer. Elite engineers building your customizations—without the $150K salaries.</p>
            </div>
            <div className="text-center">
              <p className="text-brand-400 font-semibold text-sm mb-1">Dynamic Roadmap</p>
              <p className="text-dark-400 text-xs">Your features, your timeline. We build what you need, when you need it—not what fits our release cycle.</p>
            </div>
            <div className="text-center">
              <p className="text-brand-400 font-semibold text-sm mb-1">BYOTS</p>
              <p className="text-dark-400 text-xs">Bring Your Own Tech Stack. Your legacy gear isn&apos;t debt—we integrate it and make it an asset.</p>
            </div>
          </div>
        </div>

        {/* The Question + Attribution */}
        <div className="pt-6 border-t border-white/[0.04]">
          <p className="text-center text-xl md:text-2xl text-dark-200 mb-6" style={{ letterSpacing: "-0.01em" }}>
            If a 5-person team did this, <span className="text-brand-400 font-semibold">what could yours do?</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Julian Attribution */}
            <div className="flex items-center gap-3">
              <Image
                src="https://framerusercontent.com/images/NY7LruTfyfFyY8fJgLfPgfckGgo.png"
                alt="Julian Edwards"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-400/30"
                unoptimized
              />
              <div className="text-left">
                <div className="text-dark-100 font-medium">Julian Edwards</div>
                <div className="text-dark-400 text-sm">Head of Operations, MsTECH Jamaica</div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/case-studies/jamaica"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-brand-400 border border-brand-400/30 rounded-lg bg-brand-400/5 hover:bg-brand-400/10 hover:border-brand-400/50 transition-all"
            >
              Read the full case study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </Section>
  );
}

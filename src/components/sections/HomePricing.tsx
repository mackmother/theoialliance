import Link from "next/link";
import { Section } from "@/components/ui";

export function HomePricing() {
  return (
    <Section id="pricing" background="default" spacing="md" divider>
      <div className="max-w-4xl mx-auto">
        {/* Continuation from Proof Section */}
        <div className="text-center mb-8">
          <p className="text-dark-400 text-sm mb-3">
            So what does partnership like this cost?
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-dark-50 mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            We Price the Partnership.{" "}
            <span className="text-primary">Not the Seat.</span>
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto">
            Just like we adapt technically to your stack, we adapt commercially to your situation.
            No rigid tiers. No surprise overages. One conversation.
          </p>
        </div>

        {/* What Shapes Your Investment */}
        <div className="mb-8 p-6 rounded-xl bg-dark-800/30 border border-white/[0.04]">
          <p className="text-center text-dark-400 text-xs uppercase tracking-wider mb-5">
            What shapes your investment
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-dark-700/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <p className="text-dark-200 font-medium text-sm mb-1">Your Scale</p>
              <p className="text-dark-400 text-xs">Devices under management, locations, growth trajectory</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-dark-700/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-dark-200 font-medium text-sm mb-1">Your Integrations</p>
              <p className="text-dark-400 text-xs">Existing vendors, billing systems, custom workflows</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-dark-700/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-dark-200 font-medium text-sm mb-1">Your Ambition</p>
              <p className="text-dark-400 text-xs">R&D hours, custom features, white-glove support</p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="p-8 bg-dark-800 border border-primary/30 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-dark-50 mb-2">
              Every Partnership Starts with a Conversation
            </h3>
            <p className="text-dark-400 text-sm mb-6 max-w-lg mx-auto">
              Tell us where you are. Tell us where you want to go.
              We&apos;ll build a path that makes sense for both of us.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/journey"
                className="inline-flex items-center justify-center py-2.5 px-6 bg-primary text-dark-950 font-semibold rounded-lg hover:bg-brand-300 transition-colors shadow-lg shadow-primary/20 text-sm"
              >
                See the 30-Day Journey
              </Link>
              <Link
                href="/demo#schedule"
                className="inline-flex items-center justify-center py-2.5 px-6 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors text-sm"
              >
                Schedule a Call
              </Link>
            </div>

            <p className="text-dark-300 text-xs mt-4">
              Same flexibility in pricing as in engineering. That&apos;s the WiBUZ way.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Button, Container } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-lg h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-500/8 rounded-full blur-[80px]" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* CTA Card */}
          <div className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-dark-900/80 to-dark-950 p-8 md:p-12 overflow-hidden text-center">
            {/* The killer headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-50 tracking-tight mb-4 leading-tight">
              Order Today. Trial Next Week.{" "}
              <span className="text-primary">Deploy This Month.</span>{" "}
              Profit This Quarter.
            </h2>

            <p className="text-dark-400 mb-6 max-w-xl mx-auto">
              Your Turn-Key Kit ships with everything you need—production-ready, not a crippled demo.
            </p>

            {/* Turn-Key Kit Trifecta */}
            <div className="grid grid-cols-3 gap-3 mb-6 max-w-lg mx-auto">
              <div className="p-3 rounded-lg bg-dark-800/50 border border-white/[0.04]">
                <div className="text-primary text-xs font-semibold mb-1">Hardware</div>
                <div className="text-xs text-dark-300">OpenLAN AP + Switch</div>
              </div>
              <div className="p-3 rounded-lg bg-dark-800/50 border border-white/[0.04]">
                <div className="text-primary text-xs font-semibold mb-1">Controller</div>
                <div className="text-xs text-dark-300">Cloud. Zero on-prem.</div>
              </div>
              <div className="p-3 rounded-lg bg-dark-800/50 border border-white/[0.04]">
                <div className="text-primary text-xs font-semibold mb-1">Your Portal</div>
                <div className="text-xs text-dark-300">Your brand. Your logo.</div>
              </div>
            </div>

            {/* Benefits - tight */}
            <ul className="text-sm text-dark-400 mb-8 space-y-1.5 inline-block text-left">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No integration. No professional services. No waiting.
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Production-ready—bill customers from day one
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                40% better margins—zero vendor lock-in
              </li>
            </ul>

            {/* CTAs - clear hierarchy */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="primary" size="lg" href="/journey">
                Get Your Turn-Key Kit
              </Button>
              <Button variant="secondary" href="/journey">
                See the 30-Day Journey
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

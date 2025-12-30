import { Button, Container } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-500/8 rounded-full blur-[80px]" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* CTA Card */}
          <div className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-dark-900/80 to-dark-950 p-8 md:p-12 overflow-hidden text-center">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

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
                <div className="text-[10px] text-dark-500">OpenLAN AP + Switch</div>
              </div>
              <div className="p-3 rounded-lg bg-dark-800/50 border border-white/[0.04]">
                <div className="text-primary text-xs font-semibold mb-1">Controller</div>
                <div className="text-[10px] text-dark-500">Cloud. Zero on-prem.</div>
              </div>
              <div className="p-3 rounded-lg bg-dark-800/50 border border-white/[0.04]">
                <div className="text-primary text-xs font-semibold mb-1">Your Portal</div>
                <div className="text-[10px] text-dark-500">Your brand. Your logo.</div>
              </div>
            </div>

            {/* Timeline journey */}
            <div className="flex items-center justify-center gap-2 text-xs text-dark-500 mb-6">
              <span className="text-dark-300 font-medium">Turn-Key Kit</span>
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>First Deployment</span>
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>First Invoice</span>
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-green-400 font-medium">Profit</span>
            </div>

            <ul className="text-sm text-dark-500 mb-8 space-y-2 inline-block text-left">
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Button variant="primary" href="/demo">
                Get Your Turn-Key Kit
              </Button>
              <Button variant="ghost" href="/demo#schedule">
                Talk to an Engineer
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/journey"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-brand-300 transition-colors"
              >
                See the full Trial-to-Profit journey
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-dark-700">|</span>
              <a
                href="/resources/msp-scaling-playbook"
                className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-dark-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Download: MSP Scaling Playbook
              </a>
            </div>
          </div>

          {/* Not ready? Lead magnet for cold visitors */}
          <div className="mt-8 text-center">
            <p className="text-xs text-dark-600 mb-3">Not ready to start? Get the data first.</p>
            <a
              href="/resources/msp-wifi-survey"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-dark-400 border border-white/[0.06] rounded-full bg-dark-900/50 hover:border-primary/30 hover:text-dark-300 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              2024 MSP Wi-Fi Survey: The State of Multi-Vendor
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

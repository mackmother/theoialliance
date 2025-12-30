import { Button, Container } from "@/components/ui";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-400/10 rounded-full blur-[100px]" />

      <Container className="relative z-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Dog whistle */}
          <p className="text-sm md:text-base text-dark-400 mb-4">
            For MSPs tired of{" "}
            <span className="text-dark-200">
              vendor lock-in, premium pricing, and rigid roadmaps
            </span>
          </p>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Say YES to{" "}
            <span className="gradient-text">Every MDU</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-dark-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            wibipOS unifies legacy gear and OpenWiFi into one brandable
            dashboard—so you can win deals you used to lose.
          </p>

          {/* Journey flow */}
          <div className="flex items-center justify-center gap-2 text-sm text-dark-400 mb-8">
            <span className="text-dark-200 font-medium">Unbox</span>
            <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Connect</span>
            <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Deploy</span>
            <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-brand-400 font-medium">Bill Your Customer</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="primary" size="lg" href="/demo">
              Get Your Turn-Key Kit
            </Button>
            <Button variant="secondary" href="#how-it-works">
              Watch 2-Min Demo
            </Button>
          </div>

          {/* Journey map - constrained to headline width */}
          <div className="relative mt-8 max-w-2xl mx-auto">
            <div className="img-container img-shine">
              <Image
                src="/images/screenshots/TrialToProfit01.png"
                alt="30-Day Trial-to-Profit Journey"
                width={800}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12">
            <p className="text-[10px] text-dark-500 uppercase tracking-wider mb-4">
              Trusted by Tier 1 Telcos, MSPs & Government
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-60">
              {[
                {
                  name: "AT&T",
                  url: "https://framerusercontent.com/images/vypGMHttHsFpjWtzjxaRzwnTkMg.png",
                },
                {
                  name: "Verizon",
                  url: "https://framerusercontent.com/images/PdMqdEOAhM8eNJGnVODgyMX1zwE.png",
                },
                {
                  name: "Frontier",
                  url: "https://framerusercontent.com/images/J6EQ6l0mfj8KgZOTvBadrIH2R08.png",
                },
                {
                  name: "Cox",
                  url: "https://framerusercontent.com/images/osgjsQhWnA2VfHePWYujw3qCKE.png",
                },
              ].map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.url}
                  alt={logo.name}
                  width={80}
                  height={24}
                  className="h-5 md:h-6 w-auto object-contain grayscale brightness-200"
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Button, Container } from "@/components/ui";
import Image from "next/image";

export function AllianceHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-400/10 rounded-full blur-[100px]" />

      <Container className="relative z-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alliance Announcement Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 mb-6">
            <span className="text-brand-400 text-sm font-medium">INTRODUCING</span>
            <span className="text-dark-200 text-sm">
              The Open Infrastructure Alliance
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Enterprise-Ready
            <br />
            <span className="gradient-text">OpenLAN is Here</span>
          </h1>

          {/* Alliance Partner Logos - moved up for immediate credibility */}
          <div className="mb-6">
            <p className="text-dark-500 text-xs uppercase tracking-wider mb-4">Launch Partners</p>
            <div className="flex items-center justify-center gap-6 md:gap-10">
              {/* Edgecore */}
              <div className="flex flex-col items-center gap-1">
                <Image
                  src="https://be-net.com/wp-content/uploads/2024/06/Edgecore-logo.png"
                  alt="Edgecore"
                  width={100}
                  height={30}
                  className="h-6 md:h-8 w-auto object-contain"
                  unoptimized
                />
                <span className="text-xs text-dark-300">Hardware</span>
              </div>

              <span className="text-dark-400 text-xl">+</span>

              {/* NetExperience */}
              <div className="flex flex-col items-center gap-1">
                <Image
                  src="https://www.netexperience.com/wp-content/uploads/2025/08/4060W.png"
                  alt="NetExperience"
                  width={120}
                  height={30}
                  className="h-6 md:h-8 w-auto object-contain"
                  unoptimized
                />
                <span className="text-xs text-dark-300">Cloud Controller</span>
              </div>

              <span className="text-dark-400 text-xl">+</span>

              {/* WiBUZ */}
              <div className="flex flex-col items-center gap-1">
                <Image
                  src="https://framerusercontent.com/images/HXqaHEddra3gpKSB3iGCA8Bu90w.png"
                  alt="WiBUZ"
                  width={80}
                  height={30}
                  className="h-6 md:h-8 w-auto object-contain"
                  unoptimized
                />
                <span className="text-xs text-dark-300">Orchestration</span>
              </div>
            </div>
          </div>

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="primary" size="lg" href="/journey">
              See the 30-Day Journey
            </Button>
            <Button variant="secondary" href="#how-it-works">
              Watch 2-Min Demo
            </Button>
          </div>

          {/* Journey map - constrained to headline width */}
          <div className="relative max-w-2xl mx-auto">
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
            <p className="text-xs text-dark-300 uppercase tracking-wider mb-4">
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

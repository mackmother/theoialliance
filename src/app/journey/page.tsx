import { Navbar, Footer } from "@/components/layout";
import { JourneyCarousel, JourneyCTA } from "@/components/journey";

export const metadata = {
  title: "Your 30-Day Journey | wibipOS",
  description:
    "From kit arrival to first revenue in 30 days. See the complete MSP onboarding journey with wibipOS—every step mapped, every milestone defined.",
};

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero - Headline + Journey Image */}
        <section className="relative pt-32 pb-4 overflow-hidden">
          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6 text-center">

            {/* Headline */}
            <h1
              className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white mb-6 leading-[1.05]"
              style={{
                letterSpacing: '-0.025em',
                textShadow: '0 2px 30px rgba(0,0,0,0.5)',
              }}
            >
              Trial to Revenue in{' '}
              <span className="relative inline-block">
                30 Days
                {/* Curved Underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-4"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="daysSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,14 Q100,2 200,14"
                    fill="none"
                    stroke="url(#daysSwoosh)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[#8B8B9A] text-base md:text-lg font-light">
              Your 5-step journey with an Alliance-assigned single point of contact.
              <br />
              <span className="text-white/80 font-medium">Dedicated to your success.</span>
            </p>
          </div>
        </section>

        {/* Journey Phases - Glass Card Carousel */}
        <section className="relative py-8 overflow-hidden">
          <JourneyCarousel />
        </section>

        {/* CTA - The Strong Close */}
        <JourneyCTA />
      </main>
      <Footer />
    </>
  );
}

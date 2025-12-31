import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeading, Card, Button, ZoomableImage } from "@/components/ui";

export const metadata = {
  title: "Start Trial-to-Profit | wibipOS",
  description:
    "Start your 30-day sandbox or schedule a guided demo. No credit card required. Full-featured access.",
};

const sandboxFeatures = [
  "Full wibipOS dashboard access",
  "Multi-vendor device management",
  "API and integration testing",
  "White-label branding options",
  "Live support during trial",
];

const demoHighlights = [
  "Live multi-vendor monitoring in action",
  "Zero-touch provisioning walkthrough",
  "Automated troubleshooting demonstration",
  "Your questions answered by a product expert",
];

const faqs = [
  {
    question: "What's included in the sandbox?",
    answer:
      "Full-featured access to wibipOS including the unified dashboard, multi-vendor management, API access, and white-label options. You can test with simulated devices or connect your own hardware.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Ruckus MSPs can be set up in 15 minutes. Other hardware vendors typically take less than a day with our LiveSDK team's support.",
  },
  {
    question: "Do I need my own hardware?",
    answer:
      "No. You can explore the platform with simulated devices. When you're ready to test with real hardware, we support Ruckus, Edgecore, NetExperience, Actiontec, and Fortinet out of the box.",
  },
  {
    question: "What happens after 30 days?",
    answer:
      "We'll discuss your experience and, if wibipOS is a fit, transition you to the right partnership tier. No pressure—if it's not right for you, no hard feelings.",
  },
];

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-16 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
              Stop Juggling 3 Vendor Dashboards
            </h1>
            <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto mb-4">
              Book 30 minutes. Leave with a plan to eliminate vendor chaos and manage every AP from one screen.
            </p>
            <div className="flex items-center justify-center gap-2 text-dark-500">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">
                Trusted by 200+ MSPs & Telcos
              </span>
            </div>
          </div>
        </Section>

        {/* Two options */}
        <Section>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sandbox option */}
            <Card className="p-8 flex flex-col" gradient>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-50">
                    Start Trial-to-Profit
                  </h2>
                  <p className="text-sm text-dark-400">
                    Self-service, start in minutes
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {sandboxFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-dark-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Prominent callout */}
              <div className="mb-6 p-4 bg-brand-500/10 border border-brand-500/20 rounded-lg">
                <p className="text-brand-300 font-semibold text-center">
                  Go live in 15 minutes
                </p>
              </div>

              <div className="space-y-4">
                <Button variant="primary" className="w-full" size="lg">
                  Start Trial-to-Profit
                </Button>
                <p className="text-center text-sm text-dark-500">
                  No credit card required
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-700">
                <p className="text-xs text-dark-500 italic text-center">
                  &ldquo;The sandbox convinced us in day one.&rdquo;
                </p>
                <p className="text-xs text-dark-600 text-center mt-1">
                  — Operations Director
                </p>
              </div>
            </Card>

            {/* Demo option */}
            <Card className="p-8 flex flex-col" id="schedule">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center text-dark-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark-50">
                    Schedule a Demo
                  </h2>
                  <p className="text-sm text-dark-400">30-minute personalized demo</p>
                </div>
              </div>

              {/* What You'll See */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-dark-300 mb-3 uppercase tracking-wide">
                  What You&apos;ll See:
                </h3>
                <ul className="space-y-2">
                  {demoHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-dark-400 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placeholder for Calendly embed */}
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-8 text-center mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-dark-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-dark-500 text-sm">
                  Calendly scheduling widget will appear here
                </p>
              </div>

              <Button variant="secondary" className="w-full" size="lg">
                View Available Times
              </Button>

              {/* Trust signal below calendar */}
              <p className="text-center text-xs text-dark-500 mt-4">
                Your questions answered. Zero pressure.
              </p>
            </Card>
          </div>
        </Section>

        {/* Why MSPs Choose the Demo - Testimonial Section */}
        <Section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-50 text-center mb-12">
              Why MSPs Choose the Demo
            </h2>
            <Card className="p-8 md:p-10 relative">
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <blockquote className="text-lg text-dark-300 mb-6 mt-4">
                I expected a sales pitch. Instead, they showed me exactly how
                wibipOS would handle our Ruckus + Edgecore mix. We signed up the
                same week.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-brand-600 flex items-center justify-center text-dark-950 font-bold text-lg">
                  CM
                </div>
                <div>
                  <p className="font-semibold text-dark-100">Carlos Mendez</p>
                  <p className="text-sm text-dark-500">
                    CTO at Pacific Networks
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Your 30-Day Journey Section - Infographic */}
        <Section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-3" style={{ letterSpacing: "-0.02em" }}>
                Your 30-Day Journey to First Revenue
              </h2>
              <p className="text-lg text-dark-400 max-w-2xl mx-auto">
                From kit arrival to first invoice—we&apos;ve mapped every step.
              </p>
            </div>

            {/* Journey Infographic */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] p-2 md:p-4">
              <ZoomableImage
                src="/images/screenshots/TrialToProfit01.png"
                alt="From Trial Kit to Profit: Your 30-Day Onboarding Journey showing 5 phases - Commit, Configure, Connect, Commercialize, and Champion"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Download Resources */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/images/journey/MSP_Onboarding_Journey_Map_Edgecore_wibipOS_Trial_Kit.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3 bg-brand-500/10 border border-brand-500/20 rounded-lg hover:bg-brand-500/20 transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-semibold text-dark-100 group-hover:text-primary transition-colors">
                    Download Full Journey Map
                  </p>
                  <p className="text-xs text-dark-500">PDF presentation</p>
                </div>
              </a>

              <a
                href="/journey"
                className="inline-flex items-center gap-2 px-6 py-3 text-primary hover:text-brand-300 transition-colors"
              >
                View detailed journey breakdown
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Section>

        {/* FAQs */}
        <Section background="dots">
          <SectionHeading title="Common Questions" />
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-dark-100 mb-3">
                  {faq.question}
                </h3>
                <p className="text-dark-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact alternative */}
        <Section className="pb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-50 mb-4">
              Prefer to Talk First?
            </h2>
            <p className="text-dark-400 mb-6">
              Have questions before you commit to a sandbox or demo? Reach out
              and we&apos;ll get back to you within 24 hours.
            </p>
            <Button variant="ghost" size="lg">
              Contact Us
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

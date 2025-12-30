import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeading, Button, Card, PlaceholderImage } from "@/components/ui";

interface FeaturePageProps {
  headline: string;
  problem: string;
  solution: string;
  proofText: string;
  screenshotImage?: {
    url: string;
    alt: string;
  };
  testimonialImage?: {
    url: string;
    alt: string;
  };
  relatedFeatures: Array<{
    title: string;
    href: string;
  }>;
}

export function FeaturePageTemplate({
  headline,
  problem,
  solution,
  proofText,
  screenshotImage,
  testimonialImage,
  relatedFeatures,
}: FeaturePageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 tracking-tight mb-8">
              {headline}
            </h1>
          </div>
        </Section>

        {/* Problem */}
        <Section background="dots">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-50 mb-6">The Problem</h2>
            <p className="text-lg text-dark-300 leading-relaxed">{problem}</p>
          </div>
        </Section>

        {/* Solution */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark-50 mb-6">
                The wibipOS Solution
              </h2>
              <p className="text-lg text-dark-300 leading-relaxed">{solution}</p>
            </div>
{screenshotImage ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06]">
                <Image
                  src={screenshotImage.url}
                  alt={screenshotImage.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ) : (
              <PlaceholderImage
                width={600}
                height={400}
                label="Feature Screenshot"
                className="w-full"
              />
            )}
          </div>
        </Section>

        {/* Proof */}
        <Section background="gradient">
          <Card className="p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-50 mb-6">Proof</h2>
            <p className="text-lg text-dark-300 leading-relaxed">{proofText}</p>

            {testimonialImage && (
              <div className="mt-8 pt-8 border-t border-dark-700">
                <div className="relative overflow-hidden rounded-xl max-w-md mx-auto">
                  <Image
                    src={testimonialImage.url}
                    alt={testimonialImage.alt}
                    width={400}
                    height={500}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            )}
          </Card>
        </Section>

        {/* Related Features */}
        <Section>
          <SectionHeading title="Related Features" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {relatedFeatures.map((feature, index) => (
              <Card key={index} className="p-6" hover>
                <h3 className="text-lg font-semibold text-dark-100 mb-4">
                  {feature.title}
                </h3>
                <Button variant="ghost" href={feature.href} className="p-0">
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
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
              </Card>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="pb-32">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-6">
              Try This in the Sandbox
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/demo">
                Start Your 30-Day Sandbox
              </Button>
              <Button variant="secondary" size="lg" href="/demo#schedule">
                See a Demo
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

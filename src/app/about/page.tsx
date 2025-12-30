import { Navbar, Footer } from "@/components/layout";
import { Section, SectionHeading, Card } from "@/components/ui";

export const metadata = {
  title: "About WiBUZ | wibipOS",
  description:
    "10 years of building production-ready OpenWiFi. $8M invested. 350K dev hours. The story behind wibipOS.",
};

const milestones = [
  {
    year: "2014",
    title: "Founded",
    description:
      "WiBUZ started with a vision: make enterprise Wi-Fi management accessible without vendor lock-in.",
  },
  {
    year: "2016",
    title: "CommScope Partnership Begins",
    description:
      "Partnered with CommScope/Ruckus as a reseller, gaining access to major US telco deployments.",
  },
  {
    year: "2020",
    title: "10,000 Locations",
    description:
      "Reached 10,000+ managed locations across 10+ US telecom providers.",
  },
  {
    year: "2024",
    title: "Open MSP Platform Launch",
    description:
      "Transitioned from reseller model to open MSP platform. CommScope partnership concluded.",
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description:
      "Telecom Council Innovation Showcase 2025. Broadband Communities Technology Partner of the Year.",
  },
];

const stats = [
  { value: "10", label: "Years Building" },
  { value: "$8M", label: "Invested" },
  { value: "350K", label: "Dev Hours" },
  { value: "10+", label: "US Telcos Enabled" },
  { value: "10,000+", label: "Locations Managed" },
  { value: "6", label: "Vendor Integrations" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 tracking-tight mb-6">
              10 Years Building the Future of Wi-Fi Management
            </h1>
            <p className="text-xl text-dark-400">
              We spent a decade and $8M so you don&apos;t have to. Here&apos;s
              our story.
            </p>
          </div>
        </Section>

        {/* Stats */}
        <Section background="dots">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* The Vision */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-50 mb-6">The Vision</h2>
            <div className="prose prose-invert prose-lg">
              <p className="text-dark-300 leading-relaxed mb-6">
                Red Hat made Linux enterprise-ready. Android unified phone
                hardware. We built wibipOS to do the same for OpenWiFi.
              </p>
              <p className="text-dark-300 leading-relaxed mb-6">
                MSPs shouldn&apos;t have to choose between vendor lock-in and
                DIY chaos. They shouldn&apos;t need a team of Wi-Fi engineers to
                manage multiple hardware brands. And they shouldn&apos;t pay
                enterprise prices for basic multi-vendor support.
              </p>
              <p className="text-dark-300 leading-relaxed">
                wibipOS is the result of 350,000 development hours spent solving
                these problems. Production-ready OpenWiFi, wrapped in enterprise
                support, available to MSPs of all sizes.
              </p>
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section background="gradient">
          <SectionHeading title="Our Journey" />
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-primary font-bold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-grow pb-8 border-l border-dark-700 pl-6 relative">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-brand-500" />
                    <h3 className="text-lg font-semibold text-dark-100 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-dark-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Disclaimer */}
        <Section>
          <Card className="p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-dark-100 mb-4">
              A Note on Our History
            </h3>
            <p className="text-sm text-dark-400 leading-relaxed">
              From 2016 to 2024, CommScope acted as a reseller of wibipOS
              solutions. This arrangement has ended, and WiBUZ and
              CommScope/Ruckus currently have no ongoing co-development or
              co-branding relationship. Our only affiliation is that WiBUZ
              remains a registered Ruckus reseller exclusively in the CALA
              region. All references to past collaborations are factual and do
              not imply any new joint venture or expanded partnership.
            </p>
          </Card>
        </Section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar, Footer } from "@/components/layout";
import { Accordion } from "@/components/ui";
import Link from "next/link";

export const metadata = {
  title: "FAQ | wibipOS — Your Questions Answered",
  description:
    "Common questions about wibipOS, multi-vendor Wi-Fi management, pricing, integrations, and how we help MSPs win more deals.",
};

const lockInFaqs = [
  {
    question: "How is wibipOS different from RGNETs, RoamingIQ, or Cloud4Wi?",
    answer:
      "Those platforms often focus on captive portal features, analytics, or single-vertical workflows. wibipOS is a multi-service OS that unifies switching, firewalls, IoT, and advanced orchestration across multiple hardware vendors. We're not a portal layer—we're the control plane that lets you manage any vendor from one dashboard.",
  },
  {
    question: "Don't we end up locked in if wibipOS raises prices?",
    answer:
      "Your hardware remains yours. wibipOS orchestrates your existing gear—we don't own your APs, switches, or customer relationships. If you ever leave, your hardware still works with native vendor tools. Our business model depends on your success, not on trapping you.",
  },
  {
    question: "Why not hire in-house devs so we own all IP?",
    answer:
      "You can—expect 18-24 months and $500K-$2M to reach production parity with what we offer today. Most MSPs find that timeline means lost deals. Our partners get multi-vendor capability in 30 days while keeping full control of their customer relationships and branding.",
  },
  {
    question: "How do I stay unique if modules are shared?",
    answer:
      "The platform is shared. Your differentiation comes from your service delivery, customer relationships, vertical expertise, and white-label branding. We provide the infrastructure so you can focus on what actually wins deals—not rebuilding Wi-Fi management from scratch.",
  },
  {
    question: "Is wibipOS just another SaaS with per-AP or per-site pricing?",
    answer:
      "We offer partnership models, not just subscriptions. Pricing depends on your scale, integration needs, and business model. Some partners prefer revenue share, others prefer flat fees. We'll design a structure that aligns our success with yours.",
  },
  {
    question: "Are you an R&D partner or a SaaS vendor?",
    answer:
      "Both. Our LiveSDK team works alongside your engineers to integrate new vendors and customize workflows. You get the speed of SaaS with the flexibility of a development partner. That's how we helped 6 Tier 1 telcos and dozens of MSPs go live.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a 30-day sandbox—full Foundation-tier access, pre-integrated with Ruckus, OpenWiFi, and Actiontec. Point your test APs to our controllers and see if it fits. No credit card, no contracts. Ruckus MSPs typically go live in 15 minutes.",
  },
];

const generalFaqs = [
  {
    question: "What is wibipOS, and who is it for?",
    answer:
      "wibipOS is a vendor-agnostic, cloud-based platform designed for MSPs and telcos who need to manage multi-vendor Wi-Fi networks from a single dashboard. If you're tired of saying 'we don't support that vendor' and losing RFPs, wibipOS is for you.",
  },
  {
    question: "How does wibipOS handle vendor lock-in issues?",
    answer:
      "We sit above vendor-specific controllers, providing a unified API and dashboard. Your hardware runs native firmware or OpenWiFi—either way, you're not dependent on any single vendor's cloud. Add or remove vendors without rebuilding your management stack.",
  },
  {
    question: "Can wibipOS consolidate multi-vendor networks?",
    answer:
      "Yes—that's our core capability. We currently support 12+ vendors including Ruckus, Edgecore, Fortinet, Cisco Meraki, Aruba, NetExperience, and more. Our LiveSDK team can integrate new vendors in 2-4 weeks.",
  },
  {
    question: "What customization capabilities does wibipOS offer?",
    answer:
      "Full white-label branding, custom workflows, role-based access control, API integrations with your existing tools (PSA, billing, monitoring), and configurable alerting. Growth and Enterprise tiers include dedicated customization hours.",
  },
  {
    question: "What are the primary benefits of using wibipOS?",
    answer:
      "Win multi-vendor RFPs you're currently losing. Reduce operational complexity with one dashboard. Deploy faster with pre-built integrations. Scale without hiring specialized engineers for each vendor. Our partners report 40% faster deployments and measurably higher win rates.",
  },
  {
    question: "Does wibipOS support Passpoint and advanced Wi-Fi features?",
    answer:
      "Yes. We support Passpoint (Hotspot 2.0), OpenRoaming, captive portals, RADIUS integration, and advanced RF management. Feature availability depends on underlying hardware capabilities.",
  },
  {
    question: "What limitations does wibipOS have?",
    answer:
      "We're only as capable as the hardware allows. Some legacy devices have limited API support. We'll tell you upfront during sandbox evaluation what's possible with your specific gear—no surprises after you commit.",
  },
  {
    question: "How does wibipOS improve operational efficiency?",
    answer:
      "Single-pane-of-glass management eliminates context switching between vendor portals. Bulk operations, templated configurations, and automated workflows reduce manual tasks. Our partners report 60% reduction in configuration time.",
  },
  {
    question: "Can wibipOS support diverse business models?",
    answer:
      "Yes. We support MSP multi-tenant models, enterprise single-tenant deployments, and hybrid approaches. White-label portals let you resell to sub-MSPs. Billing integrations support per-AP, per-site, or custom pricing.",
  },
  {
    question: "What kind of technical support does wibipOS offer?",
    answer:
      "All tiers include 24/7 technical support and onboarding assistance. Growth and Enterprise tiers add priority response times, dedicated success managers, and direct access to our engineering team for complex integrations.",
  },
  {
    question: "What are the financial implications of adopting wibipOS?",
    answer:
      "The math is simple: one won multi-vendor deal typically covers a full year of partnership fees. Compare that to $500K+ and 18+ months to build in-house. Most partners see positive ROI within their first quarter.",
  },
  {
    question: "Where has wibipOS been deployed?",
    answer:
      "10,000+ locations across 6 Tier 1 telcos (AT&T, Verizon, Frontier, Cox, Optimum, Mediacom), national education networks (Jamaica's 1,000-school initiative), and dozens of regional MSPs. We've logged 350,000+ development hours over 10 years.",
  },
  {
    question: "What verticals and applications does wibipOS support?",
    answer:
      "MDU (multi-dwelling units), hospitality, education, healthcare, retail, enterprise campuses, and smart city deployments. Our partners use wibipOS for managed Wi-Fi, guest networks, IoT connectivity, and carrier-grade hotspots.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-dark-950">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              FAQ
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mt-4 mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Questions? Answered.
            </h1>

            <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto">
              Everything you need to know about wibipOS, multi-vendor management,
              and how we help MSPs win more deals.
            </p>
          </div>
        </section>

        {/* Lock-In FAQs */}
        <section className="py-12 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2
                className="text-2xl md:text-3xl font-bold text-dark-50 mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                &ldquo;Just Another Lock-In?&rdquo;
              </h2>
              <p className="text-dark-400">
                We get it. Here&apos;s how wibipOS is different.
              </p>
            </div>

            <Accordion items={lockInFaqs} />
          </div>
        </section>

        {/* General FAQs */}
        <section className="py-12 bg-dark-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2
                className="text-2xl md:text-3xl font-bold text-dark-50 mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                General Questions
              </h2>
              <p className="text-dark-400">
                Platform capabilities, support, and getting started.
              </p>
            </div>

            <Accordion items={generalFaqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-dark-50 mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Still Have Questions?
            </h2>
            <p className="text-dark-400 mb-8">
              Our team is ready to walk you through the platform and answer
              anything specific to your use case.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center py-3 px-8 bg-primary text-dark-950 font-semibold rounded-lg hover:bg-brand-300 transition-colors shadow-lg shadow-primary/20"
              >
                Schedule a Call
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center py-3 px-8 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

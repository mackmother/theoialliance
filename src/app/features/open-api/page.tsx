import { FeaturePageTemplate } from "@/components/sections/FeaturePageTemplate";

export const metadata = {
  title: "Open API / BYOTS | wibipOS",
  description:
    "wibipOS is API-first. Integrate your existing vendors and systems without $100K projects or vendor roadmap dependency.",
};

export default function OpenAPIPage() {
  return (
    <FeaturePageTemplate
      headline="Spending $100K/Year on Custom Integrations?"
      problem="Traditional Wi-Fi platforms are walled gardens. Want to connect to your PSA? Billing system? Custom analytics? That's a professional services project—$50K minimum, 6 months to deliver."
      solution="wibipOS is API-first. Every menu, widget, and module is a building block. Integrate once, available to all your deployments. No $100K projects. No vendor roadmap dependency."
      proofText="100+ use cases developed across 10+ telcos—each integration becomes a reusable component."
      screenshotImage={{
        url: "/images/screenshots/wibipOS Platform.png",
        alt: "wibipOS Platform API architecture",
      }}
      relatedFeatures={[
        { title: "Live SDK", href: "/features/live-sdk" },
        { title: "Multi-Vendor Management", href: "/features/multi-vendor" },
        { title: "Scale", href: "/features/scale" },
      ]}
    />
  );
}

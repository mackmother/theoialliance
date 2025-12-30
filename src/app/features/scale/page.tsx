import { FeaturePageTemplate } from "@/components/sections/FeaturePageTemplate";

export const metadata = {
  title: "Scalability | wibipOS",
  description:
    "From single-location SMBs to nationwide deployments. Same platform, same training, same support. Proven at 10,000+ locations.",
};

export default function ScalePage() {
  return (
    <FeaturePageTemplate
      headline="Can Your Platform Handle a 1,000-Site Deployment?"
      problem="Most MSP tools work fine for 50 sites. But what happens when you land an enterprise deal? Or a school district? Suddenly you're scrambling to find a platform that can scale—and migrating is painful."
      solution="wibipOS runs everywhere from single-location SMBs to nationwide deployments. Same platform, same training, same support. We've proven it works at 10,000+ locations."
      proofText="Jamaica deployment: 364 schools → 1,000 schools, 3,150 APs → 10,000 APs—without changing platforms."
      screenshotImage={{
        url: "/images/screenshots/ScaleWibipOS.png",
        alt: "wibipOS scalability dashboard showing nationwide deployment",
      }}
      relatedFeatures={[
        { title: "Multi-Vendor Management", href: "/features/multi-vendor" },
        { title: "Unified Dashboard", href: "/features/unified-dashboard" },
        { title: "Open API", href: "/features/open-api" },
      ]}
    />
  );
}

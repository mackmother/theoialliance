import { FeaturePageTemplate } from "@/components/sections/FeaturePageTemplate";

export const metadata = {
  title: "Unified Dashboard | wibipOS",
  description:
    "One dashboard for all sites, all vendors, all devices. Multi-tenant and brandable—show your clients their network under your brand.",
};

export default function UnifiedDashboardPage() {
  return (
    <FeaturePageTemplate
      headline="Still Jumping Between Tabs to Check Network Status?"
      problem="31% of MSPs can't achieve a unified view across vendors. That means blind spots, slower troubleshooting, and more manual work for your NOC team."
      solution="wibipOS gives you one dashboard for all sites, all vendors, all devices. Multi-tenant and brandable—show your clients their network under your brand, not six different vendor logos."
      proofText="Optimum scaled from 20 to 100+ SMB deployments monthly after integrating with wibipOS."
      screenshotImage={{
        url: "/images/screenshots/unified-dashboard.png",
        alt: "wibipOS unified dashboard showing all sites, vendors, and devices",
      }}
      relatedFeatures={[
        { title: "Multi-Vendor Management", href: "/features/multi-vendor" },
        { title: "Live SDK", href: "/features/live-sdk" },
        { title: "Scale", href: "/features/scale" },
      ]}
    />
  );
}

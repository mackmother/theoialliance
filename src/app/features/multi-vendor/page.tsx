import { FeaturePageTemplate } from "@/components/sections/FeaturePageTemplate";

export const metadata = {
  title: "Multi-Vendor Management | wibipOS",
  description:
    "Manage Ruckus, Edgecore, OpenWiFi, Fortinet, and more from one dashboard. Stop juggling separate vendor controllers.",
};

export default function MultiVendorPage() {
  return (
    <FeaturePageTemplate
      headline="Managing 5 Different Vendor Dashboards?"
      problem="75% of MSPs are locked into single-vendor Wi-Fi systems. That means separate controllers, separate logins, separate support contracts for every hardware brand. When you win a new client running different gear, you're stuck adding another tool to the pile."
      solution="wibipOS unifies Ruckus, Edgecore, OpenWiFi, Fortinet, and more under one management layer. Add new vendors without adding new dashboards. Your team learns one system, not five."
      proofText="The Jamaica schools deployment manages 6 different vendor types from a single wibipOS instance: Ruckus, OpenWiFi/NetExperience, Edgecore, Actiontec, Cybertan, and Fortinet—3,150 APs across 364 schools, scaling to 10,000 APs."
      screenshotImage={{
        url: "/images/screenshots/Multi-vendor.png",
        alt: "wibipOS multi-vendor management dashboard",
      }}
      testimonialImage={{
        url: "https://framerusercontent.com/images/eJdUviS4uNcLRD44YUn0Y80rRc.png",
        alt: "Frank Lai testimonial - VP Business Development, Actiontec",
      }}
      relatedFeatures={[
        { title: "Unified Dashboard", href: "/features/unified-dashboard" },
        { title: "Open API", href: "/features/open-api" },
        { title: "Scale", href: "/features/scale" },
      ]}
    />
  );
}

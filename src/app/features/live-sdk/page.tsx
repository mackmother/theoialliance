import { FeaturePageTemplate } from "@/components/sections/FeaturePageTemplate";

export const metadata = {
  title: "Live SDK | wibipOS",
  description:
    "Our dev team becomes your dev team. Custom integrations without $100K projects or 6-month timelines.",
};

export default function LiveSDKPage() {
  return (
    <FeaturePageTemplate
      headline="Can't Hire the Wi-Fi Engineers You Need?"
      problem="25% of MSPs cite lack of skilled personnel as their biggest growth barrier. Custom integrations require expertise you don't have—and hiring takes months."
      solution="Live SDK means our dev team becomes your dev team. Need to integrate with your billing system? Connect a new hardware vendor? Build a custom analytics panel? We build it with you, not for you."
      proofText="NetExperience integration completed rapidly via Live SDK—now a standard feature available to all wibipOS users."
      screenshotImage={{
        url: "/images/screenshots/LiveSDK.jpg",
        alt: "Live SDK development and integration workflow",
      }}
      testimonialImage={{
        url: "https://framerusercontent.com/images/9peXEfHQbNypiXyszxyZyfW4NQ.png?scale-down-to=1024",
        alt: "Huw Rees testimonial - VP Business Development, NetExperience",
      }}
      relatedFeatures={[
        { title: "Open API", href: "/features/open-api" },
        { title: "Multi-Vendor Management", href: "/features/multi-vendor" },
        { title: "Unified Dashboard", href: "/features/unified-dashboard" },
      ]}
    />
  );
}

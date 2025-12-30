import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Problem,
  HowItWorks,
  ValueProps,
  Pricing,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* 1. Hero - Promise: Say YES to Every MDU */}
        <Hero />
        {/* 2. Problem - Pain they recognize + solutions */}
        <Problem />
        {/* 3. How It Works - 2-min demo + downloadable architecture */}
        <HowItWorks />
        {/* 4. Capabilities + Proof - Features with case study integrated */}
        <ValueProps />
        {/* 5. Pricing - Partnership tiers with value bridge */}
        <Pricing />
        {/* 6. Final CTA - Trial-to-Profit journey */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

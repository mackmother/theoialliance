import { Navbar, Footer } from "@/components/layout";
import {
  // Hero,          // Original hero - backup at /backup/HeroOriginal.tsx
  AllianceHero,     // Alliance announcement hero (swap back to Hero to revert)
  HowItWorks,
  ProofPricing,
  // FinalCTA,      // Moved to Journey page as stronger closer
  HomePricing,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* 1. Hero - Alliance Announcement (swap to <Hero /> to revert) */}
        <AllianceHero />
        {/* 2. How It Works - 2-min demo (anchored from hero button) */}
        <HowItWorks />
        {/* 3. Proof - Jamaica underdog story (emotional peak) */}
        <ProofPricing />
        {/* 4. Pricing - Flows from proof: "So what does partnership like this cost?" */}
        <HomePricing />
      </main>
      <Footer />
    </>
  );
}

import { Section, SectionHeading, Button } from "@/components/ui";

const tiers = [
  { name: "Foundation", sites: "100 sites", price: "From $2/site", tagline: "First multi-vendor deals" },
  { name: "Growth", sites: "1,000 sites", price: "From $1.50/site", tagline: "Regional & national", highlighted: true },
  { name: "Enterprise", sites: "Unlimited", price: "Custom", tagline: "Volume discounts" },
];

export function Pricing() {
  return (
    <Section id="pricing" background="raised" spacing="md" divider>
      <div className="max-w-4xl mx-auto text-center">
        {/* Value-Price Bridge */}
        <p className="text-sm text-dark-400 mb-6">
          After you&apos;ve seen how MSPs close deals they used to lose...
        </p>

        <SectionHeading
          title="Partnership Tiers—Not License Fees"
          subtitle="Priced on value delivered. Every partnership starts with a production-ready trial."
        />

        {/* Pricing tiers - clean, minimal */}
        <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-4 md:p-5 rounded-xl border transition-all duration-300
                ${tier.highlighted
                  ? "border-brand-400/40 bg-brand-400/5"
                  : "border-white/[0.06] bg-dark-900/40 hover:border-white/[0.08]"
                }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 text-[10px] font-medium text-brand-400 bg-dark-950 border border-brand-400/30 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-sm md:text-base font-semibold text-dark-100 mb-1">{tier.name}</h3>
              <div className="text-lg md:text-xl font-bold text-brand-400">{tier.sites}</div>
              <div className="text-xs text-dark-300 mb-1">{tier.price}</div>
              <p className="text-[10px] md:text-xs text-dark-500">{tier.tagline}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button variant="secondary" href="/pricing">
            View Full Pricing
            <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <p className="text-xs text-dark-500">
            No commitment. Cancel anytime. Full sandbox access during trial.
          </p>
        </div>
      </div>
    </Section>
  );
}

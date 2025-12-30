# WiBUZ Pricing Page: Claude Code Implementation Instruction

## Context for Claude Code

You are building the `/pricing` page for WiBUZ (wibipOS). This is NOT a standard SaaS pricing page. The product competes with "build it yourself" decisions, not other SaaS tools.

**Key constraints from SaaS Academy frameworks:**

1. **Don't publish exact prices** — Complex partnership model with revenue share = "Talk to Sales" for quotes
2. **Use Good-Better-Best tiers** — 72% of SaaS uses this because it works
3. **Value metric = locations/sites** — Familiar to MSPs, scales with growth
4. **Lead with ROI anchor** — Enterprise buyers think 3-year windows
5. **No feature grids** — 3-5 differentiators per tier only
6. **Risk reversal prominent** — 30-Day Sandbox is the confidence builder

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Existing components in `/components/ui` (Section, Card, Button, Container)

---

## Design System (from wibuz-homepage-implementation-plan.md)

### Colors
```css
--bg-base: #09090b;
--bg-raised: #18181b;
--bg-elevated: #27272a;
--border-subtle: rgba(255, 255, 255, 0.06);
--border-default: rgba(255, 255, 255, 0.1);
--accent-glow: rgba(255, 195, 51, 0.15);
```

### Brand Colors (Tailwind)
- Primary gold accent: `brand-400` (#FFC333)
- Dark backgrounds: `dark-950`, `dark-900`, `dark-800`
- Text: `dark-50` (white), `dark-400` (secondary)

### Typography
- Font: Inter
- Headlines: Bold, letter-spacing -0.02em
- Section labels: Small, uppercase, gold, tracking-wider

### Banned Words (NEVER USE)
leverage, synergy, bandwidth, agile, robust, game-changing, revolutionary, best-in-class, seamless, next-gen, composable, attacker-centric

---

## Page Structure

### File Location
`src/app/pricing/page.tsx`

---

## Section 1: Hero

**Layout:** Full-width, centered, dark background with gold glow

```tsx
<section className="relative pt-24 pb-16 bg-dark-950">
  {/* Gold glow effect */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-400/10 rounded-full blur-[100px]" />
  
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
    {/* Section label */}
    <span className="text-sm font-medium text-brand-400 uppercase tracking-wider">
      Partnership Tiers
    </span>
    
    {/* H1 - Outcome-focused */}
    <h1 className="text-4xl md:text-5xl font-bold text-dark-50 mt-4 mb-6" style={{ letterSpacing: '-0.02em' }}>
      Win Deals You're Currently Losing
    </h1>
    
    {/* Subhead */}
    <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto">
      Multi-vendor capability for MSPs who want to say YES to every hardware stack. We grow when you win.
    </p>
  </div>
</section>
```

---

## Section 2: ROI Anchor (Build vs. Partner)

**Purpose:** Apply R-E-A-L framework — anchor to alternative (build it yourself)

**Layout:** Two-column comparison on desktop, stacked on mobile

```tsx
<Section background="raised">
  <div className="max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* LEFT: Build It Yourself (the pain) */}
      <div className="p-8 bg-dark-900 border border-white/[0.06] rounded-2xl">
        <div className="text-dark-500 text-sm uppercase tracking-wider mb-4">
          Build It Yourself
        </div>
        <ul className="space-y-4 text-dark-400">
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✕</span>
            <span>18-24 months to production</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✕</span>
            <span>$500K-$2M investment</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✕</span>
            <span>2-3 engineers dedicated</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✕</span>
            <span>Still single-vendor in practice</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✕</span>
            <span>Lost RFPs while you're building</span>
          </li>
        </ul>
        <div className="mt-6 pt-6 border-t border-white/[0.06]">
          <div className="text-dark-500 text-sm">3-year cost</div>
          <div className="text-2xl font-bold text-dark-50">$2M+</div>
        </div>
      </div>
      
      {/* RIGHT: wibipOS Partnership (the solution) */}
      <div className="p-8 bg-dark-800 border border-brand-400/30 rounded-2xl relative overflow-hidden">
        {/* Subtle gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-400/5 to-transparent" />
        
        <div className="relative z-10">
          <div className="text-brand-400 text-sm uppercase tracking-wider mb-4">
            wibipOS Partnership
          </div>
          <ul className="space-y-4 text-dark-300">
            <li className="flex items-start gap-3">
              <span className="text-brand-400 mt-1">✓</span>
              <span>Go live in 30 days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 mt-1">✓</span>
              <span>Partnership fee + revenue share</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 mt-1">✓</span>
              <span>Live SDK support included</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 mt-1">✓</span>
              <span>True multi-vendor from day one</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 mt-1">✓</span>
              <span>Win the next RFP this quarter</span>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-brand-400/20">
            <div className="text-dark-400 text-sm">ROI math</div>
            <div className="text-lg text-dark-50">
              One 500-site deal = <span className="text-brand-400 font-bold">$250K+ revenue</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</Section>
```

---

## Section 3: Partnership Tiers (Good-Better-Best)

**Purpose:** Three tiers, scale-based, outcome-focused — NO published prices

**Layout:** Three cards, center card highlighted

```tsx
<Section>
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-dark-50" style={{ letterSpacing: '-0.02em' }}>
        Choose Your Capability Level
      </h2>
      <p className="text-dark-400 mt-4 max-w-xl mx-auto">
        Pick the tier that matches your ambition. All tiers include the 30-day sandbox.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6">
      
      {/* FOUNDATION */}
      <div className="p-8 bg-dark-900 border border-white/[0.06] rounded-2xl">
        <div className="text-dark-500 text-sm uppercase tracking-wider mb-2">
          Foundation
        </div>
        <div className="text-2xl font-bold text-dark-50 mb-2">
          Up to 100 sites
        </div>
        <p className="text-dark-400 text-sm mb-6">
          For MSPs winning their first multi-vendor deals
        </p>
        
        <ul className="space-y-3 text-dark-300 text-sm mb-8">
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Multi-vendor dashboard
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            30-day sandbox
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Live SDK support
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Standard integrations
          </li>
        </ul>
        
        <a 
          href="/demo" 
          className="block w-full text-center py-3 px-6 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors"
        >
          Talk to Sales
        </a>
      </div>
      
      {/* GROWTH (Popular) */}
      <div className="p-8 bg-dark-800 border-2 border-brand-400/50 rounded-2xl relative">
        {/* Popular badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-400 text-dark-950 text-xs font-bold uppercase rounded-full">
          Most Popular
        </div>
        
        <div className="text-brand-400 text-sm uppercase tracking-wider mb-2">
          Growth
        </div>
        <div className="text-2xl font-bold text-dark-50 mb-2">
          Up to 1,000 sites
        </div>
        <p className="text-dark-400 text-sm mb-6">
          For MSPs scaling regional and national accounts
        </p>
        
        <ul className="space-y-3 text-dark-300 text-sm mb-8">
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Everything in Foundation
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            White-label portals
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Billing integration
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Priority support
          </li>
        </ul>
        
        <a 
          href="/demo" 
          className="block w-full text-center py-3 px-6 bg-brand-400 text-dark-950 font-semibold rounded-lg hover:bg-brand-300 transition-colors shadow-lg shadow-brand-400/20"
        >
          Talk to Sales
        </a>
      </div>
      
      {/* ENTERPRISE */}
      <div className="p-8 bg-dark-900 border border-white/[0.06] rounded-2xl">
        <div className="text-dark-500 text-sm uppercase tracking-wider mb-2">
          Enterprise
        </div>
        <div className="text-2xl font-bold text-dark-50 mb-2">
          Unlimited sites
        </div>
        <p className="text-dark-400 text-sm mb-6">
          For telcos and large MSPs with custom needs
        </p>
        
        <ul className="space-y-3 text-dark-300 text-sm mb-8">
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Everything in Growth
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Custom dev hours
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            Dedicated success manager
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-400">✓</span>
            SLA guarantee
          </li>
        </ul>
        
        <a 
          href="/demo" 
          className="block w-full text-center py-3 px-6 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors"
        >
          Talk to Sales
        </a>
      </div>
      
    </div>
  </div>
</Section>
```

---

## Section 4: Risk Reversal (Sandbox CTA)

**Purpose:** Reduce friction, build confidence per framework guidance

```tsx
<Section background="raised">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4" style={{ letterSpacing: '-0.02em' }}>
      Every Partnership Starts with a Sandbox
    </h2>
    <p className="text-dark-400 mb-8">
      Full capability. Real hardware. No commitment. See if wibipOS can help you win.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/demo" 
        className="inline-flex items-center justify-center py-3 px-8 bg-brand-400 text-dark-950 font-semibold rounded-lg hover:bg-brand-300 transition-colors shadow-lg shadow-brand-400/20"
      >
        Start Your 30-Day Sandbox
      </a>
      <a 
        href="/demo" 
        className="inline-flex items-center justify-center py-3 px-8 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors"
      >
        Schedule a Call
      </a>
    </div>
    
    <p className="text-dark-500 text-sm mt-6">
      No credit card. No contracts. Ruckus MSPs: 15-minute setup.
    </p>
  </div>
</Section>
```

---

## Section 5: Social Proof (MSP Testimonial)

**Purpose:** Persona-specific proof near pricing decision point

```tsx
<Section>
  <div className="max-w-3xl mx-auto">
    <div className="p-8 bg-dark-900 border border-white/[0.06] rounded-2xl">
      <blockquote className="text-lg md:text-xl text-dark-200 mb-6">
        "MsTECH—a 5-person MSP—used wibipOS to win a national education contract. 1,000 schools. We deployed 364 in 90 days with a mixed vendor stack."
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-brand-400 font-bold">
          JE
        </div>
        <div>
          <div className="text-dark-50 font-medium">Julian Edwards</div>
          <div className="text-dark-500 text-sm">Head of Operations, MsTECH</div>
        </div>
      </div>
      <a 
        href="/case-studies/jamaica" 
        className="inline-flex items-center gap-2 text-brand-400 text-sm mt-6 hover:underline"
      >
        Read the Jamaica Case Study
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</Section>
```

---

## Section 6: FAQ (Optional but Recommended)

**Purpose:** Handle common pricing objections

```tsx
<Section background="raised">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold text-dark-50 mb-8 text-center">
      Common Questions
    </h2>
    
    <div className="space-y-6">
      {/* FAQ Item 1 */}
      <div className="p-6 bg-dark-900 border border-white/[0.06] rounded-xl">
        <h3 className="text-dark-50 font-medium mb-2">
          Why don't you publish prices?
        </h3>
        <p className="text-dark-400 text-sm">
          Every partnership is different. Pricing depends on your scale, integration needs, and revenue share structure. We'll give you a clear quote after understanding your business.
        </p>
      </div>
      
      {/* FAQ Item 2 */}
      <div className="p-6 bg-dark-900 border border-white/[0.06] rounded-xl">
        <h3 className="text-dark-50 font-medium mb-2">
          What's included in the 30-day sandbox?
        </h3>
        <p className="text-dark-400 text-sm">
          Full Foundation-tier access. Pre-integrated with Ruckus, OpenWiFi, and Actiontec. You can point your existing APs to our controllers or spin up a test environment.
        </p>
      </div>
      
      {/* FAQ Item 3 */}
      <div className="p-6 bg-dark-900 border border-white/[0.06] rounded-xl">
        <h3 className="text-dark-50 font-medium mb-2">
          What does "Live SDK support" mean?
        </h3>
        <p className="text-dark-400 text-sm">
          Our engineers integrate your tech stack for you. We've done this for 10 US telcos. You get the expertise without hiring the headcount.
        </p>
      </div>
      
      {/* FAQ Item 4 */}
      <div className="p-6 bg-dark-900 border border-white/[0.06] rounded-xl">
        <h3 className="text-dark-50 font-medium mb-2">
          How does the revenue share work?
        </h3>
        <p className="text-dark-400 text-sm">
          We grow when you win. The specifics depend on your business model and scale. Our team will walk you through options that align our incentives.
        </p>
      </div>
    </div>
  </div>
</Section>
```

---

## Metadata

```tsx
export const metadata = {
  title: "Pricing | wibipOS — Partnership Tiers for Multi-Vendor Wi-Fi",
  description:
    "Win deals you're currently losing. wibipOS partnership tiers for MSPs who want to say YES to every hardware stack. Start with a 30-day sandbox.",
};
```

---

## Full Page Assembly

```tsx
import { Navbar, Footer } from "@/components/layout";
import { Section } from "@/components/ui";

export const metadata = {
  title: "Pricing | wibipOS — Partnership Tiers for Multi-Vendor Wi-Fi",
  description:
    "Win deals you're currently losing. wibipOS partnership tiers for MSPs who want to say YES to every hardware stack. Start with a 30-day sandbox.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Section 1: Hero */}
        {/* Section 2: ROI Anchor (Build vs. Partner) */}
        {/* Section 3: Partnership Tiers */}
        {/* Section 4: Risk Reversal */}
        {/* Section 5: Social Proof */}
        {/* Section 6: FAQ */}
      </main>
      <Footer />
    </>
  );
}
```

---

## Implementation Checklist

- [ ] Create `src/app/pricing/page.tsx`
- [ ] Hero section with gold glow effect
- [ ] Build vs. Partner comparison (ROI anchor)
- [ ] Three tier cards (Foundation, Growth, Enterprise)
- [ ] "Most Popular" badge on Growth tier
- [ ] Risk reversal section with Sandbox CTA
- [ ] Social proof with Julian Edwards testimonial
- [ ] FAQ section for pricing objections
- [ ] Mobile responsive (stacked layouts on small screens)
- [ ] All CTAs link to `/demo`
- [ ] No published prices (all "Talk to Sales")
- [ ] No feature grids (3-5 differentiators per tier only)

---

## Framework Compliance Notes

| Requirement | How It's Met |
|-------------|--------------|
| Don't publish prices | All CTAs say "Talk to Sales" |
| Good-Better-Best | Three tiers: Foundation, Growth, Enterprise |
| Value metric = locations | Tiers defined by site count (100, 1000, unlimited) |
| Lead with ROI | Build vs. Partner comparison is first content section |
| No feature grids | 4 bullet points per tier, outcome-focused |
| Risk reversal | Sandbox CTA prominent with reassurance text |
| MSP-specific proof | Julian Edwards testimonial near decision point |
| 3-year framing | "$2M+ over 3 years" in comparison section |
| Answer 5 questions | What (multi-vendor), Who (MSPs), What happens (win RFPs), How much (Talk to Sales), How to start (Sandbox) |

---

*This instruction follows SaaS Academy frameworks: Enterprise Pricing (Marcos Rivera), Art of Packaging, Pricing Page Design, and Pricing Grid best practices.*

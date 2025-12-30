# Claude Code: Priority Update Instructions

## SETUP - READ THESE FILES FIRST (in order)

1. `wibuz-framework-guardian.md` - Strategic constraints (NEVER violate)
2. `wibuz-visual-design-spec.md` - Design system (colors, typography, spacing)
3. `wibuz-page-design-specs.md` - Page layouts for case studies, features, about
4. `wibuz-multi-agent-system.md` - Quality iteration process

---

## PRIORITY 1: UPDATE HOMEPAGE HERO

The current hero copy is outdated. It positions wibipOS as an OpenWiFi product. The new copy positions wibipOS as the BRIDGE between legacy and open ecosystems—which is the actual differentiation.

### Current Hero (REPLACE THIS)
```
Headline: Production-Ready OpenWiFi. Deploy in 15 Minutes.
Subhead: wibipOS is the enterprise wrapper for OpenWiFi—like Red Hat for Linux, Android for phones. Run Ruckus, Edgecore, NetExperience, Fortinet, and more from one dashboard. No vendor lock-in.
```

### New Hero (IMPLEMENT THIS)

**Badge (keep as-is):**
```
🏆 Telecom Council Innovation Showcase 2025 | Broadband Communities Tech Partner of the Year
```

**H1 Headline:**
```
Say YES to Every Hardware Stack
```

**Subhead (two lines):**
```
Stop losing RFPs. Go live in 15 minutes.
wibipOS bridges legacy and Open WiFi ecosystems.
```

**Primary CTA Button:**
```
Start 30-Day Sandbox
```

**Secondary CTA:**
```
Watch the 2-Min Story →
```
(Link to: https://youtu.be/_VOPMAHmEcQ)

**Vendor Trust Bar (horizontal checkmarks below CTAs):**
```
✓ Ruckus  ✓ Calix  ✓ OpenWiFi  ✓ NetExperience  ✓ Edgecore
```

**Proof Bar (keep as-is, below vendor trust bar):**
```
10 Years Building | $8M Invested | 350K Dev Hours
```

### Hero Visual Structure
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  🏆 Telecom Council Innovation Showcase 2025 | BBC Tech Partner │
│                                                                 │
│           Say YES to Every Hardware Stack                       │
│                                                                 │
│       Stop losing RFPs. Go live in 15 minutes.                  │
│       wibipOS bridges legacy and Open WiFi ecosystems.          │
│                                                                 │
│     [■ Start 30-Day Sandbox]    [Watch the 2-Min Story →]      │
│                                                                 │
│     ✓ Ruckus  ✓ Calix  ✓ OpenWiFi  ✓ NetExperience  ✓ Edgecore │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│      10 Years Building  |  $8M Invested  |  350K Dev Hours      │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Styling Notes for Hero
- Headline: Bold, text-5xl or text-6xl, tight letter-spacing (-0.02em), white
- Subhead: text-xl, text-secondary color, two distinct lines
- Vendor checkmarks: Horizontal layout, subtle styling, gold checkmarks
- Primary CTA: Solid gold background, dark text
- Secondary CTA: Ghost/outline style, gold border

---

## PRIORITY 2: ADD ORCHESTRATION ADVANTAGE DIAGRAM

**Immediately below the hero**, add a new section featuring the Orchestration Advantage diagram.

### Section Structure
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   The Orchestration Advantage                   │
│                                                                 │
│     See why wibipOS is the only platform that bridges both      │
│     legacy ecosystems AND Open WiFi—without forcing you to      │
│     rip and replace.                                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │              [Orchestration Diagram Image]              │   │
│  │                                                         │   │
│  │   Shows: wibipOS spanning across top                    │   │
│  │   Left: Legacy (Ruckus, Calix, etc.)                    │   │
│  │   Right: Open WiFi (NetExperience, Edgecore, etc.)      │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Implementation Notes
- Use the Orchestration Advantage diagram image (should be in uploads or public/images)
- Image should be full-width with subtle border/shadow
- This diagram is critical—it visually explains the positioning in 3 seconds
- Add alt text: "wibipOS orchestration diagram showing how the platform bridges legacy vendors like Ruckus and Calix with Open WiFi vendors like NetExperience and Edgecore"

---

## PRIORITY 3: FIX CASE STUDY PAGES

The case study pages are currently ugly and don't tell a story. Rebuild them following the structure in `wibuz-page-design-specs.md`.

### Case Study Narrative Arc (MUST FOLLOW)
1. **Hero** - Lead with outcome, not customer name ("364 Schools. 6 Vendors. 90 Days.")
2. **The Customer** - Who they are, why they matter
3. **The Challenge** - Create tension, show the problem
4. **The Solution** - How wibipOS solved it (with screenshot)
5. **The Tech Stack** - Show the multi-vendor reality (logo grid)
6. **The Results** - Large gold numbers, undeniable proof
7. **Testimonials** - Let the customer sell for you
8. **CTA** - Clear next step

### Start With Jamaica Case Study
`/case-studies/jamaica` is the flagship. Rebuild this first using the full structure from `wibuz-page-design-specs.md`.

Key stats for Jamaica:
- 364 schools Phase 1, expanding to 1,000
- 3,150 APs, expanding to 10,000
- 90 days deployment
- 6 vendors: Ruckus, OpenWiFi/NetExperience, Edgecore, Actiontec, Cybertan, Fortinet
- Award: Broadband Communities Technology Partner of the Year
- Customer: MsTECH Solutions
- Testimonial: Julian Edwards, Head of Operations

---

## PRIORITY 4: FIX FEATURE PAGES

Feature pages feel like a maze. They need focus: one pain, one solution, one CTA.

### Feature Page Structure (MUST FOLLOW)
1. **Hero** - Pain-point QUESTION headline (not feature name)
2. **Visual Proof** - Large screenshot/video
3. **How It Works** - 3 simple steps
4. **Capabilities** - What's included (checkmark grid)
5. **Proof Point** - Testimonial linking to case study
6. **Related Features** - Cross-links
7. **CTA** - Clear next step

### Pain-Point Headlines (USE THESE)

| Feature Page | Headline |
|--------------|----------|
| /features/multi-vendor | "Managing 5 Different Vendor Dashboards?" |
| /features/unified-dashboard | "Still Jumping Between Tabs to Check Network Status?" |
| /features/live-sdk | "Can't Hire the Wi-Fi Engineers You Need?" |
| /features/open-api | "Spending $100K/Year on Custom Integrations?" |
| /features/scale | "Can Your Platform Handle a 1,000-Site Deployment?" |

---

## PRIORITY 5: BUILD ABOUT PAGE

The About page needs soul. Follow the structure in `wibuz-page-design-specs.md`.

### About Page Structure
1. **Hero** - Lead with investment numbers ("10 Years. $8M. 350,000 Hours. One Mission.")
2. **Origin Story** - Magnus saw a problem, started building
3. **Timeline** - Visual journey from 2014 to 2025
4. **By The Numbers** - Stats grid
5. **Leadership** - At minimum: Magnus Johansson, Founder & CEO
6. **Awards** - Telecom Council, Broadband Communities
7. **CTA** - Join the journey

### Timeline Events
- 2014: Founded, started building
- 2016: CommScope partnership begins, first telco deployments
- 2019: 10+ US telcos enabled, 10,000+ locations
- 2023: Jamaica schools deployment, OpenWiFi integration, Broadband Communities award
- 2024: CommScope partnership ends, wibipOS opens to MSPs
- 2025: Telecom Council Innovation Showcase, expanding Jamaica to 1,000 schools

---

## VISUAL DESIGN REQUIREMENTS (ALL PAGES)

Apply these consistently from `wibuz-visual-design-spec.md`:

### Colors
- Background layers: --bg-base (#09090b), --bg-raised (#18181b), --bg-elevated (#27272a)
- Accent: Gold (#FFC333)
- Text: Primary (white), Secondary (#a1a1aa)
- Borders: Subtle (rgba(255,255,255,0.06))

### Typography
- Headlines: Bold, tight letter-spacing
- Body: Regular, readable line-height
- Section labels: Small, uppercase, gold, tracked wide

### Spacing
- Use 8px grid system
- Section padding: 96px top/bottom desktop, 64px mobile
- Consistent gaps between elements

### Cards
- Background: --bg-raised
- Border: 1px solid var(--border-subtle)
- Border-radius: 16px
- Hover: Slight lift, border color change

---

## IMPLEMENTATION ORDER

1. ✅ Update homepage hero (new copy + vendor checkmarks)
2. ✅ Add Orchestration Advantage diagram section below hero
3. Rebuild /case-studies/jamaica following narrative arc
4. Apply same structure to other case studies
5. Rebuild feature pages with pain-point headlines
6. Build About page with timeline
7. Run multi-agent quality loop on all pages

---

## FRAMEWORK COMPLIANCE CHECK

Before shipping ANY change, verify:

- [ ] Single audience focus preserved (MSP CEOs)?
- [ ] Hero passes 7-second test?
- [ ] Credibility above the fold?
- [ ] Primary CTA more prominent than secondary?
- [ ] All proof points present?
- [ ] Mechanism before outcome in messaging?
- [ ] No banned words (leverage, synergy, robust, etc.)?
- [ ] Section order preserved?

---

## START NOW

Begin with Priority 1: Update the homepage hero in `src/components/sections/Hero.tsx` with the new copy and structure. Then add the Orchestration Advantage diagram section.

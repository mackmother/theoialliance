# WiBUZ Page Design Specifications

## Overview

The homepage is now acceptable. The underlying pages are not. This document provides **best-in-class layouts and patterns** for:

1. Case Study Pages
2. Feature Pages  
3. About Page

Each specification includes structure, visual patterns, and exact implementation guidance.

---

# PART 1: CASE STUDY PAGES

## The Problem with Current Case Studies

- Generic layout that doesn't tell a story
- No visual hierarchy—everything looks the same importance
- Missing the "journey" that makes case studies compelling
- No emotional hook
- Buried proof points
- Ugly, forgettable

## Best-in-Class Case Study Pattern

Great case studies follow a **narrative arc**, not a feature list. They answer:

1. **Who** is the customer? (Make them relatable)
2. **What** was their situation? (Create tension)
3. **Why** was it a problem? (Make it painful)
4. **How** did they solve it? (Show the transformation)
5. **What** were the results? (Prove it with numbers)

---

## Case Study Page Structure

### Section 1: Hero (The Hook)

**Purpose:** Grab attention with the outcome, not the customer name.

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [← Back to Case Studies]                                       │
│                                                                 │
│  CASE STUDY                                                     │
│                                                                 │
│  364 Schools. 6 Vendors.                                        │
│  90 Days.                                                       │
│                                                                 │
│  How Jamaica's national education network deployed              │
│  10,000 APs across multiple vendors—managed from                │
│  a single wibipOS instance.                                     │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                                                         │    │
│  │              [Hero Image / Video]                       │    │
│  │              Map of Jamaica with network overlay        │    │
│  │              or deployment photo                        │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ 364      │  │ 3,150    │  │ 90       │  │ 6        │        │
│  │ Schools  │  │ APs      │  │ Days     │  │ Vendors  │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- "CASE STUDY" label: Small, uppercase, gold color, tracked wide
- Headline: Large (text-5xl), bold, white, tight letter-spacing
- Subhead: text-xl, text-secondary, max-width 600px
- Hero image: Full-width, rounded-2xl, subtle border
- Stats bar: 4 key metrics in a row, gold numbers, gray labels

---

### Section 2: The Customer (Context)

**Purpose:** Make the reader understand who this customer is and why their situation matters.

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE CUSTOMER                                                   │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────────────────┐│
│  │                      │  │                                  ││
│  │  [Customer Logo]     │  │  MsTECH Solutions                ││
│  │                      │  │                                  ││
│  │  Jamaica 🇯🇲          │  │  National technology partner     ││
│  │                      │  │  responsible for deploying       ││
│  └──────────────────────┘  │  Jamaica's education network     ││
│                            │  infrastructure across 1,000     ││
│                            │  schools nationwide.             ││
│                            │                                  ││
│                            │  Industry: Education / Gov Tech  ││
│                            │  Scale: 1,000 schools            ││
│                            │  Timeline: 2023-Present          ││
│                            └──────────────────────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Section label: Small, uppercase, gold, tracked wide
- Two-column layout: Logo/location left, details right
- Customer name: text-2xl, bold
- Description: text-base, text-secondary
- Meta info: Small pills or inline list

---

### Section 3: The Challenge (Tension)

**Purpose:** Create tension. What problem were they facing? Make it feel urgent.

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE CHALLENGE                                                  │
│                                                                 │
│  "We needed to connect 1,000 schools across Jamaica—           │
│  urban and rural—with reliable Wi-Fi. Our original             │
│  single-vendor approach couldn't scale, and we were            │
│  facing a government deadline."                                 │
│                                                                 │
│  ───────────────────────────────────────────────────────────── │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ 🚫              │  │ ⏰              │  │ 🔒              │ │
│  │ Single-vendor   │  │ Government      │  │ Rural areas    │ │
│  │ couldn't scale  │  │ deadline        │  │ need different │ │
│  │ to 1,000 sites  │  │ pressure        │  │ hardware       │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Pull quote: Large text (text-2xl), italic or different weight
- Divider: Subtle horizontal line
- Challenge cards: 3 specific problems, icon + short text
- Background: Slightly different shade to create section break

---

### Section 4: The Solution (Transformation)

**Purpose:** Show how wibipOS solved the problem. Be specific.

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE SOLUTION                                                   │
│                                                                 │
│  MsTECH partnered with WiBUZ to deploy wibipOS as their        │
│  unified management layer—enabling them to mix and match       │
│  hardware vendors while maintaining a single operational       │
│  view.                                                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  [Screenshot: wibipOS dashboard showing Jamaica map     │   │
│  │   with school locations and status indicators]          │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  KEY CAPABILITIES DEPLOYED:                                     │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ Multi-Vendor    │  │ Single Pane     │  │ Remote          │ │
│  │ Management      │  │ of Glass        │  │ Provisioning    │ │
│  │                 │  │                 │  │                 │ │
│  │ Ruckus, Edge-   │  │ One dashboard   │  │ Deploy sites    │ │
│  │ core, Actiontec │  │ for all 1,000   │  │ without onsite  │ │
│  │ NetExperience   │  │ schools         │  │ engineers       │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Intro paragraph: text-lg, max-width for readability
- Screenshot: Full-width, with subtle shadow and border, rounded-2xl
- Capability cards: Icon, title, description—show what was actually used

---

### Section 5: The Tech Stack (Credibility)

**Purpose:** Show the multi-vendor reality. This is your differentiator.

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE TECH STACK                                                 │
│                                                                 │
│  6 vendors. One platform.                                       │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  [Ruckus]  [Edgecore]  [NetExperience]                 │   │
│  │                                                         │   │
│  │  [Actiontec]  [Cybertan]  [Fortinet]                   │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  "We chose different vendors for different environments—       │
│  Ruckus for high-density urban schools, Edgecore for          │
│  rural locations where cost mattered more. wibipOS let        │
│  us manage them all the same way."                             │
│                                                                 │
│  — Julian Edwards, Head of Operations, MsTECH                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Logo grid: 2 rows of 3, or flexible grid
- Logos: Grayscale or subtle color, consistent sizing
- Quote: Styled testimonial with attribution

---

### Section 6: The Results (Proof)

**Purpose:** Hard numbers. This is what sells.

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE RESULTS                                                    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │   ┌───────────┐   ┌───────────┐   ┌───────────┐        │   │
│  │   │           │   │           │   │           │        │   │
│  │   │   364     │   │   90      │   │   100%    │        │   │
│  │   │           │   │           │   │           │        │   │
│  │   │  Schools  │   │   Days    │   │  Uptime   │        │   │
│  │   │  Phase 1  │   │  Deploy   │   │  Target   │        │   │
│  │   └───────────┘   └───────────┘   └───────────┘        │   │
│  │                                                         │   │
│  │   ┌───────────┐   ┌───────────┐   ┌───────────┐        │   │
│  │   │           │   │           │   │           │        │   │
│  │   │  1,000    │   │  10,000   │   │    6      │        │   │
│  │   │           │   │           │   │           │        │   │
│  │   │  Schools  │   │   APs     │   │  Vendors  │        │   │
│  │   │  Phase 2  │   │  Total    │   │  Unified  │        │   │
│  │   └───────────┘   └───────────┘   └───────────┘        │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Results box: Raised background, rounded-2xl, padding
- Stats: Large gold numbers (text-5xl), small gray labels
- 2x3 grid or flexible layout
- Numbers should be the hero of this section

---

### Section 7: Testimonials (Social Proof)

**Purpose:** Let the customer sell for you.

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  WHAT THEY SAID                                                 │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  ┌─────┐  "The speed of deployment and ability to      │   │
│  │  │     │  work with multiple hardware vendors were     │   │
│  │  │ 👤  │  absolute game-changers for us."              │   │
│  │  │     │                                               │   │
│  │  └─────┘  Julian Edwards                               │   │
│  │           Head of Operations, MsTECH                   │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  ┌─────┐  "NetExperience joined the wibipOS universe   │   │
│  │  │     │  through its API-first approach. The LiveSDK  │   │
│  │  │ 👤  │  Team rapidly unified MsTECH's tech stack."   │   │
│  │  │     │                                               │   │
│  │  └─────┘  Huw Rees                                     │   │
│  │           VP Business Development, NetExperience       │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Testimonial cards: Stacked or side-by-side
- Photo: Circular, 64px or 80px
- Quote: text-lg, slightly larger than body
- Name: Bold
- Title: text-secondary

---

### Section 8: CTA (Next Step)

**Purpose:** What should the reader do now?

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Ready to deploy like MsTECH?                                   │
│                                                                 │
│  [■ Start Your 30-Day Sandbox]    [Read Another Case Study →]  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Case Study Listing Page

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  CASE STUDIES                                                   │
│                                                                 │
│  See how MSPs and telcos deploy multi-vendor                    │
│  Wi-Fi at scale with wibipOS.                                   │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ [Image]                 │  │ [Image]                 │      │
│  │                         │  │                         │      │
│  │ EDUCATION               │  │ MDU                     │      │
│  │ Jamaica Schools         │  │ AT&T Multi-Dwelling     │      │
│  │                         │  │                         │      │
│  │ 364 schools, 6 vendors  │  │ 500+ properties         │      │
│  │ 90 days                 │  │ Carrier-grade Wi-Fi     │      │
│  │                         │  │                         │      │
│  │ [Read Case Study →]     │  │ [Read Case Study →]     │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ [Image]                 │  │ [Image]                 │      │
│  │                         │  │                         │      │
│  │ SMB                     │  │ MIXED-USE               │      │
│  │ Optimum Business        │  │ Frontier                │      │
│  │                         │  │                         │      │
│  │ 20→100+ SMBs monthly    │  │ Retail + Hospitality    │      │
│  │ Amdocs integration      │  │                         │      │
│  │                         │  │                         │      │
│  │ [Read Case Study →]     │  │ [Read Case Study →]     │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Cards: 2x2 grid on desktop, stack on mobile
- Each card has: Image/visual, category tag, title, key stat, link
- Hover: Subtle lift, border color change

---

# PART 2: FEATURE PAGES

## The Problem with Current Feature Pages

- Feel like a maze—too many things competing for attention
- No clear hierarchy
- Features described, not sold
- Missing the "so what?"
- No proof that the feature actually works

## Best-in-Class Feature Page Pattern

Great feature pages are **focused**. One feature. One pain. One solution.

Structure:
1. **Pain headline** (the problem they feel)
2. **Solution intro** (what this feature does)
3. **Visual proof** (show it working)
4. **How it works** (simple steps or details)
5. **Proof** (who uses it, what results)
6. **CTA** (try it or see demo)

---

## Feature Page Structure

### Section 1: Hero

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [← Back to Features]                                           │
│                                                                 │
│  Managing 5 Different                                           │
│  Vendor Dashboards?                                             │
│                                                                 │
│  wibipOS unifies Ruckus, Edgecore, OpenWiFi, Fortinet,         │
│  and more under one management layer. Add new vendors          │
│  without adding new dashboards.                                 │
│                                                                 │
│  [■ See It In Action]    [Start Free Sandbox →]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key principle:** Headline is a **question** the reader is asking themselves. Not a feature name.

---

### Section 2: Visual Proof

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │     [Large screenshot or video of the feature]          │   │
│  │                                                         │   │
│  │     Show the actual dashboard with multiple vendors     │   │
│  │     visible. Annotate key areas if helpful.             │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Screenshot: Full-width, high quality, actual product
- Optional: Annotations/callouts pointing to key areas
- Optional: Short video loop showing the feature in action

---

### Section 3: How It Works

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  HOW IT WORKS                                                   │
│                                                                 │
│  ┌─────────┐       ┌─────────┐       ┌─────────┐               │
│  │         │       │         │       │         │               │
│  │   01    │ ───── │   02    │ ───── │   03    │               │
│  │         │       │         │       │         │               │
│  │ Connect │       │ wibipOS │       │ Manage  │               │
│  │ your    │       │ unifies │       │ from    │               │
│  │ vendors │       │ them    │       │ one UI  │               │
│  │         │       │         │       │         │               │
│  └─────────┘       └─────────┘       └─────────┘               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- 3 steps max (simple)
- Each step: Number, short title, one-line description
- Connected with lines or arrows
- Optional icons

---

### Section 4: Capabilities (Details)

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  WHAT'S INCLUDED                                                │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ ✓ Ruckus Integration    │  │ ✓ Edgecore Integration  │      │
│  │   Full VSZ/SZ support   │  │   Native API support    │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ ✓ OpenWiFi/TIP          │  │ ✓ Fortinet              │      │
│  │   NetExperience ready   │  │   Firewall management   │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ ✓ Custom Integrations   │  │ ✓ Future Vendors        │      │
│  │   Via Live SDK          │  │   Add any via API       │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- 2-column grid of capabilities
- Checkmark + title + short description
- Keep each item to 1-2 lines

---

### Section 5: Proof Point

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  "We manage 6 different vendor types across 1,000      │   │
│  │  schools from one wibipOS instance."                   │   │
│  │                                                         │   │
│  │  — Julian Edwards, MsTECH                              │   │
│  │                                                         │   │
│  │  [Read the Jamaica Case Study →]                       │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Testimonial card with link to full case study
- Creates bridge between feature and real-world proof

---

### Section 6: Related Features

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  RELATED FEATURES                                               │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ Single Pane     │  │ Live SDK        │  │ Open API        │ │
│  │ of Glass        │  │                 │  │                 │ │
│  │                 │  │ Custom          │  │ Integrate       │ │
│  │ One dashboard   │  │ integrations    │  │ your systems    │ │
│  │ for everything  │  │ built for you   │  │                 │ │
│  │                 │  │                 │  │                 │ │
│  │ [Learn more →]  │  │ [Learn more →]  │  │ [Learn more →]  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Section 7: CTA

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Ready to unify your vendors?                                   │
│                                                                 │
│  [■ Start Your 30-Day Sandbox]    [Schedule a Demo →]          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Feature Page Headlines (Pain-Point Questions)

Each feature page should have a **question** headline:

| Feature | Headline |
|---------|----------|
| Multi-Vendor | "Managing 5 Different Vendor Dashboards?" |
| Single Pane of Glass | "Still Jumping Between Tabs to Check Network Status?" |
| Live SDK | "Can't Hire the Wi-Fi Engineers You Need?" |
| Open API / BYOTS | "Spending $100K/Year on Custom Integrations?" |
| Scale | "Can Your Platform Handle a 1,000-Site Deployment?" |

---

# PART 3: ABOUT PAGE

## The Problem with Current About Page

- No soul
- Generic "we're a company" copy
- Missing the founding story (10 years, $8M, 350K hours)
- No team (you mentioned this might not be needed—I disagree, see below)
- Doesn't build trust

## Why Team Matters

For enterprise/MSP buyers, **who** is behind the product matters. They're not buying software—they're betting their business on a partner.

**Minimum team section:** Founder(s) + key leadership. Not everyone, just enough to show "real people with relevant experience built this."

If you don't want to show team, you MUST compensate with more **credibility** (awards, logos, testimonials, press).

---

## About Page Structure

### Section 1: Hero

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ABOUT WIBUZ                                                    │
│                                                                 │
│  10 Years. $8M. 350,000 Hours.                                  │
│  One Mission.                                                   │
│                                                                 │
│  We're building the operating system for multi-vendor Wi-Fi    │
│  so MSPs can stop fighting their tools and start growing       │
│  their business.                                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Headline: Lead with the investment numbers—this is your credibility
- Subhead: One-sentence mission

---

### Section 2: The Origin Story

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE STORY                                                      │
│                                                                 │
│  ┌────────────────────────┐  ┌────────────────────────────────┐│
│  │                        │  │                                ││
│  │  [Photo of Magnus     │  │  In 2014, Magnus Johansson     ││
│  │   or early product    │  │  saw a problem: MSPs and       ││
│  │   or team working]    │  │  telcos were trapped by        ││
│  │                        │  │  vendor lock-in. Every new    ││
│  │                        │  │  hardware vendor meant a new  ││
│  │                        │  │  management system, new       ││
│  │                        │  │  training, new headaches.     ││
│  │                        │  │                                ││
│  │                        │  │  He started building wibipOS  ││
│  │                        │  │  —a vendor-agnostic layer     ││
│  │                        │  │  that could unify any Wi-Fi   ││
│  │                        │  │  hardware under one roof.     ││
│  │                        │  │                                ││
│  └────────────────────────┘  └────────────────────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Section 3: Timeline (The Journey)

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE JOURNEY                                                    │
│                                                                 │
│  2014 ──●────────────────────────────────────────────────────  │
│         │  Founded. Started building the platform.              │
│         │                                                       │
│  2016 ──●────────────────────────────────────────────────────  │
│         │  CommScope partnership begins. First telco            │
│         │  deployments with Ruckus.                             │
│         │                                                       │
│  2019 ──●────────────────────────────────────────────────────  │
│         │  10+ US telcos enabled. 10,000+ locations.            │
│         │                                                       │
│  2023 ──●────────────────────────────────────────────────────  │
│         │  Jamaica schools deployment. OpenWiFi integration.    │
│         │  Broadband Communities Tech Partner of the Year.      │
│         │                                                       │
│  2024 ──●────────────────────────────────────────────────────  │
│         │  CommScope partnership ends. wibipOS opens to MSPs.   │
│         │                                                       │
│  2025 ──●────────────────────────────────────────────────────  │
│         │  Telecom Council Innovation Showcase.                 │
│         │  Expanding Jamaica to 1,000 schools.                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Details:**
- Vertical timeline with dots and connecting line
- Year: Bold, gold color
- Event: 1-2 lines, text-secondary

---

### Section 4: The Numbers

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  BY THE NUMBERS                                                 │
│                                                                 │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐   │
│  │   10      │  │   $8M     │  │  350K     │  │   10+     │   │
│  │   Years   │  │  Invested │  │  Dev Hrs  │  │  Telcos   │   │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘   │
│                                                                 │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐   │
│  │  10,000+  │  │   100+    │  │  1,000    │  │    6      │   │
│  │ Locations │  │ Use Cases │  │  Schools  │  │  Vendors  │   │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Section 5: Leadership (Optional but Recommended)

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  LEADERSHIP                                                     │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │                         │  │                         │      │
│  │  ┌─────────────────┐    │  │  ┌─────────────────┐    │      │
│  │  │                 │    │  │  │                 │    │      │
│  │  │    [Photo]      │    │  │  │    [Photo]      │    │      │
│  │  │                 │    │  │  │                 │    │      │
│  │  └─────────────────┘    │  │  └─────────────────┘    │      │
│  │                         │  │                         │      │
│  │  Magnus Johansson       │  │  [Other Leader]         │      │
│  │  Founder & CEO          │  │  [Title]                │      │
│  │                         │  │                         │      │
│  │  [LinkedIn →]           │  │  [LinkedIn →]           │      │
│  │                         │  │                         │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Alternative if no team photos:**
Show logos of companies leadership has worked at, or just skip this section and add more credibility (awards, press logos).

---

### Section 6: Awards & Recognition

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  RECOGNITION                                                    │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ 🏆                       │  │ 🏆                       │      │
│  │ Broadband Communities   │  │ Telecom Council         │      │
│  │ Technology Partner      │  │ Innovation Showcase     │      │
│  │ of the Year             │  │ Class of 2025           │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Section 7: CTA

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Ready to join the journey?                                     │
│                                                                 │
│  [■ Start Your 30-Day Sandbox]    [Talk to Our Team →]         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# IMPLEMENTATION

## Updated Claude Code Prompt

Add this to your setup instructions:

```
ADDITIONAL REQUIRED READING:

Read wibuz-page-design-specs.md before building ANY page other than the homepage.

This document contains:
- Case Study page structure and layout
- Feature page structure and layout
- About page structure and layout

Follow these specs EXACTLY. Do not invent your own layouts.

CASE STUDY PAGES must follow the narrative arc:
Hero (outcome hook) → Customer → Challenge → Solution → Tech Stack → Results → Testimonials → CTA

FEATURE PAGES must follow the focused structure:
Pain headline (question) → Visual proof → How it works → Capabilities → Proof point → Related features → CTA

ABOUT PAGE must follow the credibility structure:
Hero (numbers) → Origin story → Timeline → Stats → Leadership (optional) → Awards → CTA
```

---

## Page Priority Order

1. **Jamaica Case Study** — Your flagship, most proof
2. **Multi-Vendor Feature Page** — Core differentiator
3. **About Page** — Builds trust
4. **Other case studies** — Social proof depth
5. **Other feature pages** — SEO and buyer journey

---

## Visual Consistency Checklist

All pages must use:
- [ ] Same color palette (gold accent, layered darks)
- [ ] Same typography scale
- [ ] Same spacing system (8px grid)
- [ ] Same card/container patterns
- [ ] Same CTA hierarchy (primary gold, secondary outline)
- [ ] Same section label treatment (small, uppercase, gold, tracked wide)

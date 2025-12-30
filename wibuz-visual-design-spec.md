# WiBUZ Visual Design Specification

## The Problem We're Solving

The homepage follows the SaaS Academy frameworks correctly (positioning, proof, structure) but looks visually generic. This document provides **concrete design patterns** to elevate it to best-in-class.

---

## Design Philosophy

**We are NOT building:**
- A dark theme because dark is trendy
- A generic SaaS template
- A "good enough" startup site

**We ARE building:**
- A sophisticated, enterprise-grade experience
- A site that signals "these people know what they're doing"
- Visual craft that matches the 10-year/$8M product investment story

---

## Reference Sites (Study These)

Before making any visual decisions, study how these sites achieve sophistication:

1. **Linear.app** — Master of dark mode depth, subtle gradients, purposeful animation
2. **Vercel.com** — Clean typography hierarchy, strategic use of black/white contrast
3. **Stripe.com** — Light mode done right, but study their gradient work and spacing
4. **Raycast.com** — Dark mode with warmth, excellent card design
5. **Resend.com** — Minimalist dark, beautiful typography
6. **Planetscale.com** — Technical product, approachable design

---

## Color System (Not Just "Dark")

### The Mistake
Generic dark mode: `background: #000` or `#0a0a0a` with white text. Flat, lifeless, cheap.

### The Fix
**Layered dark with depth and warmth:**

```css
/* Background Layers (creates depth) */
--bg-base: #09090b;        /* Deepest - page background */
--bg-raised: #18181b;      /* Cards, sections */
--bg-elevated: #27272a;    /* Hover states, active elements */
--bg-overlay: #3f3f46;     /* Modals, dropdowns */

/* Accent (WiBUZ Blue - use sparingly) */
--accent: #3b82f6;         /* Primary blue */
--accent-soft: #1d4ed8;    /* Darker variant */
--accent-glow: rgba(59, 130, 246, 0.15);  /* Glow effects */

/* Text Hierarchy (not just white) */
--text-primary: #fafafa;   /* Headlines, important */
--text-secondary: #a1a1aa; /* Body text */
--text-tertiary: #71717a;  /* Captions, meta */
--text-muted: #52525b;     /* Disabled, hints */

/* Borders (subtle, not harsh) */
--border-subtle: rgba(255, 255, 255, 0.06);
--border-default: rgba(255, 255, 255, 0.1);
--border-strong: rgba(255, 255, 255, 0.15);

/* Gradients (the secret sauce) */
--gradient-subtle: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
--gradient-glow: radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%);
```

### How to Apply

**Hero section:**
- Base background: `--bg-base`
- Add subtle radial gradient glow behind headline (very subtle, 10-15% opacity)
- This creates a "spotlight" effect that draws the eye

**Cards:**
- Background: `--bg-raised`
- Border: `--border-subtle`
- On hover: Background shifts to `--bg-elevated`, border to `--border-default`
- Add `--gradient-subtle` overlay for dimensionality

**Sections:**
- Alternate between `--bg-base` and `--bg-raised` to create rhythm
- Never use harsh divider lines—let background shifts define sections

---

## Typography (Hierarchy is Everything)

### The Mistake
Same font weight everywhere. Headlines don't stand out. Body text competes with headings.

### The Fix

```css
/* Font: Inter (or Geist if you want more modern) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px - labels, meta */
--text-sm: 0.875rem;   /* 14px - captions */
--text-base: 1rem;     /* 16px - body */
--text-lg: 1.125rem;   /* 18px - large body */
--text-xl: 1.25rem;    /* 20px - small headings */
--text-2xl: 1.5rem;    /* 24px - section intros */
--text-3xl: 1.875rem;  /* 30px - H3 */
--text-4xl: 2.25rem;   /* 36px - H2 */
--text-5xl: 3rem;      /* 48px - H1 */
--text-6xl: 3.75rem;   /* 60px - Hero headline */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.1;   /* Headlines */
--leading-snug: 1.3;    /* Subheadlines */
--leading-normal: 1.5;  /* Body text */
--leading-relaxed: 1.7; /* Long-form reading */

/* Letter Spacing */
--tracking-tighter: -0.02em;  /* Large headlines */
--tracking-tight: -0.01em;    /* Medium headlines */
--tracking-normal: 0;         /* Body */
--tracking-wide: 0.02em;      /* Labels, buttons */
```

### Application

**Hero Headline:**
```css
font-size: var(--text-6xl);
font-weight: var(--font-bold);
line-height: var(--leading-tight);
letter-spacing: var(--tracking-tighter);
color: var(--text-primary);
```

**Hero Subhead:**
```css
font-size: var(--text-xl);
font-weight: var(--font-normal);
line-height: var(--leading-relaxed);
color: var(--text-secondary);
max-width: 600px; /* Constrain for readability */
```

**Section Headlines (H2):**
```css
font-size: var(--text-4xl);
font-weight: var(--font-semibold);
line-height: var(--leading-tight);
letter-spacing: var(--tracking-tight);
color: var(--text-primary);
```

**Body Text:**
```css
font-size: var(--text-base);
font-weight: var(--font-normal);
line-height: var(--leading-normal);
color: var(--text-secondary);
```

---

## Spacing System (Rhythm Creates Calm)

### The Mistake
Random padding and margins. No consistent rhythm. Feels chaotic.

### The Fix
Use an 8px base grid. Everything is a multiple of 8.

```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Application

**Section Padding:**
- Desktop: `padding: var(--space-24) 0` (96px top/bottom)
- Mobile: `padding: var(--space-16) 0` (64px top/bottom)

**Content Max Width:**
- Max container: `1280px`
- Content width: `1024px` for text-heavy sections
- Narrow content: `768px` for focused reading

**Between Elements:**
- Headline to subhead: `var(--space-6)` (24px)
- Subhead to CTA: `var(--space-8)` (32px)
- Section headline to content: `var(--space-12)` (48px)
- Between cards: `var(--space-6)` (24px)

---

## Cards & Containers

### The Mistake
Flat cards with harsh borders. No depth or interaction.

### The Fix

```css
/* Base Card */
.card {
  background: var(--bg-raised);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: var(--space-8);
  transition: all 0.2s ease;
}

/* Card Hover (subtle lift) */
.card:hover {
  background: var(--bg-elevated);
  border-color: var(--border-default);
  transform: translateY(-2px);
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.3),
    0 2px 4px -2px rgba(0, 0, 0, 0.3);
}

/* Featured Card (with glow) */
.card-featured {
  background: var(--bg-raised);
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: var(--space-8);
  box-shadow: 0 0 40px var(--accent-glow);
}

/* Glass Card (for overlays) */
.card-glass {
  background: rgba(24, 24, 27, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
}
```

### Corner Radius Scale
- Small elements (badges, pills): `6px`
- Buttons: `8px`
- Cards: `16px`
- Large containers: `24px`

---

## Buttons & CTAs

### Primary CTA (Start Your 30-Day Sandbox)
```css
.btn-primary {
  background: var(--accent);
  color: white;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  padding: var(--space-4) var(--space-8);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #2563eb; /* Slightly darker */
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}
```

### Secondary CTA (Schedule a Demo)
```css
.btn-secondary {
  background: transparent;
  color: var(--text-secondary);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  padding: var(--space-4) var(--space-8);
  border-radius: 8px;
  border: 1px solid var(--border-default);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  color: var(--text-primary);
  border-color: var(--border-strong);
  background: var(--bg-raised);
}
```

### Button Hierarchy Rule
Primary CTA should be **visually dominant**:
- Larger (or same size with filled background)
- Colored background vs transparent
- Positioned first (left in horizontal layout)

---

## Imagery & Visual Elements

### Logo Strip (Telco/Vendor Logos)
```css
.logo-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  opacity: 0.6; /* Subtle, not competing */
  filter: grayscale(100%) brightness(200%); /* White-ish on dark */
  transition: opacity 0.2s ease;
}

.logo-strip:hover {
  opacity: 0.8;
}

.logo-strip img {
  height: 24px; /* Consistent height */
  width: auto;
}
```

### Proof Bar (Stats)
```css
.proof-bar {
  display: flex;
  justify-content: center;
  gap: var(--space-16);
  padding: var(--space-8) 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.proof-stat {
  text-align: center;
}

.proof-stat-value {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
}

.proof-stat-label {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}
```

### Badge (Awards)
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--bg-raised);
  border: 1px solid var(--border-subtle);
  border-radius: 999px; /* Pill shape */
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.badge-icon {
  font-size: var(--text-base);
}
```

---

## Hero Section Pattern

### Structure
```
┌────────────────────────────────────────────────────────────┐
│  [Badge: 🏆 Telecom Council 2025...]                       │
│                                                            │
│           Production-Ready OpenWiFi.                       │
│            Deploy in 15 Minutes.                           │
│                                                            │
│  wibipOS is the enterprise wrapper for OpenWiFi—like       │
│  Red Hat for Linux, Android for phones. Run Ruckus,        │
│  Edgecore, NetExperience, Fortinet, and more from          │
│  one dashboard. No vendor lock-in.                         │
│                                                            │
│  [■ Start Your 30-Day Sandbox]  [Schedule a Demo →]        │
│                                                            │
│  ─────────────────────────────────────────────────────     │
│  10 Years Building  |  $8M Invested  |  350K Dev Hours     │
│  ─────────────────────────────────────────────────────     │
│                                                            │
│  [Ruckus] [Edgecore] [NetExperience] [Actiontec] [Fortinet]│
└────────────────────────────────────────────────────────────┘
```

### Visual Details
- Badge: Top center, subtle, pill-shaped
- Headline: Centered, largest text on page, slight glow effect behind it
- Subhead: Centered, max-width 600px, secondary text color
- CTAs: Centered, primary left, secondary right, clear size hierarchy
- Proof bar: Full width, subtle borders top/bottom, creates visual break
- Logo strip: Grayscale, low opacity, consistent heights

### Background Treatment
```css
.hero {
  background: var(--bg-base);
  position: relative;
  overflow: hidden;
}

/* Subtle gradient glow behind headline */
.hero::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(
    ellipse at center,
    rgba(59, 130, 246, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
}
```

---

## Section Patterns

### Problem Section
- Background: `--bg-raised` (slightly lighter than hero)
- Three cards in a row (desktop), stack on mobile
- Each card has: Large stat number (accent color or white), description below
- Cards have subtle hover effect

### Proof/Case Study Section
- Background: `--bg-base`
- Left: Story text
- Right: Visual (image, logo cluster, or mini-timeline)
- Testimonial below with photo, quote, name/title

### Value Props Section (3 Cards)
- Background: `--bg-raised`
- Cards side by side (desktop)
- Each card: Screenshot/visual at top, headline, description, link
- Cards should feel interactive (hover states)

### Credibility Section (Telco Logos)
- Background: `--bg-base`
- Logos in a row, grayscale, subtle
- Disclaimer in smaller text below
- Featured testimonial with photo

---

## Animation & Motion

### Principles
- **Subtle**: Never distract from content
- **Purposeful**: Animation should guide attention
- **Fast**: 150-300ms for micro-interactions
- **Eased**: Use ease-out for enters, ease-in for exits

### Recommended Animations

**Fade Up on Scroll (sections):**
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}
```

**Button Hover:**
```css
.btn {
  transition: all 0.2s ease;
}
.btn:hover {
  transform: translateY(-1px);
}
```

**Card Hover:**
```css
.card {
  transition: all 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
```

**Logo Strip (subtle pulse on load):**
```css
.logo-strip {
  animation: fadeIn 1s ease-out;
}
```

### What to Avoid
- Bouncing animations
- Slow transitions (>500ms)
- Animation on every element
- Parallax scrolling (feels dated)
- Auto-playing carousels

---

## Mobile Considerations

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Mobile Adjustments
- Hero headline: `--text-4xl` instead of `--text-6xl`
- Section padding: `--space-16` instead of `--space-24`
- Cards: Stack vertically with `--space-6` gap
- Logo strip: Wrap to 2 rows if needed, or horizontal scroll
- CTAs: Stack vertically, primary on top, full width

---

## Visual Design Agent (Updated Prompt)

Replace the Visual Design Agent prompt in wibuz-multi-agent-system.md with this:

```
You are now the VISUAL DESIGN AGENT.

FIRST: Read wibuz-visual-design-spec.md completely. This contains the exact design system, color palette, typography scale, spacing system, and component patterns you must follow.

Your job is to implement this design system precisely, not invent your own.

REVIEW CHECKLIST:
- [ ] Colors match the specified palette (layered darks, not flat black)
- [ ] Typography follows the scale and hierarchy
- [ ] Spacing uses the 8px grid system
- [ ] Cards use the specified patterns (background, border, hover)
- [ ] Buttons follow primary/secondary hierarchy
- [ ] Hero has subtle gradient glow behind headline
- [ ] Logo strips are grayscale, subtle opacity
- [ ] Sections alternate backgrounds to create rhythm
- [ ] Animations are subtle and purposeful
- [ ] Mobile breakpoints are handled

IMPLEMENTATION:
1. Audit current styles against the spec
2. List every deviation from the spec
3. Fix each deviation systematically
4. Verify the result matches reference sites (Linear, Vercel, Raycast)

EXIT CRITERIA:
- Homepage matches the visual design spec exactly
- Feels as polished as Linear.app
- No flat/generic dark mode—has depth and sophistication
- Clear visual hierarchy guides the eye
- Interactions feel premium (hover states, transitions)
```

---

## Summary

This document transforms "make it look good" into **specific, implementable design decisions**.

Claude Code now has:
1. Exact color values (not just "dark mode")
2. Typography scale with specific sizes/weights
3. Spacing system based on 8px grid
4. Component patterns (cards, buttons, badges)
5. Section-by-section visual structure
6. Animation guidelines
7. Reference sites to emulate

Add this file to your project alongside the other three documents.

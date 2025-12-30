# WiBUZ Framework Guardian

## Purpose
This document is the **constraint layer** for all homepage iterations. Before making ANY change—copy, design, layout, UX—Claude Code must check this document to ensure framework alignment is preserved.

---

## The Three Frameworks (Non-Negotiable)

### 1. Homepage Positioning Blueprint

**Rules that cannot be broken:**

- **Single audience**: Every word speaks to MSP CEOs seeking production-ready OpenWiFi. No trying to also speak to telcos, IT directors, or developers on the homepage.

- **Mechanism before outcome**: Always explain WHAT wibipOS is (enterprise wrapper for OpenWiFi) before promising results. Never lead with vague outcomes like "transform your business."

- **No multi-order benefits**: Claims must be first-order (direct). "Deploy in 15 minutes" ✓ | "Accelerate digital transformation" ✗

- **Clear > clever**: If a heading sounds like marketing, rewrite it. Plain language wins.

- **Concrete reference points**: Keep the Red Hat/Android analogies. These anchor understanding.

- **Section order matters**: Hero → Problem → Solution → Proof → Value Props → Credibility → Pricing → CTA. Don't reorganize.

### 2. Design Authority

**Rules that cannot be broken:**

- **7-second test**: Hero must answer "what is this?" and "who is it for?" in 7 seconds. Any design change that buries this fails.

- **Credibility above fold**: Proof bar (10 years/$8M/350K hours) and award badges must remain visible without scrolling on desktop.

- **Trust signals visible**: Telco logos and testimonials cannot be hidden, minimized, or pushed below the fold.

- **Pricing signals market**: Pricing section must signal "enterprise/MSP-grade"—not SMB/startup vibes.

- **One primary CTA**: "Start Your 30-Day Sandbox" is primary. "Schedule a Demo" is secondary. Never give them equal visual weight.

### 3. Feature Page Expander

**Rules that cannot be broken:**

- **Pain-point headlines**: Every feature page starts with a question the MSP is asking themselves. Not a feature name.

- **One problem per page**: Don't merge feature pages. Each solves ONE pain.

- **Proof on every page**: Each feature page needs at least one proof point (stat, case study snippet, or testimonial).

---

## Allowed Improvements (Go Wild)

These changes are ENCOURAGED as long as framework rules above are preserved:

### Visual Design
- Color refinements (keep dark mode primary)
- Spacing and padding adjustments
- Animation and micro-interactions (subtle, not distracting)
- Typography sizing and hierarchy
- Icon choices
- Image treatments and overlays
- Gradient and shadow effects
- Card and container styling
- Hover states and transitions

### UX Improvements
- Mobile responsiveness fixes
- Navigation improvements
- Scroll behavior
- Loading states
- Button styling and states
- Form UX
- Accessibility improvements
- Performance optimization

### Layout Within Sections
- Column arrangements
- Card layouts
- Grid adjustments
- Visual hierarchy within a section
- Testimonial presentation format
- Logo strip styling
- Stat/proof bar presentation

### Copy Refinements
- Tightening sentences (shorter is better)
- Removing filler words
- Improving clarity
- Fixing awkward phrasing
- **BUT**: Do not change the core message or positioning

---

## Banned Changes (Hard Stop)

These changes break framework alignment. Do NOT make them:

| Change | Why It Breaks Alignment |
|--------|------------------------|
| Adding a second audience (e.g., "For MSPs and Telcos") | Violates single-audience rule |
| Moving credibility below the fold | Violates Design Authority 7-second test |
| Changing "Production-Ready OpenWiFi" to something vaguer | Violates mechanism-before-outcome |
| Making both CTAs equal size/prominence | Violates one-primary-CTA rule |
| Removing the Red Hat/Android analogy | Removes critical reference point |
| Merging feature pages | Violates one-problem-per-page |
| Removing proof points from any section | Violates proof requirement |
| Adding banned words (leverage, synergy, etc.) | Violates writing rules |
| Reorganizing section order | Section order is intentional |

---

## Iteration Checklist

Before implementing ANY change, Claude Code must verify:

```
□ Does this change preserve the single-audience focus (MSP CEOs)?
□ Does the hero still pass the 7-second test?
□ Is credibility still visible above the fold?
□ Is the primary CTA still more prominent than secondary?
□ Are all proof points still present and visible?
□ Does the copy still lead with mechanism, not vague outcomes?
□ Are we using plain language (no banned words)?
□ Is section order preserved?
```

If ANY box is unchecked, the change violates framework alignment and must be revised.

---

## How to Use This Document

**When starting an iteration session, tell Claude Code:**

```
Read wibuz-framework-guardian.md before making any changes. 
All improvements must pass the iteration checklist. 
If a change would violate any framework rule, flag it and suggest an alternative that achieves the same goal while staying aligned.
```

**When reviewing changes, ask Claude Code:**

```
Does this change pass the Framework Guardian checklist? 
Show me which rules it preserves and confirm no banned changes were made.
```

---

## Continuous Improvement Loop

```
┌─────────────────────────────────────────────────────┐
│  1. Identify improvement (design, UX, copy)         │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│  2. Check Framework Guardian                        │
│     - Is this an allowed improvement?               │
│     - Does it pass the iteration checklist?         │
└─────────────────────────────────────────────────────┘
                         │
            ┌────────────┴────────────┐
            │                         │
            ▼                         ▼
     ┌─────────────┐          ┌─────────────────┐
     │   YES       │          │   NO            │
     │   Proceed   │          │   Find          │
     │             │          │   alternative   │
     └─────────────┘          └─────────────────┘
            │                         │
            └────────────┬────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│  3. Implement change                                │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│  4. Verify: Does homepage still pass 7-second test? │
│     - Show to someone unfamiliar                    │
│     - Can they explain what wibipOS does in 7 sec?  │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│  5. Ship or iterate again                           │
└─────────────────────────────────────────────────────┘
```

---

## Quick Reference: The Core Message

If you ever need to reset, this is the core positioning that must never change:

**What:** wibipOS — the enterprise wrapper for OpenWiFi

**For whom:** MSP CEOs who want production-ready OpenWiFi without vendor lock-in

**Analogy:** Red Hat for Linux, Android for phones

**Proof:** 10 years, $8M, 350K dev hours → 10+ US telcos → 1,000 schools multi-vendor

**Primary CTA:** Start Your 30-Day Sandbox

**Hero headline:** "Production-Ready OpenWiFi. Deploy in 15 Minutes."

---

*This document is the source of truth for framework alignment. When in doubt, check here.*

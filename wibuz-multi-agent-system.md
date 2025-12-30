# WiBUZ Multi-Agent Iteration System

## Overview

This system runs Claude Code through multiple specialized "agent roles" in a round-robin loop until the homepage passes all quality gates. Each agent has a specific focus, constraints, and exit criteria.

**The Loop:**
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐      │
│   │ UI/UX   │───▶│ Visual  │───▶│ Copy    │───▶│ Perf    │      │
│   │ Agent   │    │ Design  │    │ Editor  │    │ Agent   │      │
│   └─────────┘    │ Agent   │    │ Agent   │    └─────────┘      │
│        ▲         └─────────┘    └─────────┘         │           │
│        │                                            │           │
│        │         ┌─────────┐    ┌─────────┐         │           │
│        │         │ Access- │    │  QA     │         │           │
│        └─────────│ ibility │◀───│ Agent   │◀────────┘           │
│                  │ Agent   │    └─────────┘                     │
│                  └─────────┘                                    │
│                       │                                         │
│                       ▼                                         │
│              ┌─────────────────┐                                │
│              │ Framework       │                                │
│              │ Guardian Check  │                                │
│              └─────────────────┘                                │
│                       │                                         │
│            ┌──────────┴──────────┐                              │
│            │                     │                              │
│         PASS                   FAIL                             │
│            │                     │                              │
│            ▼                     ▼                              │
│     ┌───────────┐        ┌─────────────┐                        │
│     │   SHIP    │        │ Loop Again  │────────────────────────┘
│     └───────────┘        └─────────────┘
│
└──────────────────────────────────────────────────────────────────┘
```

---

## Agent Definitions

### Agent 1: UI/UX Agent

**Role:** User experience and interaction design specialist

**Focus Areas:**
- Information hierarchy and flow
- User journey optimization
- Click paths and CTA placement
- Mobile responsiveness
- Navigation clarity
- Form UX
- Scroll behavior
- Cognitive load reduction

**Prompt to Activate:**
```
You are now the UI/UX AGENT.

Your sole focus is user experience and interaction design. Review the current homepage and identify issues with:
- Information hierarchy (is the most important content most prominent?)
- User flow (can a visitor easily understand what to do next?)
- Mobile experience (does it work perfectly on phone?)
- CTA clarity (is the primary action obvious?)
- Cognitive load (is anything confusing or overwhelming?)

CONSTRAINTS:
- Read wibuz-framework-guardian.md first
- Do NOT change copy or messaging
- Do NOT change section order
- Do NOT change the visual design system (colors, fonts)
- ONLY improve how users interact with and navigate the content

OUTPUT:
1. List top 5 UX issues found
2. For each issue, propose a fix
3. Verify each fix passes the Framework Guardian checklist
4. Implement the fixes
5. Document what changed

EXIT CRITERIA:
- Primary CTA is immediately obvious
- Mobile experience scores 90+ on manual review
- User can understand the product and next step within 7 seconds
- No dead ends or confusing navigation
```

---

### Agent 2: Visual Design Agent

**Role:** Visual aesthetics and polish specialist

**Focus Areas:**
- Color usage and contrast
- Typography hierarchy
- Spacing and rhythm
- Visual balance
- Card and container design
- Shadows and depth
- Gradients and backgrounds
- Icon and image treatment
- Hover states and transitions
- Overall "premium feel"

**Prompt to Activate:**
```
You are now the VISUAL DESIGN AGENT.

Your sole focus is making the homepage visually stunning and premium. Think Linear, Vercel, Stripe level polish. Review and improve:
- Color contrast and usage
- Typography scale and hierarchy
- Spacing rhythm (consistent padding/margins)
- Visual depth (shadows, layers)
- Card and section styling
- Background treatments
- Micro-interactions and hover states
- Overall aesthetic cohesion

CONSTRAINTS:
- Read wibuz-framework-guardian.md first
- Do NOT change copy or messaging
- Do NOT change section order or content structure
- Do NOT move credibility below the fold
- Keep dark mode as primary
- ONLY improve visual aesthetics

DESIGN PRINCIPLES TO FOLLOW:
- Less is more (remove visual clutter)
- Consistent spacing system (use multiples of 4 or 8)
- Clear visual hierarchy (one focal point per section)
- Premium feel (subtle gradients, refined shadows)
- Purposeful animation (subtle, not distracting)

OUTPUT:
1. List top 5 visual improvements needed
2. For each, show before/after approach
3. Verify changes pass Framework Guardian
4. Implement the improvements
5. Document what changed

EXIT CRITERIA:
- Homepage looks as polished as Linear.app or Vercel.com
- Consistent spacing throughout
- Clear visual hierarchy in every section
- Premium, trustworthy aesthetic
- No visual clutter or inconsistency
```

---

### Agent 3: Copy Editor Agent

**Role:** Copywriting and messaging refinement specialist

**Focus Areas:**
- Clarity and concision
- Removing filler words
- Strengthening headlines
- Improving readability
- Ensuring proof points land
- CTA copy optimization
- Tone consistency
- Banned word enforcement

**Prompt to Activate:**
```
You are now the COPY EDITOR AGENT.

Your sole focus is making every word count. Review all copy and improve:
- Clarity (can this be said more simply?)
- Concision (can this be shorter?)
- Impact (does this land with force?)
- Proof integration (are stats/claims prominent?)
- CTA strength (do buttons compel action?)
- Readability (is it scannable?)

CONSTRAINTS:
- Read wibuz-framework-guardian.md first
- Do NOT change the core positioning or messaging strategy
- Do NOT add banned words (leverage, synergy, robust, etc.)
- Do NOT change section order
- ONLY refine how the message is expressed

COPY RULES:
- Every sentence must earn its place
- Cut filler words (very, really, just, that)
- Prefer short words over long ones
- Lead with outcomes, back with proof
- Write at 8th grade reading level
- Headlines: 6-10 words max
- Subheads: 20-30 words max

OUTPUT:
1. List top 5 copy improvements needed
2. Show before/after for each
3. Verify changes preserve core messaging
4. Implement the refinements
5. Document what changed

EXIT CRITERIA:
- Zero banned words
- All headlines under 10 words
- Every claim has adjacent proof
- Copy is scannable (passes 5-second scan test)
- CTA copy is action-oriented and clear
```

---

### Agent 4: Performance Agent

**Role:** Speed and technical optimization specialist

**Focus Areas:**
- Page load time
- Core Web Vitals (LCP, FID, CLS)
- Image optimization
- Code splitting
- Bundle size
- Font loading
- Third-party script impact
- Caching strategy

**Prompt to Activate:**
```
You are now the PERFORMANCE AGENT.

Your sole focus is making the homepage blazing fast. Target metrics:
- Lighthouse Performance: 95+
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Review and optimize:
- Image formats and sizes (use WebP/AVIF, proper dimensions)
- Font loading strategy (font-display: swap, subset fonts)
- JavaScript bundle size (code split, tree shake)
- Third-party scripts (defer, lazy load)
- CSS optimization (purge unused, critical CSS inline)
- Caching headers
- Lazy loading for below-fold content

CONSTRAINTS:
- Read wibuz-framework-guardian.md first
- Do NOT change visual appearance
- Do NOT remove content or features
- ONLY improve technical performance

OUTPUT:
1. Run Lighthouse audit, document current scores
2. List top 5 performance issues
3. Implement fixes for each
4. Re-run Lighthouse, document new scores
5. Document what changed

EXIT CRITERIA:
- Lighthouse Performance: 95+
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Total page weight < 1MB
```

---

### Agent 5: Accessibility Agent

**Role:** Accessibility and inclusive design specialist

**Focus Areas:**
- WCAG 2.1 AA compliance
- Screen reader compatibility
- Keyboard navigation
- Color contrast ratios
- Focus states
- Alt text
- ARIA labels
- Semantic HTML

**Prompt to Activate:**
```
You are now the ACCESSIBILITY AGENT.

Your sole focus is making the homepage usable by everyone. Target: WCAG 2.1 AA compliance.

Review and fix:
- Color contrast (minimum 4.5:1 for text, 3:1 for large text)
- Keyboard navigation (all interactive elements reachable)
- Focus states (visible focus indicators)
- Screen reader experience (logical reading order, ARIA labels)
- Alt text (all images have descriptive alt text)
- Semantic HTML (proper heading hierarchy, landmark regions)
- Form labels (all inputs have associated labels)
- Link text (descriptive, not "click here")

CONSTRAINTS:
- Read wibuz-framework-guardian.md first
- Do NOT change visual design significantly
- Do NOT remove content
- ONLY add accessibility improvements

OUTPUT:
1. Run accessibility audit (axe, Lighthouse a11y)
2. List all issues by severity
3. Fix all critical and serious issues
4. Re-run audit, document improvements
5. Document what changed

EXIT CRITERIA:
- Lighthouse Accessibility: 95+
- Zero critical accessibility issues
- Full keyboard navigation works
- Screen reader experience is logical
- All color contrasts pass WCAG AA
```

---

### Agent 6: QA Agent

**Role:** Quality assurance and bug detection specialist

**Focus Areas:**
- Cross-browser testing
- Responsive breakpoints
- Broken links
- Console errors
- Form functionality
- CTA functionality
- Visual regression
- Edge cases

**Prompt to Activate:**
```
You are now the QA AGENT.

Your sole focus is finding and fixing bugs. Be ruthless. Test everything.

Test checklist:
- [ ] All links work (no 404s)
- [ ] All CTAs function correctly
- [ ] Forms submit properly
- [ ] No console errors or warnings
- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Works on iOS Safari, Android Chrome
- [ ] Responsive at all breakpoints (320px, 768px, 1024px, 1440px, 1920px)
- [ ] Images load correctly
- [ ] Videos play correctly
- [ ] Hover states work
- [ ] Animations don't break layout
- [ ] No text overflow or truncation issues
- [ ] No layout shifts during load

CONSTRAINTS:
- Read wibuz-framework-guardian.md first
- Do NOT change design or copy unless fixing a bug
- ONLY fix functional issues

OUTPUT:
1. Document all bugs found (with screenshots/descriptions)
2. Categorize by severity (critical, major, minor)
3. Fix all critical and major bugs
4. Re-test to verify fixes
5. Document remaining minor issues for backlog

EXIT CRITERIA:
- Zero critical bugs
- Zero major bugs
- All links functional
- All CTAs functional
- No console errors
- Works on all major browsers
- Works on all breakpoints
```

---

## Master Orchestration Prompt

Use this prompt to run the full round-robin loop:

```
MULTI-AGENT HOMEPAGE ITERATION

You will cycle through 6 specialized agent roles to bring this homepage to best-in-class quality. Each agent has specific focus areas and exit criteria.

SETUP:
1. Read wibuz-framework-guardian.md - this is your constraint layer for ALL agents
2. Read wibuz-homepage-implementation-plan.md - this is the original spec

THE LOOP:
Run each agent in order. After each agent completes:
1. Document what changed
2. Verify Framework Guardian compliance
3. Move to next agent

AGENT ORDER:
1. UI/UX Agent → Focus on user experience
2. Visual Design Agent → Focus on aesthetics
3. Copy Editor Agent → Focus on messaging clarity
4. Performance Agent → Focus on speed
5. Accessibility Agent → Focus on inclusive design
6. QA Agent → Focus on bugs and testing

AFTER ALL 6 AGENTS COMPLETE:

Run the FRAMEWORK GUARDIAN CHECK:
```
□ Single audience focus preserved (MSP CEOs)?
□ Hero passes 7-second test?
□ Credibility above the fold?
□ Primary CTA more prominent than secondary?
□ All proof points present?
□ Mechanism before outcome in messaging?
□ No banned words?
□ Section order preserved?
```

If ALL boxes checked → SHIP IT
If ANY box unchecked → Identify violation, fix it, run affected agents again

LOOP LIMIT:
Maximum 3 full cycles. If not passing after 3 cycles, document remaining issues and ship with known limitations.

START NOW:
Begin with Agent 1 (UI/UX Agent). Announce which agent you are activating, then execute that agent's full process.
```

---

## Quick Single-Agent Prompts

If you want to run just one agent:

**UI/UX only:**
```
Activate UI/UX Agent. Read wibuz-framework-guardian.md first. Review homepage UX, list top 5 issues, fix them, document changes.
```

**Visual Design only:**
```
Activate Visual Design Agent. Read wibuz-framework-guardian.md first. Make homepage visually premium (Linear/Vercel level), document changes.
```

**Copy only:**
```
Activate Copy Editor Agent. Read wibuz-framework-guardian.md first. Tighten all copy, remove filler, strengthen headlines, document changes.
```

**Performance only:**
```
Activate Performance Agent. Read wibuz-framework-guardian.md first. Get Lighthouse to 95+, document changes.
```

**Accessibility only:**
```
Activate Accessibility Agent. Read wibuz-framework-guardian.md first. Achieve WCAG 2.1 AA compliance, document changes.
```

**QA only:**
```
Activate QA Agent. Read wibuz-framework-guardian.md first. Find all bugs, fix critical/major, document remaining.
```

---

## Exit Gates (Ship Criteria)

The homepage is ready to ship when ALL gates pass:

### Gate 1: Framework Alignment ✓
- [ ] Passes all 8 Framework Guardian checkboxes

### Gate 2: UX Quality ✓
- [ ] 7-second test passes (external person can explain product)
- [ ] Primary CTA immediately obvious
- [ ] Mobile experience excellent

### Gate 3: Visual Quality ✓
- [ ] Looks as polished as Linear/Vercel/Stripe
- [ ] Consistent spacing and typography
- [ ] Premium, trustworthy feel

### Gate 4: Copy Quality ✓
- [ ] Zero banned words
- [ ] All headlines under 10 words
- [ ] Every claim has adjacent proof

### Gate 5: Performance ✓
- [ ] Lighthouse Performance: 95+
- [ ] LCP < 2.5s

### Gate 6: Accessibility ✓
- [ ] Lighthouse Accessibility: 95+
- [ ] Keyboard navigation works

### Gate 7: QA ✓
- [ ] Zero critical bugs
- [ ] Zero major bugs
- [ ] Works all browsers/devices

---

## Iteration Log Template

Track each cycle:

```
## Cycle [N]

### Agent 1: UI/UX
- Issues found: 
- Fixes implemented:
- Exit criteria met: Yes/No

### Agent 2: Visual Design
- Issues found:
- Fixes implemented:
- Exit criteria met: Yes/No

### Agent 3: Copy Editor
- Issues found:
- Fixes implemented:
- Exit criteria met: Yes/No

### Agent 4: Performance
- Before scores:
- After scores:
- Exit criteria met: Yes/No

### Agent 5: Accessibility
- Before scores:
- After scores:
- Exit criteria met: Yes/No

### Agent 6: QA
- Bugs found:
- Bugs fixed:
- Exit criteria met: Yes/No

### Framework Guardian Check
- [ ] Single audience
- [ ] 7-second test
- [ ] Credibility above fold
- [ ] Primary CTA prominent
- [ ] Proof points present
- [ ] Mechanism before outcome
- [ ] No banned words
- [ ] Section order preserved

### Cycle Result: PASS / FAIL → [Next action]
```

---

*This system ensures continuous improvement while maintaining strategic alignment. Each agent makes the homepage better in their domain without breaking what others have built.*

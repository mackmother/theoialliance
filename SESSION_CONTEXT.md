# OIA Website Session Context

## Project Overview
Open Infrastructure Alliance (OIA) website for MSP CEOs. Built with Next.js 14, using Mangeo design language (gold #f0a559, purple #a93295).

## Perfect Fit Customer (PFC)
**MSP CEO** who falls into:
- **56%** wanting multi-vendor support
- **44%** unsatisfied with current vendor
- **37%** can't grow or find talent
- Looking for cheaper alternatives

Source: Maravedis survey data

## Core Value Proposition
"Staff augmentation" - access to 25 engineers without hiring. Partnership pricing: $10K-$100K/month (most start $10K-$15K). Alternative to building in-house ($240K+/year for 2 SDK engineers, 2+ years to build).

## Key Pages & Status

| Page | Status | Notes |
|------|--------|-------|
| `/` (Home) | Good | MangeoHero with PFC qualifier, 30-day promise |
| `/pricing` | **Updated this session** | New "25 Engineers. Zero Hires." hero, "The Real Math" comparison, Julian quote |
| `/journey` | Good | 5-step journey, 30-day promise |
| `/why-wibuz` | Good | Maravedis stats, swipeable STUCK/UNLOCKED cards |
| `/demo` | Needs work | Could improve headline to JTBD focus |
| `/case-studies/jamaica` | Reference | Julian Edwards/MsTECH story - $120K/year proof point |

## SaaS Wisdom Analysis Summary

### Frameworks Applied
- **Homepage Positioning Blueprint**: Single audience focus, clear > clever
- **JTBD**: "Help me say YES to multi-vendor deals"
- **Pricing Page 5 Questions**: What do I get? What does it cost? Can I trust this?
- **Demo Page 5 Questions**: Who is this for? What is this? How does it work?
- **Dog Whistle Copy**: Hyper-targeted messaging for ideal buyer

### Key Findings
1. **Why-WiBUZ is strongest** - uses actual customer research data
2. **Home and Journey solid** - clear 30-day promise, good PFC qualifier
3. **Pricing now addressed** - was "clever," now "clear" with transparency
4. **Demo could improve** - connect call more directly to JTBD
5. **Social proof gap** - need more testimonials across pages

### Priority Recommendations (Not Yet Done)
1. Add real customer testimonials to more pages
2. Strengthen talent pain messaging (the 37%)
3. Add risk reversal language to /demo
4. Consider renaming /pricing to /partnership

## Recent Commits
- `12a8843` - Reframe pricing page with engineer comparison + Julian quote
- `6db879a` - Add swipeable Sound Familiar cards for mobile on /why-wibuz

## Key Files
- `/src/app/pricing/page.tsx` - Just updated with engineer comparison
- `/src/app/why-wibuz/page.tsx` - Swipeable cards, Maravedis stats
- `/src/app/case-studies/jamaica/page.tsx` - Julian Edwards story, $120K quote
- `/src/components/sections/MangeoHero.tsx` - Main hero component

## Design System
- **Gold**: #f0a559
- **Purple**: #a93295
- **Background**: #0a0a0f / rgba(20, 18, 25, x)
- **Gradient borders**: Common pattern throughout
- **Glass cards**: backdrop-filter blur with gradient borders

## Dev Server
```bash
cd "/Users/mackmother/Documents/WiBUZ Home Page"
npm run dev
# http://localhost:3000
```

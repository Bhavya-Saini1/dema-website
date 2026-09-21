---
name: dema-event-copy
description: >-
  Three-pass workflow for writing or rewriting DEMA event page copy. Use when
  the user asks to rewrite an event page (e.g. DEM Soiree), improve event
  headlines or blurbs, refresh event copy, or run the DEMA copywriting
  workflow. Chains copywriting → copy-editing → humanizer with DEMA voice.
---

# DEMA event copy workflow

Run this end-to-end when rewriting event pages. Do not skip passes.

## Setup (read first)

1. Read `.agents/product-marketing.md` for voice and constraints.
2. Read `lib/next-event.ts` (and the target `app/events/*/page.tsx`) for facts.
3. Read and follow these skills in order:
   - `.agents/skills/copywriting/SKILL.md` (Corey Haines marketingskills)
   - `.agents/skills/copy-editing/SKILL.md`
   - `~/.cursor/skills/humanizer/SKILL.md` (personal skill; already installed)

If a listed skill file is missing, stop and tell the user which path is missing.
Reference files under `references/` are optional progressive disclosure.

## Pass 1 — Draft (`copywriting`)

Adapt conversion copywriting for a **student org event page**, not a SaaS landing page.

- Page type: event / landing
- Primary action: show up (or follow the real CTA if one exists in the file)
- Audience: DEM students, faculty, alumni
- Offer: the evening itself (meal, people, place) — only facts from source files

Produce section copy for the page structure already in use (hero lede, what to expect, details). Give 2–3 headline/lede options with one-line rationale each. Prefer the option that sounds closest to DEMA voice samples.

**Strip SaaS defaults:** no "Start free trial" style CTAs, no fake social proof, no urgency timers in copy, no benefit triads.

## Pass 2 — Edit (`copy-editing`)

Run focused sweeps only:

1. Clarity
2. Voice and tone (match `.agents/product-marketing.md`)
3. Specificity (dates, place names, constraints like "No TCard needed")
4. Quick word-level cuts (filler, buzzwords)

Skip or lightly touch: Heightened Emotion, Zero Risk, Prove It — unless inventing claims. Never add proof you do not have.

## Pass 3 — Humanize (`humanizer`)

File mode on the proposed prose: remove AI tells while keeping every fact. Match DEMA voice samples (short sentences, fragments OK).

## Apply

1. Update the target page component with the final prose only.
2. Update `metadata.description` and `lib/next-event.ts` `blurb` if they drift from the page.
3. Do not change layout, components, or design tokens unless the user asked for design work.
4. Summarize for the user: chosen lede, what changed, any facts you still need.

## Checklist

```
- [ ] Read product-marketing.md + next-event.ts
- [ ] Pass 1 draft with 2–3 lede options
- [ ] Pass 2 clarity / voice / specificity
- [ ] Pass 3 humanizer
- [ ] Applied to page (+ meta/blurb if needed)
- [ ] No invented logistics
```

## Invoke

`/dema-event-copy` or: "rewrite the DEM Soiree page using the DEMA event copy workflow"

# DEMA product marketing context

Use this before writing or editing website copy.

## Brand

- **Name:** DEMA (Digital Enterprise Management Association)
- **What:** Student club for Digital Enterprise Management at UTM (University of Toronto Mississauga)
- **Audience:** DEM students first; also faculty, alumni, and any UTM student interested in events
- **Proof:** Club Excellence Award 2023–2024 (use sparingly; not on every page)

## Voice

Match existing site copy. Prefer short sentences and fragments over essay paragraphs.

**Do**
- Lead with facts: who, what, when, where
- Use concrete nouns: Blind Duck, Industry Night, TCard, Instagram
- Keep CTA labels short and literal: "Join the club", "Application", "All events"
- Sound like a confident student org, not a startup landing page

**Don't**
- SaaS marketing: "unlock", "elevate", "seamless", "community of innovators"
- Fake urgency or FOMO
- Forced triads ("network, learn, and grow")
- Exclamation points
- Inventing RSVP links, prices, speakers, or benefits that are not in source files

## Event pages

Primary job: tell someone if they should show up, and give them the logistics.

Typical structure already on the site:
1. Event name (hero)
2. One short supporting paragraph
3. When / where / constraints (details panel or list)
4. Optional "What to expect" — one purpose, one short paragraph

Hero budget: brand/event name, one headline or lede, one short supporting sentence, logistics, dominant image. No stat strips or promo badges.

## Canonical voice samples

From the homepage:
> The student club for Digital Enterprise Management at UTM.

> DEMA is the student club for Digital Enterprise Management at UTM. In 2024, DEMA received the 2023-2024 Club Excellence Award.

From Join:
> Students in any program. Two forms.

> No selection process. Fill the form and you are on the list for events, workshops, and Industry Night.

From DEM Soirée (baseline tone):
> Start the year with networking, free food, and a look at what DEMA has planned for 2026–2027. Open to every UTM student, any program. Wednesday 30 September. Doors at 6:40 PM at The Blind Duck. Free admission.

## Source of truth for upcoming event facts

Read `lib/next-event.ts` for name, date, time, place, blurb, and image. Do not invent logistics that contradict that file.

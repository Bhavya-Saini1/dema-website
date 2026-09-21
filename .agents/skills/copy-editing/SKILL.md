---
name: copy-editing
description: "When the user wants to edit, review, or improve existing marketing copy, or refresh outdated content. Also use when the user mentions 'edit this copy,' 'review my copy,' 'copy feedback,' 'proofread,' 'polish this,' 'make this better,' 'copy sweep,' 'tighten this up,' 'this reads awkwardly,' 'clean up this text,' 'too wordy,' 'sharpen the messaging,' 'refresh this content,' 'update this page,' 'this content is outdated,' or 'content audit.' Use this when the user already has copy and wants it improved or refreshed rather than rewritten from scratch. For writing new copy, see copywriting."
metadata:
  version: 2.0.0
---

# Copy Editing

You are an expert copy editor specializing in marketing and conversion copy. Your goal is to systematically improve existing copy through focused editing passes while preserving the core message.

## Core Philosophy

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md` filename, in older setups), read it before editing. Use brand voice and customer language from that context to guide your edits.

Good copy editing isn't about rewriting—it's about enhancing. Each pass focuses on one dimension, catching issues that get missed when you try to fix everything at once.

**Key principles:**
- Don't change the core message; focus on enhancing it
- Multiple focused passes beat one unfocused review
- Each edit should have a clear reason
- Preserve the author's voice while improving clarity

---

## The Seven Sweeps Framework

Edit copy through seven sequential passes, each focusing on one dimension. After each sweep, loop back to check previous sweeps aren't compromised.

### Sweep 1: Clarity

**Focus:** Can the reader understand what you're saying?

**What to check:**
- Confusing sentence structures
- Unclear pronoun references
- Jargon or insider language
- Ambiguous statements
- Missing context

**Common clarity killers:**
- Sentences trying to say too much
- Abstract language instead of concrete
- Assuming reader knowledge they don't have
- Burying the point in qualifications

**Process:**
1. Read through quickly, highlighting unclear parts
2. Don't correct yet—just note problem areas
3. After marking issues, recommend specific edits
4. Verify edits maintain the original intent

**After this sweep:** Confirm the "Rule of One" (one main idea per section) and "You Rule" (copy speaks to the reader) are intact.

### Sweep 2: Voice and Tone

**Focus:** Is the copy consistent in how it sounds?

**What to check:**
- Shifts between formal and casual
- Inconsistent brand personality
- Mood changes that feel jarring
- Word choices that don't match the brand

**Process:**
1. Read aloud to hear inconsistencies
2. Mark where tone shifts unexpectedly
3. Recommend edits that smooth transitions
4. Ensure personality remains throughout

**After this sweep:** Return to Clarity Sweep to ensure voice edits didn't introduce confusion.

### Sweep 3: So What

**Focus:** Does every claim answer "why should I care?"

For every statement, ask "Okay, so what?" If the copy doesn't answer that question with a deeper benefit, it needs work.

❌ "Our platform uses AI-powered analytics"
✅ "Our AI-powered analytics surface insights you'd miss manually—so you can make better decisions in half the time"

**After this sweep:** Return to Voice and Tone, then Clarity.

### Sweep 4: Prove It

**Focus:** Is every claim supported with evidence?

- Unsubstantiated claims
- Missing social proof
- "Best" or "leading" without evidence

Flag unsupported assertions. Recommend adding proof or softening claims. Never invent proof.

**After this sweep:** Return to So What, Voice and Tone, then Clarity.

### Sweep 5: Specificity

**Focus:** Is the copy concrete enough to be compelling?

| Vague | Specific |
|-------|----------|
| Save time | Save 4 hours every week |
| Many customers | 2,847 teams |
| Fast results | Results in 14 days |
| Improve your workflow | Cut your reporting time in half |

Highlight vague words. Add numbers, timeframes, or examples from real sources only.

**After this sweep:** Return to Prove It, So What, Voice and Tone, then Clarity.

### Sweep 6: Heightened Emotion

**Focus:** Does the copy make the reader feel something?

Add emotional texture while staying authentic. Ensure emotion serves the message (not manipulation). For DEMA event pages, prefer restraint — skip intensifying FOMO.

**After this sweep:** Return to Specificity, Prove It, So What, Voice and Tone, then Clarity.

### Sweep 7: Zero Risk

**Focus:** Have we removed every barrier to action?

- Friction near CTAs
- Unanswered objections
- Unclear next steps

For events: address real barriers (location, TCard, cost, who it's for) only with known facts.

**After this sweep:** Return through all previous sweeps one final time.

---

## Quick-Pass Editing Checks

### Word-Level Checks

**Cut these words:**
- Very, really, extremely, incredibly (weak intensifiers)
- Just, actually, basically (filler)
- In order to (use "to")
- That (often unnecessary)
- Things, stuff (vague)

**Replace these:**

| Weak | Strong |
|------|--------|
| Utilize | Use |
| Implement | Set up |
| Leverage | Use |
| Facilitate | Help |
| Innovative | New |
| Robust | Strong |
| Seamless | Smooth |
| Cutting-edge | New/Modern |

### Sentence-Level Checks

- One idea per sentence
- Vary sentence length (mix short and long)
- Front-load important information
- Max 3 conjunctions per sentence
- No more than 25 words (usually)

### Paragraph-Level Checks

- One topic per paragraph
- Short paragraphs (2-4 sentences for web)
- Strong opening sentences
- Logical flow between paragraphs

---

## Common Copy Problems & Fixes

### Problem: Corporate Speak
**Fix:** Ask "How would a human say this?" and use those words

### Problem: Weak Opening
**Fix:** Lead with the reader's problem or desired outcome

### Problem: Buried CTA
**Fix:** Make the CTA obvious, early, and repeated

### Problem: Generic Claims
**Fix:** Specify who, how, and by how much

### Problem: Mixed Audiences
**Fix:** Pick one audience and write directly to them

---

## Task-Specific Questions

1. What's the goal of this copy? (Awareness, conversion, retention)
2. What action should readers take?
3. Are there specific concerns or known issues?
4. What proof/evidence do you have available?
5. Is this new copy or a refresh of existing content?

---

## Related Skills

- **copywriting**: For writing new copy from scratch
- **dema-event-copy**: DEMA event page three-pass workflow

Source: https://github.com/coreyhaines31/marketingskills (skill copy-editing v2.0.0, references condensed)

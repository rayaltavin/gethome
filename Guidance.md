# GUIDANCE.md
# CAN I GET HOME NOW BEBE?
## Premium Interactive Relationship Memory Website

**Project Type:** Personal Relationship Memory Website  
**Project Name:** Can I Get Home Now Bebe?  
**Target Retrospective Date:** December 2, 2026  
**Primary Brand Color:** Burgundy  
**Development Environment:** Visual Studio Code + GitHub Copilot  
**Deployment:** GitHub Pages

---

# TABLE OF CONTENTS

1. Project Overview
2. Story Background and Important Dates
3. Project Vision and Emotional Direction
4. Technology Stack
5. Project Architecture
6. Brand Identity and Design System
7. UI/UX Guidelines
8. Website Structure and Storytelling Sections
9. Relationship Timeline and Memory Gallery
10. Date Calculation and Relationship Counter
11. Final Section: From 0 to 1
12. Animation and Interaction
13. Audio Experience
14. Content Management
15. Privacy and Security
16. Responsive Design
17. Accessibility
18. Performance Optimization
19. SEO and Metadata
20. GitHub Pages Deployment
21. Development Workflow
22. Testing and Quality Assurance
23. Final Acceptance Criteria
24. GitHub Copilot Development Instructions

---

# 1. PROJECT OVERVIEW

Build a premium, elegant, emotional, and interactive relationship memory website titled:

# "Can I Get Home Now Bebe?"

This website is a personal digital scrapbook documenting a meaningful relationship.

The story begins when the relationship officially started on November 23, 2024.

The first in-person meeting and first date happened on January 19, 2025.

The relationship ended on November 2, 2026.

The retrospective website is intended to be prepared for December 2, 2026.

The website should preserve meaningful memories, express gratitude, and acknowledge the relationship with honesty and maturity.

The final section may contain a gentle invitation to start again someday, if both people genuinely want it.

This is not a website intended to force reconciliation.

It is a personal expression of affection, gratitude, growth, and memories.

## Main Objectives

- Preserve meaningful memories.
- Document the relationship journey.
- Celebrate the little moments.
- Express appreciation.
- Acknowledge the end of the relationship.
- Communicate personal feelings sincerely.
- Leave an optional and respectful possibility of beginning again.

## Main Theme

"Can I Get Home Now Bebe?"

The phrase represents warmth, comfort, belonging, and the feeling of home.

The website should communicate:

"Maybe home was never just a place. Maybe, for a while, home was a person, a feeling, and all the little moments we shared."

The emotional atmosphere should be:

- Romantic.
- Nostalgic.
- Warm.
- Intimate.
- Cinematic.
- Elegant.
- Honest.
- Peaceful.

Avoid excessive sadness, desperation, or emotional pressure.

---

# 2. STORY BACKGROUND AND IMPORTANT DATES

The following dates are factual and must remain accurate throughout the website.

| Date | Event |
|---|---|
| November 23, 2024 | Relationship officially started |
| January 19, 2025 | First in-person meeting and first date |
| November 2, 2026 | Relationship ended |
| December 2, 2026 | Retrospective website date |

## Important Distinction

There are two different starting points:

**November 23, 2024**

This represents the beginning of the relationship.

**January 19, 2025**

This represents the first in-person meeting and the first-date memory journey.

The primary relationship memory counter must use January 19, 2025, not November 23, 2024.

## Relationship Duration

Start date: January 19, 2025

End date: November 2, 2026

Elapsed duration: 652 days.

Inclusive calendar-day count: 653 days.

The main website display must be:

# 652 DAYS OF US

January 19, 2025 — November 2, 2026

The website must explain that this number represents elapsed days between the first date and the breakup date.

Do not confuse the 652-day counter with the entire period since the relationship began.

---

# 3. PROJECT VISION AND EMOTIONAL DIRECTION

The website must tell a complete emotional story.

The visitor should feel as if they are opening a personal digital memory album.

The narrative should move through these emotional stages:

1. Curiosity and anticipation.
2. The beginning of the relationship.
3. The first meeting.
4. Shared memories.
5. Appreciation of ordinary moments.
6. Reflection and gratitude.
7. Acceptance of the ending.
8. A gentle possibility of starting again.

## Core Message

"I don't want to remember our story only by how it ended. I want to remember all the beautiful moments that made it worth experiencing."

## Emotional Boundaries

The website must never:

- Make the recipient feel guilty.
- Demand a response.
- Demand reconciliation.
- Ask the recipient to wait.
- Suggest that the author's happiness depends on the recipient.
- Blame the recipient for the relationship ending.
- Use emotional manipulation.
- Treat the recipient's affection as an obligation.

The final invitation must be optional.

Both people should remain free to choose their own paths.

---

# 4. TECHNOLOGY STACK

Use a modern, maintainable React-based frontend stack.

## Core Technology

| Technology | Purpose |
|---|---|
| React 19 | Frontend component architecture |
| TypeScript | Type safety and maintainability |
| Vite | Development server and build tooling |
| Tailwind CSS | Utility-first styling |
| Motion for React | Animations and transitions |
| Lucide React | Icons |
| React Photo Album | Responsive photo gallery |
| Yet Another React Lightbox | Fullscreen photo viewing |
| GitHub Pages | Static website hosting |
| GitHub Actions | Automated deployment |

Use compatible stable package versions.

Verify package compatibility before installation.

Do not use experimental packages unless there is a clear requirement.

## Recommended Additional Libraries

Optional:

- `clsx` for conditional CSS classes.
- `date-fns` for date utilities if needed.
- `react-intersection-observer` only if native IntersectionObserver is insufficient.

Avoid installing unnecessary dependencies.

## Development Principles

- Component-based architecture.
- Reusable UI elements.
- Strict TypeScript configuration.
- Data-driven content.
- Clean separation of concerns.
- Mobile-first design.
- Static deployment.
- No backend.
- No database.
- No authentication.

---

# 5. PROJECT ARCHITECTURE

Use the following recommended project structure:

```text
can-i-get-home-now-bebe/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── first-date/
│   │   ├── memories/
│   │   └── gallery/
│   │
│   ├── music/
│   │   └── background.mp3
│   │
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   └── MusicPlayer.tsx
│   │   │
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   │
│   │   ├── beginning/
│   │   │   ├── BeforeWeMet.tsx
│   │   │   └── FirstDate.tsx
│   │   │
│   │   ├── timeline/
│   │   │   ├── TimelineSection.tsx
│   │   │   └── TimelineItem.tsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── GallerySection.tsx
│   │   │   └── GalleryLightbox.tsx
│   │   │
│   │   ├── memories/
│   │   │   └── LittleThingsSection.tsx
│   │   │
│   │   ├── reflection/
│   │   │   └── ReflectionSection.tsx
│   │   │
│   │   ├── counter/
│   │   │   └── DaysCounter.tsx
│   │   │
│   │   └── closing/
│   │       └── FinalInvitation.tsx
│   │
│   ├── data/
│   │   ├── relationship.ts
│   │   ├── timeline.ts
│   │   ├── memories.ts
│   │   └── gallery.ts
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useReducedMotion.ts
│   │
│   ├── utils/
│   │   └── dateCalculator.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── guidance.md
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .gitignore
```

The project may be adjusted when necessary, but keep components logically separated.

Do not place the entire application inside one large React component.

---

# 6. BRAND IDENTITY AND DESIGN SYSTEM

# PRIMARY BRAND COLOR: BURGUNDY

Burgundy is the primary identity of this website because it is the recipient's favorite color.

The color must be used consistently across the experience.

## Color Palette

```css
:root {
  /* Primary Burgundy */
  --color-primary: #641E32;
  --color-primary-dark: #3D1422;
  --color-primary-light: #8B354D;

  /* Secondary Colors */
  --color-dusty-rose: #B77C83;
  --color-soft-rose: #D5AEB0;

  /* Background */
  --color-warm-ivory: #F7F0E9;
  --color-blush-beige: #E8D8D0;
  --color-paper: #FCF9F5;

  /* Typography */
  --color-charcoal: #302927;
  --color-text-primary: #302927;
  --color-text-secondary: #81756D;

  /* Borders */
  --color-border: #E3D5CC;
}
```

## Color Usage

| Element | Color |
|---|---|
| Main brand | Burgundy |
| Primary buttons | Burgundy |
| Important headings | Burgundy or charcoal |
| Main background | Warm ivory |
| Secondary background | Blush beige |
| Cinematic sections | Dark wine |
| Handwritten accents | Dusty rose |
| Body text | Charcoal |
| Secondary text | Muted brown-gray |

## Design Rules

- Burgundy must be the primary brand identity.
- Warm ivory should remain the main background.
- Use dark wine selectively for cinematic sections.
- Use blush beige for cards and secondary sections.
- Avoid making every section burgundy.
- Preserve generous whitespace.
- Ensure sufficient contrast.
- Avoid excessive gradients.
- Avoid excessive hearts and decorative icons.

## Typography

Use Google Fonts:

**Cormorant Garamond**

For:
- Hero titles.
- Section headings.
- Large date displays.
- Emotional statements.
- Final invitation.

**DM Sans**

For:
- Body text.
- Navigation.
- Descriptions.
- Buttons.
- Metadata.

**Caveat**

For:
- Handwritten notes.
- Small annotations.
- Personal signatures.
- Scrapbook accents.

Typography must be responsive and readable.

---

# 7. UI/UX GUIDELINES

The design direction is:

**Premium Romantic Editorial + Cinematic Digital Scrapbook.**

The website should resemble a professionally designed digital memory book.

## Visual Characteristics

- Large editorial typography.
- Asymmetric layouts.
- Cinematic photography.
- Warm paper-like backgrounds.
- Elegant section separators.
- Subtle film grain.
- Soft shadows.
- Carefully balanced whitespace.
- Minimal decorative elements.
- Consistent burgundy accents.

## Inspiration

Think of:
- A luxury editorial magazine.
- A vintage film photo album.
- A handwritten personal letter.
- A cinematic short film.
- A personal scrapbook.

Do not make the website look like:
- A generic Valentine's Day template.
- A wedding invitation.
- A commercial landing page.
- A childish romantic website.
- A social media profile.

## Navigation

A simple navigation may include:

- Our Beginning
- Memories
- Timeline
- Reflection
- 652 Days

Keep navigation unobtrusive.

On mobile, use a compact menu or simple anchor navigation.

---

# 8. WEBSITE STRUCTURE AND STORYTELLING SECTIONS

The website should feel like one continuous story.

There should be no abrupt or confusing transitions.

## SECTION 1 — HERO

### Main Title

"Can I Get Home Now Bebe?"

### Supporting Text

"A little place for the memories, the moments, and everything that once felt like home."

### Date Reference

November 23, 2024 — November 2, 2026

### Design

- Full-screen hero.
- Burgundy and warm ivory palette.
- One meaningful hero photograph if available.
- Cinematic image treatment.
- Subtle film grain.
- Large Cormorant Garamond heading.
- Soft entrance animation.
- Minimal scroll indicator.

### CTA

"Open our little story"

Clicking the CTA should smoothly scroll to the next section.

Do not add unnecessary buttons.

---

## SECTION 2 — BEFORE WE MET

### Title

"Before January 19, 2025"

### Narrative

"Somehow, our story had already started before we finally met in person."

### Main Date

November 23, 2024

### Caption

"The day we started calling this something more."

### Design

Use a minimal timeline or letter-style composition.

Visually distinguish the beginning of the relationship from the first date.

Use a small photograph or decorative date card if appropriate.

---

## SECTION 3 — OUR FIRST DATE

### Title

"January 19, 2025"

### Subtitle

"The day our story became a memory we could actually hold."

This section is one of the most important moments of the website.

Include:
- First meeting photograph.
- First date photograph.
- Location, if appropriate.
- Short personal story.
- A memorable detail.
- Date stamp.

Use a cinematic editorial image layout.

Do not invent any real-life events, places, conversations, or details.

Use placeholders until actual content is provided.

Example:

"[Write what you remember about the first time you saw each other.]"

---

## SECTION 4 — OUR LITTLE TIMELINE

### Title

"Little Moments, Big Memories"

Build an interactive vertical timeline.

Every timeline item should support:

- Date.
- Title.
- Short description.
- Photograph.
- Optional location.
- Personal note.

Suggested structure:

1. Our First Date — January 19, 2025.
2. Our First Adventure — [DATE].
3. One of My Favorite Days — [DATE].
4. The Ordinary Days I Miss — [DATE].
5. A Moment That Made Me Smile — [DATE].
6. Our Last Chapter — November 2, 2026.

All entries except the known dates are placeholders.

### Interactions

- Smooth scrolling.
- Scroll reveal.
- Expandable memory details.
- Image lightbox.
- Subtle timeline progress.
- Mobile-friendly vertical layout.

The timeline should prioritize storytelling over quantity.

---

## SECTION 5 — THE LITTLE THINGS

### Title

"It's Always the Little Things"

Create a premium photo gallery.

Include:
- Random photographs.
- Daily moments.
- Food.
- Places.
- Funny memories.
- Ordinary moments.
- Meaningful photographs.

Use a responsive editorial or masonry layout.

Each image should support an optional caption.

Example captions:

"One of those ordinary days I didn't know I would miss."

"Nothing extraordinary, but somehow everything."

"Little things that became big memories."

Do not use captions that invent facts.

### Gallery Experience

- Responsive grid.
- Smooth lightbox.
- Keyboard navigation.
- Image captions.
- Touch support.
- Lazy loading.

Use React Photo Album and Yet Another React Lightbox.

---

## SECTION 6 — THINGS I NEVER WANT TO FORGET

### Title

"If I Could Keep A Few Things"

Create a collection of short reflections.

Suggested themes:

- The way we laughed.
- Little habits.
- Familiar conversations.
- Places we visited.
- Ordinary days.
- Moments of comfort.
- Lessons from loving each other.

Use handwritten-style notes and scrapbook-inspired cards.

Keep each note concise.

The tone must remain warm and appreciative.

Avoid blame and guilt.

---

## SECTION 7 — WHAT THIS CHAPTER MEANT

Use a darker cinematic transition.

### Title

"Some Chapters Stay With Us"

### Suggested Narrative

"I know not every story continues the way we once imagined.

But I don't want to remember ours only by how it ended.

There were beautiful moments, lessons, laughter, and a version of life that I will always be grateful to have experienced.

Thank you for being part of that chapter."

This text is a starting point and should be editable.

Do not suggest that either person was solely responsible for the ending.

Use:
- Dark wine background.
- Ivory typography.
- Minimal animation.
- Spacious text layout.
- Subtle film texture.

---

## SECTION 8 — 652 DAYS OF US

This is the main emotional highlight.

### Main Display

# 652

DAYS OF US

### Date Range

January 19, 2025 — November 2, 2026

### Supporting Text

"652 days of memories, little moments, lessons, laughter, and a story that became part of us."

### Design

- Large editorial number.
- Burgundy typography.
- Warm ivory or dark wine background.
- Elegant date typography.
- Subtle number reveal.
- Minimal visual elements.

The number must be dynamically calculated.

Do not hardcode the counter without a verification test.

Do not turn this into a live countdown to reconciliation.

---

## SECTION 9 — FROM 0 TO 1, SOMEDAY?

This is the final section.

The emotional tone should be hopeful, gentle, mature, and respectful.

### Main Title

"Can We Start From 0 to 1 Again?"

### Main Visual

Display:

# 0 DAYS

Then introduce:

"Maybe someday, if life brings us back to the same place, and if we both still want it..."

Then:

"Could we begin again?"

### Final Visual

# 0 → 1

### Suggested Closing Message

"I don't expect an answer, and I don't want you to feel any pressure.

I just wanted to leave this little possibility here.

If someday we both feel ready, maybe we can meet again not as the people we used to be, but as two people who have grown, learned, and chosen each other freely.

And if life takes us somewhere else, I will still be grateful for the chapter we shared."

### Final Sign-Off

"Until then, take care of yourself, Bebe. 🤍"

### CTA Rules

The final invitation must:
- Be optional.
- Never demand a reply.
- Never ask for a promise.
- Never imply that the recipient must wait.
- Never make the recipient responsible for the author's happiness.
- Never use guilt.
- Respect the recipient's request for space.

Do not include:
- Reply now buttons.
- WhatsApp integration.
- Automatic messages.
- Forced yes/no choices.
- Countdown timers to a possible reunion.

If an interactive element is included, it should be purely decorative or reveal an optional message.

---

# 9. RELATIONSHIP TIMELINE AND MEMORY GALLERY

All memories must be data-driven.

Create separate data files for timeline entries and gallery items.

Example timeline structure:

```typescript
export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  location?: string;
  note?: string;
}

export const memories: Memory[] = [
  {
    id: "first-date",
    date: "2025-01-19",
    title: "Our First Date",
    description: "[Add your personal memory here]",
    image: "/images/first-date/photo-01.webp",
    location: "[Add location if appropriate]"
  }
];
```

Example gallery structure:

```typescript
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  date?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "memory-01",
    src: "/images/gallery/memory-01.webp",
    alt: "[Describe the photograph]",
    caption: "[Add a personal caption]"
  }
];
```

Never fabricate:
- Dates.
- Locations.
- Events.
- Conversations.
- Personal promises.
- Photographs.
- Private details.

Use clearly labeled placeholders.

---

# 10. DATE CALCULATION AND RELATIONSHIP COUNTER

Create a reusable utility:

`src/utils/dateCalculator.ts`

The counter must calculate elapsed calendar days accurately.

Start date:

January 19, 2025

End date:

November 2, 2026

Expected result:

652 elapsed days.

Inclusive count:

653 calendar days.

Use UTC-based date arithmetic or local date components converted to UTC to avoid timezone and daylight-saving errors.

Example:

```typescript
export function calculateElapsedDays(
  startDate: string,
  endDate: string
): number {
  const [startYear, startMonth, startDay] =
    startDate.split("-").map(Number);

  const [endYear, endMonth, endDay] =
    endDate.split("-").map(Number);

  const start = Date.UTC(
    startYear,
    startMonth - 1,
    startDay
  );

  const end = Date.UTC(
    endYear,
    endMonth - 1,
    endDay
  );

  return Math.round(
    (end - start) / (1000 * 60 * 60 * 24)
  );
}
```

Example:

```typescript
calculateElapsedDays(
  "2025-01-19",
  "2026-11-02"
);
```

Expected output:

```text
652
```

Add a unit test or equivalent verification.

The counter must not depend on the date the website is opened.

The end date is fixed at November 2, 2026.

---

# 11. FINAL SECTION: FROM 0 TO 1

The final section must communicate possibility without expectation.

The visual progression is:

0 → 1

Meaning:

The possibility of starting a new chapter, if both people independently choose to do so.

The number 0 represents a fresh beginning, not erasing the past.

The number 1 represents one possible first day of a new chapter.

Use subtle motion, elegant typography, and ample whitespace.

The section must not:
- Promise that the relationship will return.
- Imply that the recipient owes another chance.
- Make the recipient responsible for emotional healing.
- Turn the invitation into an ultimatum.

The website should end gracefully whether or not reconciliation ever happens.

---

# 12. ANIMATION AND INTERACTION

Use Motion for React.

Recommended animations:

- Hero text fade-in.
- Subtle image parallax.
- Scroll-triggered section reveal.
- Timeline progression.
- Gallery transitions.
- Image lightbox.
- 652 number reveal.
- 0 → 1 transition.
- Gentle page transitions if appropriate.

Animation rules:

- Keep animations subtle.
- Avoid excessive motion.
- Do not block scrolling.
- Do not create long loading sequences.
- Respect `prefers-reduced-motion`.
- Ensure interactions work on touch devices.
- Avoid unnecessary animation loops.

The content must remain readable if animations are disabled.

---

# 13. AUDIO EXPERIENCE

Optional background music may be included.

Only use audio the author has permission to use.

Requirements:

- Do not autoplay audio with sound.
- Provide an explicit play/pause control.
- Default audio to stopped.
- Respect browser autoplay restrictions.
- Show a subtle music control.
- Keep the website fully functional without audio.

The audio must not be required to understand the story.

---

# 14. CONTENT MANAGEMENT

All personal content should be easy to update without modifying complex component logic.

Keep content inside the `src/data/` directory.

Separate:
- Relationship dates.
- Timeline memories.
- Gallery images.
- Personal reflections.
- Closing message.

Example relationship configuration:

```typescript
export const relationship = {
  relationshipStart: "2024-11-23",
  firstDate: "2025-01-19",
  relationshipEnd: "2026-11-02",
  retrospectiveDate: "2026-12-02",
  title: "Can I Get Home Now Bebe?"
};
```

Do not duplicate important dates across multiple components.

Use this configuration as the single source of truth.

---

# 15. PRIVACY AND SECURITY

This is a personal relationship website.

Protect the privacy of both people.

Requirements:

- Do not expose private addresses.
- Do not expose phone numbers.
- Do not expose credentials.
- Do not publish sensitive conversations by default.
- Review screenshots before publishing.
- Remove unnecessary photo metadata where appropriate.
- Do not create a public comments section.
- Avoid analytics and tracking unless genuinely necessary.
- Do not commit secrets.
- Do not embed private chat conversations without permission.

If deployed publicly through GitHub Pages, assume anyone with the URL can access it.

An unlisted URL is not a privacy guarantee.

Consider sharing the website only after reviewing all content and respecting the recipient's boundaries.

---

# 16. RESPONSIVE DESIGN

The website must work on:

- Desktop.
- Laptop.
- Tablet.
- Mobile phones.

Mobile is a first-class design requirement.

Test these widths:

| Device | Width |
|---|---|
| Small mobile | 375px |
| Standard mobile | 390px |
| Tablet | 768px |
| Desktop | 1440px |

Requirements:

- No horizontal overflow.
- Responsive typography.
- Full-width mobile photographs where appropriate.
- Comfortable text spacing.
- Touch-friendly controls.
- Vertical mobile timeline.
- Readable gallery captions.
- No hover-only functionality.
- Responsive navigation.

---

# 17. ACCESSIBILITY

Follow accessibility best practices.

Requirements:

- Semantic HTML.
- Correct heading hierarchy.
- Meaningful alt text.
- Keyboard navigation.
- Visible focus indicators.
- Sufficient contrast.
- Accessible buttons.
- Reduced-motion support.
- Proper image descriptions.
- Accessible lightbox controls.
- Do not use color as the only indicator of meaning.

The website must remain usable without a mouse.

---

# 18. PERFORMANCE OPTIMIZATION

Optimize for a smooth mobile experience.

Requirements:

- Use WebP or AVIF images where appropriate.
- Compress large photographs.
- Use lazy loading.
- Set image dimensions to reduce layout shifts.
- Avoid unnecessary dependencies.
- Avoid large animation libraries beyond the selected stack.
- Split code where useful.
- Minimize unused CSS.
- Avoid excessive DOM elements.
- Keep the initial page load lightweight.

Do not sacrifice image quality unnecessarily.

---

# 19. SEO AND METADATA

Even though this is a personal website, include proper metadata.

Page title:

"Can I Get Home Now Bebe? — Our Little Story"

Meta description:

"A little digital scrapbook of memories, moments, and a story that will always mean something."

Add:
- Favicon.
- Theme color.
- Open Graph title.
- Open Graph description.
- Appropriate social preview image.

Do not expose private personal information in metadata.

---

# 20. GITHUB PAGES DEPLOYMENT

The website must be deployable through GitHub Pages.

Use Vite's base configuration.

Example:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/REPOSITORY_NAME/"
});
```

Replace `REPOSITORY_NAME` with the actual GitHub repository name.

Use GitHub Actions for automated deployment.

Verify:
- Production build succeeds.
- Images load correctly.
- Relative asset paths work.
- No broken links.
- No private secrets are committed.
- GitHub Pages deployment completes successfully.

Do not assume the website is deployed until the deployment workflow has been verified.

---

# 21. DEVELOPMENT WORKFLOW

Build incrementally.

Do not generate the entire website in one uncontrolled step.

## PHASE 1 — Project Setup

Tasks:

1. Inspect the existing project.
2. Create the React + TypeScript + Vite application.
3. Configure Tailwind CSS.
4. Install Motion for React.
5. Install Lucide React.
6. Install gallery dependencies.
7. Configure GitHub Pages base path.
8. Create folder structure.
9. Implement global CSS variables.
10. Establish typography and design tokens.

Deliverable:

A clean project foundation.

## PHASE 2 — Hero and Beginning

Implement:

- Hero section.
- Before We Met.
- First Date.

Focus on:
- Visual identity.
- Typography.
- Burgundy usage.
- Photography layout.
- Mobile responsiveness.

Deliverable:

The first three storytelling sections.

## PHASE 3 — Timeline and Gallery

Implement:

- Data-driven timeline.
- Memory cards.
- Responsive gallery.
- Image lightbox.
- Captions.
- Scroll reveal.

Deliverable:

Interactive memory experience.

## PHASE 4 — Reflection and Closing

Implement:

- The Little Things.
- What This Chapter Meant.
- 652 Days of Us.
- From 0 to 1, Someday?

Focus on emotional pacing and visual consistency.

Deliverable:

Complete storytelling experience.

## PHASE 5 — Animation and Audio

Implement:

- Motion transitions.
- Number reveal.
- 0 → 1 visual transition.
- Optional music control.
- Reduced-motion behavior.

Deliverable:

Polished interactive experience.

## PHASE 6 — Testing and Deployment

Tasks:

- Validate all dates.
- Test responsive layouts.
- Test gallery.
- Test audio.
- Check accessibility.
- Run production build.
- Verify GitHub Pages deployment.

Deliverable:

Production-ready website.

---

# 22. TESTING AND QUALITY ASSURANCE

Before completion, test the following.

## Functional Testing

- [ ] Navigation works.
- [ ] Hero CTA scrolls correctly.
- [ ] Timeline entries render correctly.
- [ ] Gallery images load.
- [ ] Lightbox opens and closes.
- [ ] Music controls work.
- [ ] Counter displays 652.
- [ ] Final section displays 0 → 1.
- [ ] No broken image paths.
- [ ] No console errors.

## Date Testing

- [ ] Relationship start date is November 23, 2024.
- [ ] First date is January 19, 2025.
- [ ] Breakup date is November 2, 2026.
- [ ] Retrospective date is December 2, 2026.
- [ ] Elapsed-day counter returns 652.
- [ ] Inclusive calendar count is 653.

## Responsive Testing

- [ ] 375px.
- [ ] 390px.
- [ ] 768px.
- [ ] 1440px.

## Accessibility Testing

- [ ] Keyboard navigation.
- [ ] Visible focus states.
- [ ] Alt text.
- [ ] Color contrast.
- [ ] Reduced-motion support.
- [ ] Lightbox accessibility.

## Deployment Testing

- [ ] Vite build succeeds.
- [ ] GitHub Actions succeeds.
- [ ] GitHub Pages URL works.
- [ ] Assets load from the deployed URL.

---

# 23. FINAL ACCEPTANCE CRITERIA

The project is complete when:

- [ ] Website title is "Can I Get Home Now Bebe?"
- [ ] Burgundy is the primary brand color.
- [ ] React + TypeScript + Vite architecture is implemented.
- [ ] Tailwind CSS is configured.
- [ ] Motion for React is configured.
- [ ] Website includes all nine storytelling sections.
- [ ] Relationship start date is accurate.
- [ ] First date is accurate.
- [ ] Breakup date is accurate.
- [ ] Counter displays 652 elapsed days.
- [ ] Timeline is dynamically generated.
- [ ] Personal photographs can be added easily.
- [ ] Gallery lightbox works.
- [ ] Website is responsive.
- [ ] Audio is optional.
- [ ] Accessibility requirements are respected.
- [ ] Final section includes a gentle 0 → 1 invitation.
- [ ] No manipulative CTA exists.
- [ ] Privacy requirements are respected.
- [ ] Production build succeeds.
- [ ] GitHub Pages deployment is verified.

---

# 24. GITHUB COPILOT DEVELOPMENT INSTRUCTIONS

Act as a senior frontend engineer, React architect, and premium UI/UX designer.

Read the complete `guidance.md` before implementing anything.

You are responsible for producing a polished, maintainable, production-ready personal storytelling website.

## Technical Expectations

Use:

- React 19.
- TypeScript.
- Vite.
- Tailwind CSS.
- Motion for React.
- Lucide React.
- React Photo Album.
- Yet Another React Lightbox.

## Design Expectations

The website must feel like:

- A premium digital scrapbook.
- A cinematic relationship memory.
- An elegant editorial experience.
- A nostalgic personal album.

Burgundy (#641E32) must be the primary brand identity.

Do not produce a generic romantic template.

## Coding Expectations

1. Use reusable React components.
2. Use TypeScript types and interfaces.
3. Keep content data separate from UI.
4. Use clean and maintainable code.
5. Avoid unnecessary dependencies.
6. Use responsive design.
7. Avoid fabricated memories.
8. Use placeholders when personal content is missing.
9. Validate the date calculation.
10. Respect privacy.
11. Respect accessibility.
12. Optimize mobile performance.

## Working Method

Do not implement all sections at once.

For each development phase:

1. Explain the implementation plan.
2. Inspect existing files.
3. Implement the requested phase.
4. Run the appropriate build or tests.
5. Report created and modified files.
6. Report errors or unresolved issues.
7. Wait for review before moving to the next major phase.

## Initial Task

Start with PHASE 1 only.

First inspect the current workspace and propose the architecture.

Then:

1. Initialize the project if necessary.
2. Configure React, TypeScript, and Vite.
3. Configure Tailwind CSS.
4. Install compatible dependencies.
5. Create the folder structure.
6. Create the global Burgundy Design System.
7. Implement the initial responsive Hero Section.

Do not implement the entire website in the first response.

Use temporary image placeholders.

Do not invent personal memories or relationship details.

The final objective is to create a beautiful, respectful, emotionally meaningful website that preserves the story without demanding a particular ending.

---

END OF GUIDANCE.md
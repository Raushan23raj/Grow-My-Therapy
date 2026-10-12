# Dr. Maya Reynolds, PsyD: Homepage Redesign

Grow My Therapy internship assignment: clone the [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home) homepage, then redesign it for the fictional therapist Dr. Maya Reynolds (Santa Monica, CA).

Built with **Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript**. No other UI libraries.

## Routes

| Route    | What it is |
| -------- | ---------- |
| `/`      | **Final redesign** for Dr. Maya Reynolds (Parts 2 + 3) |
| `/clone` | **Part 1 clone** of the original homepage (original copy and photos, `noindex`) |

Both pages render the **same section components**. Only the content file and the theme class differ, so the redesign keeps the original layout exactly.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000  and  http://localhost:3000/clone
npm run build && npm start
```

Deploy: push to GitHub and import the repo on [Vercel](https://vercel.com/new) (zero config). Optionally set `NEXT_PUBLIC_SITE_URL` to the final domain for canonical/OG URLs; on Vercel it falls back to the production URL automatically.

## Project structure

```
src/
  app/
    page.tsx            redesign + SEO metadata + JSON-LD (MedicalBusiness, FAQPage)
    clone/page.tsx      Part 1 clone
    globals.css         design tokens, both themes, fluid type scale
    sitemap.ts, robots.ts, icon.svg
  content/
    maya.ts             all redesign copy (single source of truth = therapist profile)
    conejo.ts           original copy for the clone
    types.ts            content shape shared by both
  components/
    home-page.tsx       section order
    site-header.tsx     nav with dropdowns + mobile menu
    site-footer.tsx
    ui.tsx              Accent (script word), Eyebrow, TextLink, PillLink, Photo
    sections/           hero, intro, audiences, quote-banner, focus-list, approach,
                        journey, methods, office (new), faq, booking
```

Headings use two inline marks in content: `*word*` renders in the handwritten accent font (like "thrive" in the original) and `_phrase_` renders in italics.

## Part 1: Clone

- Section order, grid positions, image sizes and spacing were measured from the live site at 1536px and expressed in `vw`, so the layout scales like the original. The clone's page height is within 0.5% of the original.
- Fonts: the original uses paid Typekit fonts, so I used the closest free Google fonts: **Newsreader** (for Beaufort Pro), **Mulish** (Muli), **Sacramento** (Printed Moments).
- All colors are CSS variables (`--canvas`, `--surface`, `--muted`, `--ink`, `--heading`, `--accent`, `--primary`, `--line`) exposed as Tailwind colors (`bg-canvas`, `text-accent`, …).
- Responsive: desktop, tablet and mobile (single column, full-screen mobile menu). Checked for horizontal overflow from 360px to 1536px.

## Part 2: Redesign

**Theme: "Sage & Clay"** (`.theme-maya` in `globals.css`), taken from her Santa Monica office photos (brick walls, warm wood, soft greens):

| Role | Color | Hex |
| ---- | ----- | --- |
| Primary | Eucalyptus sage | `#4F5E4B` |
| Secondary | Warm oat / sage mist | `#F4EFE7` / `#DFE3D6` |
| Accent | Santa Monica clay | `#9C563B` |
| Text | Deep olive ink | `#34382F` / `#2F3A2E` |

All text passes WCAG AA contrast (body ink is 9:1 or better; the clay accent is 4.8:1 on oat).

**Copy:** everything comes from the profile: Santa Monica location, adults only, anxiety / panic / trauma / burnout / perfectionism, CBT + EMDR + mindfulness + body-oriented work, a warm and collaborative paced approach, in-person plus California telehealth, and the office description. Body copy is first person, like the profile.

- H1: *Anxiety & trauma therapy in Santa Monica, so you can finally exhale.*
- Three services: Anxiety & Panic Therapy, Trauma Therapy & EMDR, Burnout & Perfectionism
- About section with Dr. Reynolds' photo and bio, an FAQ section, and a footer with the office address
- SEO: keyword-led title and description, one H1, location terms in headings and body, descriptive alt text, canonical URL, Open Graph, `sitemap.xml`, `robots.txt`, and JSON-LD for the practice and the FAQs

**Images:** Dr. Reynolds' headshot and both office photos come from her profile. The other photos are free-license [Unsplash](https://unsplash.com) photos chosen to fit the palette: golden-hour Santa Monica, sage and clay tones, calm and grounded moods.

| File | Unsplash photo |
| ---- | -------------- |
| hero-beach-calm.jpg | photo-1669870429401-f96561c2d08e |
| hero-palm-shadow.jpg | photo-1564132254865-639bfec4c5bf |
| intro-journaling-ocean.jpg | photo-1781456505405-76d614cf5746 |
| service-anxiety.jpg | photo-1691131120810-661c022502d8 |
| service-trauma-emdr.jpg | photo-1604881991720-f91add269bed |
| service-burnout.jpg | photo-1696664901302-cc15906e88c0 |
| santa-monica-pier-sunset.jpg | photo-1622583529718-b68ded6804d8 |
| golden-hour-walk.jpg | photo-1628712825039-bd75c6bd7bc8 |
| cta-tea-journal.jpg | photo-1648801016703-b6c59128b162 |
| cta-palm-wall.jpg | photo-1769425158426-4966b7b370ce |

## Part 3: New section, "A calm space for healing" (Our Office)

`src/components/sections/office.tsx` sits between the methods and the booking call-to-action. It uses the template's own patterns: eyebrow plus serif title with a script accent word, a hairline-ruled detail list (like "Areas of focus"), and staggered photos. It includes:

- the two office photos from the profile
- copy based on the profile's office description (quiet, private, natural light, uncluttered)
- the address, in-person and telehealth availability, and a Google Maps directions link

## Before launch

- `BOOKING_URL` in `src/content/maya.ts` points to the on-page contact section for now. Replace it with the practice's scheduling link (for example SimplePractice).
- The Terms / Privacy / Disclaimer links in the footer are placeholders.

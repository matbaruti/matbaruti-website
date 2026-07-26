## Goal

Build the complete personal-brand website for Mat Baruti — minimal, editorial, Apple/Linear/Stripe-grade — structured so your real portfolio content drops in without redesign.

Since the portfolio document, headshot, project photos, certificates and media articles are coming next, this build establishes the **design system, every page, and the content layer**. All copy will be clearly-marked placeholder scaffolding that never invents facts, awards, or statistics. When you send the document, I replace the content files — no layout work needed.

## Design foundation

- Palette exactly as specified: `#FFFFFF` background, `#111827` primary text, `#374151` secondary, `#2563EB` accent, `#0F172A` dark navy, `#F8FAFC` light gray — defined as semantic tokens, with a dark mode built by inverting navy/white through the same tokens.
- Inter loaded via the root head. Large display headings, tight tracking, generous line-height for body.
- Soft shadows, rounded corners, restrained glass only on the sticky nav. No gradients as decoration, no circuits/robots/neon.
- Motion: quiet entrance fades on scroll, subtle hover lifts on cards, smooth page transitions. Nothing that loops, counts, or draws attention to itself. Respects `prefers-reduced-motion`.
- Shared chrome in the root layout: minimal sticky header with nav + theme toggle, quiet footer.

## Landing page — restraint above the fold

Above the fold contains **only**: the professional headshot, the name, the subheadline (Artificial Intelligence Enthusiast · Exploring AI × Healthcare), the mission statement, and the two primary actions — **Explore Portfolio** and **Ask Mat AI**. Nothing else competes for attention.

Everything else arrives calmly on scroll, well spaced: a quiet statistics row rendered as plain static numbers with labels (no counters, no animation, no dizzy motion), then a short selection of featured work, then a condensed timeline preview, then a closing line into contact. Each section separated by real whitespace rather than dividers or decoration.

## Pages (each its own route with unique SEO metadata)

| Route | Content |
|---|---|
| `/` | As above |
| `/about` | Story, journey, values, leadership philosophy, vision, interactive vertical timeline |
| `/portfolio` | Searchable, filterable project grid (ODYLP-EAGLE 2026, Konica Tech, Konica Fest, Red Cross, Student Council, School Magazine, Biology/Physics/Neuro Clubs, community + tech initiatives) |
| `/portfolio/$slug` | Per-project page: overview, objectives, planning, challenges, impact, skills gained, gallery, results, lessons, media |
| `/experience` | Leadership, volunteering, organizations, international programs, education |
| `/awards` | Certificates, awards, competitions, media recognition, publications, recommendations |
| `/gallery` | Masonry photo gallery with lightbox, grouped by category |
| `/media` | Media coverage list + carousel of features |
| `/skills` | Grouped skill clusters as cards/tags — no percentages, no bars |
| `/contact` | Email, phone, LinkedIn, GitHub, website, QR code, flippable business-card preview, CV download |
| `/ask` | Ask Mat AI |

## Ask Mat AI — a professional knowledge base, not a chatbot

Positioned and worded as querying Mat's professional record. No mascot, no "Hi! I'm your AI assistant 👋", no sparkle iconography. The entry screen reads as a research surface: a single prompt field plus a few real example questions drawn from the actual portfolio.

Behaviour, enforced in the server-side system prompt:
- **Concise and factual.** Short, direct answers. No filler, no enthusiasm padding, no emoji.
- **Grounded only in the portfolio document.** If a fact isn't in the knowledge base, it says so plainly rather than guessing.
- **Cites relevant work.** When an answer touches a project, experience, or award, it names it — and the UI turns those into links through to the matching project page.
- **Professional tone throughout**, written as a well-briefed representative of Mat's background, not as Mat impersonated.
- Unrelated questions get a brief, courteous redirect back to scope.

Mechanics: threaded conversations saved in the browser, each thread on its own URL (`/ask/$threadId`) so a reload restores it — with a thread list, new-conversation action, and delete. Streaming responses, with the model call, system prompt and knowledge base kept entirely server-side. Built on AI Elements for the transcript, composer and streaming states.

## Content layer (future-ready)

All facts live in typed content files under `src/content/`: `profile`, `stats`, `projects`, `timeline`, `experience`, `awards`, `media`, `skills`, `gallery`, plus the AI knowledge base. Adding a project or award is one entry in one file — every page, filter, and the assistant pick it up automatically. Photos import from `src/assets/`.

## What I will not do

No invented projects, dates, numbers, awards, or quotes. Placeholder slots are labelled as such so nothing false ever ships.

## Next step after this

Send the portfolio document, headshot, project photos, certificates and media articles — I'll populate the content files and swap in real imagery.

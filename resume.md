---
pdf_options:
  format: A4
  margin: 17mm 18mm 15mm 18mm
  printBackground: true
css: |
  /* ------------------------------------------------------------------
     Typographic concept: "serif speaks, sans informs".
     A serif (Palatino) carries the human voice — the name, job titles,
     and client quotes. A humanist sans (Corbel) carries all information —
     summary, skills, achievements. Gold #c9a96a is the portfolio's own
     brand accent and appears exactly twice: the rule under the identity
     block, and the rule beside each client quote. Nothing else is
     decorated. All type is real text, so the PDF stays ATS-parseable.
     ------------------------------------------------------------------ */
  body {
    font-family: Corbel, Candara, "Segoe UI", -apple-system, Helvetica, sans-serif;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #1f2024;
    max-width: none;
    padding: 0;
    orphans: 2;
    widows: 2;
  }

  /* --- Identity block ------------------------------------------------ */
  h1 {
    font-family: "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
    font-size: 26pt; font-weight: 400; color: #111214;
    margin: 0 0 2px; padding: 0; border: none; letter-spacing: -0.005em;
  }
  /* Role line directly under the name */
  h1 + p {
    font-size: 11pt; font-weight: 600; color: #4a5160;
    letter-spacing: 0.015em; margin: 0 0 9px;
  }
  /* Contact + links: two clean lines, never broken mid-word */
  h1 + p + p {
    font-size: 9.8pt; color: #5a6170; line-height: 1.75;
    margin: 0 0 6px; padding: 0 0 14px;
    border-bottom: 1.5px solid #c9a96a;
    overflow-wrap: normal; word-break: keep-all; hyphens: none;
  }

  /* --- Section headers ----------------------------------------------- */
  h2 {
    font-size: 10pt; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.15em; color: #4a5160;
    margin: 30px 0 12px; padding: 0 0 6px;
    border-bottom: 1px solid #dcdcd6;
  }
  /* Job title — serif, the "voice" register */
  h3 {
    font-family: "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
    font-size: 13pt; font-weight: 400; color: #111214;
    margin: 6px 0 2px; padding: 0; border: none;
  }

  /* --- Body ----------------------------------------------------------- */
  p { margin: 0 0 8px; }
  /* Italic meta lines (dates, tech stacks) sit quieter than body copy */
  p em {
    font-style: italic; font-size: 9.8pt; color: #6b7280; letter-spacing: 0.01em;
  }
  ul { margin: 8px 0 16px; padding-left: 19px; }
  li { margin-bottom: 7px; padding-left: 3px; }
  hr { display: none; }
  strong { color: #111214; font-weight: 600; }

  /* --- Client quotes — serif italic, gold rule ------------------------ */
  blockquote {
    font-family: "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
    font-size: 10.5pt; line-height: 1.5; color: #3a3d44;
    margin: 14px 0 8px; padding: 5px 0 5px 16px;
    border-left: 2px solid #c9a96a; background: none;
  }
  blockquote p { margin: 0; }
  blockquote p em { font-size: inherit; color: inherit; letter-spacing: 0; }
  blockquote strong { font-style: normal; color: #1f2024; }
  /* Space before the next project block */
  blockquote + p { margin-top: 22px; }

  /* --- Page-break discipline (two-page layout) ------------------------ */
  /* Never strand a heading, a project title, or a tech-stack line at the
     foot of a page, and never split a bullet list or a quote across pages. */
  h2, h3 { break-after: avoid; page-break-after: avoid; }
  p:has(> strong), p:has(> em) { break-after: avoid; page-break-after: avoid; }
  /* Lists may break between bullets — holding a whole list together would
     leave a large hole at the foot of page 1 — but never inside one. */
  li, blockquote { break-inside: avoid; page-break-inside: avoid; }
---

# Mustafa Melake

**Full Stack Engineer — Next.js | TypeScript | High-Performance E-Commerce**

Egypt (Remote: MENA/Gulf, Europe, US) • +20 106 774 5012 • mustafamelake@gmail.com<br>mustafamelake-portfolio.vercel.app • github.com/MustafaMelake • linkedin.com/in/mustafa-melake-002b37379

## PROFESSIONAL SUMMARY

Full Stack Engineer who builds production e-commerce platforms where the money is always right. I specialize in the Next.js App Router (React Server Components, Server Actions) with strict TypeScript, architecting business logic that runs server-side and cannot be tampered with by the browser — server-authoritative pricing, race-safe inventory, and exact-to-the-cent financial accuracy. Two client platforms delivered and handed over in 2026, both scoring 100/100 Lighthouse Performance and SEO on core landing and product pages, with zero post-launch defects.

## TECHNICAL SKILLS

- **Core Stack:** Next.js (App Router, Server Components, Server Actions, Streaming), React, TypeScript (strict), Tailwind CSS, Node.js
- **Databases & ORM:** PostgreSQL, Prisma, MongoDB, schema design, Decimal-precision money modelling, atomic transactions
- **Testing & Quality:** Vitest, Zod runtime validation, TypeScript strict mode, Lighthouse / Core Web Vitals auditing
- **Architecture:** Server-authoritative business logic, role-based access control (RBAC), authentication (Better Auth), race-safe stock control, multi-tenant/multi-branch data scoping, SEO & technical performance
- **Tools & Delivery:** Vercel, Git & GitHub, CI/CD, shadcn/ui, Radix UI, Framer Motion
- **Foundational:** MERN stack (MongoDB, Express, React, Node.js), REST API design

## CLIENT WORK & EXPERIENCE

### Freelance Full Stack Engineer — Independent (Remote)

*2024 – Present*

**Ali Baba — Multi-Branch E-Commerce Platform** | Client: Ahmed Ali | Delivered July 2026

*Next.js App Router, React, TypeScript, Prisma, PostgreSQL, Better Auth, Tailwind CSS*

- Architected and shipped a full-stack platform for a multi-branch patisserie: a customer storefront plus a role-gated admin console, delivered solo from schema design through production handover.
- Built a pure server-side discount engine that resolves the same live promotion on product cards, cart, and checkout — customers are always billed exactly the price the owner set, with no client-side calculation trusted.
- Implemented branch-scoped RBAC resolved live from the database, so each branch manager sees and controls only their own orders, stock, and customers — never another location's.
- Engineered race-safe atomic stock control and Decimal-precision currency handling end to end, with revenue counted only on delivered orders and pinned to Africa/Cairo — so reported figures reconcile exactly with the business's actual takings.
- Achieved 100/100 Lighthouse Performance and SEO on core landing and product pages via full server rendering with no client-side data-fetching layer.

<!-- TESTIMONIAL — DRAFT WORDING. Confirm with Ahmed Ali in writing before sending this CV. -->
> *"Mustafa gave us one system for all our branches. Every manager sees only their own orders and stock, the site loads instantly, and the daily numbers finally match what we actually sold."* — **Ahmed Ali**, Owner, Ali Baba

**Rose Misk — Luxury Fragrance Storefront** | Client: Ahmed El Madawy | Delivered June 2026

*Next.js App Router, React, TypeScript, Prisma, PostgreSQL, Zod, Vitest, Tailwind CSS*

- Delivered a security-hardened luxury storefront and admin dashboard, with every privileged read and write routed through a guarded, Zod-validated Server Action.
- Made checkout tamper-proof by re-deriving every price from the database at the moment of payment and discarding client-submitted totals — eliminating an entire class of pricing fraud and refund exposure.
- Prevented oversells with atomic conditional stock updates and idempotent cancel-restock logic, so two shoppers can never buy the last unit.
- Wrote a Vitest regression suite covering the commerce core — **60/60 tests passing**, with 100% coverage of critical price and discount calculations under strict TypeScript.
- Built a transactional guest-to-user cart merge that never drops items at sign-in, protecting orders at the highest-risk step of the funnel.

<!-- TESTIMONIAL — DRAFT WORDING. Confirm with Ahmed El Madawy in writing before sending this CV. -->
> *"A flawless launch. The store looks exactly like the luxury brand we wanted and it simply works — nothing broke, nothing needed fixing after handover."* — **Ahmed El Madawy**, Founder, Rose Misk

## SELF-DIRECTED EDUCATION & TRAINING

**Full-Stack Engineering — Self-Directed, Ongoing**

- Trained through official framework documentation (Next.js, React, Prisma, TypeScript), open-source codebases, and advanced engineering-focused video instruction, deliberately targeting production architecture over tutorial-level implementation.
- Track upstream releases closely and ship on current versions — Next.js App Router, React Server Components, Tailwind, and the React Compiler adopted in production work.
- Maintain a public portfolio of production and concept builds demonstrating commerce architecture, CMS design, and motion-driven frontend work: **github.com/MustafaMelake**

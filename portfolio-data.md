# Portfolio — Source of Truth

A single, accurate reference of each project's title, description, and tech stack,
extracted directly from project documentation/code. Used to keep the portfolio's
project cards and skills consistent and truthful.

---

## Project 1 — Ali Baba

**Title:** Ali Baba — Multi-Branch E-Commerce & Admin Platform

**One-line:** A server-rendered, server-validated e-commerce platform for a multi-branch patisserie business.

**Description (professional):**
A full-stack, production-grade e-commerce platform built on the Next.js 16 App Router.
It pairs a customer storefront (catalog, multi-variant product pages, cross-device cart,
wishlist, guest & authenticated checkout, order history) with a role-gated admin console
for running the business day to day across multiple physical branches. Highlights include a
pure server-side **Discount Engine** (promotions resolved identically on every price surface),
**branch-scoped RBAC** (Super-Admin vs. branch Managers, resolved live from the database),
**financial-grade money handling** (all currency stored as `Decimal`, server-authoritative
pricing that the client can never tamper with), and **timezone-exact, `DELIVERED`-only
revenue reporting** (Africa/Cairo). Architected around React Server Components and Server
Actions with no client-side data-fetching layer — every page renders fully populated on first
load, and every mutation is optimistic via `useTransition`.

**Links:**
- Live: https://ali-baba-web-theta.vercel.app
- Code: https://github.com/MustafaMelake/ali-baba-web

**Tech Stack:**
- **Framework:** Next.js 16.2 (App Router), React 19.2
- **Language:** TypeScript
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma 7 (`@prisma/adapter-pg` driver adapter)
- **Auth & RBAC:** Better Auth 1.6 (session-based; `USER` / `ADMIN` / `MANAGER` roles)
- **Client State:** Zustand 5 (`persist`) — cart only
- **Validation:** Zod (schemas shared client + server)
- **Styling:** Tailwind CSS v4
- **Animation / Feedback:** Framer Motion, sonner (toasts)
- **Charts:** Recharts
- **Carousel:** Embla Carousel
- **Media Uploads:** UploadThing (`UTApi`)
- **Deployment:** Vercel (CI/CD)

**Key Skills / Engineering Highlights:**
- React Server Components as the default data layer; Server Actions instead of a REST/GraphQL API
- Server Actions + `useTransition` optimistic UI (no Redux / React Query / SWR)
- Edge middleware via Next.js 16's `src/proxy.ts` (optimistic auth gate) + defense-in-depth in-page session checks
- Role-based access control with branch scoping resolved live from the DB
- Pure, dependency-free **Discount Engine** (single pricing source across cards, PDP, cart, checkout)
- Financial-grade `Decimal` money handling; server-authoritative canonical pricing (VAT + delivery)
- Relational data modeling with referential-integrity safety (Prisma `P2002`/`P2003`/`P2025` mapped to clean UX)
- Cursor-based pagination (no offset `skip`) for the admin orders board
- `variantId`-keyed cart with cross-device DB sync + record-then-confirm pending-ops ledger
- Request-level query dedupe with React `cache()`; ISR + tag-based revalidation
- Timezone-exact reporting (`Africa/Cairo`), `DELIVERED`-only revenue accounting
- Security hardening: open-redirect guard (`sanitizeRedirect`), server-validated pricing/stock, no client-trusted money
- SEO: `generateMetadata`, OpenGraph, Schema.org JSON-LD (`LocalBusiness`, `FAQPage`)

**Source docs analyzed:** `ARCHITECTURE.md`, `HOW_IT_WORKS.md`, `STOREFRONT_ARCHITECTURE.md`, `BUSINESS_VALUE_PITCH.md`

> ⚠️ **Accuracy flag (for later reconciliation):** the current portfolio card in
> `components/ProjectsSection.tsx` labels this project **"A full-stack MERN application"**
> with tech `["MongoDB", "Express", "React", "Node.js"]`. That does not match the project's
> own documentation, which describes a **Next.js 16 + PostgreSQL + Prisma 7 + Better Auth**
> stack (no MongoDB, no Express). The real stack is more advanced than "MERN" — worth
> correcting the card when we reconcile.

---

## Project 2 — Rose Misk

**Title:** Rose Misk — Luxury Fragrance E-Commerce Platform

**One-line:** A full-stack, security-hardened e-commerce platform for premium fragrances (Egypt market).

**Description (professional):**
A production-grade luxury-fragrance storefront and admin dashboard built on the Next.js 16 App
Router with Server Actions and Server Components. Its defining trait is a **layered security
architecture** where "auth and validation live next to the data": an optimistic edge middleware
handles routing, DB-backed guards (`requireUser` / `requireAdmin`) enforce authorization, a Zod
validation boundary sanitizes every input, and a guarded, transactional data-access layer performs
all privileged reads/writes. Checkout is **server-authoritative** — prices are re-derived from the
database, stock is decremented with race-safe atomic conditional updates, and the client-supplied
total is discarded. It features a dual-mode cart (guest `localStorage` + authenticated DB) with
transactional login-time merge reconciliation, a delivered-purchase-gated review system with
server-derived rating aggregation, and a full admin suite (KPIs, revenue chart, inventory, orders,
customers, review moderation). Money is `Decimal(10,2)` end-to-end, the UI is localized to EGP /
`Africa/Cairo`, and the commerce logic is regression-tested (Vitest, 60/60 passing) under strict
TypeScript.

**Links:**
- Live: https://rosemisk.store
- Code: https://github.com/MustafaMelake/Rose-Misk-Store-E-commerce

**Tech Stack:**
- **Framework:** Next.js 16.2 (App Router; React 19 Server + Client Components)
- **Language:** TypeScript (strict mode)
- **Database:** PostgreSQL on Neon
- **ORM:** Prisma 7.8 (`@prisma/adapter-pg` + `pg` Pool, singleton client)
- **Auth & RBAC:** Better Auth 1.5.6 (email/password, email verification, password reset, Google/Facebook social login, `USER`/`ADMIN` roles)
- **Validation:** Zod 3 (schemas shared with `z.infer` types)
- **Testing:** Vitest 4 (60 tests passing)
- **Styling:** Tailwind CSS 4
- **UI / Feedback:** react-toastify, Framer Motion
- **Email:** Resend
- **Media Uploads:** UploadThing (admin-guarded)
- **Client State:** React Context (`ShopContext`)

**Key Skills / Engineering Highlights:**
- Layered defense-in-depth: optimistic edge middleware (`proxy.ts`) → DB-backed server guards → Zod boundary → guarded transactional action layer
- Server-authoritative pricing; client totals discarded (no trust in client money)
- Race-safe inventory: atomic conditional stock decrement in a single SQL statement (two shoppers can't buy the last unit)
- Idempotent, race-safe order cancellation + restock keyed on precise `variantId`
- `Decimal(10,2)` money end-to-end, serialized to `number` only at the action boundary (no float drift)
- Order-status state machine with terminal states and legacy-state handling
- Guest ↔ authenticated cart reconciliation: transactional merge, duplicates summed, quantities clamped, nothing lost at login
- Review moderation with server-derived rating aggregation (ratings never client-set)
- Single canonical revenue rule (one shared constant) for consistent KPI/report figures
- React `cache()` for per-request session dedupe
- Prisma migration rebaselining (squashed baseline, resolved `db push` drift)
- Better Auth hardening: rate limiting, CSRF trusted-origins allow-list, no role self-elevation, open-redirect-safe `callbackUrl` sanitization, graceful email degradation
- Localization: single currency/date formatter (EGP, `Africa/Cairo`), governorate-based shipping
- Test-driven confidence: Vitest 60/60, strict `typecheck` clean

**Source docs analyzed:** `SYSTEM_ARCHITECTURE.md`, `USER_JOURNEYS.md`

> ✅ **Accuracy check:** the current Rose Misk card in `components/ProjectsSection.tsx`
> (`Next.js 16 / React 19 / Prisma 7 / Neon DB / Better Auth / Tailwind v4`) **matches** the
> documented stack — no correction needed. (The "100/100 Lighthouse" line in the card's
> description isn't mentioned in these docs; leave as-is unless you want it verified.)

---

## Project 3 — Melake (Animated Luxury Landing Page)

**Title:** Melake — Animated Luxury Landing Page

**One-line:** A modern, animation-driven single-page marketing/portfolio landing site.

**Description (professional):**
A polished, single-page marketing landing site built with the Next.js App Router, React 19, and
Tailwind CSS v4, showcasing scroll-driven motion design with Framer Motion. The page is composed of
twelve modular, independently-animated sections — a scroll-aware sticky navbar (hiding on
scroll-down, with a desktop mega-menu and a mobile drawer), a full-screen hero with staggered text
and a floating illustration, an animated stats ticker, and services, features, testimonials, team,
skills, events, pricing, and discount-CTA sections. It is mobile-first and responsive by default,
dark-mode-ready via Tailwind `dark:` variants throughout, accessibility-conscious (`aria-*`
attributes, semantic landmarks, labeled controls), and performance-minded with `next/image` and
`next/font` (Geist) optimization. UI primitives are built on shadcn/ui + Radix.

**Links:**
- Live: https://animated-landing-page-xi-one.vercel.app/
- Code: https://github.com/MustafaMelake/Animated-LandingPage

**Tech Stack:**
- **Framework:** Next.js 16 (App Router) — *pinned to a canary build, `next@16.3.0-canary.2`*
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4, `tailwind-merge`, `tw-animate-css`, `class-variance-authority`, `clsx`
- **Animation:** Framer Motion
- **Components:** shadcn/ui + Radix UI (`card`, `navigation-menu`)
- **Icons:** lucide-react, react-icons
- **Fonts:** Geist via `next/font`
- **Tooling:** ESLint, Prettier (`prettier-plugin-tailwindcss`), PostCSS, Autoprefixer
- **Deployment:** Vercel

**Key Skills / Engineering Highlights:**
- Advanced motion design: entrance, stagger, floating, and scroll-reactive animations (Framer Motion)
- Scroll-aware sticky navbar (hides on scroll-down) with desktop mega-menu + mobile drawer
- Mobile-first responsive layout system
- Dark-mode-ready component styling (Tailwind `dark:` variants)
- Accessible, semantic markup (`aria-*`, landmarks, labeled interactive elements)
- Image & font optimization (`next/image`, `next/font`)
- Component-driven architecture (12 modular, self-contained sections)
- shadcn/ui + Radix primitives with `cn`/`cva` styling utilities
- Comfort working on bleeding-edge (Next.js canary) framework builds

**Scope note:** this is a **front-end / presentational** project — no backend, database, or auth.

**Source docs analyzed:** `README.md`, referenced `AGENTS.md`

> ℹ️ **Note (honesty for the skills inventory):** `lenis`, `next-themes`, `react-hook-form`,
> and `zod` are installed in this project but **not yet wired into any component** — so they
> shouldn't be counted as demonstrated skills *from this project* (they are, however, genuinely
> demonstrated in the Rose Misk / Ali Baba projects for Zod).
>
> ✅ **Accuracy check:** the current "Animated Landing Page" card in
> `components/ProjectsSection.tsx` (`Next.js 16 / Framer / TailwindCSS`) is broadly accurate.
> Only caveat: the card calls it "SEO-optimized" — the docs emphasize accessibility and asset
> optimization but don't specifically document SEO work.

---

## Project 4 — StoryFlow

**Title:** StoryFlow — Full-Stack CMS & Blogging Platform

**One-line:** A full-stack, role-based blogging and content-management platform.

**Description (professional):**
A full-stack blogging and content-management platform built on the Next.js 16 App Router and
React 19, pairing a public reading experience with a role-based dashboard for authoring and
administration — all backed by Prisma 7 and PostgreSQL (Neon). The reading side offers SEO-friendly
server-side search and pagination over post titles/content (via URL search params), a scroll-linked
reading-progress bar, automatic reading-time estimates, per-user likes and comments, dark mode, and
streaming skeleton loaders that mirror the final layout. The authoring side provides an admin
dashboard aggregating posts/likes/comments, full content CRUD with published/draft toggling via
Server Actions, and admin-only user-role management across a three-tier RBAC model
(`USER` / `AUTHOR` / `ADMIN`). Performance leans on the React Compiler (automatic memoization),
route-level streaming to eliminate layout shift, and efficient Prisma queries with `_count`
aggregation and pagination.

**Links:**
- Live: https://next16-prisma-blog.vercel.app
- Code: https://github.com/MustafaMelake/next16-prisma-blog

**Tech Stack:**
- **Framework:** Next.js 16 (App Router, Server Actions, streaming)
- **UI Library:** React 19 (React Compiler enabled — `babel-plugin-react-compiler`)
- **Language:** TypeScript
- **Database:** PostgreSQL (Neon) via `pg` adapter
- **ORM:** Prisma 7
- **Auth & RBAC:** Better Auth (email/password + Google & GitHub OAuth, Prisma adapter; `USER`/`AUTHOR`/`ADMIN` roles)
- **Styling:** Tailwind CSS 4 + shadcn/ui (Radix)
- **UX:** next-themes (dark mode), Sonner (toasts), Lucide (icons)
- **Deployment:** Vercel
- **License:** MIT

**Key Skills / Engineering Highlights:**
- Next.js App Router with Server Actions for all post/user mutations
- React Compiler automatic memoization (`babel-plugin-react-compiler`)
- Streaming SSR with route-level `loading.tsx` skeletons (zero layout shift)
- SEO-friendly server-side search + server-driven pagination via URL search params
- Three-tier role-based access control (`USER` / `AUTHOR` / `ADMIN`) with admin role management
- Content lifecycle: create / edit / delete + published/draft workflow
- Engagement features: one-like-per-user + comments
- Efficient data access: Prisma `_count` aggregation + pagination (fetch only what each page needs)
- Better Auth OAuth integration (Google + GitHub) via Prisma adapter
- Theming (next-themes) and toast feedback (Sonner)

**Source docs analyzed:** `README.md`

> ✅ **Accuracy check:** the current "StoryFlow" card in `components/ProjectsSection.tsx`
> (`Next.js 16 / Prisma 7 / PostgreSQL / Better Auth / Tailwind v4`) **matches** the documented
> stack — no correction needed. (Card omits React 19 / React Compiler / shadcn, but that's just
> a shorter subset, not an inaccuracy.)

---

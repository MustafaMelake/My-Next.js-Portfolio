export type ProjectSection = {
  heading: string;
  body: string;
};

/** A gallery screenshot plus a caption describing the capability it shows. */
export type Screenshot = {
  src: string;
  /** What the screen enables (a business capability), not the screen's name. */
  caption: string;
};

/** A single outcome number for the <MetricsStrip />. */
export type Metric = {
  /**
   * The large stat, e.g. "40%", "1.2s", "3×". Leave "" until you have a real,
   * defensible number — empty metrics are hidden, never invented.
   */
  value: string;
  /** Short label under the number, e.g. "Faster checkout". */
  label: string;
};

/** A business guarantee card for the "What This Protects" grid. */
export type ProtectItem = {
  /** Outcome-language headline (what the owner gets, not how it's built). */
  title: string;
  /** One plain-language sentence explaining the guarantee. */
  body: string;
};

/** Optional client testimonial for a project. */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional /public image path; the component renders fine without it. */
  avatar?: string;
};

export type Project = {
  slug: string;
  title: string; // descriptive title (card + detail heading)
  category: string; // eyebrow, e.g. "Full-Stack · E-Commerce"
  role: string;
  type: string;
  /** True for concept/demo builds (not client work). Drives the Demo badge and the client-vs-capability copy framing. */
  demo?: boolean;
  tagline: string;
  gallery: Screenshot[];
  overview: string;
  /** Plain-language, jargon-free statement of what the business was losing/risking. */
  businessProblem?: string;
  /** Outcome numbers. Values start empty (TODO) so nothing is fabricated. */
  metrics?: Metric[];
  /** Business guarantees, translated from the engineering highlights. */
  protects?: ProtectItem[];
  /** Optional — when absent, the testimonial block renders nothing. */
  testimonial?: Testimonial;
  sections: ProjectSection[];
  tech: string[];
  liveLink: string;
  liveLabel: string;
  codeLink: string;
};

// Frontend skills get the spotlight treatment on badges; everything else is muted.
export const FRONTEND_STACK = new Set([
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "Framer Motion",
  "shadcn/ui",
  "Radix UI",
  "Zustand",
]);

export const PROJECTS: Project[] = [
  {
    slug: "ali-baba",
    title: "Ali Baba — Multi-Branch E-Commerce Platform",
    category: "Full-Stack · E-Commerce",
    role: "Full-Stack Engineer",
    type: "Multi-Branch Commerce Platform",
    tagline:
      "A server-rendered, multi-branch e-commerce platform with a role-based admin console and a pure server-side discount engine.",
    gallery: [
      {
        src: "/images/ali-baba-web.png",
        caption:
          "The customer storefront — a fast, server-rendered shopfront for the patisserie brand.",
      },
      {
        src: "/images/ali-baba-web1.png",
        caption:
          "The branch control room — live per-branch sales, peak-hour demand, and best-sellers in one view.",
      },
      {
        src: "/images/ali-baba-web2.png",
        caption:
          "The product catalog — category filtering with live, server-set discount pricing.",
      },
    ],
    overview:
      "Ali Baba is a production-grade e-commerce platform for a multi-branch patisserie business, pairing a customer storefront with a role-gated admin console. It's built entirely on the Next.js 16 App Router with React Server Components and Server Actions — every page renders fully populated on first load, with no client-side data-fetching layer.",
    businessProblem:
      "Running one online store across several physical branches usually means orders land at the wrong kitchen, managers can see each other's numbers, and the day's totals never quite add up — and every one of those is lost money or lost trust. The business needed a single system where each branch runs itself, prices can't be tampered with, and the revenue figures are simply correct.",
    // TODO: fill in real, defensible numbers. Empty values stay hidden.
    metrics: [
      { value: "", label: "Branches on one platform" },
      { value: "", label: "Access roles" },
      { value: "", label: "Order lifecycle states" },
      { value: "", label: "Products in catalog" },
    ],
    protects: [
      {
        title: "You get paid the right amount, every time.",
        body: "Prices and discounts are calculated and locked on the server, so a customer physically cannot alter a total to pay less than the price you set.",
      },
      {
        title: "Every branch stays in its lane.",
        body: "Each manager sees and controls only their own branch's orders, stock, and customers — never another location's.",
      },
      {
        title: "Your revenue reports are trustworthy.",
        body: "Money is tracked to the exact cent and counted only once an order is actually delivered, so your figures match reality — and your bank.",
      },
    ],
    // TODO: add a real client testimonial to make the quote block appear.
    // Until this exists, <Testimonial /> renders nothing. Example shape:
    // testimonial: {
    //   quote: "Mustafa rebuilt our checkout and the pricing errors simply stopped.",
    //   name: "Full Name",
    //   role: "Founder",
    //   company: "Company",
    //   avatar: "/images/testimonials/example.jpg", // optional
    // },
    sections: [
      {
        heading: "Architecture & Approach",
        body: "The whole app is server-rendered and server-validated. Prisma queries run directly inside Server Components; every mutation goes through a Server Action guarded by a role check. A pure, dependency-free Discount Engine resolves the best live promotion identically on product cards, the cart, and at checkout — so a customer is always billed exactly what they were shown.",
      },
      {
        heading: "Engineering Highlights",
        body: "Branch-scoped RBAC resolved live from the database; financial-grade Decimal money end to end; race-safe atomic stock control; cursor-based pagination; request-level query dedupe with React cache(); and timezone-exact, DELIVERED-only revenue reporting pinned to Africa/Cairo.",
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Prisma 7",
      "PostgreSQL",
      "Better Auth",
      "Zustand",
      "Zod",
    ],
    liveLink: "https://ali-baba-web-theta.vercel.app",
    liveLabel: "ali-baba-web-theta.vercel.app",
    codeLink: "https://github.com/MustafaMelake/ali-baba-web",
  },
  {
    slug: "rose-misk",
    title: "Rose Misk — Luxury Fragrance Storefront",
    category: "Full-Stack · E-Commerce",
    role: "Full-Stack Engineer",
    type: "Luxury Fragrance Storefront",
    tagline:
      "A security-hardened luxury fragrance storefront with server-authoritative pricing and a Vitest-tested commerce core.",
    gallery: [
      {
        src: "/images/rose-misk.png",
        caption:
          "The luxury storefront — a branded shopfront leading with best-sellers and new collections.",
      },
      {
        src: "/images/rosemisk1.png",
        caption:
          "Faceted product browsing — filter fragrances by category and type, resolved on the server.",
      },
      {
        src: "/images/rosemisk2.png",
        caption:
          "The admin command center — revenue, orders, customers, and pending fulfilment at a glance.",
      },
    ],
    overview:
      "Rose Misk is a full-stack storefront and admin dashboard for premium fragrances, built on the Next.js 16 App Router. Its defining trait is a layered security architecture where authentication and validation “live next to the data.”",
    businessProblem:
      "For a premium brand, a checkout that can be tricked into the wrong price — or that oversells stock it doesn't actually have — turns straight into refunds, chargebacks, and reputation damage. The business needed a storefront where the price a customer pays is always the price you set, the last item in stock can only be sold once, and the experience holds together even when the small details go wrong.",
    // TODO: fill in real, defensible numbers. Empty values stay hidden.
    metrics: [
      { value: "", label: "Automated tests passing" },
      { value: "", label: "Access roles" },
      { value: "", label: "Order lifecycle states" },
      { value: "", label: "Products in catalog" },
    ],
    protects: [
      {
        title: "Checkout can't be gamed.",
        body: "Every price is re-calculated on the server at the moment of payment; whatever the shopper's device claims is discarded. They pay your price — never a forged one.",
      },
      {
        title: "You never sell stock you don't have.",
        body: "Inventory is locked at the instant of purchase, so two shoppers can't both buy the last bottle — no oversells, no refund-and-apology emails.",
      },
      {
        title: "No sale is lost at sign-in.",
        body: "A guest's cart survives logging in — items merged, nothing dropped — so you don't lose the order at the very last step.",
      },
    ],
    sections: [
      {
        heading: "Architecture & Approach",
        body: "Every privileged read and write is a guarded, Zod-validated Server Action; an optimistic edge middleware handles routing while DB-backed guards enforce the real authorization. Checkout re-derives every price from the database and decrements stock with atomic conditional updates, so two shoppers can never buy the last unit.",
      },
      {
        heading: "Engineering Highlights",
        body: "Server-authoritative pricing (client totals discarded); Decimal(10,2) money end to end; idempotent, race-safe cancel-restock; a transactional guest→user cart merge that never loses items; server-derived review ratings; and one canonical revenue rule. The commerce core is regression-tested with Vitest (60/60 passing) under strict TypeScript.",
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Prisma 7",
      "PostgreSQL",
      "Better Auth",
      "Zod",
      "Vitest",
    ],
    liveLink: "https://rosemisk.store",
    liveLabel: "rosemisk.store",
    codeLink: "https://github.com/MustafaMelake/Rose-Misk-Store-E-commerce",
  },
  {
    slug: "melake-landing",
    title: "Melake — Animated Luxury Landing Page",
    category: "Frontend · Motion Design",
    role: "Frontend Engineer",
    type: "Animated Landing Page",
    demo: true,
    tagline:
      "An animation-driven luxury landing page with twelve scroll-reactive sections and refined Framer Motion choreography.",
    gallery: [
      {
        src: "/images/landing-page.png",
        caption:
          "The hero moment — scroll-choreographed motion built to set a premium first impression.",
      },
    ],
    overview:
      "A polished, single-page marketing site built with the Next.js App Router and React 19, showcasing scroll-driven motion design with Framer Motion across twelve independently animated sections.",
    businessProblem:
      "Built to demonstrate that a marketing page can feel genuinely premium without tipping into gimmick. It's a study in restraint — twelve scroll-reactive sections, each animation earning its place — architected to stay fast, responsive, and accessible while still landing a strong first impression.",
    sections: [
      {
        heading: "Approach",
        body: "Twelve modular sections, each with its own entrance, stagger, and scroll-reactive motion, anchored by a scroll-aware navbar that hides on scroll-down and swaps a desktop mega-menu for a mobile drawer. UI primitives are built on shadcn/ui + Radix; type and imagery are optimized with next/font (Geist) and next/image.",
      },
      {
        heading: "Highlights",
        body: "Mobile-first responsive layouts, dark-mode-ready styling via Tailwind dark: variants, accessibility-conscious markup (aria attributes, semantic landmarks), and disciplined, orchestrated motion rather than scattered effects.",
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "shadcn/ui",
    ],
    liveLink: "https://animated-landing-page-xi-one.vercel.app/",
    liveLabel: "animated-landing-page-xi-one.vercel.app",
    codeLink: "https://github.com/MustafaMelake/Animated-LandingPage",
  },
  {
    slug: "storyflow",
    title: "StoryFlow — Full-Stack CMS & Blog",
    category: "Full-Stack · CMS",
    role: "Full-Stack Engineer",
    type: "CMS & Blogging Platform",
    demo: true,
    tagline:
      "A role-based blogging and content-management platform pairing a fast public reading experience with a full authoring dashboard.",
    gallery: [
      {
        src: "/images/storyflow-blog.png",
        caption:
          "The reading experience — server-side search over a fast, streaming article feed.",
      },
    ],
    overview:
      "StoryFlow pairs a public reading experience with a role-based dashboard for authoring and administration, built on the Next.js 16 App Router and React 19 with the React Compiler enabled.",
    businessProblem:
      "Built to explore a hard architectural trade-off: content platforms usually force a choice between a fast, clean reading experience and a capable authoring workflow. StoryFlow demonstrates serving both from one codebase — streaming reads for visitors, a full role-based dashboard for authors — without shipping unnecessary JavaScript to either.",
    // TODO: fill in real, defensible numbers. Empty values stay hidden.
    metrics: [
      { value: "", label: "Contributor roles" },
      { value: "", label: "OAuth sign-in options" },
      { value: "", label: "Post lifecycle states" },
    ],
    protects: [
      {
        title: "Publishing without a developer in the loop.",
        body: "Architected so authors and editors manage posts, drafts, and publishing from a dashboard via Server Actions — no code, no redeploy.",
      },
      {
        title: "Role-based access, enforced on the server.",
        body: "A three-tier model — reader, author, admin — demonstrates contributors who can write without ever reaching settings or other users' accounts.",
      },
      {
        title: "A reading experience built to stay fast.",
        body: "Route-level streaming with no layout shift and one-tap Google/GitHub sign-in, built to keep readers engaged rather than waiting.",
      },
    ],
    sections: [
      {
        heading: "Architecture & Approach",
        body: "The reading side uses SEO-friendly server-side search and pagination over URL params, streaming skeletons, and efficient Prisma queries with _count aggregation. The authoring side runs entirely on Server Actions for content CRUD, published/draft toggling, and role management across a three-tier RBAC model.",
      },
      {
        heading: "Highlights",
        body: "React Compiler automatic memoization, route-level streaming that eliminates layout shift, per-user likes and comments, reading-progress and reading-time features, and Better Auth with Google + GitHub OAuth.",
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Prisma 7",
      "PostgreSQL",
      "Better Auth",
    ],
    liveLink: "https://next16-prisma-blog.vercel.app",
    liveLabel: "next16-prisma-blog.vercel.app",
    codeLink: "https://github.com/MustafaMelake/next16-prisma-blog",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

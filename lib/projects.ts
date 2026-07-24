export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string; // descriptive title (card + detail heading)
  category: string; // eyebrow, e.g. "Full-Stack · E-Commerce"
  role: string;
  type: string;
  tagline: string;
  image: string[];
  overview: string;
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
    image: [
      "/images/ali-baba-web.png",
      "/images/ali-baba-web1.png",
      "/images/ali-baba-web2.png",
    ],
    overview:
      "Ali Baba is a production-grade e-commerce platform for a multi-branch patisserie business, pairing a customer storefront with a role-gated admin console. It's built entirely on the Next.js 16 App Router with React Server Components and Server Actions — every page renders fully populated on first load, with no client-side data-fetching layer.",
    sections: [
      {
        heading: "The Challenge",
        body: "The business runs across multiple physical branches, so every order has to route to the right kitchen, each manager must see only their own branch, and revenue has to be counted honestly. On top of that, money can never drift on rounding and prices can never be trusted from the client.",
      },
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
    image: [
      "/images/rose-misk.png",
      "/images/rosemisk1.png",
      "/images/rosemisk2.png",
    ],
    overview:
      "Rose Misk is a full-stack storefront and admin dashboard for premium fragrances, built on the Next.js 16 App Router. Its defining trait is a layered security architecture where authentication and validation “live next to the data.”",
    sections: [
      {
        heading: "The Challenge",
        body: "Checkout is the most safety-critical path in an app: prices must be authoritative, stock must be race-safe, and no forged request can slip past authorization. It also had to fit the Egyptian market — EGP, Africa/Cairo dates, governorate-based shipping — and degrade gracefully when email isn't configured.",
      },
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
    tagline:
      "An animation-driven luxury landing page with twelve scroll-reactive sections and refined Framer Motion choreography.",
    image: ["/images/landing-page.png"],
    overview:
      "A polished, single-page marketing site built with the Next.js App Router and React 19, showcasing scroll-driven motion design with Framer Motion across twelve independently animated sections.",
    sections: [
      {
        heading: "The Challenge",
        body: "Marketing sites live or die on first impression. The goal was a page that feels premium and alive without tipping into gimmick — every animation earning its place, and the whole thing staying fast, responsive, and accessible.",
      },
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
    tagline:
      "A role-based blogging and content-management platform pairing a fast public reading experience with a full authoring dashboard.",
    image: ["/images/storyflow-blog.png"],
    overview:
      "StoryFlow pairs a public reading experience with a role-based dashboard for authoring and administration, built on the Next.js 16 App Router and React 19 with the React Compiler enabled.",
    sections: [
      {
        heading: "The Challenge",
        body: "A content platform has two very different audiences — readers who want a fast, distraction-free experience, and authors and admins who need a capable, safe editing workflow — served from one codebase without shipping unnecessary JavaScript to either.",
      },
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

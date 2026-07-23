"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Download, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  liveLabel: string;
  codeLink: string;
};

// Frontend skills get the spotlight (filled + glow) treatment; backend/infra
// tech renders as a quiet outline badge so the eye lands on the frontend stack.
const FRONTEND_STACK = new Set([
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "Framer Motion",
  "shadcn/ui",
  "Radix UI",
]);

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ali Baba",
    category: "Full-Stack · E-Commerce Platform",
    description:
      "A server-rendered, multi-branch e-commerce platform with a role-based admin console, a pure server-side discount engine, and financial-grade Decimal pricing — architected on React Server Components and Server Actions.",
    image: "/images/ali-baba-web.png",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Prisma 7",
      "PostgreSQL",
      "Better Auth",
    ],
    liveLink: "https://ali-baba-web-theta.vercel.app",
    liveLabel: "ali-baba-web-theta.vercel.app",
    codeLink: "https://github.com/MustafaMelake/ali-baba-web",
  },
  {
    id: 2,
    title: "Rose Misk",
    category: "Full-Stack · Luxury E-Commerce",
    description:
      "A security-hardened luxury fragrance storefront with layered auth guards, server-authoritative pricing, race-safe atomic stock control, and a Vitest-tested commerce core.",
    image: "/images/rose-misk.png",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Prisma 7",
      "PostgreSQL",
      "Better Auth",
    ],
    liveLink: "https://rosemisk.store",
    liveLabel: "rosemisk.store",
    codeLink: "https://github.com/MustafaMelake/Rose-Misk-Store-E-commerce",
  },
  {
    id: 3,
    title: "Melake — Animated Landing",
    category: "Frontend · Motion & Marketing",
    description:
      "An animation-driven luxury landing page: twelve scroll-reactive sections, a scroll-aware mega-menu navbar, and refined Framer Motion choreography — mobile-first and dark-mode ready.",
    image: "/images/landing-page.png",
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
    id: 4,
    title: "StoryFlow",
    category: "Full-Stack · CMS & Blog",
    description:
      "A role-based blogging and content platform powered by Server Actions, the React Compiler, streaming skeletons, SEO-friendly server-side search, and OAuth-backed publishing.",
    image: "/images/storyflow-blog.png",
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

function TechBadge({ label }: { label: string }) {
  const isFrontend = FRONTEND_STACK.has(label);
  return (
    <span
      className={cn(
        "font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border",
        isFrontend
          ? "bg-primary/10 text-primary border-primary/20 shadow-sm shadow-primary/10"
          : "bg-white/50 text-slate-500 border-slate-200"
      )}
    >
      {label}
    </span>
  );
}

function ProjectRow({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <FadeIn direction={reversed ? "left" : "right"}>
      <motion.article
        whileHover={reduceMotion ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="group grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10 rounded-3xl border border-white/20 hover:border-primary/30 bg-white/40 backdrop-blur-xl p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-[box-shadow,border-color] duration-300"
      >
        {/* Preview */}
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-black/5",
            reversed && "lg:order-2"
          )}
        >
          <Image
            src={project.image}
            alt={`${project.title} — screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          {/* Legibility scrim */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
          />
          {/* Hover sheen sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-[450%] motion-reduce:hidden"
          />
          {/* Live-domain chip — signals these are deployed, visitable products */}
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live site in a new tab`}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-white backdrop-blur-md ring-1 ring-white/15 transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="font-mono text-[11px] max-w-[150px] truncate">
              {project.liveLabel}
            </span>
            <ExternalLink size={12} className="shrink-0" />
          </Link>
        </div>

        {/* Content */}
        <div className={cn("px-1 lg:px-2", reversed && "lg:order-1")}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">
            {project.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            {project.title}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-xl">
            {project.description}
          </p>

          {/* Stack rail — frontend skills highlighted */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button asChild className="gap-2 rounded-full px-5">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live site`}
              >
                <ExternalLink size={16} />
                Live Demo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 rounded-full px-5 border-slate-300"
            >
              <Link
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={16} />
                Code
              </Link>
            </Button>
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[80%] max-w-4xl rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Real, deployed products — full-stack platforms and interfaces
              I&apos;ve designed, built, and shipped end to end.
            </p>
          </div>
        </FadeIn>

        {/* Case-study rows */}
        <div className="flex flex-col gap-10 md:gap-16">
          {PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* CV Download */}
        <div className="flex justify-center mt-20 md:mt-28">
          <FadeIn direction="up">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-lg shadow-2xl gap-2"
            >
              <a href="/MUSTAFA_MELAKE.pdf" download>
                <Download size={20} />
                Download My CV
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

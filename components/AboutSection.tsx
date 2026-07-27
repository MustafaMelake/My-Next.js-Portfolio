"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { GOLD } from "@/lib/site";

/*
 * Editorial About section: big-impact stats grid -> two-column philosophy ->
 * numbered capabilities list. All copy is honest (see below): a "count" stat
 * animates a real number; a "text" stat shows a fixed word that can't be
 * reduced to one figure. No unprovable claims (no invented uptime %, no
 * absolute "zero error" boast).
 */
type StatItem =
  | {
      kind: "count";
      value: number;
      label: string;
      format: (n: number) => string;
    }
  | { kind: "text"; display: string; label: string };

const STATS: StatItem[] = [
  {
    kind: "count",
    value: 2,
    label: "Client platforms shipped",
    format: (n) => String(Math.round(n)).padStart(2, "0"),
  },
  {
    kind: "count",
    value: 100,
    label: "Server-verified payments",
    format: (n) => `${Math.round(n)}%`,
  },
  { kind: "text", display: "Exact", label: "Revenue tracked to the cent" },
  {
    kind: "count",
    value: 60,
    label: "Commerce-core tests passing",
    format: (n) => `${Math.round(n)}/60`,
  },
];

const CAPABILITIES = [
  {
    title: "Server-first e-commerce",
    body: "Storefronts render on the server, and every price, discount, and stock check is resolved there too — so pages load fast and customers are always charged exactly what you set.",
    tags: ["Next.js", "React", "Server Actions"],
  },
  {
    title: "Money & data integrity",
    body: "Financial-grade Decimal money and one canonical revenue rule keep your totals and reports correct to the cent — across SQL and NoSQL data layers alike.",
    tags: ["PostgreSQL", "Prisma", "Mongoose"],
  },
  {
    title: "Security by architecture",
    body: "Role-based access is resolved live from the database and every input is validated next to the data, so your platform and customers are protected by design — not as an afterthought.",
    tags: ["RBAC", "Zod", "Better Auth"],
  },
  {
    title: "Built for MENA & the Gulf",
    body: "Arabic, full RTL, and EGP / Gulf-ready formatting are designed in from the first commit, so your store feels native to the region rather than translated onto it.",
    tags: ["Arabic / RTL", "EGP", "i18n"],
  },
];

function Stat({ item }: { item: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const text = useTransform(count, (v) =>
    item.kind === "count" ? item.format(v) : ""
  );

  useEffect(() => {
    if (item.kind !== "count" || !inView) return;
    if (reduce) {
      count.set(item.value);
      return;
    }
    const controls = animate(count, item.value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, count, item]);

  const display =
    item.kind === "count" ? item.format(item.value) : item.display;

  return (
    <div ref={ref} aria-label={`${display} — ${item.label}`}>
      <motion.div
        aria-hidden
        className="text-5xl font-bold tracking-tighter tabular-nums text-slate-900 md:text-7xl"
      >
        {item.kind === "count" ? text : item.display}
      </motion.div>
      <div className="mt-3 max-w-[12rem] text-sm leading-snug text-slate-500">
        {item.label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        {/* Eyebrow */}
        <FadeIn direction="up">
          <p className="mb-12 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
            About
          </p>
        </FadeIn>

        {/* 1. Big-impact stats grid */}
        <FadeIn direction="up">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} item={s} />
            ))}
          </div>
        </FadeIn>

        <hr className="my-16 border-slate-200 md:my-20" />

        {/* 2. Two-column philosophy */}
        <FadeIn direction="up">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
            {/* Kicker */}
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">
                Mustafa Melake
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
                Engineering Philosophy
              </p>
            </div>

            {/* Statement + supporting copy */}
            <div>
              <h2 className="text-2xl font-medium leading-snug tracking-tight text-slate-900 md:text-4xl md:leading-[1.2]">
                <span className="text-slate-500">
                  My approach is simple:{" "}
                </span>
                I focus on{" "}
                <span className="font-semibold">
                  functionality, speed, and business integrity
                </span>{" "}
                — every line of code serving a clear commercial purpose, without
                unnecessary complexity.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600">
                I build and run the whole stack — server-rendered storefronts,
                the admin tools that manage them, and the databases behind both
                — so nothing slips through the gaps between front end and back.
                And because I build for MENA and the Gulf, Arabic, RTL, and local
                currency are designed in from the first commit, never bolted on.
              </p>

              <Link
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                See my work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </FadeIn>

        <hr className="my-16 border-slate-200 md:my-20" />

        {/* 3. Expertise & capabilities */}
        <FadeIn direction="up">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            Expertise &amp; Capabilities
          </p>
          <ul>
            {CAPABILITIES.map((cap, i) => (
              <li
                key={cap.title}
                className="grid grid-cols-1 gap-4 border-t border-slate-200 py-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10"
              >
                <span className="font-mono text-sm font-semibold text-slate-900">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                    {cap.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                    {cap.body}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 md:max-w-[240px] md:justify-end">
                  {cap.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-500"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

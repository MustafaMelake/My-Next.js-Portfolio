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
import { ShieldCheck, Gauge, Coins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";

const GOLD = "#c9a96a";

const PILLARS = [
  {
    icon: Coins,
    title: "Revenue you can trust",
    body: "Server-authoritative pricing, financial-grade Decimal money, and race-safe stock control mean every transaction is correct and impossible to tamper with — no leaks, no rounding drift, no disputes.",
  },
  {
    icon: ShieldCheck,
    title: "Security by architecture",
    body: "Layered authentication guards, role-based access resolved live from the database, and Zod-validated server actions protect your platform and your customers by design — never as an afterthought.",
  },
  {
    icon: Gauge,
    title: "Speed that converts",
    body: "React Server Components, streaming, request-level caching, and edge middleware deliver sub-second loads — directly lifting your SEO, your conversions, and the impression your brand makes.",
  },
];

const STATS = [
  { value: 4, label: "Production platforms", format: (n: number) => String(Math.round(n)).padStart(2, "0") },
  { value: 60, label: "Automated tests passing", format: (n: number) => `${Math.round(n)}/60` },
  { value: 100, label: "Type-safe, strictly", format: (n: number) => `${Math.round(n)}%` },
];

function Stat({
  value,
  label,
  format,
}: {
  value: number;
  label: string;
  format: (n: number) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => format(v));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, value, reduce, count]);

  return (
    <div ref={ref} aria-label={`${format(value)} — ${label}`}>
      <motion.div
        aria-hidden
        className="font-semibold text-3xl md:text-4xl tracking-tight text-white tabular-nums"
      >
        {text}
      </motion.div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-36">
      {/* Ambient warmth behind the panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[80%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[120px]"
        style={{ backgroundColor: GOLD }}
      />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <FadeIn direction="up">
          <div className="mb-14 max-w-3xl">
            <p
              className="mb-4 font-mono text-xs uppercase tracking-[0.3em]"
              style={{ color: GOLD }}
            >
              About
            </p>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Software businesses can&apos;t
              <br />
              afford to get wrong.
            </h2>
          </div>
        </FadeIn>

        {/* Manifesto panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0b0b0d] p-8 shadow-2xl ring-1 ring-white/5 md:p-14 lg:p-16"
        >
          {/* Corner hairlines */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-40"
            style={{
              background: `radial-gradient(circle at top right, ${GOLD}22, transparent 70%)`,
            }}
          />

          <div className="mb-8 flex items-center justify-between gap-4">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.3em]"
              style={{ color: GOLD }}
            >
              The Engineer
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Cairo · Remote Worldwide
            </span>
          </div>

          <p className="max-w-3xl text-2xl font-medium leading-snug text-neutral-100 md:text-4xl md:leading-[1.15]">
            I ship production-grade platforms end to end — secure,
            server-validated, and fast enough to feel{" "}
            <span className="italic" style={{ color: GOLD }}>
              effortless
            </span>
            .
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            I&apos;m Mustafa — a full-stack engineer who builds the systems
            serious businesses run on. Not prototypes, not templates: real
            platforms where the money is always right, the data is always
            protected, and pages load before your customer can blink. Every line
            is written to survive production, scale cleanly, and make your
            business look as considered as it is.
          </p>

          {/* Self-drawing gold divider */}
          <motion.div
            aria-hidden
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="my-10 h-px w-full origin-left"
            style={{
              background: `linear-gradient(to right, ${GOLD}, ${GOLD}55, transparent)`,
            }}
          />

          {/* Proof metrics */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            {STATS.map((s, i) => (
              <div key={s.label} className={i === 0 ? "" : "sm:pl-8"}>
                <Stat value={s.value} label={s.label} format={s.format} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capability pillars */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-8 top-0 h-px opacity-60"
                    style={{
                      background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                    }}
                  />
                  <Icon
                    className="mb-5 h-7 w-7"
                    strokeWidth={1.5}
                    style={{ color: GOLD }}
                  />
                  <h3 className="mb-3 text-lg font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {pillar.body}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-10 md:flex-row md:items-center">
            <p className="max-w-md text-lg text-slate-600">
              I take on a handful of projects at a time, so the work stays
              exceptional.
            </p>
            <Button
              asChild
              size="lg"
              className="group gap-2 rounded-full bg-black px-8 text-base text-white hover:bg-black/90"
            >
              <Link href="#contact">
                Start a conversation
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";
import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { bookingHref, HAS_BOOKING, GOLD } from "@/lib/site";

const PORTRAIT = "/images/IMG_0701.jpeg";
const PORTRAIT_ALT = "Mustafa Melake, full-stack engineer";

/** True only after client hydration (SSR-safe; no setState-in-effect). */
const subscribeNoop = () => () => {};
function useHydrated() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
}

/** Desktop viewport (>= md) as an external store; SSR defaults to mobile. */
function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 768px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false
  );
}

/* -------------------------------------------------------------------------- */
/* Shared, presentation-only pieces                                           */
/* -------------------------------------------------------------------------- */

/** The single page h1. `compact` uses a controlled size for the stacked view. */
function IntroHeading({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const size = compact ? "text-5xl sm:text-6xl" : "text-[15vw] lg:text-[13vw]";
  return (
    <h1
      className={cn(
        "font-extrabold uppercase leading-[0.82] tracking-tighter text-slate-900",
        className
      )}
    >
      <span className={cn("block whitespace-nowrap", size)}>Full Stack</span>
      <span className={cn("block whitespace-nowrap", size)}>Engineer</span>
    </h1>
  );
}

function Greeting() {
  return (
    <p className="text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
      Hey! I&apos;m Mustafa — a builder based in Egypt.
    </p>
  );
}

function Bio() {
  return (
    <div>
      <p className="text-base leading-relaxed text-slate-700 md:text-lg">
        I build{" "}
        <strong className="font-semibold text-slate-900">
          scalable, correct-to-the-cent e-commerce
        </strong>{" "}
        on Next.js — server-rendered storefronts where the money is always
        right and pages load before your customer can blink.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
        <Button asChild className="gap-2 rounded-full px-6">
          <Link
            href={bookingHref("#contact")}
            {...(HAS_BOOKING
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <CalendarDays size={16} />
            Book a call
          </Link>
        </Button>
        <Link
          href="#projects"
          className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          See my work
        </Link>
      </div>
    </div>
  );
}

function CornerUtilities() {
  return (
    <>
      <span className="absolute bottom-6 left-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
        &copy;2026
      </span>
      <span className="absolute bottom-6 right-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
        / Engineering since 2024
      </span>
    </>
  );
}

/** Abstract geometric accents. Decorative only (desktop scene). */
function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <span className="absolute left-[8%] top-[22%] h-16 w-16 rounded-full border border-slate-300 lg:h-24 lg:w-24" />
      <span
        className="absolute right-[12%] top-[28%] h-3 w-3 rounded-full"
        style={{ backgroundColor: GOLD }}
      />
      <span className="absolute right-[18%] top-[16%] block h-10 w-10 rotate-12 border border-slate-300 lg:h-14 lg:w-14" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stacked variant — mobile (<md), reduced-motion, and SSR                    */
/* -------------------------------------------------------------------------- */

function HeroStacked({ animate }: { animate: boolean }) {
  const mount = (i: number) =>
    animate
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.5,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }
      : {};

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center gap-8 overflow-hidden bg-slate-50 px-6 pb-20 pt-28 text-center">
      <motion.div {...mount(0)}>
        <IntroHeading compact className="text-center" />
      </motion.div>

      <motion.div
        {...mount(1)}
        className="relative h-[300px] w-[232px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5"
      >
        <Image
          src={PORTRAIT}
          alt={PORTRAIT_ALT}
          fill
          priority
          sizes="232px"
          className="object-cover"
        />
      </motion.div>

      <motion.div {...mount(2)}>
        <Greeting />
      </motion.div>

      <motion.div {...mount(3)} className="w-full max-w-md">
        <Bio />
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Scroll variant — desktop only (>= md)                                      */
/* -------------------------------------------------------------------------- */

function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Intro type: slides up and fades out.
  const introY = useTransform(scrollYProgress, [0, 0.35], ["0vh", "-60vh"]);
  const introOpacity = useTransform(scrollYProgress, [0.05, 0.32], [1, 0]);
  // Decorative shapes + corners: parallax + fade out early.
  const decorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const decorY = useTransform(scrollYProgress, [0, 0.35], ["0vh", "-16vh"]);
  // Portrait: rises from a bottom anchor to center, scales up, flips (desktop-only render).
  const portraitY = useTransform(scrollYProgress, [0.12, 0.7], ["30vh", "0vh"]);
  const portraitScale = useTransform(scrollYProgress, [0.12, 0.7], [0.52, 1]);
  const portraitRotate = useTransform(scrollYProgress, [0.18, 0.62], [180, 0]);
  // Final greeting + bio: fade/slide in, hugging the portrait.
  const finalOpacity = useTransform(scrollYProgress, [0.62, 0.9], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.62, 0.9], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[220vh] bg-slate-50">
      <div className="sticky top-0 flex h-dvh items-center justify-center gap-6 overflow-hidden px-6 lg:gap-10">
        {/* Decorative layer */}
        <motion.div
          style={{ opacity: decorOpacity, y: decorY }}
          className="pointer-events-none absolute inset-0"
        >
          <FloatingShapes />
          <CornerUtilities />
        </motion.div>

        {/* Intro type */}
        <motion.div
          style={{ y: introY, opacity: introOpacity }}
          className="absolute left-0 right-0 top-[12%] px-6"
        >
          <IntroHeading className="text-center" />
        </motion.div>

        {/* Greeting — hugs the left of the portrait */}
        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="w-[13rem] shrink-0 text-right lg:w-[16rem]"
        >
          <Greeting />
        </motion.div>

        {/* Portrait — center; motion offsets, scales, and flips it */}
        <div style={{ perspective: 1200 }} className="shrink-0">
          <motion.div
            style={{
              y: portraitY,
              scale: portraitScale,
              rotateY: portraitRotate,
            }}
            className="relative h-[340px] w-[260px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 lg:h-[420px] lg:w-[330px]"
          >
            <Image
              src={PORTRAIT}
              alt={PORTRAIT_ALT}
              fill
              priority
              sizes="(max-width: 1024px) 260px, 330px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Bio — hugs the right of the portrait */}
        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="w-[14rem] shrink-0 text-left lg:w-[17rem]"
        >
          <Bio />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Entry: SSR + reduced-motion => static stack; mobile => animated stack;     */
/* desktop => scroll scene. Mobile is fully severed from useScroll.           */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  const reduce = useReducedMotion();
  const hydrated = useHydrated();
  const isDesktop = useIsDesktop();

  if (!hydrated || reduce) return <HeroStacked animate={false} />;
  if (!isDesktop) return <HeroStacked animate />;
  return <HeroScroll />;
}

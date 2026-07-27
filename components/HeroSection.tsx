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

/** Desktop viewport as an external store; SSR defaults to mobile (no flip). */
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
/* Shared, presentation-only pieces (reused by both variants)                 */
/* -------------------------------------------------------------------------- */

/** The single page h1. */
function IntroHeading({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "font-extrabold uppercase leading-[0.82] tracking-tighter text-slate-900",
        className
      )}
    >
      <span className="block text-[15vw] md:text-[13vw]">Full Stack</span>
      <span className="block text-[15vw] md:text-[13vw]">Engineer</span>
    </h1>
  );
}

function Greeting({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl",
        className
      )}
    >
      Hey! I&apos;m Mustafa — a builder based in Egypt.
    </p>
  );
}

function Bio({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-base leading-relaxed text-slate-600 md:text-lg">
        I build{" "}
        <strong className="font-semibold text-slate-900">
          scalable, correct-to-the-cent e-commerce
        </strong>{" "}
        on Next.js — server-rendered storefronts where the money is always
        right, the data is protected, and pages load before your customer can
        blink.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-4">
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

/** Abstract geometric accents. Decorative only. */
function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <span className="absolute left-[8%] top-[22%] h-16 w-16 rounded-full border border-slate-300 md:h-24 md:w-24" />
      <span
        className="absolute right-[12%] top-[28%] h-3 w-3 rounded-full"
        style={{ backgroundColor: GOLD }}
      />
      <span className="absolute right-[18%] top-[16%] block h-10 w-10 rotate-12 border border-slate-300 md:h-14 md:w-14" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Static variant — SSR default + prefers-reduced-motion                      */
/* -------------------------------------------------------------------------- */

function HeroStatic() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-slate-50 px-6 pb-16 pt-28">
      <FloatingShapes />
      <IntroHeading className="text-center" />
      <div className="relative mt-8 mb-10 h-[300px] w-[232px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 md:h-[380px] md:w-[300px]">
        <Image
          src={PORTRAIT}
          alt={PORTRAIT_ALT}
          fill
          priority
          sizes="(max-width: 768px) 232px, 300px"
          className="object-cover"
        />
      </div>
      <div className="grid max-w-4xl grid-cols-1 items-center gap-8 text-center md:grid-cols-2 md:gap-16 md:text-left">
        <Greeting />
        <Bio />
      </div>
      <CornerUtilities />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Scroll variant — full choreography                                         */
/* -------------------------------------------------------------------------- */

function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // The 3D flip is desktop-only (perf/jank on touch).
  const isDesktop = useIsDesktop();

  // Intro type: slides up and fades out.
  const introY = useTransform(scrollYProgress, [0, 0.35], ["0vh", "-60vh"]);
  const introOpacity = useTransform(scrollYProgress, [0.05, 0.32], [1, 0]);

  // Decorative shapes + corner utilities: parallax + fade out early.
  const decorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const decorY = useTransform(scrollYProgress, [0, 0.35], ["0vh", "-16vh"]);

  // Portrait: rises from a bottom anchor to center, scales up, flips.
  const portraitY = useTransform(scrollYProgress, [0.12, 0.7], ["30vh", "0vh"]);
  const portraitScale = useTransform(scrollYProgress, [0.12, 0.7], [0.52, 1]);
  const portraitRotate = useTransform(scrollYProgress, [0.18, 0.62], [180, 0]);

  // Final greeting + bio: fade/slide in.
  const finalOpacity = useTransform(scrollYProgress, [0.62, 0.9], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.62, 0.9], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[220vh] bg-slate-50">
      <div className="sticky top-0 flex h-dvh items-center justify-center overflow-hidden">
        {/* Decorative layer: shapes + corner utilities */}
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

        {/* Portrait — centered by the flex stage; motion offsets/scales/flips */}
        <div style={{ perspective: 1200 }}>
          <motion.div
            style={{
              y: portraitY,
              scale: portraitScale,
              rotateY: isDesktop ? portraitRotate : 0,
            }}
            className="relative h-[300px] w-[232px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 md:h-[420px] md:w-[330px]"
          >
            <Image
              src={PORTRAIT}
              alt={PORTRAIT_ALT}
              fill
              priority
              sizes="(max-width: 768px) 232px, 330px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Final state: greeting + bio (stacked on mobile, flanking on desktop) */}
        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="pointer-events-auto absolute left-1/2 top-[13%] w-[86%] max-w-xs -translate-x-1/2 text-center md:left-[7%] md:top-1/2 md:w-auto md:max-w-[15rem] md:-translate-x-0 md:-translate-y-1/2 md:text-left">
            <Greeting />
          </div>
          <div className="pointer-events-auto absolute bottom-[9%] left-1/2 w-[88%] max-w-sm -translate-x-1/2 text-center md:bottom-auto md:left-auto md:right-[7%] md:top-1/2 md:w-auto md:max-w-xs md:-translate-y-1/2 md:text-left">
            <Bio />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Entry: SSR/reduced-motion render the static hero; enhance after mount.     */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  const reduce = useReducedMotion();
  const hydrated = useHydrated();

  if (!hydrated || reduce) return <HeroStatic />;
  return <HeroScroll />;
}

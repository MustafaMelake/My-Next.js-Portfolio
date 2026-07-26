"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, CalendarDays, Globe } from "lucide-react";
import { bookingHref, HAS_BOOKING, GOLD } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-primary uppercase mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
          >
            <Sparkles className="w-3 h-3" /> Available for High-End Projects
          </motion.span>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
            Mustafa Melake · Full-Stack Engineer
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Next.js e-commerce that&apos;s fast, secure, and{" "}
            <span className="text-primary italic">correct to the cent.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-4 leading-relaxed">
            I build fast, server-rendered online stores where{" "}
            <strong className="font-semibold text-foreground">
              the money is always right
            </strong>{" "}
            — secure by architecture, correct to the cent, and quick enough to
            keep buyers moving. Built with{" "}
            <strong className="font-semibold">Next.js</strong>,{" "}
            <strong className="font-semibold">React</strong>,{" "}
            <strong className="font-semibold">Prisma</strong>, and{" "}
            <strong className="font-semibold">PostgreSQL</strong>.
          </p>
          <p className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-600">
            <Globe
              className="h-4 w-4 shrink-0"
              style={{ color: GOLD }}
              aria-hidden
            />
            Built for MENA — Arabic / RTL, EGP &amp; Gulf-ready e-commerce.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-md shadow-lg hover:shadow-primary/25 transition-all gap-2"
            >
              <Link
                href={bookingHref("#contact")}
                {...(HAS_BOOKING
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <CalendarDays size={18} />
                Book a call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-slate-300 text-md hover:bg-slate-100"
            >
              <Link href={"#projects"}>Explore my work</Link>
            </Button>
          </div>
          {/* Trust Badges - Simple and Professional */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 opacity-60 grayscale font-mono">
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal border-b border-transparent hover:border-primary transition-colors cursor-default">
              NEXT.JS
            </span>
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal">
              TYPESCRIPT
            </span>
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal">
              PRISMA
            </span>
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal">
              POSTGRESQL
            </span>
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal">
              MONGODB
            </span>
          </div>{" "}
        </motion.div>

        {/* RIGHT SIDE: PHOTO WITH SMOOTH ANIMATION */}
        <div className="relative flex justify-center lg:justify-end items-end h-full">
          {/* Decorative blur effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-10 w-72 h-72 md:w-[450px] md:h-[450px] bg-primary/20 rounded-full blur-[100px] -z-10"
          />

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10"></div>
            <Image
              src="/images/IMG_0701.jpeg"
              alt="Mustafa - Full Stack Architect"
              width={450}
              height={550}
              priority
              className="object-cover rounded-2xl shadow-2xl border-2 border-white/50 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

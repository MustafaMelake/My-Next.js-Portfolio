"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

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
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Mustafa <br />
            <span className="text-primary italic">Next.js 16</span> Architect
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            I build high-performance web applications using **Next.js 16**,
            **Prisma 7**, **PostgreSQL**, and **MongoDB**. Specializing in
            scalable full-stack architectures with a focus on data integrity and
            speed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={"#projects"}>
              <Button
                size="lg"
                className="rounded-full px-8 text-md shadow-lg hover:shadow-primary/25 transition-all"
              >
                Explore My Work
              </Button>
            </Link>
            <Link href={"#contact"}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-slate-300 text-md hover:bg-slate-100"
              >
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
          {/* Trust Badges - Simple and Professional */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 opacity-60 grayscale font-mono">
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal border-b border-transparent hover:border-primary transition-colors cursor-default">
              NEXT.JS 16
            </span>
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal">
              TYPESCRIPT
            </span>
            <span className="text-[10px] md:text-sm font-bold tracking-tighter md:tracking-normal">
              PRISMA 7
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

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-sm font-mono tracking-widest text-slate-500 uppercase mb-4 block">
            Available for Work
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Mustafa <br />
            <span className="text-primary italic">MERN Stack</span> Expert
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            Building scalable web applications with Next.js, TypeScript, and a
            passion for clean, interactive user interfaces.
          </p>
          <div className="flex gap-4">
            <Link href={"#projects"}>
              <Button size="lg" className="rounded-full px-8">
                View Projects
              </Button>
            </Link>
            <Link href={"#contact"}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-slate-300"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: PHOTO SLIDING FROM BOTTOM */}
        <div className="relative flex justify-center lg:justify-end items-end h-full">
          {/* Decorative background element for the photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 w-72 h-72 md:w-96 md:h-96 bg-slate-200/50 rounded-full blur-3xl -z-10"
          />

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for that "smooth" feel
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Replace /my-photo.png with your actual path */}
            <Image
              src="/images/my-pic.jpg"
              alt="Mustafa"
              width={500}
              height={600}
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

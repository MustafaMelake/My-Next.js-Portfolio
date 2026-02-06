"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mt-20 overflow-hidden">
      {/* Glassy Background Layer */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl border-t border-white/20 -z-10" />

      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* LEFT: Aggressive Call to Action */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8"
            >
              LET&apos;S <br />
              <span className="text-primary italic">BUILD</span> SOMETHING.
            </motion.h2>
            <Link
              href="mailto:mustafamelake@gmail.com"
              className="group flex items-center gap-2 text-xl font-bold hover:text-primary transition-colors"
            >
              Contact me{" "}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT: Navigation & Socials */}
          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-6">
              <SocialLink
                href="https://github.com/MustafaMelake"
                icon={<Github />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/mustafa-melake-002b37379/"
                icon={<Linkedin />}
              />
              <SocialLink
                href="mailto:mustafamelake@gmail.com"
                icon={<Mail />}
              />
              <SocialLink
                href="https://www.instagram.com/mustafamelake/"
                icon={<Instagram />}
              />
            </div>

            <nav className="flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
              <Link
                href="#about"
                className="hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="hover:text-black transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="hover:text-black transition-colors"
              >
                Projects
              </Link>
            </nav>
          </div>
        </div>

        {/* Massive Background Text (The Aggressive Part) */}
        <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none opacity-[0.03] flex justify-center overflow-hidden">
          <h1 className="text-[20rem] font-black leading-none whitespace-nowrap">
            MUSTAFA
          </h1>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>© {currentYear} MUSTAFA. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH NEXT.JS + TAILWIND V4</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 bg-black text-white rounded-full hover:scale-110 active:scale-95 transition-all shadow-xl hover:shadow-primary/20"
    >
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
    </Link>
  );
}

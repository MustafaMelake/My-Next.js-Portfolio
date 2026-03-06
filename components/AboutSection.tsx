"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Terminal, Cpu, Globe, Database, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-slate-400 font-mono">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio - Updated to highlight Modern Full-Stack */}
          <div className="md:col-span-2">
            <FadeIn direction="right" delay={0.2} className="h-full">
              <Card className="p-8 bg-white/50 backdrop-blur-md border-white/20 shadow-xl flex flex-col justify-center h-full group">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Terminal className="w-5 h-5 text-primary" /> The Modern
                  Architect
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  I am a **Full Stack Engineer** specializing in
                  high-performance digital products. While my roots are in the
                  MERN stack, I have evolved into a specialist in **Next.js
                  16**, **Prisma 7**, and **TypeScript**. I architect hybrid
                  data solutions using **PostgreSQL** for complex logic and
                  **MongoDB** for rapid scalability. By leveraging **Server
                  Actions** and modern SSR patterns, I deliver lightning-fast,
                  type-safe experiences that don&apos;t just work—they scale.
                </p>
              </Card>
            </FadeIn>
          </div>

          {/* Quick Stats */}
          <FadeIn direction="left" delay={0.2} className={""}>
            <Card className="p-8 bg-black text-white shadow-2xl flex flex-col items-center justify-center text-center h-full">
              <div className="text-4xl font-bold text-white mb-2">2+</div>
              <p className="text-slate-400  text-sm uppercase tracking-widest font-mono">
                Years of Coding
              </p>
              <hr className="w-full my-6 border-slate-700" />
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-mono">
                Production-Ready Apps
              </p>
            </Card>
          </FadeIn>

          {/* Detail Boxes - Enhanced with Prisma and Performance focus */}
          <FadeIn direction="up" delay={0.1} className={""}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-colors h-full border-l-4 border-l-primary/50">
              <div className="flex justify-between items-start mb-4">
                <Database className="w-8 h-8 text-slate-700" />
                <div className="flex gap-1">
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-mono">
                    SQL
                  </span>
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-mono">
                    NoSQL
                  </span>
                </div>
              </div>
              <h4 className="font-bold mb-2">Hybrid Database Expert</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Expert in architecting scalable data layers using **Prisma 7**
                with **PostgreSQL** for complex relations, and **MongoDB** for
                high-velocity, flexible data structures.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className={""}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-all h-full group">
              <Zap className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Modern Architecture</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Expertise in **Next.js 16** App Router and **Server Actions**
                for seamless Full-Stack development. Fully type-safe with
                **TypeScript** to ensure Zero-Runtime errors.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className={""}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-all h-full group">
              <Cpu className="w-8 h-8 mb-4 text-slate-700 group-hover:rotate-12 transition-transform" />
              <h4 className="font-bold mb-2">High-Velocity Apps</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Obsessed with **Core Web Vitals**. I optimize **Prisma** queries
                and use **Edge Runtime** to achieve sub-second load times,
                directly boosting your SEO and user retention.
              </p>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

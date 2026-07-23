"use client";
import { Card } from "@/components/ui/card";
import { Terminal, Cpu, Database, Zap } from "lucide-react";
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
                  I am a{" "}
                  <strong className="font-semibold">Full Stack Engineer</strong>{" "}
                  specializing in high-performance, production-grade web
                  applications. With roots in the MERN stack, I now build
                  server-rendered, server-validated platforms with{" "}
                  <strong className="font-semibold">Next.js 16</strong>,{" "}
                  <strong className="font-semibold">React 19</strong>, and{" "}
                  <strong className="font-semibold">TypeScript</strong>, backed
                  by <strong className="font-semibold">PostgreSQL</strong> and{" "}
                  <strong className="font-semibold">Prisma 7</strong> for
                  type-safe, relational data at scale. By leveraging{" "}
                  <strong className="font-semibold">
                    React Server Components
                  </strong>{" "}
                  and <strong className="font-semibold">Server Actions</strong>,
                  I deliver fast, secure, type-safe experiences that don&apos;t
                  just work—they scale.
                </p>
              </Card>
            </FadeIn>
          </div>

          {/* Quick Stats */}
          <FadeIn direction="left" delay={0.2}>
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
          <FadeIn direction="up" delay={0.1}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-colors h-full border-l-4 border-l-primary/50">
              <div className="flex justify-between items-start mb-4">
                <Database className="w-8 h-8 text-slate-700" />
                <div className="flex gap-1">
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-mono">
                    POSTGRES
                  </span>
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-mono">
                    PRISMA
                  </span>
                </div>
              </div>
              <h4 className="font-bold mb-2">Relational Data Expert</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Expert in architecting scalable, type-safe data layers with{" "}
                <strong className="font-semibold">Prisma 7</strong> and{" "}
                <strong className="font-semibold">PostgreSQL</strong> (Neon) —
                modeling complex relations with migrations, indexing, and
                financial-grade{" "}
                <strong className="font-semibold">Decimal</strong> precision.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-all h-full group">
              <Zap className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Modern Architecture</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Expertise in the{" "}
                <strong className="font-semibold">Next.js 16</strong> App Router,{" "}
                <strong className="font-semibold">
                  React Server Components
                </strong>
                , and{" "}
                <strong className="font-semibold">Server Actions</strong> —
                secured end-to-end with{" "}
                <strong className="font-semibold">Better Auth</strong>,{" "}
                <strong className="font-semibold">Zod</strong> validation, and
                full <strong className="font-semibold">TypeScript</strong>{" "}
                type-safety.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-all h-full group">
              <Cpu className="w-8 h-8 mb-4 text-slate-700 group-hover:rotate-12 transition-transform" />
              <h4 className="font-bold mb-2">High-Velocity Apps</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Obsessed with{" "}
                <strong className="font-semibold">Core Web Vitals</strong>. I
                optimize <strong className="font-semibold">Prisma</strong>{" "}
                queries, dedupe reads with request-level caching, and lean on
                streaming SSR and{" "}
                <strong className="font-semibold">Edge middleware</strong> to hit
                sub-second loads — directly boosting your SEO and user retention.
              </p>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Terminal, Cpu, Globe } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-slate-400 font-mono">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio - md:col-span-2 added to the wrapper div */}
          <div className="md:col-span-2">
            <FadeIn direction="right" delay={0.2} className="h-full">
              <Card className="p-8 bg-white/50 backdrop-blur-md border-white/20 shadow-xl flex flex-col justify-center h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" /> The Developer
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  I&apos;m a Full Stack Developer specializing in the MERN
                  stack. I don&apos;t just write code; I build digital
                  experiences that are fast, accessible, and scalable. My
                  journey started with a curiosity for how things work under the
                  hood, which led me to a deep love for **TypeScript** and
                  **Next.js**.
                </p>
              </Card>
            </FadeIn>
          </div>

          {/* Quick Stats */}
          <FadeIn direction="left" delay={0.2} className={""}>
            <Card className="p-8 bg-slate-900 text-white shadow-2xl flex flex-col items-center justify-center text-center h-full">
              <div className="text-4xl font-bold text-white mb-2">2+</div>
              <p className="text-slate-400  text-sm uppercase tracking-widest font-mono">
                Years Experience
              </p>
              <hr className="w-full my-6 border-slate-700" />
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-mono">
                Projects Delivered
              </p>
            </Card>
          </FadeIn>

          {/* Detail Boxes */}
          <FadeIn direction="up" delay={0.1} className={""}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-colors h-full">
              <Code2 className="w-8 h-8 mb-4 text-slate-700" />
              <h4 className="font-bold mb-2">Problem Solver</h4>
              <p className="text-sm text-slate-500">
                Turning complex business logic into simple, elegant code is my
                specialty.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className={""}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-colors h-full">
              <Globe className="w-8 h-8 mb-4 text-slate-700" />
              <h4 className="font-bold mb-2">Always Learning</h4>
              <p className="text-sm text-slate-500">
                Currently exploring AI integration and advanced Framer Motion
                animations.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className={""}>
            <Card className="p-6 bg-white/30 backdrop-blur-sm border-white/20 hover:bg-white/50 transition-colors h-full">
              <Cpu className="w-8 h-8 mb-4 text-slate-700" />
              <h4 className="font-bold mb-2">Performance First</h4>
              <p className="text-sm text-slate-500">
                I obsess over Core Web Vitals and clean component architecture.
              </p>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

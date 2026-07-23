"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Shadcn Badge
import { Download, ExternalLink, Github } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsSection() {
  const PROJECTS = [
    {
      id: 1,
      title: "Ali Baba ",
      description: "A full-stack MERN application.",
      image: "/images/ali-baba-web.png",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      liveLink: "https://ali-baba-web-theta.vercel.app",
      codeLink: "https://github.com/MustafaMelake/ali-baba-web",
    },
    {
      id: 2,
      title: "Rose Misk | Luxury Fragrance E-commerce",
      description:
        "A high-performance Full-stack platform for premium fragrances. Featuring secure session-based auth, dynamic filtering, and optimized media handling. Engineered for 100/100 Lighthouse performance scores.",
      image: "/images/rose-misk.png",
      tech: [
        "Next.js 16",
        "React 19",
        "Prisma 7",
        "Neon DB",
        "Better Auth",
        "Tailwind v4",
      ],
      liveLink: "https://rosemisk.store",
      codeLink: "https://github.com/MustafaMelake/Rose-Misk-Store-E-commerce",
    },
    {
      id: 3,
      title: "StoryFlow - Modern Blog System",
      description:
        "A Full-stack blogging platform with Next.js 16, featuring secure Social Auth, Prisma ORM, and high-performance Server Components.",
      image: "/images/storyflow-blog.png",
      tech: [
        "Next.js 16",
        "Prisma 7",
        "PostgreSQL",
        "Better Auth",
        "Tailwind v4",
      ],
      liveLink: "https://next16-prisma-blog.vercel.app",
      codeLink: "https://github.com/MustafaMelake/next16-prisma-blog",
    },
    {
      id: 4,
      title: "Animated Landing Page",
      description:
        "A high-performance, SEO-optimized landing page built with Next.js 16 and Framer Motion, featuring 'production-grade' animations, full type-safety, and a mobile-first responsive architecture.",
      image: "/images/landing-page.png",
      tech: ["Next.js 16", "Framer", "TailwindCSS"],
      liveLink: "https://animated-landing-page-xi-one.vercel.app/",
      codeLink: "https://github.com/MustafaMelake/Animated-LandingPage",
    },
  ];
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {PROJECTS.map((project, index) => (
            <FadeIn
              key={project.id}
              direction="up"
              delay={index * 0.1}
              className={""}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-white/40 backdrop-blur-xl border-white/20 shadow-xl group">
                  {/* Project Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="bg-white/50 text-[10px] uppercase tracking-wider"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        {/* Live Demo Button */}
                        <Button
                          asChild
                          size="sm"
                          className="gap-2 h-9 w-9 p-0 md:w-auto md:px-3"
                        >
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} />
                            <span className="hidden md:inline text-xs">
                              Live
                            </span>
                          </Link>
                        </Button>

                        {/* GitHub Code Button */}
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="gap-2 h-9 w-9 p-0 md:w-auto md:px-3 border-slate-200"
                        >
                          <Link
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={14} />
                            <span className="hidden md:inline text-xs">
                              Code
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CV Download Button */}
        <div className="flex justify-center mt-20">
          <FadeIn direction="up" className={""}>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-lg shadow-2xl"
            >
              <a href="/MUSTAFA_MELAKE.pdf" download>
                <Download size={20} />
                Download My CV
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

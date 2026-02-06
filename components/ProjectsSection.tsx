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
      title: "E-Commerce Platform",
      description:
        "A Front-end application , Made for a fragrances online page.",
      image: "/images/rose-misk.png",
      tech: ["React", "Tailwind"],
      liveLink: "https://mustafamelake.github.io/Rose-Misk-Store-E-commerce/",
      codeLink: "https://github.com/MustafaMelake/Rose-Misk-Store-E-commerce",
    },
    {
      id: 2,
      title: "Job Application Tracker",
      description:
        "A full-stack MERN application with Next.js , Drag and Drop , and an admin dashboard.",
      image: "/images/job-application.png",
      tech: ["MongoDB", "Express", "Next.js", "Node.js", "TypeScript"],
      liveLink:
        "https://job-application-tracker-jiaeap3sy-mustafamelake-9923s-projects.vercel.app/",
      codeLink: "https://github.com/MustafaMelake/job-application-tracker",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-stack MERN application.",
      image: "/images/e-commerce.png",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      liveLink: "https://mustafamelake.github.io/E-Commerce_MERN/",
      codeLink: "https://github.com/MustafaMelake/E-Commerce_MERN",
    },
    {
      id: 4,
      title: "Dashboard",
      description:
        "A full-stack MERN application with Redux, Stripe integration, and an admin dashboard.",
      image: "/images/dashboard.png",
      tech: ["HTML", "CSS"],
      liveLink: "https://mustafamelake.github.io/Dashboard_Project/",
      codeLink: "https://github.com/MustafaMelake/Dashboard_Project",
    },
    {
      id: 5,
      title: "Landing Page",
      description:
        "A Front-end landing page made by HTML and CSS to show how am i good at CSS with many different features.",
      image: "/images/landing-page.png",
      tech: ["HTML", "CSS"],
      liveLink: "https://mustafamelake.github.io/Professional-Landing-Page.-/",
      codeLink:
        "https://github.com/MustafaMelake/Professional-Landing-Page.-/tree/master?tab=readme-ov-file",
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
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="gap-2 h-9 w-9 p-0 md:w-auto md:px-3"
                          >
                            <ExternalLink size={14} />
                            <span className="hidden md:inline text-xs">
                              Live
                            </span>
                          </Button>
                        </Link>

                        {/* GitHub Code Button */}
                        <Link
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-2 h-9 w-9 p-0 md:w-auto md:px-3 border-slate-200"
                          >
                            <Github size={14} />
                            <span className="hidden md:inline text-xs">
                              Code
                            </span>
                          </Button>
                        </Link>
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
              <a href="/Mustafa_FullStack_CV.pdf" download>
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

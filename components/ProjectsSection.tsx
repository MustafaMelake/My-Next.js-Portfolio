import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { DemoBadge } from "./DemoBadge";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-20">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.slug} direction="up" delay={(index % 2) * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View case study: ${project.title}`}
                className="group block rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              >
                {/* Framed preview */}
                <div className="rounded-[2rem] p-3 md:p-4 ring-1 ring-indigo-100/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-indigo-200/50">
                  <ProjectThumbnail
                    src={project.gallery[0]?.src}
                    alt={`${project.title} screenshot`}
                    title={project.title}
                    slug={project.slug}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="aspect-[4/3] rounded-[1.4rem]"
                    imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Caption */}
                <div className="mt-6 px-1">
                  <div className="mb-2 flex items-center gap-2">
                    <p className="text-sm text-slate-500">{project.category}</p>
                    {project.demo ? <DemoBadge /> : null}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-slate-900 transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CV Download */}
        <div className="flex justify-center mt-24">
          <FadeIn direction="up">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-lg shadow-2xl gap-2"
            >
    <a href="/MUSTAFA_MELAKE_CV.pdf" download>
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

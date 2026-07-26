import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { MetricsStrip } from "@/components/MetricsStrip";
import { WhatThisProtects } from "@/components/WhatThisProtects";
import { Testimonial } from "@/components/Testimonial";
import { BookingCta } from "@/components/BookingCta";
import { DemoBadge } from "@/components/DemoBadge";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { JsonLd } from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import { SITE_URL, SITE_NAME, ogImageUrl } from "@/lib/site";
import { PROJECTS, getProject, FRONTEND_STACK } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  const url = `/projects/${project.slug}`;
  const ogImage = ogImageUrl({
    title: project.title,
    category: project.category,
    demo: project.demo,
  });

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.tagline,
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
      images: [ogImage],
    },
  };
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 py-3">
      <dt className="text-sm text-slate-500">{label}</dt>
      <dd className="text-sm font-medium text-slate-800 text-right">{value}</dd>
    </div>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.tagline,
    url: `${SITE_URL}/projects/${project.slug}`,
    inLanguage: "en",
    genre: project.category,
    keywords: project.tech.join(", "),
    image: project.gallery[0]
      ? `${SITE_URL}${project.gallery[0].src}`
      : undefined,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="min-h-screen pt-28 pb-24">
      <JsonLd data={jsonLd} />
      <div className="container mx-auto px-6">
        {/* Back */}
        <Button
          asChild
          variant="outline"
          className="mb-12 gap-2 rounded-full border-slate-200"
        >
          <Link href="/#projects">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </Button>

        {/* Title */}
        <FadeIn direction="up">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {project.category}
              </p>
              {project.demo ? <DemoBadge /> : null}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-500 md:text-xl">
              {project.tagline}
            </p>
          </div>
        </FadeIn>

        {/* Preview gallery */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mb-16">
            <ScreenshotGallery
              screenshots={project.gallery}
              title={project.title}
            />
          </div>
        </FadeIn>

        {/* Business-first narrative — served before the technical depth */}
        <FadeIn direction="up">
          <div className="mb-24 space-y-16 md:mb-28 md:space-y-24">
            {project.businessProblem ? (
              <section
                aria-labelledby="problem-heading"
                className="mx-auto max-w-3xl"
              >
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  {project.demo ? "The concept" : "The business problem"}
                </p>
                <h2
                  id="problem-heading"
                  className="mb-5 text-3xl font-bold tracking-tight md:text-4xl"
                >
                  {project.demo ? "What it demonstrates" : "What was at stake"}
                </h2>
                <p className="text-lg leading-relaxed text-slate-700">
                  {project.businessProblem}
                </p>
              </section>
            ) : null}

            <MetricsStrip metrics={project.metrics} demo={project.demo} />
            <WhatThisProtects items={project.protects} demo={project.demo} />
            <Testimonial data={project.testimonial} />
          </div>
        </FadeIn>

        {/* Body — technical depth, for the evaluator */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="h-fit space-y-8 lg:sticky lg:top-28">
            <dl>
              <MetaRow label="Category" value={project.category} />
              <MetaRow label="Role" value={project.role} />
              <MetaRow label="Type" value={project.type} />
            </dl>

            <div className="flex flex-col gap-3">
              <Button asChild className="w-full gap-2 rounded-full">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Visit Live Site
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full gap-2 rounded-full border-slate-300"
              >
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  View Source
                </Link>
              </Button>
            </div>
          </aside>

          {/* Content */}
          <FadeIn direction="up" delay={0.1}>
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Under the hood
              </p>
              <p className="mb-12 text-lg leading-relaxed text-slate-700">
                {project.overview}
              </p>

              {project.sections.map((section) => (
                <div key={section.heading} className="mb-10">
                  <h2 className="mb-3 text-2xl font-bold tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed text-slate-600">
                    {section.body}
                  </p>
                </div>
              ))}

              {/* Tech stack */}
              <h2 className="mb-4 text-2xl font-bold tracking-tight">
                Built With
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider",
                      FRONTEND_STACK.has(t)
                        ? "border-primary/20 bg-primary/10 text-primary shadow-sm shadow-primary/10"
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Mid-page conversion CTA */}
        <FadeIn direction="up">
          <BookingCta />
        </FadeIn>
      </div>
    </main>
  );
}

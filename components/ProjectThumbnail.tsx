"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Derive up to two initials from a project's display title. Uses the
 * descriptive portion before an em/en/hyphen dash, then splits on whitespace
 * and camelCase boundaries so:
 *   "StoryFlow — CMS"  -> "SF"
 *   "Ali Baba — ..."   -> "AB"
 *   "Melake — ..."     -> "M"
 */
function deriveInitials(title: string): string {
  const name = title.split(/[—–-]/)[0].trim();
  const words = name
    .replace(/([a-z])([A-Z])/g, "$1 $2") // split camelCase: StoryFlow -> Story Flow
    .split(/\s+/)
    .filter(Boolean);
  const letters = words.map((w) => w[0]).join("");
  return (letters.slice(0, 2) || name.slice(0, 2) || "?").toUpperCase();
}

/**
 * Deterministic gradient per slug so a given project always falls back to the
 * same placeholder. Neutral slate base with the existing warm gold accent
 * (AboutSection GOLD = #c9a96a) to stay inside the design language.
 */
const GRADIENTS: readonly string[] = [
  "linear-gradient(135deg, #1e293b 0%, #334155 55%, #c9a96a 145%)",
  "linear-gradient(135deg, #0b0b0d 0%, #2b2b30 60%, #c9a96a 150%)",
  "linear-gradient(135deg, #334155 0%, #475569 55%, #94a3b8 140%)",
  "linear-gradient(135deg, #1f2937 0%, #374151 55%, #c9a96a 150%)",
];

function gradientForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return GRADIENTS[hash % GRADIENTS.length];
}

type ProjectThumbnailProps = {
  /** Image path; when absent or it fails to load, the gradient fallback renders. */
  src?: string;
  alt: string;
  /** Full project title — used to derive the fallback initials. */
  title: string;
  /** Project slug — seeds the deterministic fallback gradient. */
  slug: string;
  priority?: boolean;
  sizes: string;
  /** Classes for the framed surface (e.g. aspect ratio + corner radius). */
  className?: string;
  /** Classes applied to the <Image> element (e.g. hover transforms). */
  imgClassName?: string;
};

/**
 * Project image with a guaranteed non-empty render. If `src` is missing or the
 * image errors at runtime, a branded initials-on-gradient placeholder is shown
 * instead, so a project card can never render blank.
 */
export function ProjectThumbnail({
  src,
  alt,
  title,
  slug,
  priority = false,
  sizes,
  className,
  imgClassName,
}: ProjectThumbnailProps) {
  const [failed, setFailed] = useState(false);
  const showFallback = !src || failed;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-50",
        className
      )}
    >
      {showFallback ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundImage: gradientForSlug(slug) }}
        >
          <span className="font-mono text-5xl font-bold tracking-tight text-white/90 md:text-6xl">
            {deriveInitials(title)}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onError={() => setFailed(true)}
          className={cn("object-cover object-top", imgClassName)}
        />
      )}
    </div>
  );
}

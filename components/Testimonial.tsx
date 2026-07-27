import Image from "next/image";
import { Quote } from "lucide-react";
import { GOLD } from "@/lib/site";
import type { Testimonial as TestimonialData } from "@/lib/projects";

/**
 * Client quote block. Renders nothing when a project has no testimonial, so the
 * page stays clean until real social proof exists. The avatar is optional.
 */
export function Testimonial({ data }: { data?: TestimonialData }) {
  if (!data) return null;
  const { quote, name, role, company, avatar } = data;

  return (
    <section aria-label="Client testimonial" className="mx-auto max-w-3xl">
      <figure className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/60 p-8 shadow-sm backdrop-blur-sm md:p-12">
        <Quote
          aria-hidden
          className="mb-6 h-8 w-8"
          strokeWidth={1.5}
          style={{ color: GOLD }}
        />
        <blockquote className="text-xl font-medium leading-relaxed text-slate-800 md:text-2xl md:leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          {avatar ? (
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200">
              <Image
                src={avatar}
                alt={name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
          ) : null}
          <span>
            <span className="block font-semibold text-slate-900">{name}</span>
            <span className="block text-sm text-slate-500">
              {role}, {company}
            </span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

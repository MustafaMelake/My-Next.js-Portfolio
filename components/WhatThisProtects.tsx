import { ShieldCheck } from "lucide-react";
import { GOLD } from "@/lib/site";
import type { ProtectItem } from "@/lib/projects";

/**
 * A 3-column grid of business guarantees written in outcome language (what the
 * owner gets), translated from the project's engineering highlights. Renders
 * nothing when a project has no `protects` entries.
 */
export function WhatThisProtects({
  items,
  demo = false,
}: {
  items?: ProtectItem[];
  /** Demo builds frame these as demonstrated capabilities, not client guarantees. */
  demo?: boolean;
}) {
  if (!items || items.length === 0) return null;

  const eyebrow = demo ? "Capabilities" : "What this protects";
  const heading = demo
    ? "What the architecture demonstrates"
    : "Business guarantees, in plain terms";

  return (
    <section aria-labelledby="protects-heading" className="mx-auto max-w-6xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>
      <h2
        id="protects-heading"
        className="mb-10 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
      >
        {heading}
      </h2>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-8 shadow-sm backdrop-blur-sm"
          >
            <span
              aria-hidden
              className="absolute inset-x-8 top-0 h-px opacity-60"
              style={{
                background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
              }}
            />
            <ShieldCheck
              aria-hidden
              className="mb-5 h-7 w-7"
              strokeWidth={1.5}
              style={{ color: GOLD }}
            />
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

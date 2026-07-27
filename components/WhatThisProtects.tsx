import type { ProtectItem } from "@/lib/projects";

/**
 * Business guarantees written in outcome language (what the owner gets),
 * translated from the project's engineering highlights. Rendered as clean,
 * borderless editorial text blocks — a bold subheading plus a plain-language
 * description — to sit in the project's single vertical reading stream. Renders
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
    <section aria-labelledby="protects-heading">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>
      <h2
        id="protects-heading"
        className="mb-6 text-2xl font-bold tracking-tight text-slate-900"
      >
        {heading}
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1.5 leading-relaxed text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

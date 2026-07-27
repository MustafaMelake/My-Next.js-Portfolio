import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/projects";

// Static class strings so Tailwind's compiler can see them.
const gridColsByCount: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
};

/**
 * A strip of outcome numbers. Only metrics with a non-empty value render, and
 * the whole section disappears until at least one is filled — so unfilled TODO
 * placeholders never ship a hollow "Outcomes" heading.
 */
export function MetricsStrip({
  metrics,
  demo = false,
}: {
  metrics?: Metric[];
  /** Demo builds use factual, count-based framing rather than client outcomes. */
  demo?: boolean;
}) {
  const filled = (metrics ?? []).filter((m) => m.value.trim() !== "");
  if (filled.length === 0) return null;

  const count = Math.min(filled.length, 4);
  const eyebrow = demo ? "By the numbers" : "Outcomes";
  const heading = demo ? "What the build includes" : "The results that matter";

  return (
    <section aria-labelledby="outcomes-heading" className="mx-auto max-w-4xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>
      <h2
        id="outcomes-heading"
        className="mb-10 text-3xl font-bold tracking-tight md:text-4xl"
      >
        {heading}
      </h2>
      <dl className={cn("grid grid-cols-1 gap-8 sm:gap-6", gridColsByCount[count])}>
        {filled.map((m) => (
          <div key={m.label} className="border-t border-slate-200 pt-5">
            <dd className="text-4xl font-bold tracking-tight tabular-nums md:text-5xl">
              {m.value}
            </dd>
            <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
              {m.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

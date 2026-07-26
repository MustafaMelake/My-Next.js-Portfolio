"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Dialog, VisuallyHidden } from "radix-ui";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Screenshot } from "@/lib/projects";

/**
 * Project screenshot gallery with captions and a click-to-expand lightbox.
 * The lightbox is a Radix Dialog (focus trap, Escape-to-close, and
 * backdrop-click-to-close come from the primitive); arrow-key navigation and
 * next/image are layered on top. Only the first thumbnail is prioritized.
 */
export function ScreenshotGallery({
  screenshots,
  title,
}: {
  screenshots: Screenshot[];
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const count = screenshots.length;
  const multi = count > 1;

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count]
  );

  if (count === 0) return null;

  const current = screenshots[index];

  return (
    <>
      <div className={cn("grid gap-4", multi ? "md:grid-cols-3" : "grid-cols-1")}>
        {screenshots.map((shot, i) => (
          <figure key={shot.src} className="flex flex-col">
            <button
              type="button"
              onClick={() => openAt(i)}
              aria-label={`Expand image ${i + 1} of ${count}: ${shot.caption}`}
              className="group rounded-[2rem] p-3 ring-1 ring-indigo-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-200/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:p-4"
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-[1.4rem] bg-slate-50",
                  multi ? "aspect-[4/3]" : "aspect-[16/10]"
                )}
              >
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  priority={i === 0}
                  sizes={multi ? "(max-width: 768px) 100vw, 33vw" : "100vw"}
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                >
                  <Expand size={16} />
                </span>
              </div>
            </button>
            <figcaption className="mt-3 px-2 text-sm leading-relaxed text-slate-500">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
          <Dialog.Content
            aria-describedby={undefined}
            onKeyDown={(e) => {
              if (!multi) return;
              if (e.key === "ArrowRight") {
                e.preventDefault();
                go(1);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                go(-1);
              }
            }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-4 focus:outline-none"
          >
            <VisuallyHidden.Root>
              <Dialog.Title>
                {title} — image {index + 1} of {count}
              </Dialog.Title>
            </VisuallyHidden.Root>

            <div className="relative h-[78vh] w-full">
              <Image
                key={current.src}
                src={current.src}
                alt={current.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />

              {multi && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ChevronLeft size={26} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ChevronRight size={26} />
                  </button>
                </>
              )}
            </div>

            <div className="mx-auto mt-5 max-w-2xl text-center">
              <p className="text-sm text-white/90 md:text-base">
                {current.caption}
              </p>
              {multi && (
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                  {index + 1} / {count}
                </p>
              )}
            </div>

            <Dialog.Close
              aria-label="Close"
              className="absolute right-2 top-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={22} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingHref, HAS_BOOKING } from "@/lib/site";

/**
 * Mid-page conversion CTA. Points at the configured booking link when one
 * exists (NEXT_PUBLIC_BOOKING_URL), otherwise falls back to the contact section
 * so the button is never a dead end.
 */
export function BookingCta() {
  const href = bookingHref("/#contact");

  return (
    <section aria-labelledby="project-cta-heading" className="mx-auto mt-20 max-w-6xl">
      <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-slate-200 bg-white/60 p-8 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:p-12">
        <div>
          <h2
            id="project-cta-heading"
            className="text-2xl font-bold tracking-tight md:text-3xl"
          >
            Have a project like this?
          </h2>
          <p className="mt-2 max-w-md text-slate-600">
            Tell me what you&apos;re building — I&apos;ll show you how I&apos;d
            make it secure, fast, and correct.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="shrink-0 gap-2 rounded-full px-8 text-base"
        >
          <Link
            href={href}
            {...(HAS_BOOKING
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <CalendarDays size={18} />
            {HAS_BOOKING ? "Book a call" : "Start a conversation"}
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
}

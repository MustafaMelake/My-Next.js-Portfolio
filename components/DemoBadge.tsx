import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Small, honest "Demo" tag marking concept/demo builds (as opposed to shipped
 * client work). Reuses the existing Badge primitive and design tokens.
 */
export function DemoBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-slate-300 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500",
        className
      )}
    >
      Demo
    </Badge>
  );
}

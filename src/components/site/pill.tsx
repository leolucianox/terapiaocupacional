import * as React from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  /** "navy" e "pink" espelham os rótulos do material da marca. */
  variant?: "navy" | "pink" | "teal";
  icon?: React.ReactNode;
  className?: string;
};

const styles: Record<NonNullable<PillProps["variant"]>, string> = {
  navy: "bg-navy text-white",
  pink: "bg-pink-tint text-pink",
  teal: "bg-teal/15 text-teal",
};

/** Eyebrow arredondada usada como rótulo das seções. */
export function Pill({ children, variant = "pink", icon, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide [&_svg]:size-4",
        styles[variant],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

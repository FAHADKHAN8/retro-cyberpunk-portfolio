import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NeonBadgeProps = ComponentProps<"span"> & { tone?: "blue" | "pink" | "cyan" };

export function NeonBadge({ tone = "blue", className, ...props }: NeonBadgeProps) {
  return <span data-tone={tone} className={cn("neon-badge", className)} {...props} />;
}

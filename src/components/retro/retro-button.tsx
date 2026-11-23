import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type RetroButtonProps = ComponentProps<"button"> & { asChild?: boolean; tone?: "blue" | "pink" | "outline" };

export function RetroButton({ asChild = false, tone = "blue", className, ...props }: RetroButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component data-tone={tone} className={cn("retro-button inline-flex", className)} {...props} />;
}

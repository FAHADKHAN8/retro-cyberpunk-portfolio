import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="badge" className={cn("inline-flex rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted", className)} {...props} />;
}

export { Badge };

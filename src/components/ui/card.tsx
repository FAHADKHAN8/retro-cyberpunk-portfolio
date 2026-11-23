import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={cn("rounded-2xl border border-line bg-surface p-6 shadow-card", className)} {...props} />;
}

export { Card };

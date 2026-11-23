import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[65svh] flex-col items-start justify-center py-16">
      <p className="font-mono text-xs tracking-[.2em] text-accent">404 / PAGE NOT FOUND</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-6xl">Nothing at this address<span className="text-accent">.</span></h1>
      <p className="mt-5 max-w-lg text-muted">The page may have moved. You can return home or explore the work index.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Button asChild><Link href="/">Go home</Link></Button><Button asChild variant="outline"><Link href="/projects">View work</Link></Button></div>
    </div>
  );
}

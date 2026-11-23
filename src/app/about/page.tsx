import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { education } from "@/content/education";
import { experiences } from "@/content/experience";

export const metadata: Metadata = { title: "About", description: "Background and education of Mohammad Fahad Khan." };

export default function AboutPage() {
  const internship = experiences[0];
  return (
    <div className="container-site py-16 sm:py-22">
      <p className="font-mono text-xs tracking-[.2em] text-accent">02 / ABOUT</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-6xl">Engineering with purpose<span className="text-accent">.</span></h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">I am an MCA student at JIIT Noida, focused on backend development and AI applications. I enjoy building reliable software and solving practical problems with thoughtful engineering.</p>
      <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <Card className="p-7 sm:p-9">
          <Badge>EXPERIENCE</Badge>
          <h2 className="mt-6 text-2xl font-semibold">{internship.role}</h2>
          <p className="mt-1 text-accent">{internship.organization} · {internship.location}</p>
          <p className="mt-2 font-mono text-xs text-muted">{internship.period}</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">{internship.summary}</p>
        </Card>
        <Card className="p-7 sm:p-9">
          <Badge>EDUCATION</Badge>
          <div className="mt-6 space-y-7">{education.map((item) => (
            <div key={item.degree}>
              <h2 className="text-lg font-semibold">{item.degree}</h2>
              <p className="mt-1 text-sm text-accent">{item.institution}</p>
              <p className="mt-1 text-xs text-muted">{item.period} · {item.score}</p>
            </div>
          ))}</div>
        </Card>
      </div>
    </div>
  );
}

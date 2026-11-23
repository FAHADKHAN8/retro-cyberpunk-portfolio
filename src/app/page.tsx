import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/about-preview";
import { ContactCta } from "@/components/sections/cta";
import { ExperienceSection } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Home",
  description: "Mohammad Fahad Khan builds reliable backends and practical AI systems. Explore selected projects, experience, and technical capabilities.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <ExperienceSection />
      <SkillsSection />
      <ContactCta />
    </>
  );
}

export type ProjectCategory = "backend" | "ai" | "ml" | "iot";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  featured: boolean;
  period?: string;
  summary: string;
  technologies: readonly string[];
  problem: string;
  approach: readonly string[];
  outcomes?: readonly string[];
  repoUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  image?: string;
  sourceNote: string;
};

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  program?: string;
  summary: string;
  contributions: readonly string[];
  technologies: readonly string[];
  sourceNote: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  score: string;
  sourceNote: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  sourceNote: string;
};

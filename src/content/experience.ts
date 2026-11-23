import type { Experience } from "@/types/content";

export const experiences: readonly Experience[] = [
  {
    role: "Python Developer Intern",
    organization: "National Informatics Centre (NIC)",
    location: "Chandigarh",
    period: "June 2026 – July 2026",
    program: "Digital India Internship Program",
    summary: "Contributed to a document intelligence and semantic search platform for Punjab Vidhan Sabha records.",
    contributions: [
      "Implemented RESTful services with Django and PostgreSQL.",
      "Worked on document ingestion, metadata extraction, indexing, and retrieval-augmented question answering.",
      "Built hybrid retrieval with BM25 and FAISS and worked on citation-aware ranking.",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "BM25", "FAISS", "RAG"],
    sourceNote: "Portfolio project plan §6.2; supplied resumes. Internship contribution, not an independent public project.",
  },
];

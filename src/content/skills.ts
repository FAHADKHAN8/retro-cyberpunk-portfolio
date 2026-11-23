export const capabilities = [
  {
    number: "01",
    title: "Backend & APIs",
    description: "RESTful services, real-time messaging, and data modeling.",
    technologies: ["Python", "Java", "Django", "Spring Boot", "REST APIs", "WebSockets"],
  },
  {
    number: "02",
    title: "Retrieval & AI systems",
    description: "Document ingestion, hybrid search, and retrieval-augmented question answering.",
    technologies: ["BM25", "FAISS", "RAG", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Applied ML & vision",
    description: "Classification evaluation and real-time visual inference.",
    technologies: ["scikit-learn", "Pandas", "YOLO", "Python"],
  },
  {
    number: "04",
    title: "Databases & tools",
    description: "The tools used to build, version, and work with these systems.",
    technologies: ["MySQL", "PostgreSQL", "Git", "GitHub", "C++"],
  },
] as const;

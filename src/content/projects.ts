import type { Project } from "@/types/content";

export const projects: readonly Project[] = [
  {
    slug: "nic-document-intelligence",
    title: "Document Intelligence & Semantic Search",
    subtitle: "National Informatics Centre internship contribution",
    category: "ai",
    featured: true,
    period: "June–July 2026",
    summary: "Contributed to ingestion, hybrid retrieval, and citation-aware question answering for Punjab Vidhan Sabha records.",
    technologies: ["Python", "Django", "PostgreSQL", "BM25", "FAISS", "RAG"],
    problem: "Make parliamentary records easier to retrieve and explore through document search.",
    approach: [
      "Built RESTful backend services and document ingestion workflows.",
      "Combined lexical BM25 retrieval with FAISS vector search.",
      "Worked on metadata extraction, indexing, and citation-aware answer ranking.",
    ],
    sourceNote: "Portfolio project plan §6.3 A; supplied resumes. Internship work. No public repository, demo, or video supplied.",
    // TODO: Add public URLs only if NIC permits sharing and the owner verifies them.
  },
  {
    slug: "encrypted-chat-system",
    title: "End-to-End Encrypted Chat System",
    subtitle: "Secure real-time messaging backend",
    category: "backend",
    featured: true,
    period: "April 2026",
    summary: "Built a Spring Boot messaging backend with WebSockets, RSA key exchange, AES-256 encryption, and BCrypt authentication.",
    technologies: ["Java", "Spring Boot", "WebSockets", "RSA", "AES-256", "BCrypt", "MySQL"],
    problem: "Support real-time messaging with encrypted messages and authenticated users.",
    approach: [
      "Used WebSockets for bidirectional messaging.",
      "Implemented RSA key exchange, AES-256 encryption, and BCrypt authentication.",
      "Modeled users, chats, and messages in MySQL.",
    ],
    sourceNote: "Portfolio project plan §6.3 B; canonical resume. Security has not been independently audited. URLs pending verification.",
    // TODO: Verify repository, live demo, and video URLs before adding them.
  },
  {
    slug: "smart-fire-detection",
    title: "Smart Fire Detection System",
    subtitle: "Computer vision and sensor monitoring",
    category: "iot",
    featured: true,
    period: "April 2025",
    summary: "Built a real-time fire detection pipeline with YOLO, ESP32-CAM, sensor processing, and a monitoring dashboard.",
    technologies: ["Python", "YOLO", "ESP32-CAM", "Sensors"],
    problem: "Detect possible fires from camera input and combine the result with sensor monitoring.",
    approach: [
      "Built an inference pipeline for visual fire detection.",
      "Integrated sensor data processing and a monitoring dashboard.",
    ],
    outcomes: ["~92% reported detection accuracy in project testing (self-reported in supplied CV)."],
    sourceNote: "Portfolio project plan §6.3 C; supplied resumes. YOLO version and public URLs remain unverified.",
    // TODO: Confirm YOLO version and verify repository, demo, and video URLs.
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection & Risk Analysis",
    subtitle: "Machine learning classification study",
    category: "ml",
    featured: false,
    period: "December 2025",
    summary: "Compared Logistic Regression and Random Forest for fraud classification using imbalance-aware evaluation.",
    technologies: ["Python", "Pandas", "scikit-learn", "SMOTE"],
    problem: "Identify fraudulent transactions in an imbalanced classification setting.",
    approach: [
      "Performed exploratory analysis, stratified splitting, and feature scaling.",
      "Applied SMOTE and compared Logistic Regression with Random Forest.",
      "Evaluated precision, recall, F1, confusion matrices, and ROC-AUC.",
    ],
    outcomes: ["Project-reported ROC-AUC: ~0.9766 for Random Forest and ~0.9670 for Logistic Regression; no external validation claimed."],
    sourceNote: "Portfolio project plan §6.3 D; AI/ML resume. URLs pending verification.",
    // TODO: Verify repository, demo, and video URLs before adding them.
  },
];

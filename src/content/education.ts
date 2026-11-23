import type { Education } from "@/types/content";

export const education: readonly Education[] = [
  {
    degree: "Master of Computer Applications",
    institution: "JIIT Noida",
    period: "Aug 2025 – present; expected 2027",
    score: "GPA 8.5",
    sourceNote: "Portfolio project plan §6.1; canonical resume confirms institution, expected graduation, and GPA.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "LPU Punjab",
    period: "Aug 2022 – Jul 2025",
    score: "GPA 9/10",
    sourceNote: "Portfolio project plan §6.1; canonical resume confirms institution, graduation year, and GPA.",
  },
];

export const recognition = [{ title: "University Honor Roll", year: "2023" }] as const;

export const siteIdentity = {
  name: "Mohammad Fahad Khan",
  email: "mohammadfahadkhan111@gmail.com",
  phone: "8293839994", // Private by default; only present in the downloadable resume.
  github: "https://github.com/FAHADKHAN8",
  linkedin: "https://www.linkedin.com/in/fahadmdkahn",
  codingProfile: "https://takeuforward.org/profile/fahad_8",
  location: "India",
  positioning: "Software engineer focused on backend development and practical AI systems.",
  resumePath: "/resume.pdf",
  resumeFilename: "Mohammad_Fahad_Khan_Resume.pdf",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { label: "GitHub", href: siteIdentity.github },
  { label: "LinkedIn", href: siteIdentity.linkedin },
  { label: "Coding profile", href: siteIdentity.codingProfile },
] as const;

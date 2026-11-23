import type { Metadata } from "next";
import { Orbitron, Press_Start_2P, Space_Grotesk, Space_Mono } from "next/font/google";
import { SkipLink } from "@/components/accessibility/skip-link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteIdentity } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"], display: "swap" });
const pressStart = Press_Start_2P({ variable: "--font-press-start", subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${siteIdentity.name} | Software Engineer`, template: `%s | ${siteIdentity.name}` },
  description: "Mohammad Fahad Khan is a software engineer focused on backend development and practical AI systems.",
  applicationName: `${siteIdentity.name} Portfolio`,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable} ${orbitron.variable} ${pressStart.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

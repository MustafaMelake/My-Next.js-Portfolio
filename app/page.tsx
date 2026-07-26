import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Full-Stack Engineer",
  description:
    "Full-stack engineer building production e-commerce for MENA and Gulf businesses with Next.js, React, Prisma, and PostgreSQL.",
  image: `${SITE_URL}/images/IMG_0701.jpeg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "E-commerce",
    "Prisma",
    "PostgreSQL",
    "Arabic / RTL",
  ],
  sameAs: [
    "https://github.com/MustafaMelake",
    "https://www.linkedin.com/in/mustafa-melake-002b37379/",
    "https://www.instagram.com/mustafamelake/",
  ],
};

export default function Home() {
  return (
    <div>
      <JsonLd data={personJsonLd} />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

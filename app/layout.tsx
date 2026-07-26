import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, ANALYTICS_ENABLED, ogImageUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const HOME_TITLE = "Mustafa Melake — Next.js E-Commerce Engineer";
const HOME_DESCRIPTION =
  "I build fast, secure, server-rendered online stores for MENA & Gulf businesses — Next.js, React, Prisma, PostgreSQL. Arabic / RTL ready.";
const HOME_OG_IMAGE = ogImageUrl({
  title: "Next.js e-commerce, correct to the cent.",
  category: "Full-Stack E-Commerce Engineer",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "Mustafa Melake",
    "Next.js developer",
    "Next.js e-commerce",
    "e-commerce developer",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "MENA",
    "Arabic",
    "RTL",
    "Egypt",
    "Gulf",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: HOME_OG_IMAGE, width: 1200, height: 630, alt: HOME_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        {ANALYTICS_ENABLED ? <Analytics /> : null}
      </body>
    </html>
  );
}

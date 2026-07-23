import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mustafa Melake | Full-Stack Developer",
  description:
    "Portfolio of Mustafa Melake, a full-stack developer building high-performance web applications with Next.js, React, TypeScript, and MongoDB.",
  keywords: [
    "Mustafa Melake",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Mustafa Melake" }],
  openGraph: {
    title: "Mustafa Melake | Full-Stack Developer",
    description:
      "Full-stack developer building high-performance web applications with Next.js, React, TypeScript, and MongoDB.",
    type: "website",
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
      </body>
    </html>
  );
}

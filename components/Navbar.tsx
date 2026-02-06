"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navbar-glass backdrop-blur-md border-b border-white/20 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-xl font-bold tracking-tighter">
            MUSTAFA<span className="text-primary">.dev</span>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            href="#about"
            className="hover:text-muted-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="hover:text-muted-foreground transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-muted-foreground transition-colors"
          >
            Projects
          </Link>
        </div>

        <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Hire Me
        </button>
      </div>
    </nav>
  );
}

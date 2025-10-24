"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "Interests" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "about", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for nav height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-steel/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - responsive text size */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-base sm:text-lg font-light tracking-wider text-foreground transition-colors group-hover:text-accent">
              Guillem Galindo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wider transition-colors ${
                  activeSection === link.href
                    ? "text-foreground border-b border-accent pb-1"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[1px] w-5 bg-foreground transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`h-[1px] w-5 bg-foreground transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[1px] w-5 bg-foreground transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-steel/20 mt-4">
            <div className="flex flex-col gap-4 items-start">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-light tracking-wide transition-colors ${
                    activeSection === link.href
                      ? "text-foreground border-b border-accent pb-1"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


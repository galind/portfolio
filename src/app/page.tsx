"use client";

import { GitHub, Linkedin, ArrowUp, ExternalLink } from "react-feather";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import workData from "@/data/work.json";
import projectsData from "@/data/projects.json";

// Dynamic import to avoid SSR issues with Leaflet
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] rounded-sm border border-steel/20 bg-muted/5 flex items-center justify-center animate-pulse">
      <div className="text-center space-y-2">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
        <span className="text-sm text-muted">Loading map...</span>
      </div>
    </div>
  ),
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Obfuscate email from scrapers
    setEmail("contact" + "@" + "guillemgalindo.com");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 relative overflow-hidden"
      >
        <div className="max-w-3xl w-full relative z-10">
          <div className="space-y-12 sm:space-y-16">
            {/* Name and title */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wide">
                Guillem Galindo
              </h1>

              <p className="text-lg sm:text-xl text-accent font-light tracking-wide">
                Software Engineer
              </p>
            </div>

            {/* Introduction */}
            <div className="space-y-8 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              <p className="text-foreground">
                I&apos;ve always been curious about how things work. That curiosity led me to
                software, where I build things from the ground up.
              </p>

              <p className="text-muted">
                Away from code, you&apos;ll find me exploring the world of mechanical watches and
                the precision engineering that makes them tick.
              </p>
            </div>

            {/* Call-to-action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center px-8 py-3 border border-accent text-accent overflow-hidden font-light tracking-wider text-sm before:absolute before:inset-0 before:bg-accent before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0"
              >
                <span className="relative z-10 group-hover:text-background transition-colors">
                  View My Work
                </span>
                <span className="relative z-10 ml-2 transition-all group-hover:translate-x-1 group-hover:text-background">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="text-muted hover:text-accent transition-colors relative group text-sm font-light tracking-wide"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Timeline */}
      <section
        id="work"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background-alt"
      >
        <div className="max-w-5xl w-full relative z-10">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Work</h2>

            {/* Work Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-4 top-4 bottom-0 w-px bg-steel/20"></div>

                {/* Timeline Entries */}
                <div className="space-y-14 md:space-y-16">
                  {workData.entries.map((entry, index) => {
                    const isFirst = index === 0;

                    const CardWrapper = entry.link ? "a" : "div";
                    const cardProps = entry.link
                      ? {
                          href: entry.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {};

                    return (
                      <div key={entry.id} className="relative pl-8 md:pl-16">
                        {/* Timeline Dot */}
                        <div
                          className={`absolute left-0 md:left-4 top-4 w-2 h-2 rounded-full -translate-x-[3.5px] z-10 ${
                            isFirst
                              ? "bg-accent ring-4 ring-accent/20"
                              : "bg-steel/40 ring-4 ring-background-alt"
                          }`}
                        ></div>

                        {/* Content */}
                        <div className="space-y-4">
                          {/* Date */}
                          <p
                            className={`text-xs font-light tracking-wide uppercase ${
                              isFirst ? "text-accent" : "text-muted"
                            }`}
                          >
                            {entry.startDate} — {entry.endDate}
                          </p>

                          {/* Card */}
                          <CardWrapper
                            {...cardProps}
                            className={`group border border-steel/20 p-6 md:p-8 space-y-5 hover:border-accent/50 transition-all ${
                              entry.link ? "block cursor-pointer" : ""
                            }`}
                          >
                            {/* Header: Company */}
                            <div>
                              <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors">
                                {entry.name}
                              </h3>
                            </div>

                            {/* Company Description */}
                            <p className="text-sm text-muted font-light leading-relaxed">
                              {entry.description}
                            </p>

                            {/* Roles */}
                            <div className="border-t border-steel/10 pt-4 space-y-4">
                              {entry.roles.map((role, roleIndex) => (
                                <div key={roleIndex} className="space-y-2">
                                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                    <p className="text-sm text-foreground font-light">
                                      {role.title}
                                    </p>
                                    <p className="text-xs text-muted font-light whitespace-nowrap">
                                      {role.startDate} — {role.endDate}
                                    </p>
                                  </div>
                                  {"description" in role && role.description && (
                                    <p className="text-sm text-muted font-light leading-relaxed">
                                      {role.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </CardWrapper>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Card Grid */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-5xl w-full relative z-10">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Projects</h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projectsData.entries.map((entry) => {
                const CardWrapper = entry.link ? "a" : "div";
                const cardProps = entry.link
                  ? {
                      href: entry.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <CardWrapper
                    key={entry.id}
                    {...cardProps}
                    className={`group border border-steel/20 hover:border-accent/50 transition-all p-6 md:p-8 space-y-5 ${
                      entry.link ? "block cursor-pointer" : ""
                    }`}
                  >
                    {/* Date */}
                    <p className="text-xs font-light tracking-wide uppercase text-accent">
                      {entry.startDate} — {entry.endDate}
                    </p>

                    {/* Project Name */}
                    <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors">
                      {entry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted font-light leading-relaxed">
                      {entry.description}
                    </p>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background-alt"
      >
        <div className="max-w-5xl w-full relative z-10">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
              Interests
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base sm:text-lg font-light leading-relaxed">
              <li className="flex gap-4 items-baseline">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 -translate-y-[0.2em]"></span>
                <span className="text-muted">
                  <span className="text-foreground">Mechanical watches.</span> Understanding how
                  movements work, learning the stories they carry, and seeking out independent
                  watchmakers with unique voices.
                </span>
              </li>

              <li className="flex gap-4 items-baseline">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 -translate-y-[0.2em]"></span>
                <span className="text-muted">
                  <span className="text-foreground">CAD and 3D printing.</span> Designing in Fusion
                  360, then making it real. Tools, parts, solutions for problems I or friends run
                  into.
                </span>
              </li>

              <li className="flex gap-4 items-baseline">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 -translate-y-[0.2em]"></span>
                <span className="text-muted">
                  <span className="text-foreground">Reading.</span> Classic literature, mystery
                  novels, economics and political philosophy, intelligence history, science fiction.
                </span>
              </li>

              <li className="flex gap-4 items-baseline">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 -translate-y-[0.2em]"></span>
                <span className="text-muted">
                  <span className="text-foreground">Personal finance and investing.</span> Following
                  markets, tracking data, understanding how the world economy moves and why.
                </span>
              </li>

              <li className="flex gap-4 items-baseline">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 -translate-y-[0.2em]"></span>
                <span className="text-muted">
                  <span className="text-foreground">Hardware projects.</span> Arduino and ESP32.
                  Motors, sensors, electronics. Building things that sometimes work.
                </span>
              </li>

              <li className="flex gap-4 items-baseline">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 -translate-y-[0.2em]"></span>
                <span className="text-muted">
                  <span className="text-foreground">Rubik&apos;s cubes and puzzles.</span>{" "}
                  Speedsolving, collecting different types, figuring out how they work.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-3xl w-full relative z-10">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Contact</h2>

            <p className="text-base sm:text-lg font-light leading-relaxed text-muted">
              Open to new projects and collaborations. Feel free to reach out if you&apos;d like to
              work together or just chat about software and watches.
            </p>

            <div className="space-y-6 text-base sm:text-lg font-light">
              {/* Email and Social Links */}
              {email && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-3 group">
                    <a
                      href={`mailto:${email}`}
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      {email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="text-xs text-muted hover:text-foreground transition-colors border border-steel/20 hover:border-accent/50 px-2 py-1 cursor-pointer"
                      title="Copy email"
                    >
                      {copied ? "✓ Copied" : "Copy"}
                    </button>
                  </div>

                  <div className="flex gap-6 text-sm">
                    <a
                      href="https://github.com/galind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <GitHub size={16} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/ggalindoa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="pt-6">
              <Map variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-steel/20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <p className="text-sm text-muted font-light text-center">
            © {new Date().getFullYear()} Guillem Galindo
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 border border-accent text-accent bg-background hover:bg-accent hover:text-background rounded-full transition-all z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

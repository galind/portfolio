"use client";

import { GitHub, Linkedin, ArrowUp } from "react-feather";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

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
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Obfuscate email from scrapers
    setEmail('contact' + '@' + 'guillemgalindo.com');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const copyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 bg-background relative overflow-hidden z-10">
        <div className="max-w-3xl w-full relative z-10">
          <div className="space-y-12 sm:space-y-16">
            {/* Name and title */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight">
                Guillem Galindo
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted font-light">
                Software Engineer
              </p>
            </div>

            {/* Introduction */}
            <div className="space-y-6 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              <p className="text-foreground">
                I&apos;ve always been curious about how things work. That curiosity led me to software, where I build things from the ground up.
              </p>
              
              <p className="text-muted">
                Away from code, you&apos;ll find me exploring the world of mechanical watches and the precision engineering that makes them tick.
              </p>
            </div>

            {/* Call-to-action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#work"
                className="group inline-flex items-center justify-center px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all font-light tracking-wider text-sm"
              >
                View My Work
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              
              <a
                href="#contact"
                className="text-muted hover:text-foreground transition-colors relative group text-sm font-light tracking-wide"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background border-t border-steel/20">
        <div className="max-w-5xl w-full">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Interests</h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base sm:text-lg font-light leading-relaxed">
              <li className="flex gap-4 hover:translate-x-1 transition-transform">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Mechanical watches.</span> Understanding how movements work, learning the stories they carry, and seeking out independent watchmakers with unique voices.
                </span>
              </li>
              
              <li className="flex gap-4 hover:translate-x-1 transition-transform">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">CAD and 3D printing.</span> Designing in Fusion 360, then making it real. Tools, parts, solutions for problems I or friends run into.
                </span>
              </li>
              
              <li className="flex gap-4 hover:translate-x-1 transition-transform">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Reading.</span> Classic literature, mystery novels, economics and political philosophy, intelligence history, science fiction.
                </span>
              </li>
              
              <li className="flex gap-4 hover:translate-x-1 transition-transform">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Personal finance and investing.</span> Following markets, tracking data, understanding how the world economy moves and why.
                </span>
              </li>
              
              <li className="flex gap-4 hover:translate-x-1 transition-transform">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Hardware projects.</span> Arduino and ESP32. Motors, sensors, electronics. Building things that sometimes work.
                </span>
              </li>
              
              <li className="flex gap-4 hover:translate-x-1 transition-transform">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Rubik&apos;s cubes and puzzles.</span> Speedsolving, collecting different types, figuring out how they work.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background border-t border-steel/20">
        <div className="max-w-5xl w-full">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Work</h2>
            
            <p className="text-base sm:text-lg font-light leading-relaxed text-muted max-w-2xl">
              Selected projects and collaborations.
            </p>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="border border-steel/20 p-6 hover:border-accent/50 transition-colors group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-light text-foreground group-hover:text-accent transition-colors">
                      Project Title
                    </h3>
                    <span className="text-xs text-muted">2024</span>
                  </div>
                  
                  <p className="text-sm text-muted font-light leading-relaxed">
                    Brief description of the project, technologies used, and impact. Keep it concise and focused on key achievements.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Technology</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Stack</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Tags</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border border-steel/20 p-6 hover:border-accent/50 transition-colors group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-light text-foreground group-hover:text-accent transition-colors">
                      Project Title
                    </h3>
                    <span className="text-xs text-muted">2024</span>
                  </div>
                  
                  <p className="text-sm text-muted font-light leading-relaxed">
                    Brief description of the project, technologies used, and impact. Keep it concise and focused on key achievements.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Technology</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Stack</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Tags</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="border border-steel/20 p-6 hover:border-accent/50 transition-colors group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-light text-foreground group-hover:text-accent transition-colors">
                      Project Title
                    </h3>
                    <span className="text-xs text-muted">2023</span>
                  </div>
                  
                  <p className="text-sm text-muted font-light leading-relaxed">
                    Brief description of the project, technologies used, and impact. Keep it concise and focused on key achievements.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Technology</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Stack</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Tags</span>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="border border-steel/20 p-6 hover:border-accent/50 transition-colors group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-light text-foreground group-hover:text-accent transition-colors">
                      Project Title
                    </h3>
                    <span className="text-xs text-muted">2023</span>
                  </div>
                  
                  <p className="text-sm text-muted font-light leading-relaxed">
                    Brief description of the project, technologies used, and impact. Keep it concise and focused on key achievements.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Technology</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Stack</span>
                    <span className="text-xs px-2 py-1 border border-steel/30 text-muted">Tags</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background border-t border-steel/20">
        <div className="max-w-3xl w-full">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Contact</h2>
            
            <p className="text-base sm:text-lg font-light leading-relaxed text-muted">
              Open to new projects and collaborations. 
              Feel free to reach out if you&apos;d like to work together or just chat about software and watches.
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
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  
                  <div className="flex gap-6 text-sm">
                    <a 
                      href="https://github.com/galind" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <GitHub size={16} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/ggalindoa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors flex items-center gap-2"
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
      <footer className="border-t border-steel/20 bg-background">
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
          className="fixed bottom-8 right-8 p-3 border border-accent text-accent bg-background hover:bg-accent hover:text-background rounded-full transition-all z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

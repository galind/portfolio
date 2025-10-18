export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 bg-background relative overflow-hidden">
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
                I've always been curious about how things work. As a kid, I'd take things apart just to see what was inside. That curiosity led me to software, where I could build things from the ground up and understand every piece of the puzzle.
              </p>
              
              <p className="text-muted">
                When I'm not building software, you'll find me exploring the intricate world of horology, 
                where centuries-old mechanical engineering meets timeless design.
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
              <li className="flex gap-4">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Mechanical watches.</span> Understanding how movements work, learning the stories they carry, and seeking out independent watchmakers with unique voices.
                </span>
              </li>
              
              <li className="flex gap-4">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">CAD and 3D printing.</span> Designing in Fusion 360, then making it real. Tools, parts, solutions for problems I or friends run into.
                </span>
              </li>
              
              <li className="flex gap-4">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Reading.</span> Classic literature, mystery novels, economics and political philosophy, intelligence history, science fiction.
                </span>
              </li>
              
              <li className="flex gap-4">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Personal finance and investing.</span> Following markets, tracking data, understanding how the world economy moves and why.
                </span>
              </li>
              
              <li className="flex gap-4">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Hardware projects.</span> Arduino and ESP32. Motors, sensors, electronics. Building things that sometimes work.
                </span>
              </li>
              
              <li className="flex gap-4">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted">
                  <span className="text-foreground">Rubik's cubes and puzzles.</span> Speedsolving, collecting different types, figuring out how they work.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background">
        <div className="max-w-3xl w-full">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Work</h2>
            
            <p className="text-base sm:text-lg font-light leading-relaxed text-muted">
              Selected projects coming soon. In the meantime, feel free to reach out to discuss my work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background border-t border-steel/20">
        <div className="max-w-3xl w-full">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Contact</h2>
            
            <div className="space-y-8">
              <p className="text-base sm:text-lg font-light leading-relaxed text-muted">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to get in touch.
              </p>
              
              <div className="flex flex-col gap-4 text-base sm:text-lg font-light">
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-foreground hover:text-accent transition-colors"
                >
                  your.email@example.com
                </a>
                
                <div className="flex gap-6 text-sm">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Navbar() {
    const links = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ];
      
  
    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              🛡️
            </span>
            <span className="font-semibold tracking-tight">Nikhil Krishnaprasad</span>
          </div>
  
          <ul className="hidden md:flex items-center gap-7 text-sm text-white/70">
            {links.map((l) => (
              <li key={l.href}>
                <a className="hover:text-white transition" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  
"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-sm">
        <span className="text-sm font-bold text-primary mr-3 font-sans">JT/</span>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="px-3 py-1.5 text-sm text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

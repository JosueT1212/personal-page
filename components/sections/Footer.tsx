import { hero } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-black uppercase tracking-tight text-xl">
          {hero.name.toUpperCase()}
        </span>
        <span className="text-xs text-white/40">
          Guadalajara, Mexico · © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

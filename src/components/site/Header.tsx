import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#coleccion", label: "Colección" },
  { href: "#ia", label: "Personalizador IA" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#tienda", label: "Tienda" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="size-9 rounded-full bg-obsidian flex items-center justify-center relative">
            <span className="size-3 rounded-full bg-gold" />
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-sky animate-pulse-soft" />
          </span>
          <span className="text-xl font-bold tracking-tighter">
            CHIBI<span className="text-gold">·</span>P
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.18em] uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className="size-10 rounded-full border border-border bg-background hover:bg-secondary flex items-center justify-center transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="#tienda"
            className="hidden sm:inline-flex items-center justify-center px-5 h-10 rounded-full bg-obsidian text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-colors"
          >
            Drop 01
          </a>
        </div>
      </div>
    </header>
  );
}

import { SITE } from "../site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-medium tracking-tight">
          {SITE.name}
        </a>

        <nav className="flex items-center gap-6 text-sm text-foreground/70">
          <a href="#projects" className="transition-colors hover:text-foreground">
            Projects
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground">
            Skills
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

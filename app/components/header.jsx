
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex h-16 items-center justify-between gap-4 rounded-full border border-white/10 bg-[oklch(37.2%_0.044_257.287)] px-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] sm:px-6">
          <a href="#top" className="shrink-0">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-base font-bold text-[oklch(37.2%_0.044_257.287)]">
              {"<B/>"}
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-10 text-sm font-medium text-white/80 md:flex">
            <a href="#about" className="transition-colors hover:text-white">
              Миний тухай
            </a>
            <a href="#experience" className="transition-colors hover:text-white">
              Туршлага
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              Төслүүд
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Холбоо барих
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Холбогдох
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

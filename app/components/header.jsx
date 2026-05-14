
"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className={["mx-auto w-full max-w-6xl px-6 transition-all duration-300", scrolled ? "py-3" : "py-4"].join(" ")}>
        <div
          className={[
            "flex items-center justify-between gap-4 rounded-full border px-4 text-foreground backdrop-blur-xl sm:px-6",
            "transition-all duration-300",
            scrolled
              ? "h-14 border-foreground/12 bg-background/70 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
              : "h-16 border-foreground/10 bg-background/45 shadow-[0_10px_30px_rgba(0,0,0,0.22)]",
          ].join(" ")}
        >
          <a
            href="#top"
            aria-label="DEV PORTFOLIO - Back to top"
            className="shrink-0 select-none rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
          >
            <span
              className="font-serif text-[22px] leading-none text-foreground sm:text-[26px]"
            >
              DEV PORTFOLIO
            </span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-10 text-sm font-medium text-foreground/70 md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              Миний тухай
            </a>
            <a href="#experience" className="transition-colors hover:text-foreground">
              Туршлага
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              Төслүүд
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Холбоо барих
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle/>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              Холбогдох
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

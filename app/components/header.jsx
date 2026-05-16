
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const NAV_LINKS = [
  { href: "#about", label: "Миний тухай" },
  { href: "#experience", label: "Туршлага" },
  { href: "#projects", label: "Төслүүд" },
  { href: "#contact", label: "Холбоо барих" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className={["mx-auto w-full max-w-6xl px-4 transition-all duration-300 sm:px-6", scrolled ? "py-3" : "py-4"].join(" ")}>
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
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 sm:inline-flex"
            >
              Холбогдох
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 shadow-sm transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-[2px]"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />

          <div className="relative mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6">
            <div
              id="mobile-nav"
              className="rounded-3xl border border-foreground/10 bg-background/90 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                  onClick={() => setMenuOpen(false)}
                >
                  Холбогдох
                </a>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center justify-center rounded-2xl border border-foreground/15 bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                  onClick={() => setMenuOpen(false)}
                >
                  CV татах
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

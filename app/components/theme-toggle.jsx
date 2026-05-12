"use client";

import { useEffect } from "react";

const STORAGE_KEY = "theme";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

function resolveTheme() {
  const stored = getStoredTheme();
  return stored ?? getSystemTheme();
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  useEffect(() => {
    applyTheme(resolveTheme());

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMediaChange = () => {
      if (getStoredTheme()) return;
      applyTheme(getSystemTheme());
    };

    if (media.addEventListener) {
      media.addEventListener("change", onMediaChange);
    } else {
      media.addListener(onMediaChange);
    }

    const onStorage = (event) => {
      if (event.key && event.key !== STORAGE_KEY) return;
      applyTheme(resolveTheme());
    };
    window.addEventListener("storage", onStorage);

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", onMediaChange);
      } else {
        media.removeListener(onMediaChange);
      }
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 shadow-sm transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:focus-visible:ring-white/40"
    >
      <span className="block dark:hidden" aria-hidden="true">
        <MoonIcon />
      </span>
      <span className="hidden dark:block" aria-hidden="true">
        <SunIcon />
      </span>
    </button>
  );
}


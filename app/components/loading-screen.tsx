"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const MIN = 1000; // Ачаалагч харагдах доод хугацаа (1 секунд)
    const start = Date.now();
    
    const done = () => {
      const wait = Math.max(0, MIN - (Date.now() - start));
      setTimeout(() => setFading(true), wait);
      setTimeout(() => setGone(true), wait + 400); // 0.4 секундын дараа бүрэн устгана
    };

    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done, { once: true });
    }
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background px-6 py-12 flex flex-col justify-between transition-opacity duration-500 ease-in-out select-none pointer-events-none"
      style={{
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <div className="mx-auto w-full max-w-6xl w-full flex flex-col h-full justify-between">
        
        {/* 1. HEADER SKELETON */}
        <div className="w-full flex items-center justify-between py-4 border-b border-foreground/5 animate-pulse">
          <div className="h-6 w-36 rounded-lg bg-foreground/10" /> {/* Лого */}
          <div className="hidden md:flex items-center gap-x-8">
            <div className="h-4 w-16 rounded-md bg-foreground/5" />
            <div className="h-4 w-16 rounded-md bg-foreground/5" />
            <div className="h-4 w-16 rounded-md bg-foreground/5" />
            <div className="h-4 w-16 rounded-md bg-foreground/5" />
          </div>
          <div className="h-9 w-24 rounded-xl bg-foreground/10" /> {/* Товч */}
        </div>

        {/* 2. HERO & MAIN CONTENT SKELETON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto py-12 w-full animate-pulse">
          {/* Зүүн тал: Текстүүд */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-4 w-28 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20" /> {/* Баж */}
              <div className="h-12 w-3/4 rounded-xl bg-foreground/10 sm:h-16" /> {/* Том гарчиг */}
              <div className="h-12 w-1/2 rounded-xl bg-foreground/10 sm:h-16" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded-md bg-foreground/5" /> {/* Танилцуулга текст */}
              <div className="h-4 w-5/6 rounded-md bg-foreground/5" />
              <div className="h-4 w-4/6 rounded-md bg-foreground/5" />
            </div>
            <div className="flex gap-x-4 pt-2">
              <div className="h-11 w-32 rounded-xl bg-foreground/10" /> {/* Товч 1 */}
              <div className="h-11 w-32 rounded-xl bg-foreground/5" />  {/* Товч 2 */}
            </div>
          </div>

          {/* Баруун тал: Төсөл эсвэл Мок-ап карт */}
          <div className="hidden lg:block w-full h-[380px] rounded-3xl border border-foreground/5 bg-foreground/[0.02] p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-4 w-20 rounded-md bg-foreground/10" />
              <div className="h-7 w-48 rounded-lg bg-foreground/10" />
              <div className="h-4 w-full rounded-md bg-foreground/5" />
            </div>
            <div className="h-44 w-full rounded-2xl bg-foreground/5" /> {/* Доторх зурагны хэсэг */}
          </div>
        </div>

        {/* 3. FOOTER SKELETON */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between py-6 border-t border-foreground/5 gap-y-4 animate-pulse">
          <div className="h-4 w-48 rounded-md bg-foreground/5" />
          <div className="flex gap-x-6">
            <div className="h-4 w-12 rounded-md bg-foreground/5" />
            <div className="h-4 w-12 rounded-md bg-foreground/5" />
            <div className="h-4 w-12 rounded-md bg-foreground/5" />
          </div>
        </div>

      </div>
    </div>
  );
}

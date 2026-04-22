import { SITE } from "../site-config";

export default function HeroSection() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12">
      <p className="text-sm text-foreground/60">{SITE.title}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {SITE.name}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70">
        {SITE.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

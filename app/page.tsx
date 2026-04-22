
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import { SITE } from "./site-config";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />

        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-sm text-foreground/60">{subtitle}</p> : null}
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl border-t border-foreground/10 px-6 py-12"
    >
      <SectionHeader title="Projects" subtitle="Selected work" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SITE.projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5"
          >
            <h3 className="text-base font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/60">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-foreground/10 px-2.5 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-4 text-sm">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl border-t border-foreground/10 px-6 py-12"
    >
      <SectionHeader title="Skills" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SkillGroup title="Frontend" items={SITE.skills.frontend} />
        <SkillGroup title="Backend" items={SITE.skills.backend} />
        <SkillGroup title="Tools" items={SITE.skills.tools} />
      </div>
    </section>
  );
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 p-5">
      <h3 className="text-sm font-medium text-foreground/80">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2 text-sm text-foreground/70">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-foreground/10 px-3 py-1.5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl border-t border-foreground/10 px-6 py-12"
    >
      <SectionHeader title="About" />
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/70">
        {SITE.about}
      </p>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl border-t border-foreground/10 px-6 py-12"
    >
      <SectionHeader title="Contact" />

      <div className="mt-6 flex flex-col gap-3 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`mailto:${SITE.email}`}
          className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {SITE.email}
        </a>

        <div className="flex items-center gap-4">
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={SITE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-4 py-2 text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

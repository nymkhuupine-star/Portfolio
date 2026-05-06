import Link from "next/link"
import { ExternalLink, GitBranch } from "lucide-react"

type ProjectEntry = {
  date: string
  version: string
  title: string
  description: string
  tags: string[]
  highlights: string[]
  github?: string
  live?: string
}

const projects: ProjectEntry[] = [
  {
    date: "2026-04-20",
    version: "2.1",
    title: "E-Commerce Platform",
    description:
      "Next.js, Stripe, Tailwind CSS ашиглан бүтээсэн бүрэн ажиллагаатай онлайн дэлгүүр. Real-time inventory, хэрэглэгчийн бүртгэл, төлбөрийн систем.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    highlights: ["Stripe төлбөрийн урсгал + webhook", "Admin dashboard (inventory, orders)", "Authentication + role-based access"],
    github: "#",
    live: "#",
  },
  {
    date: "2026-03-02",
    version: "1.2",
    title: "Task Management App",
    description:
      "Багийн ажлыг удирдах, дагах боломжтой төслийн менежмент систем. Real-time sync, drag & drop, notification систем.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    highlights: ["Realtime updates (Socket.io)", "Drag & drop board (Kanban)", "Activity feed + notifications"],
    github: "#",
    live: "#",
  },
  {
    date: "2026-01-18",
    version: "0.9",
    title: "AI Chat Application",
    description:
      "OpenAI API ашиглан бүтээсэн ухаалаг чатбот аппликейшн. Streaming response, context memory, multi-language support.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK"],
    highlights: ["Streaming responses + abort", "Conversation context + persistence", "Multi-language UX + prompt presets"],
    github: "#",
    live: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-8 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold tracking-widest text-primary uppercase">Портфолио</p>
        <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">Сонгомол төслүүд</h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Миний хийсэн зарим төслүүд. Бүгд нь бодит асуудлыг шийдвэрлэхэд чиглэсэн.
        </p>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-3 top-0 h-full w-px bg-border md:left-[152px]" aria-hidden="true" />

          <ul className="space-y-10">
            {projects.map((project) => (
              <li
                key={`${project.date}-${project.title}`}
                className="relative pl-10 md:grid md:grid-cols-[140px_1fr] md:gap-10 md:pl-0"
              >
                <div className="md:text-right">
                  <p className="text-sm font-medium text-muted-foreground">{project.date}</p>
                  <div className="mt-2 inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-semibold text-foreground">
                    {project.version}
                  </div>
                </div>

                <span
                  className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-[152px]"
                  aria-hidden="true"
                />

                <article className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <div className="flex items-center gap-3">
                      {project.github ? (
                        <Link
                          href={project.github}
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label="GitHub"
                        >
                          <GitBranch className="h-5 w-5" />
                        </Link>
                      ) : null}
                      {project.live ? (
                        <Link
                          href={project.live}
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Highlights</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


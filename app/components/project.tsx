import Link from "next/link"
import { GitBranch } from "lucide-react"
import { ProjectDetailsDialogTrigger } from "./ui/project-details-dialog"

type ProjectEntry = {
  date: string
  version: string
  title: string
  description: string
  tags: string[]
  highlights: string[]
  github?: string
  live?: string
  details: {
    screenshot?: string | null
    screenshotAlt?: string
    whatItDoes: string
    problemSolved: string
    features: string[]
    tech: string[]
  }
}

const projects: ProjectEntry[] = [
  {
    date: "2026-04-20",
    version: "2.1",
    title: "Employee Benefits Management System",
    description:
      "HR болон ажилтнуудад зориулсан benefit eligibility, request, approval процессыг автоматжуулсан management system.",
    tags: ["Next.js", "TypeScript", "Cloudflare", "GraphQL"],
    highlights: ["Ажилтны benefit eligibility-г автоматаар шалгах систем", "HR approval болон request удирдлагын dashboard", "Attendance болон OKR-тэй холбогдсон rule system"],
    github: "#",
    live: "https://team-8-frontend.team8pinequest.workers.dev/",
    details: {
      screenshot: "/hr.png",
      whatItDoes:
        "Employee Benefits Management System нь ажилтнуудын benefit eligibility, request, approval болон contract management процессыг автоматжуулдаг веб систем юм. Систем нь attendance, OKR, role, tenure зэрэг мэдээлэл дээр үндэслэн ямар benefit авах боломжтойг real-time байдлаар тодорхойлдог.",
      problemSolved:
        "Байгууллагууд employee benefit-үүдээ ихэвчлэн гар аргаар шалгаж, approval хийдэг тул цаг их зарцуулж, алдаа гарах эрсдэлтэй байдаг. Энэ систем нь eligibility шалгалт, request workflow болон HR process-ийг автоматжуулснаар ажлын ачааллыг бууруулж, илүү хурдан бөгөөд ил тод удирдах боломжийг бүрдүүлсэн.",
      features: [
        "Ажилтны benefit eligibility-г автоматаар шалгах систем",
        "HR approval болон request удирдлагын dashboard",
        "Гэрээт benefit удирдлагын workflow",
        "Attendance болон OKR-тэй холбогдсон rule system",
      ],
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
    },
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
    details: {
      screenshot: null,
      whatItDoes:
        "Багийн даалгавар, явц, хариуцагч, хугацааг нэг дор төвлөрүүлж Канбан самбар дээр удирдах төслийн менежментийн веб апп.",
      problemSolved:
        "Багийн гишүүдийн хоорондын мэдээллийн алдагдал, олон сувгийн чат/спрэдшитээс үүддэг төөрөгдөл, статус хоцролтыг real-time синктэй болгож шийдсэн.",
      features: [
        "Kanban самбар (drag & drop)",
        "Socket.io дээр суурилсан realtime update",
        "Activity feed + notifications",
        "Төсөл/даалгаврын төлөв, хугацааны хяналт",
      ],
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
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
    details: {
      screenshot: null,
      whatItDoes:
        "OpenAI API дээр суурилсан чат аппликейшн. Хэрэглэгчийн асуултад streaming хариу өгч, өмнөх ярианы контекстийг хадгалан илүү ухаалаг харилцан үйлчлэлийг хангана.",
      problemSolved:
        "Удаан хүлээлттэй нэг дор буудаг хариуг streaming болгох, контекст хадгалалтгүйгээс үүддэг чанарын асуудлыг бууруулж — олон хэлний UX-тэй болгосон.",
      features: [
        "Streaming responses + Abort/Cancel",
        "Conversation context + persistence",
        "Multi-language UX + prompt presets",
        "Хялбар UI/UX (clean, distraction-free)",
      ],
      tech: ["Next.js", "OpenAI API", "Vercel AI SDK", "Tailwind CSS"],
    },
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
                      {project.github && project.github !== "#" ? (
                        <Link
                          href={project.github}
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label="GitHub"
                        >
                          <GitBranch className="h-5 w-5" />
                        </Link>
                      ) : null}
                      <ProjectDetailsDialogTrigger project={project} />
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

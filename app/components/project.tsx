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
    screenshots?: string[]
    screenshotAlt?: string
    demoVideo?: string | null
    whatItDoes: string
    problemSolved: string
    features: string[]
    tech: string[]
  }
}

const projects: ProjectEntry[] = [
  {
    date: "2026",
    version: "LIVE",
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
      tech: ["Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "TMDB API",
  "Axios",],
    },
  },
  {
    date: "2025",
    version: "LIVE",
    title: "Movie Discovery App",
    description:
      "TMDB API ашиглан кино хайх, ангиллаар үзэх, дэлгэрэнгүй мэдээлэл болон трейлер харах боломжтой movie discovery web app.",
    tags: ["Next.js", "Supabase", "React", "Recharts", "Gemini AI"],
    highlights: ["Кино хайх боломж",  "Popular, Upcoming, Top Rated кинонууд үзэх","Киноны дэлгэрэнгүй мэдээлэл болон trailer харах"],
    github: "#",
     live: "https://movie-site-two-alpha.vercel.app/",
    details: {  
      screenshot: "/moviename.png",
      whatItDoes:
        "Movie Z нь TMDB API ашиглан хэрэглэгчдэд кино хайх, popular, upcoming, top rated кинонуудыг үзэх, мөн тухайн киноны дэлгэрэнгүй мэдээлэл, үнэлгээ, release date болон trailer харах боломж олгодог movie discovery web app юм.",
      problemSolved:
        "Хэрэглэгч олон өөр эх сурвалжаас кино хайж цаг алдахгүйгээр нэг платформоос киноны мэдээлэл, ангилал, үнэлгээ болон trailer-ийг хурдан харах боломжтой болгодог.",
      features: [
    "Genre-ээр кино шүүх боломж",
    "Movie detail page",
    "Trailer үзэх боломж",
    "Responsive UI",
      ],
      tech: ["Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "TMDB API",
  "Axios",],
    },
  },
  {
    date: "2026",
    version: "0.9",
    title: "SmartExam",
    description:
      "AI болон proctoring технологи ашигласан online exam болон learning management system. Багш шалгалт үүсгэж, сурагч онлайнаар шалгалт өгч, систем автоматаар дүн болон тайлан боловсруулдаг.",
    tags: ["Next.js", "OpenAI", "Supabase", "TypeScript", "Tailwind CSS"],
    highlights: ["Streaming responses + abort", "Conversation context + persistence", "Multi-language UX + prompt presets"],
    github: "#",
    live: "https://pinequest-e2-team-8.vercel.app/",
    details: {
      screenshot: "/smart1.png",
      demoVideo: "https://player.cloudinary.com/embed/?cloud_name=dxzpmljjs&public_id=IMG_8965_1_hdai7w",
      whatItDoes:
        "SmartExam нь багш, сурагч, админд зориулсан online exam болон learning management system (LMS) платформ юм. Багш нар шалгалт үүсгэж, хуваарилан, сурагчид онлайнаар шалгалт өгч, систем автоматаар дүн болон тайлан гаргадаг.",
      problemSolved:
        "Уламжлалт шалгалтын процесс нь их хэмжээний гар ажиллагаа, цаг хугацаа шаарддаг бөгөөд онлайн шалгалтын үед хяналт болон удирдлага хийхэд хүндрэлтэй байдаг. PineExam нь шалгалтын процессийг автоматжуулж, AI болон proctoring технологи ашиглан илүү найдвартай, хялбар онлайн шалгалтын орчин бүрдүүлдэг.",
      features: [
        "Role-based access / Admin, Teacher, Student",
        "Шалгалт үүсгэх, хуваарилах",
        "Онлайн шалгалт өгөх flow",
        "Автомат дүн болон тайлан",
      ],
      tech: ["Next.js", "OpenAI", "Supabase", "TypeScript", "Tailwind CSS"],
    },
  },
  {
    date: "2025",
    version: "LIVE",
    title: "Food delivery",
    description:
      "Орчин үеийн food delivery платформын UI/UX загвараар бүтээгдсэн, responsive дизайнтай хоол захиалгын веб апп.",
    tags: [ "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",],
    highlights: ["Modern UI/UX дизайн",
  "Responsive layout",
  "Dynamic food categories",
  "Interactive food cards"],
    github: "#",
    live: "https://food-delivery-front-end-silk.vercel.app/",
    details: {
      screenshot: null,
      screenshots: ["/food1.png", "/food2.png", "/food3.png", "/food4.png"],
      whatItDoes:
        "Food Delivery нь хэрэглэгчдэд төрөл бүрийн хоолыг ангиллаар харах, бүтээгдэхүүнүүдийг судлах болон орчин үеийн food delivery платформын мэдрэмжтэй UI/UX туршлага авах боломж олгодог веб апп юм.",
      problemSolved:
        "Хуучин загварын food ordering системүүд ихэвчлэн хэрэглэгчийн туршлага сул, mobile responsive биш байдаг. Энэхүү төсөл нь modern UI/UX, responsive дизайн болон цэвэр интерфэйс ашиглан илүү ойлгомжтой, хэрэглэгч төвтэй food delivery experience бий болгоход чиглэсэн.",
      features: [  "Dynamic food categories",
    "Responsive mobile-friendly дизайн",
    "Interactive food cards",
    "Smooth hover animations",
    ],
      tech: [ "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS"],
    },
  },
  {
    date: "2025",
    version: "Small project",
    title: "AI Image Generator",
    description:
      "Text prompt-оор зураг үүсгэх болон зурагнаас AI prompt гаргаж авах боломжтой AI-powered web app.",
    tags: [ "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "AI Integration",],
    highlights: [ "Text-to-image generation",
  "Image-to-prompt analysis",
  "Responsive modern UI",
  "Interactive AI workflow",],
    github: "#",
    live: "https://ai-image-model-front-end.vercel.app/",
    details: {
      screenshot: "/prompt1.png",
      whatItDoes:
        "AI Image Generator нь хэрэглэгчийн оруулсан text prompt-ийг ашиглан AI зураг үүсгэхээс гадна, upload хийсэн зургаас AI prompt болон description автоматаар гаргаж өгдөг web app юм.",
      problemSolved:
        "Хэрэглэгчид AI зураг үүсгэхдээ зөв prompt бичихэд хүндрэлтэй байдаг. Энэхүү платформ нь зурагнаас prompt гаргаж авах болон prompt-оор зураг үүсгэх боломжийг нэг дор нэгтгэснээр AI content creation процессыг илүү хялбар болгодог.",
      features: ["Text-to-image AI generation",
    "Image upload and prompt extraction",
    "AI-generated image descriptions",
    "Interactive AI workflow",
   ],
      tech: ["Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AI API Integration"],
    },
  },
   
]

export function Projects() {
  const seenKeys = new Set<string>()
  const uniqueProjects = projects.filter((project) => {
    const key = `${project.date}-${project.title}`
    if (seenKeys.has(key)) return false
    seenKeys.add(key)
    return true
  })

  return (
    <section id="projects" className="px-4 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold tracking-widest text-primary uppercase">Портфолио</p>
        <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">Сонгомол төслүүд</h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Миний хийсэн зарим төслүүд. Бүгд нь бодит асуудлыг шийдвэрлэхэд чиглэсэн.
        </p>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-3 top-0 h-full w-px bg-border md:left-[152px]" aria-hidden="true" />

          <ul className="space-y-10">
            {uniqueProjects.map((project) => (
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

import Link from "next/link"
import { GitBranch } from "lucide-react"
import { ProjectDetailsDialogTrigger } from "./ui/project-details-dialog"
import type { Locale } from "../i18n"

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

const COPY = {
  mn: {
    eyebrow: "Портфолио",
    title: "Сонгомол төслүүд",
    highlights: "Онцлох зүйлс",
  },
  en: {
    eyebrow: "Portfolio",
    title: "Selected Projects",
    highlights: "Highlights",
  },
}

const PROJECTS: Record<Locale, ProjectEntry[]> = {
  mn: [
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
    version: "Жижиг төсөл",
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
  ],
  en: [
    {
      date: "2026",
      version: "LIVE",
      title: "Employee Benefits Management System",
      description:
        "A management system that automates benefit eligibility, requests, and approvals for HR teams and employees.",
      tags: ["Next.js", "TypeScript", "Cloudflare", "GraphQL"],
      highlights: [
        "Automated benefit eligibility checks",
        "HR approval & request management dashboard",
        "Rule system integrated with attendance and OKRs",
      ],
      github: "#",
      live: "https://team-8-frontend.team8pinequest.workers.dev/",
      details: {
        screenshot: "/hr.png",
        whatItDoes:
          "Employee Benefits Management System is a web system that automates benefit eligibility checks, requests, approvals, and contract management. It determines real-time eligibility based on signals like attendance, OKRs, role, and tenure.",
        problemSolved:
          "Employee benefits are often handled manually, which is time-consuming and prone to errors. This system automates eligibility checks and request workflows, reduces operational overhead, and enables faster, more transparent HR processes.",
        features: [
          "Automated benefit eligibility checks",
          "HR approval & request management dashboard",
          "Contract benefit management workflow",
          "Rule system integrated with attendance and OKRs",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API", "Axios"],
      },
    },
    {
      date: "2025",
      version: "LIVE",
      title: "Movie Discovery App",
      description:
        "A movie discovery web app for searching and browsing films, viewing detailed information, and watching trailers using the TMDB API.",
      tags: ["Next.js", "Supabase", "React", "Recharts", "Gemini AI"],
      highlights: [
        "Movie search",
        "Browse Popular, Upcoming, and Top Rated movies",
        "View details and watch trailers",
      ],
      github: "#",
      live: "https://movie-site-two-alpha.vercel.app/",
      details: {
        screenshot: "/moviename.png",
        whatItDoes:
          "Movie Z is a movie discovery web app powered by the TMDB API. Users can search movies, browse popular/upcoming/top-rated titles, and view details such as ratings, release dates, and trailers.",
        problemSolved:
          "It centralizes movie information so users can quickly find details, categories, ratings, and trailers without jumping across multiple sources.",
        features: ["Filter movies by genre", "Movie detail page", "Trailer playback", "Responsive UI"],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API", "Axios"],
      },
    },
    {
      date: "2026",
      version: "0.9",
      title: "SmartExam",
      description:
        "An AI-powered online exam and learning management system (LMS) with proctoring. Teachers create and assign exams, students take them online, and the system generates scores and reports automatically.",
      tags: ["Next.js", "OpenAI", "Supabase", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Streaming responses + abort",
        "Conversation context + persistence",
        "Multi-language UX + prompt presets",
      ],
      github: "#",
      live: "https://pinequest-e2-team-8.vercel.app/",
      details: {
        screenshot: "/smart1.png",
        demoVideo: "https://player.cloudinary.com/embed/?cloud_name=dxzpmljjs&public_id=IMG_8965_1_hdai7w",
        whatItDoes:
          "SmartExam is an online exam and learning management platform for teachers, students, and admins. Teachers create and assign exams; students take them online; the system automatically produces grades and reports.",
        problemSolved:
          "Traditional exam workflows require significant manual effort and are difficult to monitor in online settings. SmartExam automates the exam process and uses AI plus proctoring to create a more reliable, streamlined online testing environment.",
        features: [
          "Role-based access (Admin, Teacher, Student)",
          "Create and assign exams",
          "Online exam-taking flow",
          "Automatic grading and reporting",
        ],
        tech: ["Next.js", "OpenAI", "Supabase", "TypeScript", "Tailwind CSS"],
      },
    },
    {
      date: "2025",
      version: "LIVE",
      title: "Food delivery",
      description:
        "A responsive food ordering web app built with a modern food-delivery UI/UX approach.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      highlights: ["Modern UI/UX design", "Responsive layout", "Dynamic food categories", "Interactive food cards"],
      github: "#",
      live: "https://food-delivery-front-end-silk.vercel.app/",
      details: {
        screenshot: null,
        screenshots: ["/food1.png", "/food2.png", "/food3.png", "/food4.png"],
        whatItDoes:
          "Food Delivery lets users browse food items by category, explore menus, and experience a clean, modern food-delivery style interface.",
        problemSolved:
          "Legacy food ordering interfaces often provide a poor user experience and are not mobile responsive. This project focuses on a clearer, user-centered experience through modern UI/UX and a responsive layout.",
        features: [
          "Dynamic food categories",
          "Responsive, mobile-friendly design",
          "Interactive food cards",
          "Smooth hover animations",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
    },
    {
      date: "2025",
      version: "Small project",
      title: "AI Image Generator",
      description:
        "An AI-powered web app that generates images from text prompts and extracts prompt suggestions from uploaded images.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Integration"],
      highlights: [
        "Text-to-image generation",
        "Image-to-prompt analysis",
        "Responsive modern UI",
        "Interactive AI workflow",
      ],
      github: "#",
      live: "https://ai-image-model-front-end.vercel.app/",
      details: {
        screenshot: "/prompt1.png",
        whatItDoes:
          "AI Image Generator can create images from user-provided text prompts. It also analyzes uploaded images to extract prompt suggestions and generate descriptions automatically.",
        problemSolved:
          "Writing effective prompts can be challenging. By combining image-to-prompt extraction with prompt-to-image generation, this tool makes AI content creation more approachable and efficient.",
        features: [
          "Text-to-image AI generation",
          "Image upload and prompt extraction",
          "AI-generated image descriptions",
          "Interactive AI workflow",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI API Integration"],
      },
    },
  ],
}

export function Projects({ locale }: { locale: Locale }) {
  const t = locale === "en" ? COPY.en : COPY.mn
  const projects = PROJECTS[locale]

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
        <p className="mb-4 text-center text-sm font-semibold tracking-widest text-primary uppercase">{t.eyebrow}</p>
        <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">{t.title}</h2>
        

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

                <article className="mt-3 rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:mt-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 flex-1 text-lg font-semibold text-foreground">{project.title}</h3>
                    <div className="flex shrink-0 items-center gap-3">
                      {project.github && project.github !== "#" ? (
                        <Link
                          href={project.github}
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label="GitHub"
                        >
                          <GitBranch className="h-5 w-5" />
                        </Link>
                      ) : null}
                      <ProjectDetailsDialogTrigger project={project} locale={locale} />
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
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{t.highlights}</p>
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

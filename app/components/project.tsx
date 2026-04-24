import ProjectsStack from "./projects-stack"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Next.js, Stripe, Tailwind CSS ашиглан бүтээсэн бүрэн ажиллагаатай онлайн дэлгүүр. Real-time inventory, хэрэглэгчийн бүртгэл, төлбөрийн систем.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Багийн ажлыг удирдах, дагах боломжтой төслийн менежмент систем. Real-time sync, drag & drop, notification систем.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Application",
    description: "OpenAI API ашиглан бүтээсэн ухаалаг чатбот аппликейшн. Streaming response, context memory, multi-language support.",
    tech: ["Next.js", "OpenAI", "Vercel AI SDK"],
    github: "#",
    live: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase text-center">
          Портфолио
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
          Сонгомол төслүүд
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Миний хийсэн зарим төслүүд. Бүгд нь бодит асуудлыг шийдвэрлэхэд чиглэсэн.
        </p>
        
        <ProjectsStack projects={projects} />
      </div>
    </section>
  )
}

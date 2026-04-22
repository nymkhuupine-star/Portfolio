import { ExternalLink,  Folder } from "lucide-react"
import Link from "next/link"

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label="GitHub"
                  >
               
                  </Link>
                  <Link
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

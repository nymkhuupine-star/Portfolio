import { Code2, Database, Wrench, Globe } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    icon: Globe,
    title: "DevOps",
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
  {
    icon: Wrench,
    title: "Хэрэгслүүд",
    skills: ["Git", "Figma", "VS Code", "Postman", "Jira"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-28 px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase text-center">
          Ур чадвар
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Технологи & Хэрэгслүүд
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

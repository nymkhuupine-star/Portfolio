"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Code2, Database, Globe, Wrench } from "lucide-react"
import type { Locale } from "../i18n"

const COPY = {
  mn: {
    eyebrow: "Миний ур чадвар",
    title: "Ашигладаг технологиуд",
  },
  en: {
    eyebrow: "My skills",
    title: "Technologies I use",
  },
}

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      
    ],
    strokeClass: "stroke-blue-500/20 group-hover:stroke-blue-500/40",
    glowColor: "rgba(59,130,246,0.25)",
    glowBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Database,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
       "Prisma",
      
    ],
    strokeClass: "stroke-green-500/20 group-hover:stroke-green-500/40",
    glowColor: "rgba(32,192,92,0.25)",
    glowBg: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: Globe,
    title: "AI & Cloud",
    skills: [
      "Gemini AI",
      "Pinecone",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Vercel",
    ],
    strokeClass: "stroke-amber-500/20 group-hover:stroke-amber-500/40",
    glowColor: "rgba(255,194,51,0.25)",
    glowBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "Clerk",
    ],
    strokeClass: "stroke-purple-500/20 group-hover:stroke-purple-500/40",
    glowColor: "rgba(168,85,247,0.25)",
    glowBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
]

const PUZZLE_VIEWBOX = "0 0 320 320"
const NOISE_BG_IMAGE =
  'url("data:image/svg+xml,%3Csvg xmlns=\'w3.org\' width=\'240\' height=\'240\' viewBox=\'0 0 240 240\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'240\' height=\'240\' filter=\'url(%23n)\' opacity=\'.18\'/%3E%3C/svg%3E")'

const puzzlePaths = [
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,0 186,0 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 260,134 260,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,260 134,260 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 60,186 60,134 30,134 Z",
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,0 186,0 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 320,134 320,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,260 134,260 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 0,186 0,134 30,134 Z",
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,60 186,60 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 260,134 260,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,320 134,320 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 60,186 60,134 30,134 Z",
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,60 186,60 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 320,134 320,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,320 134,320 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 0,186 0,134 30,134 Z",
]

export function Skills({ locale }: { locale: Locale }) {
  const reduceMotion = useReducedMotion()
  const t = locale === "en" ? COPY.en : COPY.mn

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden sm:py-28 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.04),transparent_60%),radial-gradient(900px_520px_at_50%_110%,rgba(168,85,247,0.04),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.28] mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG_IMAGE }}
        />
      </div>

      <div className="max-w-6xl mx-auto mb-14 text-center">
        <p className="text-sm font-semibold text-primary/90 mb-3 tracking-[0.25em] uppercase">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          {t.title}
        </h2>
      </div>

      <div className="mx-auto flex flex-col items-center gap-5 sm:grid sm:max-w-[700px] sm:grid-cols-2 sm:justify-items-center sm:gap-y-5 lg:flex lg:max-w-[1100px] lg:flex-row lg:justify-center lg:gap-0">
        {skillCategories.map((category, index) => {
          const puzzlePath = puzzlePaths[index] ?? puzzlePaths
          const stack = 40 - index 

          const spacingClass = index === 0 ? "" : "lg:-ml-[52px]"

          return (
            <motion.div
              key={category.title}
              className={`group relative h-[280px] w-[280px] flex items-center justify-center select-none sm:h-[300px] sm:w-[300px] ${spacingClass}`}
              style={{ zIndex: stack }}
              whileHover={reduceMotion ? {} : { scale: 1.01, y: -8, zIndex: 90 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              {/* Зөөлөн неон туяа */}
              <div 
                className={`absolute right-6 top-6 h-20 w-20 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-50 pointer-events-none z-0 ${category.glowBg}`} 
              />

              {/* Пуззл SVG */}
              <svg
                viewBox={PUZZLE_VIEWBOX}
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
              >
                <defs>
                  <filter id={`glow-filter-${index}`} x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow 
                      dx="0" 
                      dy="4" 
                      stdDeviation="10" 
                      floodColor={category.glowColor} 
                      floodOpacity="0" 
                      className="transition-all duration-300 group-hover:[flood-opacity:0.75]" 
                    />
                  </filter>
                </defs>
                
                <path
                  d={puzzlePath}
                  filter={`url(#glow-filter-${index})`}
                  className={`fill-card/75 stroke-[1.2] transition-all duration-300 ${category.strokeClass}`}
                />
              </svg>

              {/* Текст болон Икон агуулга */}
              <div className="relative z-20 h-full w-full px-8 pb-6 pt-10 flex flex-col gap-4 pointer-events-auto sm:px-10 sm:pb-8 sm:pt-12">
                <div className="pl-2">
                  <div className="w-9 h-9 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-105">
                    <category.icon className={`w-4 h-4 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-0.5 pl-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/75 flex items-center gap-2 font-medium">
                      <span className={`h-1.5 w-1.5 rounded-full ${category.iconColor} opacity-60`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Code2, Database, Globe, Wrench } from "lucide-react"
import type { CSSProperties } from "react"

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
    title: "Tools",
    skills: ["Git", "Figma", "VS Code", "Postman", "Jira"],
  },
]

const puzzleOutlineColors = ["#1E6BFF", "#20C05C", "#FFC233", "#8A2BE2"]
const PUZZLE_VIEWBOX = "-24 -24 368 368"
const NOISE_BG_IMAGE =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'240\' height=\'240\' viewBox=\'0 0 240 240\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'240\' height=\'240\' filter=\'url(%23n)\' opacity=\'.18\'/%3E%3C/svg%3E")'

const puzzlePaths = [
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,0 186,0 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 260,134 260,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,260 134,260 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 60,186 60,134 30,134 Z",
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,0 186,0 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 320,134 320,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,260 134,260 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 0,186 0,134 30,134 Z",
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,60 186,60 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 260,134 260,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,320 134,320 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 60,186 60,134 30,134 Z",
  "M 30,54 C 30,40 40,30 54,30 L 134,30 C 134,60 186,60 186,30 L 266,30 C 280,30 290,40 290,54 L 290,134 C 320,134 320,186 290,186 L 290,266 C 290,280 280,290 266,290 L 186,290 C 186,320 134,320 134,290 L 54,290 C 40,290 30,280 30,266 L 30,186 C 0,186 0,134 30,134 Z",
]

export function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.10),transparent_60%),radial-gradient(900px_520px_at_50%_110%,rgba(168,85,247,0.10),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.28] mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG_IMAGE }}
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold text-primary/80 mb-3 tracking-[0.35em] uppercase text-center">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-14 text-center">
          Technologies & Tools
        </h2>
      </div>

      <div className="puzzle-scroller">
        <div className="puzzle-row" role="list" aria-label="Skill categories">
          {skillCategories.map((category, index) => {
            const puzzlePath = puzzlePaths[index] ?? puzzlePaths[0]
            const puzzleStroke = puzzleOutlineColors[index] ?? puzzleOutlineColors[0]
            const clipId = `skills-puzzle-clip-${index}`
            const fillId = `skills-puzzle-fill-${index}`
            const stack = 10 + (skillCategories.length - index)

            const pieceStyle = {
              "--puzzle-stroke": puzzleStroke,
              "--puzzle-clip": `path("${puzzlePath}")`,
            } as CSSProperties

            return (
              <motion.div
                key={category.title}
                className={`puzzle-piece puzzle-piece-${index + 1}`}
                style={{ ...pieceStyle, zIndex: stack } as CSSProperties}
                role="listitem"
                tabIndex={0}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                whileFocus={reduceMotion ? undefined : { y: -6 }}
                transition={
                  reduceMotion
                    ? undefined
                    : { type: "spring", stiffness: 280, damping: 22, mass: 0.7 }
                }
              >
                <svg
                  className="puzzle-shape"
                  viewBox={PUZZLE_VIEWBOX}
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{ color: "var(--puzzle-stroke)" }}
                >
                  <defs>
                    <clipPath id={clipId}>
                      <path d={puzzlePath} />
                    </clipPath>

                    <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                      <stop offset="40%" stopColor="rgba(255,255,255,0.04)" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
                    </linearGradient>
                  </defs>

                  <path className="puzzle-fill" d={puzzlePath} fill={`url(#${fillId})`} />
                  <path
                    className="puzzle-stroke"
                    d={puzzlePath}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    clipPath={`url(#${clipId})`}
                  />
                  <path
                    className="puzzle-glow"
                    d={puzzlePath}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="puzzle-inner">
                  <div className="puzzle-icon-wrap" aria-hidden="true">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="puzzle-title">{category.title}</h3>
                  <ul className="puzzle-skills">
                    {category.skills.map((skill) => (
                      <li key={skill} className="puzzle-skill-item">
                        <span className="puzzle-dot" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

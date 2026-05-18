"use client"

import { motion, useReducedMotion } from "framer-motion"

type FloatingItem = {
  label: string
  positionClass: string
  toneClass: string
  float: { x: number; y: number; rotate: number; duration: number }
}

const ITEMS: FloatingItem[] = [
  {
    label: "</>",
    positionClass: "left-[-10%] top-[18%] md:left-[-12%] md:top-[22%]",
    toneClass:
      "border-cyan-300/40 bg-white/70 text-slate-700 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200 dark:shadow-[0_16px_50px_rgba(34,211,238,0.12)]",
    float: { x: 6, y: -10, rotate: -6, duration: 6.8 },
  },
  {
    label: "TS",
    positionClass: "right-[-10%] top-[12%] md:right-[-12%] md:top-[16%]",
    toneClass:
      "border-blue-300/40 bg-white/70 text-slate-700 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200 dark:shadow-[0_16px_50px_rgba(59,130,246,0.12)]",
    float: { x: -6, y: -12, rotate: 6, duration: 7.4 },
  },
  {
    label: "API",
    positionClass: "right-[-12%] bottom-[22%] md:right-[-14%] md:bottom-[26%]",
    toneClass:
      "border-emerald-300/40 bg-white/70 text-slate-700 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200 dark:shadow-[0_16px_50px_rgba(52,211,153,0.12)]",
    float: { x: -4, y: 10, rotate: -4, duration: 8.2 },
  },
  {
    label: "{ }",
    positionClass: "left-[-6%] bottom-[18%] md:left-[-10%] md:bottom-[16%]",
    toneClass:
      "border-violet-300/40 bg-white/70 text-slate-700 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-200 dark:shadow-[0_16px_50px_rgba(167,139,250,0.12)]",
    float: { x: 4, y: 12, rotate: 5, duration: 7.8 },
  },
  {
    label: "DB",
    positionClass: "left-[55%] -bottom-[10%] md:left-[62%] md:-bottom-[12%]",
    toneClass:
      "border-fuchsia-300/40 bg-white/70 text-slate-700 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-fuchsia-400/20 dark:bg-fuchsia-400/10 dark:text-fuchsia-200 dark:shadow-[0_16px_50px_rgba(232,121,249,0.12)]",
    float: { x: -6, y: 10, rotate: 3, duration: 8.6 },
  },
]

export function FloatingIcons({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0", className].join(" ")}
    >
      {ITEMS.map((item, index) => (
        <motion.div
          key={item.label}
          className={[
            "absolute z-20 grid size-11 place-items-center rounded-full border text-[12px] font-semibold",
            "backdrop-blur-md",
            item.positionClass,
            item.toneClass,
          ].join(" ")}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1, y: 0 }
              : {
                  opacity: 1,
                  scale: 1,
                  y: [0, item.float.y, 0],
                  x: [0, item.float.x, 0],
                  rotate: [0, item.float.rotate, 0],
                }
          }
          transition={{
            delay: 0.15 + index * 0.08,
            duration: reduceMotion ? 0.4 : item.float.duration,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          {item.label}
        </motion.div>
      ))}
    </div>
  )
}

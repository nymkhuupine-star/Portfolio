"use client"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import type { Locale } from "../i18n"
import { FloatingIcons } from "./floating-icons"
import { ParticlesBackground } from "./particles-background"

const COPY = {
  mn: {
    status: "Шинэ төсөлд ажиллахад нээлттэй",
    greeting: "Сайн байна уу,",
    roles: ["Full-Stack Developer", "React Expert", "UI/UX Designer"],
    tagline: "Дижитал бүтээгдэхүүнийг төгс гүйцэтгэлтэй бүтээнэ.",
    description: "React, Next.js болон TypeScript экосистемд суурилан, хэрэглэгчийн хэрэгцээнд бүрэн нийцсэн, өндөр хурдтай вэб аппликейшнуудыг хөгжүүлдэг.",
    viewProjects: "Төслүүд үзэх",
    downloadCv: "CV татах",
   
    statYearsLabel: "Жилийн\nтуршлага",
    statProjectsLabel: "Дуусгасан\nтөслүүд",
  },
  en: {
    status: "Open to new projects",
    greeting: "Hello,",
    roles: ["Full-Stack Developer", "React Expert", "UI/UX Designer"],
    tagline: "I build high-performing digital products.",
    description: "I build fast, user-focused web applications with clean architecture—grounded in the React, Next.js, and TypeScript ecosystem.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    statYears: "3+",
    statProjects: "50+",
    statYearsLabel: "Years of\nExperience",
    statProjectsLabel: "Projects\nCompleted",
  },
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<Locale, Record<string, any>>

export default function HeroSection({ locale = "mn" }: { locale?: Locale }) {
  const reduceMotion = useReducedMotion()
  const t = (locale === "en" ? COPY.en : COPY.mn)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion ? {} : { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="top" className="relative isolate -mt-[100px] mb-[100px] flex w-full items-center overflow-hidden pt-[120px] md:min-h-screen">
      
      {/* 1. БОЛОВСРОНГУЙ BACKGROUND (Light & Dark) */}
      <div className="pointer-events-none absolute inset-0 -z-40 bg-[#fdfeff] dark:bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_15%_20%,rgba(16,185,129,0.1),transparent_60%),radial-gradient(1000px_700px_at_85%_30%,rgba(6,182,212,0.08),transparent_60%)]" />

      </div>

      {/* ANIMATED GLOW ORBS */}
      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <motion.div 
          className="absolute -left-24 -top-28 size-[520px] rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10" 
          animate={reduceMotion ? {} : { x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }} 
        />
        <motion.div 
          className="absolute -right-32 top-10 size-[560px] rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/10" 
          animate={reduceMotion ? {} : { x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }} 
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }} 
        />
      </div>

      {/* PARTICLES */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-30 dark:opacity-50">
        <ParticlesBackground />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <motion.div variants={item} className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {t.status}
            </div>
            
          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tighter text-slate-900 sm:text-5xl md:text-5xl dark:text-white">
  <span className="block opacity-90">{t.greeting}</span>
  <span className="relative mt-2 block">
    <span className="font-serif italic font-light text-indigo-600 dark:text-indigo-400">Full-Stack Developer</span>
    <br />
    {/* <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-white">
      Developer
    </span> */}
    {/* Доогуур нь зурагдах бүтээлч шугам */}
    {/* <motion.div 
      initial={{ width: 0 }}
      animate={{ width: "80%" }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute -bottom-2 left-0 h-[8px] w-[2px] rounded-full bg-indigo-500/10 dark:bg-indigo-400/20"
    /> */}
  </span>
</h1>
            
            <p className="mt-6 text-lg font-bold tracking-wide text-slate-800 sm:text-xl dark:text-white/85">
              {t.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 md:max-w-lg dark:text-white/60">
              {t.description}
            </p>

            <motion.div variants={item} className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center md:justify-start">
              <a href="#projects" className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground  px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:scale-[1.02] sm:w-auto dark:bg-white dark:text-black">
                {t.viewProjects}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/cv.pdf" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-xl transition-all hover:bg-slate-50 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white">
                <Download className="h-4 w-4" />
                {t.downloadCv}
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: VISUALS */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-xl md:max-w-none">
            <div className="relative">
              <FloatingIcons />
              
              {/* MAIN CARD (CODE WINDOW) */}
              <motion.div 
                whileHover={{ y: -8, rotate: -1 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/40 p-1 shadow-[0_40px_100px_rgba(15,23,42,0.08)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              >
                {/* Header */}
                <div className="flex items-center gap-2 border-b border-slate-200/50 bg-white/60 px-6 py-4 dark:border-white/10 dark:bg-black/20">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-rose-400" />
                    <span className="size-3 rounded-full bg-amber-400" />
                    <span className="size-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-4 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase dark:text-white/40">
                    developer.tsx
                  </span>
                </div>

                {/* Code Content */}
                <div className="relative px-6 py-10 sm:px-10">
                 <pre className="relative z-10 overflow-x-auto text-[13px] leading-relaxed sm:text-sm">
  <code className="text-slate-700 dark:text-white/80">
    <span className="text-purple-600 dark:text-blue-400 font-bold">const</span>{" "}
    <span className="text-blue-600 dark:text-yellow-300 font-medium">developer</span>{" = {"} {"\n"}
    {"  "}<span className="text-pink-500 dark:text-sky-300">name</span>: <span className="text-emerald-600 dark:text-orange-300">&quot;Pine Nymkhuu&quot;</span>,{"\n"}
    {"  "}<span className="text-pink-500 dark:text-sky-300">role</span>: <span className="text-emerald-600 dark:text-orange-300">&quot;Full-Stack Dev&quot;</span>,{"\n"}
    {"  "}<span className="text-pink-500 dark:text-sky-300">skills</span>: [{"\n"}
    {"    "}<span className="text-emerald-600 dark:text-orange-300">&quot;React&quot;</span>, <span className="text-emerald-600 dark:text-orange-300">&quot;Next.js&quot;</span>,{"\n"}
    {"    "}<span className="text-emerald-600 dark:text-orange-300">&quot;TypeScript&quot;</span>, <span className="text-emerald-600 dark:text-orange-300">&quot;Tailwind&quot;</span>{"\n"}
    {"  "}],{"\n"}
    {"  "}<span className="text-pink-500 dark:text-sky-300">available</span>: <span className="text-blue-600 dark:text-blue-400">true</span>{"\n"}
    {"}"}
  </code>
</pre>

                </div>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

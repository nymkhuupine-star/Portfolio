import { Code2, Lightbulb, Users } from "lucide-react"
import type { Locale } from "../i18n"

type LocalizedText = Record<Locale, string>

const highlights = [
  {
    icon: Code2,
    title: {
      mn: "Веб хөгжүүлэлт",
      en: "Web development",
    } satisfies LocalizedText,

    description: {
      mn: "Хэрэгцээнд тохирсон, функциональ, цэвэр кодтой веб сайт болон веб апп хөгжүүлнэ",
      en: "Develop websites and web applications that are usable, functional, and cleanly coded.",
    } satisfies LocalizedText,

    glowClass:
      "border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",

    glowBg: "bg-blue-500/10",

    iconColor: "text-blue-500",
  },

  {
    icon: Lightbulb,

    title: {
      mn: "Responsive дизайн",
      en: "Responsive design",
    } satisfies LocalizedText,

    description: {
      mn: "Бүх төхөөрөмж дээр зөв харагдах, хэрэглэгчийн туршлагад төвлөрсөн responsive дизайн хийнэ",
      en: "Create a responsive design that looks good on any device and focuses on the entire user experience",
    } satisfies LocalizedText,

    glowClass:
      "border-green-500/20 shadow-[0_0_20px_rgba(32,192,92,0.05)] hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(32,192,92,0.15)]",

    glowBg: "bg-green-500/10",

    iconColor: "text-green-500",
  },

  {
    icon: Users,

    title: {
      mn: "Хамтран ажиллах",
      en: "Collaboration",
    } satisfies LocalizedText,

    description: {
      mn: "Таны санааг бодит болгоход нээлттэй, хариуцлагатай хамтарч ажиллахад бэлэн байна",
      en: "We are ready to work with you in an open and responsible manner to make your ideas a reality.",
    } satisfies LocalizedText,

    glowClass:
      "border-amber-500/20 shadow-[0_0_20px_rgba(255,194,51,0.05)] hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(255,194,51,0.15)]",

    glowBg: "bg-amber-500/10",

    iconColor: "text-amber-500",
  },
]

const COPY = {
  mn: {
    eyebrow: "Миний тухай",

    title: "Орчин үеийн технологи, өндөр гүйцэтгэлтэй вэб шийдлүүд",

    p1: "Би Next.js, React болон Tailwind CSS ашиглан хурдан, ойлгомжтой, хэрэглэгчид ээлтэй вэб сайт болон dashboard хөгжүүлдэг Full-stack хөгжүүлэгч юм.",

    p2: "Бизнесийн вэб сайт, портфолио болон админ системүүдийг цэвэрхэн дизайн, зөв бүтэцтэйгээр гүйцэтгэдэг.",

    p3: "Миний зорилго бол зөвхөн код бичих биш, ашиглахад хялбар, найдвартай, бодит үнэ цэн авчрах бүтээгдэхүүн бүтээхэд оршино.",
  },

  en: {
    eyebrow: "About",

    title: "Modern technology, high-performance web solutions",

    p1: "I’m a full-stack developer who builds fast, intuitive websites and dashboards using Next.js, React, and Tailwind CSS.",

    p2: "I deliver business websites, portfolios, and admin systems with clean design and a solid, maintainable structure.",

    p3: "My goal isn’t just to write code—it’s to build products that are easy to use, reliable, and create real value.",
  },
}

export function About({ locale }: { locale: Locale }) {
  const t = locale === "en" ? COPY.en : COPY.mn

  return (
    <section
      id="about"
      className="relative -mt-24 overflow-hidden px-4 pt-40 pb-24 sm:px-8 sm:pt-44 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/90">
              {t.eyebrow}
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl dark:text-white">
              {t.title}
            </h2>

            <div className="space-y-5 leading-relaxed text-muted-foreground dark:text-white/65">
              <p>{t.p1}</p>

              <p>{t.p2}</p>

              <p>{t.p3}</p>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="space-y-6 lg:pt-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[28px] border bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 dark:bg-white/[0.03] ${item.glowClass}`}
              >
                {/* CARD GLOW */}
                <div
                  className={`absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl opacity-70 ${item.glowBg}`}
                />

                <div className="relative z-10 flex gap-5">
                  {/* ICON */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03] dark:border-white/5 dark:bg-white/5">
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground dark:text-white">
                      {item.title[locale]}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                      {item.description[locale]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

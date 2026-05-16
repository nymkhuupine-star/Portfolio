"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { useMemo, useState, useEffect, type ReactNode } from "react"
import { Modal } from "./modal"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots, type CarouselApi } from "./carousel"

type ProjectDetails = {
  screenshot?: string | null
  screenshots?: string[]
  screenshotAlt?: string
  demoVideo?: string | null
  whatItDoes: string
  problemSolved: string
  features: string[]
  tech: string[]
}

type ProjectEntry = {
  title: string
  description: string
  tags: string[]
  highlights: string[]
  github?: string
  live?: string
  details: ProjectDetails
}

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ")
}

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 sm:h-9 sm:px-4 sm:text-sm"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  )
}

function ScreenshotCarousel({ screenshots, alt }: { screenshots: string[]; alt: string }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {screenshots.map((src, i) => (
          <CarouselItem key={src}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-secondary">
              <Image src={src} alt={`${alt} ${i + 1}`} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots count={screenshots.length} current={current} />
    </Carousel>
  )
}

function ProjectScreenshot({
  screenshot,
  screenshots,
  alt,
  title,
}: {
  screenshot?: string | null
  screenshots?: string[]
  alt: string
  title: string
}) {
  if (screenshots && screenshots.length > 0) {
    return <ScreenshotCarousel screenshots={screenshots} alt={alt} />
  }

  if (screenshot) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-secondary">
        <Image src={screenshot} alt={alt} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain" />
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-secondary">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.45] dark:opacity-[0.25] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:28px_28px] text-foreground/15 dark:text-foreground/35"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-background/70 via-transparent to-transparent" />

      <div className="relative flex h-full w-full flex-col justify-end p-6">
        <p className="text-xs font-semibold tracking-widest text-foreground/50 uppercase">Preview</p>
        <p className="mt-2 text-lg font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-foreground/60">Screenshot зураг нэмэхэд автоматаар энд харагдана.</p>
      </div>
    </div>
  )
}

function getDemoEmbedUrl(input?: string | null) {
  const value = input?.trim()
  if (!value) return null

  if (value.startsWith("https://player.cloudinary.com/")) {
    try {
      const url = new URL(value)
      const hostname = url.hostname.replace(/^www\./, "")
      if (hostname === "player.cloudinary.com" && url.pathname.startsWith("/embed")) {
        return value
      }
    } catch {
      return null
    }
  }

  if (/^[\w-]{11}$/.test(value)) {
    return `https://www.youtube.com/embed/${value}?rel=0&modestbranding=1`
  }

  try {
    const url = new URL(value)
    const hostname = url.hostname.replace(/^www\./, "")

    if (hostname === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0]
      return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null
    }

    if (hostname === "youtube.com" || hostname.endsWith(".youtube.com")) {
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.split("/").filter(Boolean)[1]
        return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null
      }

      if (url.pathname === "/watch") {
        const id = url.searchParams.get("v")
        return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null
      }

      if (url.pathname.startsWith("/embed/")) {
        const id = url.pathname.split("/").filter(Boolean)[1]
        return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null
      }
    }
  } catch {
    return null
  }

  return null
}

export function ProjectDetailsDialogTrigger({ project }: { project: ProjectEntry }) {
  const [open, setOpen] = useState(false)

  const hasLive = Boolean(project.live && project.live !== "#")

  const screenshotAlt = useMemo(() => project.details.screenshotAlt ?? `${project.title} screenshot`, [project.details.screenshotAlt, project.title])
  const demoVideoSrc = useMemo(() => getDemoEmbedUrl(project.details.demoVideo), [project.details.demoVideo])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md"
        aria-label="Дэлгэрэнгүй"
        title="Дэлгэрэнгүй"
      >
        <ExternalLink className="h-5 w-5" />
      </button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title={project.title}
        description="Төслийн дэлгэрэнгүй"
        size="lg"
        headerActions={
          hasLive ? (
            <PrimaryLink href={project.live!}>
              <span className="inline-flex items-center gap-1.5">
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                Live Demo
              </span>
            </PrimaryLink>
          ) : null
        }
      >
        <div className="space-y-8">
          <ProjectScreenshot screenshot={project.details.screenshot} screenshots={project.details.screenshots} alt={screenshotAlt} title={project.title} />

          <div className={cx("grid gap-8 items-start", demoVideoSrc ? "lg:grid-cols-[1fr_320px]" : false)}>
            <div className="grid gap-8 items-start md:grid-cols-2">
              <div className="space-y-8">
                <section>
                  <h4 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Project юу хийдэг</h4>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{project.details.whatItDoes}</p>
                </section>

                <section>
                  <h4 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Ямар асуудал шийдсэн</h4>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{project.details.problemSolved}</p>
                </section>
              </div>

              <div className="space-y-8">
                <section>
                  <h4 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Гол features</h4>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    {project.details.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="rounded-2xl border border-border/60 bg-secondary/30 p-5">
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Ашигласан tech</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.details.tech.map((tech) => (
                      <span
                        key={tech}
                        className={cx(
                          "rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-semibold",
                          "text-foreground/80",
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {demoVideoSrc ? (
              <aside className="space-y-6">
                <div className="rounded-2xl border border-border/60 bg-secondary/30 p-5">
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Туршилтын видео</p>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-background">
                    <div className="mx-auto max-w-[240px]">
                      <div className="relative aspect-[9/16] w-full">
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={demoVideoSrc}
                          title={`${project.title} demo video`}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  )
}

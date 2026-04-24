"use client"

import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from "react"
import { ExternalLink, Folder, GitBranch, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
}

type DragOffset = { x: number; y: number }

const MAX_VISIBLE = 4
const SWIPE_THRESHOLD_PX = 100
const SWIPE_OUT_DISTANCE_PX = 800
const SWIPE_OUT_MS = 420
const SNAP_BACK_MS = 500

export default function ProjectsStack({ projects }: { projects: Project[] }) {
  const [order, setOrder] = useState<number[]>(() => projects.map((_, i) => i))
  const [drag, setDrag] = useState<DragOffset>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [isSnappingBack, setIsSnappingBack] = useState(false)

  const dragRef = useRef<DragOffset>({ x: 0, y: 0 })
  const animatingRef = useRef(false)
  const pointerIdRef = useRef<number | null>(null)
  const startPointRef = useRef<{ x: number; y: number } | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const snapTimeoutRef = useRef<number | null>(null)
  const dragRafRef = useRef<number | null>(null)
  const queuedDragRef = useRef<DragOffset | null>(null)

  const setDragWithRef = useCallback((next: DragOffset) => {
    dragRef.current = next
    setDrag(next)
  }, [])

  const flushQueuedDrag = useCallback(() => {
    dragRafRef.current = null
    const next = queuedDragRef.current
    if (!next) return
    queuedDragRef.current = null
    setDrag(next)
  }, [])

  const scheduleDragState = useCallback(
    (next: DragOffset) => {
      queuedDragRef.current = next
      if (dragRafRef.current !== null) return
      dragRafRef.current = window.requestAnimationFrame(flushQueuedDrag)
    },
    [flushQueuedDrag],
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      if (snapTimeoutRef.current) window.clearTimeout(snapTimeoutRef.current)
      queuedDragRef.current = null
      if (dragRafRef.current !== null) {
        window.cancelAnimationFrame(dragRafRef.current)
        dragRafRef.current = null
      }
      animatingRef.current = false
    }
  }, [])

  const cancelQueuedDrag = () => {
    queuedDragRef.current = null
    if (dragRafRef.current !== null) {
      window.cancelAnimationFrame(dragRafRef.current)
      dragRafRef.current = null
    }
  }

  const canInteract = projects.length > 1 && !isAnimatingOut && !isSnappingBack

  const cycleNext = useCallback(
    (direction: 1 | -1) => {
      if (projects.length < 2) return
      if (animatingRef.current) return
      animatingRef.current = true

      cancelQueuedDrag()
      setIsAnimatingOut(true)
      setDragWithRef({ x: direction * SWIPE_OUT_DISTANCE_PX, y: 0 })

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => {
        setOrder((prev) => (prev.length > 1 ? [...prev.slice(1), prev[0]] : prev))
        setDragWithRef({ x: 0, y: 0 })
        animatingRef.current = false
        setIsAnimatingOut(false)
      }, SWIPE_OUT_MS)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [projects.length, setDragWithRef],
  )

  const endDrag = useCallback(() => {
    cancelQueuedDrag()
    setIsDragging(false)
    pointerIdRef.current = null
    startPointRef.current = null

    const current = dragRef.current
    if (Math.abs(current.x) < SWIPE_THRESHOLD_PX) {
      setIsSnappingBack(true)
      setDragWithRef({ x: 0, y: 0 })
      if (snapTimeoutRef.current) window.clearTimeout(snapTimeoutRef.current)
      snapTimeoutRef.current = window.setTimeout(() => setIsSnappingBack(false), SNAP_BACK_MS)
      return
    }

    cycleNext(current.x > 0 ? 1 : -1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycleNext, setDragWithRef])

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!canInteract) return
      if (animatingRef.current) return
      if (pointerIdRef.current !== null) return
      if ((event.target as HTMLElement | null)?.closest("a,button")) return

      cancelQueuedDrag()
      pointerIdRef.current = event.pointerId
      startPointRef.current = { x: event.clientX, y: event.clientY }
      setIsDragging(true)
      setDragWithRef({ x: 0, y: 0 })

      event.currentTarget.setPointerCapture(event.pointerId)
      event.preventDefault()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [canInteract, setDragWithRef],
  )

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (pointerIdRef.current !== event.pointerId) return
      const start = startPointRef.current
      if (!start) return
      const next = { x: event.clientX - start.x, y: event.clientY - start.y }
      dragRef.current = next
      scheduleDragState(next)
    },
    [scheduleDragState],
  )

  const onPointerUp = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (pointerIdRef.current !== event.pointerId) return
      endDrag()
    },
    [endDrag],
  )

  const onPointerCancel = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (pointerIdRef.current !== event.pointerId) return
      endDrag()
    },
    [endDrag],
  )

  const onLostPointerCapture = useCallback(() => {
    if (pointerIdRef.current === null) return
    endDrag()
  }, [endDrag])

  const visible = useMemo(() => {
    const max = Math.min(MAX_VISIBLE, order.length)
    return order
      .slice(0, max)
      .map((projectIndex, position) => ({ projectIndex, position }))
      .reverse()
  }, [order])

  const activeProject = projects[order[0] ?? 0]

  if (!projects.length) return null

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 lg:max-w-4xl">
      <div className="relative h-[520px] w-full">
        {visible.map(({ projectIndex, position }) => {
          const project = projects[projectIndex]
          const isTop = position === 0

          const offsetY = position * 16
          const scale = 1 - position * 0.05
          const rotate = position * -1.5
          const opacity = Math.max(0, 1 - position * 0.15)

          const x = isTop ? drag.x : 0
          const y = offsetY + (isTop ? drag.y * 0.3 : 0)
          const rotation = rotate + (isTop ? drag.x * 0.05 : 0)

          const transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})`

          const transitionStyle: React.CSSProperties = isDragging && isTop
            ? { transition: "none" }
            : isSnappingBack && isTop
            ? { transition: `transform ${SNAP_BACK_MS}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 300ms ease` }
            : { transition: `transform ${SWIPE_OUT_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 300ms ease` }

          return (
            <article
              key={`${project.title}-${projectIndex}`}
              className={[
                "absolute inset-0 flex flex-col rounded-2xl bg-card p-6 shadow-xl",
                "border border-border/60 motion-reduce:transition-none",
                isTop
                  ? "cursor-grab select-none touch-none active:cursor-grabbing"
                  : "pointer-events-none overflow-hidden",
              ].join(" ")}
              style={{
                transform,
                opacity,
                zIndex: MAX_VISIBLE - position,
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                ...transitionStyle,
              }}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
              onPointerCancel={isTop ? onPointerCancel : undefined}
              onLostPointerCapture={isTop ? onLostPointerCapture : undefined}
              aria-label={project.title}
            >
              {/* Content always rendered — opacity hides it on back cards so it's ready instantly */}
              <div
                style={{
                  opacity: isTop ? 1 : 0,
                  transition: isTop ? "opacity 0.18s ease" : "none",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
                      <Folder className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                      aria-label="GitHub"
                      tabIndex={isTop ? 0 : -1}
                    >
                      <GitBranch className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.live}
                      className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                      aria-label="Live Demo"
                      tabIndex={isTop ? 0 : -1}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <p
                  className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => cycleNext(-1)}
          disabled={!canInteract || isDragging}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-sm transition-colors hover:bg-secondary/60 disabled:opacity-40"
          aria-label="Swipe left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="text-center">
          <p className="text-sm font-medium text-foreground">{activeProject?.title}</p>
          <p className="text-xs text-muted-foreground">Drag the card to swipe</p>
        </div>

        <button
          type="button"
          onClick={() => cycleNext(1)}
          disabled={!canInteract || isDragging}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-sm transition-colors hover:bg-secondary/60 disabled:opacity-40"
          aria-label="Swipe right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

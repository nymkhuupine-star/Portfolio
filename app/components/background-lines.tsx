"use client"

import { useEffect, useMemo, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Point = { x: number; y: number }

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getDocumentPoint(element: HTMLElement, yOffset = 48): Point {
  const rect = element.getBoundingClientRect()
  return {
    x: rect.left + rect.width / 2 + window.scrollX,
    y: rect.top + window.scrollY + yOffset,
  }
}

function buildConnectorPath(start: Point, end: Point, laneOffset: number) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const curve = clamp(Math.abs(dx) * 0.45 + 180, 220, 520)

  const mid1: Point = { x: start.x + dx * 0.15 + laneOffset * 0.9, y: start.y + curve * 0.35 }
  const mid2: Point = { x: start.x + dx * 0.65 - laneOffset * 0.65, y: start.y + dy * 0.55 }

  // small "knot-ish" wiggle near the start
  const k1: Point = { x: start.x + laneOffset * 0.7, y: start.y + 20 }
  const k2: Point = { x: start.x - laneOffset * 0.9, y: start.y + 54 }
  const k3: Point = { x: start.x + laneOffset * 0.65, y: start.y + 86 }

  return [
    `M ${start.x} ${start.y}`,
    `C ${k1.x} ${k1.y}, ${k2.x} ${k2.y}, ${k3.x} ${k3.y}`,
    `C ${mid1.x} ${mid1.y}, ${mid2.x} ${mid2.y}, ${end.x} ${end.y}`,
  ].join(" ")
}

export function BackgroundLines() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const lineRefs = useRef<Array<SVGPathElement | null>>([])
  const knotRefs = useRef<Array<SVGPathElement | null>>([])

  const lanes = useMemo(
    () => [
      { id: "about" },
      { id: "projects" },
      { id: "contact" },
      { id: "stub-1" },
      { id: "stub-2" },
      { id: "stub-3" },
    ],
    [],
  )

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const svg = svgRef.current
    if (!container || !svg) return

    const about = document.getElementById("about")
    const projects = document.getElementById("projects")
    const contact = document.getElementById("contact")
    const hero = document.getElementById("top")

    if (!about || !projects || !contact || !hero) return

    const ctx = gsap.context(() => {
      const refreshGeometry = () => {
        const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
        const docWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)
        container.style.height = `${docHeight}px`
        svg.setAttribute("width", `${docWidth}`)
        svg.setAttribute("height", `${docHeight}`)
        svg.setAttribute("viewBox", `0 0 ${docWidth} ${docHeight}`)

        const heroRect = hero.getBoundingClientRect()
        const origin: Point = {
          x: window.scrollX + heroRect.left + heroRect.width / 2,
          y: window.scrollY + heroRect.top + Math.min(heroRect.height * 0.38, 260),
        }

        const targets: Array<{ el: HTMLElement; laneOffset: number }> = [
          { el: about, laneOffset: -36 },
          { el: projects, laneOffset: 22 },
          { el: contact, laneOffset: -10 },
        ]

        targets.forEach((t, index) => {
          const p = lineRefs.current[index]
          if (!p) return

          const end = getDocumentPoint(t.el, 64)
          p.setAttribute("d", buildConnectorPath(origin, end, t.laneOffset))
        })

        // short stubs to sell the "bundle"
        const stubY = origin.y - 4
        const stubLen = 90
        const stubs = [
          { i: 3, offset: -54 },
          { i: 4, offset: -18 },
          { i: 5, offset: 24 },
        ]
        stubs.forEach((s) => {
          const p = lineRefs.current[s.i]
          if (!p) return
          const x = origin.x + s.offset
          p.setAttribute("d", `M ${x} ${stubY - stubLen} C ${x} ${stubY - 50}, ${origin.x} ${stubY - 26}, ${origin.x} ${origin.y}`)
        })

        // knot strokes (three loops)
        const knots = [
          `M ${origin.x - 28} ${origin.y + 14} C ${origin.x - 74} ${origin.y - 16}, ${origin.x - 2} ${origin.y - 22}, ${origin.x - 24} ${origin.y + 34} C ${origin.x - 44} ${origin.y + 92}, ${origin.x - 104} ${origin.y + 54}, ${origin.x - 68} ${origin.y + 8}`,
          `M ${origin.x + 10} ${origin.y + 6} C ${origin.x - 10} ${origin.y - 42}, ${origin.x + 86} ${origin.y - 28}, ${origin.x + 52} ${origin.y + 24} C ${origin.x + 14} ${origin.y + 82}, ${origin.x - 12} ${origin.y + 42}, ${origin.x + 10} ${origin.y + 6}`,
          `M ${origin.x + 44} ${origin.y + 18} C ${origin.x + 96} ${origin.y - 6}, ${origin.x + 92} ${origin.y + 78}, ${origin.x + 28} ${origin.y + 54} C ${origin.x - 22} ${origin.y + 36}, ${origin.x + 2} ${origin.y - 2}, ${origin.x + 44} ${origin.y + 18}`,
        ]
        knots.forEach((d, i) => {
          const k = knotRefs.current[i]
          if (!k) return
          k.setAttribute("d", d)
        })

        // dash lengths
        lineRefs.current.forEach((path) => {
          if (!path) return
          const length = path.getTotalLength()
          path.style.strokeDasharray = `${length}`
          path.style.strokeDashoffset = `${length}`
        })
      }

      refreshGeometry()
      ScrollTrigger.addEventListener("refreshInit", refreshGeometry)

      const onResize = () => {
        ScrollTrigger.refresh()
      }
      window.addEventListener("resize", onResize, { passive: true })

      const triggers = [
        { el: about, pathIndex: 0 },
        { el: projects, pathIndex: 1 },
        { el: contact, pathIndex: 2 },
      ].map(({ el, pathIndex }) =>
        gsap.to(lineRefs.current[pathIndex], {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "top 30%",
            scrub: 0.7,
          },
        }),
      )

      // stubs: subtle idle draw so the bundle isn't static
      const stubTweens = [3, 4, 5].map((i, n) =>
        gsap.to(lineRefs.current[i], {
          strokeDashoffset: 0,
          duration: 1.1,
          delay: 0.15 * n,
          ease: "power2.out",
        }),
      )

      return () => {
        triggers.forEach((t) => t.kill())
        stubTweens.forEach((t) => t.kill())
        window.removeEventListener("resize", onResize)
        ScrollTrigger.removeEventListener("refreshInit", refreshGeometry)
      }
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10">
      <svg ref={svgRef} className="h-full w-full" preserveAspectRatio="none">
        <g opacity="0.95">
          {lanes.map((lane, index) => (
            <path
              key={lane.id}
              ref={(node) => {
                lineRefs.current[index] = node
              }}
              stroke="var(--bundle-line)"
              strokeWidth={index < 3 ? 10 : 8}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity={index < 3 ? 0.9 : 0.55}
            />
          ))}

          {/* knot (neutral, behind the colored lanes) */}
          {[0, 1, 2].map((i) => (
            <path
              key={`knot-${i}`}
              ref={(node) => {
                knotRefs.current[i] = node
              }}
              stroke="var(--bundle-knot)"
              strokeWidth={18}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

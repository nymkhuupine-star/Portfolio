"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function parseRgba(color: string) {
  const compact = color.replace(/\s+/g, "")
  const match =
    compact.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/i) ??
    compact.match(/^rgb\((\d+),(\d+),(\d+)\)$/i)

  if (!match) return null

  const r = Number(match[1])
  const g = Number(match[2])
  const b = Number(match[3])
  const a = match.length > 4 ? Number(match[4]) : 1

  if ([r, g, b, a].some((n) => Number.isNaN(n))) return null
  return { r, g, b, a: clamp(a, 0, 1) }
}

export function ParticlesBackground({
  className = "",
  density = 0.00008,
  maxDistance = 140,
  dotColor = "rgba(56,189,248,0.95)",
  lineColor = "rgba(56,189,248,0.18)",
}: {
  className?: string
  density?: number
  maxDistance?: number
  dotColor?: string
  lineColor?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let raf = 0

    const mouse = { x: 0, y: 0, active: false }
    let particles: Particle[] = []
    const parsedLine = parseRgba(lineColor)
    const parsedDot = parseRgba(dotColor)
    const lineBase = parsedLine ? `rgb(${parsedLine.r}, ${parsedLine.g}, ${parsedLine.b})` : lineColor
    const dotBase = parsedDot ? `rgb(${parsedDot.r}, ${parsedDot.g}, ${parsedDot.b})` : dotColor
    const lineBaseAlpha = parsedLine?.a ?? 1
    const dotBaseAlpha = parsedDot?.a ?? 1

    const getParticleCount = () => {
      const base = Math.round(width * height * density)
      return clamp(base, 18, 100)
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const rect = parent.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))

      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const nextCount = getParticleCount()
      if (particles.length === nextCount) return

      particles = Array.from({ length: nextCount }, () => ({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        vx: randomBetween(-0.35, 0.35),
        vy: randomBetween(-0.35, 0.35),
        r: randomBetween(1.2, 2.2),
      }))
    }

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
      mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= width && mouse.y <= height
    }

    const onMouseLeave = () => {
      mouse.active = false
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist > maxDistance) continue

          const alpha = (1 - dist / maxDistance) * 0.75
          ctx.strokeStyle = lineBase
          ctx.globalAlpha = alpha * lineBaseAlpha
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }

        if (mouse.active) {
          const dx = a.x - mouse.x
          const dy = a.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDistance * 0.9) {
            const alpha = (1 - dist / (maxDistance * 0.9)) * 0.85
            ctx.strokeStyle = lineBase
            ctx.globalAlpha = alpha * lineBaseAlpha
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      // dots
      ctx.globalAlpha = 0.65 * dotBaseAlpha
      ctx.fillStyle = dotBase
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const step = () => {
      if (!reduceMotion) {
        for (const p of particles) {
          p.x += p.vx
          p.y += p.vy

          if (p.x <= 0 || p.x >= width) p.vx *= -1
          if (p.y <= 0 || p.y >= height) p.vy *= -1

          p.x = clamp(p.x, 0, width)
          p.y = clamp(p.y, 0, height)
        }
      }

      draw()
      raf = window.requestAnimationFrame(step)
    }

    resize()
    step()

    window.addEventListener("resize", resize, { passive: true })
    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("blur", onMouseLeave)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("blur", onMouseLeave)
      window.cancelAnimationFrame(raf)
    }
  }, [density, dotColor, lineColor, maxDistance, reduceMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0 h-full w-full", className].join(" ")}
    />
  )
}

"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

export function TypingAnimation({
  words,
  className = "",
  typingMs = 58,
  deletingMs = 32,
  pauseMs = 1100,
}: {
  words: string[]
  className?: string
  typingMs?: number
  deletingMs?: number
  pauseMs?: number
}) {
  const reduceMotion = useReducedMotion()

  const safeWords = useMemo(() => words.filter(Boolean), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const currentWord = safeWords[wordIndex % Math.max(safeWords.length, 1)] ?? ""

  useEffect(() => {
    if (reduceMotion) return
    if (safeWords.length === 0) return

    const atEnd = charIndex >= currentWord.length
    const atStart = charIndex <= 0

    const delay = deleting
      ? atStart
        ? 180
        : deletingMs
      : atEnd
        ? pauseMs
        : typingMs

    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (!atEnd) setCharIndex((v) => v + 1)
        else setDeleting(true)
        return
      }

      if (!atStart) setCharIndex((v) => v - 1)
      else {
        setDeleting(false)
        setWordIndex((v) => (v + 1) % safeWords.length)
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [
    charIndex,
    currentWord.length,
    deleting,
    deletingMs,
    pauseMs,
    reduceMotion,
    safeWords.length,
    typingMs,
  ])

  const shown = reduceMotion ? currentWord : currentWord.slice(0, charIndex)

  return (
    <span className={["inline-flex items-baseline", className].join(" ")}>
      <span>{shown}</span>
      <motion.span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[0.1em] translate-y-[0.06em] rounded-full bg-current"
        animate={reduceMotion ? { opacity: 1 } : { opacity: [0, 1, 0] }}
        transition={{ duration: 1.05, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
      />
    </span>
  )
}


"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"

type ExpandableScreenContextValue = {
  isExpanded: boolean
  expand: () => void
  collapse: () => void
  layoutId: string
  triggerRadius: string
  contentRadius: string
  animationDuration: number
  lockScroll: boolean
  triggerRef: React.RefObject<HTMLElement | null>
}

const ExpandableScreenContext = createContext<ExpandableScreenContextValue | null>(null)

export function useExpandableScreen() {
  const value = useContext(ExpandableScreenContext)
  if (!value) throw new Error("useExpandableScreen must be used within <ExpandableScreen />")
  return value
}

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ")
}

type ExpandableScreenProps = {
  children: ReactNode
  layoutId?: string
  triggerRadius?: string
  contentRadius?: string
  animationDuration?: number
  defaultExpanded?: boolean
  onExpandChange?: (expanded: boolean) => void
  lockScroll?: boolean
}

export function ExpandableScreen({
  children,
  layoutId = "expandable-screen",
  triggerRadius = "24px",
  contentRadius = "24px",
  animationDuration = 0.32,
  defaultExpanded = false,
  onExpandChange,
  lockScroll = true,
}: ExpandableScreenProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const triggerRef = useRef<HTMLElement | null>(null)

  const expand = useCallback(() => {
    setIsExpanded(true)
    onExpandChange?.(true)
  }, [onExpandChange])

  const collapse = useCallback(() => {
    setIsExpanded(false)
    onExpandChange?.(false)
  }, [onExpandChange])

  useEffect(() => {
    if (!lockScroll) return
    if (!isExpanded) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isExpanded, lockScroll])

  const value = useMemo<ExpandableScreenContextValue>(
    () => ({
      isExpanded,
      expand,
      collapse,
      layoutId,
      triggerRadius,
      contentRadius,
      animationDuration,
      lockScroll,
      triggerRef,
    }),
    [animationDuration, collapse, contentRadius, expand, isExpanded, layoutId, lockScroll, triggerRadius],
  )

  return <ExpandableScreenContext.Provider value={value}>{children}</ExpandableScreenContext.Provider>
}

type ExpandableScreenTriggerProps = {
  children: ReactNode
  className?: string
}

export function ExpandableScreenTrigger({ children, className }: ExpandableScreenTriggerProps) {
  const { isExpanded, expand, triggerRadius, triggerRef } = useExpandableScreen()

  return (
    <div
      ref={(node) => {
        triggerRef.current = node
      }}
      className={cx(isExpanded ? "pointer-events-none opacity-0" : "opacity-100", className)}
      style={{ borderRadius: triggerRadius }}
      onClick={expand}
      role="button"
      tabIndex={isExpanded ? -1 : 0}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return
        event.preventDefault()
        expand()
      }}
    >
      {children}
    </div>
  )
}

type ExpandableScreenContentProps = {
  children: ReactNode
  className?: string
  showCloseButton?: boolean
  closeButtonClassName?: string
  closeButtonLabel?: string
}

export function ExpandableScreenContent({
  children,
  className,
  showCloseButton = true,
  closeButtonClassName,
  closeButtonLabel = "Close",
}: ExpandableScreenContentProps) {
  const { isExpanded, collapse, contentRadius, triggerRadius, animationDuration, triggerRef } = useExpandableScreen()
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [fromRect, setFromRect] = useState<DOMRect | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!isExpanded) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      event.preventDefault()
      collapse()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [collapse, isExpanded])

  useLayoutEffect(() => {
    if (!isExpanded) return
    const rect = triggerRef.current?.getBoundingClientRect() ?? null
    setFromRect(rect)
    setIsVisible(true)
    setIsAnimating(false)

    const raf = window.requestAnimationFrame(() => {
      setIsAnimating(true)
      closeRef.current?.focus()
    })

    return () => window.cancelAnimationFrame(raf)
  }, [isExpanded, triggerRef])

  useEffect(() => {
    if (!isVisible) return
    if (isExpanded) return
    setIsAnimating(false)

    const timeout = window.setTimeout(() => setIsVisible(false), Math.max(0, animationDuration * 1000))
    return () => window.clearTimeout(timeout)
  }, [animationDuration, isExpanded, isVisible])

  if (!isVisible) return null

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches

  const initialRect = fromRect
  const startX = initialRect?.left ?? 0
  const startY = initialRect?.top ?? 0
  const startW = initialRect?.width ?? 1
  const startH = initialRect?.height ?? 1

  const viewportW = typeof window !== "undefined" ? window.innerWidth : 1
  const viewportH = typeof window !== "undefined" ? window.innerHeight : 1

  const scaleX = startW / viewportW
  const scaleY = startH / viewportH

  const durationMs = Math.max(0, Math.round(animationDuration * 1000))

  const shellStyle: CSSProperties = prefersReducedMotion
    ? {}
    : {
        transformOrigin: "top left",
        transform: isAnimating ? "translate3d(0,0,0) scale3d(1,1,1)" : `translate3d(${startX}px, ${startY}px, 0) scale3d(${scaleX}, ${scaleY}, 1)`,
        borderRadius: isAnimating ? contentRadius : triggerRadius,
        transition: `transform ${durationMs}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-radius ${durationMs}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: "transform, border-radius",
      }

  return (
    <div
      className="fixed inset-0 z-50"
      aria-hidden={!isExpanded}
      onMouseDown={(event) => {
        if (event.target !== event.currentTarget) return
        collapse()
      }}
    >
      <div
        className={cx(
          "absolute inset-0 bg-background/70 backdrop-blur-sm",
          isExpanded ? "opacity-100" : "opacity-0",
        )}
        style={
          prefersReducedMotion
            ? undefined
            : {
                transition: `opacity ${durationMs}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                willChange: "opacity",
              }
        }
      />

      <div className="absolute inset-0 p-2 sm:p-4">
        <div
          className={cx(
            "h-full w-full overflow-hidden border border-border/60 bg-card shadow-2xl",
            prefersReducedMotion ? "" : "transform-gpu",
            className,
          )}
          style={shellStyle}
          role="dialog"
          aria-modal="true"
        >
          {showCloseButton ? (
            <div className="flex justify-end p-3 sm:p-4">
              <button
                ref={closeRef}
                type="button"
                onClick={collapse}
                className={cx(
                  "inline-flex h-10 items-center justify-center rounded-full border border-border/60 bg-background px-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  closeButtonClassName,
                )}
                aria-label={closeButtonLabel}
              >
                {closeButtonLabel}
              </button>
            </div>
          ) : null}

          <div className={cx("h-[calc(100%-64px)] overflow-auto px-6 pb-8 sm:px-10", showCloseButton ? "" : "pt-8")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

type ExpandableScreenBackgroundProps = {
  trigger?: ReactNode
  content?: ReactNode
  className?: string
}

export function ExpandableScreenBackground({ trigger, content, className }: ExpandableScreenBackgroundProps) {
  const { isExpanded } = useExpandableScreen()
  return <div className={className}>{isExpanded ? content : trigger}</div>
}

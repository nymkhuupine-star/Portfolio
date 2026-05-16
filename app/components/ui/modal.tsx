"use client"

import { useEffect, useId, useRef, type ReactNode } from "react"
import { X } from "lucide-react"

type ModalSize = "sm" | "md" | "lg"

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  headerActions?: ReactNode
  children: ReactNode
  footer?: ReactNode
  size?: ModalSize
  closeLabel?: string
}

const sizeClassName: Record<ModalSize, string> = {
  sm: "max-w-lg",
  md: "max-w-2xl",
  lg: "max-w-5xl",
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  headerActions,
  children,
  footer,
  size = "md",
  closeLabel = "Хаах",
}: ModalProps) {
  const titleId = useId()
  const descriptionId = useId()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previousActiveRef = useRef<HTMLElement | null>(null)
  const onOpenChangeRef = useRef(onOpenChange)

  useEffect(() => {
    onOpenChangeRef.current = onOpenChange
  }, [onOpenChange])

  useEffect(() => {
    if (!open) return

    previousActiveRef.current = (document.activeElement as HTMLElement | null) ?? null

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      event.preventDefault()
      onOpenChangeRef.current(false)
    }

    window.addEventListener("keydown", onKeyDown)
    const raf = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow

      const previousActive = previousActiveRef.current
      if (previousActive && document.body.contains(previousActive)) {
        previousActive.focus()
      }
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onMouseDown={(event) => {
        if (event.target !== event.currentTarget) return
        onOpenChange(false)
      }}
    >
      <div className="relative grid h-full place-items-center">
        <div
          className={[
            "pointer-events-auto flex w-full max-h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl",
            sizeClassName[size],
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-2 border-b border-border/60 px-4 py-3 sm:px-5 sm:py-4">
            <div className="min-w-0 flex-1">
              <h2 id={titleId} className="truncate text-sm font-semibold text-foreground sm:text-base">
                {title}
              </h2>
              {description ? (
                <p id={descriptionId} className="mt-0.5 truncate text-xs text-muted-foreground">
                  {description}
                </p>
              ) : null}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {headerActions ? <div>{headerActions}</div> : null}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background text-foreground shadow-sm transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                aria-label={closeLabel}
                title={closeLabel}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-auto px-5 py-5">{children}</div>

          {footer ? <div className="border-t border-border/60 px-5 py-4">{footer}</div> : null}
        </div>
      </div>
    </div>
  )
}

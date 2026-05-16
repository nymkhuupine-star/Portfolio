"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within a <Carousel />")
  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); scrollPrev() }
      else if (event.key === "ArrowRight") { event.preventDefault(); scrollNext() }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)
    return () => { api.off("select", onSelect) }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider value={{ carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div
        onKeyDownCapture={handleKeyDown}
        className={`relative ${className ?? ""}`}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={`flex ${orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"} ${className ?? ""}`}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 basis-full ${orientation === "horizontal" ? "pl-4" : "pt-4"} ${className ?? ""}`}
      {...props}
    />
  )
}

function CarouselPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <button
      type="button"
      className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-opacity ${canScrollPrev ? "opacity-100 hover:opacity-90" : "opacity-30 cursor-not-allowed"} ${className ?? ""}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  )
}

function CarouselNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <button
      type="button"
      className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-opacity ${canScrollNext ? "opacity-100 hover:opacity-90" : "opacity-30 cursor-not-allowed"} ${className ?? ""}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  )
}

function CarouselDots({ count, current }: { count: number; current: number }) {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-200 ${i === current ? "w-4 bg-primary" : "w-1.5 bg-foreground/30"}`}
        />
      ))}
    </div>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots, useCarousel, type CarouselApi }

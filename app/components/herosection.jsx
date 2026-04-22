import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-80px)] w-full items-center"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:justify-between">
        {/* LEFT TEXT */}
        <div className="max-w-xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground/70">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Шинэ төсөлд ажиллахад нээлттэй
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-2xl md:text-2xl">
            Сайн байна уу, 
            <br />
            Full-Stack Developer
          </h1>

          <p className="mt-4 text-lg font-medium text-foreground/60 sm:text-xl">
            Modern web experiences, built with care.
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/60">
            React, Next.js, TypeScript ашиглан хурдан ажиллагаатай, цэвэр
            бүтэцтэй, хэрэглэгч төвтэй вэб аппликейшн болон дижитал бүтээгдэхүүн
            хөгжүүлдэг.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              Төслүүд үзэх
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground/5"
            >
              <Download className="h-5 w-5" />
              CV татах
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-10 w-full max-w-sm overflow-visible pt-50 md:mt-0 md:w-[42%]">
          <div className="relative mx-auto w-[90%]">
            <Image
              src="/tablet.png"
              alt="Tablet"
              width={100}
              height={150}
              className="pointer-events-none absolute left-[4%] top-[-33%] z-0 w-[70%] rotate-90 drop-shadow-[0_18px_24px_rgba(0,0,0,0.18)]"
            />

            <Image
              src="/budag.png"
              alt="budag"
              width={302}
              height={532}
              className="pointer-events-none absolute right-[14%] top-[-30%] z-[3] w-[22%] rotate-[14deg] drop-shadow-[0_18px_24px_rgba(0,0,0,0.16)]"
            />

            <Image
              src="/camera.png"
              alt="Camera"
              width={786}
              height={287}
              className="pointer-events-none absolute right-[0%] top-[-30%] z-[2] w-[58%] rotate-90"
            />

            <Image
              src="/nudnii%20shil.png"
              alt="Sunglasses"
              width={1624}
              height={612}
              className="pointer-events-none absolute left-[-6%] top-[-20%] z-[1] w-[62%] rotate-90"
            />

            <Image
              src="/tsetseg.png"
              alt="Flowers"
              width={302}
              height={532}
              className="pointer-events-none absolute right-[-6%] top-[-30%] z-[3] w-[22%] rotate-[14deg]"
            />

            <Image
              src="/pocket.png"
              alt="Pocket"
              width={681}
              height={650}
              priority
              sizes="(min-width: 768px) 448px, 90vw"
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>

          <Image
            src="/chihewch.png"
            alt="Earphones"
            width={280}
            height={888}
            className="pointer-events-none absolute right-2 top-[-10px] z-20 w-[22%] rotate-6 pt-53 md:right-4 md:w-[24%]"
            style={{ clipPath: "inset(12% 0 0 0)" }}
          />
        </div>
      </div>
    </section>
  );
}
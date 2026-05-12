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
        <div className="relative mt-10 w-full max-w-sm overflow-visible pt-40 md:mt-0 md:w-[42%]">
          <div className="relative mx-auto w-[90%]">
            {/* Decorative pocket aura (behind pocket only) */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {/* strong but soft floating shadow */}
              <div className="absolute left-1/2 top-[62%] h-32 w-[75%] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:top-[64%] md:h-36 md:w-[78%]" />

              {/* soft purple/blue gradient glow */}
              <div className="absolute inset-[8%] rounded-full bg-gradient-to-tr from-indigo-300/25 via-purple-200/20 to-cyan-200/20 blur-3xl md:inset-[6%]" />

              {/* elegant curved arrow between text and pocket (does not touch pocket) */}
              {/* <div className="hidden md:block">
                <svg
                  className="absolute left-[30%] top-[52%] z-0 h-[200px] w-[360px] translate-x-[-130%] -translate-y-1/2"
                  viewBox="0 0 360 200"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <marker
                      id="heroPocketArrowHead"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="8"
                      markerHeight="8"
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        fill="#6366f1"
                        fillOpacity="0.45"
                      />
                    </marker>
                  </defs>
                  <path
                    d="M 18 146 C 98 70, 210 52, 322 92"
                    stroke="#6366f1"
                    strokeOpacity="0.45"
                    strokeWidth="2"
                    strokeLinecap="round"
                    markerEnd="url(#heroPocketArrowHead)"
                  />
                </svg>
              </div> */}

              {/* orbit lines wrapping around the pocket */}
              <svg
                className="absolute left-1/2 top-[58%] h-[92%] w-[118%] -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 560 440"
                fill="none"
                aria-hidden="true"
              >
                <ellipse
                  cx="300"
                  cy="230"
                  rx="232"
                  ry="162"
                  transform="rotate(-10 300 230)"
                  stroke="#6366f1"
                  strokeOpacity="0.22"
                  strokeWidth="1.5"
                />
                <ellipse
                  cx="290"
                  cy="228"
                  rx="262"
                  ry="186"
                  transform="rotate(-10 290 228)"
                  stroke="#7c3aed"
                  strokeOpacity="0.18"
                  strokeWidth="1.4"
                  strokeDasharray="10 14"
                />
                <path
                  d="M 92 250 C 140 160, 232 128, 322 132 C 420 136, 474 206, 488 250"
                  stroke="#6366f1"
                  strokeOpacity="0.16"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <Image
              src="/tablet.png"
              alt="Tablet"
              width={100}
              height={150}
              className="pointer-events-none absolute left-[-1%] top-[-33%] z-0 w-[70%] rotate-90 drop-shadow-[0_18px_24px_rgba(0,0,0,0.18)]"
            />

            <Image
              src="/sony.png"
              alt="sony"
              width={302}
              height={532}
              className="pointer-events-none absolute right-[10%] top-[-25%] z-[3] w-[30%] rotate-[36deg] drop-shadow-[0_18px_24px_rgba(0,0,0,0.16)]"
            />

            <Image
              src="/mouse.png"
              alt="Mouse"
              width={1000}
              height={1500}
              className="pointer-events-none absolute right-[-4%] top-[-35%] z-[2] w-[90%] rotate-90"
            />

            <Image
              src="/nudnii%20shil.png"
              alt="Sunglasses"
              width={1624}
              height={612}
              className="pointer-events-none absolute left-[-12%] top-[-20%] z-[1] w-[62%] rotate-90"
            />

            <Image
              src="/miny.png"
              alt="miny"
              width={302}
              height={532}
              className="pointer-events-none absolute right-[-6%] top-[-30%] z-[3] w-[30%] rotate-[14deg]"
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

            {/* floating tech badges (outside the pocket only) */}
            <div className="pointer-events-none absolute inset-0 z-20 select-none">
              {/* top-left */}
              <div className="absolute left-[-18%] top-[18%] grid size-[42px] place-items-center rounded-full border border-violet-500/15 bg-white/90 text-[12px] font-semibold text-violet-600 shadow-[0_14px_40px_rgba(124,58,237,0.14)] opacity-90 backdrop-blur-md md:left-[-20%] md:top-[22%]">
                {"</>"}
              </div>
              {/* top-right */}
              <div className="absolute right-[-18%] top-[14%] grid size-[42px] place-items-center rounded-full border border-indigo-500/15 bg-white/90 text-[12px] font-semibold text-indigo-600 shadow-[0_14px_40px_rgba(99,102,241,0.14)] opacity-90 backdrop-blur-md md:right-[-22%] md:top-[18%]">
                TS
              </div>
              {/* bottom-right */}
              <div className="absolute bottom-[10%] right-[-22%] grid size-[42px] place-items-center rounded-full border border-violet-500/15 bg-white/90 text-[11px] font-semibold text-violet-600 shadow-[0_14px_40px_rgba(124,58,237,0.12)] opacity-90 backdrop-blur-md md:bottom-[14%] md:right-[-26%]">
                API
              </div>
            </div>

            <Image
              src="/404.png"
              alt="404 sticker"
              width={500}
              height={500}
              className="pointer-events-none absolute left-[55%] top-[52%] z-[16] w-[18%] rotate-[8deg] drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)] md:left-[58%] md:top-[56%] md:w-[14%]"
            />

            {/* <Image
              src="/git.png"
              alt="Git sticker"
              width={500}
              height={500}
              className="pointer-events-none absolute left-[18%] top-[62%] z-[16] w-[16%] -rotate-[10deg] drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)] md:left-[22%] md:top-[68%] md:w-[12%]"
            /> */}

            <Image
              src="/developer.png"
              alt="Developer sticker"
              width={500}
              height={500}
              className="pointer-events-none absolute left-[9%] top-[10%] z-[15] w-[25%] -rotate-6 drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)] md:left-[20%] md:top-[40%] md:w-[16%]"
            />
          </div>

          <Image
            src="/chihewch.png"
            alt="Earphones"
            width={280}
            height={888}
            className="pointer-events-none absolute right-2 top-[-51px] z-20 w-[22%] rotate-6 pt-53 md:right-4 md:w-[24%]"
            style={{ clipPath: "inset(12% 0 0 0)" }}
          />
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const COPY = {
  mn: {
    status: "Шинэ төсөлд ажиллахад нээлттэй",
    greeting: "Сайн байна уу,",
    role: "Full-Stack Developer",
    tagline: "Дижитал бүтээгдэхүүнийг төгс гүйцэтгэлтэй бүтээнэ.",
    description:
      "React, Next.js болон TypeScript экосистемд суурилан, хэрэглэгчийн хэрэгцээнд бүрэн нийцсэн, өндөр хурдтай, цэвэр кодын бүтэцтэй вэб аппликейшнуудыг хөгжүүлдэг.",
    viewProjects: "Төслүүд үзэх",
    downloadCv: "CV татах",
  },
  en: {
    status: "Open to new projects",
    greeting: "Hello,",
    role: "Full-Stack Developer",
    tagline: "I build high-performing digital products.",
    description:
      "I build fast, user-focused web applications with clean architecture—grounded in the React, Next.js, and TypeScript ecosystem.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
  },
};

export default function HeroSection({ locale = "mn" }) {
  const t = locale === "en" ? COPY.en : COPY.mn;
  return (
    <section
      id="top"
      className="flex w-full overflow-x-hidden items-center md:min-h-[calc(100svh-80px)]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:justify-between">
        {/* LEFT TEXT */}
        <div className="max-w-xl text-center md:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground/70 ring-1 ring-foreground/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.status}
          </div>

          {/* Heading */}
         {/* Heading */}
<h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.25]">
  {t.greeting} 
  <br className="hidden sm:block" />
  <span className="inline-block pb-2 text-foreground/90 underline decoration-indigo-500 decoration-wavy decoration-2">
    {t.role}
  </span>
</h1>


          {/* Tagline */}
          <p className="mt-6 text-lg font-bold tracking-wide text-foreground/80 sm:text-xl">
            {t.tagline}
          </p>

          {/* Description */}
          <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/60">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center md:justify-start">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-md transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.02] sm:w-auto"
            >
              {t.viewProjects}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/cv.pdf"
              className="hidden sm:inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground/5 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              {t.downloadCv}
            </a>
          </div>
        </div>

      {/* RIGHT IMAGE */}
      <div className="relative mt-8 w-full max-w-[22rem] overflow-visible pt-28 sm:mt-10 sm:max-w-sm sm:pt-32 md:mt-0 md:w-[42%] md:max-w-none md:pt-40">
        <div className="relative mx-auto w-full sm:w-[90%]">
    
    {/* ХӨДӨЛГӨӨНГҮЙ, ЦЭВЭРХЭН АРЫН СҮҮДЭР БА ЗУРААСНУУД */}
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Жишээ зураг дээрх шиг уусгалттай маш зөөлөн цэнхэр/нил ягаан туяа */}
      <div className="absolute top-[45%] left-[50%] h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-cyan-500/5 blur-[100px]" />

      {/* Халаасны ард байх бодит гүн сүүдэр */}
      <div className="absolute left-1/2 top-[62%] h-36 w-[80%] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:top-[64%] md:h-40 md:w-[82%]" />

      {/* Жишээ зураг шиг маш нарийн, бүдгэрсэн хөдөлгөөнгүй тойрог шугамууд */}
      <svg
        className="absolute left-1/2 top-[58%] h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        viewBox="0 0 560 440"
        fill="none"
        aria-hidden="true"
      >
        {/* Нэгдүгээр нарийн шугам */}
        <ellipse
          cx="290"
          cy="225"
          rx="250"
          ry="180"
          transform="rotate(-12 290 225)"
          stroke="currentColor"
          className="text-indigo-500/15"
          strokeWidth="1"
        />
        {/* Хоёрдугаар тасархай шугам */}
        <ellipse
          cx="285"
          cy="223"
          rx="280"
          ry="205"
          transform="rotate(-12 285 223)"
          stroke="currentColor"
          className="text-purple-500/10"
          strokeWidth="1"
          strokeDasharray="6 12"
        />
        {/* Жишээ зураг дээрх шиг зүүн доороос дээш чиглэсэн зөөлөн угалз шугам */}
        <path
          d="M 40 280 C 120 160, 250 110, 370 130 C 450 145, 480 210, 500 270"
          stroke="currentColor"
          className="text-cyan-500/20"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>
    </div>

            {/* YOUR ORIGINAL IMAGES AND POSITIONS - NOT CHANGED */}
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

            {/* Floating tech badges */}
            <div className="pointer-events-none absolute inset-0 z-20 select-none hidden md:block">
              <div className="absolute left-[-18%] top-[18%] grid size-[42px] place-items-center rounded-full border border-violet-500/15 bg-white/90 text-[12px] font-semibold text-violet-600 shadow-[0_14px_40px_rgba(124,58,237,0.14)] opacity-90 backdrop-blur-md md:left-[-20%] md:top-[22%] hover:scale-110 transition-transform">
                {"</>"}
              </div>
              <div className="absolute right-[-18%] top-[14%] grid size-[42px] place-items-center rounded-full border border-indigo-500/15 bg-white/90 text-[12px] font-semibold text-indigo-600 shadow-[0_14px_40px_rgba(99,102,241,0.14)] opacity-90 backdrop-blur-md md:right-[-22%] md:top-[18%] hover:scale-110 transition-transform">
                TS
              </div>
              <div className="absolute bottom-[10%] right-[-22%] grid size-[42px] place-items-center rounded-full border border-violet-500/15 bg-white/90 text-[11px] font-semibold text-violet-600 shadow-[0_14px_40px_rgba(124,58,237,0.12)] opacity-90 backdrop-blur-md md:bottom-[14%] md:right-[-26%] hover:scale-110 transition-transform">
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
            className="pointer-events-none absolute right-2 top-[180px] z-20 hidden w-[22%] rotate-6 md:block md:right-4 md:top-[120px] md:w-[24%]"
            style={{ clipPath: "inset(12% 0 0 0)" }}
          />
        </div>
      </div>
    </section>
  );
}

"use client"

import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "./ui/expandable-screen"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        {/* LEFT */}
        <div className="pt-2">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 shadow-sm">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-foreground/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 8l8 5 8-5" />
              <path d="M4 8v10h16V8" />
            </svg>
          </div>

          <h2 className="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl">Холбоо барих</h2>
          <p className="mt-4 text-xl font-medium text-foreground/60">Хамтран ажиллацгаая</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg">
            Шинэ төсөл эхлүүлэх, хамтран ажиллах, эсвэл зүгээр л мэндлэх бол чөлөөтэй холбогдоорой.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
            <a href="mailto:hello@batbold.dev" className="transition-colors hover:text-foreground">
              hello@batbold.dev
            </a>
            <span className="hidden text-foreground/30 sm:inline">•</span>
            <span>Улаанбаатар, Монгол</span>
          </div>
        </div>

        {/* RIGHT */}
        <ExpandableScreen layoutId="contact-screen" triggerRadius="24px" contentRadius="24px">
          <ExpandableScreenTrigger className="cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-8 shadow-sm sm:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-transparent"
              />

              <div className="relative">
                <p className="text-sm font-semibold tracking-widest text-foreground/70 uppercase">Contact</p>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">Мессеж үлдээх</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/60">
                  Энд дарж form-оо бүтэн дэлгэцээр нээгээрэй. (Esc дарж хааж болно.)
                </p>

                <div className="mt-8 inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground/90">
                  Form нээх
                </div>
              </div>
            </div>
          </ExpandableScreenTrigger>

          <ExpandableScreenContent className="bg-card" closeButtonLabel="Хаах">
            <div className="mx-auto w-full max-w-2xl">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Мессеж үлдээх</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Би ихэвчлэн 24–48 цагийн дотор хариу өгдөг. (Нэр, имэйл заавал.)
              </p>

              <div className="relative mt-10 overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 shadow-sm sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-transparent"
                />

                <form className="relative space-y-7">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70">Нэр</label>
                    <input
                      type="text"
                      placeholder="Таны нэр"
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/40 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70">Имэйл</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/40 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70">Байгууллага (сонголтоор)</label>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/40 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70">Мессеж</label>
                    <textarea
                      placeholder="Энд бичээрэй..."
                      className="min-h-[160px] w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/40 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                  >
                    Мессеж илгээх
                  </button>
                </form>
              </div>
            </div>
          </ExpandableScreenContent>
        </ExpandableScreen>
      </div>
    </section>
  )
}

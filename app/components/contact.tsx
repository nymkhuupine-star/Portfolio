"use client"

import { useState } from "react"
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "./ui/expandable-screen"

export function Contact() {
  // Формын датаг хадгалах state-үүд
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("") // ШИНЭ: Утасны дугаар хадгалах state
  const [clientType, setClientType] = useState<"individual" | "company">("individual")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  
  // Процесс хянах state-үүд
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !phone || !message) return alert("Шаардлагатай талбаруудыг бөглөнө үү.")
    if (clientType === "company" && !company) return alert("Байгууллагын нэрийг оруулна үү.")

    setLoading(true)
    setStatus("idle")

    try {
      // Имэйл болон утасны дугаарыг компанитай нь нэгтгэж текст үүсгэх
      const baseContact = `${email} | Утас: ${phone}`;
      const contactInfo = clientType === "company" ? `${baseContact} (${company})` : baseContact;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact: contactInfo,
          message,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setPhone("") // Форм амжилттай болбол утасны дугаарыг цэвэрлэх
        setCompany("")
        setMessage("")
        setClientType("individual")
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

return (
  <section id="contact" className="px-6 py-24 md:py-32">
    <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
      
      {/* LEFT: Мэдээллийн хэсэг */}
      <div className="flex flex-col justify-center space-y-6 lg:max-w-lg">
        {/* Интерактив Баж (Pill Badge) */}
        <div>
          <span className="inline-flex items-center gap-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Хамтран ажиллацгаая
          </span>
        </div>

        {/* Гарчиг (Гөлгөр уусөлттэй) */}
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent">
            Холбоо барих
          </h2>
          <p className="text-base leading-relaxed text-foreground/60 sm:text-lg">
            Шинэ төсөл эхлүүлэх, бизнесийнхээ борлуулалтыг өсгөх вэб сайт хийлгэх бол чөлөөтэй холбогдоорой. Таны санааг бодит болгоход бэлэн байна.
          </p>
        </div>

        {/* Холбоосууд (Цэвэрхэн, иконтой бүтэц) */}
        <div className="pt-6 flex flex-col gap-y-4 border-t border-foreground/5 text-sm sm:text-base text-foreground/70">
          <a 
            href="mailto:hello@nyamkhuu.dev" 
            className="flex items-center gap-x-3 group w-fit transition-colors hover:text-foreground"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/10 bg-foreground/[0.02] transition-colors group-hover:border-foreground/20">
              <svg className="h-4 w-4 text-foreground/60 group-hover:text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="font-medium underline underline-offset-4 decoration-foreground/20 group-hover:decoration-foreground transition-all">hello@nyamkhuu.dev</span>
          </a>

          <div className="flex items-center gap-x-3 text-foreground/60">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/10 bg-foreground/[0.02]">
              <svg className="h-4 w-4 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <span className="font-medium">Улаанбаатар, Монгол</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Сонголт болон Форм (Дэвсгэрийг хэвээр үлдээв) */}
      <ExpandableScreen layoutId="contact-screen" triggerRadius="24px" contentRadius="24px">
        <ExpandableScreenTrigger className="cursor-pointer group block">
          <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-8 shadow-sm transition-all duration-300 group-hover:border-foreground/20 sm:p-10">
                    
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.45] dark:opacity-[0.25] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px] text-foreground/15 dark:text-foreground/35"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-transparent"
            />


            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-wider text-foreground/40 uppercase">Contact Form</p>
              <h3 className="mt-3 text-2xl font-bold text-foreground tracking-tight">Мессеж үлдээх</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-foreground/50">
                Энд дарж формыг бүтэн дэлгэцээр нээнэ үү. Esc дарж хаах боломжтой.
              </p>

              <div className="mt-6 inline-flex items-center justify-center gap-x-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-all duration-200 hover:bg-foreground/90 group-hover:translate-x-0.5">
                <span>Форм нээх</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </ExpandableScreenTrigger>


          <ExpandableScreenContent className="bg-background/95 backdrop-blur-md" closeButtonLabel="Хаах">
            <div className="mx-auto w-full max-w-xl px-4 py-12 sm:px-0">
              <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Мессеж үлдээх</h3>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                Би утсан дээрээ шууд хүлээж авдаг тул ихэвчлэн <span className="font-semibold text-foreground">1-2 цагийн дотор</span> хариу өгнө.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.01] p-6 shadow-sm sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px]"
                />
                
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  
                  {/* Төрөл сонгох хэсэг */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Та хэн бэ? *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setClientType("individual")}
                        className={`flex items-center justify-center gap-x-2 rounded-xl border p-3 text-sm font-medium transition-all ${
                          clientType === "individual"
                            ? "border-foreground bg-foreground text-background shadow-sm"
                            : "border-foreground/10 bg-background text-foreground hover:bg-foreground/[0.02]"
                        }`}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Хувь хүн</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setClientType("company")}
                        className={`flex items-center justify-center gap-x-2 rounded-xl border p-3 text-sm font-medium transition-all ${
                          clientType === "company"
                            ? "border-foreground bg-foreground text-background shadow-sm"
                            : "border-foreground/10 bg-background text-foreground hover:bg-foreground/[0.02]"
                        }`}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Байгууллага</span>
                      </button>
                    </div>
                  </div>

                  {/* Нэр оруулах хэсэг */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Нэр *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Таны нэр"
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/30 transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>

                  {/* ШИНЭЧЛЭГДСЭН: Имэйл болон Утасны дугаарыг 2 багана болгов */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Имэйл *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@email.com"
                        className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/30 transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Утасны дугаар *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="99xxxxxx"
                        className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/30 transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>
                  </div>

                  {/* Нөхцөлт талбар: Зөвхөн "Байгууллага" сонгосон үед харагдана */}
                  {clientType === "company" && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Байгууллагын нэр *</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Компанийн нэрээ оруулна уу"
                        className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/30 transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Мессеж *</label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ямар чиглэлийн вэб сайт хийлгэх хүсэлтэй байгаагаа бичээрэй..."
                      className="min-h-[140px] w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-foreground/30 transition-all duration-200 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>

                  {status === "success" && (
                    <div className="flex items-center gap-x-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Амжилттай илгээгдлээ. Танд тун удахгүй хариу өгөх болно!</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-x-2 rounded-xl bg-destructive/5 border border-destructive/10 p-4 text-sm font-medium text-destructive">
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Илгээхэд алдаа гарлаа. Дахин оролдох эсвэл шууд имэйлээр холбогдоно уу.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-sm transition-all duration-200 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30 disabled:opacity-50"
                  >
                    {loading && (
                      <svg className="animate-spin h-4 w-4 text-background" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    )}
                    <span>{loading ? "Илгээж байна..." : "Мессеж илгээх"}</span>
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

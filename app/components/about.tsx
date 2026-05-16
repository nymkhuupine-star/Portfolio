import { Code2, Lightbulb, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Веб хөгжүүлэлт",
    description: "Хэрэгцээнд тохирсон, функциональ, цэвэр кодтой веб сайт болон веб апп хөгжүүлнэ",
    // Карт бүрийн гэрэлтэх өнгөний Tailwind классуудыг массивт нэмэв
    glowClass: "border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    glowBg: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    icon: Lightbulb,
    title: "Responsive дизайн",
    description: "Бүх төхөөрөмж дээр зөв харагдах, хэрэглэгчийн туршлагад төвлөрсөн responsive дизайн хийнэ",
    glowClass: "border-green-500/20 shadow-[0_0_20px_rgba(32,192,92,0.05)] hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(32,192,92,0.15)]",
    glowBg: "bg-green-500/10",
    iconColor: "text-green-500"
  },
  {
    icon: Users,
    title: "Хамтран ажиллах",
    description: "Таны санааг бодит болгоход нээлттэй, хариуцлагатай хамтарч ажиллахад бэлэн байна",
    glowClass: "border-amber-500/20 shadow-[0_0_20px_rgba(255,194,51,0.05)] hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(255,194,51,0.15)]",
    glowBg: "bg-amber-500/10",
    iconColor: "text-amber-500"
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ЗҮҮН ТАЛ: ТЕКСТ ХЭСЭГ */}
          <div>
            <p className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase">
              Миний тухай
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Орчин үеийн дизайн болон хурдан ажиллагаатай веб сайт бүтээдэг
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
               Би Next.js, React, Tailwind CSS ашиглан хурдан, ойлгомжтой, хэрэглэгчдэд ээлтэй вэб сайт болон dashboard хөгжүүлдэг full-stack developer.
              </p>
              <p>
               Business website, portfolio, landing page, admin dashboard зэрэг веб шийдлүүдийг цэвэрхэн дизайн болон responsive бүтэцтэйгээр хөгжүүлдэг. </p>
              <p>
                Миний зорилго бол зөвхөн гоё харагдах биш, ашиглахад амар, найдвартай, бодит хэрэгцээ шийддэг бүтээгдэхүүн бүтээх юм.
              </p>
            </div>
          </div>
          
          {/* БАРУУН ТАЛ: ГЭРЭЛТЭХ ХҮРЭЭТЭЙ 3 КАРТ */}
          <div className="space-y-7.5 pt-12">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden flex gap-5 p-5.5  rounded-[28px] bg-card/60 border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${item.glowClass}`}
              >
                {/* Булангийн зөөлөн неон туяа (Glow Effect) */}
                <div className={`absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl opacity-70 ${item.glowBg}`} />

                {/* Икон хэсэг - Өнгө нь карт бүрийн хүрээтэй ижилссэн */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center relative z-10">
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                {/* Текст хэсэг */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

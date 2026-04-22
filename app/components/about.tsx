import { Code2, Lightbulb, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Цэвэр код",
    description: "Засвар хийхэд хялбар, масштаблагдах код бичдэг",
  },
  {
    icon: Lightbulb,
    title: "Шийдэл хайгч",
    description: "Бодит асуудлыг технологиор шийддэг",
  },
  {
    icon: Users,
    title: "Багийн тоглогч",
    description: "Харилцаа сайтай, хамтран ажиллах дуртай",
  },
]

export function About() {
  return (
    <section id="about" className="py-28 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase">
              Миний тухай
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Технологи болон бүтээлч байдлыг нэгтгэдэг
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Би 5+ жилийн туршлагатай full-stack developer. Хэрэглэгчдэд 
                хялбар, хурдан, найдвартай вэб шийдлүүд бий болгоход чиглэсэн.
              </p>
              <p>
                Өдөр тутам шинэ технологи сурч, өөрийгөө хөгжүүлж байдаг. 
                Нээлттэй эхийн төслүүдэд оролцох, залуу хөгжүүлэгчдэд туслах дуртай.
              </p>
              <p>
                Миний зорилго бол технологийг ашиглан хүмүүсийн амьдралыг 
                илүү хялбар болгох юм.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
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

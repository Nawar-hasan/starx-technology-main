import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { Code2, Bot, Brain, Cloud, Shield, BarChart3, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Code2,
    title: "تطوير تطبيقات الويب والموبايل",
    description: "نبني تطبيقات حديثة وسريعة باستخدام أحدث التقنيات",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "تطبيقات ويب متجاوبة باستخدام React و Next.js",
      "تطبيقات موبايل أصلية وهجينة (Flutter, React Native)",
      "واجهات مستخدم حديثة وسهلة الاستخدام",
      "تكامل مع APIs والخدمات الخارجية",
      "أداء عالي وتحميل سريع",
    ],
    technologies: ["React", "Next.js", "Flutter", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Bot,
    title: "إنشاء بوتات ذكية",
    description: "روبوتات محادثة وأتمتة ذكية لتحسين تجربة العملاء",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    features: [
      "بوتات محادثة ذكية باستخدام GPT و Claude",
      "أتمتة العمليات التجارية (RPA)",
      "تكامل مع WhatsApp و Telegram و Discord",
      "معالجة اللغة الطبيعية بالعربية والإنجليزية",
      "تحليل المشاعر وفهم السياق",
    ],
    technologies: ["OpenAI", "Claude", "LangChain", "Python", "Node.js", "Telegram API"],
  },
  {
    icon: Brain,
    title: "حلول الذكاء الاصطناعي",
    description: "نماذج AI مخصصة ومعالجة اللغة الطبيعية والرؤية الحاسوبية",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      "نماذج تعلم آلي مخصصة لأعمالك",
      "معالجة وتحليل النصوص العربية",
      "رؤية حاسوبية وتحليل الصور",
      "أنظمة توصية ذكية",
      "تحليل تنبؤي واتخاذ قرارات",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Computer Vision", "NLP"],
  },
  {
    icon: Cloud,
    title: "تكامل الأنظمة والحلول السحابية",
    description: "ربط أنظمتك ونشرها على السحابة",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    features: [
      "نشر التطبيقات على AWS و Azure و Google Cloud",
      "تكامل الأنظمة المختلفة عبر APIs",
      "بنية تحتية قابلة للتوسع",
      "إدارة قواعد البيانات السحابية",
      "مراقبة وتحسين الأداء",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Shield,
    title: "الأمن السيبراني",
    description: "حماية بياناتك وأنظمتك من التهديدات الإلكترونية",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    features: [
      "تقييم أمني شامل للأنظمة",
      "اختبار الاختراق والثغرات",
      "تشفير البيانات والاتصالات",
      "إدارة الهويات والصلاحيات",
      "مراقبة التهديدات والاستجابة",
    ],
    technologies: ["OAuth", "JWT", "SSL/TLS", "Firewall", "SIEM", "Penetration Testing"],

  },
  {
    icon: BarChart3,
    title: "تحليل البيانات والتنبؤ",
    description: "استخراج رؤى قيمة من بياناتك",
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    features: [
      "تحليل البيانات الضخمة",
      "لوحات معلومات تفاعلية",
      "نماذج تنبؤية للمبيعات والطلب",
      "تحليل سلوك العملاء",
      "تقارير وإحصائيات متقدمة",
    ],
    technologies: ["Python", "Pandas", "Power BI", "Tableau", "SQL", "Machine Learning"],
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">خدماتنا التقنية المتكاملة</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              نقدم مجموعة شاملة من الحلول التقنية المتطورة لتلبية احتياجات أعمالك في العصر الرقمي
            </p>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="space-y-8">
                  {/* Service Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                      <p className="text-lg text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-bold mb-4">المميزات الرئيسية</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">التقنيات المستخدمة</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-muted border border-border text-sm font-mono hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {index < services.length - 1 && <div className="border-t border-border" />}
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Card className="bg-gradient-to-l from-primary/20 via-secondary/20 to-accent/20 border-primary/20">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">لم تجد ما تبحث عنه؟</h2>
                <p className="text-lg text-muted-foreground">
                  نقدم حلولاً مخصصة تماماً لاحتياجاتك. تواصل معنا لمناقشة مشروعك
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    تواصل معنا الآن
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

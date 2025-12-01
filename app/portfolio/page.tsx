import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Brain, ShoppingCart, Building2, Smartphone, Globe } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "منصة التجارة الإلكترونية الذكية",
    category: "تطبيق ويب",
    icon: ShoppingCart,
    description: "منصة تجارة إلكترونية متكاملة مع نظام توصيات ذكي يعتمد على AI لتحسين تجربة التسوق",
    image: "/modern-ecommerce-dashboard-with-ai-recommendations.jpg",
    challenge: "بناء نظام توصيات ذكي يفهم سلوك المستخدمين ويقترح منتجات مناسبة",
    solution: "استخدمنا خوارزميات التعلم الآلي لتحليل سلوك المستخدمين وبناء نموذج توصيات مخصص",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Stripe"],
    results: ["زيادة المبيعات بنسبة 45%", "تحسين معدل التحويل 35%", "رضا العملاء 98%"],
    link: "#",
  },
  {
    id: 2,
    title: "بوت خدمة العملاء الذكي",
    category: "ذكاء اصطناعي",
    icon: Brain,
    description: "روبوت محادثة ذكي يدعم العربية والإنجليزية مع قدرة على فهم السياق والرد بشكل طبيعي",
    image: "/ai-chatbot-interface-with-arabic-support.jpg",
    challenge: "بناء بوت يفهم اللغة العربية بشكل طبيعي ويتعامل مع استفسارات معقدة",
    solution: "دمجنا نماذج GPT مع قاعدة معرفية مخصصة وتدريب على بيانات العميل",
    technologies: ["OpenAI GPT", "LangChain", "Node.js", "React", "MongoDB"],
    results: ["تقليل وقت الاستجابة 80%", "معالجة 10,000+ استفسار شهرياً", "توفير 60% من تكاليف الدعم"],
    link: "#",
  },
  {
    id: 3,
    title: "نظام إدارة المشاريع السحابي",
    category: "تطبيق ويب",
    icon: Building2,
    description: "منصة شاملة لإدارة المشاريع والفرق مع تكامل كامل مع أدوات العمل الشائعة",
    image: "/project-management-dashboard-with-kanban-boards.jpg",
    challenge: "بناء نظام قابل للتوسع يدعم آلاف المستخدمين مع أداء عالي",
    solution: "استخدمنا بنية Microservices على AWS مع تحسينات أداء متقدمة",
    technologies: ["React", "Node.js", "AWS", "Docker", "Redis", "PostgreSQL"],
    results: ["دعم 5000+ مستخدم نشط", "وقت تحميل أقل من ثانية", "توفر 99.9%"],
    link: "#",
  },
  {
    id: 4,
    title: "تطبيق توصيل الطعام",
    category: "تطبيق موبايل",
    icon: Smartphone,
    description: "تطبيق موبايل متكامل لطلب وتوصيل الطعام مع تتبع مباشر للطلبات",
    image: "/food-delivery-app.png",
    challenge: "بناء تطبيق سريع وسلس مع نظام تتبع دقيق في الوقت الفعلي",
    solution: "طورنا تطبيق Flutter مع backend قوي وتكامل مع خرائط Google",
    technologies: ["Flutter", "Firebase", "Node.js", "Google Maps", "Stripe"],
    results: ["50,000+ تحميل", "تقييم 4.8 نجوم", "معدل استخدام يومي 70%"],
    link: "#",
  },
  {
    id: 5,
    title: "نظام تحليل البيانات التنبؤي",
    category: "ذكاء اصطناعي",
    icon: Brain,
    description: "نظام متقدم لتحليل البيانات والتنبؤ بالمبيعات والطلب باستخدام Machine Learning",
    image: "/data-analytics-dashboard-with-predictive-charts.jpg",
    challenge: "بناء نماذج تنبؤية دقيقة تأخذ في الاعتبار عوامل متعددة",
    solution: "استخدمنا خوارزميات ML متقدمة مع تحليل البيانات التاريخية",
    technologies: ["Python", "Scikit-learn", "Pandas", "Power BI", "Azure"],
    results: ["دقة تنبؤ 92%", "تحسين إدارة المخزون 40%", "تقليل الهدر 35%"],
    link: "#",
  },
  {
    id: 6,
    title: "موقع شركة تقنية",
    category: "تطبيق ويب",
    icon: Globe,
    description: "موقع شركة حديث ومتجاوب مع تأثيرات تفاعلية وأداء ممتاز",
    image: "/modern-tech-company-website-with-animations.jpg",
    challenge: "بناء موقع سريع وجذاب مع تأثيرات متقدمة دون التأثير على الأداء",
    solution: "استخدمنا Next.js مع تحسينات SSR وتأثيرات Framer Motion",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: ["سرعة تحميل 95/100", "زيادة التحويلات 50%", "تحسين SEO 80%"],
    link: "#",
  },
]

const categories = ["الكل", "تطبيق ويب", "تطبيق موبايل", "ذكاء اصطناعي"]

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">مشاريعنا الناجحة</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              نفخر بما أنجزناه لعملائنا من حلول تقنية مبتكرة ساهمت في نجاح أعمالهم
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="pb-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "الكل" ? "default" : "outline"}
                  className={
                    category === "الكل"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border hover:bg-card"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => {
                const Icon = project.icon
                return (
                  <Card
                    key={project.id}
                    className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group"
                  >
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden bg-muted">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 space-y-4">
                        {/* Header */}
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded bg-muted text-xs font-mono text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Results */}
                        <div className="space-y-2">
                          <div className="text-sm font-bold">النتائج:</div>
                          <div className="flex flex-wrap gap-2">
                            {project.results.map((result) => (
                              <Badge key={result} variant="outline" className="text-xs">
                                {result}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <Button
                          variant="outline"
                          className="w-full group/btn border-border hover:bg-card bg-transparent"
                        >
                          عرض تفاصيل المشروع
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">هل لديك مشروع في ذهنك؟</h2>
            <p className="text-lg text-muted-foreground mb-8">دعنا نساعدك في تحويله إلى واقع</p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                ابدأ مشروعك الآن
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

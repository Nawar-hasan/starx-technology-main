import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { Brain, MessageSquare, TrendingUp, Eye, Zap, Database, Check, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"

const aiSolutions = [
  {
    icon: MessageSquare,
    title: "توليد النصوص والمحادثة",
    description: "أنظمة محادثة ذكية تفهم السياق وتولد محتوى عالي الجودة",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "بوتات محادثة ذكية بالعربية والإنجليزية",
      "توليد محتوى تسويقي وإبداعي",
      "ملخصات تلقائية للنصوص الطويلة",
      "ترجمة ذكية متعددة اللغات",
      "مساعدين افتراضيين للعملاء",
    ],
    useCases: [
      "خدمة العملاء الآلية 24/7",
      "إنشاء محتوى للمدونات ووسائل التواصل",
      "مساعد كتابة للموظفين",
      "نظام أسئلة وأجوبة ذكي",
    ],
  },
  {
    icon: TrendingUp,
    title: "تحليل البيانات والتنبؤ",
    description: "نماذج تعلم آلي للتنبؤ باتجاهات السوق واتخاذ قرارات ذكية",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    features: [
      "تنبؤ بالمبيعات والطلب",
      "تحليل سلوك العملاء",
      "كشف الاحتيال والأنماط الشاذة",
      "تحسين الأسعار الديناميكي",
      "تحليل المشاعر من التعليقات",
    ],
    useCases: [
      "التنبؤ بالمخزون والطلب",
      "تحليل أداء الحملات التسويقية",
      "كشف المعاملات المشبوهة",
      "تحسين استراتيجيات التسعير",
    ],
  },
  {
    icon: Eye,
    title: "رؤية حاسوبية",
    description: "تحليل الصور والفيديو لاستخراج معلومات قيمة",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      "التعرف على الوجوه والأشخاص",
      "تصنيف وتحليل الصور",
      "كشف الأشياء والعد التلقائي",
      "قراءة النصوص من الصور (OCR)",
      "تحليل الفيديو في الوقت الفعلي",
    ],
    useCases: ["أنظمة الأمن والمراقبة", "فحص جودة المنتجات", "تحليل حركة المرور والزوار", "رقمنة المستندات"],
  },
  {
    icon: Zap,
    title: "روبوتات مخصصة للأعمال",
    description: "أتمتة ذكية للعمليات التجارية المعقدة",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    features: [
      "أتمتة سير العمل والمهام المتكررة",
      "معالجة المستندات تلقائياً",
      "تكامل مع أنظمة ERP و CRM",
      "جدولة ذكية للمواعيد",
      "إدارة البريد الإلكتروني الذكية",
    ],
    useCases: [
      "أتمتة معالجة الطلبات",
      "إدارة الموارد البشرية",
      "معالجة الفواتير والمدفوعات",
      "جدولة الاجتماعات والمهام",
    ],
  },
]

const technologies = [
  { name: "OpenAI GPT", category: "LLM" },
  { name: "Claude", category: "LLM" },
  { name: "TensorFlow", category: "ML Framework" },
  { name: "PyTorch", category: "ML Framework" },
  { name: "Hugging Face", category: "NLP" },
  { name: "LangChain", category: "AI Framework" },
  { name: "Computer Vision", category: "Vision" },
  { name: "Scikit-learn", category: "ML" },
]

const process = [
  {
    step: "01",
    title: "فهم الاحتياجات",
    description: "نحلل أعمالك ونحدد الفرص التي يمكن للذكاء الاصطناعي تحسينها",
  },
  {
    step: "02",
    title: "تصميم الحل",
    description: "نصمم نموذج AI مخصص يناسب احتياجاتك وبياناتك",
  },
  {
    step: "03",
    title: "التطوير والتدريب",
    description: "نطور وندرب النموذج على بياناتك لتحقيق أفضل النتائج",
  },
  {
    step: "04",
    title: "النشر والتكامل",
    description: "ندمج الحل في أنظمتك الحالية ونضمن عمله بسلاسة",
  },
  {
    step: "05",
    title: "التحسين المستمر",
    description: "نراقب الأداء ونحسن النموذج باستمرار لنتائج أفضل",
  },
]

export default function AISolutionsPage() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              حلول الذكاء الاصطناعي
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              قوة الذكاء الاصطناعي
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-secondary to-accent">
                {" "}
                لأعمالك
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              نساعدك في تسخير قوة الذكاء الاصطناعي لتحسين عملياتك، زيادة الكفاءة، واتخاذ قرارات أذكى مبنية على البيانات
            </p>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {aiSolutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <Card key={solution.title} className="bg-card border-border hover:border-primary/30 transition-all">
                    <CardContent className="p-8 space-y-6">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${solution.bgColor} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={`h-7 w-7 ${solution.color}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                          <p className="text-muted-foreground">{solution.description}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-bold mb-3">المميزات</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="font-bold mb-3">حالات الاستخدام</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.useCases.map((useCase) => (
                            <span
                              key={useCase}
                              className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">التقنيات التي نستخدمها</h2>
              <p className="text-lg text-muted-foreground">نعمل مع أحدث وأقوى تقنيات الذكاء الاصطناعي في العالم</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <Card key={tech.name} className="bg-card border-border hover:border-primary/30 transition-all">
                  <CardContent className="p-6 text-center space-y-2">
                    <Database className="h-8 w-8 text-primary mx-auto" />
                    <div className="font-bold">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.category}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف نعمل</h2>
              <p className="text-lg text-muted-foreground">منهجية واضحة ومجربة لتطوير حلول الذكاء الاصطناعي</p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6 space-y-3">
                      <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <ArrowLeft className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 h-6 w-6 text-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-l from-primary/20 via-secondary/20 to-accent/20 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <Brain className="h-16 w-16 text-primary mx-auto" />
                <h2 className="text-3xl md:text-4xl font-bold">هل أنت مستعد لتطبيق الذكاء الاصطناعي؟</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  دعنا نساعدك في اكتشاف كيف يمكن للذكاء الاصطناعي تحويل أعمالك
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      احجز استشارة مجانية
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button size="lg" variant="outline" className="border-border hover:bg-card bg-transparent">
                      شاهد مشاريعنا
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

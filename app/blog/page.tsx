import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "مستقبل الذكاء الاصطناعي في الشرق الأوسط",
    excerpt: "نظرة شاملة على كيفية تأثير الذكاء الاصطناعي على الأعمال والمجتمع في المنطقة العربية",
    image: "/ai-future-middle-east-technology.jpg",
    category: "ذكاء اصطناعي",
    author: "محمد أحمد",
    date: "2024-01-15",
    readTime: "5 دقائق",
    featured: true,
  },
  {
    id: 2,
    title: "أفضل ممارسات تطوير تطبيقات React في 2024",
    excerpt: "دليل شامل لبناء تطبيقات React حديثة وقابلة للتوسع باستخدام أحدث الأدوات والتقنيات",
    image: "/react-best-practices-2024.jpg",
    category: "تطوير ويب",
    author: "عمر حسن",
    date: "2024-01-10",
    readTime: "8 دقائق",
    featured: false,
  },
  {
    id: 3,
    title: "كيف تختار التقنية المناسبة لمشروعك",
    excerpt: "نصائح عملية لاختيار المجموعة التقنية المثالية بناءً على احتياجات مشروعك وميزانيتك",
    image: "/choosing-right-tech-stack.jpg",
    category: "استشارات تقنية",
    author: "سارة خالد",
    date: "2024-01-05",
    readTime: "6 دقائق",
    featured: false,
  },
  {
    id: 4,
    title: "بناء Chatbot ذكي باستخدام GPT-4",
    excerpt: "خطوات عملية لإنشاء روبوت محادثة ذكي يفهم اللغة العربية ويقدم تجربة مستخدم ممتازة",
    image: "/building-chatbot-gpt4-tutorial.jpg",
    category: "ذكاء اصطناعي",
    author: "أحمد عبدالله",
    date: "2024-01-01",
    readTime: "10 دقائق",
    featured: false,
  },
  {
    id: 5,
    title: "الأمن السيبراني للشركات الناشئة",
    excerpt: "دليل أساسي لحماية شركتك الناشئة من التهديدات الإلكترونية دون كسر الميزانية",
    image: "/cybersecurity-for-startups.jpg",
    category: "أمن سيبراني",
    author: "يوسف إبراهيم",
    date: "2023-12-28",
    readTime: "7 دقائق",
    featured: false,
  },
  {
    id: 6,
    title: "تحسين أداء تطبيقات Next.js",
    excerpt: "تقنيات متقدمة لتحسين سرعة وأداء تطبيقات Next.js وتحسين تجربة المستخدم",
    image: "/nextjs-performance-optimization.jpg",
    category: "تطوير ويب",
    author: "عمر حسن",
    date: "2023-12-20",
    readTime: "9 دقائق",
    featured: false,
  },
]

const categories = ["الكل", "ذكاء اصطناعي", "تطوير ويب", "استشارات تقنية", "أمن سيبراني"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">STARGATE</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              آخر الأخبار والمقالات التقنية حول الذكاء الاصطناعي، البرمجة، ونصائح للشركات الناشئة
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="pb-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="ابحث في المقالات..." className="pr-10" />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "الكل" ? "default" : "outline"}
                    size="sm"
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
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-12 px-4">
            <div className="container mx-auto max-w-7xl">
              <Card className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden bg-muted">
                      <img
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">مميز</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center space-y-4">
                      <Badge variant="outline" className="w-fit">
                        {featuredPost.category}
                      </Badge>
                      <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{featuredPost.author}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(featuredPost.date).toLocaleDateString("ar-SA")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 group/btn">
                        اقرأ المزيد
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover/btn:-translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group"
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full justify-start p-0 h-auto hover:bg-transparent group/btn"
                      >
                        <span className="text-primary">اقرأ المزيد</span>
                        <ArrowLeft className="mr-2 h-4 w-4 text-primary group-hover/btn:-translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-border hover:bg-card bg-transparent">
                تحميل المزيد من المقالات
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-l from-primary/20 via-secondary/20 to-accent/20 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">اشترك في نشرتنا البريدية</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  احصل على آخر المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input placeholder="بريدك الإلكتروني" className="flex-1" />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">اشترك الآن</Button>
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

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Bot, Brain, Cloud, Shield, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "تطوير تطبيقات الويب والموبايل",
    description: "نبني تطبيقات حديثة وسريعة باستخدام أحدث التقنيات مثل React و Next.js و Flutter",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Bot,
    title: "إنشاء بوتات ذكية",
    description: "روبوتات محادثة وأتمتة ذكية لتحسين تجربة العملاء وزيادة الكفاءة التشغيلية",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Brain,
    title: "حلول الذكاء الاصطناعي",
    description: "نماذج AI مخصصة، معالجة اللغة الطبيعية، والرؤية الحاسوبية لأعمالك",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Cloud,
    title: "تكامل الأنظمة والحلول السحابية",
    description: "ربط أنظمتك ونشرها على السحابة مع AWS و Azure و Google Cloud",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: Shield,
    title: "الأمن السيبراني",
    description: "حماية بياناتك وأنظمتك من التهديدات الإلكترونية بأحدث معايير الأمان",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: BarChart3,
    title: "تحليل البيانات والتنبؤ",
    description: "استخراج رؤى قيمة من بياناتك باستخدام تقنيات التحليل المتقدمة",
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
]

export function ServicesOverview() {
  return (
    <section className="relative py-20 lg:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">خدماتنا المتكاملة</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات التقنية لتلبية احتياجاتك في كل مرحلة من مراحل التحول الرقمي
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="/services">
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 space-y-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`h-6 w-6 ${service.color}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                      {/* Decorative dots pattern */}
                      <div className="flex gap-1 pt-2 opacity-30 group-hover:opacity-50 transition-opacity">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1 h-1 rounded-full bg-current" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

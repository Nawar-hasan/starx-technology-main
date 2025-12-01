"use client"

import type React from "react"

import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Facebook } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">تواصل معنا</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              نحن هنا للإجابة على أسئلتك ومساعدتك في تحويل أفكارك إلى واقع رقمي
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                {/* Contact Cards */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                        <p className="text-sm text-muted-foreground">info@stargatetech.pro</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">الهاتف</h3>
                        <p className="text-sm text-muted-foreground" dir="ltr">
                          +966 530 908 594
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">العنوان</h3>
                        <p className="text-sm text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold">تابعنا على</h3>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Working Hours */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold">ساعات العمل</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">السبت - الخميس</span>
                        <span>9:00 ص - 6:00 م</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">الجمعة</span>
                        <span>مغلق</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">الاسم الكامل *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="أدخل اسمك"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">البريد الإلكتروني *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">رقم الهاتف</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+966 530 908 594"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">الموضوع *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="موضوع الرسالة"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">الرسالة *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="اكتب رسالتك هنا..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Send className="ml-2 h-5 w-5" />
                        إرسال الرسالة
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-muted-foreground">خريطة الموقع</p>
                    <p className="text-sm text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                    <p className="text-sm text-muted-foreground">   صنعاء, اليمن</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">الأسئلة الشائعة</h2>
              <p className="text-lg text-muted-foreground">إجابات سريعة على الأسئلة الأكثر شيوعاً</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "كم يستغرق تطوير مشروع متوسط الحجم؟",
                  a: "عادة ما يستغرق المشروع المتوسط من 2-4 أشهر حسب التعقيد والمتطلبات.",
                },
                {
                  q: "هل تقدمون دعماً فنياً بعد التسليم؟",
                  a: "نعم، نقدم دعماً فنياً شاملاً لجميع مشاريعنا مع خيارات صيانة مختلفة.",
                },
                {
                  q: "هل يمكنني الحصول على استشارة مجانية؟",
                  a: "بالتأكيد! نقدم استشارة مجانية لمناقشة مشروعك وتقديم التوصيات المناسبة.",
                },
                {
                  q: "ما هي طرق الدفع المتاحة؟",
                  a: "نقبل التحويل البنكي والدفع الإلكتروني، مع إمكانية التقسيط على دفعات.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

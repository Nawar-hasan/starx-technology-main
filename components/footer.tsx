import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/starx-logo.png"
                alt="STARX Technology"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              نحو المستقبل الرقمي – نقدم حلول برمجية وذكاء اصطناعي مبتكرة تساعد الشركات على النمو والتطور في العصر
              الرقمي
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  حلول الذكاء الاصطناعي
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  المشاريع
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  فريقنا
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  تطوير تطبيقات الويب
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  تطوير تطبيقات الموبايل
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  حلول الذكاء الاصطناعي
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الحلول السحابية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الأمن السيبراني
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  تحليل البيانات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@starx.tech"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@stargatetech.pro
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+966501234567"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  dir="ltr"
                >
                  +966 50 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">الرياض، المملكة العربية السعودية</span>
                <span className="text-sm text-muted-foreground">صنعاء, اليمن</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {currentYear} STARGATE Technology. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

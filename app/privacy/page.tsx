import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10 pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">سياسة الخصوصية</h1>
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نحن في STARX Technology نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك
                    الشخصية.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">المعلومات التي نجمعها</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">نقوم بجمع المعلومات التالية:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
                    <li>معلومات الشركة والمشروع</li>
                    <li>بيانات الاستخدام والتفاعل مع الموقع</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">كيفية استخدام المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">نستخدم معلوماتك من أجل:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>تقديم خدماتنا وتحسينها</li>
                    <li>التواصل معك بخصوص مشاريعك</li>
                    <li>إرسال تحديثات ونشرات إخبارية (بموافقتك)</li>
                    <li>تحسين تجربة المستخدم على موقعنا</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">حماية البيانات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم إجراءات أمنية متقدمة لحماية معلوماتك من الوصول غير المصرح به أو الاستخدام غير القانوني.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">حقوقك</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لديك الحق في الوصول إلى معلوماتك الشخصية، تصحيحها، أو طلب حذفها. للقيام بذلك، يرجى التواصل معنا على
                    info@starx.tech
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">تحديثات السياسة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">آخر تحديث: يناير 2024</p>
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

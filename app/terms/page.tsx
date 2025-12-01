import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10 pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">الشروط والأحكام</h1>
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    مرحباً بك في STARX Technology. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">الخدمات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نقدم خدمات تطوير البرمجيات والذكاء الاصطناعي والاستشارات التقنية. تخضع جميع الخدمات لاتفاقيات منفصلة
                    يتم توقيعها مع كل عميل.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">الملكية الفكرية</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    جميع حقوق الملكية الفكرية للمشاريع المطورة تنتقل إلى العميل بعد استكمال الدفع، ما لم يتم الاتفاق على
                    خلاف ذلك.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">الدفع والفواتير</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>يتم الدفع وفقاً للجدول الزمني المتفق عليه في العقد</li>
                    <li>نقبل التحويل البنكي والدفع الإلكتروني</li>
                    <li>التأخر في الدفع قد يؤدي إلى تعليق العمل</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">الضمانات والدعم</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نقدم ضماناً على جميع خدماتنا وفقاً للشروط المتفق عليها. يشمل ذلك إصلاح الأخطاء والدعم الفني لفترة
                    محددة.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">المسؤولية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نبذل قصارى جهدنا لتقديم خدمات عالية الجودة، لكننا لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو خسائر
                    في الأرباح.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">إنهاء الخدمة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    يمكن لأي من الطرفين إنهاء الخدمة وفقاً للشروط المنصوص عليها في العقد، مع مراعاة فترة الإشعار
                    المطلوبة.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">القانون الحاكم</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    تخضع هذه الشروط لقوانين المملكة العربية السعودية، وتحل أي نزاعات وفقاً للأنظمة المعمول بها.
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

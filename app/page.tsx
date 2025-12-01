import { Header } from "@/components/header"
import { MatrixBackground } from "@/components/matrix-background"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ServicesOverview />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

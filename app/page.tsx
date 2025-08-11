import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustLogos } from "@/components/trust-logos"
import { ServicesPreview } from "@/components/services-preview"
import { PlatformsSection } from "@/components/platforms-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustLogos />
      <ServicesPreview />
      <PlatformsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

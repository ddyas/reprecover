import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using Reprecover's services, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">2. Service Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  Reprecover provides reputation management services including content removal, monitoring, and crisis
                  management. Results may vary and are not guaranteed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">3. User Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed">
                  Users must provide accurate information and comply with all applicable laws and regulations when using
                  our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">4. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Reprecover shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">5. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about these Terms of Service, contact us at
                  <a href="mailto:help@reprecover.com" className="text-sky hover:underline ml-1">
                    help@reprecover.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

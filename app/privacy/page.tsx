import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, request our
                  services, or contact us for support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our reputation management
                  services, communicate with you, and protect our users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">5. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at
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

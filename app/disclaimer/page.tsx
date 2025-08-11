import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8">Disclaimer</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">Service Results</h2>
                <p className="text-gray-600 leading-relaxed">
                  While Reprecover maintains a high success rate, we cannot guarantee specific results for content
                  removal or reputation management services. Results may vary based on platform policies, content type,
                  and other factors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">Legal Advice</h2>
                <p className="text-gray-600 leading-relaxed">
                  The information provided by Reprecover is for general informational purposes only and does not
                  constitute legal advice. Consult with qualified legal professionals for specific legal matters.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">Third-Party Platforms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Reprecover works with various third-party platforms and websites. We are not responsible for changes
                  in their policies, terms of service, or operational procedures that may affect our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">Timeframes</h2>
                <p className="text-gray-600 leading-relaxed">
                  Estimated timeframes for content removal and reputation management services are approximate and may
                  vary. Actual completion times depend on platform response times, complexity of the case, and other
                  external factors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this disclaimer, please contact us at
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

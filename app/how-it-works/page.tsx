import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Search, FileText, Send, Trash2, Clock, Shield, DollarSign } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <CheckCircle className="h-5 w-5 text-coral mr-2" />
              <span className="text-white font-medium">Expert Content Removal Process</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              How It{" "}
              <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">Works</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our expert team removes defamatory content that hurts your brand's online reputation. No removal, no fee -
              it's that simple.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>14-Day Turnaround</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>No Removal, No Fee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>Expert Policy Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/quote">
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-6 px-12 rounded-2xl text-lg">
                  Speak to Someone
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fighting for a fair reputation with a proven 4-step process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-coral/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">1. Submit Content</h3>
                <p className="text-gray-600">
                  Provide the content you want removed. We begin with a free, confidential analysis to assess the
                  negative review.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-coral/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">2. Research & Analysis</h3>
                <p className="text-gray-600">
                  Our experts review the content, applying their knowledge of platform policies and content guidelines
                  to create a removal strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-coral/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">3. Submit Application</h3>
                <p className="text-gray-600">
                  We handle the formal submission to the relevant platform, making a compelling case for the removal of
                  the negative review.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-coral/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">4. Removal</h3>
                <p className="text-gray-600">
                  Once approved, the content is permanently removed, and we provide you with confirmation of the
                  successful removal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* World-Class Talent */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">World-Class Talent</h2>
              <p className="text-xl text-gray-600 mb-6">Expert policy specialists who understand content moderation</p>
              <p className="text-gray-600 leading-relaxed">
                Reprecover has an in-house team of policy specialists with years of experience and an unmatched
                understanding of online review platforms' content policies, community guidelines and local laws that
                govern self-verified content published online.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral" />
                  <span className="text-gray-700">Years of platform policy experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral" />
                  <span className="text-gray-700">Deep understanding of content guidelines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral" />
                  <span className="text-gray-700">Knowledge of local laws and regulations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral" />
                  <span className="text-gray-700">Proven track record of successful removals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reprecover Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Reprecover Advantage</h2>
            <p className="text-xl text-gray-600">Why choose us over other agencies?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reprecover Column */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-coral">
              <div className="text-center mb-6">
                <div className="bg-coral text-white px-4 py-2 rounded-full inline-block font-semibold">
                  Reprecover - Recommended
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy">No Removal, No Fee</h4>
                    <p className="text-gray-600">No upfront, monthly or hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy">~14 Day Turnaround</h4>
                    <p className="text-gray-600">Quick and efficient review removals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy">Experts with Proven Experience</h4>
                    <p className="text-gray-600">Years mastering the art of content removal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy">Affordable & Effective</h4>
                    <p className="text-gray-600">Getting the job done without breaking the bank</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Agencies Column */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-gray-400 text-white px-4 py-2 rounded-full inline-block font-semibold">
                  Other Agencies
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Charge Up-Front</h4>
                    <p className="text-gray-600">With no removal guarantee</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Outdated Suppression Tactics</h4>
                    <p className="text-gray-600">That don't solve the problem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Unexpected Costs</h4>
                    <p className="text-gray-600">Subscriptions, retainers and monthly fees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Over-Promise & Under-Deliver</h4>
                    <p className="text-gray-600">Results are never certain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">It's Free to Try with Reprecover</h2>
          <p className="text-xl text-gray-200 mb-8">
            If we can't remove it, you don't pay. Our expert team guarantees to remove negative content. Removal in 14
            days, or you don't pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-3 rounded-xl text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-3 rounded-xl text-lg bg-transparent"
              >
                Speak to Someone
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

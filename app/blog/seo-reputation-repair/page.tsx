import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SEOReputationRepairPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-sky hover:text-sky/80 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">SEO Strategy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">SEO for Reputation Repair</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Using search engine optimization techniques to repair and enhance your online reputation through strategic
            content placement.
          </p>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Reprecover Team
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Updated January 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                12 min read
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        <div className="mb-12">
          <Image
            src="/images/customer-review-verification.png"
            alt="Verified customer review interface with 5-star rating and green checkmark for SEO reputation repair and search result optimization"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            This guide provides an overview of SEO techniques for reputation repair. For comprehensive, advanced
            strategies and detailed implementation instructions, please read our complete guide:{" "}
            <Link
              href="/blog/seo-reputation-management-suppress-negative-results"
              className="text-coral hover:text-coral/80 font-semibold"
            >
              SEO for Reputation Management: Suppressing Negative Search Results
            </Link>
            .
          </p>

          <p>
            The detailed article covers advanced SERM (Search Engine Reputation Management) techniques,
            platform-specific strategies, technical SEO considerations, and long-term reputation building through search
            optimization.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Need SEO Reputation Help?</h3>
          <p className="text-gray-600 mb-6">
            Our SEO and reputation management experts can help you dominate your brand's search results.
          </p>
          <Link href="/quote">
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg">
              Get SEO Analysis
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}

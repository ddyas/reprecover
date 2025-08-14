import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OnlineReviewBestPracticesPage() {
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
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              Best Practices
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">Online Review Best Practices</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Essential strategies for managing online reviews and building a positive review profile for your business.
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
                <Clock className="h-4 w-4 mr-2" />8 min read
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
            src="/images/google-review-interface.png"
            alt="Google review interface showing 5-star rating system and social sharing options for online review management and reputation building"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            This guide covers the essential best practices for managing online reviews effectively. For detailed
            information about the psychology behind online reviews and consumer behavior, please see our comprehensive
            article:{" "}
            <Link
              href="/blog/psychology-online-reviews-consumer-behavior"
              className="text-coral hover:text-coral/80 font-semibold"
            >
              The Psychology of Online Reviews: Why They Matter More Than Ever
            </Link>
            .
          </p>

          <p>
            For specific guidance on removing negative reviews, visit:{" "}
            <Link
              href="/blog/remove-negative-google-reviews-guide"
              className="text-coral hover:text-coral/80 font-semibold"
            >
              How to Remove Negative Google Reviews: A Step-by-Step Guide
            </Link>
            .
          </p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Need Help with Review Management?</h3>
          <p className="text-gray-600 mb-6">
            Our experts can help you implement effective review management strategies.
          </p>
          <Link href="/quote">
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg">
              Get Professional Help
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}

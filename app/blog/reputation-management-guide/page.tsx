import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ReputationGuideFooterPage() {
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
            <span className="bg-sky/10 text-sky px-3 py-1 rounded-full text-sm font-medium">Complete Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">Reputation Management Guide</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive guide to understanding and implementing effective reputation management strategies for your
            business.
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
                15 min read
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
            src="/placeholder.svg?height=400&width=800&text=Reputation+Management+Complete+Guide"
            alt="Reputation Management Complete Guide"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            This comprehensive guide covers everything you need to know about reputation management, from basic concepts
            to advanced strategies for protecting and enhancing your digital reputation.
          </p>

          <p>
            For the complete, detailed guide to online reputation management in 2024, please visit our featured article:{" "}
            <Link
              href="/blog/complete-guide-online-reputation-management-2024"
              className="text-coral hover:text-coral/80 font-semibold"
            >
              The Complete Guide to Online Reputation Management in 2024
            </Link>
            .
          </p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Need Professional Guidance?</h3>
          <p className="text-gray-600 mb-6">
            Our reputation management experts can help you implement these strategies effectively.
          </p>
          <Link href="/quote">
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg">
              Get Expert Help
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}

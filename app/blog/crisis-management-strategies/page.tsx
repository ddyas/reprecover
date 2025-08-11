import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CrisisManagementStrategiesPage() {
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
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Crisis Management
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">Crisis Management Strategies</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Strategic approaches to managing reputation crises and protecting your brand during challenging times.
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
                10 min read
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
            src="/placeholder.svg?height=400&width=800&text=Crisis+Management+Strategies"
            alt="Crisis Management Strategies"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            This resource provides an overview of crisis management strategies for reputation protection. For a
            comprehensive crisis management playbook with detailed step-by-step procedures, please read our in-depth
            article:{" "}
            <Link
              href="/blog/crisis-management-reputation-attack"
              className="text-coral hover:text-coral/80 font-semibold"
            >
              Crisis Management: What to Do When Your Reputation is Under Attack
            </Link>
            .
          </p>

          <p>
            The detailed guide covers everything from the first 24 hours of a crisis to long-term recovery strategies,
            including specific response templates and communication protocols.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Facing a Crisis?</h3>
          <p className="text-gray-600 mb-6">
            Our crisis management experts are available 24/7 to help you navigate reputation emergencies.
          </p>
          <Link href="/contact">
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg">
              Get Emergency Help
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}

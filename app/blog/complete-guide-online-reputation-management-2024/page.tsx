import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ReputationManagementGuidePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Link href="/blog" className="inline-flex items-center text-sky hover:text-sky/80 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-sky/10 text-sky px-3 py-1 rounded-full text-sm font-medium">Industry Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            The Complete Guide to Online Reputation Management in 2024
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Everything you need to know about protecting and enhancing your digital reputation in today's connected
            world.
          </p>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Sarah Mitchell
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                January 15, 2024
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

        {/* Featured Image */}
        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Online+Reputation+Management+Guide"
            alt="Online Reputation Management Guide"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2>What is Online Reputation Management?</h2>
          <p>
            Online Reputation Management (ORM) is the practice of monitoring, influencing, and managing your brand's
            reputation across digital platforms. In 2024, with over 4.8 billion internet users worldwide, your online
            reputation can make or break your business success.
          </p>

          <h2>Why Your Online Reputation Matters More Than Ever</h2>
          <p>
            Recent studies show that 93% of consumers read online reviews before making a purchase decision. A single
            negative review can cost your business up to 30 customers, while businesses with excellent online
            reputations see 31% higher profits than their competitors.
          </p>

          <h3>The Digital Landscape in 2024</h3>
          <ul>
            <li>Social media platforms process over 500 million posts daily</li>
            <li>Google processes 8.5 billion searches per day</li>
            <li>Online reviews influence 67% of purchasing decisions</li>
            <li>Negative content can appear in search results within hours</li>
          </ul>

          <h2>Core Components of Reputation Management</h2>

          <h3>1. Monitoring and Tracking</h3>
          <p>
            Effective reputation management starts with comprehensive monitoring. You need to track mentions of your
            brand across:
          </p>
          <ul>
            <li>Search engine results pages (SERPs)</li>
            <li>Social media platforms</li>
            <li>Review sites and directories</li>
            <li>News outlets and blogs</li>
            <li>Forums and discussion boards</li>
          </ul>

          <h3>2. Content Creation and Optimization</h3>
          <p>
            Creating positive, high-quality content is essential for maintaining a strong online presence. This
            includes:
          </p>
          <ul>
            <li>Professional website content</li>
            <li>Regular blog posts and articles</li>
            <li>Social media content</li>
            <li>Press releases and news articles</li>
            <li>Video content and multimedia</li>
          </ul>

          <h3>3. Review Management</h3>
          <p>Managing customer reviews is crucial for reputation success. Best practices include:</p>
          <ul>
            <li>Encouraging satisfied customers to leave reviews</li>
            <li>Responding professionally to all reviews</li>
            <li>Addressing negative feedback promptly</li>
            <li>Implementing review generation strategies</li>
          </ul>

          <h2>Advanced Reputation Management Strategies</h2>

          <h3>Search Engine Optimization (SEO)</h3>
          <p>
            SEO plays a critical role in reputation management by ensuring positive content ranks higher than negative
            content in search results. Key strategies include:
          </p>
          <ul>
            <li>Keyword optimization for brand terms</li>
            <li>Creating authoritative backlinks</li>
            <li>Optimizing Google My Business profiles</li>
            <li>Building topic authority through content</li>
          </ul>

          <h3>Crisis Management Planning</h3>
          <p>Every business should have a crisis management plan in place. This should include:</p>
          <ul>
            <li>Rapid response protocols</li>
            <li>Communication templates</li>
            <li>Escalation procedures</li>
            <li>Legal consultation processes</li>
          </ul>

          <h2>Tools and Technologies for 2024</h2>
          <p>The reputation management landscape continues to evolve with new tools and technologies:</p>
          <ul>
            <li>AI-powered monitoring systems</li>
            <li>Sentiment analysis tools</li>
            <li>Automated response systems</li>
            <li>Advanced analytics platforms</li>
          </ul>

          <h2>Measuring Success</h2>
          <p>Key metrics to track your reputation management success include:</p>
          <ul>
            <li>Search result rankings for brand terms</li>
            <li>Review ratings and volume</li>
            <li>Social media sentiment</li>
            <li>Website traffic and conversions</li>
            <li>Brand mention volume and sentiment</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Online reputation management in 2024 requires a comprehensive, proactive approach. By implementing the
            strategies outlined in this guide, businesses can protect their digital reputation, build customer trust,
            and drive long-term success.
          </p>
          <p>
            Remember, reputation management is not a one-time effort but an ongoing process that requires consistent
            attention and strategic planning.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Need Professional Help?</h3>
          <p className="text-gray-600 mb-6">
            Our reputation management experts can help you implement these strategies and protect your brand.
          </p>
          <Link href="/quote">
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}

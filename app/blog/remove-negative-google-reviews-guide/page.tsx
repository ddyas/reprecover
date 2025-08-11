import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RemoveGoogleReviewsPage() {
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
            <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-sm font-medium">Content Removal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            How to Remove Negative Google Reviews: A Step-by-Step Guide
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Learn the proven strategies for removing fake and defamatory Google reviews that damage your business
            reputation.
          </p>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                David Chen
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                January 10, 2024
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
            src="/placeholder.svg?height=400&width=800&text=Google+Reviews+Removal+Guide"
            alt="Google Reviews Removal Guide"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Understanding Google's Review Policies</h2>
          <p>
            Before attempting to remove any Google review, it's crucial to understand Google's content policies. Google
            will only remove reviews that violate their guidelines, which include:
          </p>
          <ul>
            <li>Spam and fake content</li>
            <li>Off-topic reviews</li>
            <li>Restricted content (illegal, dangerous, etc.)</li>
            <li>Harassment and bullying</li>
            <li>Personal attacks</li>
            <li>Conflicts of interest</li>
          </ul>

          <h2>Step 1: Evaluate the Review</h2>
          <p>
            Not all negative reviews can or should be removed. First, determine if the review violates Google's
            policies:
          </p>
          <h3>Reviews That CAN Be Removed:</h3>
          <ul>
            <li>Fake reviews from competitors or non-customers</li>
            <li>Reviews containing profanity or hate speech</li>
            <li>Reviews about experiences that never happened</li>
            <li>Reviews that reveal personal information</li>
            <li>Reviews that are clearly spam</li>
          </ul>

          <h3>Reviews That CANNOT Be Removed:</h3>
          <ul>
            <li>Honest negative experiences</li>
            <li>Critical but factual reviews</li>
            <li>Reviews expressing genuine opinions</li>
            <li>Reviews about poor service or products</li>
          </ul>

          <h2>Step 2: Flag the Review Through Google My Business</h2>
          <p>If the review violates Google's policies, follow these steps:</p>
          <ol>
            <li>Log into your Google My Business account</li>
            <li>Navigate to the "Reviews" section</li>
            <li>Find the problematic review</li>
            <li>Click the three-dot menu next to the review</li>
            <li>Select "Flag as inappropriate"</li>
            <li>Choose the most relevant reason for flagging</li>
            <li>Provide additional context if necessary</li>
          </ol>

          <h2>Step 3: Report Through Google Support</h2>
          <p>For more serious violations, you can report directly to Google Support:</p>
          <ol>
            <li>Visit the Google My Business Help Center</li>
            <li>Select "Contact Us" or "Get Support"</li>
            <li>Choose "Manage Reviews" as your issue</li>
            <li>Provide detailed information about the policy violation</li>
            <li>Include screenshots and evidence</li>
            <li>Submit your request</li>
          </ol>

          <h2>Step 4: Document Everything</h2>
          <p>Keep detailed records of your removal attempts:</p>
          <ul>
            <li>Screenshots of the original review</li>
            <li>Documentation of policy violations</li>
            <li>Correspondence with Google</li>
            <li>Timestamps of all actions taken</li>
          </ul>

          <h2>Alternative Strategies When Removal Isn't Possible</h2>

          <h3>1. Respond Professionally</h3>
          <p>
            If you can't remove a review, respond professionally and publicly. This shows other potential customers that
            you care about feedback and are willing to address issues.
          </p>

          <h3>2. Encourage Positive Reviews</h3>
          <p>
            The best way to combat negative reviews is to generate more positive ones. Implement a systematic approach
            to requesting reviews from satisfied customers.
          </p>

          <h3>3. Improve Your Service</h3>
          <p>
            Use legitimate negative feedback as an opportunity to improve your business operations and customer service.
          </p>

          <h2>Legal Considerations</h2>
          <p>In some cases, you may need to pursue legal action for defamatory reviews:</p>
          <ul>
            <li>Consult with a lawyer specializing in defamation</li>
            <li>Gather evidence of false statements</li>
            <li>Consider sending a cease and desist letter</li>
            <li>Explore court orders for review removal</li>
          </ul>

          <h2>Prevention is Better Than Cure</h2>
          <p>The best strategy is preventing negative reviews in the first place:</p>
          <ul>
            <li>Provide excellent customer service</li>
            <li>Address issues before they escalate</li>
            <li>Monitor your online presence regularly</li>
            <li>Implement feedback systems</li>
            <li>Train staff on customer relations</li>
          </ul>

          <h2>Timeline and Expectations</h2>
          <p>
            Google's review removal process can take anywhere from a few days to several weeks. Be patient and
            persistent, but don't spam Google with multiple requests for the same review.
          </p>

          <h2>Conclusion</h2>
          <p>
            While removing negative Google reviews can be challenging, it's possible when reviews violate Google's
            policies. Focus on building a strong foundation of positive reviews and excellent customer service to
            minimize the impact of any negative feedback.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Need Help Removing Negative Reviews?</h3>
          <p className="text-gray-600 mb-6">
            Our experts can help you navigate the review removal process and protect your online reputation.
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

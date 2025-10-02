import type { Metadata } from "next"
import { CheckCircle, Shield, Clock, Target, AlertTriangle } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Remove Google Reviews | Professional Google Review Removal Service - RepRecover",
  description:
    "Remove fake, defamatory, and policy-violating Google reviews. 95% success rate with our professional Google Business Profile review removal service. No removal, no fee guarantee.",
  keywords:
    "remove Google reviews, delete Google reviews, Google review removal, fake Google reviews, Google Business Profile, remove negative reviews",
}

export default function RemoveGoogleReviewsPage() {
  const processSteps = [
    {
      title: "Review Analysis",
      description: "We analyze each Google review for policy violations and removal grounds.",
      icon: Target,
    },
    {
      title: "Documentation",
      description: "Our team gathers evidence and documents all policy violations comprehensively.",
      icon: Shield,
    },
    {
      title: "Submission",
      description: "We submit professional removal requests directly to Google's moderation team.",
      icon: AlertTriangle,
    },
    {
      title: "Follow-up",
      description: "We monitor and follow up until the review is successfully removed.",
      icon: Clock,
    },
  ]

  const faqs = [
    {
      question: "Can you remove any Google review?",
      answer:
        "We can remove Google reviews that violate Google's content policies, including fake reviews, spam, defamatory content, conflicts of interest, and reviews from competitors. Legitimate reviews that don't violate policies typically cannot be removed, but we can help you respond professionally and generate more positive reviews.",
    },
    {
      question: "How long does Google review removal take?",
      answer:
        "Most Google review removals take 7-14 days. Simple policy violations may be removed within 3-5 days, whilst more complex cases requiring detailed documentation can take up to 21 days. We provide regular updates throughout the process.",
    },
    {
      question: "What is your success rate for removing Google reviews?",
      answer:
        "We maintain a 95% success rate for Google Business Profile review removal. Our high success rate comes from our deep understanding of Google's policies, proven documentation methods, and direct relationships with Google's moderation teams.",
    },
    {
      question: "How much does it cost to remove a Google review?",
      answer:
        "Our Google review removal service starts at $750 AUD ($490 USD) for 1-5 reviews, with volume discounts available. We operate on a 'no removal, no fee' basis - you only pay if we successfully remove the review. Contact us for a free assessment and customized quote.",
    },
    {
      question: "What types of Google reviews can be removed?",
      answer:
        "We can remove fake reviews, spam reviews, reviews from competitors, reviews containing profanity or hate speech, reviews with personal information, reviews from disgruntled employees, and reviews that violate Google's conflict of interest policy. Each case is evaluated individually.",
    },
    {
      question: "Will the reviewer know I requested removal?",
      answer:
        "No, our service is completely confidential. Google does not notify reviewers when their content is removed for policy violations. We handle all communications with Google directly, and your business information remains private throughout the process.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="py-8 relative">
          <div className="flex items-center justify-center md:justify-between mb-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <CheckCircle className="h-8 w-8 text-coral" />
              <span className="text-2xl font-bold text-white">
                Rep<span className="font-light text-blue-400">Recover</span>
              </span>
            </Link>
            <div className="text-right hidden md:block">
              <p className="text-slate-300 text-sm">Professional Content Removal</p>
              <p className="text-white font-semibold">Melbourne, Australia</p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16 px-6 sm:px-4 md:px-6">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-600/30 mb-6 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-coral mr-2" />
              <span className="text-slate-200 text-sm font-medium">Professional Google Review Removal</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Remove Google Reviews
              <span className="block text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
                Fast & Effectively
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Remove fake, defamatory, and policy-violating Google reviews from your Google Business Profile. With a 95%
              success rate and 14-day average turnaround, we're Australia's most trusted Google review removal service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-6 sm:px-0">
              <div className="flex items-center justify-center space-x-2 text-slate-300">
                <CheckCircle className="h-5 w-5 text-coral" />
                <span className="text-sm">95% Success Rate</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-300">
                <Clock className="h-5 w-5 text-coral" />
                <span className="text-sm">14-Day Average Turnaround</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-300">
                <Shield className="h-5 w-5 text-coral" />
                <span className="text-sm">No Removal, No Fee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/quote">
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl">
                  Get Free Assessment
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-6 px-12 rounded-2xl text-lg">
                  Speak to an Expert
                </Button>
              </Link>
            </div>

            {/* How We Handle Google Reviews */}
            <div className="bg-slate-50/5 backdrop-blur-sm rounded-3xl p-8 mb-16 mx-2 sm:mx-0">
              <h2 className="text-4xl font-bold text-white text-center mb-8">How We Remove Google Reviews</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Our Proven Process</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    RepRecover specializes in removing Google reviews that violate Google's content policies. Our team
                    has deep expertise in Google Business Profile policies and maintains direct relationships with
                    Google's moderation teams.
                  </p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    We analyze each review for policy violations, document evidence comprehensively, and submit
                    professional removal requests that meet Google's strict requirements. Our 95% success rate is the
                    highest in the industry.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Policy Expertise</h4>
                        <p className="text-slate-300 text-sm">
                          Deep understanding of Google's review policies and removal criteria
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Professional Documentation</h4>
                        <p className="text-slate-300 text-sm">
                          Comprehensive evidence gathering and professional submission formatting
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Direct Relationships</h4>
                        <p className="text-slate-300 text-sm">
                          Established connections with Google's moderation and policy teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Types of Reviews We Remove</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Fake Reviews</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews from people who never used your service or visited your business
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Competitor Reviews</h4>
                      <p className="text-slate-300 text-sm">Reviews posted by competitors to damage your reputation</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Spam & Profanity</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews containing spam, profanity, hate speech, or inappropriate content
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Conflict of Interest</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews from current/former employees or those with conflicts of interest
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Defamatory Content</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews containing false statements that damage your reputation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-slate-50/5 backdrop-blur-sm rounded-3xl p-8 mb-16 mx-2 sm:mx-0">
              <h2 className="text-4xl font-bold text-white text-center mb-12">Our 4-Step Removal Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-coral/10 rounded-2xl p-6 w-fit mx-auto mb-6 border border-coral/20">
                      <step.icon className="h-10 w-10 text-coral" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-slate-50/5 backdrop-blur-sm rounded-3xl p-8 mb-16 mx-2 sm:mx-0">
              <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6 text-left max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-24 px-2 sm:px-0">
              <div className="bg-gradient-to-r from-coral to-orange-400 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Remove Harmful Google Reviews?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Get a free assessment of your Google reviews. Our experts will identify which reviews can be removed
                  and provide a clear action plan.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center px-8 py-4 bg-white text-coral font-semibold rounded-full hover:bg-slate-50 transition-colors"
                >
                  Get Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

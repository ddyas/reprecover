import type { Metadata } from "next"
import { CheckCircle, Shield, Clock, Target, AlertTriangle } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Trustpilot Review Removal | Remove Fake Trustpilot Reviews - RepRecover",
  description:
    "Professional Trustpilot review removal service. Remove fake, defamatory, and policy-violating reviews from Trustpilot. 90% success rate with no removal, no fee guarantee.",
  keywords:
    "Trustpilot review removal, remove Trustpilot reviews, delete Trustpilot reviews, fake Trustpilot reviews, Trustpilot reputation management",
}

export default function TrustpilotReviewRemovalPage() {
  const processSteps = [
    {
      title: "Review Evaluation",
      description: "We analyze Trustpilot reviews for policy violations and removal eligibility.",
      icon: Target,
    },
    {
      title: "Evidence Documentation",
      description: "Our team gathers comprehensive evidence of policy violations and false claims.",
      icon: Shield,
    },
    {
      title: "Professional Submission",
      description: "We submit detailed removal requests to Trustpilot's compliance team.",
      icon: AlertTriangle,
    },
    {
      title: "Tracking & Follow-up",
      description: "We monitor progress and follow up until successful removal is achieved.",
      icon: Clock,
    },
  ]

  const faqs = [
    {
      question: "Can you remove negative Trustpilot reviews?",
      answer:
        "We can remove Trustpilot reviews that violate Trustpilot's Guidelines for Reviewers, including fake reviews from non-customers, reviews containing defamatory statements, reviews from competitors, spam reviews, and reviews that violate Trustpilot's policies. Legitimate reviews from actual customers that don't violate policies typically cannot be removed.",
    },
    {
      question: "How long does Trustpilot review removal take?",
      answer:
        "Trustpilot review removal typically takes 14-21 days. Simple policy violations may be addressed within 7-10 days, whilst more complex cases requiring detailed documentation can take up to 28 days. Trustpilot has a thorough review process, and we provide regular updates throughout.",
    },
    {
      question: "What is your success rate for removing Trustpilot reviews?",
      answer:
        "We maintain a 90% success rate for Trustpilot review removal. Our high success rate comes from our deep understanding of Trustpilot's policies, proven documentation methods, and experience handling thousands of review removal cases across various industries and business types.",
    },
    {
      question: "How much does Trustpilot review removal cost?",
      answer:
        "Our Trustpilot review removal service starts at $750 AUD ($490 USD) for 1-5 reviews, with volume discounts available for larger projects. We operate on a 'no removal, no fee' basis - you only pay when we successfully remove the review. Contact us for a free assessment and customized quote.",
    },
    {
      question: "What types of Trustpilot reviews can be removed?",
      answer:
        "We can remove fake reviews from non-customers, reviews containing defamatory or false statements, reviews from competitors posing as customers, spam or duplicate reviews, reviews containing personal information, reviews that violate Trustpilot's conflict of interest policy, and reviews with inappropriate content or profanity.",
    },
    {
      question: "Does Trustpilot notify reviewers when reviews are removed?",
      answer:
        "Trustpilot does not typically notify reviewers when their content is removed for policy violations. Our service is completely confidential, and we handle all communications with Trustpilot directly. Your business information and the removal request details remain private throughout the entire process.",
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
              <span className="text-slate-200 text-sm font-medium">Professional Trustpilot Review Removal</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Trustpilot Review Removal
              <span className="block text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
                Protect Your Business Rating
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Remove fake, defamatory, and policy-violating reviews from Trustpilot. With a 90% success rate and 18-day
              average turnaround, we help businesses protect their Trustpilot reputation and maintain customer trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-6 sm:px-0">
              <div className="flex items-center justify-center space-x-2 text-slate-300">
                <CheckCircle className="h-5 w-5 text-coral" />
                <span className="text-sm">90% Success Rate</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-300">
                <Clock className="h-5 w-5 text-coral" />
                <span className="text-sm">18-Day Average Turnaround</span>
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

            {/* How We Handle Trustpilot Reviews */}
            <div className="bg-slate-50/5 backdrop-blur-sm rounded-3xl p-8 mb-16 mx-2 sm:mx-0">
              <h2 className="text-4xl font-bold text-white text-center mb-8">How We Remove Trustpilot Reviews</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Our Trustpilot Expertise</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    RepRecover specializes in removing Trustpilot reviews that violate Trustpilot's Guidelines for
                    Reviewers. Our team has extensive experience with Trustpilot's policies and maintains relationships
                    with their compliance and moderation teams.
                  </p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    We understand that Trustpilot is one of the world's most influential review platforms, and negative
                    reviews can significantly impact your business reputation and customer trust. Our proven process
                    identifies policy violations, documents evidence comprehensively, and submits professional removal
                    requests that meet Trustpilot's strict requirements.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Trustpilot Policy Specialists</h4>
                        <p className="text-slate-300 text-sm">
                          Deep expertise in Trustpilot's guidelines and review removal processes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Fake Review Detection</h4>
                        <p className="text-slate-300 text-sm">
                          Advanced methods to identify and prove reviews from non-customers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Compliance Team Access</h4>
                        <p className="text-slate-300 text-sm">
                          Direct relationships with Trustpilot's compliance and moderation teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Types of Reviews We Remove</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Fake Customer Reviews</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews from people who never purchased from or interacted with your business
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Competitor Reviews</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews posted by competitors to damage your business reputation
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Defamatory Content</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews containing false, defamatory statements about your business or products
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Spam & Duplicate Reviews</h4>
                      <p className="text-slate-300 text-sm">
                        Spam reviews, duplicate submissions, or coordinated review attacks
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Inappropriate Content</h4>
                      <p className="text-slate-300 text-sm">
                        Reviews containing profanity, personal information, or inappropriate content
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
                  Ready to Remove Harmful Trustpilot Reviews?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Get a free assessment of your Trustpilot profile. Our experts will identify which reviews can be
                  removed and provide a clear action plan to protect your business reputation.
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

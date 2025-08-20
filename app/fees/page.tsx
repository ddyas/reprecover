import type { Metadata } from "next"
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing & Fees - RepRecover | Professional Content Removal Services",
  description:
    "Transparent pricing for professional content removal services. No removal, no fee guarantee. Expert reputation management for businesses and individuals.",
}

export default function FeesPage() {
  const pricingTiers = [
    {
      platform: "Google Reviews",
      confidence: ">60%",
      averageTime: "14 days",
      pricing: [
        { range: "1-5 Reviews", price: "$750" },
        { range: "6-10 Reviews", price: "$675" },
        { range: "11-25 Reviews", price: "$635" },
        { range: "26-50 Reviews", price: "$585" },
        { range: "50+ Reviews", price: "POA" },
      ],
    },
    {
      platform: "Social Media",
      confidence: ">50%",
      averageTime: "28 days",
      pricing: [
        { range: "1-5 Reviews", price: "$750" },
        { range: "6-10 Reviews", price: "$675" },
        { range: "11-25 Reviews", price: "$635" },
        { range: "26-50 Reviews", price: "$585" },
        { range: "50+ Reviews", price: "POA" },
      ],
    },
    {
      platform: "Glassdoor/Indeed",
      confidence: "75%",
      averageTime: "21 days",
      pricing: [
        { range: "1-5 Reviews", price: "$700" },
        { range: "6-10 Reviews", price: "$630" },
        { range: "11-25 Reviews", price: "$595" },
        { range: "26-50 Reviews", price: "$550" },
        { range: "50+ Reviews", price: "POA" },
      ],
    },
  ]

  const testimonials = [
    {
      name: "Marsha Peterson",
      ratingIncrease: "+0.4",
      reviewsRemoved: "3 Reviews Removed",
      quote:
        "Great work guys. A big thank you to the team at RepRecover for saving our business following a spree of fake reviews on our business. We worked with RepRecover for a total of 5 weeks. During this time they cleaned up over 90% of the negative and fake reviews that were spread across our business. They were friendly, affordable and most of all, very effective. We are very happy with the outcome and highly recommend this service.",
    },
    {
      name: "Mark Powell",
      ratingIncrease: "+0.3",
      reviewsRemoved: "6 Reviews Removed",
      quote:
        "Efficient service at a very reasonable cost for what they provide. RepRecover are very unique, taking on the risk for a very difficult service as they only charge based on success and results. More people need to know about this company and what they offer. We dealt directly with one of the co-founders, who were a wealth of knowledge when it came to online content removal. Great work team.",
    },
    {
      name: "Amy Rivera",
      ratingIncrease: "+1.0",
      reviewsRemoved: "12 Reviews Removed",
      quote:
        "Thank you to the outstanding team at RepRecover for helping us remove fake reviews that were published to attack our employer reputation on employer review platforms. The reviews were fake and aimed to deter people from applying for our jobs and working with our company. Thank you again to your team we would definitely use the service again (hopefully we don't need to!).",
    },
    {
      name: "Catherine Murray",
      ratingIncrease: "+2.5",
      reviewsRemoved: "22 Reviews Removed",
      quote:
        "As a company we were unaware a service like RepRecover's existed. Our reputation was targeted from unknown and unverifiable sources, it was clear that the reviewers had no association or relationship with our company at all. Over the course of 2 short weeks our company had received 24 false reviews, across multiple platforms. Our marketing department had tried to contact the websites in which hosted the content, relatively flagging the reviews which proved to be a useless exercise. After hoping this would work, we found RepRecover. Admittedly we were skeptical when enquiring, as we truly thought we had tried everything, and our solicitors and PR agency had told us it would be near 'impossible'. RepRecover were confident in their claims and very professional in dealing with our team. Within 3 weeks the majority of the defamatory content had been removed. Very impressed and cannot thank the RepRecover team enough, we are so grateful!",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)] pointer-events-none" />

      {/* Header */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex items-center justify-between mb-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <CheckCircle className="h-8 w-8 text-coral" />
            <span className="text-2xl font-bold text-white">
              Rep<span className="font-light text-blue-400">Recover</span>
            </span>
          </Link>
          <div className="text-right">
            <p className="text-slate-300 text-sm">Professional Content Removal</p>
            <p className="text-white font-semibold">Melbourne, Australia</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-600/30 mb-6 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-coral mr-2" />
            <span className="text-slate-200 text-sm font-medium">Transparent Pricing Structure</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Professional Content
            <span className="block text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
              Removal Fees
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The rise of self-verified digital content has created a need to protect the reputation of businesses against
            trolls, competition, disgruntled customers and biased ex-staff. RepRecover is an Australian based company
            making serious waves within a misunderstood corner of the internet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <CheckCircle className="h-5 w-5 text-coral" />
              <span className="text-sm">No Removal, No Fee</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Clock className="h-5 w-5 text-coral" />
              <span className="text-sm">14-28 Day Turnaround</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Shield className="h-5 w-5 text-coral" />
              <span className="text-sm">Expert Policy Specialists</span>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose RepRecover?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Industry-leading Technology & Artificial Intelligence
                    </h3>
                    <p className="text-slate-300 text-sm">
                      We combine proprietary internal technology and AI to analyse content and policy violations with
                      extensive legal experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Unmatched Legal Experience & Platform Policy Interpretation
                    </h3>
                    <p className="text-slate-300 text-sm">
                      We understand exactly how to contact and communicate with the internal departments at each
                      platform.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">In House Team with 5+ Years Industry Experience</h3>
                    <p className="text-slate-300 text-sm">
                      RepRecover have dealt and removed thousands of pieces of negative content across all major
                      platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-4">The Challenge</h3>
              <p className="text-slate-300 text-sm mb-4">
                Content removal is a complicated process. There is a lack of information available to those affected by
                misleading, unfair or otherwise negative content. For perspective, Google receive on average over
                250,000 complaints for inappropriate content per day.
              </p>
              <p className="text-slate-300 text-sm">
                Often when a business comes to us, they've tried to report the content themselves. In their attempts,
                their submission is not moderated or reviewed by a human, receiving an automated response and rejection.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Transparent Pricing Structure</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-coral/30 transition-colors"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.platform}</h3>
                  <div className="flex justify-center space-x-4 text-sm text-slate-300 mb-4">
                    <span>Confidence: {tier.confidence}</span>
                    <span>•</span>
                    <span>Avg: {tier.averageTime}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {tier.pricing.map((price, priceIndex) => (
                    <div
                      key={priceIndex}
                      className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <span className="text-white font-medium">{price.range}</span>
                      <span className="text-coral font-bold text-lg">{price.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-2 text-slate-300 text-sm">
                    <CheckCircle className="h-4 w-4 text-coral" />
                    <span>No Removal, No Fee Guarantee</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm">
              *POA = Price on Application. All prices in AUD. Success rates based on historical data.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-slate-300 text-sm">{testimonial.reviewsRemoved}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-coral" />
                      <span className="text-coral font-bold text-lg">{testimonial.ratingIncrease}</span>
                    </div>
                    <p className="text-slate-300 text-xs">Rating Increase</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-coral to-orange-400 rounded-2xl p-8 text-center shadow-2xl mb-32">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Reputation?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get started with a free consultation. Our experts will assess your situation and provide a clear path
            forward with transparent pricing.
          </p>
          <div className="flex justify-center">
            <a
              href="/quote#quote-form"
              className="bg-white text-coral px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

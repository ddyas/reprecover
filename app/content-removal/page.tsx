"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContentRemovalPage() {
  const platforms = [
    {
      name: "Google Business Profile",
      description: "Remove fake and defamatory reviews from your Google listing",
      icon: "/placeholder.svg?height=60&width=60&text=Google",
      successRate: "95%",
    },
    {
      name: "Indeed",
      description: "Remove harmful employer reviews and fake job postings",
      icon: "/placeholder.svg?height=60&width=60&text=Indeed",
      successRate: "92%",
    },
    {
      name: "Glassdoor",
      description: "Address negative company reviews and false employee claims",
      icon: "/placeholder.svg?height=60&width=60&text=Glassdoor",
      successRate: "88%",
    },
    {
      name: "Yelp",
      description: "Remove fake reviews and improve your business rating",
      icon: "/placeholder.svg?height=60&width=60&text=Yelp",
      successRate: "90%",
    },
    {
      name: "Facebook",
      description: "Remove defamatory posts, fake reviews, and harmful content",
      icon: "/placeholder.svg?height=60&width=60&text=Facebook",
      successRate: "93%",
    },
    {
      name: "TripAdvisor",
      description: "Remove fake hotel and restaurant reviews",
      icon: "/placeholder.svg?height=60&width=60&text=TripAdvisor",
      successRate: "87%",
    },
    {
      name: "ProductReview.com.au",
      description: "Australia's leading review site content removal",
      icon: "/placeholder.svg?height=60&width=60&text=ProductReview",
      successRate: "94%",
    },
    {
      name: "Ripoff Report",
      description: "Remove defamatory reports and false accusations",
      icon: "/placeholder.svg?height=60&width=60&text=Ripoff+Report",
      successRate: "75%",
    },
    {
      name: "News Websites",
      description: "Remove or suppress negative news articles",
      icon: "/placeholder.svg?height=60&width=60&text=News",
      successRate: "70%",
    },
    {
      name: "Social Media",
      description: "Remove harmful content from Twitter, Instagram, LinkedIn",
      icon: "/placeholder.svg?height=60&width=60&text=Social",
      successRate: "91%",
    },
    {
      name: "Forums & Blogs",
      description: "Remove defamatory posts from forums and blog comments",
      icon: "/placeholder.svg?height=60&width=60&text=Forums",
      successRate: "85%",
    },
    {
      name: "Search Results",
      description: "Suppress negative search results and improve rankings",
      icon: "/placeholder.svg?height=60&width=60&text=Search",
      successRate: "89%",
    },
  ]

  const removalProcess = [
    {
      title: "Content Analysis",
      description: "We identify all harmful content across platforms and assess removal possibilities.",
      icon: Globe,
    },
    {
      title: "Legal Assessment",
      description: "Our legal team evaluates each piece of content for violations and removal grounds.",
      icon: Shield,
    },
    {
      title: "Removal Strategy",
      description: "We develop a customized removal strategy using the most effective methods.",
      icon: Target,
    },
    {
      title: "Implementation",
      description: "We execute the removal process using proven techniques and industry relationships.",
      icon: Zap,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-blue-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Shield className="h-5 w-5 text-coral mr-2" />
              <span className="text-white font-medium">Professional Content Removal</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Content{" "}
              <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">Removal</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Remove harmful reviews, negative articles, and defamatory content from 100+ platforms. No removal, no fee
              - it's that simple.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-coral mr-2" />
                <span>14-Day Turnaround</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-coral mr-2" />
                <span>No Removal, No Fee</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-coral mr-2" />
                <span>100+ Platforms</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-6 px-12 rounded-2xl text-lg">
                  Speak to Someone
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Platforms We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have proven success removing harmful content from all major review sites, social media platforms, and
              search engines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={platform.icon || "/placeholder.svg"}
                    alt={platform.name}
                    width={48}
                    height={48}
                    className="rounded-lg mr-4"
                  />
                  <h3 className="font-semibold text-navy text-lg">{platform.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{platform.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Success Rate:</span>
                  <span className="font-semibold text-coral">{platform.successRate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Content Removal Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process that maximizes removal success rates while protecting your reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {removalProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-coral/10 rounded-2xl p-6 mb-6 mx-auto w-fit">
                  <step.icon className="h-10 w-10 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-navy mb-4">Ready to Remove Harmful Content?</h3>
          <p className="text-gray-600 mb-8">
            Get a free assessment and see what harmful content we can remove for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-coral hover:bg-coral/90 text-white font-medium py-3 px-8 rounded-lg">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg">
                Contact Someone
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

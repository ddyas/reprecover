"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Shield,
  Search,
  AlertTriangle,
  TrendingUp,
  Eye,
  Users,
  FileSearch,
  Target,
  Zap,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Negative Content Removal",
      description: "Remove harmful reviews, articles, and content from major platforms and search engines.",
      features: [
        "Google Business Profile review removal",
        "Social media content removal",
        "News article suppression",
        "Forum and blog post removal",
        "Image and video removal",
        "Legal takedown notices",
      ],
    },
    {
      icon: Search,
      title: "Reputation Monitoring",
      description: "24/7 monitoring of your online presence with real-time alerts and comprehensive reporting.",
      features: [
        "Real-time mention alerts",
        "Comprehensive brand monitoring",
        "Competitor analysis",
        "Sentiment tracking",
        "Monthly detailed reports",
        "Custom alert settings",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEO Reputation Repair",
      description: "Improve search results by promoting positive content and suppressing negative results.",
      features: [
        "Positive content creation",
        "Search engine optimisation",
        "Brand building campaigns",
        "Result suppression strategies",
        "Social media optimisation",
        "Review generation campaigns",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Crisis Management",
      description: "Rapid response to reputation threats with strategic communication and damage control.",
      features: [
        "24/7 emergency response",
        "Media relations management",
        "Strategic communication planning",
        "Stakeholder communication",
        "Damage assessment and control",
        "Recovery strategy implementation",
      ],
    },
    {
      icon: Eye,
      title: "Review Management",
      description: "Comprehensive review monitoring, response, and generation across all major platforms.",
      features: [
        "Review response management",
        "Review generation campaigns",
        "Platform optimisation",
        "Customer feedback analysis",
        "Review policy development",
        "Staff training programmes",
      ],
    },
    {
      icon: Users,
      title: "Personal Reputation Management",
      description: "Protect and enhance personal reputations for executives, professionals, and public figures.",
      features: [
        "Personal brand development",
        "Executive reputation protection",
        "Social media management",
        "Personal content removal",
        "Professional profile optimisation",
        "Thought leadership development",
      ],
    },
  ]

  const processSteps = [
    {
      title: "Assessment",
      description: "We conduct a comprehensive audit of your online reputation and identify all issues.",
      icon: FileSearch,
    },
    {
      title: "Strategy",
      description: "Our experts develop a customised strategy tailored to your specific needs and goals.",
      icon: Target,
    },
    {
      title: "Implementation",
      description: "We execute the strategy using proven techniques and industry best practices.",
      icon: Zap,
    },
    {
      title: "Monitoring",
      description: "Continuous monitoring and optimisation to ensure lasting results and protection.",
      icon: Eye,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <CheckCircle className="h-5 w-5 text-coral mr-2" />
              <span className="text-white font-medium">Professional Reputation Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">Services</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Comprehensive solutions to protect, monitor, and enhance your digital reputation across all platforms.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>68% Success Rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>No Removal, No Fee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>14-Day Turnaround</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  Get Free Consultation
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

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of reputation management services designed to meet your specific
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-coral/10 rounded-2xl p-4 w-fit mb-6">
                  <service.icon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-2xl font-semibold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-coral rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
                    <Button className="bg-coral hover:bg-coral/90 text-white font-semibold w-full py-3 rounded-xl">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process that delivers results for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-coral/10 rounded-2xl p-6 w-fit mx-auto mb-6">
                  <step.icon className="h-10 w-10 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-navy mb-4">Ready to Protect Your Reputation?</h3>
          <p className="text-gray-600 mb-8">
            Get expert advice on your reputation management needs with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-coral hover:bg-coral/90 text-white font-medium py-3 px-8 rounded-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

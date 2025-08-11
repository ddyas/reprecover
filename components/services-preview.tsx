"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Search, AlertTriangle, TrendingUp } from "lucide-react"

export function ServicesPreview() {
  const services = [
    {
      icon: Shield,
      title: "Content Removal",
      description:
        "Remove negative reviews, articles, and harmful content from Google, social media, and review sites.",
      features: ["Google Business Profile", "Social Media Platforms", "Review Sites", "News Articles"],
    },
    {
      icon: Search,
      title: "Reputation Monitoring",
      description: "24/7 monitoring of your online presence with real-time alerts for new mentions.",
      features: ["Real-time Alerts", "Comprehensive Reporting", "Competitor Analysis", "Trend Tracking"],
    },
    {
      icon: TrendingUp,
      title: "SEO Reputation Repair",
      description: "Improve your search results by promoting positive content and suppressing negative results.",
      features: ["Positive Content Creation", "Search Optimisation", "Brand Building", "Result Suppression"],
    },
    {
      icon: AlertTriangle,
      title: "Crisis Management",
      description: "Rapid response to reputation threats with strategic communication and damage control.",
      features: ["24/7 Response Team", "Media Relations", "Strategic Planning", "Damage Control"],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-8">
            Comprehensive Reputation Management Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protect and enhance your digital reputation with our proven strategies and expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-coral/10 rounded-2xl p-4 w-fit mb-6 group-hover:bg-coral/20 transition-colours">
                <service.icon className="h-8 w-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" onClick={() => window.scrollTo(0, 0)}>
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-4 rounded-2xl">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

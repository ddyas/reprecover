"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, Shield } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-navy via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Australia's #1 Reputation Management Experts</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Protect Your
                <span className="block text-transparent bg-gradient-to-r from-sky to-blue-300 bg-clip-text">
                  Digital Reputation
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Remove harmful online content, monitor your reputation 24/7, and restore trust in your business with
                Australia's most trusted reputation management specialists.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-sky flex-shrink-0" />
                <span className="text-sm font-medium">68% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-sky flex-shrink-0" />
                <span className="text-sm font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-sky flex-shrink-0" />
                <span className="text-sm font-medium">100% Confidential</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-sky hover:bg-sky/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-navy font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky">500+</div>
                <div className="text-sm text-gray-300">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky">68%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main Feature Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-sky mr-3" />
                <h3 className="text-2xl font-bold">Why Choose Reprecover?</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky/20 rounded-lg p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Expert Content Removal</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Remove negative reviews, articles, and harmful content from Google, social media, and 100+
                      platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sky/20 rounded-lg p-2 mt-1">
                    <Users className="h-5 w-5 text-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">24/7 Reputation Monitoring</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Real-time alerts and comprehensive monitoring of your online presence across all channels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sky/20 rounded-lg p-2 mt-1">
                    <Star className="h-5 w-5 text-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Crisis Management</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Rapid response team ready to handle reputation crises and negative publicity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-gradient-to-r from-sky/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Free Consultation</div>
                <p className="text-gray-200 mb-4">Get expert advice on your reputation challenges</p>
                <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-white text-navy hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                    Start Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

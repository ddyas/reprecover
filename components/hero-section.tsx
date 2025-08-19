"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
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
          <div
            className={`space-y-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Star className="h-4 w-4 text-yellow-400 mr-3" />
              <span className="text-sm font-medium">Australia's Leading Reputation Management Experts</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                Protect Your{" "}
                <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
                  Digital Reputation
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                We remove defamatory content or you don't pay. Award-winning service to remove malicious online reviews
                and restore trust in your business.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                <span className="text-sm font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                <span className="text-sm font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                <span className="text-sm font-medium">No Removal-No Fee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                href="/quote#quote-form"
                onClick={() => {
                  setTimeout(() => {
                    const formSection = document.querySelector("#quote-form")
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: "smooth" })
                    } else {
                      window.scrollTo(0, 600)
                    }
                  }, 100)
                }}
              >
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-navy font-semibold py-6 px-12 rounded-2xl text-lg transition-all duration-300">
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex justify-center items-center space-x-8 sm:space-x-16 pt-16 border-t border-white/10 max-w-2xl mx-auto px-4 sm:px-0">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-coral">500+</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-coral">68%</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-coral">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

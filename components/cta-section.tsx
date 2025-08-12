"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-navy text-white section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Protect Your Reputation?</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Don't let negative content damage your business. Get a free consultation and see how we can help restore
            your digital reputation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-6 px-12 rounded-2xl text-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

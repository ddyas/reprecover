"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Globe, Shield, Target, Heart, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with complete transparency and ethical practices in all our reputation management services.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our focus is on delivering measurable results that protect and enhance your digital reputation.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Every strategy is tailored to your unique needs with dedicated support throughout the process.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We use cutting-edge technology and proven methodologies to stay ahead of reputation threats.",
    },
  ]

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      bio: "15+ years in digital marketing and reputation management. Former Google executive with expertise in search algorithms.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Mitchell",
    },
    {
      name: "David Chen",
      role: "Head of Legal Affairs",
      bio: "Specialist in internet law and content removal. Successfully handled 1000+ content removal cases.",
      image: "/placeholder.svg?height=300&width=300&text=David+Chen",
    },
    {
      name: "Emma Thompson",
      role: "Crisis Management Director",
      bio: "Expert in crisis communication and reputation recovery. Former journalist with major Australian media outlets.",
      image: "/placeholder.svg?height=300&width=300&text=Emma+Thompson",
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Director",
      bio: "SEO and digital marketing specialist. 12+ years experience in search engine optimization and online reputation.",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Rodriguez",
    },
  ]

  const achievements = [
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: Globe },
    { number: "5+", label: "Years Experience", icon: Shield },
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
                Reprecover
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Australia's leading reputation management company, dedicated to protecting and enhancing the digital
              presence of businesses and individuals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2020, Reprecover emerged from a simple yet powerful mission: to help businesses and
                  individuals reclaim control of their digital reputation in an increasingly connected world.
                </p>
                <p>
                  Our founders recognized that a single negative review or harmful piece of content could devastate
                  years of hard work and reputation building. Traditional approaches to reputation management were often
                  reactive, expensive, and ineffective.
                </p>
                <p>
                  We set out to change that by developing proactive, technology-driven solutions that not only remove
                  harmful content but also build lasting digital resilience for our clients.
                </p>
                <p>
                  Today, we're proud to be Australia's most trusted reputation management company, having successfully
                  helped over 500 businesses protect and enhance their digital presence.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-coral/10 to-navy/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-coral/10 rounded-2xl p-4 mb-4 mx-auto w-fit">
                      <achievement.icon className="h-8 w-8 text-coral" />
                    </div>
                    <div className="text-3xl font-bold text-navy mb-2">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and ensure the highest standards of service for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="bg-coral/10 rounded-2xl p-4 mb-6 mx-auto w-fit">
                  <value.icon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals combine legal expertise, technical knowledge, and strategic thinking to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-coral/20 to-navy/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-gray-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">{member.name}</h3>
                  <p className="text-coral font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy text-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Reprecover?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We combine expertise, technology, and proven results to deliver the most effective reputation management
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <CheckCircle className="h-12 w-12 text-coral mb-6" />
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-gray-200">
                98% success rate with over 500 satisfied clients across Australia and globally.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Shield className="h-12 w-12 text-coral mb-6" />
              <h3 className="text-xl font-semibold mb-4">Complete Confidentiality</h3>
              <p className="text-gray-200">All services are provided with strict confidentiality and discretion.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Zap className="h-12 w-12 text-coral mb-6" />
              <h3 className="text-xl font-semibold mb-4">Rapid Response</h3>
              <p className="text-gray-200">24/7 monitoring and rapid response to reputation threats and crises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-navy mb-4">Ready to Work With Us?</h3>
          <p className="text-gray-600 mb-8">
            Join hundreds of satisfied clients who trust Reprecover to protect their digital reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-coral hover:bg-coral/90 text-white font-medium py-3 px-8 rounded-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is online reputation management?",
          answer:
            "Online reputation management (ORM) is the practice of monitoring, influencing, and managing your brand's reputation across digital platforms. It involves removing harmful content, promoting positive content, and maintaining a strong online presence to protect your business's credibility and trustworthiness.",
        },
        {
          question: "How long does it take to see results?",
          answer:
            "Results vary depending on the complexity of your case. Simple content removal can take 2-4 weeks, whilst comprehensive reputation repair may take 3-6 months. We provide regular updates and you'll typically see initial improvements within the first month of engagement.",
        },
        {
          question: "Do you guarantee results?",
          answer:
            "Whilst we maintain a 98% success rate, we cannot guarantee specific outcomes as each case is unique. However, we only take on cases where we believe we can achieve meaningful results, and we provide honest assessments during our initial consultation.",
        },
        {
          question: "Is your service confidential?",
          answer:
            "Absolutely. We maintain strict confidentiality for all clients. Our team signs comprehensive non-disclosure agreements, and we never discuss client cases publicly or use them as case studies without explicit permission.",
        },
      ],
    },
    {
      title: "Content Removal",
      faqs: [
        {
          question: "What types of content can you remove?",
          answer:
            "We can remove various types of harmful content including fake reviews, defamatory articles, negative social media posts, outdated news articles, inappropriate images, and false information. Our success depends on the content violating platform policies or legal standards.",
        },
        {
          question: "Can you remove negative but truthful reviews?",
          answer:
            "We focus on removing content that violates platform policies, such as fake reviews, spam, or defamatory content. Legitimate negative reviews that don't violate policies typically cannot be removed, but we can help you respond professionally and generate more positive reviews to improve your overall rating.",
        },
        {
          question: "How do you remove content from Google?",
          answer:
            "We use various methods including reporting policy violations to Google, working with website owners, legal takedown requests, and SEO techniques to suppress negative results. Our approach depends on the specific type of content and where it appears.",
        },
        {
          question: "What platforms do you work with?",
          answer:
            "We work with over 100 platforms including Google Business Profile, Facebook, Indeed, Glassdoor, Yelp, TripAdvisor, ProductReview.com.au, Ripoff Report, news websites, forums, and social media platforms.",
        },
      ],
    },
    {
      title: "Pricing & Process",
      faqs: [
        {
          question: "How much do your services cost?",
          answer:
            "Our pricing varies based on the complexity and scope of work required. We offer customised solutions ranging from £500-£5000+ per month. We provide transparent pricing after our initial assessment and never charge hidden fees.",
        },
        {
          question: "Do you offer one-time services?",
          answer:
            "Yes, we offer both one-time content removal services and ongoing reputation management packages. Many clients start with specific removal projects and then move to ongoing monitoring and protection services.",
        },
        {
          question: "What's included in your free consultation?",
          answer:
            "Our free consultation includes a comprehensive audit of your online presence, identification of harmful content, assessment of removal possibilities, strategic recommendations, and a customised quote for our services.",
        },
        {
          question: "How does your process work?",
          answer:
            "Our process involves four key steps: 1) Comprehensive assessment of your online reputation, 2) Development of a customised strategy, 3) Implementation using proven techniques, and 4) Ongoing monitoring and optimisation to ensure lasting results.",
        },
      ],
    },
    {
      title: "Legal & Compliance",
      faqs: [
        {
          question: "Is content removal legal?",
          answer:
            "Yes, content removal is legal when done through proper channels. We use legitimate methods including platform reporting, legal takedown requests, and working with content publishers. We never engage in illegal activities or black hat techniques.",
        },
        {
          question: "Do you work with solicitors?",
          answer:
            "Yes, we have partnerships with experienced internet law solicitors who specialise in defamation, privacy, and content removal cases. We can coordinate legal action when necessary and provide expert testimony in court proceedings.",
        },
        {
          question: "What about GDPR and privacy rights?",
          answer:
            "We're fully compliant with GDPR, UK privacy laws, and Australian Privacy Principles (APPs). We can help you exercise your right to be forgotten and ensure that personal data is handled appropriately. Our team stays current with evolving privacy regulations across multiple jurisdictions.",
        },
        {
          question: "Can you help with defamation cases?",
          answer:
            "Yes, we work closely with legal professionals on defamation cases. We can help gather evidence, document harm, and coordinate with solicitors to pursue legal remedies whilst also working on reputation recovery.",
        },
      ],
    },
    {
      title: "Crisis Management",
      faqs: [
        {
          question: "What constitutes a reputation crisis?",
          answer:
            "A reputation crisis involves viral negative content, widespread media coverage, social media backlash, major review bombing, or any situation that threatens significant harm to your business reputation and requires immediate response.",
        },
        {
          question: "Do you offer emergency response?",
          answer:
            "Yes, we provide 24/7 emergency response for reputation crises. Our crisis team can be mobilised within hours to assess the situation, develop response strategies, and begin damage control measures.",
        },
        {
          question: "How quickly can you respond to a crisis?",
          answer:
            "Our emergency response team can begin working on your case within 2-4 hours of contact. We provide immediate damage assessment, strategic guidance, and begin implementing protective measures whilst developing a comprehensive response plan.",
        },
        {
          question: "What's included in crisis management?",
          answer:
            "Crisis management includes immediate response coordination, media relations, stakeholder communication, content removal acceleration, positive content creation, social media management, and ongoing monitoring until the crisis is resolved.",
        },
      ],
    },
    {
      title: "Technical Questions",
      faqs: [
        {
          question: "How do you monitor online mentions?",
          answer:
            "We use advanced monitoring tools that track mentions across search engines, social media, news sites, forums, and review platforms. Our system provides real-time alerts and comprehensive reporting on your online presence.",
        },
        {
          question: "What is SEO reputation repair?",
          answer:
            "SEO reputation repair involves creating and optimising positive content to outrank negative search results. We develop authoritative content, build quality backlinks, and use technical SEO to ensure positive information appears prominently in search results.",
        },
        {
          question: "Do you create fake positive content?",
          answer:
            "No, we never create fake content or reviews. All our content creation is authentic, valuable, and complies with platform guidelines. We focus on highlighting genuine positive aspects of your business and creating legitimate, helpful content.",
        },
        {
          question: "How do you measure success?",
          answer:
            "We measure success through various metrics including content removal rates, search result improvements, review rating increases, mention sentiment analysis, website traffic growth, and overall online reputation scores.",
        },
      ],
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
              <span className="text-white font-medium">Expert Reputation Guidance</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.3] md:leading-[1.5]">
              Frequently Asked{" "}
              <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Get answers to common questions about our reputation management services and how we can help protect your
              digital presence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>No Removal, No Fee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>Expert Policy Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-6 px-12 rounded-2xl text-lg">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6 sm:mb-8 flex items-center">
                <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-coral mr-2 sm:mr-3 flex-shrink-0" />
                {category.title}
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const itemIndex = categoryIndex * 100 + faqIndex
                  const isOpen = openItems.includes(itemIndex)

                  return (
                    <div key={faqIndex} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl sm:rounded-2xl transition-colors"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-navy pr-4">{faq.question}</h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-coral flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-coral flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-8 pb-4 sm:pb-6">
                          <div className="border-t border-gray-100 pt-4 sm:pt-6">
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Can't find the answer you're looking for? Our expert team is here to help with personalised advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-coral hover:bg-coral/90 text-white font-medium py-3 px-6 sm:px-8 rounded-lg w-full sm:w-auto">
                Contact Our Experts
              </Button>
            </Link>
            <Link href="/quote#quote-form" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-coral hover:bg-coral/90 text-white font-medium py-3 px-6 sm:px-8 rounded-lg w-full sm:w-auto">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

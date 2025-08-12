"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",

    // Step 2 - Business Details
    industry: "",
    businessSize: "",
    website: "",
    currentIssues: [],
    urgency: "",

    // Step 3 - Specific Issues
    platforms: [],
    issueDescription: "",
    budget: "",
    timeline: "",
  })

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value),
    }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setCurrentStep(4) // Show success message
  }

  const industries = [
    "Healthcare",
    "Legal Services",
    "Real Estate",
    "Hospitality",
    "Retail",
    "Technology",
    "Finance",
    "Education",
    "Manufacturing",
    "Other",
  ]

  const businessSizes = [
    "Solo Professional",
    "Small Business (2-10 employees)",
    "Medium Business (11-50 employees)",
    "Large Business (50+ employees)",
  ]

  const issueTypes = [
    "Negative Reviews",
    "Fake Reviews",
    "Negative News Articles",
    "Social Media Issues",
    "Search Result Problems",
    "Competitor Attacks",
    "Employee Reviews",
    "Legal Issues Online",
  ]

  const platforms = [
    "Google Business Profile",
    "Yelp",
    "Facebook",
    "Indeed",
    "Glassdoor",
    "TripAdvisor",
    "ProductReview.com.au",
    "Ripoff Report",
    "News Websites",
    "Social Media",
    "Other",
  ]

  return (
    <main className="min-h-screen">
      <Header />

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
              <span className="text-white font-medium">Free Reputation Assessment</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Get Your Free{" "}
              <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Tell us about your reputation challenges and we'll provide a customised solution with no upfront costs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>Free Assessment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>No Removal, No Fee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-coral mr-2" />
                <span>24-Hour Response</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                Start Free Assessment
              </Button>
              <Link href="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-6 px-12 rounded-2xl text-lg">
                  Speak to Someone
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl text-gray-600">
              Tell us about your reputation challenges and we'll provide a customised solution.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base ${
                      currentStep >= step ? "bg-sky text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step ? <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 ${currentStep > step ? "bg-sky" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-xs sm:text-sm text-gray-600">Step {currentStep} of 3</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-4 sm:mb-6">Contact Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company/Business Name *</label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Business Details */}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-4 sm:mb-6">Business Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange("industry", e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
                      >
                        <option value="">Select Industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Size *</label>
                      <select
                        value={formData.businessSize}
                        onChange={(e) => handleInputChange("businessSize", e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
                      >
                        <option value="">Select Size</option>
                        {businessSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                    <Input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      What reputation issues are you facing? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {issueTypes.map((issue) => (
                        <label key={issue} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.currentIssues.includes(issue)}
                            onChange={(e) => handleCheckboxChange("currentIssues", issue, e.target.checked)}
                            className="rounded border-gray-300 text-sky focus:ring-sky"
                          />
                          <span className="text-sm text-gray-700">{issue}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How urgent is this issue? *</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => handleInputChange("urgency", e.target.value)}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
                    >
                      <option value="">Select Urgency</option>
                      <option value="immediate">Immediate (Crisis situation)</option>
                      <option value="urgent">Urgent (Within 1 week)</option>
                      <option value="moderate">Moderate (Within 1 month)</option>
                      <option value="low">Low (General improvement)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Specific Issues */}
              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-4 sm:mb-6">
                    Specific Issues & Requirements
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Which platforms need attention? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {platforms.map((platform) => (
                        <label key={platform} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.platforms.includes(platform)}
                            onChange={(e) => handleCheckboxChange("platforms", platform, e.target.checked)}
                            className="rounded border-gray-300 text-sky focus:ring-sky"
                          />
                          <span className="text-sm text-gray-700">{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Please describe your specific reputation issues in detail
                    </label>
                    <Textarea
                      value={formData.issueDescription}
                      onChange={(e) => handleInputChange("issueDescription", e.target.value)}
                      rows={4}
                      placeholder="Describe the negative content, reviews, or reputation issues you're facing..."
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (Monthly)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
                      >
                        <option value="">Select Budget</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="over-5000">Over $5,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Desired Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky focus:border-transparent"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-week">Within 1 week</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {currentStep === 4 && (
                <div className="text-center py-8 sm:py-12">
                  <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4 sm:mb-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Thank You!</h2>
                  <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
                    Your consultation request has been submitted successfully.
                  </p>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                    Our reputation management experts will review your case and contact you within 24 hours with a
                    customised solution.
                  </p>
                  <div className="bg-light-grey rounded-lg p-4 sm:p-6">
                    <h3 className="font-semibold text-navy mb-2">What happens next?</h3>
                    <ul className="text-left text-gray-600 space-y-2 text-sm sm:text-base">
                      <li>• Our team will conduct a preliminary audit of your online presence</li>
                      <li>• We'll prepare a customised strategy proposal</li>
                      <li>• A senior consultant will call you to discuss the findings</li>
                      <li>• You'll receive a detailed action plan and pricing</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8">
                  <Button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg order-2 sm:order-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={() => {
                        if (currentStep === 1) {
                          if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
                            alert("Please fill in all required fields before proceeding.")
                            return
                          }
                        }
                        if (currentStep === 2) {
                          if (!formData.industry || !formData.businessSize || !formData.urgency) {
                            alert("Please fill in all required fields before proceeding.")
                            return
                          }
                        }
                        nextStep()
                      }}
                      className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-6 rounded-lg order-1 sm:order-2"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-6 rounded-lg order-1 sm:order-2"
                    >
                      Submit Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    urgency: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          urgency: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      contact: "help@reprecover.com",
      action: "mailto:help@reprecover.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Instant messaging support",
      contact: "+61 422 500 999",
      action: "https://wa.me/61422500999",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM AEST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM AEST" },
    { day: "Sunday", hours: "Emergency Support Only" },
    { day: "After Hours", hours: "24/7 Crisis Management" },
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
              Contact Our{" "}
              <span className="text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
                Expert Team
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Get professional advice on your reputation management needs. Our experts are ready to help protect and
              enhance your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-coral/10 rounded-2xl p-4 mb-6 mx-auto w-fit">
                  <method.icon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  className="text-coral font-semibold hover:underline text-lg"
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-navy mb-8">Send Us a Message</h2>
              {submitStatus === "success" && (
                <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 mb-8">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Thank you for your message! We'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 mb-8">
                  <span>Sorry, there was an error sending your message. Please try again or contact us directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                    >
                      <option value="">Select Subject</option>
                      <option value="content-removal">Content Removal</option>
                      <option value="reputation-monitoring">Reputation Monitoring</option>
                      <option value="crisis-management">Crisis Management</option>
                      <option value="seo-repair">SEO Reputation Repair</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => handleInputChange("urgency", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                    >
                      <option value="">Select Urgency</option>
                      <option value="immediate">Immediate (Crisis)</option>
                      <option value="urgent">Urgent (Within 24 hours)</option>
                      <option value="normal">Normal (Within 3 days)</option>
                      <option value="low">Low Priority</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={6}
                    required
                    placeholder="Please describe your reputation management needs or concerns..."
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-coral hover:bg-coral/90 text-white font-semibold py-4 px-8 rounded-xl text-lg w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Office Hours & Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-coral mr-3" />
                  <h3 className="text-2xl font-semibold text-navy">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy text-white rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Emergency Support</h3>
                <p className="text-gray-200 mb-6">
                  Facing a reputation crisis? Our emergency response team is available 24/7 for urgent situations.
                </p>
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-6 rounded-lg w-full">
                  Emergency Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Visit Our Office</h2>
            <p className="text-gray-600 text-lg">Located in Melbourne, Australia</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50431.76828513314!2d144.9942312!3d-37.8138082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2c0de84781a7b25%3A0xe3d3ecd870dbb632!2sRepRecover!5e0!3m2!1sen!2sau!4v1759379968366!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

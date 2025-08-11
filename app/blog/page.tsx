"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to Online Reputation Management in 2024",
    excerpt:
      "Everything you need to know about protecting and enhancing your digital reputation in today's connected world.",
    author: "Sarah Mitchell",
    date: "January 15, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=800&text=Featured+Article",
    slug: "complete-guide-online-reputation-management-2024",
  }

  const blogPosts = [
    {
      title: "How to Remove Negative Google Reviews: A Step-by-Step Guide",
      excerpt:
        "Learn the proven strategies for removing fake and defamatory Google reviews that damage your business reputation.",
      author: "David Chen",
      date: "January 10, 2024",
      readTime: "8 min read",
      category: "Content Removal",
      image: "/placeholder.svg?height=300&width=400&text=Google+Reviews",
      slug: "remove-negative-google-reviews-guide",
    },
    {
      title: "Crisis Management: What to Do When Your Reputation is Under Attack",
      excerpt:
        "A comprehensive crisis management playbook for businesses facing reputation threats and negative publicity.",
      author: "Emma Thompson",
      date: "January 5, 2024",
      readTime: "10 min read",
      category: "Crisis Management",
      image: "/placeholder.svg?height=300&width=400&text=Crisis+Management",
      slug: "crisis-management-reputation-attack",
    },
    {
      title: "The Psychology of Online Reviews: Why They Matter More Than Ever",
      excerpt:
        "Understanding consumer behavior and the psychological impact of online reviews on purchasing decisions.",
      author: "Michael Rodriguez",
      date: "December 28, 2023",
      readTime: "6 min read",
      category: "Industry Insights",
      image: "/placeholder.svg?height=300&width=400&text=Online+Reviews",
      slug: "psychology-online-reviews-consumer-behavior",
    },
    {
      title: "SEO for Reputation Management: Suppressing Negative Search Results",
      excerpt:
        "Advanced SEO techniques to push down negative search results and promote positive content about your brand.",
      author: "Michael Rodriguez",
      date: "December 20, 2023",
      readTime: "15 min read",
      category: "SEO Strategy",
      image: "/placeholder.svg?height=300&width=400&text=SEO+Strategy",
      slug: "seo-reputation-management-suppress-negative-results",
    },
    {
      title: "Legal Aspects of Content Removal: Know Your Rights",
      excerpt:
        "Understanding the legal framework for content removal and when you can take action against defamatory content.",
      author: "David Chen",
      date: "December 15, 2023",
      readTime: "12 min read",
      category: "Legal Advice",
      image: "/placeholder.svg?height=300&width=400&text=Legal+Rights",
      slug: "legal-aspects-content-removal-rights",
    },
    {
      title: "Building a Positive Online Presence: Best Practices for 2024",
      excerpt:
        "Proactive strategies for building and maintaining a strong, positive digital reputation for your business.",
      author: "Sarah Mitchell",
      date: "December 10, 2023",
      readTime: "9 min read",
      category: "Best Practices",
      image: "/placeholder.svg?height=300&width=400&text=Positive+Presence",
      slug: "building-positive-online-presence-2024",
    },
  ]

  const categories = [
    "All Posts",
    "Content Removal",
    "Crisis Management",
    "SEO Strategy",
    "Legal Advice",
    "Industry Insights",
    "Best Practices",
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Reputation Management
              <span className="block text-transparent bg-gradient-to-r from-coral to-orange-400 bg-clip-text">
                Insights & Guides
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Expert advice, industry insights, and practical guides to help you protect and enhance your digital
              reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square bg-gray-200">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-navy mb-4 leading-tight">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-6 rounded-lg w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 ${
                    index === 0
                      ? "bg-coral text-white hover:bg-coral/90"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gray-200">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-coral/10 text-coral px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3 leading-tight hover:text-coral transition-colors">
                    <Link href={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
                      <Button variant="ghost" size="sm" className="text-coral hover:text-coral/80 p-0">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button className="bg-transparent border-2 border-coral text-coral hover:bg-coral hover:text-white font-semibold py-3 px-8 rounded-lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest reputation management insights and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
            />
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-6 rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

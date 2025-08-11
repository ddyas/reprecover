"use client"

import Link from "next/link"
import { Mail, MapPin, CheckCircle } from "lucide-react"

export function Footer() {
  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Content Removal", href: "/content-removal" },
      { name: "FAQ", href: "/faq" },
      { name: "Get Started", href: "/quote" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
    resources: [
      { name: "Reputation Management Guide", href: "/blog/reputation-management-guide" },
      { name: "Online Review Best Practices", href: "/blog/online-review-best-practices" },
      { name: "Crisis Management Strategies", href: "/blog/crisis-management-strategies" },
      { name: "SEO for Reputation Repair", href: "/blog/seo-reputation-repair" },
      { name: "Blog", href: "/blog" },
    ],
  }

  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 section-padding">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6" onClick={handleLinkClick}>
              <CheckCircle className="h-8 w-8 text-coral" />
              <span className="text-2xl font-bold">Reprecover</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Australia's trusted reputation management experts. Protecting businesses from harmful online content since
              2020.
            </p>
            <div className="flex items-center text-gray-400 mb-3">
              <Mail className="h-4 w-4 mr-3" />
              <a href="mailto:help@reprecover.com" className="hover:text-coral transition-colours">
                help@reprecover.com
              </a>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-4 w-4 mr-3" />
              <span>Melbourne, Australia</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-coral transition-colours text-sm"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-coral transition-colours text-sm"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-coral transition-colours text-sm"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Reprecover. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Professional reputation management services for businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

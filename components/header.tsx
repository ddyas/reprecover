"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Content Removal", href: "/content-removal" },
    { name: "FAQ", href: "/faq" },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto py-4 px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <CheckCircle className="h-8 w-8 text-coral" />
            <span className="text-2xl font-bold text-navy">Reprecover</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-coral transition-colours duration-200 font-medium"
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/quote" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-coral hover:bg-coral/90 text-white font-semibold px-6 py-2 rounded-xl">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-coral transition-colours duration-200 font-medium"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/quote" onClick={handleLinkClick}>
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold w-full py-2 rounded-xl">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

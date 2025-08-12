import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RepRecover - Professional Reputation Management Services",
  description:
    "Remove harmful online content and improve your digital reputation. Professional reputation management services for businesses in Australia and globally.",
  keywords:
    "reputation management, online reputation, content removal, review monitoring, SEO repair, crisis management",
  authors: [{ name: "RepRecover" }],
  openGraph: {
    title: "RepRecover - Professional Reputation Management Services",
    description: "Remove harmful online content and improve your digital reputation.",
    url: "https://reprecover.com",
    siteName: "RepRecover",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

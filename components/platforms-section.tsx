import Link from "next/link"
import Image from "next/image"

export function PlatformsSection() {
  const platforms = [
    { name: "Google Business Profile", src: "/placeholder.svg?height=80&width=80&text=Google" },
    { name: "Indeed", src: "/placeholder.svg?height=80&width=80&text=Indeed" },
    { name: "Glassdoor", src: "/placeholder.svg?height=80&width=80&text=Glassdoor" },
    { name: "Yelp", src: "/placeholder.svg?height=80&width=80&text=Yelp" },
    { name: "Facebook", src: "/placeholder.svg?height=80&width=80&text=Facebook" },
    { name: "TripAdvisor", src: "/placeholder.svg?height=80&width=80&text=TripAdvisor" },
    { name: "ProductReview.com.au", src: "/placeholder.svg?height=80&width=80&text=ProductReview" },
    { name: "Ripoff Report", src: "/placeholder.svg?height=80&width=80&text=Ripoff+Report" },
  ]

  return (
    <section className="section-padding bg-light-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Platforms We Work With</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help remove harmful content from all major review sites, social media platforms, and search engines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <Image
                src={platform.src || "/placeholder.svg"}
                alt={platform.name}
                width={80}
                height={80}
                className="h-14 w-14 object-contain mb-4 group-hover:scale-110 transition-transform"
              />
              <span className="text-xs font-medium text-gray-700 leading-tight">{platform.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8 text-sm">
            {"Don't see your platform? We work with 100+ platforms worldwide."}
          </p>
          <Link href="/content-removal" className="text-sky hover:text-sky/80 font-medium text-sm transition-colors">
            View Complete Platform List →
          </Link>
        </div>
      </div>
    </section>
  )
}

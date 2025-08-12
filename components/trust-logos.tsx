import Image from "next/image"

export function TrustLogos() {
  const mediaLogos = [
    { name: "Forbes", src: "/images/forbes-logo.png" },
    { name: "Financial Review", src: "/images/financial-review-logo.png" },
    { name: "TechCrunch", src: "/images/techcrunch-logo.png" },
    { name: "The Australian", src: "/images/the-australian-logo.png" },
  ]

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">As Featured In</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.name} logo - RepRecover featured in ${logo.name}`}
                width={index === 0 ? 240 : 350}
                height={index === 0 ? 120 : 175}
                className={index === 0 ? "h-24 w-auto object-contain" : "h-[98px] w-auto object-contain"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

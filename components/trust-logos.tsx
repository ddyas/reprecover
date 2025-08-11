import Image from "next/image"

export function TrustLogos() {
  const mediaLogos = [
    { name: "ABC News", src: "/placeholder.svg?height=60&width=120&text=ABC+News" },
    { name: "The Australian", src: "/placeholder.svg?height=60&width=120&text=The+Australian" },
    { name: "Sydney Morning Herald", src: "/placeholder.svg?height=60&width=120&text=SMH" },
    { name: "Channel 7", src: "/placeholder.svg?height=60&width=120&text=Channel+7" },
  ]

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">As Featured In</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

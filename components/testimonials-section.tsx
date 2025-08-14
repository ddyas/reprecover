import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Wilson", // updated surname from Mitchell to Wilson
      company: "Mitchell & Associates Law",
      location: "Sydney, Australia",
      rating: 5,
      text: "Reprecover helped us remove several damaging reviews that were affecting our practice. Their professional approach and quick results exceeded our expectations.",
      result: "Removed 8 negative reviews in 30 days",
    },
    {
      name: "David Tsu", // updated surname from Chen to Tsu
      company: "Chen Restaurant Group",
      location: "Melbourne, Australia",
      rating: 5,
      text: "After a social media crisis, Reprecover managed our reputation recovery perfectly. Our online ratings improved significantly within months.",
      result: "Improved rating from 2.1 to 4.6 stars",
    },
    {
      name: "Emma Tsatsis", // updated surname from Thompson to Tsatsis
      company: "Thompson Medical Centre",
      location: "Brisbane, Australia",
      rating: 5,
      text: "The monitoring service has been invaluable. We now catch and address reputation issues before they become major problems.",
      result: "Prevented 12 potential reputation crises",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real results from real businesses across Australia and globally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100 relative group hover:shadow-xl transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-sky/20 absolute top-6 right-6" />

              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 italic text-sm leading-relaxed">"{testimonial.text}"</p>

              <div className="border-t pt-6">
                <div className="font-semibold text-navy text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-600 mt-1">{testimonial.company}</div>
                <div className="text-xs text-gray-500">{testimonial.location}</div>
                <div className="text-xs text-sky font-medium mt-3 bg-sky/10 px-3 py-1 rounded-full inline-block">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-sky/10 rounded-2xl p-8">
              <div className="text-3xl font-bold text-navy mb-2">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            <div className="bg-sky/10 rounded-2xl p-8">
              <div className="text-3xl font-bold text-navy mb-2">500+</div>
              <div className="text-gray-600 text-sm">Clients Helped</div>
            </div>
            <div className="bg-sky/10 rounded-2xl p-8">
              <div className="text-3xl font-bold text-navy mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

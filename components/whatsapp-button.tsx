"use client"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+61422500999"
    const message = encodeURIComponent("Hi, I need help with reputation management for my business.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="h-14 w-14 rounded-lg" />
    </button>
  )
}

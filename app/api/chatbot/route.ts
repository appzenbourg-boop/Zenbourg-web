import { type NextRequest, NextResponse } from "next/server"

const CHATBOT_RESPONSES = {
  greeting: [
    "Hello! I'm here to help you with any questions about Zenbourg's services.",
    "Hi there! How can I assist you with your business needs today?",
    "Welcome to Zenbourg! I'm here to help you find the perfect solution for your business.",
  ],
  services: [
    "We build business websites (from $150, or ₹9,999 in India), websites with an admin panel (from $350), custom web apps (from $750), SEO setup and an AI WhatsApp receptionist. Which one fits what you need?",
    "We build websites, admin panels, custom web apps and integrations in Next.js, and set up SEO and analytics. Our own product, Otiva, is a live hotel management platform. What would you like to build?",
  ],
  pricing: [
    "Starting prices: business website $150 (₹9,999 in India, about 5 days), website + admin panel $350 (about 10 days), custom web app $750 (about 20 days). Every job gets a fixed quote before we start, 50% in advance.",
    "You get one fixed price before we start, paid by direct invoice: 50% to start, the rest at launch. Book a 20-minute call and we will quote your project.",
  ],
  booking: [
    "You can book a free consultation by clicking 'Book Consultation' in our navigation menu. We'll discuss your project requirements and provide personalized recommendations.",
    "Book a free 20-minute call from the 'Book Consultation' page and pick a time that suits you. You talk directly to the developer who will build it.",
  ],
  contact: [
    "Email info.zenbourg@gmail.com or call +91 74470 94686. We reply to emails within one working day.",
    "Feel free to contact us through our Contact page, email us directly, or book a consultation. We're always happy to discuss your project needs!",
  ],
  default: [
    "I'd be happy to help! Could you please be more specific about what you'd like to know about Zenbourg's services?",
    "I'm here to assist with questions about our services, pricing, booking consultations, or general inquiries. What would you like to know?",
    "Good question. The quickest way to a precise answer is a free 20-minute call, where you speak with the developer directly.",
  ],
}

function getResponseType(message: string): keyof typeof CHATBOT_RESPONSES {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "greeting"
  }
  if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("what do you") ||
    lowerMessage.includes("what can you")
  ) {
    return "services"
  }
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
    return "pricing"
  }
  if (lowerMessage.includes("book") || lowerMessage.includes("consultation") || lowerMessage.includes("appointment")) {
    return "booking"
  }
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("reach") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("email")
  ) {
    return "contact"
  }

  return "default"
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Determine response type based on message content
    const responseType = getResponseType(message)
    const responses = CHATBOT_RESPONSES[responseType]
    const response = responses[Math.floor(Math.random() * responses.length)]

    // In production, you would integrate with OpenAI or similar AI service:
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     {
    //       role: "system",
    //       content: "You are a helpful assistant for Zenbourg, a business services company..."
    //     },
    //     {
    //       role: "user",
    //       content: message
    //     }
    //   ],
    // });

    // Log chat for analytics (in production, save to database)
    console.log("Chat log:", {
      message,
      response,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chatbot error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

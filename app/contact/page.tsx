"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/lib/contact-actions"
import { Page, Hero, PrimaryLink, BOOK_URL, ACCENT, display } from "@/components/zb"

const field = "w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-[#6f7680] focus:border-white/50 focus:outline-none"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ fullName: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const set = (k: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (!result.success) throw new Error(result.error || "Failed to send message")
      toast({ title: "Message sent", description: "We have your message and sent you a confirmation email. We reply within one working day." })
      setFormData({ fullName: "", email: "", subject: "", message: "" })
    } catch (error: any) {
      toast({ title: "Message not sent", description: error?.message || "Please try again, or email info.zenbourg@gmail.com.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Page>
      <Hero eyebrow="Contact" title="Tell us what you need." accent="We reply within a day."
        lead="Write a few lines about your project, or skip the form and book a 20-minute call.">
        <PrimaryLink href={BOOK_URL} external>Book a 20-minute call</PrimaryLink>
      </Hero>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_320px] md:px-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="mb-2 block text-sm font-medium text-[#c9cdd3]">Your name</span>
                <input id="fullName" required value={formData.fullName} onChange={set("fullName")} className={field} placeholder="Full name" /></label>
              <label className="block"><span className="mb-2 block text-sm font-medium text-[#c9cdd3]">Email</span>
                <input id="email" type="email" required value={formData.email} onChange={set("email")} className={field} placeholder="you@company.com" /></label>
            </div>
            <label className="block"><span className="mb-2 block text-sm font-medium text-[#c9cdd3]">Subject</span>
              <input id="subject" required value={formData.subject} onChange={set("subject")} className={field} placeholder="New website, web app, fix an existing site..." /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium text-[#c9cdd3]">Message</span>
              <textarea id="message" required rows={6} value={formData.message} onChange={set("message")} className={field} placeholder="What do you need, and by when?" /></label>
            <button type="submit" disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-4 font-semibold text-[#0d0f12] transition hover:brightness-110 disabled:opacity-60"
              style={{ background: ACCENT }}>
              <Send className="h-4 w-4" /> {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>

          <aside className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#8b929c]">Email</p>
              <p className={`${display.className} mt-2 select-all text-xl font-bold`}>info.zenbourg@gmail.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#8b929c]">Based in</p>
              <p className="mt-2 text-lg font-semibold">Indore, India · working worldwide</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#8b929c]">Payment</p>
              <p className="mt-2 leading-relaxed text-[#a3a9b2]">Direct invoice. Bank transfer or UPI in India, Wise or PayPal abroad.</p>
            </div>
          </aside>
        </div>
      </section>
    </Page>
  )
}

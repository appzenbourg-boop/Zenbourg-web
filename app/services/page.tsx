import Link from "next/link"
import type { Metadata } from "next"
import { Check } from "lucide-react"
import { getAllServices } from "@/lib/data/services-data"
import type { ServiceData } from "@/types/page-data"
import { Page, Hero, Section, CtaBand, PrimaryLink, GhostLink, BOOK_URL, ACCENT, display } from "@/components/zb"

export const metadata: Metadata = {
  title: "Services | Zenbourg",
  description: "Websites, admin panels, custom web apps and SEO setup. Fixed prices, direct invoice, source code yours.",
}

// Services stay editable from the admin panel (database); this page only presents them.
export default async function ServicesPage() {
  let services: ServiceData[] = []
  try {
    services = (await getAllServices()).filter(
      (s) => s.slug !== "lead-generation" && s.name.toLowerCase() !== "lead generation",
    )
  } catch {
    services = []
  }
  const book = (s: ServiceData) =>
    `/enterprise-consultation?${new URLSearchParams({ service: s.slug, serviceName: s.name, price: String(s.price) })}`

  return (
    <Page>
      <Hero eyebrow="Services" title="What we build," accent="and how we price it."
        lead="Pick a service, or tell us the problem and we will tell you the smallest thing that solves it. Every job gets a fixed quote before we start.">
        <PrimaryLink href={BOOK_URL} external>Book a 20-minute call</PrimaryLink>
        <GhostLink href="/#pricing">See starting prices</GhostLink>
      </Hero>

      <Section title="Services" band>
        {services.length === 0 ? (
          <p className="text-[#a3a9b2]">Our service list is loading slowly right now. Book a call and we will walk you through it.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.id} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                style={s.is_popular ? { borderColor: ACCENT } : undefined}>
                {s.is_popular ? <span className="mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold text-[#0d0f12]" style={{ background: ACCENT }}>Most asked for</span> : null}
                <h3 className={`${display.className} text-2xl font-bold`}>{s.name}</h3>
                <p className="mt-3 leading-relaxed text-[#a3a9b2]">{s.description}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {(s.features || []).map((f) => (
                    <li key={f} className="flex gap-3 text-[#d9dce1]"><Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ACCENT }} />{f}</li>
                  ))}
                </ul>
                <Link href={book(s)} className="mt-7 inline-flex justify-center rounded-lg border border-white/25 px-5 py-3 font-semibold transition hover:border-white/60">
                  Get a quote for this
                </Link>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section title="Not sure which one you need?" lead="Most clients start with one call. We look at what you have today and suggest the smallest useful step, even if that step is not a big project.">
        <div className="flex flex-wrap gap-3">
          <PrimaryLink href={BOOK_URL} external>Book a call</PrimaryLink>
          <GhostLink href="/custom-quote">Ask for a custom quote</GhostLink>
        </div>
      </Section>

      <CtaBand />
    </Page>
  )
}

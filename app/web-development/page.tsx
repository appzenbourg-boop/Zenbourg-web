import Image from "next/image"
import type { Metadata } from "next"
import { Page, Hero, Section, Grid, Card, Steps, CtaBand, PrimaryLink, GhostLink, BOOK_URL } from "@/components/zb"

export const metadata: Metadata = {
  title: "Web Development | Zenbourg",
  description: "Next.js websites, admin panels and web apps. Fast, mobile first, fixed price, source code yours.",
}

export default function WebDevelopmentPage() {
  return (
    <Page>
      <Hero eyebrow="Web development" title="Websites and web apps that" accent="load fast and stay up."
        lead="We build in Next.js and TypeScript, the same stack that runs our own hotel platform every day. You get a fixed quote, a working link to review every week, and the code in your name.">
        <PrimaryLink href={BOOK_URL} external>Book a 20-minute call</PrimaryLink>
        <GhostLink href="/#pricing">See prices</GhostLink>
      </Hero>

      <Section title="What we build" band>
        <Grid>
          <Card kicker="from $150 · ₹9,999" title="Business website">Up to 5 pages, mobile first, contact or enquiry form, basic SEO and fast hosting. About 5 days.</Card>
          <Card kicker="from $350" title="Website + admin panel">Edit your pages, products or rooms yourself. Booking or enquiry flow. About 10 days.</Card>
          <Card kicker="from $750" title="Custom web app">Login and roles, a dashboard on your data, payments. About 20 days, scoped on a call.</Card>
        </Grid>
      </Section>

      <Section title="Proof you can open" lead="Otiva is our own product: a hotel platform with bookings, front desk, inventory, procurement and finance. Same team, same stack as your project.">
        <a href="https://otiva.in" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border border-white/10">
          <Image src="/work/otiva-calendar.jpg" alt="Otiva reservations calendar" width={1600} height={664} className="h-auto w-full" />
        </a>
      </Section>

      <Section title="How a project runs" band>
        <Steps steps={[
          ["One call", "We hear what you need and what you have today. You get a fixed quote in writing."],
          ["50% to start", "Half in advance by direct invoice. Work starts the same week."],
          ["Weekly link", "Every week you get a live link to click through and comment on."],
          ["Launch and handover", "We go live, hand over the code and every login, and you pay the rest."],
        ]} />
      </Section>

      <Section title="What is always included">
        <Grid>
          <Card title="Speed">Images sized for phones, pages that load in a couple of seconds on mobile data.</Card>
          <Card title="Search basics">Titles, descriptions, sitemap and Google Search Console set up on day one.</Card>
          <Card title="Your accounts">Domain, hosting, analytics and repository registered in your name.</Card>
        </Grid>
      </Section>

      <CtaBand />
    </Page>
  )
}

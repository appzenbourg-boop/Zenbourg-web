import type { Metadata } from "next"
import { Page, Hero, Section, Grid, Card, CtaBand, PrimaryLink, GhostLink, BOOK_URL } from "@/components/zb"

export const metadata: Metadata = {
  title: "Custom Software and Automation | Zenbourg",
  description: "Dashboards, internal tools, integrations and AI assistants built around how your business already works.",
}

export default function CustomSolutionsPage() {
  return (
    <Page>
      <Hero eyebrow="Custom software" title="Software shaped around" accent="how you already work."
        lead="When a ready-made tool almost fits, we build the missing piece: an internal dashboard, a connection between two systems, or an assistant that answers customers for you.">
        <PrimaryLink href={BOOK_URL} external>Book a 20-minute call</PrimaryLink>
        <GhostLink href="/custom-quote">Ask for a custom quote</GhostLink>
      </Hero>

      <Section title="What we build" band>
        <Grid>
          <Card title="Internal dashboards">Sales, stock, bookings or finance in one screen, with alerts when something needs attention.</Card>
          <Card title="Integrations">Connect your website, payments, sheets, email and WhatsApp so data is typed in once.</Card>
          <Card title="AI WhatsApp receptionist">Answers common customer questions, collects details and hands over to your team. Setup ₹15,000, then ₹2,000 a month.</Card>
          <Card title="Booking and order systems">Availability, pricing and confirmations that run without phone tag.</Card>
          <Card title="Admin panels">Let your team update products, rooms, menus or listings without a developer.</Card>
          <Card title="Rescue and cleanup">An existing app that is slow or half finished: we review it and quote a fixed price to make it solid.</Card>
        </Grid>
      </Section>

      <Section title="Built on the same engine as Otiva" lead="Our hotel platform, Otiva, runs bookings, procurement, inventory and finance for hotels. The patterns that keep it reliable go into every custom build.">
        <GhostLink href="/portfolio">See our work</GhostLink>
      </Section>

      <CtaBand />
    </Page>
  )
}

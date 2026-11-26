import type { Metadata } from "next"
import { Page, Hero, Section, Grid, Card, CtaBand, PrimaryLink, GhostLink, BOOK_URL } from "@/components/zb"

export const metadata: Metadata = {
  title: "Search and Growth Setup | Zenbourg",
  description: "Technical SEO, Google Business Profile, analytics and landing pages that turn visits into enquiries.",
}

// Scoped to the marketing work a development studio delivers itself. No managed ad spend, no guaranteed rankings.
export default function DigitalMarketingPage() {
  return (
    <Page>
      <Hero eyebrow="Search and growth" title="Get found, then" accent="get the enquiry."
        lead="We set up the technical side of being found online and make sure every visit has a clear next step. No promises of page-one rankings; just the groundwork done properly.">
        <PrimaryLink href={BOOK_URL} external>Book a 20-minute call</PrimaryLink>
        <GhostLink href="/marketing-audit">Ask for a site check</GhostLink>
      </Hero>

      <Section title="What we set up" band>
        <Grid>
          <Card title="Technical SEO">Page titles and descriptions, sitemap, structured data, Search Console, and fixes for slow or broken pages.</Card>
          <Card title="Google Business Profile">A complete local listing with hours, photos, services and a link that goes straight to booking or enquiry.</Card>
          <Card title="Analytics that answer questions">Where visitors come from and which pages produce enquiries, in a dashboard you can read.</Card>
          <Card title="Landing pages">One page per offer or campaign, fast on phones, with one clear call to action.</Card>
          <Card title="Enquiry handling">Forms, WhatsApp and call buttons that reach the right person, with every lead saved.</Card>
          <Card title="Monthly check-in">Optional: a short monthly report and small fixes, priced up front.</Card>
        </Grid>
      </Section>

      <Section title="What we do not do" lead="So there are no surprises: we do not run paid ad budgets, buy followers or backlinks, or guarantee rankings. If you need ads managed, we will tell you honestly and point you to a specialist.">
        <div />
      </Section>

      <CtaBand title="Want more enquiries from the visitors you already get?" />
    </Page>
  )
}

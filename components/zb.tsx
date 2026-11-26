import type React from "react"
import { Bricolage_Grotesque } from "next/font/google"
import { ArrowUpRight } from "lucide-react"

// Zenbourg page kit (27 Nov 2026): one visual language for every marketing page.
// Dark ground, one orange accent, Bricolage Grotesque display, Inter body (from layout).
export const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], display: "swap" })
export const BOOK_URL = "https://calendar.app.google/PiJbdqC2qc4AWoQ78"
export const ACCENT = "#e2541c"

export function Page({ children }: { children: React.ReactNode }) {
  return <main className="bg-[#0d0f12] text-[#f1f2f4]">{children}</main>
}

export function Hero({ eyebrow, title, accent, lead, children }: {
  eyebrow: string; title: string; accent?: string; lead: string; children?: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-14 pt-28 md:px-8 md:pt-36">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8b929c]">{eyebrow}</p>
      <h1 className={`${display.className} mt-5 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight md:text-6xl`}>
        {title} {accent ? <span style={{ color: ACCENT }}>{accent}</span> : null}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a9b2] md:text-xl">{lead}</p>
      {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
    </section>
  )
}

export function Section({ title, lead, children, band = false, id }: {
  title: string; lead?: string; children: React.ReactNode; band?: boolean; id?: string
}) {
  return (
    <section id={id} className={band ? "border-y border-white/10 bg-[#121418]" : "border-t border-white/10"}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className={`${display.className} text-3xl font-bold tracking-tight md:text-5xl`}>{title}</h2>
        {lead ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#a3a9b2]">{lead}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export function PrimaryLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-lg px-6 py-4 font-semibold text-[#0d0f12] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      style={{ background: ACCENT }}>
      {children} <ArrowUpRight className="h-4 w-4" />
    </a>
  )
}

export function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-4 font-semibold transition hover:border-white/60">
      {children}
    </a>
  )
}

/** Cards in a row: same padding, same edges. */
export function Grid({ children, cols = 3 }: { children: React.ReactNode; cols?: 2 | 3 }) {
  return <div className={`grid gap-5 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>{children}</div>
}

export function Card({ title, children, kicker }: { title: string; children: React.ReactNode; kicker?: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      {kicker ? <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b929c]">{kicker}</p> : null}
      <h3 className={`${display.className} mt-2 text-2xl font-bold`}>{title}</h3>
      <div className="mt-3 leading-relaxed text-[#a3a9b2]">{children}</div>
    </div>
  )
}

/** A real sequence: numbered because the order matters. */
export function Steps({ steps }: { steps: [string, string][] }) {
  return (
    <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {steps.map(([t, d], i) => (
        <li key={t} className="border-t-2 pt-5" style={{ borderColor: ACCENT }}>
          <p className="font-mono text-sm text-[#8b929c]">Step {i + 1}</p>
          <h3 className="mt-1 text-xl font-semibold">{t}</h3>
          <p className="mt-2 leading-relaxed text-[#a3a9b2]">{d}</p>
        </li>
      ))}
    </ol>
  )
}

export function CtaBand({ title = "Tell us what you need. Get a fixed quote in one call." }: { title?: string }) {
  return (
    <section style={{ background: ACCENT }} className="text-[#0d0f12]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
        <h2 className={`${display.className} max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl`}>{title}</h2>
        <div className="flex flex-wrap gap-3">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#0d0f12] px-6 py-4 font-semibold text-white hover:bg-[#2a2d33]">
            Book a call <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="/contact" className="inline-flex items-center rounded-lg border-2 border-[#0d0f12] px-6 py-4 font-semibold text-[#0d0f12]">Write to us</a>
        </div>
      </div>
    </section>
  )
}

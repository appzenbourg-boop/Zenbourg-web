import { redirect } from "next/navigation"

// Case studies of template sample projects were removed (27 Nov 2026); real work lives on /portfolio.
export default function CaseStudyPage() {
  redirect("/portfolio")
}

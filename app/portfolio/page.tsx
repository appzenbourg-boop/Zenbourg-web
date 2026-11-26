import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Calendar } from "lucide-react"

export default function PortfolioPage() {
  // ✅ Dummy project data
  // Only real, live work (sample projects from the site template removed 27 Nov 2026)
  const projects = [
    {
      id: "otiva",
      title: "Otiva",
      description: "Hotel management platform we build and run: bookings with live pricing, front desk, inventory, procurement, P&L and GST reports.",
      image_url: "/work/otiva-inventory.jpg",
      live_url: "https://otiva.in",
      domain: "Hospitality SaaS",
      completed_date_text: "Live, 2026",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
      features: ["Bookings and calendar", "Inventory and procurement", "Finance reports"],
      metrics: {},
      reviews: [],
    },
    {
      id: "entry-club",
      title: "Entry Club",
      description: "Premium nightlife and events platform with its own user and admin back ends.",
      image_url: "/work/entryclub-card.png",
      live_url: "https://entryclub.in",
      domain: "Events & Nightlife",
      completed_date_text: "Live, 2025",
      technologies: ["Next.js", "TypeScript", "Node.js"],
      features: ["Event listings", "User accounts", "Admin back end"],
      metrics: {},
      reviews: [],
    },
  ]


  const pageContent = {
    main_title: "Our Project Portfolio",
    main_description: "Explore some of our successful projects built using modern web technologies.",
    cta_section_title: "Ready to Start Your Project?",
    cta_section_description: "Let’s bring your vision to life with our expertise.",
    cta_button1_text: "Book Free Consultation",
    cta_button2_text: "Get Custom Quote"
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {pageContent.main_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pageContent.main_description}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden ">
                {/* Project Image */}
                <div className="relative group">
                  <Image
                    src={project.image_url}
                    alt={`${project.title} Homepage`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0   flex items-center justify-center">
                    <Button asChild variant="secondary" size="lg">
                      <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Live Site
                      </Link>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.domain}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.completed_date_text}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <p className="text-gray-600">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  {Object.keys(project.metrics).length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Project Impact</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key.replace(/_/g, " ")}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reviews */}
                  {project.reviews && project.reviews.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Client Reviews</h4>
                      <div className="space-y-4">
                        {project.reviews.map((review) => (
                          <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <Image
                                src={review.reviewer_avatar_url}
                                alt={review.reviewer_name}
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <div>
                                    <p className="font-medium text-sm">{review.reviewer_name}</p>
                                    <p className="text-xs text-gray-500">{review.reviewer_role}</p>
                                  </div>
                                  <div className="flex">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{review.review_text}</p>
                                <p className="text-xs text-gray-400 mt-1">{review.review_date_text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button asChild className="flex-1">
                      <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Site
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {pageContent.cta_section_title}
          </h2>
          <p className="text-xl mb-8">
            {pageContent.cta_section_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/book">{pageContent.cta_button1_text}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">{pageContent.cta_button2_text}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

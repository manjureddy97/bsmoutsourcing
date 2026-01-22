import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Users, Target, Building2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold text-sm">Fast. Reliable. Results-Driven.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Hire the right talent, <span className="text-primary">faster</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              BSM Outsourcing delivers top-tier recruitment and staffing solutions to help your company scale without
              the hiring headache.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/contact">
                  Start Hiring Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Companies Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">72h</div>
              <div className="text-muted-foreground">Average Time to Hire</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Talents Placed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recruitment services that deliver</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we provide flexible staffing solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Direct Hire</h3>
              <p className="text-muted-foreground mb-4">
                Find permanent employees who are the perfect cultural and skills fit for your organization.
              </p>
              <Link href="/services" className="text-primary font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Contract Staffing</h3>
              <p className="text-muted-foreground mb-4">
                Flexible talent for projects, seasonal work, or temporary coverage with quick deployment.
              </p>
              <Link href="/services" className="text-primary font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Executive Search</h3>
              <p className="text-muted-foreground mb-4">
                Leadership recruitment for C-suite and senior management positions with proven track records.
              </p>
              <Link href="/services" className="text-primary font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our hiring process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to get you the right talent in record time
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Understand Your Needs</h3>
                  <p className="text-muted-foreground">
                    We dive deep into your requirements, culture, and goals to create a targeted hiring strategy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Source Top Candidates</h3>
                  <p className="text-muted-foreground">
                    Our extensive network and AI-powered tools help us identify the best matches from our talent pool.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Screen & Vet</h3>
                  <p className="text-muted-foreground">
                    Rigorous screening including skills assessment, background checks, and cultural fit evaluation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Present & Hire</h3>
                  <p className="text-muted-foreground">
                    We present qualified candidates, coordinate interviews, and support you through onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries we serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized recruitment expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Technology",
              "Healthcare",
              "Finance",
              "Manufacturing",
              "Retail",
              "Hospitality",
              "Construction",
              "Marketing",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-card border rounded-lg p-6 text-center hover:border-primary transition-colors"
              >
                <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-lg">{industry}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/industries">View All Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build your dream team?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your hiring needs and get you the perfect candidates within 72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/contact">
                  Start Hiring Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/talent-pool">Browse Talent Pool</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

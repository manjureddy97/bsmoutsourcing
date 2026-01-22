import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, GraduationCap, Award, Globe, Star } from "lucide-react"

export default function TalentPoolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Access our <span className="text-primary">elite talent pool</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              10,000+ pre-vetted professionals ready to join your team. From entry-level to executive, we have the
              talent you need.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Browse Available Talent <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Candidates</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Skill Categories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Major Industries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Pre-Screened</div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Talent by category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our diverse pool of qualified professionals across all skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Technology</h3>
              <p className="text-muted-foreground mb-4">
                Software engineers, data scientists, DevOps, QA, product managers, and IT professionals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Cloud</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">+50 more</span>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Sales & Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Account executives, marketing managers, content creators, SEO specialists, and growth hackers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">B2B Sales</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Digital Marketing</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">+30 more</span>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Finance & Accounting</h3>
              <p className="text-muted-foreground mb-4">
                CPAs, financial analysts, controllers, bookkeepers, tax specialists, and auditors.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">CPA</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">FP&A</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">+25 more</span>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Operations</h3>
              <p className="text-muted-foreground mb-4">
                Operations managers, supply chain experts, logistics coordinators, and project managers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Project Mgmt</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Logistics</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">+20 more</span>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Customer Success</h3>
              <p className="text-muted-foreground mb-4">
                Customer service reps, success managers, support specialists, and community managers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Support</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Account Mgmt</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">+15 more</span>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Star className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Executive Leadership</h3>
              <p className="text-muted-foreground mb-4">
                C-suite executives, VPs, directors, and senior managers with proven leadership experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">C-Suite</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">VP</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">+10 more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our vetting process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every candidate in our talent pool has been thoroughly screened
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card border rounded-xl p-8">
              <div className="text-4xl font-bold text-primary mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Resume & Portfolio Review</h3>
              <p className="text-muted-foreground">
                Initial screening of qualifications, experience, and work samples to ensure baseline requirements are
                met.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-8">
              <div className="text-4xl font-bold text-primary mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Skills Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive testing of technical and soft skills to verify expertise and competency levels.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-8">
              <div className="text-4xl font-bold text-primary mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">In-Depth Interview</h3>
              <p className="text-muted-foreground">
                One-on-one conversations with our recruitment specialists to understand motivations and work
                preferences.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-8">
              <div className="text-4xl font-bold text-primary mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Background Check</h3>
              <p className="text-muted-foreground">
                Verification of employment history, education credentials, and professional references for quality
                assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to meet your next hire?</h2>
            <p className="text-xl mb-8 opacity-90">
              Tell us what you're looking for and we'll connect you with qualified candidates from our talent pool.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request Candidates <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

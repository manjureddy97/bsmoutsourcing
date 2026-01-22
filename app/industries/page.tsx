import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Building2,
  Laptop,
  Heart,
  DollarSign,
  ShoppingBag,
  Utensils,
  Hammer,
  TrendingUp,
} from "lucide-react"

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Industry <span className="text-primary">expertise</span> that delivers
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We understand the unique hiring challenges of your industry and have the specialized knowledge to find the
              perfect fit.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Technology */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Laptop className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold">Technology</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  From startups to enterprise tech companies, we source top developers, engineers, product managers, and
                  IT professionals who drive innovation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Software Development & Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Data Science & Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">DevOps & Cloud Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Cybersecurity & IT Support</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Hire Tech Talent <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 h-[350px] flex items-center justify-center">
                <Laptop className="h-40 w-40 text-primary/20" />
              </div>
            </div>

            {/* Healthcare */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 h-[350px] flex items-center justify-center">
                <Heart className="h-40 w-40 text-accent/20" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold">Healthcare</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Connecting healthcare facilities with qualified medical professionals, administrators, and support
                  staff who are passionate about patient care.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Registered Nurses & Medical Staff</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Healthcare Administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Allied Health Professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Medical Billing & Coding</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Hire Healthcare Staff <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Finance */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold">Finance</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Financial services firms trust us to recruit skilled accountants, analysts, advisors, and executives
                  with deep industry expertise.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Accounting & Auditing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Financial Analysis & Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Investment Banking & Trading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Risk Management & Compliance</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Hire Finance Professionals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 h-[350px] flex items-center justify-center">
                <DollarSign className="h-40 w-40 text-primary/20" />
              </div>
            </div>

            {/* Manufacturing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 h-[350px] flex items-center justify-center">
                <Building2 className="h-40 w-40 text-accent/20" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold">Manufacturing</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Supplying manufacturing facilities with skilled production workers, engineers, quality control
                  specialists, and operations managers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Production & Assembly Workers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Quality Control & Assurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Industrial Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Operations & Plant Management</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Hire Manufacturing Staff <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Additional Industries Grid */}
            <div className="pt-12">
              <h2 className="text-3xl font-bold mb-8 text-center">More industries we serve</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card border rounded-xl p-6 hover:border-primary transition-colors">
                  <ShoppingBag className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Retail</h3>
                  <p className="text-sm text-muted-foreground">Store managers, sales associates, merchandisers</p>
                </div>

                <div className="bg-card border rounded-xl p-6 hover:border-primary transition-colors">
                  <Utensils className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Hospitality</h3>
                  <p className="text-sm text-muted-foreground">Hotel staff, chefs, event coordinators</p>
                </div>

                <div className="bg-card border rounded-xl p-6 hover:border-primary transition-colors">
                  <Hammer className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Construction</h3>
                  <p className="text-sm text-muted-foreground">Project managers, skilled trades, safety officers</p>
                </div>

                <div className="bg-card border rounded-xl p-6 hover:border-primary transition-colors">
                  <TrendingUp className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Marketing</h3>
                  <p className="text-sm text-muted-foreground">Digital marketers, content creators, brand managers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your industry, our expertise</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't see your industry listed? We work across many sectors. Let's talk about your specific needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

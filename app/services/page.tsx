import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Users, Target, Clock, Shield, TrendingUp, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Hiring services built for <span className="text-primary">speed & quality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you need one employee or an entire team, we have the expertise and talent network to deliver
              results fast.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {/* Direct Hire */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Direct Hire</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Find permanent employees who will become integral parts of your organization. Our thorough vetting
                  process ensures every candidate is a perfect match for both skills and culture.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Comprehensive candidate screening and background checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cultural fit assessment and personality testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>90-day replacement guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Average placement time: 3-4 weeks</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 h-[400px] flex items-center justify-center">
                <Briefcase className="h-48 w-48 text-primary/20" />
              </div>
            </div>

            {/* Contract Staffing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 h-[400px] flex items-center justify-center">
                <Users className="h-48 w-48 text-accent/20" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Contract Staffing</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Flexible workforce solutions for projects, seasonal demands, or temporary coverage. Get the talent you
                  need, when you need it, without long-term commitments.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Candidates ready to start within 48-72 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Flexible contracts from 1 week to 12 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Option to convert to permanent hire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>We handle payroll and administrative tasks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Executive Search */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Executive Search</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Strategic leadership recruitment for C-suite and senior management positions. We understand that great
                  leaders transform organizations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Confidential search process with discretion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Extensive market research and competitor analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Leadership assessment and reference verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>Post-placement support and onboarding assistance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 h-[400px] flex items-center justify-center">
                <Target className="h-48 w-48 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why companies choose BSM</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just another recruiting agency—we're your hiring partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-xl p-8">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                72-hour average time to present qualified candidates. We understand urgency and move fast.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-8">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                95% client satisfaction rate with our placement guarantee. We stand behind every hire.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-8">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                10,000+ successful placements across 8 major industries with 500+ satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's solve your hiring challenges</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to discuss your staffing needs and learn how we can help.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

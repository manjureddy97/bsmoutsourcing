import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <span className="text-2xl font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-bold">BSM Outsourcing</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping companies hire faster with reliable recruitment and staffing solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Direct Hire
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Executive Search
                </Link>
              </li>
              <li>
                <Link href="/talent-pool" className="text-muted-foreground hover:text-foreground">
                  Talent Pool
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-foreground">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-foreground">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-foreground">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-foreground">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 BSM Outsourcing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="/" className="hover:text-foreground">
              Twitter
            </Link>
            <Link href="/" className="hover:text-foreground">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "St. Vincent De Paul Catholic Church",
  description: "St. Vincent De Paul Catholic Church - A place of worship, community, and service",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <a href="/" className="flex items-center space-x-2 text-2xl font-bold">
                <Image src="/church-logo.svg" alt="St. Vincent De Paul Catholic Church Logo" width={40} height={40} />
                <span className="hidden md:inline">St. Vincent De Paul</span>
              </a>
              <nav className="ml-auto hidden md:flex gap-6">
                <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </a>
                <a href="/donate" className="text-sm font-medium transition-colors hover:text-primary">
                  Donate
                </a>
                <a href="/events" className="text-sm font-medium transition-colors hover:text-primary">
                  Events
                </a>
                <a href="/ministries" className="text-sm font-medium transition-colors hover:text-primary">
                  Ministries
                </a>
                <a href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Contact
                </a>
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="md:hidden" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4">
                    <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
                      Home
                    </a>
                    <a href="/donate" className="text-sm font-medium transition-colors hover:text-primary">
                      Donate
                    </a>
                    <a href="/events" className="text-sm font-medium transition-colors hover:text-primary">
                      Events
                    </a>
                    <a href="/ministries" className="text-sm font-medium transition-colors hover:text-primary">
                      Ministries
                    </a>
                    <a href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                      Contact
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t bg-muted">
            <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
              <div className="flex-1">
                <a href="/" className="flex items-center space-x-2 text-2xl font-bold">
                  <Image src="/church-logo.svg" alt="St. Vincent De Paul Catholic Church Logo" width={40} height={40} />
                  <span>St. Vincent De Paul</span>
                </a>
                <p className="mt-2 text-sm text-muted-foreground">A place of worship, community, and service</p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Quick Links</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>
                    <a href="/donate" className="transition-colors hover:text-primary">
                      Donate
                    </a>
                  </li>
                  <li>
                    <a href="/events" className="transition-colors hover:text-primary">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="/ministries" className="transition-colors hover:text-primary">
                      Ministries
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="transition-colors hover:text-primary">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Contact</h3>
                <address className="mt-2 not-italic text-sm text-muted-foreground">
                  123 Main St
                  <br />
                  Anytown, USA 12345
                  <br />
                  <a href="tel:+1234567890" className="transition-colors hover:text-primary">
                    Phone: (123) 456-7890
                  </a>
                  <br />
                  <a href="mailto:info@svdpchurch.org" className="transition-colors hover:text-primary">
                    Email: info@svdpchurch.org
                  </a>
                </address>
              </div>
            </div>
            <div className="border-t py-6 text-center text-sm">
              <p>&copy; 2024 St. Vincent De Paul Catholic Church. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}


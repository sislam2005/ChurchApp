"use client"

import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-platinum-300 bg-platinum-800/95 backdrop-blur supports-[backdrop-filter]:bg-platinum-800/60">
      <div className="container flex h-20 items-center px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3 text-2xl font-bold text-charcoal-500">
          <Image src="/church-logo.svg" alt="St. Vincent De Paul Catholic Church Logo" width={48} height={48} />
          <span className="hidden md:inline">St. Vincent De Paul</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
            Home
          </Link>
          <Link href="/aboutus" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
            About Us
          </Link>
          <Link href="/donate" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
            Donate
          </Link>
          <Link href="/events" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
            Events
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500 flex items-center gap-1">
              Ministries
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-platinum-800 border-platinum-300">
              <DropdownMenuItem asChild>
                <Link href="/ministries/youth" className="text-charcoal-500 hover:text-moonstone-500">
                  Youth Ministry
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ministries/music" className="text-charcoal-500 hover:text-moonstone-500">
                  Music Ministry
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ministries/outreach" className="text-charcoal-500 hover:text-moonstone-500">
                  Outreach Ministry
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ministries/education" className="text-charcoal-500 hover:text-moonstone-500">
                  Education Ministry
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-6 w-6 text-charcoal-500" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-platinum-800 border-platinum-300">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
                Home
              </Link>
              <Link href="/aboutus" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
                About Us
              </Link>
              <Link href="/donate" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
                Donate
              </Link>
              <Link href="/events" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
                Events
              </Link>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-charcoal-500">Ministries</span>
                <div className="flex flex-col gap-2 pl-4">
                  <Link href="/ministries/youth" className="text-sm text-charcoal-500 transition-colors hover:text-moonstone-500">
                    Youth Ministry
                  </Link>
                  <Link href="/ministries/music" className="text-sm text-charcoal-500 transition-colors hover:text-moonstone-500">
                    Music Ministry
                  </Link>
                  <Link href="/ministries/outreach" className="text-sm text-charcoal-500 transition-colors hover:text-moonstone-500">
                    Outreach Ministry
                  </Link>
                  <Link href="/ministries/education" className="text-sm text-charcoal-500 transition-colors hover:text-moonstone-500">
                    Education Ministry
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="text-sm font-medium text-charcoal-500 transition-colors hover:text-moonstone-500">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
} 
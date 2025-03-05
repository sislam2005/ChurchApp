import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-platinum-300 bg-platinum-800">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:gap-12 px-4 md:px-6 lg:px-8">
        <div className="flex-1 space-y-4">
          <Link href="/" className="flex items-center space-x-3 text-2xl font-bold text-charcoal-500">
            <Image src="/church-logo.svg" alt="St. Vincent De Paul Catholic Church Logo" width={48} height={48} />
            <span>St. Vincent De Paul</span>
          </Link>
          <p className="text-sm text-charcoal-400">A place of worship, community, and service</p>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-4 text-charcoal-500">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/aboutus" className="text-charcoal-400 transition-colors hover:text-moonstone-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/donate" className="text-charcoal-400 transition-colors hover:text-moonstone-500">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-charcoal-400 transition-colors hover:text-moonstone-500">
                Events
              </Link>
            </li>
            <li>
              <Link href="/ministries" className="text-charcoal-400 transition-colors hover:text-moonstone-500">
                Ministries
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-charcoal-400 transition-colors hover:text-moonstone-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="text-charcoal-400 transition-colors hover:text-moonstone-500">
                Volunteer
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-4 text-charcoal-500">Contact</h3>
          <address className="not-italic text-sm text-charcoal-400 space-y-2">
            <p>123 Main St</p>
            <p>Anytown, USA 12345</p>
            <a href="tel:+1234567890" className="block transition-colors hover:text-moonstone-500">
              Phone: (123) 456-7890
            </a>
            <a href="mailto:info@svdpchurch.org" className="block transition-colors hover:text-moonstone-500">
              Email: info@svdpchurch.org
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-platinum-300 py-8 text-center text-sm text-charcoal-400">
        <p>&copy; {new Date().getFullYear()} St. Vincent De Paul Catholic Church. All rights reserved.</p>
      </div>
    </footer>
  )
} 
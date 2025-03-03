import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Heart, BookOpen, Users, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=2070&auto=format&fit=crop"
          alt="St. Vincent De Paul Catholic Church"
          width={2070}
          height={1380}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white space-y-6 p-6">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to St. Vincent De Paul</h1>
          <p className="text-xl md:text-2xl">A place of worship, community, and service</p>
          <Button asChild variant="cta" size="cta" className="group">
            <a href="#quick-links">
              Plan Your Visit
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Links */}
      <section id="quick-links" className="grid md:grid-cols-4 gap-6">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Mass Times
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sunday: 8:00 AM, 10:00 AM, 12:00 PM</p>
            <p>Weekdays: 7:30 AM</p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Donate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Support our mission and community</p>
            <Button asChild className="mt-2" variant="custom">
              <a href="/donate">Donate Now</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Join us for fellowship and worship</p>
            <Button asChild variant="outline" className="mt-2 rounded-sm">
              <a href="/events">View Events</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Ministries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get involved in our community</p>
            <Button asChild variant="outline" className="mt-2 rounded-sm">
              <a href="/ministries">Learn More</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            St. Vincent De Paul Catholic Church is committed to spreading the Gospel of Jesus Christ, serving our
            community, and fostering a welcoming environment for all. We strive to live out our faith through worship,
            education, and charitable works.
          </p>
          <Button asChild variant="outline" className="rounded-sm">
            <a href="/about">Learn More About Us</a>
          </Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CalendarDays className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <strong>Parish Picnic:</strong> Join us this Sunday after the 12:00 PM Mass for food and fellowship.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CalendarDays className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <strong>Bible Study:</strong> Every Wednesday at 7:00 PM in the Parish Hall.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CalendarDays className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <strong>Youth Group:</strong> Friday nights at 6:30 PM for teens and young adults.
              </div>
            </li>
          </ul>
          <Button asChild variant="link" className="p-0">
            <a href="/events">See all events</a>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground p-12 rounded-lg text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
        <p className="text-lg text-muted-foreground mb-8">Join us in our mission to serve God&apos;s people through charity and compassion.</p>
        <p className="text-lg text-muted-foreground">We&apos;re dedicated to making a difference in our community.</p>
        <Button asChild variant="secondary" size="lg" className="rounded-sm">
          <a href="/contact">Contact Us</a>
        </Button>
      </section>
    </div>
  )
}


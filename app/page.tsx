import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/church-hero.jpg"
            alt="St. Vincent De Paul Church"
            width={1920}
            height={1080}
            className="w-full h-full object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to St. Vincent De Paul</h1>
          <p className="text-xl md:text-2xl mb-8">A place of worship, community, and service</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-moonstone-500 hover:bg-moonstone-600 text-white">
              <Link href="/aboutus">Learn More</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mass Times Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal-500 mb-12">Mass Times</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-platinum-700 border-platinum-300">
              <CardHeader>
                <CardTitle className="text-charcoal-500">Weekdays</CardTitle>
                <CardDescription className="text-charcoal-400">Monday - Friday</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-charcoal-500">
                  <p>Morning Mass: 8:00 AM</p>
                  <p>Evening Mass: 5:30 PM</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-platinum-700 border-platinum-300">
              <CardHeader>
                <CardTitle className="text-charcoal-500">Saturday</CardTitle>
                <CardDescription className="text-charcoal-400">Vigil Mass</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-charcoal-500">
                  <p>4:00 PM</p>
                  <p>6:00 PM</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-platinum-700 border-platinum-300">
              <CardHeader>
                <CardTitle className="text-charcoal-500">Sunday</CardTitle>
                <CardDescription className="text-charcoal-400">Sunday Mass</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-charcoal-500">
                  <p>8:00 AM</p>
                  <p>10:00 AM</p>
                  <p>12:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-platinum-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal-500">About Our Church</h2>
              <p className="text-charcoal-400 text-lg">
                St. Vincent De Paul Catholic Church is a vibrant community of faith, dedicated to serving God and our neighbors. 
                Founded in 1950, we have been a cornerstone of spiritual growth and community service in our area.
              </p>
              <p className="text-charcoal-400 text-lg">
                Our mission is to spread the love of Christ through worship, education, and service to others. 
                We welcome all who seek to grow in their faith and make a difference in the world.
              </p>
              <Button asChild className="bg-moonstone-500 hover:bg-moonstone-600 text-white">
                <Link href="/aboutus">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/church-about.jpg"
                alt="St. Vincent De Paul Church"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-platinum-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal-500 mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-platinum-800 border-platinum-300 hover:border-moonstone-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-charcoal-500">About Us</CardTitle>
                <CardDescription className="text-charcoal-400">Learn about our history and mission</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-platinum-800 border-platinum-300 hover:border-moonstone-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-charcoal-500">Donate</CardTitle>
                <CardDescription className="text-charcoal-400">Support our church and community</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-platinum-800 border-platinum-300 hover:border-moonstone-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-charcoal-500">Events</CardTitle>
                <CardDescription className="text-charcoal-400">Upcoming events and celebrations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-platinum-800 border-platinum-300 hover:border-moonstone-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-charcoal-500">Ministries</CardTitle>
                <CardDescription className="text-charcoal-400">Get involved in our community</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal-500 mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-moonstone-500" />
              <div>
                <h3 className="font-semibold text-charcoal-500">Address</h3>
                <p className="text-charcoal-400">123 Main St, Anytown, USA 12345</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-moonstone-500" />
              <div>
                <h3 className="font-semibold text-charcoal-500">Phone</h3>
                <p className="text-charcoal-400">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8 text-moonstone-500" />
              <div>
                <h3 className="font-semibold text-charcoal-500">Office Hours</h3>
                <p className="text-charcoal-400">Mon-Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-moonstone-500">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about mass times, events, and community news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-moonstone-500 hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Utensils, Shirt, Home } from "lucide-react"

const outreachPrograms = [
  {
    title: "Food Pantry",
    description: "Provide food assistance to families in need within our community.",
    schedule: "Mondays & Thursdays, 9:00 AM - 12:00 PM",
    location: "Parish Center",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Clothing Drive",
    description: "Collect and distribute clothing to those in need.",
    schedule: "Monthly collections",
    location: "Church Basement",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Housing Assistance",
    description: "Support families facing housing challenges through various programs.",
    schedule: "By appointment",
    location: "Outreach Office",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000",
  },
]

const upcomingOutreachEvents = [
  {
    title: "Community Thanksgiving Dinner",
    date: "November 28, 2024",
    description: "Annual community dinner serving those in need.",
    location: "Parish Hall",
  },
  {
    title: "Winter Coat Drive",
    date: "December 1-15, 2024",
    description: "Collect warm coats for children and adults in need.",
    location: "Church Lobby",
  },
  {
    title: "Spring Food Drive",
    date: "March 15-30, 2025",
    description: "Large-scale food collection for our pantry.",
    location: "Various locations",
  },
]

export default function OutreachMinistryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000"
            alt="Outreach Ministry"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Outreach Ministry</h1>
          <p className="text-xl md:text-2xl">Serving our community with love and compassion</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal-500">About Our Outreach Ministry</h2>
              <p className="text-lg text-charcoal-400">
                Our outreach ministry serves those in need within our community and beyond.
                We provide support, resources, and hope to individuals and families facing challenges.
                Through various programs and initiatives, we work to make a positive difference in the lives of others.
              </p>
              <ul className="space-y-3 text-charcoal-400">
                <li className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-moonstone-500" />
                  <span>Food Assistance Programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="w-5 h-5 text-moonstone-500" />
                  <span>Clothing Drives</span>
                </li>
                <li className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-moonstone-500" />
                  <span>Housing Support</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000"
                alt="Outreach Ministry Activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-platinum-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-500 mb-4">Our Programs</h2>
            <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
              Various initiatives designed to support and uplift our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outreachPrograms.map((program) => (
              <Card key={program.title} className="bg-platinum-700 border-platinum-300">
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-charcoal-500">{program.title}</CardTitle>
                  <CardDescription className="text-charcoal-400">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-charcoal-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-moonstone-500" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-moonstone-500" />
                      <span>{program.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-500 mb-4">Upcoming Events</h2>
            <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
              Special events and initiatives to support our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingOutreachEvents.map((event) => (
              <Card key={event.title} className="bg-platinum-700 border-platinum-300">
                <CardHeader>
                  <CardTitle className="text-charcoal-500">{event.title}</CardTitle>
                  <CardDescription className="text-charcoal-400">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-charcoal-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-moonstone-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-moonstone-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-moonstone-500">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in making a difference in our community. Whether you want to volunteer,
            donate, or learn more about our programs, we welcome your participation.
          </p>
          <Button asChild className="bg-white text-moonstone-500 hover:bg-white/90">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  )
} 
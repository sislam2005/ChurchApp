"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, GraduationCap, Heart } from "lucide-react"

const youthPrograms = [
  {
    title: "Sunday Youth Group",
    description: "Weekly gatherings for fellowship, prayer, and faith formation.",
    schedule: "Every Sunday, 4:00 PM - 6:00 PM",
    location: "Parish Center",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Bible Study",
    description: "Explore Scripture and discuss its relevance to modern life.",
    schedule: "Wednesdays, 6:30 PM - 8:00 PM",
    location: "Youth Room",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Community Service",
    description: "Make a difference through various service projects.",
    schedule: "Monthly projects",
    location: "Various locations",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000",
  },
]

const upcomingEvents = [
  {
    title: "Summer Youth Retreat",
    date: "June 20-22, 2025",
    description: "A weekend of faith, fun, and fellowship at Camp Sonshine.",
    location: "Camp Sonshine",
  },
  {
    title: "Youth Mass",
    date: "First Sunday of each month",
    description: "Special Mass led by our youth ministry.",
    location: "Main Church",
  },
  {
    title: "Youth Leadership Training",
    date: "July 15-17, 2025",
    description: "Develop leadership skills and grow in faith.",
    location: "Parish Center",
  },
]

export default function YouthMinistryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=1000"
            alt="Youth Ministry"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Youth Ministry</h1>
          <p className="text-xl md:text-2xl">Growing in faith, building community, serving others</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal-500">About Our Youth Ministry</h2>
              <p className="text-lg text-charcoal-400">
                Our youth ministry provides a welcoming environment for young people to grow in their faith,
                build meaningful relationships, and serve their community. We offer various programs and
                activities designed to engage and inspire our youth.
              </p>
              <ul className="space-y-3 text-charcoal-400">
                <li className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-moonstone-500" />
                  <span>Faith Formation Classes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-moonstone-500" />
                  <span>Youth Group Meetings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-moonstone-500" />
                  <span>Community Service Projects</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=1000"
                alt="Youth Ministry Activities"
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
              Regular activities and programs designed to help youth grow in their faith journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youthPrograms.map((program) => (
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
              Special events and activities for our youth community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
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
            Interested in joining our youth ministry? Contact us to learn more about our programs and events.
          </p>
          <Button asChild className="bg-white text-moonstone-500 hover:bg-white/90">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  )
} 
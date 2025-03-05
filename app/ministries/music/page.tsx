"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Mic2, Piano, Guitar, Calendar, MapPin, Clock } from "lucide-react"

const musicEnsembles = [
  {
    title: "Adult Choir",
    description: "Our main choir that leads the congregation in song during Sunday Mass and special celebrations.",
    schedule: "Thursdays, 7:00 PM - 8:30 PM",
    location: "Choir Room",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Youth Choir",
    description: "A vibrant ensemble for young singers to develop their musical talents and lead worship.",
    schedule: "Wednesdays, 4:00 PM - 5:30 PM",
    location: "Youth Music Room",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Instrumental Ensemble",
    description: "A group of talented musicians who enhance our worship with various instruments.",
    schedule: "Tuesdays, 6:00 PM - 7:30 PM",
    location: "Music Hall",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000",
  },
]

const upcomingPerformances = [
  {
    title: "Christmas Concert",
    date: "December 15, 2024",
    description: "Annual Christmas concert featuring all music ministry ensembles.",
    location: "Main Church",
  },
  {
    title: "Easter Vigil",
    date: "April 19, 2025",
    description: "Special musical celebration for the Easter Vigil Mass.",
    location: "Main Church",
  },
  {
    title: "Summer Music Festival",
    date: "July 20, 2025",
    description: "Community music festival featuring local choirs and musicians.",
    location: "Parish Center",
  },
]

export default function MusicMinistryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1000"
            alt="Music Ministry"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Music Ministry</h1>
          <p className="text-xl md:text-2xl">Praising God through song and music</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal-500">About Our Music Ministry</h2>
              <p className="text-lg text-charcoal-400">
                Our music ministry enhances the worship experience through beautiful music and song.
                We welcome singers and musicians of all skill levels to join our various ensembles
                and share their talents with our community.
              </p>
              <ul className="space-y-3 text-charcoal-400">
                <li className="flex items-center gap-2">
                  <Mic2 className="w-5 h-5 text-moonstone-500" />
                  <span>Vocal Ensembles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Piano className="w-5 h-5 text-moonstone-500" />
                  <span>Instrumental Groups</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-moonstone-500" />
                  <span>Community Performances</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1000"
                alt="Music Ministry Activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ensembles Section */}
      <section className="py-16 bg-platinum-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-500 mb-4">Our Ensembles</h2>
            <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
              Join one of our musical ensembles and share your talents with our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicEnsembles.map((ensemble) => (
              <Card key={ensemble.title} className="bg-platinum-700 border-platinum-300">
                <div className="relative h-48">
                  <Image
                    src={ensemble.image}
                    alt={ensemble.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-charcoal-500">{ensemble.title}</CardTitle>
                  <CardDescription className="text-charcoal-400">{ensemble.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-charcoal-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-moonstone-500" />
                      <span>{ensemble.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-moonstone-500" />
                      <span>{ensemble.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Performances Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-500 mb-4">Upcoming Performances</h2>
            <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
              Special musical events and celebrations throughout the year.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingPerformances.map((performance) => (
              <Card key={performance.title} className="bg-platinum-700 border-platinum-300">
                <CardHeader>
                  <CardTitle className="text-charcoal-500">{performance.title}</CardTitle>
                  <CardDescription className="text-charcoal-400">{performance.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-charcoal-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-moonstone-500" />
                      <span>{performance.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-moonstone-500" />
                      <span>{performance.location}</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Music Ministry</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a singer or instrumentalist, we welcome you to share your musical talents
            with our community. Contact us to learn more about joining one of our ensembles.
          </p>
          <Button asChild className="bg-white text-moonstone-500 hover:bg-white/90">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  )
} 
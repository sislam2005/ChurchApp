"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users, Calendar, MapPin, Clock } from "lucide-react"

const educationPrograms = [
  {
    title: "Adult Faith Formation",
    description: "Deepen your understanding of Catholic teachings and traditions through engaging discussions and study.",
    schedule: "Thursdays, 7:00 PM - 8:30 PM",
    location: "Parish Hall",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Religious Education",
    description: "Comprehensive faith formation program for children in grades K-8.",
    schedule: "Sundays, 9:00 AM - 10:30 AM",
    location: "Education Center",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Bible Study",
    description: "Explore Scripture in depth through guided study and reflection.",
    schedule: "Wednesdays, 6:30 PM - 8:00 PM",
    location: "Parish Library",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000",
  },
]

const upcomingEducationEvents = [
  {
    title: "Catechist Training",
    date: "September 15, 2024",
    description: "Training session for new and returning catechists.",
    location: "Education Center",
  },
  {
    title: "Parent Information Night",
    date: "September 20, 2024",
    description: "Information session for parents of Religious Education students.",
    location: "Parish Hall",
  },
  {
    title: "Adult Confirmation Classes",
    date: "October 1, 2024",
    description: "Begin your journey to receive the Sacrament of Confirmation.",
    location: "Parish Library",
  },
]

export default function EducationMinistryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000"
            alt="Education Ministry"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Education Ministry</h1>
          <p className="text-xl md:text-2xl">Growing in faith through learning and study</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal-500">About Our Education Ministry</h2>
              <p className="text-lg text-charcoal-400">
                Our education ministry provides opportunities for spiritual growth and learning
                for all ages. We offer various programs to deepen understanding of our faith
                and strengthen our relationship with God.
              </p>
              <ul className="space-y-3 text-charcoal-400">
                <li className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-moonstone-500" />
                  <span>Adult Faith Formation</span>
                </li>
                <li className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-moonstone-500" />
                  <span>Religious Education</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-moonstone-500" />
                  <span>Bible Study Groups</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000"
                alt="Education Ministry Activities"
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
              Various educational opportunities for all ages and stages of faith.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationPrograms.map((program) => (
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
              Special events and programs in our education ministry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEducationEvents.map((event) => (
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
            Whether you want to teach, learn, or volunteer, there are many ways to participate
            in our education ministry. Contact us to learn more about opportunities.
          </p>
          <Button asChild className="bg-white text-moonstone-500 hover:bg-white/90">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  )
} 
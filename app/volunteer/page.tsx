"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, BookOpen, Church, Heart, HandIcon, Coffee } from "lucide-react"

const volunteerOpportunities = [
  {
    title: "Liturgical Ministry",
    description: "Serve during Mass as lectors, Eucharistic ministers, altar servers, or choir members.",
    icon: Church,
    requirements: "Must be a practicing Catholic in good standing",
  },
  {
    title: "Religious Education",
    description: "Help teach and share the faith with children, youth, and adults in our parish.",
    icon: BookOpen,
    requirements: "Background check required, teaching experience helpful",
  },
  {
    title: "Outreach and Social Justice",
    description: "Participate in community service projects and advocate for social justice issues.",
    icon: Heart,
    requirements: "No specific requirements, all are welcome",
  },
  {
    title: "Prayer Groups",
    description: "Join or lead prayer groups focused on different devotions and spiritual practices.",
    icon: HandIcon,
    requirements: "Open to all parishioners",
  },
  {
    title: "Youth Ministry",
    description: "Work with young people to foster their faith and build a strong community.",
    icon: Users,
    requirements: "Background check required, experience with youth helpful",
  },
  {
    title: "Hospitality",
    description: "Welcome new members and visitors, and help organize parish social events.",
    icon: Coffee,
    requirements: "Friendly and welcoming personality",
  },
]

export default function VolunteerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000"
            alt="Volunteer Opportunities"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-xl md:text-2xl">Make a difference in our community</p>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-500 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
              There are many ways to serve in our parish. Find an opportunity that matches your interests and schedule.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.title} className="bg-platinum-700 border-platinum-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <opportunity.icon className="w-6 h-6 text-moonstone-500" />
                    <CardTitle className="text-charcoal-500">{opportunity.title}</CardTitle>
                  </div>
                  <CardDescription className="text-charcoal-400">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-400">{opportunity.requirements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 bg-platinum-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-charcoal-500 mb-4">Volunteer Registration</h2>
              <p className="text-lg text-charcoal-400">
                Fill out the form below to express your interest in volunteering.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal-400 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded-lg bg-platinum-800 border border-platinum-300 focus:outline-none focus:ring-2 focus:ring-moonstone-500 text-charcoal-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal-400 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 rounded-lg bg-platinum-800 border border-platinum-300 focus:outline-none focus:ring-2 focus:ring-moonstone-500 text-charcoal-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-platinum-800 border border-platinum-300 focus:outline-none focus:ring-2 focus:ring-moonstone-500 text-charcoal-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg bg-platinum-800 border border-platinum-300 focus:outline-none focus:ring-2 focus:ring-moonstone-500 text-charcoal-500"
                />
              </div>
              <div>
                <label htmlFor="ministry" className="block text-sm font-medium text-charcoal-400 mb-1">
                  Ministry Interest
                </label>
                <select
                  id="ministry"
                  className="w-full px-4 py-2 rounded-lg bg-platinum-800 border border-platinum-300 focus:outline-none focus:ring-2 focus:ring-moonstone-500 text-charcoal-500"
                >
                  <option value="">Select a ministry</option>
                  {volunteerOpportunities.map((opportunity) => (
                    <option key={opportunity.title} value={opportunity.title}>
                      {opportunity.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-platinum-800 border border-platinum-300 focus:outline-none focus:ring-2 focus:ring-moonstone-500 text-charcoal-500"
                ></textarea>
              </div>
              <Button className="w-full bg-moonstone-500 hover:bg-moonstone-600 text-white">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 
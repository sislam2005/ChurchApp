"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, Clock, MapPin, Grid, Users } from "lucide-react"
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar"
import { format } from "date-fns"
import { parse } from "date-fns"
import { startOfWeek } from "date-fns"
import { getDay } from "date-fns"
import { enUS } from "date-fns/locale"
import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    id: 1,
    title: "Easter Sunday Mass",
    description: "Join us for a special Easter celebration of the Resurrection.",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 3, 20, 10, 0), // April 20, 2025, 10:00 AM
    end: new Date(2025, 3, 20, 11, 30),
    location: "Main Church",
  },
  {
    id: 2,
    title: "Spring Bible Study",
    description: "Explore the Scriptures in our seasonal Bible study series.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 4, 7, 19, 0), // May 7, 2025, 7:00 PM
    end: new Date(2025, 4, 7, 20, 30),
    location: "Parish Hall",
  },
  {
    id: 3,
    title: "Community Garden Planting",
    description: "Help us plant our community garden to support local food banks.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 4, 17, 9, 0), // May 17, 2025, 9:00 AM
    end: new Date(2025, 4, 17, 12, 0),
    location: "Church Grounds",
  },
  {
    id: 4,
    title: "Summer Youth Retreat",
    description: "A weekend of faith, fun, and fellowship for our youth.",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 5, 20, 9, 0), // June 20, 2025, 9:00 AM
    end: new Date(2025, 5, 22, 15, 0), // June 22, 2025, 3:00 PM
    location: "Camp Sonshine",
  },
  {
    id: 5,
    title: "Fourth of July Picnic",
    description: "Celebrate Independence Day with our parish family.",
    image: "https://images.unsplash.com/photo-1593034509785-5b17ba49f683?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 6, 4, 11, 0),
    end: new Date(2025, 6, 4, 15, 0),
    location: "Church Grounds",
  },
  {
    id: 6,
    title: "Vacation Bible School",
    description: "A week of faith-filled fun and learning for children.",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 7, 11, 9, 0), // August 11, 2025, 9:00 AM
    end: new Date(2025, 7, 15, 12, 0), // August 15, 2025, 12:00 PM
    location: "Parish Center",
  },
  {
    id: 7,
    title: "Advent Retreat",
    description: "Prepare your heart for Christmas with our annual Advent retreat.",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 11, 6, 9, 0), // December 6, 2025, 9:00 AM
    end: new Date(2025, 11, 6, 16, 0), // December 6, 2025, 4:00 PM
    location: "Parish Hall",
  },
  {
    id: 8,
    title: "Christmas Concert",
    description: "Annual Christmas concert featuring all music ministry ensembles.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2024, 11, 15, 19, 0), // December 15, 2024, 7:00 PM
    end: new Date(2024, 11, 15, 21, 0),
    location: "Main Church",
  },
  {
    id: 9,
    title: "Easter Vigil",
    description: "Special musical celebration for the Easter Vigil Mass.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 3, 19, 20, 0), // April 19, 2025, 8:00 PM
    end: new Date(2025, 3, 19, 23, 0),
    location: "Main Church",
  },
  {
    id: 10,
    title: "Summer Music Festival",
    description: "Community music festival featuring local choirs and musicians.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 6, 20, 18, 0), // July 20, 2025, 6:00 PM
    end: new Date(2025, 6, 20, 22, 0),
    location: "Parish Center",
  },
]

interface Event {
  id: number
  title: string
  description: string
  image: string
  start: Date
  end: Date
  location: string
}

const EventItem = ({ event }: { event: Event }) => (
  <div className="flex flex-col p-2 bg-white rounded-md shadow-sm border border-gray-200">
    <div className="flex items-center mb-2">
      <Image
        src={event.image || "/placeholder.svg"}
        alt={event.title}
        width={40}
        height={40}
        className="rounded-full mr-2"
      />
      <span className="text-sm font-medium">{event.title}</span>
    </div>
    <p className="text-xs text-gray-600 mb-1">{event.description}</p>
    <div className="flex items-center text-xs text-gray-500">
      <Clock className="w-3 h-3 mr-1" />
      <span>
        {format(event.start, "MMM d, h:mm a")} - {format(event.end, "h:mm a")}
      </span>
    </div>
    <div className="flex items-center text-xs text-gray-500">
      <MapPin className="w-3 h-3 mr-1" />
      <span>{event.location}</span>
    </div>
  </div>
)

export default function EventsPage() {
  const [view, setView] = useState("grid")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null)
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const getEventsForDate = (day: number) => {
    if (!day) return []
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return events.filter(event => {
      const eventDate = new Date(event.start)
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear()
    })
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="min-h-screen bg-base-300">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/events-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl">Join us in fellowship and celebration</p>
      </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
              <div
                key={event.id}
                className="bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center text-white/90 text-sm space-x-4">
                  <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {format(event.start, "MMM d, yyyy")}
                  </div>
                  <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                      {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-base-content/80 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-base-content/80 mb-4">{event.description}</p>
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-content"
                    onClick={() => setSelectedEvent(event)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-primary mb-4">Church Calendar</h2>
              <p className="text-base-content/80 text-lg">
                Stay updated with all our upcoming events and celebrations
              </p>
            </div>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-content">
              <Link href="/calendar">View Full Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-base-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Stay Updated</h2>
            <p className="text-base-content/80 text-lg mb-8">
              Subscribe to our newsletter to receive updates about upcoming events and parish news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-base-200 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary text-base-content"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 text-amber-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-base-200 rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-primary">{selectedEvent.title}</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-base-content/70 hover:text-base-content"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-base-content/80">
                <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                <span>{format(selectedEvent.start, "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center text-base-content/80">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>{format(selectedEvent.start, "h:mm a")} - {format(selectedEvent.end, "h:mm a")}</span>
              </div>
              <div className="flex items-center text-base-content/80">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>{selectedEvent.location}</span>
              </div>
              <p className="text-base-content/80">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


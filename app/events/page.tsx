"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Grid, CalendarIcon } from "lucide-react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
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
    image: "https://images.unsplash.com/photo-1575373033819-c8ccd801a756?auto=format&fit=crop&q=80&w=1000",
    start: new Date(2025, 6, 4, 11, 0), // July 4, 2025, 11:00 AM
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Spring & Summer Events 2025</h1>
        <div className="flex space-x-2">
          <Button variant={view === "grid" ? "default" : "outline"} size="icon" onClick={() => setView("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={view === "calendar" ? "default" : "outline"} size="icon" onClick={() => setView("calendar")}>
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={400}
                height={200}
                className="object-cover h-48 w-full rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>{format(event.start, "MMMM d, yyyy")}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>
                      {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="h-[600px]">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%" }}
            components={{
              event: EventItem,
            }}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: "transparent",
                border: "none",
              },
            })}
            formats={{
              eventTimeRangeFormat: () => "",
            }}
          />
        </div>
      )}

      <style jsx global>{`
        .rbc-calendar {
          background-color: #f8fafc;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
        .rbc-header {
          background-color: #e2e8f0;
          padding: 0.5rem;
          font-weight: 600;
          color: #1e293b;
        }
        .rbc-today {
          background-color: #e0f2fe;
        }
        .rbc-event {
          background-color: transparent;
        }
        .rbc-event-content {
          font-size: 0.875rem;
        }
        .rbc-toolbar button {
          color: #1e293b;
        }
        .rbc-toolbar button:hover {
          background-color: #e2e8f0;
        }
        .rbc-toolbar button.rbc-active {
          background-color: #cbd5e1;
        }
        .rbc-month-view {
          border-color: #e2e8f0;
        }
        .rbc-day-bg + .rbc-day-bg {
          border-color: #e2e8f0;
        }
        .rbc-month-row + .rbc-month-row {
          border-color: #e2e8f0;
        }
        .rbc-off-range-bg {
          background-color: #f1f5f9;
        }
        .rbc-date-cell {
          color: #475569;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}


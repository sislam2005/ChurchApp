"use client"

import { useState } from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths } from "date-fns"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

// Generate recurring weekly events
const generateWeeklyEvents = () => {
  const events = []
  const today = new Date()
  const sixMonthsFromNow = addMonths(today, 6)

  // Sunday Masses
  for (let d = new Date(today); d <= sixMonthsFromNow; d.setDate(d.getDate() + 7)) {
    if (d.getDay() === 0) { // Sunday
      events.push({
        id: `mass-${d.toISOString()}`,
        title: "Sunday Mass",
        date: new Date(d),
        time: "10:00 AM",
        location: "Main Church",
        description: "Weekly celebration of the Eucharist",
        isRecurring: true
      })
    }
  }

  // Youth Group Meeting
  for (let d = new Date(today); d <= sixMonthsFromNow; d.setDate(d.getDate() + 7)) {
    if (d.getDay() === 3) { // Wednesday
      events.push({
        id: `youth-${d.toISOString()}`,
        title: "Youth Group Meeting",
        date: new Date(d),
        time: "6:00 PM",
        location: "Youth Center",
        description: "Weekly gathering for young parishioners",
        isRecurring: true
      })
    }
  }

  // Bible Study
  for (let d = new Date(today); d <= sixMonthsFromNow; d.setDate(d.getDate() + 7)) {
    if (d.getDay() === 4) { // Thursday
      events.push({
        id: `bible-${d.toISOString()}`,
        title: "Bible Study",
        date: new Date(d),
        time: "7:00 PM",
        location: "Parish Hall",
        description: "Weekly scripture reflection and discussion",
        isRecurring: true
      })
    }
  }

  return events
}

const specialEvents = [
  {
    id: 1,
    title: "Easter Sunday Mass",
    date: new Date(2025, 3, 20),
    time: "10:00 AM",
    location: "Main Church",
    description: "Join us for a special Easter celebration of the Resurrection.",
    isRecurring: false
  },
  {
    id: 2,
    title: "Spring Bible Study",
    date: new Date(2025, 4, 7),
    time: "7:00 PM",
    location: "Parish Hall",
    description: "Explore the Scriptures in our seasonal Bible study series.",
    isRecurring: false
  },
  {
    id: 3,
    title: "Community Garden Planting",
    date: new Date(2025, 4, 17),
    time: "9:00 AM",
    location: "Church Grounds",
    description: "Help us plant our community garden to support local food banks.",
    isRecurring: false
  },
  {
    id: 4,
    title: "Summer Youth Retreat",
    date: new Date(2025, 5, 20),
    time: "9:00 AM",
    location: "Camp Sonshine",
    description: "A weekend of faith, fun, and fellowship for our youth.",
    isRecurring: false
  },
  {
    id: 5,
    title: "Fourth of July Picnic",
    date: new Date(2025, 6, 4),
    time: "11:00 AM",
    location: "Church Grounds",
    description: "Celebrate Independence Day with our parish family.",
    isRecurring: false
  },
  {
    id: 6,
    title: "Vacation Bible School",
    date: new Date(2025, 7, 11),
    time: "9:00 AM",
    location: "Parish Center",
    description: "A week of faith-filled fun and learning for children.",
    isRecurring: false
  },
  {
    id: 7,
    title: "Advent Retreat",
    date: new Date(2025, 11, 6),
    time: "9:00 AM",
    location: "Parish Hall",
    description: "Prepare your heart for Christmas with our annual Advent retreat.",
    isRecurring: false
  },
  {
    id: 8,
    title: "Christmas Concert",
    date: new Date(2024, 11, 15),
    time: "7:00 PM",
    location: "Main Church",
    description: "Annual Christmas concert featuring all music ministry ensembles.",
    isRecurring: false
  },
  {
    id: 9,
    title: "Easter Vigil",
    date: new Date(2025, 3, 19),
    time: "8:00 PM",
    location: "Main Church",
    description: "Special musical celebration for the Easter Vigil Mass.",
    isRecurring: false
  },
  {
    id: 10,
    title: "Summer Music Festival",
    date: new Date(2025, 6, 20),
    time: "6:00 PM",
    location: "Parish Center",
    description: "Community music festival featuring local choirs and musicians.",
    isRecurring: false
  }
]

const events = [...generateWeeklyEvents(), ...specialEvents]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    )
  }

  return (
    <div className="min-h-screen bg-base-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-base-200 rounded-lg shadow-xl p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary/10"
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              >
                Previous Month
              </Button>
              <h2 className="text-3xl font-bold text-primary">
                {format(currentDate, "MMMM yyyy")}
              </h2>
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary/10"
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              >
                Next Month
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar Grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-7 gap-1">
                  {/* Day Headers */}
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-semibold text-primary py-2">
                      {day}
                    </div>
                  ))}

                  {/* Calendar Days */}
                  {days.map((date, index) => {
                    const isCurrentMonth = isSameMonth(date, currentDate)
                    const isCurrentDay = isToday(date)
                    const dayEvents = getEventsForDate(date)

                    return (
                      <div
                        key={index}
                        className={`min-h-[120px] border rounded-lg p-2
                          ${isCurrentMonth ? 'bg-base-200' : 'bg-base-300'}
                          ${isCurrentDay ? 'bg-primary/20 border-primary' : 'border-base-300'}
                          hover:bg-base-300 transition-colors`}
                      >
                        <div className={`font-medium mb-1
                          ${isCurrentMonth ? 'text-base-content' : 'text-base-content/50'}
                          ${isCurrentDay ? 'text-primary' : ''}`}>
                          {format(date, "d")}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.map((event) => (
                            <div
                              key={event.id}
                              onClick={() => setSelectedEvent(event)}
                              className={`text-xs px-1.5 py-0.5 rounded cursor-pointer transition-colors
                                ${event.isRecurring 
                                  ? 'bg-primary/20 text-primary-content hover:bg-primary/30' 
                                  : 'bg-secondary/20 text-secondary-content hover:bg-secondary/30'}`}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Event Details */}
              <div className="lg:col-span-1">
                <div className="bg-base-300 rounded-lg p-4 h-full">
                  <h3 className="text-xl font-semibold text-primary mb-4">Event Details</h3>
                  {selectedEvent ? (
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-base-content">{selectedEvent.title}</h4>
                      <p className="text-base-content/90">{selectedEvent.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-base-content/90">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span>{selectedEvent.time}</span>
                        </div>
                        <div className="flex items-center text-base-content/90">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          <span>{selectedEvent.location}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-base-content/70">Select an event to view details</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
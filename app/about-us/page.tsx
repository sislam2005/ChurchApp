"use client";

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Globe, Users, Star } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
        <div className="container px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-1.5 text-sm font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                About Us
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Our Church Community
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px]">
                Founded in 1950, St. Vincent De Paul Catholic Church has been a cornerstone of faith, community, and service in our area.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                >
                  Our Ministries
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-2 hover:bg-secondary/10 transition-all duration-300"
                >
                  Watch Video
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-2xl border shadow-2xl">
                <Image
                  src="/church-about.jpg"
                  width={700}
                  height={500}
                  alt="Our Church Community"
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">500+ Members</p>
                    <p className="text-sm text-muted-foreground">Active community</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    name: "Rev. Father John Smith",
    role: "Parish Priest",
    bio: "Leading our parish with dedication and spiritual guidance since 2015.",
    image: "/placeholder.svg",
  },
  {
    name: "Sister Mary Johnson",
    role: "Director of Religious Education",
    bio: "Overseeing our religious education programs and faith formation for all ages.",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Rodriguez",
    role: "Music Director",
    bio: "Leading our choir and music ministry to enhance our worship experience.",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Wilson",
    role: "Youth Ministry Coordinator",
    bio: "Engaging our young parishioners in faith, service, and community.",
    image: "/placeholder.svg",
  },
  {
    name: "David Chen",
    role: "Parish Council President",
    bio: "Working with the community to guide our parish's mission and vision.",
    image: "/placeholder.svg",
  },
  {
    name: "Emma Thompson",
    role: "Outreach Coordinator",
    bio: "Organizing our community service and charitable initiatives.",
    image: "/placeholder.svg",
  },
]

const timelineEvents = [
  {
    year: "1950",
    description: "St. Vincent De Paul Catholic Church was founded by a small group of dedicated parishioners.",
  },
  {
    year: "1965",
    description: "Construction of our current church building was completed, providing a permanent home for our growing community.",
  },
  {
    year: "1980",
    description: "Establishment of our parish school, offering quality Catholic education to local families.",
  },
  {
    year: "1995",
    description: "Launch of our community outreach programs, serving those in need in our area.",
  },
  {
    year: "2010",
    description: "Renovation of our church facilities to better serve our expanding parish community.",
  },
  {
    year: "2023",
    description: "Celebration of our 73rd anniversary and continued growth in faith and service.",
  },
]

const milestones = [
  {
    title: "Parish School Opening",
    date: "September 1980",
    description: "Our parish school opened its doors, providing Catholic education to local children.",
  },
  {
    title: "Community Center",
    date: "January 1990",
    description: "Opening of our community center, serving as a hub for parish activities and events.",
  },
  {
    title: "Food Bank Initiative",
    date: "March 2000",
    description: "Establishment of our parish food bank to serve families in need.",
  },
  {
    title: "Youth Ministry Program",
    date: "August 2015",
    description: "Launch of our comprehensive youth ministry program.",
  },
]

const features = [
  {
    title: "Our Mission",
    description: "To spread the love of Christ through worship, education, and service to others.",
    icon: Globe,
  },
  {
    title: "Our Values", 
    description: "Faith, community, service, and spiritual growth guide everything we do.",
    icon: CheckCircle2,
  },
  {
    title: "Our Team",
    description: "Dedicated clergy, staff, and volunteers working together to serve our community.",
    icon: Users,
  },
  {
    title: "Our History",
    description: "Since 1950, we've been a cornerstone of faith and service in our community.",
    icon: Clock,
  },
] 
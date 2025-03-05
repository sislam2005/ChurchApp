"use client"

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
              <p className="text-charcoal-400 text-lg">
                We&apos;re a vibrant community of faith, dedicated to serving God and our neighbors.
                Our church has been a cornerstone of spiritual growth and community service since 1950.
              </p>
              <p className="text-charcoal-400 text-lg">
                Our mission is to spread the love of Christ through worship, education, and service to others.
                We welcome all who seek to grow in their faith and make a difference in the world.
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
                  src="/images/church-community.jpg"
                  width={700}
                  height={500}
                  alt="St. Vincent De Paul Church Community"
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

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-6 md:px-8">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-1.5 text-sm font-medium bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors">
              Our Mission & Values
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-[800px]">
              Driven by Purpose, Guided by Values
            </h2>
            <p className="max-w-[800px] text-lg text-muted-foreground">
              We're driven by a simple mission: to create technology that makes life better for everyone, everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-4 relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full -z-10"></div>
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-2 text-primary">{value.icon}</div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted border-y">
        <div className="container px-6 md:px-8">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-1.5 text-sm font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Meet the Experts Behind Our Success
            </h2>
            <p className="max-w-[800px] text-lg text-muted-foreground">
              Our talented team brings together decades of experience across technology, design, and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={member.image}
                    width={400}
                    height={400}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4 justify-center">
                      <Link
                        href="#"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mt-1">{member.role}</p>
                  <p className="text-muted-foreground mt-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 border-t">
        <div className="container px-6 md:px-8">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-1.5 text-sm font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              From Startup to Industry Leader
            </h2>
            <p className="max-w-[800px] text-lg text-muted-foreground">
              From humble beginnings to where we are today, our journey has been defined by innovation and growth.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="timeline" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-muted/50">
                <TabsTrigger
                  value="timeline"
                  className="text-base py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-secondary/20 data-[state=active]:text-foreground"
                >
                  Timeline
                </TabsTrigger>
                <TabsTrigger
                  value="milestones"
                  className="text-base py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-secondary/20 data-[state=active]:text-foreground"
                >
                  Key Milestones
                </TabsTrigger>
              </TabsList>
              <TabsContent value="timeline" className="mt-6 space-y-0">
                <div className="space-y-0">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-12 pb-10 last:pb-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {index < timelineEvents.length - 1 && (
                        <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-secondary/50"></div>
                      )}
                      <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="space-y-3 border border-border bg-card hover:bg-accent/5 transition-colors rounded-xl p-6 shadow-sm">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                          {event.year}
                        </h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="milestones" className="mt-6">
                <div className="grid gap-6">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden hover:shadow-md transition-shadow border-2 hover:border-primary/30">
                        <CardHeader className="bg-muted/50 pb-4">
                          <CardTitle className="flex justify-between items-center">
                            <span>{milestone.title}</span>
                            <div className="px-4 py-1.5 text-sm font-medium bg-background border rounded-full">
                              {milestone.date}
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container px-6 md:px-8">
          <motion.div
            className="flex flex-col items-center justify-center space-y-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to Join Our Journey?</h2>
              <p className="text-xl opacity-90">
                We're always looking for talented individuals to join our team and help us build the future.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base font-medium border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "100+", label: "Projects Completed" },
  { value: "12", label: "Industry Awards" },
]

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code quality to customer service and user experience design.",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and diverse perspectives to solve complex problems and create innovative solutions.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Sustainability",
    description:
      "We're committed to building sustainable solutions that benefit our planet and future generations through responsible practices.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to create cutting-edge solutions for tomorrow's challenges.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical standards in all our business practices and relationships.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description:
      "We put our customers at the center of everything we do, creating solutions that address real needs and deliver genuine value.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
]

const teamMembers = [
  {
    name: "Rev. Father John Smith",
    role: "Parish Priest",
    bio: "Leading our parish with dedication and spiritual guidance since 2015.",
    image: "/images/priest.jpg",
  },
  {
    name: "Josh Johnson",
    role: "Director of Religious Education",
    bio: "Overseeing our religious education programs and faith formation for all ages.",
    image: "/images/religious-director.jpg",
  },
  {
    name: "Michael Rodriguez",
    role: "Music Director",
    bio: "Leading our choir and music ministry to enhance our worship experience.",
    image: "/images/music-director.jpg",
  },
  {
    name: "Sarah Wilson",
    role: "Youth Ministry Coordinator",
    bio: "Engaging our young parishioners in faith, service, and community.",
    image: "/images/youth-coordinator.jpg",
  },
  {
    name: "David Chen",
    role: "Parish Council President",
    bio: "Working with the community to guide our parish's mission and vision.",
    image: "/images/parish-council-president.jpg",
  },
  {
    name: "Emma Thompson",
    role: "Outreach Coordinator",
    bio: "Organizing our community service and charitable initiatives.",
    image: "/images/outreach-coordinator.jpg",
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



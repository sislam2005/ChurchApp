import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Globe, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                About Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                We're Building the Future of Digital Experiences
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in 2018, our company has been at the forefront of innovation, creating solutions that transform
                how people interact with technology.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Placeholder"
                width={400}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission & Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're driven by a simple mission: to create technology that makes life better for everyone, everywhere.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in everything we do, from code quality to customer service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We believe in the power of teamwork and diverse perspectives to solve complex problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We're committed to building sustainable solutions that benefit our planet and future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented team brings together decades of experience across technology, design, and business.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center space-y-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Journey</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From humble beginnings to where we are today, our journey has been defined by innovation and growth.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Tabs defaultValue="timeline" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="milestones">Key Milestones</TabsTrigger>
              </TabsList>
              <TabsContent value="timeline" className="mt-6">
                <div className="space-y-8">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Clock className="h-5 w-5" />
                        </div>
                        {index < timelineEvents.length - 1 && <div className="h-full w-px bg-border mt-2"></div>}
                      </div>
                      <div className="space-y-2 pb-8">
                        <h3 className="text-xl font-bold">{event.year}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="milestones" className="mt-6">
                <div className="grid gap-6">
                  {milestones.map((milestone, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{milestone.title}</CardTitle>
                        <CardDescription>{milestone.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Journey</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our team and help us build the future.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/careers">
                <Button variant="secondary" size="lg">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
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


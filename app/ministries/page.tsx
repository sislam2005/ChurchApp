"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, BookOpen, Music, GraduationCap, Handshake, Church, Coffee, HandIcon } from "lucide-react"

const ministries = [
  {
    title: "Liturgical Ministry",
    description: "Serve during Mass as lectors, Eucharistic ministers, altar servers, or choir members.",
    icon: Church,
  },
  {
    title: "Religious Education",
    description: "Help teach and share the faith with children, youth, and adults in our parish.",
    icon: BookOpen,
  },
  {
    title: "Outreach and Social Justice",
    description: "Participate in community service projects and advocate for social justice issues.",
    icon: Heart,
  },
  {
    title: "Prayer Groups",
    description: "Join or lead prayer groups focused on different devotions and spiritual practices.",
    icon: HandIcon,
  },
  {
    title: "Youth Ministry",
    description: "Work with young people to foster their faith and build a strong community.",
    icon: Users,
  },
  {
    title: "Hospitality",
    description: "Welcome new members and visitors, and help organize parish social events.",
    icon: Coffee,
  },
]

export default function MinistriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1000"
            alt="Church Ministries"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Ministries</h1>
          <p className="text-xl md:text-2xl">Serving God and our community</p>
        </div>
      </section>

      {/* Youth Ministry Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal-500">Youth Ministry</h2>
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
              <Button asChild className="bg-moonstone-500 hover:bg-moonstone-600 text-white">
                <Link href="/ministries/youth">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=1000"
                alt="Youth Ministry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Music Ministry Section */}
      <section className="py-16 bg-platinum-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1000"
                alt="Music Ministry"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-charcoal-500">Music Ministry</h2>
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-moonstone-500" />
                <span>Music Ministry</span>
              </div>
              <p className="text-charcoal-400">Enhance worship through music and song.</p>
              <Button asChild className="bg-moonstone-500 hover:bg-moonstone-600 text-white">
                <a href="/ministries/music">Join Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Ministry Section */}
      <section className="py-16 bg-platinum-800">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal-500">Outreach Ministry</h2>
              <p className="text-lg text-charcoal-400">
                Our outreach ministry serves those in need within our community and beyond.
                We provide support, resources, and hope to individuals and families facing challenges.
              </p>
              <ul className="space-y-3 text-charcoal-400">
                <li className="flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-moonstone-500" />
                  <span>Outreach Ministry</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-moonstone-500" />
                  <span>Clothing Drive</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-moonstone-500" />
                  <span>Community Support</span>
                </li>
              </ul>
              <p className="text-charcoal-400">Serve our community with love and compassion.</p>
              <Button asChild className="bg-moonstone-500 hover:bg-moonstone-600 text-white">
                <a href="/ministries/outreach">Get Involved</a>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000"
                alt="Outreach Ministry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Ministry Section */}
      <section className="py-16 bg-platinum-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000"
                alt="Education Ministry"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-charcoal-500">Education Ministry</h2>
              <p className="text-charcoal-400 text-lg">
                Our education ministry provides opportunities for spiritual growth and learning
                for all ages. We offer various programs to deepen understanding of our faith.
              </p>
              <p className="text-charcoal-400 text-lg">
                Whether you&apos;re interested in teaching, learning, or volunteering, there are many ways to participate
                in our education ministry.
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
                  <BookOpen className="w-5 h-5 text-moonstone-500" />
                  <span>Bible Study</span>
                </li>
              </ul>
              <Button asChild className="bg-moonstone-500 hover:bg-moonstone-600 text-white">
                <Link href="/ministries/education">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-moonstone-500">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            There are many ways to serve in our parish. Whether you're interested in music,
            education, outreach, or youth ministry, we welcome your participation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-moonstone-500 hover:bg-white/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
      </div>
      </div>
      </section>
    </div>
  )
}


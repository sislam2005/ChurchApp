import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Users, HandIcon as PrayingHands, Church, Coffee } from "lucide-react"

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
    icon: PrayingHands,
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
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Ministries</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          At St. Vincent De Paul Catholic Church, we offer many ways to get involved and serve our community. Explore
          our ministries below and find where you can share your gifts and talents.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministries.map((ministry, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {ministry.icon && <ministry.icon className="h-5 w-5" />}
                {ministry.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{ministry.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, DollarSign, CreditCard, CalendarDays } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

import dynamic from "next/dynamic"

const DynamicCard = dynamic(() => import("@/components/ui/card").then((mod) => mod.Card))
const DynamicCardHeader = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardHeader))
const DynamicCardTitle = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardTitle))
const DynamicCardContent = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardContent))

// Use these dynamic components in place of the regular Card components for the less critical sections

export default function DonatePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    amount: "",
    frequency: "one-time",
    fund: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setIsSubmitting(true)

      try {
        const response = await fetch("/api/create-donation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: formData.amount,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
          }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.success) {
          router.push(
            `/donate/confirmation?transactionId=${data.transactionId}&amount=${data.amount}&name=${data.name}`,
          )
        } else {
          throw new Error(data.error || "Payment failed")
        }
      } catch (error) {
        console.error("Error processing donation:", error)
        toast({
          title: "Error",
          description: "There was an error processing your donation. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, router],
  )

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Support Our Mission</h1>
        <p className="text-xl text-muted-foreground">
          Your generosity helps us serve our community and spread God&apos;s love.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>Choose an amount and frequency for your gift.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Donation Amount</Label>
              <div className="flex space-x-2">
                {["25", "50", "100", "250"].map((value) => (
                  <Button
                    key={value}
                    type="button"
                    variant={formData.amount === value ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setFormData((prev) => ({ ...prev, amount: value }))}
                  >
                    ${value}
                  </Button>
                ))}
              </div>
              <Input
                id="amount"
                name="amount"
                placeholder="Enter amount"
                type="number"
                value={formData.amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Frequency</Label>
              <RadioGroup
                value={formData.frequency}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, frequency: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time">One-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fund">Designation</Label>
              <Select
                value={formData.fund}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, fund: value }))}
              >
                <SelectTrigger id="fund">
                  <SelectValue placeholder="Select a fund" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Fund</SelectItem>
                  <SelectItem value="building">Building Fund</SelectItem>
                  <SelectItem value="outreach">Outreach Programs</SelectItem>
                  <SelectItem value="youth">Youth Ministry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
            <CardDescription>Please provide your contact details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="123 Main St"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" placeholder="Anytown" value={formData.city} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" name="state" placeholder="CA" value={formData.state} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" name="zip" placeholder="12345" value={formData.zip} onChange={handleInputChange} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Complete Donation"}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <div className="space-y-6">
        <DynamicCard>
          <DynamicCardHeader>
            <DynamicCardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Why Your Support Matters
            </DynamicCardTitle>
          </DynamicCardHeader>
          <DynamicCardContent>
            <p>Your donations help us:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Maintain our beautiful church</li>
              <li>Support community outreach programs</li>
              <li>Provide religious education</li>
              <li>Assist those in need in our parish</li>
            </ul>
          </DynamicCardContent>
        </DynamicCard>

        <DynamicCard>
          <DynamicCardHeader>
            <DynamicCardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Other Ways to Give
            </DynamicCardTitle>
          </DynamicCardHeader>
          <DynamicCardContent className="space-y-2">
            <p className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Set up recurring donations through your bank</span>
            </p>
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>Include us in your estate planning</span>
            </p>
          </DynamicCardContent>
        </DynamicCard>
      </div>

      <DynamicCard>
        <DynamicCardHeader>
          <DynamicCardTitle>Our Commitment to Transparency</DynamicCardTitle>
        </DynamicCardHeader>
        <DynamicCardContent>
          <p>
            St. Vincent De Paul Catholic Church is committed to using your donations responsibly and effectively. We
            provide regular financial reports to our parish and are always available to answer any questions about how
            funds are used. Your trust is important to us, and we strive to be good stewards of your generosity.
          </p>
        </DynamicCardContent>
      </DynamicCard>
    </div>
  )
}


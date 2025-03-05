"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import StripePayment from "@/components/stripe-payment"
import Image from "next/image"

const donationAmounts = [
  { value: "10", label: "$10" },
  { value: "25", label: "$25" },
  { value: "50", label: "$50" },
  { value: "100", label: "$100" },
  { value: "250", label: "$250" },
  { value: "500", label: "$500" },
]

const paymentMethods = [
  { value: "card", label: "Credit/Debit Card" },
  { value: "bank", label: "Bank Transfer" },
]

export default function DonatePage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    amount: "",
    customAmount: "",
    paymentMethod: "card",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate amount
      const amount = formData.customAmount || formData.amount
      if (!amount || parseFloat(amount) <= 0) {
        throw new Error("Please enter a valid amount")
      }

      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create payment intent")
      }

      const data = await response.json()
      setClientSecret(data.clientSecret)
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem processing your donation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Support Our Mission</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Your generous donation helps us continue our work in the community. Every contribution makes a difference.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>
              Choose your donation amount and payment method
            </CardDescription>
          </CardHeader>
          <CardContent>
            {clientSecret ? (
              <StripePayment clientSecret={clientSecret} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label>Donation Amount</Label>
                  <RadioGroup
                    value={formData.amount}
                    onValueChange={(value) => setFormData({ ...formData, amount: value })}
                    className="grid grid-cols-2 gap-4"
                  >
                    {donationAmounts.map((amount) => (
                      <div key={amount.value}>
                        <RadioGroupItem
                          value={amount.value}
                          id={amount.value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={amount.value}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {amount.label}
                        </Label>
              </div>
                    ))}
                  </RadioGroup>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={formData.customAmount}
                      onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                      className="flex-1"
                    />
                    <span className="text-muted-foreground">USD</span>
            </div>
                </div>

                <div className="space-y-4">
                  <Label>Payment Method</Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                    className="grid grid-cols-2 gap-4"
                  >
                    {paymentMethods.map((method) => (
                      <div key={method.value}>
                        <RadioGroupItem
                          value={method.value}
                          id={method.value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={method.value}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {method.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
            </div>
            <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Input
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Add a message to your donation"
                    />
                  </div>
            </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Donate Now"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Ways to Give</CardTitle>
            <CardDescription>
              Explore alternative ways to support our mission
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Bank Transfer</h3>
              <div className="space-y-2 text-sm">
                <p>Bank: Your Bank Name</p>
                <p>Account Name: St. Vincent De Paul Catholic Church</p>
                <p>Account Number: XXXX-XXXX-XXXX-XXXX</p>
                <p>Routing Number: XXXX-XXXX</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Mail a Check</h3>
              <div className="space-y-2 text-sm">
                <p>St. Vincent De Paul Catholic Church</p>
                <p>123 Main St</p>
                <p>Anytown, USA 12345</p>
              </div>
              </div>

            <div className="space-y-4">
              <h3 className="font-semibold">In-Person Donation</h3>
              <div className="space-y-2 text-sm">
                <p>Visit us during office hours:</p>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


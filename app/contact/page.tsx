"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.details || "Failed to send message")
      }

      // Show success message
      toast({
        title: "Message Received!",
        description: "We have received your message and will respond to your inquiry as soon as possible.",
        duration: 5000,
      })

      // Set success state
      setIsSuccess(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Log success for debugging
      console.log("Form submitted successfully:", data)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal-500">Contact Us</h1>
        <p className="text-lg md:text-xl text-charcoal-400">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-platinum-800 border-platinum-300">
          <CardHeader>
            <CardTitle className="text-charcoal-500">Send us a Message</CardTitle>
            <CardDescription className="text-charcoal-400">
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-moonstone-500 mx-auto" />
                <h3 className="text-xl font-semibold text-charcoal-500">Message Sent Successfully!</h3>
                <p className="text-charcoal-400">
                  We have received your message and will respond to your inquiry as soon as possible.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-4 border-platinum-300 text-charcoal-500 hover:bg-moonstone-500 hover:text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-charcoal-500">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                      className="bg-platinum-700 border-platinum-300 text-charcoal-500 placeholder:text-charcoal-400 focus:border-moonstone-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-charcoal-500">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your.email@example.com"
                      className="bg-platinum-700 border-platinum-300 text-charcoal-500 placeholder:text-charcoal-400 focus:border-moonstone-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-charcoal-500">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      placeholder="What is this about?"
                      className="bg-platinum-700 border-platinum-300 text-charcoal-500 placeholder:text-charcoal-400 focus:border-moonstone-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal-500">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[150px] bg-platinum-700 border-platinum-300 text-charcoal-500 placeholder:text-charcoal-400 focus:border-moonstone-500"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-moonstone-500 text-white hover:bg-moonstone-600" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <Card className="bg-platinum-800 border-platinum-300">
          <CardHeader>
            <CardTitle className="text-charcoal-500">Contact Information</CardTitle>
            <CardDescription className="text-charcoal-400">
              Get in touch with us through any of these methods
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-charcoal-500">Address</h3>
              <div className="space-y-2 text-sm text-charcoal-400">
                <p>St. Vincent De Paul Catholic Church</p>
                <p>123 Main St</p>
                <p>Anytown, USA 12345</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-charcoal-500">Phone</h3>
              <div className="space-y-2 text-sm text-charcoal-400">
                <p>Main Office: (555) 123-4567</p>
                <p>Emergency: (555) 987-6543</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-charcoal-500">Email</h3>
              <div className="space-y-2 text-sm text-charcoal-400">
                <p>info@stvincentdepaul.com</p>
                <p>office@stvincentdepaul.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-charcoal-500">Office Hours</h3>
              <div className="space-y-2 text-sm text-charcoal-400">
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


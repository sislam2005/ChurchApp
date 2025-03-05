"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"success" | "error" | "loading">("loading")

  useEffect(() => {
    const paymentIntent = searchParams.get("payment_intent")
    if (paymentIntent) {
      setStatus("success")
    } else {
      setStatus("error")
    }
  }, [searchParams])

  if (status === "loading") {
    return (
      <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Something went wrong</CardTitle>
            <CardDescription>
              There was an error processing your donation. Please try again.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/donate">Try Again</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle>Thank You for Your Donation!</CardTitle>
          <CardDescription>
            Your contribution helps us continue our mission in the community.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            You will receive a confirmation email shortly with your donation details.
          </p>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline">
              <Link href="/">Return to Home</Link>
            </Button>
            <Button asChild>
              <Link href="/donate">Make Another Donation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


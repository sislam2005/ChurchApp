"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

function ConfirmationContent() {
  const searchParams = useSearchParams()
  const amount = searchParams.get("amount")
  const name = searchParams.get("name")

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-center">Thank You!</CardTitle>
        <CardDescription className="text-center">
          Your donation of ${amount} has been received.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-4">
          Thank you for your generous donation{name ? `, ${name}` : ""}. Your support helps us continue our mission.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmationContent />
      </Suspense>
    </div>
  )
}


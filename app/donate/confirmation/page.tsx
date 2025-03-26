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

  // Fallback for amount and name if they are missing
  const formattedAmount = amount ? `$${amount}` : "an unknown amount"
  const formattedName = name ? `, ${name}` : ""

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border border-gray-100">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-semibold">Thank You!</CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Your donation of {formattedAmount} has been received.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-base text-gray-700">
          Thank you for your generous donation{formattedName}. Your support helps us continue our mission.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center mt-6">
        <Link href="/">
          <Button className="bg-green-600 text-white hover:bg-green-700 transition-all duration-200">Return to Home</Button>
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

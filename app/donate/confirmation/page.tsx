"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const transactionId = searchParams.get("transactionId")
  const amount = searchParams.get("amount")
  const name = searchParams.get("name")

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <CardTitle className="text-2xl">Donation Confirmed</CardTitle>
          </div>
          <CardDescription>Thank you for your generous contribution!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Transaction ID:</strong> {transactionId}
          </p>
          <p>
            <strong>Amount:</strong> ${amount}
          </p>
          <p>
            <strong>Donor Name:</strong> {name}
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            A receipt has been sent to your email address. Please keep it for your records.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


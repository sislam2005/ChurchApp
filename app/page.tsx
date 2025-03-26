"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import StripePayment from "@/components/stripe-payment";
import Image from "next/image";
import { supabase } from "../utils/supabaseClient"; // Adjust the path if needed

const donationAmounts = ["5", "10", "20", "50", "100", "250"];
const recurringOptions = ["One-time", "Weekly", "Monthly", "Yearly"];
const campaigns = ["General Fund", "Education Support", "Healthcare Assistance", "Emergency Relief"];

export default function DonatePage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    amount: "",
    customAmount: "",
    recurring: "One-time",
    giftAid: false,
    name: "",
    email: "",
    phone: "",
    message: "",
    addressLine1: "",
    addressTown: "",
    addressPostcode: "",
    campaign: "General Fund", // Default campaign
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const amount = formData.customAmount || formData.amount;
      if (!amount || parseFloat(amount) <= 0) {
        throw new Error("Please enter a valid amount");
      }

      // Send data to Supabase
      await supabase.from("donations").insert([
        {
          amount: parseFloat(amount),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          recurring: formData.recurring,
          giftAid: formData.giftAid,
          campaign: formData.campaign, // Save campaign selection
          address: formData.giftAid
            ? `${formData.addressLine1}, ${formData.addressTown}, ${formData.addressPostcode}`
            : null,
        },
      ]);

      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          recurring: formData.recurring,
          giftAid: formData.giftAid,
        }),
      });

      if (!response.ok) throw new Error("Failed to create payment intent");

      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "There was a problem processing your donation.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-950 px-4 w-full">
      {/* Updated to remove border radius and full width */}
      <Card className="w-full max-w-full shadow-none bg-transparent p-6">
        <CardContent>
          {clientSecret ? (
            <StripePayment clientSecret={clientSecret} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
			<Label>Campaign Selection</Label>
              <select
                value={formData.campaign}
                onChange={(e) => setFormData({ ...formData, campaign: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {campaigns.map((campaign) => (
                  <option key={campaign} value={campaign}>
                    {campaign}
                  </option>
                ))}
              </select>
              <Label>Donation Amount</Label>
              <div className="grid grid-cols-3 gap-4">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={formData.amount === amount ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setFormData({ ...formData, amount, customAmount: "" })}
                  >
                    £{amount}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setFormData({ ...formData, amount: "", customAmount: "" })}
                >
                  Custom
                </Button>
              </div>
              {formData.amount === "" && (
                <Input
                  type="number"
                  placeholder="Enter amount"
                  className="mt-2"
                  value={formData.customAmount}
                  onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                />
              )}

              <Label>Recurring Donation</Label>
              <div className="grid grid-cols-2 gap-4">
                {recurringOptions.map((option) => (
                  <Button
                    key={option}
                    variant={formData.recurring === option ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setFormData({ ...formData, recurring: option })}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.giftAid}
                  onChange={(e) => setFormData({ ...formData, giftAid: e.target.checked })}
                  id="gift-aid"
                />
                <Label htmlFor="gift-aid" className="flex items-center space-x-2">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/9/9f/Gift_Aid_UK_Logo.svg"
                    alt="Gift Aid"
                    width={80}
                    height={40}
                    style={{ filter: "brightness(0)" }}
                  />
                  <span>Boost your donation by 25% with Gift Aid</span>
                </Label>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Conditional address inputs for Gift Aid */}
              {formData.giftAid && (
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Address Line 1"
                    value={formData.addressLine1}
                    onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                  />
                  <Input
                    type="text"
                    placeholder="Town"
                    value={formData.addressTown}
                    onChange={(e) => setFormData({ ...formData, addressTown: e.target.value })}
                  />
                  <Input
                    type="text"
                    placeholder="Postcode"
                    value={formData.addressPostcode}
                    onChange={(e) => setFormData({ ...formData, addressPostcode: e.target.value })}
                  />
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : "Donate Now"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

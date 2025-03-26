import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "../../../utils/supabaseClient"; // Adjusted path

// Ensure Stripe's secret key is present
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const {
      amount,
      recurring,
      giftAid,
      name,
      email,
      address, // address should be an object with addressLine1, addressLine2, city, postcode, country
    } = await req.json();

    // Validate the amount
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    let paymentIntent;
    let customer;

    // Create Stripe customer if recurring donation
    if (recurring !== "One-time") {
      // Check if the customer already exists
      const existingCustomer = await stripe.customers.list({
        email,
        limit: 1,
      });

      if (existingCustomer.data.length > 0) {
        customer = existingCustomer.data[0]; // Use existing customer if found
      } else {
        // Create a new customer if not found
        customer = await stripe.customers.create({
          email,
          name,
          metadata: { recurring, giftAid: String(giftAid) },
        });
      }
    }

    // If recurring is selected, create a subscription
    if (recurring !== "One-time" && customer) {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id, // Use created or existing customer
        items: [
          {
            price_data: {
              currency: "gbp",
              product_data: {
                name: "Recurring Donation",
              },
              unit_amount: amount * 100, // Amount in cents
              recurring: {
                interval: recurring.toLowerCase(), // weekly, monthly, yearly
              },
            },
          },
        ],
        metadata: {
          name,
          email,
          recurring,
          giftAid: String(giftAid),
        },
      });

      paymentIntent = subscription.latest_invoice.payment_intent;
    } else {
      // If it's a one-time donation, create a PaymentIntent
      paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Convert to cents
        currency: "gbp",
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          name,
          email,
          recurring,
          giftAid: String(giftAid),
        },
      });
    }

    // Save donation data to Supabase, including the address for Gift Aid if selected
    const { data, error } = await supabase
      .from("donations")
      .insert([{
        name,
        email,
        amount,
        recurring,
        gift_aid: giftAid,
        stripe_payment_intent: paymentIntent.id,
        address_line1: giftAid ? address.line1 : null,
        address_line2: giftAid ? address.line2 : null,
        city: giftAid ? address.city : null,
        postcode: giftAid ? address.postcode : null,
        country: giftAid ? address.country : null,
      }]);

    if (error) {
      console.error("Error saving donation data:", error);
      return NextResponse.json({ error: "Error saving donation data" }, { status: 500 });
    }

    // Return the client secret to the frontend for payment confirmation
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent or subscription:", error);
    return NextResponse.json(
      { error: "Error creating payment intent or subscription" },
      { status: 500 }
    );
  }
}

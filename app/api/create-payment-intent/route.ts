import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "../../../utils/supabaseClient"; // Adjusted path

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const { amount, recurring, giftAid, name, email, address } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    let paymentIntent;
    let customer;
    let productId: string | null = null; // Initialize productId

    if (recurring !== "One-time") {
      const existingCustomer = await stripe.customers.list({ email, limit: 1 });

      customer = existingCustomer.data.length
        ? existingCustomer.data[0]
        : await stripe.customers.create({
            email,
            name,
            metadata: { recurring, giftAid: String(giftAid) },
          });

      const product = await stripe.products.create({
        name: "Recurring Donation",
      });

      productId = product.id;
    }

    if (recurring !== "One-time" && customer && productId) {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price_data: {
              currency: "gbp",
              product: productId,
              unit_amount: amount * 100,
              recurring: { interval: recurring.toLowerCase() },
            },
          },
        ],
        metadata: { name, email, recurring, giftAid: String(giftAid) },
      });

      paymentIntent = subscription.latest_invoice.payment_intent;
    } else {
      paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "gbp",
        automatic_payment_methods: { enabled: true },
        metadata: { name, email, recurring, giftAid: String(giftAid) },
      });
    }

    const { error } = await supabase.from("donations").insert([
      {
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
      },
    ]);

    if (error) {
      console.error("Error saving donation data:", error);
      return NextResponse.json({ error: "Error saving donation data" }, { status: 500 });
    }

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent or subscription:", error);
    return NextResponse.json({ error: "Error creating payment intent or subscription" }, { status: 500 });
  }
}

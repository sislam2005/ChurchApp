import { NextResponse } from "next/server"
import { Resend } from "resend"

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable")
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log("Email sent successfully:", data)
    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      data 
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { 
        error: "Error sending message. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
} 
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Roots Foundation Trust",
  description: "Welcome to the donation page for Roots Foundation Trust",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-base-300 text-base-content dark:text-gray-100`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}


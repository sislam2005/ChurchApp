"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-green-100 shadow-md">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex justify-start">
          <Image
            src="https://rootsfoundationtrust.org/wp-content/uploads/2021/08/RFT_MAIN_LOGO_MINT_GRN.png"
            alt="Roots Foundation Trust Logo"
            width={1500}
            height={612}
            style={{ maxWidth: '23%', width: '18%' }}
          />
        </div>
        <Link href="https://rootsfoundationtrust.org" passHref>
          <Button variant="outline" className="flex items-center gap-2 text-white border-gray-400 bg-green-950">
            <ArrowLeft className="h-5 w-5" />
            Return to Site
          </Button>
        </Link>
      </div>
    </header>
  );
}

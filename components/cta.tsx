"use client";

import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CTA() {
  const [showMessage, setShowMessage] = useState(false)

  const handleDemoClick = () => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 5000) // Hides after 5 seconds
  }

  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <Shield className="h-12 w-12 text-primary mb-4" />
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to secure your data with Echelon X?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join hundreds of testers across the globe and help us improve Echelon X. Experience the next generation of
          encryption technology today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600"
            onClick={handleDemoClick}
          >
            Request a Demo
          </Button>
          <Link href="mailto:sales@threatnexus.in">
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </Link>
        </div>
        {showMessage && (
          <div className="mt-4 p-4 bg-muted rounded-lg border border-border shadow-sm max-w-md">
            <p className="text-sm text-muted-foreground">
              Reach us at{" "}
              <a 
                href="mailto:demo@threatnexus.in" 
                className="text-primary hover:underline"
              >
                demo@threatnexus.in
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
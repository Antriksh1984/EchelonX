// src/app/form/page.tsx
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-blue-500/10 blur-[50px] md:h-[500px] md:w-[500px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-purple-500/10 blur-[50px] md:h-[500px] md:w-[500px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <section className="container py-12 md:py-24 max-w-screen-2xl flex-1 flex items-center justify-center">
          <div className="w-full max-w-md px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">
              Join to access Echelon X Public BETA
            </h1>
            <div className="p-4 bg-muted rounded-lg border border-border shadow-sm">
              <form
                action="https://formspree.io/f/mjkykgal"
                method="POST"
                className="space-y-4"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="hardwareConfig" className="block text-sm font-medium text-foreground mb-1">
                    Hardware Configuration
                  </label>
                  <textarea
                    id="hardwareConfig"
                    name="hardwareConfig"
                    required
                    rows={3} // Reduced for mobile
                    className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-sm md:text-base"
                >
                  Join
                </Button>
              </form>
            </div>
          </div>
        </section>
        <Footer className="bg-background" />
      </div>
    </div>
  );
}
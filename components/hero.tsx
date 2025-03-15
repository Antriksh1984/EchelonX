"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Zap } from "lucide-react";

export default function Hero() {
  const [showMessage, setShowMessage] = useState(false);

  const handleGetStartedClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000); // Hides after 5 seconds
  };

  const handleWatchDemoClick = () => {
    window.open("https://youtu.be/Z2kxd8rMAOo?feature=shared", "_blank"); // Opens in new tab
  };

  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="flex items-center justify-center mb-6">
        <Shield className="h-12 w-12 text-primary mr-4" />
        <Lock className="h-10 w-10 text-primary/80" />
        <Zap className="h-12 w-12 text-primary ml-4" />
      </div>
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Echelon X
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
            Speed, Security, and Zero Trust in Every Byte
          </span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          The next generation encryption solution that processes data at 1GB/s with zero-trust architecture and cloud
          resilience, making it 3x faster than traditional solutions.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600"
          onClick={handleGetStartedClick}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={handleWatchDemoClick}
        >
          Watch Demo
        </Button>
      </div>
      {showMessage && (
        <div className="mt-4 p-4 bg-muted rounded-lg border border-border shadow-sm max-w-md">
        <p className="text-sm text-muted-foreground">
          Email your hardware configuration to{" "}
          <a 
            href="mailto:testers@threatnexus.in" 
            className="text-primary hover:underline"
          >
            testers@threatnexus.in
          </a>
        </p>
      </div>
      )}
    </section>
  );
}
"use client"; // Required for onClick handler
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Shield } from "lucide-react";

export default function Navbar({ footerRef }) {
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-bold">Threat Nexus</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#comparison" className="transition-colors hover:text-primary">
            Comparison
          </Link>
          <Link href="#use-cases" className="transition-colors hover:text-primary">
            Use Cases
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/Antriksh1984" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          {/* Contact button with default Button styling (white box) */}
          <Button size="sm" onClick={scrollToFooter}>
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
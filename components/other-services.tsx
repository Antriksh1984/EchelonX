"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function OtherServices() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Other Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Cloud Security Card */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xl">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud Security on AWS</h3>
                <p className="text-sm text-muted-foreground">
                  Protect your AWS infrastructure with expert security audits, compliance configurations, and threat detection strategies.
                </p>
              </div>
            </div>
            <ul className="text-sm text-foreground space-y-1 mb-4">
              <li>• IAM policy optimization</li>
              <li>• VPC security hardening</li>
              <li>• Encryption & key management</li>
              <li>• Automated compliance monitoring</li>
            </ul>
          </div>

          {/* Cloud Architecture Card */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-500 font-bold text-xl">🏗️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud Architecture on AWS</h3>
                <p className="text-sm text-muted-foreground">
                  Design robust, scalable AWS architectures tailored to your business needs.
                </p>
              </div>
            </div>
            <ul className="text-sm text-foreground space-y-1 mb-4">
              <li>• Well-Architected Framework reviews</li>
              <li>• Microservices & container orchestration</li>
              <li>• Cost-optimized infrastructure</li>
              <li>• Disaster recovery planning</li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <FileText className="text-green-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Legal Notices & Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Transparent policies and legal safeguards for users and organizations.
                </p>
              </div>
            </div>
            <ul className="text-sm text-foreground space-y-1 mb-4">
              <li>• Liability & warranty disclaimers</li>
              <li>• Third-party service transparency</li>
              <li>• Terms & policy compliance</li>
              <li>• Data protection standards</li>
            </ul>

            <Link
              href="/legal-notice"
              className="inline-block mt-2 text-primary hover:underline text-sm"
            >
              View Legal Notice →
            </Link>
          </div>

        </div>

        <div className="text-center mt-12">
          <a href="mailto:antrikshsingh@threatnexus.in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              Get a Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

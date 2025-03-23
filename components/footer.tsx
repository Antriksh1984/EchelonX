import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Shield } from "lucide-react";
import { forwardRef } from "react";

const Footer = forwardRef(({ ...props }, ref) => {
  return (
    <footer id="footer" ref={ref} className="border-t" {...props}>
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12 md:justify-between">
        {/* Branding Section */}
        <div className="space-y-4">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <h2 className="font-bold">Threat Nexus</h2>
          </div>
          <p className="text-sm text-muted-foreground">Secure. Defend. Evolve</p>
          <p className="text-sm text-muted-foreground">Founded by Antriksh</p>
        </div>
        {/* Connect Section */}
        <div className="space-y-4 text-center">
          <h3 className="text-sm font-medium">Connect</h3>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/Antriksh1984"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/threatnexus"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/company/threat-nexus"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:contact@threatnexus.in"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <div>
            <Link
              href="mailto:contact@threatnexus.in"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Threat Nexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
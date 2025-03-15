import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Shield } from "lucide-react";
import { forwardRef } from "react";

const Footer = forwardRef(({ ...props }, ref) => {
  return (
    <footer id="footer" ref={ref} className="border-t" {...props}>
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <h2 className="font-bold">Threat Nexus</h2>
          </div>
          <p className="text-sm text-muted-foreground">Secure. Defend. Evolve</p>
          <p className="text-sm text-muted-foreground">Founded by Antriksh</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground transition-colors hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#comparison" className="text-muted-foreground transition-colors hover:text-primary">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-muted-foreground transition-colors hover:text-primary">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="mailto:contact@threatnexus.in"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
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
                href="https://linkedin.com/company/threatnexus"
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
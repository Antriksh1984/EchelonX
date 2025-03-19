import { Zap, Shield, Cloud, Lock, Clock, FileCheck } from "lucide-react"

const features = [
  {
    name: "Lightning Speed",
    description:
      "Processes 60GB in just 60-80 seconds (~1GB/s), 3x faster than VeraCrypt, leveraging AES-NI acceleration and multiprocessing.",
    icon: Zap,
  },
  {
    name: "Zero Trust Architecture",
    description:
      "Ephemeral encryption keys are generated on-the-fly and wiped from memory immediately after use, making RAM-freezing attacks ineffective.",
    icon: Shield,
  },
  {
    name: "Cloud Resilience",
    description:
      "AWS Secrets Manager integration ensures disaster recovery and key management without relying on a single physical device.",
    icon: Cloud,
  },
  {
    name: "Tamper Detection",
    description:
      "Built-in integrity checks detect tampering during decryption and automatically delete compromised files to prevent further attacks.",
    icon: FileCheck,
  },
  {
    name: "Shamir's Secret Sharing",
    description:
      "Key splitting into 5 shares with recovery using just 3 shares, enhancing security by preventing single-point failures.",
    icon: Lock,
  },
  {
    name: "Constant-Time Algorithms",
    description:
      "Protects against timing attacks by ensuring cryptographic operations execute in fixed time, making side-channel attacks ineffective.",
    icon: Clock,
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Core Innovations</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Echelon X is built on three pillars of security: Lightning Speed, Zero Trust Architecture, and Cloud
          Resilience.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
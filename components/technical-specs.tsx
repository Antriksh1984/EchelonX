import { Cpu, MemoryStickIcon as Memory, Shield } from "lucide-react"

export default function TechnicalSpecs() {
  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Excellence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-primary" />
              Cryptography
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-semibold">AES-GCM for Files</span> - Provides both encryption and
                  authentication, ensuring files are protected from unauthorized access and tampering.
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-semibold">AES-SIV for Filenames</span> - Prevents filename leakage by using
                  nonce misuse-resistant encryption, keeping file identities confidential.
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-semibold">RSA-4096 for Key Shares</span> - Uses high-strength asymmetric
                  encryption to safeguard key shares, making brute-force attacks practically impossible.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Memory className="h-6 w-6 mr-2 text-primary" />
              Shamir's Secret Sharing
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-semibold">Key Splitting into 5 Shares</span> - Enhances security by dividing
                  encryption keys into multiple parts, preventing single-point failures.
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-semibold">Recovery with Just 3 Shares</span> - Ensures redundancy, allowing
                  secure key reconstruction even if some shares are lost or compromised.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Cpu className="h-6 w-6 mr-2 text-primary" />
            Performance Unleashed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Ryzen 7 7000HX</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With 8 cores and 16 threads, Echelon X efficiently utilizes parallel encryption processing, drastically
                reducing encryption time.
              </p>

              <h4 className="font-semibold mb-2">Encryption Speed</h4>
              <p className="text-gray-600 dark:text-gray-300">
                60GB encrypted in just 72 seconds, a massive improvement over VeraCrypt's 220 seconds, making Echelon X
                3x faster.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">RTX 4060 GPU Acceleration</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                SHA-256 key derivation is offloaded to the GPU, enhancing cryptographic operations while keeping CPU
                resources free.
              </p>

              <h4 className="font-semibold mb-2">Optimized RAM Usage</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Memory consumption is capped, ensuring stable multitasking even during heavy encryption workloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

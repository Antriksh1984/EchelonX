import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Encryption Method",
    echelonX: "Dual AES-GCM + RSA-4096",
    pgpGpg: "AES + RSA/ECC",
    veraCrypt: "AES-XTS",
    bitLocker: "AES-XTS",
    cryptomator: "AES-GCM",
  },
  {
    feature: "Key Management",
    echelonX: "AWS Secrets Manager + SSS + TPM",
    pgpGpg: "Local keyring + RSA",
    veraCrypt: "Local password/keyfile",
    bitLocker: "TPM + Microsoft AD",
    cryptomator: "Passphrase + cloud metadata",
  },
  {
    feature: "Shamir’s Secret Sharing",
    echelonX: true,
    pgpGpg: false,
    veraCrypt: false,
    bitLocker: false,
    cryptomator: false,
  },
  {
    feature: "AI-Based Tamper Detection",
    echelonX: true,
    pgpGpg: false,
    veraCrypt: false,
    bitLocker: false,
    cryptomator: false,
  },
  {
    feature: "Performance",
    echelonX: "~1 GB/s",
    pgpGpg: "~200 MB/s",
    veraCrypt: "~500 MB/s",
    bitLocker: "~600 MB/s",
    cryptomator: "~400 MB/s",
  },
  {
    feature: "Unique Selling Point",
    echelonX: "AI + layered encryption + SSS + AWS hybrid + TPM",
    pgpGpg: "Open standard, interoperable",
    veraCrypt: "Free, open-source disk encryption",
    bitLocker: "Native Windows integration",
    cryptomator: "Optimized for cloud storage",
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Echelon X vs Other Encryption Tools
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-left font-semibold">Echelon X</th>
                <th className="p-4 text-left font-semibold">PGP/GPG</th>
                <th className="p-4 text-left font-semibold">VeraCrypt</th>
                <th className="p-4 text-left font-semibold">BitLocker</th>
                <th className="p-4 text-left font-semibold">Cryptomator</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}
                >
                  <td className="p-4 border-t">{row.feature}</td>
                  <td className="p-4 border-t">
                    {typeof row.echelonX === "boolean" ? (
                      row.echelonX ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      row.echelonX
                    )}
                  </td>
                  <td className="p-4 border-t">
                    {typeof row.pgpGpg === "boolean" ? (
                      row.pgpGpg ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      row.pgpGpg
                    )}
                  </td>
                  <td className="p-4 border-t">
                    {typeof row.veraCrypt === "boolean" ? (
                      row.veraCrypt ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      row.veraCrypt
                    )}
                  </td>
                  <td className="p-4 border-t">
                    {typeof row.bitLocker === "boolean" ? (
                      row.bitLocker ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      row.bitLocker
                    )}
                  </td>
                  <td className="p-4 border-t">
                    {typeof row.cryptomator === "boolean" ? (
                      row.cryptomator ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      row.cryptomator
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
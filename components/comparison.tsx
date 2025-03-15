import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Encryption Speed",
    echelonX: "1GB/s",
    mercury: "300MB/s",
    veraCrypt: "350MB/s",
  },
  {
    feature: "Tamper Detection",
    echelonX: true,
    mercury: false,
    veraCrypt: false,
  },
  {
    feature: "Zero Trust Keys",
    echelonX: true,
    mercury: false,
    veraCrypt: false,
  },
  {
    feature: "Cloud Resilience",
    echelonX: true,
    mercury: false,
    veraCrypt: false,
  },
  {
    feature: "Layered Security",
    echelonX: "2 Layers",
    mercury: "1 Layer",
    veraCrypt: "1 Layer",
  },
]

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Echelon X vs Other Encryption Tools</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-left font-semibold">Echelon X</th>
                <th className="p-4 text-left font-semibold">MERCURY</th>
                <th className="p-4 text-left font-semibold">VeraCrypt</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
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
                    {typeof row.mercury === "boolean" ? (
                      row.mercury ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      row.mercury
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}


import { Hospital, CreditCard, User } from "lucide-react"

const useCases = [
  {
    icon: <Hospital className="h-10 w-10 text-primary" />,
    title: "Healthcare",
    description:
      "Encrypts 10,000 patient records in under 15 minutes, ensuring HIPAA compliance and protecting sensitive medical data from breaches.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Finance",
    description:
      "Secures high-frequency transaction logs at 1GB/s, meeting PCI DSS standards for financial institutions handling sensitive payment data.",
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Personal Security",
    description:
      "Protects family photos and personal files from ransomware with just two clicks, ensuring seamless and hassle-free encryption.",
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Use Cases & ROI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg">
              <div className="flex justify-center mb-6">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">{useCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-primary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Return on Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Breach Cost Prevention</h4>
              <p>
                Avoids the $4.45M average data breach cost (IBM 2023), safeguarding businesses from devastating
                financial losses.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Operational Savings</h4>
              <p>
                Reduces IT security overhead by 40% through automated key management, minimizing human errors and
                administrative burdens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

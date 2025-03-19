import { CalendarDays } from "lucide-react"

const roadmapItems = [
  {
    year: "2024",
    title: "Quantum-Safe Encryption",
    description:
      "Implementing post-quantum cryptography using NIST-selected algorithms (e.g., Kyber, Dilithium). Future-proofing encryption against quantum attacks, ensuring long-term data security.",
  },
  {
    year: "2025",
    title: "Seamless Cloud Integration with Local Storage",
    description:
      "One-click sync with AWS S3 & Google Drive, enabling secure cloud storage without compromising encryption. Automated backup & recovery, ensuring data availability even in worst-case scenarios. Also implementing local storage options for users who prefer to keep their data on-premises using TPM.",
  },
  {
    year: "Long-Term",
    title: "AI-Powered Security",
    description:
      "AI-driven anomaly detection to identify unauthorized access attempts in real time. Proactive threat blocking using machine learning to predict and mitigate attacks before they happen.",
  },
]

export default function Roadmap() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Roadmap & Vision</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

          {/* Timeline items */}
          <div className="space-y-24">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary"></div>

                {/* Content */}
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2"></div>
                  <div
                    className={`md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="flex items-center mb-4">
                      <CalendarDays className="h-5 w-5 text-primary mr-2" />
                      <span className="text-lg font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


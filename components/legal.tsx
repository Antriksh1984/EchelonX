export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Legal Notice</h1>

      <p className="text-sm opacity-70 mb-8">Last updated: January 2026</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Ownership</h2>
          <p>
            EchelonX is developed and maintained by Antriksh. All rights reserved.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. No Warranty</h2>
          <p>
            The software is provided “as-is,” without any express or implied warranties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Liability</h2>
          <p>
            Under no circumstances shall the maintainers be liable for any damages
            arising from the use of this software.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
          <p>
            EchelonX may integrate with third-party APIs and AWS services.
            Use of those services is subject to their own terms and conditions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Contact</h2>
          <p>
            For legal concerns, please reach out at:
            <br />
            <strong>youremail@example.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

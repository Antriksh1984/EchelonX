"use client";

export default function Legal() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm opacity-70 mb-8">Last updated: 26/01/2026</p>

      <div className="space-y-10 text-foreground leading-relaxed">

        <section>
          <p>
            This Privacy Policy explains how we (“we”, “us”, or “our”) collect,
            use, store, and protect information when you use our website and
            services (the “Services”). We are committed to protecting your
            privacy and handling data responsibly.
          </p>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

          <h3 className="text-lg font-semibold mb-2">1.1 Advertising and Business Data</h3>
          <p>
            When you connect your advertising accounts (such as Amazon Ads),
            we collect advertising performance and account data that you explicitly
            authorize us to access, including but not limited to:
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Campaign, keyword, and search term performance metrics</li>
            <li>Impressions, clicks, spend, and attributed sales</li>
            <li>Campaign, ad group, and targeting metadata</li>
            <li>Account identifiers such as advertising profile IDs and marketplace info</li>
          </ul>

          <p className="mt-4">
            We do <strong>not</strong> collect end-customer personal data
            (such as names, email addresses, phone numbers, or browsing behavior).
          </p>

          <hr className="opacity-20 my-6" />

          <h3 className="text-lg font-semibold mb-2">1.2 User-Provided Information</h3>
          <p>You may provide additional business information, such as:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Product margin or cost information</li>
            <li>Optimization preferences and risk settings</li>
            <li>Contact details (name, email address)</li>
          </ul>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
          <p>We use collected information strictly to:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Provide analytics, recommendations, and optimization insights</li>
            <li>Improve and maintain our services</li>
            <li>Communicate about service updates or support</li>
            <li>Ensure security, compliance, and system integrity</li>
          </ul>

          <p className="mt-4">We do not use your data for advertising to third parties.</p>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
          <p>We do not sell or rent your data.</p>

          <p className="mt-4">We may share data only in the following limited circumstances:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>With service providers who operate our infrastructure (e.g., cloud hosting)</li>
            <li>When required by law or legal process</li>
            <li>To protect the rights, safety, or security of our users or systems</li>
          </ul>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
          <p>
            We use industry-standard security measures to protect data, including:
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Secure authentication and access controls</li>
            <li>Encrypted data transmission where appropriate</li>
            <li>Restricted internal access to sensitive information</li>
          </ul>

          <p className="mt-4">
            While no system is 100% secure, we take reasonable steps to protect
            your data from unauthorized access, loss, or misuse.
          </p>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p>
            We retain data only for as long as necessary to provide our Services
            or comply with legal obligations.
          </p>
          <p className="mt-4">
            Users may request deletion of their data at any time, subject to
            applicable legal or contractual requirements.
          </p>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. User Control and Access</h2>

          <p>You can:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Revoke advertising account access at any time</li>
            <li>Request access to or deletion of your data</li>
          </ul>

          <p className="mt-4">
            Once access is revoked, we will stop collecting new data from that account.
          </p>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Platforms</h2>
          <p>
            Our Services integrate with third-party platforms (such as advertising platforms).
            Their privacy policies apply to your use of those platforms.
          </p>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. International Users</h2>
          <p>
            If you access our services from outside your country of residence,
            you understand that data may be processed and stored in jurisdictions with
            different data protection laws.
          </p>
        </section>

        <hr className="opacity-20" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time.
            Material changes will be posted on this page with an updated revision date.
          </p>
        </section>

      </div>
    </div>
  );
}

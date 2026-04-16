import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Electricity Cost Calculator Philippines',
  description: 'Learn about how we collect and protect your data on our electricity cost calculator website.',
  alternates: {
    canonical: '/privacy-policy',
  },
  other: {
    'google-adsense-account': 'ca-pub-8022371531355895',
    'google-site-verification': 'jpnp6ZZrsofA3VgIxeLKbhmv8jmy0LWur8uvAOMXS_M',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Last Updated: April 2026</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This Privacy Policy describes how Electricity Cost Calculator Philippines (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3">1. Information You Provide</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>We do not collect any personal information such as your name, email address, or phone number</li>
              <li>All calculations are performed locally in your browser</li>
              <li>No data is sent to our servers during calculation</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3 mt-6">2. Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Time and date of visit</li>
              <li>Pages visited on our website</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3 mt-6">3. Cookies and Local Storage</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>We use cookies to improve user experience and analyze website traffic</li>
              <li>Local storage may be used to remember your preferences (e.g., theme selection)</li>
              <li>You can disable cookies in your browser settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>To improve and maintain our website</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Third-Party Services</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this website or other websites.</li>
              <li><strong>Google Analytics:</strong> We may use Google Analytics to analyze website traffic and improve our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>You have the right to access information we hold about you</li>
              <li>You can request deletion of your data (though we collect minimal personal data)</li>
              <li>You can opt-out of cookies through your browser settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href="mailto:zzomge@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                zzomge@gmail.com
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="flex justify-center gap-8 flex-wrap mb-4">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Home
            </Link>
            <Link href="/about-us" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              About Us
            </Link>
            <Link href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Contact Us
            </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © 2026 Electricity Cost Calculator Philippines. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

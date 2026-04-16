import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Electricity Cost Calculator Philippines',
  description: 'Get in touch with us for questions, feedback, or support regarding our electricity cost calculator.',
  alternates: {
    canonical: '/contact-us',
  },
  other: {
    'google-adsense-account': 'ca-pub-8022371531355895',
    'google-site-verification': 'jpnp6ZZrsofA3VgIxeLKbhmv8jmy0LWur8uvAOMXS_M',
  },
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We value your feedback and are here to help with any questions you may have about our Electricity Cost Calculator. Whether you have suggestions for improvement, found a bug, or just want to say hello, we&apos;d love to hear from you.
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The best way to reach us is through email. We typically respond within 24-48 hours.
            </p>
            <a 
              href="mailto:zzomge@gmail.com" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              zzomge@gmail.com
            </a>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">What Can We Help You With?</h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Questions about how to use the calculator</li>
              <li>Requests for new appliance types to be added</li>
              <li>Reporting bugs or technical issues</li>
              <li>Suggestions for improving the user experience</li>
              <li>Partnership or collaboration inquiries</li>
              <li>Advertising inquiries</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Response Time</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We strive to respond to all emails within 24-48 hours during business days (Monday to Friday). For urgent technical issues, please include detailed information about the problem you&apos;re experiencing, including your browser type and device.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Feedback</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Your feedback helps us improve our calculator and make it more useful for Filipino households. If you have ideas for new features or suggestions for how we can make the tool better, please don&apos;t hesitate to share them with us.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Privacy</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We respect your privacy. Any personal information you share with us will be handled according to our Privacy Policy. We do not sell or share your information with third parties.
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              Thank you for using Electricity Cost Calculator Philippines. We appreciate your support!
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
            <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Privacy Policy
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

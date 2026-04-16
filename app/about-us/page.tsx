import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Electricity Cost Calculator Philippines',
  description: 'Learn about our mission to help Filipinos calculate and save on electricity costs for home appliances.',
  alternates: {
    canonical: '/about-us',
  },
  other: {
    'google-adsense-account': 'ca-pub-8022371531355895',
    'google-site-verification': 'jpnp6ZZrsofA3VgIxeLKbhmv8jmy0LWur8uvAOMXS_M',
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Us</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Electricity Cost Calculator Philippines was created with a simple yet important mission: to help Filipino households better understand and manage their electricity consumption. We believe that awareness is the first step toward saving money and using energy more efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Why We Built This Tool</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              In the Philippines, electricity costs can be a significant portion of household expenses. With rising energy prices and the increasing number of home appliances, many families struggle to understand how much each device contributes to their monthly Meralco bill.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We created this calculator to provide a simple, accessible way for anyone to estimate the electricity costs of their home appliances. Whether you&apos;re trying to decide between buying a more energy-efficient refrigerator or wondering how much your air conditioner costs to run, our tool helps you make informed decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Free Calculator:</strong> No cost, no registration required</li>
              <li><strong>Comprehensive Appliance Database:</strong> Pre-loaded data for common Filipino household appliances</li>
              <li><strong>Flexible Calculations:</strong> Calculate daily, monthly, and yearly costs</li>
              <li><strong>Meralco Rate Integration:</strong> Uses current Philippine electricity rates for accurate estimates</li>
              <li><strong>Mobile-Friendly:</strong> Works seamlessly on smartphones and tablets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Our calculator uses the power consumption (watts) of each appliance and multiplies it by your usage time and the current electricity rate per kilowatt-hour (kWh). This gives you an accurate estimate of how much each appliance costs to operate.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All calculations are performed locally in your browser, ensuring your privacy and providing instant results without any delay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Commitment</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We are committed to continuously improving our tool based on user feedback and changing electricity rates. Our goal is to remain the most trusted and user-friendly electricity calculator for Filipino households.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe that small changes in energy usage can lead to significant savings over time. By helping you understand your electricity consumption, we hope to contribute to a more energy-efficient Philippines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Please note that our calculator provides estimates based on average power consumption and standard electricity rates. Your actual electricity bill may vary depending on factors such as specific appliance models, actual usage patterns, and your particular electricity provider&apos;s rates and fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Have questions, suggestions, or feedback? We&apos;d love to hear from you. Reach out to us at{' '}
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
            <Link href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Contact Us
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

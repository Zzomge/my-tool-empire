import data from './data.json';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Metadata } from 'next';


export async function generateStaticParams() {
  // ฟังก์ชันนี้จะบอก Next.js ว่ามี slug อะไรบ้างที่ต้องสร้างหน้า HTML รอไว้
  return data.map((item) => ({
    slug: item.slug,
  }));
}

// (แถม) เพื่อความชัวร์ ให้ใส่บรรทัดนี้ไว้ด้านบนสุดของไฟล์ด้วยครับ
export const dynamicParams = false;

const Calculator = dynamic(() => import('./Calculator'), {
  loading: () => <div style={{ padding: '16px', color: '#9ca3af' }}>Loading...</div>,
  preload: true
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = data.find((row) => row.slug === slug);
  
  if (!item) {
    return {
      title: 'Tool Not Found',
      description: 'The requested tool was not found.'
    };
  }

  return {
    title: `${item.name} Electricity Cost Calculator | Calculate Energy Costs in Philippines`,
    description: `Calculate how much it costs to run your ${item.name} in the Philippines. Based on ${item.wattage}W power consumption. Get daily, monthly, and yearly electricity costs. Save money on your Meralco bill.`,
    keywords: `${item.name}, electricity cost calculator, energy cost, Philippines electric bill, Meralco rate, ${item.category} power consumption, save electricity Philippines`,
    openGraph: {
      title: `${item.name} Electricity Cost Calculator`,
      description: `Calculate electricity costs for ${item.name} in the Philippines. Save money on your electric bill.`,
      type: 'website',
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function ToolPage({ params }) {
  const { slug } = await params;

  const item = data.find((row) => row.slug === slug);

  if (!item) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Tool Not Found</h1>
          <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none' }}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${item.name} Electricity Cost Calculator`,
    description: `Calculate electricity costs for ${item.name} in the Philippines. Based on ${item.wattage}W power consumption.`,
    url: `https://meralcocalc.vercel.app/${slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PHP',
    },
    featureList: [
      'Calculate daily electricity cost',
      'Calculate monthly electricity cost',
      'Calculate yearly electricity cost',
      'Energy consumption tracking',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px 16px' }}>
          <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
            ← Back
          </Link>

          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
            {item.name}
          </h1>
          <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
            {item.category} • {item.wattage}W • {(item.wattage / 1000).toFixed(2)} kWh/h
          </p>

          <Calculator wattage={item.wattage} />

          <div style={{ marginTop: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
              About {item.name}
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>{item.description}</p>

            {item.detailedGuide && (
              <>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px', marginTop: '24px' }}>
                  Detailed Guide: {item.name} in the Philippines
                </h2>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>{item.detailedGuide}</p>
              </>
            )}

            {item.comparison && (
              <>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px', marginTop: '24px' }}>
                  Energy Comparison
                </h2>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
                  <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>{item.comparison}</p>
                </div>
              </>
            )}

            {item.faq && item.faq.length > 0 && (
              <>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px', marginTop: '24px' }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ color: '#d1d5db', lineHeight: '1.8' }}>
                  {item.faq.map((question, index) => (
                    <div key={index} style={{ marginBottom: '12px' }}>
                      <p style={{ fontWeight: '600', color: '#f3f4f6', marginBottom: '4px' }}>Q: {question}</p>
                      <p style={{ color: '#9ca3af', fontSize: '14px' }}>A: This calculator helps you estimate the electricity cost based on your {item.name}'s wattage ({item.wattage}W) and your usage hours. Adjust the rate to match your actual Meralco bill for accurate results.</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px', marginTop: '24px' }}>
              Energy Saving Tips for {item.name}
            </h2>
            <ul style={{ color: '#d1d5db', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Use your {item.name} only when needed</li>
              <li style={{ marginBottom: '8px' }}>Maintain your {item.name} regularly for optimal efficiency</li>
              <li style={{ marginBottom: '8px' }}>Consider energy-efficient models when replacing</li>
              <li style={{ marginBottom: '8px' }}>Use during off-peak hours if possible</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px', marginTop: '24px' }}>
              How to Calculate Electricity Cost in the Philippines
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Electricity cost in the Philippines is calculated based on your appliance's power consumption (watts) and usage time. 
              The formula is: Cost = (Watts × Hours × Rate) / 1000. The current residential electricity rate in the Philippines 
              averages around 9-12 PHP per kWh (Meralco rates), but may vary depending on your distribution utility and usage tier.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import data from './[slug]/data.json';

interface Tool {
  name: string;
  slug: string;
  wattage: number;
  category: string;
  description: string;
}

const categoryIcons: Record<string, string> = {
  Kitchen: '🍳',
  Entertainment: '📺',
  Cooling: '❄️',
  Office: '💼',
  Health: '🏥',
  Laundry: '🧺',
  Cleaning: '🧹'
};

export default function HomeContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['All', ...Object.keys(categoryIcons)];

  const filteredAndGroupedTools = useMemo(() => {
    const filtered = data.filter((tool: Tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        tool.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const grouped = filtered.reduce((acc: Record<string, Tool[]>, tool: Tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    }, {});

    return grouped;
  }, [searchTerm, selectedCategory]);

  // Simulate loading for smooth UX
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Electricity Cost Calculator Philippines',
    description: 'Free electricity cost calculator for home appliances in the Philippines',
    url: 'https://meralcocalc.vercel.app',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PHP',
    },
    featureList: [
      'Calculate electricity costs for multiple appliances',
      'Daily, monthly, and yearly cost calculations',
      'Philippines-specific electricity rates',
      'Energy saving tips',
    ],
  };

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', border: '4px solid rgba(255,255,255,0.1)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <p style={{ color: '#9ca3af', marginTop: '16px' }}>Loading appliances...</p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Electricity Cost Calculator Philippines
            </h1>
            <p style={{ fontSize: '16px', color: '#d1d5db', maxWidth: '500px', margin: '0 auto' }}>
              Calculate electricity costs for your home appliances and save money on your Meralco bill
            </p>
          </div>

          {/* Search and Filter */}
          <div style={{ marginBottom: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search appliances..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '12px 16px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px'
              }}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} style={{ backgroundColor: '#0f172a' }}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
              Why Use Our Calculator?
            </h2>
            <ul style={{ color: '#d1d5db', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Accurate calculations based on Philippines electricity rates</li>
              <li style={{ marginBottom: '8px' }}>Support for 500+ home appliances</li>
              <li style={{ marginBottom: '8px' }}>Daily, monthly, and yearly cost breakdowns</li>
              <li style={{ marginBottom: '8px' }}>Energy saving tips for each appliance</li>
              <li style={{ marginBottom: '8px' }}>100% free to use</li>
            </ul>
          </div>

          {Object.entries(filteredAndGroupedTools).map(([category, items]: [string, Tool[]]) => (
            <div key={category} style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                {categoryIcons[category] || '🔌'} {category} Appliances ({items.length})
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                {items.map((tool: Tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    prefetch={true}
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '8px', 
                      padding: '16px',
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.2s, background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>{tool.name}</h3>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>{tool.wattage}W</p>
                    <p style={{ color: '#60a5fa', fontSize: '12px', marginTop: '8px' }}>Calculate cost →</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(filteredAndGroupedTools).length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 16px' }}>
              <p style={{ color: '#9ca3af', fontSize: '16px' }}>No appliances found matching your search.</p>
            </div>
          )}

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
              How to Calculate Electricity Cost in the Philippines
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Electricity cost in the Philippines is calculated based on your appliance's power consumption (in watts) and usage time. 
              The current residential electricity rate in the Philippines averages around 9-12 PHP per kWh (Meralco rates), but may vary depending on your distribution utility and usage tier.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              <strong>Formula:</strong> Cost = (Watts × Hours × Rate) / 1000
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              Our calculator helps you understand how much each appliance costs to run, so you can make informed decisions about your energy usage and save money on your electric bill.
            </p>
          </div>

          <footer style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <Link href="/about-us" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                About Us
              </Link>
              <Link href="/contact-us" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                Contact Us
              </Link>
              <Link href="/privacy-policy" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                Privacy Policy
              </Link>
            </div>
            <p style={{ color: '#6b7280', fontSize: '12px' }}>
              © 2026 Electricity Cost Calculator Philippines. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

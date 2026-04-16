import { NextResponse } from 'next/server';
import data from '../../[slug]/data.json';
import fs from 'fs';
import path from 'path';

export async function POST() {
  const baseUrl = 'https://meralcocalc.vercel.app';

  const urls = [
    { url: baseUrl, priority: 1, changeFreq: 'daily' },
    { url: `${baseUrl}/about-us`, priority: 0.5, changeFreq: 'monthly' },
    { url: `${baseUrl}/contact-us`, priority: 0.5, changeFreq: 'monthly' },
    { url: `${baseUrl}/privacy-policy`, priority: 0.5, changeFreq: 'monthly' },
    ...data.map((tool: any) => ({ url: `${baseUrl}/${tool.slug}`, priority: 0.8, changeFreq: 'monthly' }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u: any) => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${u.changeFreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(process.cwd(), 'public/sitemap_a.xml');
  fs.writeFileSync(sitemapPath, xml);

  return NextResponse.json({
    urls: urls.length,
    sitemap: 'sitemap_a.xml'
  });
}
